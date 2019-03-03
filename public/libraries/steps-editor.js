let currentEditorStepId;
let defaultValues;
let saveStepName;

function initializeStepsEditor() {
    $('#branch-type input').checkboxradio({
        icon: false
    });
    $('#branch-type fieldset').controlgroup();

    $('#new-step-button').click(handleNewStep);
    $('#reset-step-button').click(handleResetStep);
    $('#save-step-button').click(saveStepChanges);
    $('#add-step-parameter-button').click(addParameter);
    $('#bulk-step-button').click(handleBulkAdd);

    $('#edit-displayName').focus();
}

function handleBulkAdd() {
    codeEditorSaveFunction = function(code) {
        saveBulkSteps(code, function() {
            currentEditorStepId = null;
            loadStepsUI();
            clearStepForm(true);
        });
    };
    showCodeEditorDialog('[]', 'json');
}

function saveStepChanges() {
    if (stepNeedsSave()) {
        const step = generateStepJson();
        if (step.id && step.id.trim().length === 0) {
            delete step.id;
        }
        // Ensure the step type has been set
        if (!step.type) {
            showValidationErrorDialog([
                {
                    header: 'Type',
                    messages: ['Type must be selected!']
                }
            ]);
        } else if (step.type === 'branch' && !_.find(step.params, (p => p.type === 'result'))) {
            // Validate the branch step to ensure that at least 1 result parameter exists
            showValidationErrorDialog([
                {
                    header: 'Parameters',
                    messages: ['At least one parameter of type Branch Result is required when step type is Branch!']
                }
            ]);
        } else {
            saveStep(step, function () {
                currentEditorStepId = null;
                defaultValues = null;
                saveStepName = step.displayName;
                // This makes an asynchronous call to the server
                loadStepsUI();
            });
        }
    }
}

/**
 * Add a new parameter row to the parameters panel
 */
function addParameter() {
    var formDiv = createParameterForm();
    formDiv.find('select').selectmenu();
    formDiv.find('#' + formDiv.attr('cbId')).checkboxradio();
    formDiv.appendTo($('#edit-step-parameters'));
}

/**
 * Populate the form with existing step data
 */
function handleStepSelection() {
    if (stepNeedsSave()) {
        showClearFormDialog(
            function () {
                clearStepForm(false);
                populateStepForm(this);
                currentEditorStepId = $('#edit-stepId').text();
            },
            function () {
                $('#step-selector .ui-selected').removeClass('ui-selected');
                $('#step-selector').children('#' + currentEditorStepId).addClass('ui-selected');
            }
        );
    } else {
        clearStepForm(false);
        populateStepForm(this);
    }
}

/**
 * Populates the form
 */
function populateStepForm(el) {
    $('.ui-selected', el).each(function() {
        currentEditorStepId = $(this).attr('id');
        defaultValues = {};
        const currentStep = getStep(currentEditorStepId);
        $('#edit-stepId').text(currentEditorStepId);
        $('#edit-displayName').val(currentStep.displayName);
        $('#edit-description').val(currentStep.description);
        $('#edit-engineMeta').val(currentStep.engineMeta.spark);
        $('#step-creationDate').text(currentStep.creationDate);
        $('#step-modifiedDate').text(currentStep.modifiedDate);
        $('#' + currentStep.type.toLowerCase() + 'Radio').attr('checked', true).change();
        // Build the parameters panel
        const parametersDiv = $('#edit-step-parameters');
        parametersDiv.empty();
        let formDiv;
        let select;
        let checkbox;
        _.forEach(currentStep.params, (param) => {
            formDiv = createParameterForm();
            formDiv.appendTo(parametersDiv);
            // Decorate the components
            select = formDiv.find('select');
            select.selectmenu();
            checkbox = formDiv.find('#' + formDiv.attr('cbId'));
            checkbox.checkboxradio();
            // Set the values
            defaultValues[param.name] = param.defaultValue;
            formDiv.find('input[name="stepParamName"]').val(param.name);
            formDiv.find('input[name="stepParamDefaultValue"]').val(param.defaultValue);
            select.val(param.type);
            select.selectmenu('refresh');
            if (param.required) {
                checkbox.attr('checked', true).change();
            }
        });
    });
}

