import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';

const dateFieldCss = "";

const DateField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    isInvalid;
    isDisabled;
    isHidden;
    isTouched = false;
    valueChanged;
    fieldBlurred;
    onValueChange(e) {
        const value = e.target.value;
        this.valueChanged.emit({ key: this.field.key, value });
    }
    handleBlur() {
        this.isTouched = true;
        this.fieldBlurred.emit({ key: this.field.key });
    }
    render() {
        if (this.isHidden) {
            return null;
        }
        return (h("section", null, h("input", { id: this.field.key, type: "date", autoComplete: "off", disabled: this.isDisabled, placeholder: this.field.placeholder || '', class: `${this.isInvalid ? 'invalid' : ''} ${this.isTouched ? 'touched' : 'untouched'}`, onInput: (e) => this.onValueChange(e), onBlur: this.handleBlur.bind(this) }), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
DateField.style = dateFieldCss;

export { DateField as date_field };
//# sourceMappingURL=date-field.entry.js.map
