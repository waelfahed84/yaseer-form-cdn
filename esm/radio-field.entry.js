import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';

const radioFieldCss = "";

const RadioField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    value;
    isInvalid;
    isDisabled;
    isHidden;
    isTouched = false;
    // @State() value: any;
    valueChanged;
    fieldBlurred;
    connectedCallback() {
        // this.value = this.field.value;
    }
    onValueChange(value) {
        // const value = (e.target as HTMLInputElement).value;
        // this.value = value;
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
        return (h("section", { class: "radio-options-container" }, this.field.options?.map((option) => (h("section", { class: `radio-col-span-${this.field.optionSize || 1} radio-field-section` }, h("label", null, h("input", { type: "radio", hidden: true, id: `radio-option-${option[this.field.optionValue]}`, name: this.field.key, value: option[this.field.optionValue], checked: this.value === option[this.field.optionValue], disabled: this.isDisabled, onChange: () => this.onValueChange(option[this.field.optionValue]), class: `${this.value === option[this.field.optionValue] ? 'checked' : ''}`, onBlur: this.handleBlur.bind(this) }), h("span", null)), h("div", { class: `${this.value === option[this.field.optionValue] ? 'checked' : ''} ${this.isTouched ? 'touched' : ''} ${this.isInvalid ? 'invalid' : ''} checkbox-field-content` }, option[this.field.optionLabel] && (h("label", { htmlFor: `radio-option-${option[this.field.optionValue]}`, innerHTML: option[this.field.optionLabel] })), option[this.field.optionDescription] && (h("p", { innerHTML: option[this.field.optionDescription] })))))), h("slot", null)));
    }
};
RadioField.style = radioFieldCss;

export { RadioField as radio_field };
//# sourceMappingURL=radio-field.entry.js.map
