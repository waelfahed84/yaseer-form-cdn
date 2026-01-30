import { r as registerInstance, c as createEvent, h } from './index-DqB_q70x.js';

const typeaheadFieldCss = "";

const TypeaheadField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged");
        this.fieldBlurred = createEvent(this, "fieldBlurred");
    }
    field;
    isInvalid;
    isHidden;
    isDisabled;
    valueChanged;
    fieldBlurred;
    isTouched = false;
    isOpen = false;
    filtered = [];
    highlightedIndex = -1;
    inputEl;
    portal;
    // ------------------------------
    // LIFECYCLE
    // ------------------------------
    componentWillLoad() {
        this.portal = document.createElement('div');
        this.portal.className = 'typeahead-portal';
        document.body.querySelector('yaseer-form').shadowRoot.appendChild(this.portal);
        // Close on outside click
        document.addEventListener('mousedown', this.handleOutsideClick);
        window.addEventListener('resize', this.reposition);
        document.addEventListener('scroll', this.reposition, true);
    }
    disconnectedCallback() {
        this.portal?.remove();
        document.removeEventListener('mousedown', this.handleOutsideClick);
        window.removeEventListener('resize', this.reposition);
        document.removeEventListener('scroll', this.reposition, true);
    }
    componentDidRender() {
        if (this.isOpen) {
            this.renderPortal();
            this.reposition();
        }
        else {
            this.portal.innerHTML = '';
        }
        if (this.field.value) {
            const selectedOption = (this.field.options || []).find(opt => opt[this.field.optionValue] === this.field.value);
            if (selectedOption) {
                this.inputEl.value = selectedOption[this.field.optionLabel];
            }
        }
    }
    // ------------------------------
    // INPUT HANDLERS
    // ------------------------------
    onInput = (e) => {
        const value = e.target.value;
        const selectedOption = (this.field.options || []).find(opt => opt[this.field.optionLabel].toLowerCase() === value.toLowerCase());
        this.valueChanged.emit({ key: this.field.key, value: selectedOption ? selectedOption[this.field.optionValue] : null });
        if (selectedOption) {
            e.target.value = selectedOption[this.field.optionLabel];
        }
        this.filtered = (this.field.options || []).filter(opt => opt[this.field.optionLabel]
            .toLowerCase()
            .includes(value.toLowerCase()));
        this.highlightedIndex = -1;
        this.isOpen = this.filtered.length > 0;
        this.reposition();
    };
    onFocus = () => {
        if (this.filtered.length > 0) {
            this.isOpen = true;
            this.reposition();
        }
    };
    onBlur = () => {
        // allow click on items
        setTimeout(() => {
            this.isTouched = true;
            this.fieldBlurred.emit({ key: this.field.key });
        }, 150);
    };
    onKeyDown = (e) => {
        if (!this.isOpen)
            return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.highlightedIndex =
                (this.highlightedIndex + 1) % this.filtered.length;
            this.scrollHighlightedIntoView();
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.highlightedIndex =
                (this.highlightedIndex - 1 + this.filtered.length) %
                    this.filtered.length;
            this.scrollHighlightedIntoView();
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            if (this.highlightedIndex >= 0) {
                this.selectOption(this.filtered[this.highlightedIndex]);
            }
        }
        if (e.key === 'Escape') {
            this.isOpen = false;
        }
    };
    // ------------------------------
    // PORTAL RENDERING
    // ------------------------------
    renderPortal() {
        this.portal.innerHTML = `
      <div class="typeahead-dropdown">
        ${this.filtered
            .map((o, i) => `
            <div 
              class="item ${i === this.highlightedIndex ? 'highlighted' : ''}"
              data-index="${i}"
              data-value="${o[this.field.optionValue]}"
            >
              ${o[this.field.optionLabel]}
            </div>
          `)
            .join('')}
      </div>
    `;
        this.portal.addEventListener('mousedown', this.portalClickHandler);
    }
    portalClickHandler = (e) => {
        const item = e.target.closest('.item');
        if (!item)
            return;
        const index = Number(item.getAttribute('data-index'));
        const option = this.filtered[index];
        this.selectOption(option);
    };
    selectOption(option) {
        this.valueChanged.emit({
            key: this.field.key,
            value: option[this.field.optionValue],
        });
        this.isOpen = false;
        this.portal.innerHTML = '';
        // update input value visually
        this.inputEl.value = option[this.field.optionLabel];
    }
    // ------------------------------
    // POSITIONING
    // ------------------------------
    reposition = () => {
        if (!this.isOpen || !this.inputEl)
            return;
        const rect = this.inputEl.getBoundingClientRect();
        const dropdownHeight = Math.min(this.filtered.length * 40, 260);
        const spaceBelow = window.innerHeight - rect.bottom;
        const openAbove = spaceBelow < dropdownHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || 0;
        Object.assign(this.portal.style, {
            position: 'absolute',
            left: `${rect.left + scrollLeft}px`,
            width: `${rect.width}px`,
            top: openAbove
                ? `${rect.top + scrollTop - dropdownHeight}px`
                : `${rect.bottom + scrollTop}px`,
            zIndex: '999999',
        });
    };
    scrollHighlightedIntoView() {
        const highlighted = this.portal.querySelector('.highlighted');
        highlighted?.scrollIntoView({ block: 'nearest' });
    }
    // ------------------------------
    // OUTSIDE CLICK
    // ------------------------------
    handleOutsideClick = (e) => {
        if (!this.isOpen)
            return;
        const clickedInsideInput = e.target === this.inputEl;
        const clickedInsidePortal = this.portal.contains(e.target);
        if (!clickedInsideInput && !clickedInsidePortal) {
            this.isOpen = false;
        }
    };
    // ------------------------------
    // RENDER
    // ------------------------------
    render() {
        if (this.isHidden)
            return null;
        return (h("section", null, h("input", { ref: (el) => (this.inputEl = el), type: "text", disabled: this.isDisabled, placeholder: this.field.placeholder || '', onInput: this.onInput, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur, class: `${this.isInvalid ? 'invalid' : 'valid'} ${this.isTouched ? 'touched' : 'untouched'}` }), this.field.label && (h("label", { htmlFor: this.field.key, innerHTML: this.field.label.replace(/\[\--(.*?)\--\]/g, ' <span class="file-size-limit">($1)</span>') })), h("slot", null)));
    }
};
TypeaheadField.style = typeaheadFieldCss;

export { TypeaheadField as typeahead_field };
//# sourceMappingURL=typeahead-field.entry.js.map
