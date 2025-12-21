# Yaseer Form SDK

A lightweight JavaScript SDK to dynamically render and control **Yaseer Forms** on any website using a schema‑driven configuration.

The SDK loads the Yaseer Form Web Component on demand and provides full control over rendering, validation, conditional logic, submission, and lifecycle.

---

## ✨ Features
- 🧠 Schema‑driven dynamic forms
- 🚀 Easy integration via CDN
- 🌐 Arabic (`ar`) & English (`en`) support
- 🧩 Web Components–based

- 🔁 Conditional display & enable logic
- 📤 Programmatic submission
- 📥 Read form values on demand
- 🧹 Full lifecycle control

---

## 📦 Installation (CDN)

```html
<script src="https://cdn.jsdelivr.net/gh/waelfahed84/yaseer-form-cdn@v1.0.4/dist/sdk.min.js"></script>
```

---

## 🚀 Basic Usage

```html
<div id="form-container"></div>

<button class="cta" onclick="handleSubmit()">Click me</button>

<script>
  const formFields = [
            {
                sequence: 1,
                size: 2,
                key: "first-name",
                label: "First Name",
                placeholder: "First name",
                fieldType: 'input',
                value: '',
                validators: [{ 'required': true }, { 'isAlphabetic': true }, { 'minLength': 2 }, { 'maxLength': 30 }],
            },
            {
                sequence: 2,
                size: 2,
                key: "last-name",
                label: "Last Name",
                placeholder: "Last name",
                fieldType: 'input',
                value: '',
                validators: [{ 'required': true }, { 'isAlphabetic': true }, { 'minLength': 2 }, { 'maxLength': 30 }],
                shouldEnable: {
                    logic: 'AND',
                    conditions: [
                        {
                            fieldKey: 'first-name',
                            operator: 'isValid',
                        }
                    ]
                },
            },
            {
                sequence: 3,
                size: 2,
                key: "mobile-number",
                label: "Mobile Number",
                placeholder: "Mobile number",
                fieldType: 'phone',
                value: '',
                validators: [{ 'required': true }, { 'isPhoneNumber': true }],
            },
            {
                sequence: 4,
                size: 2,
                key: "email",
                label: "Email",
                placeholder: "Email",
                fieldType: 'input',
                value: '',
                validators: [{ 'required': true }, { 'isEmail': true }],
            },
            {
                sequence: 5,
                size: 4,
                key: "message",
                label: "Message",
                placeholder: "Add you message`",
                fieldType: 'textarea',
                value: 'resident',
                validators: [{ 'required': true }, { 'minLength': 5 }, { 'maxLength': 100 }],
            },
  ];

  const form = new YaseerForm({
    selector: '#form-container',
    slotSelector: '.cta',
    language: 'en',
    formId: 'contact-form',
    fields: formFields,
    on_submission_success(data) {
      console.log(data);
    },
    on_submission_failure(error) {
      console.error(error);
    }
  });

  async function handleSubmit(){
    const result = form.submitForm();
    console.log(result);
  }
