import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';
import { e as eFormField } from './form-field.model-kUcBqA0i.js';

const inputFieldCss = "";

const InputField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    isInvalid;
    isDisabled;
    isHidden;
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
            return null;
        }
        const inputType = this.field.fieldType == eFormField.password
            ? 'password'
            : this.field.fieldType == eFormField.phone
                ? 'tel'
                : 'text';
        return (h("section", null, h("input", { id: this.field.key, type: inputType, autoComplete: "off", disabled: this.isDisabled, placeholder: this.field.placeholder || '', value: this.field.value, class: `${this.isInvalid ? 'invalid' : 'valid'} ${this.isTouched ? 'touched' : 'untouched'}`, onInput: (e) => this.onValueChange(e), onBlur: this.handleBlur.bind(this) }), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
InputField.style = inputFieldCss;

export { InputField as input_field };
//# sourceMappingURL=input-field.entry.js.map