/**
 * Generate a new parameter row.
 *
 * @returns Create the parameter row that can be appended to the parameters form.
 */
function createParameterForm() {
    const formDiv = $('<div class="form-group">');
    $('<label>Name:</label>').appendTo(formDiv);
    $('<input name="stepParamName" type="text"/>').appendTo(formDiv);
    const select = $('<select>');
    select.appendTo(formDiv);
    $('<option value="text">Text</option>').appendTo(select);
    $('<option value="boolean">Boolean</option>').appendTo(select);
    $('<option value="integer">Integer</option>').appendTo(select);
    $('<option value="script">Script</option>').appendTo(select);
    $('<option value="result">Branch Result</option>').appendTo(select);
    // Options
    $('</select>').appendTo(formDiv);
    const checkboxLabel = $('<label style="width: 100px; height: 15px; margin: 0 8px 0 8px;">Required</label>');
    const checkbox = $('<input name="stepParamRequire" type="checkbox">');
    checkbox.uniqueId();
    checkboxLabel.attr('for', checkbox.attr('id'));
    checkboxLabel.appendTo(formDiv);
    checkbox.appendTo(formDiv);
    $('<label>Default Value:</label>').appendTo(formDiv);
    const defaultValueInput = $('<input name="stepParamDefaultValue" type="text"/>');
    defaultValueInput.appendTo(formDiv);
    defaultValueInput.focusin(function() {
        codeEditorCloseFunction = function() {
            $('#add-step-parameter-button').focus();
            defaultValueInput.prop('disabled', false);
        };
        codeEditorSaveFunction = function(value) {
            defaultValues[formDiv.find('input[name="stepParamName"]').val()] = value;
            defaultValueInput.val(value);
        };
        if (select.val() === 'script') {
            showCodeEditorDialog(defaultValues[formDiv.find('input[name="stepParamName"]').val()] || '', 'scala');
            $(this).prop('disabled', true);
        }
    });
    const button = $('<button class="ui-button ui-widget ui-corner-all ui-button-icon-only" title="Remove Parameter">');
    button.appendTo(formDiv);
    $('<span class="ui-icon ui-icon-minus"></span>').appendTo(button);
    $('</button>').appendTo(formDiv);
    button.click(function() {
        formDiv.remove();
    });
    $('</div>').appendTo(formDiv);
    formDiv.attr('cbId', checkbox.attr('id'));
    return formDiv;
}

/**
 * Generate a JSON object based on the form data.
 * @returns The step json.
 */
function generateStepJson() {
    const step = {
        id: setStringValue($('#edit-stepId').text()),
        displayName: $('#edit-displayName').val(),
        description: $('#edit-description').val(),
        type: $('input[name=stepTypeRadio]:checked').val(),
        engineMeta: {
            spark: $('#edit-engineMeta').val()
        },
        params: [],
        creationDate: setStringValue($('#step-creationDate').text()),
        modifiedDate: setStringValue($('#step-modifiedDate').text())
    };

    // Gather parameters
    let param;
    $('#edit-step-parameters div').each(function() {
        param = {
            name: $(this).find('input[name="stepParamName"]').val(),
            type: $(this).find('select').val(),
            required: $(this).find('#' + $(this).attr('cbId')).is(':checked')
        };

        if ($(this).find('input[name="stepParamDefaultValue"]').val() !== '') {
            switch (param.type) {
                case 'integer':
                    param.defaultValue = parseInt($(this).find('input[name="stepParamDefaultValue"]').val());
                    break;
                case 'boolean':
                    param.defaultValue = $(this).find('input[name="stepParamDefaultValue"]').val().toLowerCase() === 'true';
                    break;
                case 'script':
                    param.defaultValue = defaultValues[param.name];
                    break;
                default:
                    param.defaultValue = $(this).find('input[name="stepParamDefaultValue"]').val();
            }
        }

        step.params.push(param);
    });

    return step;
}

