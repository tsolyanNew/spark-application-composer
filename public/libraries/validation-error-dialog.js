export class Validation {
    constructor(){}

    initializeValidationErrorDialog() {
        $('#validation-dialog-ok').click(this.handleValidationClose);
        $('#validation-dialog-close').click(this.handleValidationClose);
    }

    handleValidationClose() {
        $('#dialog-validation-error').modal('hide');
    }

    showValidationErrorDialog(validations) {
        const errorDiv = $('#dialog-validation-error-field');
        errorDiv.empty();
        validations.forEach(validation => {
            $('<h3>' + validation.header + '</h3>').appendTo(errorDiv);
            const list = $('<ul>');
            validation.messages.forEach(f => { $('<li>' + f + '</li>').appendTo(list); });
            $('</ul>').appendTo(list);
            list.appendTo(errorDiv);
        });
        $('#dialog-validation-error').modal('show');
    }
}