</script>
```

## 🧱 Form Fields Schema

Each form field is defined as an object inside the `fields` array.

### Core Properties (All Fields)

| Property | Type | Description |
|-------|------|------------|
| `sequence` | number | Rendering order |
| `size` | 1–4 | Grid width (25% → 100%) |
| `key` | string | Unique field identifier |
| `label` | string | Field label |
| `placeholder` | string | Placeholder / description |
| `value` | any | Initial value |
| `validators` | array | Validation rules |

### special Properties (Select/ Typeahead/ radio)

| Property | Type | Description |
|-------|------|------------|
| `options` | {}[] | Options to be renderd |
| `optionLabel` | string | the object property to be used as a lable (ex. option.title) |
| `optionValue` | string | the object property to be used as a value (ex. option.value) |

### extra special Properties (radio)
| Property | Type | Description |
|-------|------|------------|
| `optionSize` | 1–4 | Grid width (25% → 100%) |


### extra special Properties (file)
| Property | Type | Description |
|-------|------|------------|
| `acceptedFiles` | string[] | ex. ['image/png'] |

---

## 🧩 Field Types

```ts
enum eFormField {
  input, password, select, textarea,
  checkbox, toggle, date, legend,
  radio, phone, file, number,
  typeahead
}
```

### Legend (Layout Only)
```js
{ fieldType: 'legend', label: 'Personal Information', placeholder: 'secondary paragraph' }
```

---

## 🔀 Conditional Logic

### `shouldDisplay` / `shouldEnable`

```js
shouldEnable: {
  logic: 'AND',
  conditions: [
    { fieldKey: 'first-name', operator: 'isNotEmpty', value: null }
  ]
},
shouldDisplay: {
  logic: 'AND',
  conditions: [
    { fieldKey: 'email', operator: 'isValid', value: null }
  ]
}
```
### Supported Operators

| Operator | Description |
|--------|------------|
| `eq` | Equals |
| `neq` | Not equals |
| `gt` / `lt` | Greater / Less than |
| `isValid` | No validation errors |
| `isEmpty` | Empty value |
| `isNotEmpty` | Has value |
| `matches` | Regex match |

---

## ✅ Validators (Field Validation)

Validators are defined as objects inside the `validators` array.

### Available Validators

| Validator | Usage | Description |
|---------|------|------------|
| `required` | `{ required: true }` | Required field |
| `min` | `{ min: 5 }` | Minimum number |
| `max` | `{ max: 10 }` | Maximum number |
| `minLength` | `{ minLength: 2 }` | Min string length |
| `maxLength` | `{ maxLength: 30 }` | Max string length |
| `maxSize` | `{ maxSize: 2 }` | Max file size (MB) |
| `isEmail` | `{ isEmail: true }` | Email format |
| `isPhoneNumber` | `{ isPhoneNumber: true }` | Phone validation |
| `pattern` | `{ pattern: '/^[23][0-9]{13}$/' }` | Regex validation |
| `isAlphabetic` | `{ isAlphabetic: true }` | Letters only |
| `isNumeric` | `{ isNumeric: true }` | Numbers only |
| `mustBeTruthy` | `{ mustBeTruthy: true }` | Checkbox required |

---

## 🛠️ SDK Methods

### `getFormValues()`
```js
await form.getFormValues();
```

### `submitForm()`
```js
await form.submitForm();
```

### `toggleFormLoader(state)`
```js
form.toggleFormLoader(true);
```

### `destroyForm()`
```js
form.destroyForm();
```

---

## 🌍 Global Access

```js
window.YaseerForm
```

---

# managable css variables (all fields)
```css
/* form builder */
--form-padding-top: 40px;
--form-padding-right: 20px;
--form-padding-bottom: 40px;
--form-padding-left: 20px;

/* form fields grid */
--form-fields-grid-y-gap: 24px;
--form-fields-grid-x-gap: 16px;

/* form field */
--form-field-display: flex;
--form-field-flex-direction: column;
--form-field-justify-content: flex-start;
--form-field-align-items: flex-start;
--form-field-padding-top: 0px;
--form-field-padding-inline-start: 0px;
--form-field-padding-bottom: 0px;
--form-field-padding-inline-end: 0px;
--form-field-gap: 4px;
--form-field-font-family: sans-serif;

/* form field error */
--form-field-control-error-color: #dc3545;
--form-field-control-error-font-family: sans-serif;
--form-field-control-error-font-size: 12px;
--form-field-control-error-font-weight: 400;
--form-field-control-error-margin-top: 0px;

/* form field control label */
--form-field-control-label-font-family: sans-serif;
--form-field-control-label-color: #7b8895;
--form-field-control-label-order: 1;
--form-field-control-label-position: static;
--form-field-control-label-top: auto;
--form-field-control-label-left: auto;
--form-field-control-label-bottom: auto;
--form-field-control-label-right: auto;
--form-field-control-label-font-weight: 400;
--form-field-control-label-font-size: 14px;
--form-field-control-label-bg-color: transparent;
--form-field-control-label-padding: 0;

/* form field control */
--form-field-control-border-top-left-radius: 0.5rem;
--form-field-control-border-top-right-radius: 0.5rem;
--form-field-control-border-bottom-left-radius: 0.5rem;
--form-field-control-border-bottom-right-radius: 0.5rem;
--form-field-control-focus-border-color: #86b7fe;
--form-field-control-valid-border-color: #ced4da;
--form-field-control-invalid-border-color: #dc3545;
--form-field-control-border-color: 1px solid #ced4da;
--form-field-control-text-color: #495057;
--form-field-control-valid-text-color: #495057;
--form-field-control-invalid-text-color: #463333;
--form-field-control-focus-label-color: #5b89ce;
--form-field-control-valid-label-color: #7b8895;
--form-field-control-invalid-label-color: #dc3545;
--form-field-control-bg-color: #fff;
--form-field-control-focus-bg-color: #fff;
--form-field-control-valid-bg-color: #fff;
--form-field-control-invalid-bg-color: rgba(255, 175, 200, 0.50);
--form-field-control-width: 100%;
--form-field-control-max-width: 100%;
--form-field-control-height: 48px;
--form-field-control-font-size: 14px;
--form-field-control-order: 2;
--form-field-control-padding: 0 12px;


/* form field textarea control */
--form-field-textarea-control-height: 96px;
--form-field-textarea-control-padding: 8px 12px;

