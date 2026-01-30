import { r as registerInstance, a as createEvent, h } from './index-CgIiIA7J.js';
import { e as eFormField } from './form-field.model-kUcBqA0i.js';

const mapper = new Map([
    ['legend', 'form-legend'],
    ['input', 'input-field'],
    ['password', 'input-field'],
    ['select', 'select-field'],
    ['textarea', 'textarea-field'],
    ['checkbox', 'checkbox-field'],
    ['toggle', 'toggle-field'],
    ['date', 'date-field'],
    ['radio', 'radio-field'],
    ['phone', 'phone-number-field'],
    ['file', 'file-field'],
    ['number', 'number-field'],
    ['typeahead', 'typeahead-field'],
]);

function evaluateRule(rule, fieldsMap) {
    const logic = rule.logic ?? 'AND';
    const results = rule.conditions.map(condition => {
        const targetField = fieldsMap.get(condition.fieldKey);
        if (!targetField)
            return false;
        const targetValue = targetField.value;
        switch (condition.operator) {
            case 'eq': return targetValue === condition.value;
            case 'neq': return targetValue !== condition.value;
            case 'gt': return Number(targetValue) > Number(condition.value);
            case 'lt': return Number(targetValue) < Number(condition.value);
            case 'isValid': return targetField.errors.length === 0;
            case 'isNotEmpty':
                return targetValue !== null &&
                    targetValue !== undefined &&
                    targetValue !== '' &&
                    !(Array.isArray(targetValue) && targetValue.length === 0);
            case 'isEmpty':
                return targetValue === null ||
                    targetValue === undefined ||
                    targetValue === '' ||
                    (Array.isArray(targetValue) && targetValue.length === 0);
            case 'matches':
                if (typeof targetValue !== 'string' || typeof condition.value !== 'string') {
                    return false;
                }
                const regex = new RegExp(condition.value);
                return regex.test(targetValue);
            default:
                return false;
        }
    });
    // apply AND / OR
    if (logic === 'AND') {
        return results.every(Boolean);
    }
    else {
        return results.some(Boolean);
    }
}

const formBuilderComponentCss = "/* * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.wd-custom-form {\n    padding-top: var(--form-builder-padding-top, 24px);\n    padding-right: var(--form-builder-padding-right, 16px);\n    padding-bottom: var(--form-builder-padding-bottom, 24px);\n    padding-left: var(--form-builder-padding-left, 16px);\n}\n\n.field-col-span-1 {\n    grid-column: span 1 / span 1;\n\n    @media (min-width: 575px) {\n        grid-column: span 1 / span 1;\n    }\n}\n\n.field-col-span-2 {\n    grid-column: span 1 / span 1;\n\n    @media (min-width: 575px) {\n        grid-column: span 2 / span 2;\n    }\n}\n\n.field-col-span-3 {\n    grid-column: span 1 / span 1;\n\n    @media (min-width: 575px) {\n        grid-column: span 3 / span 3;\n    }\n}\n\n.field-col-span-4 {\n    grid-column: span 1 / span 1;\n\n    @media (min-width: 575px) {\n        grid-column: span 4 / span 4;\n    }\n} */\n\n.form-fields-grid {\n    /* display: grid;\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n    row-gap: var(--grid-y-gap, 24px);\n    column-gap: var(--grid-x-gap, 16px);\n\n    @media (min-width: 575px) {\n        grid-template-columns: repeat(4, minmax(0, 1fr));\n    } */\n\n    /* .field-error {\n        color: var(--field-error-color, #dc3545);\n        font-family: var(--field-error-font-family, sans-serif);\n        font-size: var(--field-error-font-size, 12px);\n        font-weight: var(--field-error-font-weight, 400);\n        margin-top: var(--field-error-margin-top, 0px);\n    }\n\n    label {\n        font-family: var(--form-field-label-font-family, sans-serif);\n        color: var(--form-field-label-color, #7b8895);\n        order: var(--form-field-label-order, 1);\n        position: var(--form-field-label-position, static);\n        top: var(--form-field-label-top, auto);\n        left: var(--form-field-label-left, auto);\n        bottom: var(--form-field-label-bottom, auto);\n        right: var(--form-field-label-right, auto);\n        display: inline-block;\n        font-weight: var(--form-field-label-font-weight, 400);\n        font-size: var(--form-field-label-font-size, 14px);\n        background-color: var(--form-field-label-bg-color, transparent);\n        padding: var(--form-field-label-padding, 0);\n        transition: all ease-out 0.4s;\n    } */\n\n    [class*=\"-form-field\"] {\n        /* padding-top: var(--form-field-padding-top, 0px);\n        padding-right: var(--form-field-padding-right, 0px);\n        padding-bottom: var(--form-field-padding-bottom, 0px);\n        padding-left: var(--form-field-padding-left, 0px);\n\n        display: flex;\n        flex-direction: var(--form-field-flex-direction, column);\n        gap: var(--form-field-gap, 8px); */\n\n        input,\n        select,\n        textarea {\n            /* width: 100%;\n            max-width: 100%;\n            height: var(--form-field-control-height, 48px);\n            border-top-left-radius: var(--form-field-control-border-top-left-radius, 0.25rem);\n            border-top-right-radius: var(--form-field-control-border-top-right-radius, 0.25rem);\n            border-bottom-left-radius: var(--form-field-control-border-bottom-left-radius, 0.25rem);\n            border-bottom-right-radius: var(--form-field-control-border-bottom-right-radius, 0.25rem);\n            background-color: var(--form-field-control-bg-color, #fff);\n            border: 1px solid var(--form-field-control-border-color, #ced4da);\n            order: var(--form-field-control-order, 2);\n            color: var(--form-field-control-text-color, #495057);\n            font-size: var(--form-field-control-font-size, 14px);\n            font-family: var(--form-field-font-family, sans-serif);\n            transition: all ease-out 0.4s; */\n\n            /* +label {\n                color: var(--form-field-label-color, #7b8895);\n            } */\n\n            /* &:focus {\n                background-color: var(--form-field-control-focus-bg-color, #fff);\n                border-color: var(--form-field-control-focus-border-color, #86b7fe);\n                outline: none;\n\n                +label {\n                    color: var(--form-field-control-focus-label-color, #5b89ce);\n                }\n            }\n\n            &.invalid {\n                background-color: var(--form-field-control-invalid-bg-color, rgba(255, 175, 200, 0.50));\n                border-color: var(--form-field-control-invalid-border-color, #dc3545);\n                color: var(--form-field-control-invalid-text-color, #463333);\n\n                +label {\n                    color: var(--form-field-control-invalid-label-color, #dc3545);\n                }\n            } */\n\n            /* &:disabled {\n                opacity: 0.6;\n                cursor: not-allowed;\n\n                +label {\n                    opacity: 0.6;\n                    cursor: not-allowed;\n                }\n            } */\n        }\n    }\n\n}\n\n/* .file-size-limit {\n    font-weight: 400;\n    font-size: 12px;\n    color: #6c757d;\n    font-style: italic;\n} */";

const FormBuilderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.formUpdated = createEvent(this, "formUpdated", 7);
    }
    formId;
    formFields;
    language = 'en';
    actionUrl;
    sortedFields;
    formUpdated;
    connectedCallback() {
        if (!this.formFields)
            return;
        this.sortedFields = new Map(this.formFields.sort((a, b) => a.sequence - b.sequence).map(f => [f.key, f]));
        for (let field of this.sortedFields.values()) {
            field.errors = this.validateField(field);
        }
        this.evaluateAllRules();
    }
    handleFieldBlurred(event) {
        const field = this.sortedFields.get(event.detail.key);
        if (!field)
            return;
        Object.assign(field, {
            isPristine: false,
        });
        field.errors = this.validateField(field);
        this.evaluateAllRules();
        this.sortedFields = new Map(this.sortedFields);
    }
    handleValueChange(event) {
        const field = this.sortedFields.get(event.detail.key);
        if (!field)
            return;
        Object.assign(field, {
            value: event.detail.value,
        });
        field.errors = this.validateField(field);
        this.evaluateAllRules();
        this.sortedFields = new Map(this.sortedFields);
        this.formUpdated.emit({
            isValid: this.isFormValid(),
            formFields: [...this.formFields.values()]
                .filter(field => !field.hidden && !field.disabled && field.fieldType !== eFormField.legend)
                .reduce((obj, field) => {
                obj[field.key] = {
                    value: field.value,
                    errors: field.errors,
                };
                return obj;
            }, {}),
        });
    }
    validateField(field) {
        const value = field.fieldType == eFormField.file || field.fieldType == eFormField.multifile
            ? field
            : field.value;
        return field.validators.map(validator => validator(field.fieldType, value, this.language || 'en')).filter(error => error);
    }
    evaluateAllRules() {
        this.sortedFields.forEach(field => {
            let checkEnable = field.shouldEnable && field.fieldType !== eFormField.legend;
            let checkDisplay = field.shouldDisplay && field.fieldType !== eFormField.legend;
            // if (!field.shouldEnable || field.fieldType === eFormField.legend) return;
            if (checkEnable) {
                const shouldEnable = evaluateRule(field.shouldEnable, this.sortedFields);
                field.disabled = !shouldEnable;
                // Optional: clear value when disabled
                if (!shouldEnable) {
                    // field.value = null;
                    field.errors = [];
                    field.isPristine = true;
                }
            }
            if (checkDisplay) {
                const shouldDisplay = evaluateRule(field.shouldDisplay, this.sortedFields);
                field.hidden = !shouldDisplay;
                // Optional: clear value when disabled
                if (!shouldDisplay) {
                    field.value = null;
                    field.errors = [];
                    field.isPristine = true;
                }
            }
        });
        // Trigger rerender
        this.sortedFields = new Map(this.sortedFields);
    }
    componentWillRender() {
        if (!this.sortedFields)
            return;
        for (const field of this.sortedFields?.values()) {
            field.errors = this.validateField(field);
        }
    }
    isFormValid() {
        if (!this.sortedFields)
            return false;
        let isValid = true;
        for (const field of this.sortedFields.values()) {
            if (field.hidden || field.disabled)
                continue;
            if (field.errors.length) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }
    markAllFieldsTouched() {
        if (!this.sortedFields)
            return;
        this.sortedFields.forEach(field => {
            field.isPristine = false;
            field.errors = (field.hidden || field.disabled) ? [] : this.validateField(field);
        });
        this.sortedFields = new Map(this.sortedFields);
    }
    getFormValues() {
        return new Promise((resolve) => {
            const payload = {};
            if (!this.sortedFields)
                return payload;
            for (const field of this.sortedFields.values()) {
                if (field.fieldType === eFormField.legend)
                    continue;
                payload[field.key] = field.value;
            }
            resolve(payload);
        });
    }
    handleSubmit() {
        return new Promise((resolve, reject) => {
            this.evaluateAllRules();
            if (!this.isFormValid()) {
                this.markAllFieldsTouched();
                reject({
                    message: 'Form validation failed.',
                    formFields: [...this.formFields.values()]
                        .filter(field => !field.hidden && !field.disabled && field.fieldType !== eFormField.legend)
                        .reduce((obj, field) => {
                        obj[field.key] = {
                            value: field.value,
                            errors: field.errors,
                        };
                        return obj;
                    }, {}),
                });
                return;
            }
            const payload = [...this.sortedFields.values()]
                .filter(field => field.fieldType !== eFormField.legend)
                .reduce((object, field) => {
                object[field.key] = field.value;
                return object;
            }, {});
            if (this.actionUrl?.length) {
                // If actionUrl is provided, submit the form data to the URL
                const formElement = document.createElement('form');
                formElement.method = 'POST';
                formElement.action = this.actionUrl;
                formElement.style.display = 'none';
                for (const key in payload) {
                    const inputElement = document.createElement('input');
                    inputElement.type = 'hidden';
                    inputElement.name = key;
                    inputElement.value = payload[key];
                    formElement.appendChild(inputElement);
                }
                document.body.appendChild(formElement);
                formElement.submit();
                document.body.removeChild(formElement);
            }
            else {
                resolve(payload);
            }
        });
    }
    render() {
        if (!this.sortedFields) {
            return null;
        }
        const formContent = (h("div", { class: "form-fields-grid" }, [...this.sortedFields.values()].map((field, index) => {
            const error = field.errors.length && !field.isPristine && !field.hidden && !field.disabled ? (h("span", { class: "field-error", style: { order: '3' } }, field.errors[0])) : null;
            const attributes = {
                language: this.language || 'en',
                field,
                className: 'form-field-container', //`${field.key}-form-field`,
                part: `${field.key}-form-field`,
                isInvalid: field.errors.length && !field.isPristine,
                isDisabled: field.disabled ?? false,
                isHidden: field.hidden ?? false,
                value: field.value,
            };
            const checkableTypes = ['toggle', 'checkbox'];
            if (checkableTypes.includes(field.fieldType)) {
                Object.assign(attributes, { isChecked: field.value == true });
            }
            if (field.fieldType === eFormField.radio) {
                Object.assign(attributes, { value: field.value });
            }
            return (h("div", { class: `field-col-span-${field.size}`, key: index }, h(mapper.get(field.fieldType), { ...attributes }, error)));
        }), h("div", { class: "field-col-span-4" }, h("slot", null))));
        return (h("form", { class: "wd-custom-form", id: this.formId || '' }, formContent));
    }
};
FormBuilderComponent.style = formBuilderComponentCss;

export { FormBuilderComponent as form_builder };
//# sourceMappingURL=form-builder.entry.esm.js.map
