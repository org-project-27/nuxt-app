import { defineComponent, useSSRContext } from "vue";
import { _ as _export_sfc, d as useAuthStore } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  name: "user",
  computed: {
    userModel() {
      return useAuthStore().modelAuth;
    }
  },
  methods: {
    logOut() {
      const { logout } = useAuthStore();
      logout();
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}> User account <br>`);
  if (_ctx.userModel) {
    _push(`<span><!--[-->`);
    ssrRenderList(_ctx.userModel, (value, key) => {
      _push(`<p><b>${ssrInterpolate(key)}</b> - ${ssrInterpolate(value)}</p>`);
    });
    _push(`<!--]--></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<br><button>Log out</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  user as default
};
//# sourceMappingURL=user-51d4lnPW.js.map
