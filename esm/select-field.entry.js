import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';

const selectFieldCss = "";

const SelectField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    isInvalid;
    isHidden;
    isDisabled;
    valueChanged;
    fieldBlurred;
    isTouched = false;
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
            console.log('Select field is hidden:', this.field.key, this.field.value);
            return null;
        }
        return (h("section", null, h("select", { id: this.field.key, class: `${this.isInvalid ? 'invalid' : ''} ${this.isTouched ? 'touched' : 'untouched'}`, disabled: this.isDisabled, onInput: (e) => this.onValueChange(e), onBlur: () => this.handleBlur() }, h("option", { value: "", selected: !this.field.value }, this.field.placeholder || 'Select an option'), this.field.options?.map(option => {
            const optionValue = option[this.field.optionValue];
            return (h("option", { value: optionValue, selected: optionValue === this.field.value }, option[this.field.optionLabel]));
        })), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
SelectField.style = selectFieldCss;

export { SelectField as select_field };
//# sourceMappingURL=select-field.entry.js.map
