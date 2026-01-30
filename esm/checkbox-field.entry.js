import { r as registerInstance, a as createEvent, h } from './index-CgIiIA7J.js';

const checkboxFieldCss = "";

const CheckboxField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.fieldBlurred = createEvent(this, "fieldBlurred", 7);
    }
    field;
    isChecked;
    isInvalid;
    isDisabled;
    isHidden;
    isTouched = false;
    valueChanged;
    fieldBlurred;
    onValueChange(e) {
        const value = e.target.checked;
        this.valueChanged.emit({ key: this.field.key, value });
    }
    handleBlur() {
        this.fieldBlurred.emit({ key: this.field.key });
    }
    render() {
        if (this.isHidden) {
            return null;
        }
        return (h("section", { class: "checkbox-field-section" }, h("label", null, h("input", { id: `${this.field.key}-checkbox-field`, type: "checkbox", disabled: this.isDisabled, checked: this.isChecked, onChange: (e) => this.onValueChange(e), onBlur: () => this.handleBlur(), hidden: true }), h("span", null, h("span", { class: "checkmark" }, h("svg", { width: "10", height: "8", viewBox: "0 0 10 8", fill: "none" }, h("path", { d: "M1.37051 3.56823L1.19379 3.39753L1.02005 3.57127L0.709698 3.88162L0.529829 4.06149L0.712789 4.23821L2.66358 6.1225L2.8403 6.2932L3.01404 6.11946L3.32439 5.80911L3.50426 5.62924L3.3213 5.45252L1.37051 3.56823Z", fill: "white", stroke: "white", "stroke-width": "0.5" }), h("path", { d: "M9.17597 1.53083L9.3542 1.35406L9.1767 1.17655L8.86636 0.866196L8.69036 0.690185L8.51358 0.865418L3.43709 5.89757L3.43695 5.89744L3.43032 5.90454L3.11997 6.23706L2.94896 6.4203L3.13262 6.59084L3.44297 6.87902L3.61878 7.04228L3.78913 6.87333L9.17597 1.53083Z", fill: "white", stroke: "white", "stroke-width": "0.5" }))))), h("div", { class: `${this.isChecked ? 'checked' : ''} ${this.isTouched ? 'touched' : ''} ${this.isInvalid ? 'invalid' : ''} checkbox-field-content` }, this.field.label && (h("label", { htmlFor: `${this.field.key}-checkbox-field`, innerHTML: this.field.label })), this.field.placeholder && (h("p", { innerHTML: this.field.placeholder })), h("slot", null))));
    }
};
CheckboxField.style = checkboxFieldCss;

export { CheckboxField as checkbox_field };
//# sourceMappingURL=checkbox-field.entry.esm.js.map
