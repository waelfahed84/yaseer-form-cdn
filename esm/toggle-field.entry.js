import { r as registerInstance, a as createEvent, h } from './index-CgIiIA7J.js';

const toggleFieldCss = "";

const ToggleField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.fieldBlurred = createEvent(this, "fieldBlurred", 7);
    }
    field;
    isChecked;
    isInvalid;
    isHidden;
    isDisabled;
    isTouched = false;
    valueChanged;
    fieldBlurred;
    onValueChange(e) {
        const value = e.target.checked;
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
        return (h("section", { class: "toggle-field-section" }, h("label", null, h("input", { id: `${this.field.key}-checkbox-field`, type: "checkbox", disabled: this.isDisabled, checked: this.isChecked, onChange: (e) => this.onValueChange(e), onBlur: () => this.handleBlur(), hidden: true }), h("span", null)), h("div", { class: `${this.isChecked ? 'checked' : ''} ${this.isTouched ? 'touched' : ''} ${this.isInvalid ? 'invalid' : ''} checkbox-field-content` }, this.field.label && (h("label", { htmlFor: `${this.field.key}-checkbox-field`, innerHTML: this.field.label })), this.field.placeholder && (h("p", { innerHTML: this.field.placeholder })), h("slot", null)))
        // <Host>
        //   <label class="toggle-container">
        //     <span class={`toggle ${this.isChecked ? 'checked' : ''}`}> 
        //       <input
        //         type="checkbox"
        //         hidden
        //         checked={this.isChecked}
        //         disabled={this.isDisabled}
        //         onChange={(e) => this.onValueChange(e)}
        //         onBlur={() => this.handleBlur()}
        //       />
        //       <span class="switcher"></span>
        //     </span>
        //     <div class={`content ${this.isChecked ? 'checked' : ''}`}>
        //       {this.field.label && <h6 class="heading">{this.field.label}</h6>}
        //       {this.field.placeholder && <p class="description">{this.field.placeholder}</p>}
        //       <slot></slot>
        //     </div>
        //   </label>
        // </Host>
        );
    }
};
ToggleField.style = toggleFieldCss;

export { ToggleField as toggle_field };
//# sourceMappingURL=toggle-field.entry.esm.js.map
