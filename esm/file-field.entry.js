import { r as registerInstance, a as createEvent, h } from './index-CgIiIA7J.js';

const fileFieldCss = "";

const FileField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.fieldBlurred = createEvent(this, "fieldBlurred", 7);
    }
    field;
    isInvalid;
    isDisabled;
    isHidden;
    isTouched = false;
    valueChanged;
    fieldBlurred;
    onValueChange(e) {
        const files = e.target.files;
        const file = files && files.length > 0 ? files[0] : null;
        this.valueChanged.emit({ key: this.field.key, value: file });
    }
    handleBlur() {
        this.isTouched = true;
        this.fieldBlurred.emit({ key: this.field.key });
    }
    render() {
        if (this.isHidden) {
            return null;
        }
        return (h("section", null, h("input", { id: this.field.key, type: "file", disabled: this.isDisabled, accept: this.field.acceptedFiles?.join(',') || '*/*', class: `${this.isInvalid ? 'invalid' : ''} ${this.isTouched ? 'touched' : 'untouched'}`, onChange: (e) => this.onValueChange(e), onBlur: this.handleBlur.bind(this) }), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
FileField.style = fileFieldCss;

export { FileField as file_field };
//# sourceMappingURL=file-field.entry.esm.js.map
