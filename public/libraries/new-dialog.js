
export class NewDialog {
    newSaveFunction;
    newCancelFunction;
    constructor(){}

    initializeNewDialog() {
        $('#new-form-save').click(this.handleNewDialogSave);
        $('#new-form-cancel').click(this.handleNewDialogCancel);
        $('#new-form-close').click(this.handleNewDialogCancel);
        $('#add-new-id').keypress(e =>  {
            if (e.which === 13) {
                e.preventDefault();
                this.handleNewDialogSave();
            }
        });
        $('#dialog-new-form').on('shown.bs.modal', () => {
            $('#add-new-id').focus();
        });
    }

    handleNewDialogSave() {
        if (this.newSaveFunction) {
            this.newSaveFunction($('#add-new-id').val());
        }
        $('#dialog-new-form').modal('hide');
    }

    handleNewDialogCancel() {
        if (this.newCancelFunction) {
            this.newCancelFunction();
        }
        $('#dialog-new-form').modal('hide');
    }

    showNewDialog(saveFunction, cancelFunction) {
        this.newSaveFunction = saveFunction;
        this.newCancelFunction = cancelFunction;
        $('#add-new-id').val('');
        $('#dialog-new-form').modal('show');
    }
}

