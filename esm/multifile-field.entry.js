import { r as registerInstance, a as createEvent, h, d as Host } from './index-CgIiIA7J.js';

const multifileFieldCss = ":host{display:contents}input[type=\"file\"]{width:100%;padding:8px 12px;border:1px solid #ccc;border-radius:4px;font-size:14px;background-color:#fff;transition:border-color 0.3s ease;cursor:pointer}input[type=\"file\"]:focus{outline:none;border-color:#007bff;box-shadow:0 0 0 2px rgba(0, 123, 255, 0.25)}input[type=\"file\"]:disabled{background-color:#f5f5f5;color:#6c757d;cursor:not-allowed}input[type=\"file\"].invalid{border-color:#dc3545}input[type=\"file\"].invalid:focus{border-color:#dc3545;box-shadow:0 0 0 2px rgba(220, 53, 69, 0.25)}label{font-weight:500;margin-bottom:4px;color:#333;display:block}.file-size-limit{font-weight:400;font-size:12px;color:#6c757d;font-style:italic}input[type=\"file\"]::file-selector-button{background-color:#007bff;color:white;border:none;border-radius:3px;padding:4px 12px;margin-right:8px;cursor:pointer;font-size:14px}input[type=\"file\"]::file-selector-button:hover{background-color:#0056b3}input[type=\"file\"][multiple]::after{content:\" (multiple files supported)\";font-size:12px;color:#6c757d;margin-left:8px}";

const MultifileField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
        this.fieldBlurred = createEvent(this, "fieldBlurred", 7);
    }
    field;
    isInvalid;
    isDisabled;
    isHidden;
    valueChanged;
    fieldBlurred;
    onValueChange(e) {
        const files = e.target.files;
        if (files && files.length > 0) {
            const fileArray = Array.from(files);
            this.valueChanged.emit({ key: this.field.key, value: fileArray });
        }
        else {
            this.valueChanged.emit({ key: this.field.key, value: [] });
        }
    }
    handleBlur() {
        this.fieldBlurred.emit({ key: this.field.key });
    }
    render() {
        const maxSizeMB = 'todo';
        return (h(Host, { key: 'd9ccf30575294aaa8db28251361f830c02b523fd' }, h("input", { key: '9f304cf5e58fdfddc14498bdccab097a50beac58', id: this.field.key, type: "file", multiple: true, disabled: this.isDisabled, accept: this.field.placeholder || '*/*', class: `${this.isInvalid ? 'invalid' : ''}`, onInput: (e) => this.onValueChange(e), onBlur: this.handleBlur.bind(this) }), this.field.label && (h("label", { key: 'ba1660517b88e604f82a8541c9eb4c86ad17a624', htmlFor: this.field.key }, this.field.label, maxSizeMB && h("span", { key: '0bae6ec74a464a739fc2a209d17d539536c6eac9', class: "file-size-limit" }, " (max ", maxSizeMB, "MB per file)"))), h("slot", { key: 'da3207016c6bb91db4e114e4e1a804c0f31655b8' })));
    }
};
MultifileField.style = multifileFieldCss;

export { MultifileField as multifile_field };
//# sourceMappingURL=multifile-field.entry.esm.js.map
