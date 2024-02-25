import { _ as __nuxt_component_0 } from "./nuxt-link-oXIzDiGV.js";
import { _ as __nuxt_component_1 } from "./IconComponent-P6HKMbV0.js";
import { defineComponent, mergeProps, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc, d as useAuthStore, o as useAppConfig } from "../server.mjs";
import { u as usePostsStore } from "./posts-6kYmeqGv.js";
import { c as colorUtilities } from "./colorUtilities-oyJUFuPL.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "destr";
import "vue-i18n";
import "devalue";
import "defu";
import "klona";
import "@vue/devtools-api";
import "axios";
const loadingGIF = "" + __buildAssetsURL("loading2.WQwTfSpf.gif");
const _sfc_main$1 = defineComponent({
  name: "LoadingPage",
  data() {
    return {
      loadingGIF
    };
  },
  mounted() {
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "loading-page-container" }, _attrs))} data-v-56e4fe92><div data-v-56e4fe92><img width="50px"${ssrRenderAttr("src", _ctx.loadingGIF)}${ssrRenderAttr("alt", "Please wait...")} data-v-56e4fe92></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingPageComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-56e4fe92"]]);
const _sfc_main = defineComponent({
  name: "DefaultLayout",
  components: { LoadingPageComponent: __nuxt_component_2 },
  computed: {
    colorUtilities() {
      return colorUtilities;
    },
    authProgressIsLoading() {
      return useAuthStore().authProgressIsLoading;
    },
    currentPath() {
      return this.$route;
    }
  },
  setup() {
    let { getCategories } = usePostsStore();
    let categories = getCategories(10);
    return { brandName: useAppConfig().brandName, categories };
  },
  data() {
    return {
      waitingForAuthProgress: null
    };
  },
  mounted() {
    this.waitingForAuthProgress = this.authProgressIsLoading;
  },
  watch: {
    authProgressIsLoading(val) {
      this.waitingForAuthProgress = val;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_icon_component = __nuxt_component_1;
  const _component_loading_page_component = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "default-layout",
    class: "container flex-column-between-center"
  }, _attrs))}><header><section class="responsive-width"><div class="wrapper-area"><!--[-->`);
  ssrRenderList(4, (i) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      key: i,
      to: "/posts/link" + i,
      class: "child cannot-select flex-column-center"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Link ${ssrInterpolate(i)}`);
        } else {
          return [
            createTextVNode(" Link " + toDisplayString(i), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div><div class="main-area">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "brand-area cannot-select"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}> ${ssrInterpolate(_ctx.brandName)}</span>`);
      } else {
        return [
          createVNode("span", null, " " + toDisplayString(_ctx.brandName), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="search-area"> Search the product, category or brand you are looking for </div><div class="auth-area">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/account/user" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon_component, {
          "icon-name": "person",
          "icon-size": "1.7rem"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("pages.profile"))}</span>`);
      } else {
        return [
          createVNode(_component_icon_component, {
            "icon-name": "person",
            "icon-size": "1.7rem"
          }),
          createVNode("span", null, toDisplayString(_ctx.$t("pages.profile")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/account/favorites" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon_component, {
          "icon-name": "favorite",
          "icon-size": "1.7rem"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("pages.favorites"))}</span>`);
      } else {
        return [
          createVNode(_component_icon_component, {
            "icon-name": "favorite",
            "icon-size": "1.7rem"
          }),
          createVNode("span", null, toDisplayString(_ctx.$t("pages.favorites")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/account/cart" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon_component, {
          "icon-name": "shopping_cart",
          "icon-size": "1.7rem"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("pages.cart"))}</span>`);
      } else {
        return [
          createVNode(_component_icon_component, {
            "icon-name": "shopping_cart",
            "icon-size": "1.7rem"
          }),
          createVNode("span", null, toDisplayString(_ctx.$t("pages.cart")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="navigation-area"><nav><!--[-->`);
  ssrRenderList(_ctx.categories.length, (i) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: ["type_1", { "active": i == _ctx.currentPath.params.id }],
      to: "/categories/" + i,
      key: i
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.categories[i - 1])}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.categories[i - 1]), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></nav></div></section></header><main><div class="responsive-width">`);
  if (_ctx.waitingForAuthProgress === false) {
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  } else {
    _push(ssrRenderComponent(_component_loading_page_component, null, null, _parent));
  }
  _push(`</div></main><footer>`);
  ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
  _push(`</footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-hqJYx1P7.js.map
