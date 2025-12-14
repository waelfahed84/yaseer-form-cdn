import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';

const textareaFieldCss = "";

const TextareaField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    isHidden;
    isDisabled;
    isInvalid;
    valueChanged;
    fieldBlurred;
    onValueChange(e) {
        const value = e.target.value;
        this.valueChanged.emit({ key: this.field.key, value });
    }
    handleBlur() {
        this.fieldBlurred.emit({ key: this.field.key });
    }
    render() {
        if (this.isHidden) {
            return null;
        }
        return (h("section", null, h("textarea", { id: this.field.key, placeholder: this.field.placeholder || '', value: this.field.value, class: `${this.isInvalid ? 'invalid' : ''}`, onInput: (e) => this.onValueChange(e), onBlur: this.handleBlur.bind(this), disabled: this.isDisabled }), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
TextareaField.style = textareaFieldCss;

export { TextareaField as textarea_field };
//# sourceMappingURL=textarea-field.entry.js.map
