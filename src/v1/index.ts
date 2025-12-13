interface FormConfig {
    selector: string;
    language?: 'ar' | 'en';
    formId?: string;
    slotSelector?: string;
    fields: any[];
    publicKey?: string;
    value?: { [key: string]: any };
    on_submission_success?: (data: any) => void;
    on_submission_failure?: (error: any) => void;
}
class YaseerForm {
    static #scriptLoaded = false;
    static #scriptPromise: Promise<void> | null = null;

    formElement: HTMLElement | null = null;

    constructor(private _config: FormConfig) {
        const { selector, fields, language } = this._config;

        if (!fields || !Array.isArray(fields) || fields.length === 0) {
            throw new Error('Form fields is required and must be a non-empty array.');
        }

        if (!selector) {
            throw new Error('Target element CSS selector not provided.');
        }

        if (!language?.length) {
            this._config.language = 'en';
            console.warn('Language not specified. Defaulting to "en".');
        }

        this.#initializeForm();
    }

    async #initializeForm() {
        const { selector, fields, value, language, formId, publicKey } = this._config;

        // 1- todo: validate domain

        // 2- create cdn script tag
        await YaseerForm.loadComponentScript();

        // 3- prepare form web component and pass the required attributes to it 
        this.formElement = document.createElement('yaseer-form');
        (this.formElement as any)['componentSettings'] = {
            formId,
            language,
            formFields: fields,
            formValues: value,
        };

        // 5- move slotted element if exists
        if (this._config.slotSelector) {
            const slotElement = document.querySelector(this._config.slotSelector);

            if (slotElement) {
                this.formElement.appendChild(slotElement);
            } else {
                console.warn(`Slot element with selector "${this._config.slotSelector}" not found.`);
            }
        }

        // 4- append web component to the target element
        const targetElement = document.querySelector(selector);
        if (!targetElement) {
            return console.error(`Element with selector "${selector}" not found.`);
        }
        

        targetElement.appendChild(this.formElement);
    }

    static loadComponentScript() {
        if (this.#scriptLoaded) return Promise.resolve();
        if (this.#scriptPromise) return this.#scriptPromise;

        this.#scriptPromise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            // script.src = '../esm/yaseer-form.esm.js';
            script.src = 'http://localhost:3000/cdn/yaseer-form.esm.js';
            script.type = 'module';
            script.onload = () => {
                this.#scriptLoaded = true;
                resolve();
            };
            script.onerror = () => {
                console.error("Failed to load YaseerForm component script.");
                reject();
            };
            document.head.appendChild(script);
        });

        return this.#scriptPromise;
    }

    public async getFormValues() {
        if (!this.formElement) return {};
        return await (this.formElement as any)['getFormValues']();
    };

    public toggleFormLoader(event: boolean) {
        this.formElement && (this.formElement as any)['toggleSpinner'](event);
    }

    public async submitForm() {
        if(!this.formElement) return;

        const { success, data, error } = await (this.formElement as any)['submitForm']();

        if(success) {
            this._config.on_submission_success && this._config.on_submission_success(data);
        }
        else {
            this._config.on_submission_failure && this._config.on_submission_failure(error);
        }
    }

    public destroyForm() {
        if (this.formElement) {
            this.formElement.remove();
            this.formElement = null;
        }
    }
}

// Expose FormBuilder globally
if (typeof window !== 'undefined') (window as any)['YaseerForm'] = YaseerForm;
else if (typeof globalThis !== 'undefined') (globalThis as any).YaseerForm = YaseerForm;