function displayClearFormDialog() {
    showClearFormDialog(function () {
            clearStepForm(true);
        },
        function () {
            $('#step-selector .ui-selected').removeClass('ui-selected');
            $('#step-selector').children('#' + currentEditorStepId).addClass('ui-selected');
        });
}

/**
 * Handle the new button being clicked
 */
function handleNewStep() {
    if (stepNeedsSave()) {
        displayClearFormDialog();
    } else {
        clearStepForm(true);
    }
}

/**
 * Handle the reset button being clicked
 */
function handleResetStep() {
    if (stepNeedsSave()) {
        displayClearFormDialog();
    } else {
        clearStepForm(true);
    }
}

/**
 * Reset the editor form to a clean state.
 */
function clearStepForm(clearSelection) {
    currentEditorStepId = null;
    $('#edit-stepId').empty();
    $('#edit-displayName').val('');
    $('#edit-description').val('');
    $('#edit-engineMeta').val('');
    $('#step-creationDate').text('');
    $('#step-modifiedDate').text('');
    $('#pipelineRadio').removeAttr('checked').change();
    $('#branchRadio').removeAttr('checked').change();
    if (clearSelection) {
        $('#step-selector .ui-selected').removeClass('ui-selected');
    }
    defaultValues = {};
    $('#edit-step-parameters').empty();
}

/**
 * Determines if the form has unsaved changes
 * @returns {boolean}
 */
function stepNeedsSave() {
    const step = generateStepJson();
    if (step.id) {
        // Compare the objects
        return getObjectDiff(step, getStep(step.id)).length > 0;
    }
    var changed = !_.isEmpty(step.engineMeta.spark);
    _.forEach(_.keys(step).filter(p => p !== 'engineMeta' && p !== 'type'), function(property) {
        if (!_.isEmpty(step[property])) {
            changed = true;
        }
    });
    return changed;
}

/**
 * Helper function to perform a deep comparison
 * @param obj1 First object to be compared
 * @param obj2 Second object to be compared
 * @returns {string[]}
 */
function getObjectDiff(obj1, obj2) {
    return Object.keys(obj1).reduce((result, key) => {
        if (!obj2.hasOwnProperty(key)) {
            result.push(key);
        } else if (_.isEqual(obj1[key], obj2[key])) {
            const resultKeyIndex = result.indexOf(key);
            result.splice(resultKeyIndex, 1);
        }
        return result;
    }, Object.keys(obj2));
}

/**
 * Helper function that converts an empty string to undefined.
 * @param val The value to check.
 * @returns {undefined}
 */
function setStringValue(val) {
    return val && val.trim().length > 0 ? val : undefined;
}

function renderStepSelectionUI() {
    const stepSelector = $('#step-selector');
    stepSelector.empty();
    _.forEach(getSteps(), (step) => {
        // Build out the step editor control
        $('<li id="' + step.id + '" stepType="' + step.type + '" class="ui-widget-content">' + step.displayName + '</li>').appendTo(stepSelector);
        $('li #' + step.id).fitText(1.50);
    });
    stepSelector.selectable({
        stop: handleStepSelection,
        selected: function (event, ui) {
            $(ui.selected).addClass("ui-selected").siblings().removeClass("ui-selected");
        }
    });
    if (saveStepName) {
        clearStepForm(true);
        // Find an select the newly created step
        stepSelector.children('li').each(function() {
            if ($(this).text() === saveStepName) {
                $(this).addClass('ui-selected');
            }
        });
        populateStepForm(stepSelector);
        saveStepName = null;
    }
}