/* form field file control */
--form-field-file-control-padding: 8px 8px;
--form-field-file-control-selector-width: 25%;
--form-field-file-control-selector-top: 50%;
--form-field-file-control-selector-transform: translateY(-50%);
--form-field-file-control-selector-height: 32px;
--form-field-file-control-selector-bg-color: purple;
--form-field-file-control-selector-color: white;
--form-field-file-control-selector-border-top: none;
--form-field-file-control-selector-border-right: none;
--form-field-file-control-selector-border-bottom: none;
--form-field-file-control-selector-border-left: none;
--form-field-file-control-selector-border-radius: 0.375rem;
--form-field-file-control-selector-font-size: 14px;
--form-field-file-control-selector-padding: 4px 12px;
--form-field-file-control-selector-margin-end: 8px;
--form-field-file-control-selector-hover-bg-color: rgb(96, 0, 96);

/* form field phone number control */
--form-field-phone-control-country-width: 25%;
--form-field-phone-control-country-font-size: 0.875rem;
--form-field-phone-control-separator-width: 1px;
--form-field-phone-control-separator-height: 50%;
--form-field-phone-control-separator-top: 50%;
--form-field-phone-control-separator-br-color: #ccc;

/* form field number control */
--form-field-number-control-button-width: 32px;
--form-field-number-control-button-height: 48px;
--form-field-number-control-button-bg-color: #e0e0e0;
--form-field-number-control-button-border: none;
--form-field-number-control-button-border-top-left-radius: 0.5rem;
--form-field-number-control-button-border-top-right-radius: 0.5rem;
--form-field-number-control-button-border-bottom-left-radius: 0.5rem;
--form-field-number-control-button-border-bottom-right-radius: 0.5rem;
--form-field-number-control-button-font-size: 1rem;
--form-field-number-control-button-font-weight: 500;
--form-field-number-control-button-color: #333;
--form-field-number-control-button-padding: 0;

/* form field checkbox control */
--form-field-checkbox-justify-content: flex-start;
--form-field-checkbox-gap: 12px;
--form-field-checkbox-label-order: 1;
--form-field-checkbox-control-size: 21px;
--form-field-checkbox-control-border-color: #ced4da;
--form-field-checkbox-control-border-radius: 0.25rem;
--form-field-checkbox-control-bg-color: #fff;
--form-field-checkbox-control-checked-border-color: purple;
--form-field-checkbox-control-checkmark-size: 13px;
--form-field-checkbox-control-checkmark-bg-color: rgba(13, 109, 253, 0);
--form-field-checkbox-control-checkmark-border-radius: 0.125rem;
--form-field-checkbox-control-checkmark-checked-size: 19px;
--form-field-checkbox-control-checkmark-checked-size: 19px;
--form-field-checkbox-control-checkmark-checked-bg-color: purple;
--form-field-checkbox-content-order: 2;
--form-field-checkbox-content-padding: 4px 0 0;
--form-field-checkbox-content-gap: 0.5rem;
--form-field-checkbox-content-label-font-size: 1rem;
--form-field-checkbox-content-label-font-weight: 500;
--form-field-checkbox-content-label-font-family: sans-serif;
--form-field-checkbox-content-label-color: #6c757d;
--form-field-checkbox-checked-content-label-color: #212529;
--form-field-checkbox-content-paragraph-font-size: 0.875rem;
--form-field-checkbox-content-paragraph-font-weight: 300;
--form-field-checkbox-content-paragraph-font-family: sans-serif;
--form-field-checkbox-content-paragraph-line-height: 1.3;
--form-field-checkbox-content-paragraph-color: #6c757d;
--form-field-checkbox-checked-content-paragraph-color: #6c757d;

/* form field toggle control */
--form-field-toggle-justify-content: flex-start;
--form-field-toggle-gap: 12px;
--form-field-toggle-label-order: 1;
--form-field-toggle-control-width: 34px;
--form-field-toggle-control-height: 24px;
--form-field-toggle-control-border-radius: 24px;
--form-field-toggle-control-border-color: transparent;
--form-field-toggle-control-bg-color: #ced4da;
--form-field-toggle-control-checked-border-color: transparent;
--form-field-toggle-control-checked-bg-color: purple;
--form-field-toggle-control-switcher-width: 20px;
--form-field-toggle-control-switcher-height: 20px;
--form-field-toggle-control-switcher-bg-color: #fff;
--form-field-toggle-control-switcher-border-radius: 24px;
--form-field-toggle-control-switcher-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
--form-field-toggle-content-order: 2;
--form-field-toggle-content-padding: 4px 0 0;
--form-field-toggle-content-gap: 0.5rem;
--form-field-toggle-content-label-font-size: 1rem;
--form-field-toggle-content-label-font-weight: 500;
--form-field-toggle-content-label-font-family: sans-serif;
--form-field-toggle-content-label-color: #6c757d;
--form-field-toggle-checked-content-label-color: #212529;
--form-field-toggle-content-paragraph-font-size: 0.875rem;
--form-field-toggle-content-paragraph-font-weight: 300;
--form-field-toggle-content-paragraph-font-family: sans-serif;
--form-field-toggle-content-paragraph-line-height: 1.3;
--form-field-toggle-content-paragraph-color: #6c757d;
--form-field-toggle-checked-content-paragraph-color: #6c757d;

