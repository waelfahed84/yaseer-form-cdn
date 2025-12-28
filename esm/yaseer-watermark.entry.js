import { r as registerInstance, c as createEvent } from './index-DqB_q70x.js';

const yaseerWatermarkCss = "nav.sc-yaseer-watermark {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  padding: 2px 5px;\n  background-color: rgba(200, 200, 200, 0.3);\n  border-radius: 3px;\n}\n\np.sc-yaseer-watermark {\n  font-family: sans-serif;\n  font-size: 10px;\n  color: #666;\n  font-weight: 300;\n  opacity: 0.5;\n  text-transform: lowercase;\n\n  a{\n    color: #444;\n    text-decoration: none;\n    font-weight: 500;\n\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n}";

const YaseerWatermark = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.watermarkDeleted = createEvent(this, "watermarkDeleted");
    }
    watermarkDeleted;
    connectedCallback() {
        // console.info(
        //   "%cYASEER-FORM",
        //   `
        //   color: white;
        //   background:#4c47ff;
        //   font-weight: bold;
        //   font-size:10px;
        //   padding:2px 6px;
        //   border-radius: 5px;
        //   `,
        //   "https://github.com/waelfahed84/yaseer-form-cdn"
        // );
    }
    disconnertedCallback() {
        this.watermarkDeleted.emit();
    }
    render() {
        return (null);
    }
};
YaseerWatermark.style = yaseerWatermarkCss;

export { YaseerWatermark as yaseer_watermark };
//# sourceMappingURL=yaseer-watermark.entry.js.map
