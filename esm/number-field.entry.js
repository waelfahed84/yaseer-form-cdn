import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';

const numberFieldCss = "";

const NumberField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    // @Prop() value: any
    isInvalid;
    isDisabled;
    isHidden;
    value;
    isTouched = false;
    valueChanged;
    fieldBlurred;
    onValueChange(e) {
        const value = e.target.value;
        this.value = Number(value);
        this.valueChanged.emit({ key: this.field.key, value: Number(value) });
    }
    handleBlur() {
        this.isTouched = true;
        this.fieldBlurred.emit({ key: this.field.key });
    }
    onDecrease() {
        this.value = Number(this.field.value || 0) > 0 ? Number(this.field.value) - 1 : 0;
        // this.valueChanged.emit({ key: this.field.key, value: Number(this.field.value || 0) > 0 ? Number(this.field.value) - 1 : 0 });
        this.valueChanged.emit({ key: this.field.key, value: this.value });
        this.handleBlur();
    }
    onIncrease() {
        this.value = Number(this.field.value || 0) + 1;
        // this.valueChanged.emit({ key: this.field.key, value: Number(this.field.value || 0) + 1 });
        this.valueChanged.emit({ key: this.field.key, value: this.value });
        this.handleBlur();
    }
    render() {
        if (this.isHidden) {
            return null;
        }
        return (h("section", { class: "number-field-section" }, h("div", { class: `${this.isInvalid ? 'invalid' : 'valid'} ${this.isTouched ? 'touched' : 'untouched'}` }, h("div", null, h("button", { type: 'button', onClick: this.onDecrease.bind(this), disabled: this.isDisabled }, "-")), h("input", { id: this.field.key, type: "number", autoComplete: "off", disabled: this.isDisabled, placeholder: this.field.placeholder || '', value: !isNaN(this.value) ? Number(this.value) : 0, class: `${this.isInvalid ? 'invalid' : 'valid'} ${this.isTouched ? 'touched' : 'untouched'}`, onInput: (e) => this.onValueChange(e), onBlur: this.handleBlur.bind(this) }), h("div", null, h("button", { type: 'button', disabled: this.isDisabled, onClick: this.onIncrease.bind(this) }, "+"))), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
NumberField.style = numberFieldCss;

export { NumberField as number_field };
//# sourceMappingURL=number-field.entry.js.map
