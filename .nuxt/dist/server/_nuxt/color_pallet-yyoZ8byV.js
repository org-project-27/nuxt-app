import { defineComponent, mergeProps, useSSRContext } from "vue";
import { c as colorUtilities } from "./colorUtilities-oyJUFuPL.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
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
  name: "color_pallet",
  computed: {
    colorUtilities() {
      return colorUtilities;
    },
    targetColor() {
      return this.$route.query.color || "main";
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "pallet-container" }, _attrs))} data-v-9d7ea342><div${ssrRenderAttr("id", `color-pallets-${_ctx.targetColor}`)} data-v-9d7ea342><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-1</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-2</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-3</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-4</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-5</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-6</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-7</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-8</div><div data-v-9d7ea342>$${ssrInterpolate(_ctx.targetColor)}-color-9</div></div><div class="color-pallets-2" data-v-9d7ea342><!--[-->`);
  ssrRenderList(_ctx.colorUtilities, (value, key) => {
    _push(`<div style="${ssrRenderStyle([
      key.startsWith(`$${_ctx.targetColor}`) ? null : { display: "none" },
      { "background-color": value, "height": "100px" }
    ])}" data-v-9d7ea342>${ssrInterpolate(value)}</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/color_pallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const color_pallet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9d7ea342"]]);
export {
  color_pallet as default
};
//# sourceMappingURL=color_pallet-yyoZ8byV.js.map
