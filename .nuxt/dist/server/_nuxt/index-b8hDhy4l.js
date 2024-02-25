import { _ as __nuxt_component_0 } from "./nuxt-link-oXIzDiGV.js";
import { u as usePostsStore } from "./posts-6kYmeqGv.js";
import { defineComponent, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "vue-i18n";
import "@vue/devtools-api";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let { getPosts } = usePostsStore();
    let posts = getPosts(200);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "parent flex-row-center" }, _attrs))} data-v-25e9acfb><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          id: "post-" + post.id,
          key: post.id,
          to: "/posts/" + post.id,
          class: "child cannot-select flex-column-center default-container"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", post.thumbnailUrl)}${ssrRenderAttr("alt", post.title)} data-v-25e9acfb${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: post.thumbnailUrl,
                  alt: post.title
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25e9acfb"]]);
export {
  index as default
};
//# sourceMappingURL=index-b8hDhy4l.js.map
