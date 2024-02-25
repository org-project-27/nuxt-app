import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "vue-i18n";
import "devalue";
import "defu";
import "klona";
import "@vue/devtools-api";
import "axios";
const _sfc_main = defineComponent({
  name: "terms_of_service"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}> terms_of_service </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms_of_service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms_of_service = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  terms_of_service as default
};
//# sourceMappingURL=terms_of_service-OMZ1bVd0.js.map
