# Yaseer Form SDK (NOT PUBLISHED YET!)

A lightweight JavaScript SDK to dynamically render and control **Yaseer Forms** on any website using a schema‑driven configuration.

The SDK loads the Yaseer Form Web Component on demand and provides full control over rendering, validation, conditional logic, submission, and lifecycle.

---

## ✨ Features

- 🚀 Easy integration via CDN
- 🌐 Arabic (`ar`) & English (`en`) support
- 🧩 Web Components–based
- 🧠 Schema‑driven dynamic forms
- 🔁 Conditional display & enable logic
- 📤 Programmatic submission
- 📥 Read form values on demand
- 🧹 Full lifecycle control

---

## 📦 Installation (CDN)

```html
<script src="https://cdn.jsdelivr.net/gh/USER/REPO@v1.0.0/dist/sdk.min.js"></script>
```

---

## 🚀 Basic Usage

```html
<div id="form-container"></div>

<script>
  const form = new YaseerForm({
    selector: '#form-container',
    language: 'en',
    formId: 'contact-form',
    fields: [...],
    on_submission_success(data) {
      console.log(data);
    },
    on_submission_failure(error) {
      console.error(error);
    }
  });
</script>
```

---

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

---

## 🧩 Field Types

```ts
enum eFormField {
  input, password, select, textarea,
  checkbox, toggle, date, legend,
  radio, phone, file, multifile,
  number, typeahead
}
```

### Legend (Layout Only)
```js
{ fieldType: 'legend', label: 'Personal Information' }
```

---

## 🔀 Conditional Logic

### `shouldDisplay` / `shouldEnable`

```js
shouldEnable: {
  logic: 'AND',
  conditions: [
    { fieldKey: 'country', operator: 'isNotEmpty' }
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
| `asyncValidate` | `{ asyncValidate: { url, message } }` | Server validation |

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

## 📄 License
MIT © Yaseer
