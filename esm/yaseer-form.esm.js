import { B as BUILD, c as consoleDevInfo, H, w as win, N as NAMESPACE, p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-CgIiIA7J.js';
export { s as setNonce } from './index-CgIiIA7J.js';

/*
 Stencil Client Patch Browser v4.38.3 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? win.document && Array.from(win.document.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["yaseer-form",[[769,"yaseer-form",{"componentSettings":[1,"component-settings"],"formFields":[32],"settings":[32],"isSubmitting":[32],"getFormValues":[64],"toggleSpinner":[64],"submitForm":[64]}]]],["checkbox-field",[[774,"checkbox-field",{"field":[16],"isChecked":[4,"is-checked"],"isInvalid":[4,"is-invalid"],"isDisabled":[4,"is-disabled"],"isHidden":[4,"is-hidden"],"isTouched":[32]}]]],["date-field",[[772,"date-field",{"field":[16],"isInvalid":[4,"is-invalid"],"isDisabled":[4,"is-disabled"],"isHidden":[4,"is-hidden"],"isTouched":[32]}]]],["file-field",[[772,"file-field",{"field":[16],"isInvalid":[4,"is-invalid"],"isDisabled":[4,"is-disabled"],"isHidden":[4,"is-hidden"],"isTouched":[32]}]]],["form-legend",[[768,"form-legend",{"field":[16]}]]],["input-field",[[772,"input-field",{"field":[16],"isInvalid":[4,"is-invalid"],"isDisabled":[4,"is-disabled"],"isHidden":[4,"is-hidden"],"isTouched":[32]}]]],["multifile-field",[[772,"multifile-field",{"field":[16],"isInvalid":[4,"is-invalid"],"isDisabled":[4,"is-disabled"],"isHidden":[4,"is-hidden"]}]]],["number-field",[[772,"number-field",{"field":[16],"isInvalid":[4,"is-invalid"],"isDisabled":[4,"is-disabled"],"isHidden":[4,"is-hidden"],"value":[32],"isTouched":[32]}]]],["phone-number-field",[[772,"phone-number-field",{"field":[16],"language":[1],"isInvalid":[4,"is-invalid"],"isHidden":[4,"is-hidden"],"isDisabled":[4,"is-disabled"],"values":[32],"isTouched":[32]}]]],["radio-field",[[774,"radio-field",{"field":[16],"value":[8],"isInvalid":[4,"is-invalid"],"isDisabled":[4,"is-disabled"],"isHidden":[4,"is-hidden"],"isTouched":[32]}]]],["select-field",[[772,"select-field",{"field":[16],"isInvalid":[4,"is-invalid"],"isHidden":[4,"is-hidden"],"isDisabled":[4,"is-disabled"],"isTouched":[32]}]]],["textarea-field",[[772,"textarea-field",{"field":[16],"isHidden":[4,"is-hidden"],"isDisabled":[4,"is-disabled"],"isInvalid":[4,"is-invalid"],"isTouched":[32]}]]],["toggle-field",[[772,"toggle-field",{"field":[16],"isChecked":[4,"is-checked"],"isInvalid":[4,"is-invalid"],"isHidden":[4,"is-hidden"],"isDisabled":[4,"is-disabled"],"isTouched":[32]}]]],["typeahead-field",[[772,"typeahead-field",{"field":[16],"isInvalid":[4,"is-invalid"],"isHidden":[4,"is-hidden"],"isDisabled":[4,"is-disabled"],"isTouched":[32],"isOpen":[32],"filtered":[32],"highlightedIndex":[32]}]]],["yaseer-watermark",[[258,"yaseer-watermark"]]],["form-builder",[[772,"form-builder",{"formId":[1,"form-id"],"formFields":[16],"language":[1],"actionUrl":[1,"action-url"],"sortedFields":[32],"getFormValues":[64],"handleSubmit":[64]},[[0,"fieldBlurred","handleFieldBlurred"],[0,"valueChanged","handleValueChange"]]]]]], options);
});
//# sourceMappingURL=yaseer-form.esm.js.map
