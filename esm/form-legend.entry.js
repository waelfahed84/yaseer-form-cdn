import { r as registerInstance, h } from './index-CgIiIA7J.js';

const formLegendCss = "";

const FormLegend = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    field;
    render() {
        return (h("section", { key: '3198b7fa3c1d802873388e78bf44fda7dbe54bf6', class: "legend-field-section" }, h("div", { key: '3f93b8b3a7810478b3073235d5cc40c9ec818376', class: "content" }, this.field.label && h("h3", { key: '7793a427b3d18e93c06ea747b1599969c8a1bd8c' }, this.field.label), this.field.placeholder && h("p", { key: '4d40f6549ab169bf9de691805b18632b0100aaeb' }, this.field.placeholder))));
    }
};
FormLegend.style = formLegendCss;

export { FormLegend as form_legend };
//# sourceMappingURL=form-legend.entry.esm.js.map
