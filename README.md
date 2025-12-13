# Yaseer Form SDK

A lightweight JavaScript SDK to dynamically render and control **Yaseer Forms** on any website using a simple configuration-based API.

The SDK loads the Yaseer Form Web Component on demand and mounts it into your page with full control over data, submission, and lifecycle.

---

## ✨ Features

- 🚀 Easy integration via CDN
- 🌐 Supports Arabic (`ar`) and English (`en`)
- 🧩 Built on Web Components
- 🔁 Dynamic form rendering
- 📤 Programmatic form submission
- 📥 Get form values on demand
- 🎯 Slot support for custom content
- 🧹 Full lifecycle control (init / submit / destroy)

---

## 📦 Installation (CDN)

```html
<script src="https://cdn.jsdelivr.net/gh/waelfahed84/yaseer-form-cdn@v1.0.0/dist/sdk.min.js"></script>
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
    fields: [
      { key: 'name', type: 'text', label: 'Name' },
      { key: 'email', type: 'email', label: 'Email' }
    ],
    on_submission_success(data) {
      console.log('Form submitted successfully', data);
    },
    on_submission_failure(error) {
      console.error('Form submission failed', error);
    }
  });
</script>
```

---

## ⚙️ Configuration (`FormConfig`)

```ts
interface FormConfig {
  selector: string;
  language?: 'ar' | 'en';
  formId?: string;
  slotSelector?: string;
  fields: any[];
  value?: { [key: string]: any };
  on_submission_success?: (data: any) => void;
  on_submission_failure?: (error: any) => void;
}
```

---

## 🛠️ SDK Methods

### getFormValues()
```js
await form.getFormValues();
```

### submitForm()
```js
await form.submitForm();
```

### toggleFormLoader(state)
```js
form.toggleFormLoader(true);
```

### destroyForm()
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