--form-field-radio-justify-content: flex-start;
--form-field-radio-gap: 12px;
--form-field-radio-label-order: 1;
--form-field-radio-control-width: 21px;
--form-field-radio-control-height: 21px;
--form-field-radio-control-border-radius: 21px;
--form-field-radio-control-border-color: transparent;
--form-field-radio-control-bg-color: #ced4da;
--form-field-radio-control-checked-border-color: transparent;
--form-field-radio-control-checked-bg-color: purple;
--form-field-radio-control-switcher-width: 20px;
--form-field-radio-control-switcher-height: 20px;
--form-field-radio-control-switcher-bg-color: #fff;
--form-field-radio-control-switcher-border-radius: 24px;
--form-field-radio-content-order: 2;
--form-field-radio-content-padding: 4px 0 0;
--form-field-radio-content-gap: 0.5rem;
--form-field-radio-content-label-font-size: 1rem;
--form-field-radio-content-label-font-weight: 500;
--form-field-radio-content-label-font-family: sans-serif;
--form-field-radio-content-label-color: #6c757d;
--form-field-radio-checked-content-label-color: #212529;
--form-field-radio-content-paragraph-font-size: 0.875rem;
--form-field-radio-content-paragraph-font-weight: 300;
--form-field-radio-content-paragraph-font-family: sans-serif;
--form-field-radio-content-paragraph-line-height: 1.3;
--form-field-radio-content-paragraph-color: #6c757d;
--form-field-radio-checked-content-paragraph-color: #6c757d;

/* form field typeahead control */
--form-field-typeahead-control-dropdown-bg-color: #fff;
--form-field-typeahead-control-dropdown-border: 1px solid #ddd;
--form-field-typeahead-control-dropdown-border-radius: 6px;
--form-field-typeahead-control-dropdown-max-height: 260px;
--form-field-typeahead-control-dropdown-box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
--form-field-typeahead-control-dropdown-item-padding: 10px 12px;
--form-field-typeahead-control-dropdown-item-font-size: 14px;
--form-field-typeahead-control-dropdown-item-color: #212529;
--form-field-typeahead-control-dropdown-item-hover-bg-color: #f2f2f2;

/* CONTINUE FROM HERE */
--form-legend-flex-direction: column;
--form-legend-justify-content: center;
--form-legend-align-items: center;
--form-legend-bg-color: transparent;
--form-legend-border-radius: none;
--form-legend-padding-top: 1.5rem;
--form-legend-padding-bottom: 1rem;
--form-legend-padding-left: 0px;
--form-legend-padding-right: 0px;
--form-legend-border-top: 1px solid #dee2e6;
--form-legend-border-bottom: 1px solid #dee2e6;
--form-legend-margin-top: 0;
--form-legend-margin-right: 0;
--form-legend-margin-left: 0;
--form-legend-margin-bottom: 0;
--form-legend-gap: 4px;
--form-legend-title-font-family: sans-serif;
--form-legend-title-font-size: 18px;
--form-legend-title-font-weight: 600;
--form-legend-title-color: #212529;
--form-legend-title-text-align: center;
--form-legend-description-font-family: sans-serif;
--form-legend-description-font-size: 14px;
--form-legend-description-font-weight: 400;
--form-legend-description-color: #6c757d;
--form-legend-description-text-align: center;

--form-spinner-position: absolute;
--form-spinner-top: 0;
--form-spinner-left: 0;
--form-spinner-width: 0;
--form-spinner-height: 0;
--form-spinner-display: flex;
--form-spinner-justify-content: center;
--form-spinner-align-items: center;
--form-spinner-bg-color: rgba(255, 255, 255, 0.8);
--form-spinner-padding-top: 0;
--form-spinner-padding-right: 0;
--form-spinner-padding-bottom: 0;
--form-spinner-padding-left: 0;
--form-spinner-filter: blur(4px);
--form-spinner-z-index: 10;
--form-spinner-visible-width: 100%;
--form-spinner-visible-height: 100%;
```

## manage css variables of a specific form-field
```html
<style>
    yaseer-form::part(first-name-form-field) {
      --form-field-padding-inline-start: 40px;
      --form-field-control-bg-color: #fff;
      --form-field-control-focus-bg-color: #fff;
      --form-field-control-valid-bg-color: #fff;
    }
</style>
```

---

## Yaseer Form
By wael Abu Aisheh <https://www.linkedin.com/in/waelfahed84/>
## 📄 License
MIT © Yaseer Form
