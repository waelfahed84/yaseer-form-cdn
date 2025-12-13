# Yaseer Form SDK – Fields Specification

This document describes the **Form Fields Schema** used by Yaseer Form SDK.
Each field object defines **how the form element is rendered, validated, and controlled dynamically**.

---

## 🧱 Base Field Properties (All Fields)

These properties are supported by **all field types**.

### `sequence` (required)
```ts
sequence: number
```
Defines the rendering order of the field inside the form.
Fields are rendered in ascending order.

---

### `size` (required)
```ts
size: 1 | 2 | 3 | 4
```

Controls the width of the field in a 4-column grid layout.

| Value | Width |
|------|-------|
| 1 | 25% |
| 2 | 50% |
| 3 | 75% |
| 4 | 100% |

---

### `key` (required)
```ts
key: string
```

Unique identifier for the field.
Used for:
- Returned form values
- Conditional logic (`shouldDisplay`, `shouldEnable`)

---

### `label`
```ts
label?: string
```
Field label displayed to the user.

---

### `placeholder`
```ts
placeholder?: string
```
Placeholder or descriptive text shown inside the field.

---

### `value`
```ts
value?: any
```
Initial value of the field.

---

### `validators`
```ts
validators?: Array<Record<string, any>>
```

Validation rules applied to the field.

#### Examples:
```js
validators: [
  { required: true },
  { minLength: 2 },
  { maxLength: 30 },
  { isEmail: true }
]
```

---

## 🧩 Field Types (`fieldType`)

```ts
export enum eFormField {
  input = 'input',
  password = 'password',
  select = 'select',
  textarea = 'textarea',
  checkbox = 'checkbox',
  toggle = 'toggle',
  date = 'date',
  legend = 'legend',
  radio = 'radio',
  phone = 'phone',
  file = 'file',
  multifile = 'multifile',
  number = 'number',
  typeahead = 'typeahead',
}
```

---

## 🧾 Field Type Details

### 🔹 Input
```js
{
  fieldType: 'input',
  key: 'first-name',
  label: 'First Name',
  value: '',
}
```

---

### 🔹 Password
Same as input but masked.

---

### 🔹 Select
```js
{
  fieldType: 'select',
  options: [{ label, value }],
  optionLabel: 'label',
  optionValue: 'value'
}
```

---

### 🔹 Typeahead
Searchable select input.
Uses the same properties as `select`.

---

### 🔹 Radio
```js
{
  fieldType: 'radio',
  options: [{ label, value, description }],
  optionSize: number
}
```

---

### 🔹 Checkbox
```js
{
  fieldType: 'checkbox',
  value: false,
  validators: [{ mustBeTruthy: true }]
}
```

---

### 🔹 Textarea
Multi-line text input.

---

### 🔹 Phone
Phone number input with validation support.

---

### 🔹 Number
Numeric input field.

---

### 🔹 Date
Date picker input.

---

### 🔹 File
Single file upload.

---

### 🔹 MultiFile
Multiple file uploads.

---

### 🔹 Toggle
Boolean switch input.

---

### 🔹 Legend
```js
{
  fieldType: 'legend',
  label: 'Personal Information'
}
```

Used as a section title or separator.
Does not return a value.

---

## 🔀 Conditional Logic

### `shouldDisplay`
Controls whether the field is visible.

```js
shouldDisplay: {
  logic: 'AND',
  conditions: [
    {
      fieldKey: 'has-account',
      operator: 'eq',
      value: true
    }
  ]
}
```

---

### `shouldEnable`
Controls whether the field is enabled.

```js
shouldEnable: {
  logic: 'AND',
  conditions: [
    {
      fieldKey: 'country',
      operator: 'isNotEmpty'
    }
  ]
}
```

---

## 🧠 Notes

- Fields are schema-driven and fully dynamic
- Conditions react automatically to field value changes
- `legend` fields are for layout only

---

## 📄 License
MIT © Yaseer
