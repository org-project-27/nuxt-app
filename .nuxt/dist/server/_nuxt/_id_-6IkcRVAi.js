import { _ as __nuxt_component_0 } from "./nuxt-link-oXIzDiGV.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3 } from "./MessageComponent-e368mHQc.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { c as colorUtilities } from "./colorUtilities-oyJUFuPL.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "./IconComponent-P6HKMbV0.js";
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
const __default__ = defineComponent({
  name: "PostsPage",
  data() {
    return {
      model: {},
      isLoading: true,
      registerFormStore: {}
    };
  },
  mounted() {
  },
  methods: {
    incrementButton() {
      console.log(this.model);
    },
    example() {
      console.log("hello", this.registerFormStore);
    }
  }
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_input_component = __nuxt_component_1;
      const _component_loading_component = __nuxt_component_2;
      const _component_message_component = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "box" }, _attrs))} data-v-f862c472>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Back `);
          } else {
            return [
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-f862c472><br data-v-f862c472><form class="flex-column-no-wrap" style="${ssrRenderStyle({ "gap": "20px" })}" data-v-f862c472>`);
      _push(ssrRenderComponent(_component_input_component, {
        id: "fullname",
        label: "Fullname",
        type: "text",
        name: "fullname",
        modelValue: _ctx.registerFormStore["fullname"],
        "onUpdate:modelValue": ($event) => _ctx.registerFormStore["fullname"] = $event,
        maxlength: "25",
        clearable: "",
        required: "",
        "left-icon": { icon: "person" },
        "show-error": {
          message: _ctx.registerFormStore["fullname"],
          highlight: _ctx.registerFormStore["fullname"],
          icon: "warning"
        },
        placeholder: "Full name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "lastname",
        label: "Last name",
        type: "text",
        name: "lastname",
        modelValue: _ctx.registerFormStore["lastname"],
        "onUpdate:modelValue": ($event) => _ctx.registerFormStore["lastname"] = $event,
        maxlength: "25",
        clearable: "",
        "left-icon": { icon: "favorite" },
        "show-warning": {
          highlight: _ctx.registerFormStore["lastname"]
        },
        placeholder: "Last name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "email",
        label: "Email",
        type: "email",
        name: "email",
        modelValue: _ctx.registerFormStore["email"],
        "onUpdate:modelValue": ($event) => _ctx.registerFormStore["email"] = $event,
        maxlength: "25",
        "left-icon": { icon: "alternate_email" },
        required: "",
        "show-info": {
          message: "This field is important for register!",
          icon: "person"
        },
        placeholder: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "password",
        label: "Password",
        type: "password",
        name: "password",
        modelValue: _ctx.registerFormStore["password"],
        "onUpdate:modelValue": ($event) => _ctx.registerFormStore["password"] = $event,
        maxlength: "25",
        "left-icon": { icon: "lock" },
        required: "",
        "show-success": {
          message: "Strong password",
          highlight: true
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "phone",
        label: "Phone",
        type: "number",
        name: "phone",
        modelValue: _ctx.registerFormStore["phone"],
        "onUpdate:modelValue": ($event) => _ctx.registerFormStore["phone"] = $event,
        maxlength: "25",
        "left-icon": { icon: "call" },
        disabled: !!_ctx.registerFormStore["email"]
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "submit1",
        "mid-size": "",
        label: "Submit",
        type: "button",
        "button-type": "success",
        onClick: ($event) => _ctx.isLoading = 1,
        "is-loading": _ctx.isLoading === 1
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "submit2",
        label: "Submit",
        type: "submit",
        "button-type": "danger",
        disabled: _ctx.isLoading === 1,
        onClick: ($event) => _ctx.isLoading = 2,
        "is-loading": _ctx.isLoading === 2
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "submit3",
        label: "Reset",
        type: "submit",
        "button-type": "1",
        onClick: ($event) => _ctx.isLoading = 3,
        "is-loading": _ctx.isLoading === 3
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "submit4",
        "mid-size": "",
        label: "Submit",
        type: "submit",
        "button-type": "2",
        disabled: _ctx.isLoading === 1,
        onClick: ($event) => _ctx.isLoading = 4,
        "is-loading": _ctx.isLoading === 4
      }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        id: "submit5",
        "mid-size": "",
        label: "Submit",
        type: "submit",
        "button-type": "3",
        disabled: _ctx.isLoading === 1,
        onClick: ($event) => _ctx.isLoading = 5
      }, null, _parent));
      _push(ssrRenderComponent(_component_loading_component, {
        id: "example",
        type: "2",
        size: "100",
        speed: ".6",
        color: unref(colorUtilities).$black_color_2
      }, null, _parent));
      _push(ssrRenderComponent(_component_message_component, {
        type: "success",
        message: _ctx.$t("get_started.sign_in.welcome_message")
      }, null, _parent));
      _push(ssrRenderComponent(_component_message_component, {
        type: "warn",
        message: _ctx.$t("get_started.sign_in.welcome_message")
      }, null, _parent));
      _push(ssrRenderComponent(_component_message_component, {
        type: "error",
        message: _ctx.$t("get_started.sign_in.welcome_message")
      }, null, _parent));
      _push(`</form> ${ssrInterpolate(_ctx.$t("buttons.search"))} <div class="responsive-test flex-row-center" data-v-f862c472><div class="show-for-large" data-v-f862c472> show-for-large </div><div class="show-for-desktop" data-v-f862c472> show-for-desktop </div><div class="show-for-tablet" data-v-f862c472> show-for-tablet </div><div class="show-for-mobile" data-v-f862c472> show-for-mobile </div><div class="show-for-extrasmall" data-v-f862c472> show-for-extrasmall </div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/example/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f862c472"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-6IkcRVAi.js.map
