import { _ as __nuxt_component_0 } from "./nuxt-link-oXIzDiGV.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode, resolveDynamicComponent } from "vue";
import { b as __nuxt_component_3, _ as __nuxt_component_1 } from "./MessageComponent-e368mHQc.js";
import { _ as _export_sfc, e as defaults, d as useAuthStore, g as backendMessage } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode } from "vue/server-renderer";
import "ufo";
import "./IconComponent-P6HKMbV0.js";
import "./colorUtilities-oyJUFuPL.js";
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
function evaluatePasswordStrength(passwordString) {
  let strength = 0;
  if (passwordString) {
    const hasLowercase = /[a-z]/.test(passwordString);
    const hasUppercase = /[A-Z]/.test(passwordString);
    const hasNumbers = /\d/.test(passwordString);
    const hasSpecialChars = /\W/.test(passwordString);
    const isLongEnough = passwordString.length >= 8;
    if (hasLowercase)
      strength++;
    if (hasUppercase)
      strength++;
    if (hasNumbers)
      strength++;
    if (hasSpecialChars)
      strength++;
    if (isLongEnough)
      strength++;
    if (strength <= 2) {
      return 1;
    } else if (strength <= 4) {
      return 2;
    } else {
      return 3;
    }
  }
  return 0;
}
const messages = {
  DONE: "DONE",
  SOMETHING_WENT_WRONG: "SOMETHING_WENT_WRONG",
  EMAIL_IS_EXIST: "EMAIL_IS_EXIST",
  USER_REGISTRATION_FAILED: "USER_REGISTRATION_FAILED",
  USER_SUCCESSFULLY_REGISTERED: "USER_SUCCESSFULLY_REGISTERED",
  EMAIL_IS_NOT_VALID: "EMAIL_IS_NOT_VALID",
  INVALID_EMAIL: "INVALID_EMAIL",
  INVALID_PASSWORD: "INVALID_PASSWORD",
  INVALID_FULLNAME: "INVALID_FULLNAME",
  INVALID_TOKEN: "INVALID_TOKEN",
  BCRYPT_ERROR: "BCRYPT_ERROR",
  USER_LOGIN_PROGRESS_FAILED: "USER_LOGIN_PROGRESS_FAILED",
  USER_SUCCESSFULLY_LOGIN: "USER_SUCCESSFULLY_LOGIN",
  EMAIL_IS_NOT_REGISTERED: "EMAIL_IS_NOT_REGISTERED",
  EMAIL_OR_PASSWORD_INCORRECT: "EMAIL_OR_PASSWORD_INCORRECT"
};
const signupResponse = defaults.defaultResponses.signup();
const _sfc_main$2 = defineComponent({
  name: "SignUp",
  data() {
    return {
      termsOfService: {
        html: this.$t("get_started.sign_up.terms_of_service"),
        value: false
      },
      readyForView: false,
      submitIsLoading: false,
      redirectToLoginTimeId: null,
      signupResponse,
      messages
    };
  },
  computed: {
    passwordStrength() {
      return this.evaluatePasswordStrength(this.modelSignup.password);
    },
    readyForSubmit() {
      let ready = false;
      let { fullname, password, email } = this.modelSignup;
      if (fullname && password && email) {
        if (this.passwordStrength > 1) {
          ready = true;
        }
      }
      if (this.signupProgressStatus === false) {
        ready = false;
      }
      return ready;
    },
    modelSignup() {
      const { modelSignup } = useAuthStore();
      return modelSignup;
    },
    signupProgressStatus() {
      return this.signupResponse.success;
    },
    showFullnameInputError() {
      let error = null;
      if (this.signupProgressStatus === false) {
        if (this.signupResponse.message === this.messages.INVALID_FULLNAME) {
          error = this.backendMessage(this.messages.INVALID_FULLNAME);
        }
      }
      return error;
    },
    showEmailInputError() {
      let error = null;
      if (this.signupProgressStatus === false) {
        if (this.signupResponse.message === this.messages.EMAIL_IS_EXIST) {
          error = this.backendMessage(this.messages.EMAIL_IS_EXIST);
        } else if (this.signupResponse.message === this.messages.INVALID_EMAIL) {
          error = this.backendMessage(this.messages.INVALID_EMAIL);
        }
      }
      return error;
    }
  },
  unmounted() {
    this.resetModel();
    clearTimeout(this.redirectToLoginTimeId);
  },
  methods: {
    backendMessage,
    evaluatePasswordStrength,
    async submit() {
      this.submitIsLoading = true;
      const { submitSignup, modelLogin } = useAuthStore();
      await submitSignup().then((response) => {
        this.signupResponse = { ...response };
        if (this.signupProgressStatus) {
          modelLogin.email = this.modelSignup.email;
          this.redirectToLoginTimeId = setTimeout(() => {
            this.$router.push("?view=log_in");
            clearTimeout(this.redirectToLoginTimeId);
          }, 2e3);
        }
      }).catch((error) => {
        this.signupResponse = { ...error };
      }).finally(() => {
        this.submitIsLoading = false;
      });
    },
    resetModel() {
      const { resetModelSignup } = useAuthStore();
      resetModelSignup();
    },
    setReadyForView(val) {
      this.readyForView = val;
    }
  },
  watch: {
    modelSignup: {
      handler(val) {
        this.signupResponse = signupResponse;
        clearTimeout(this.redirectToLoginTimeId);
        Object.keys(this.modelSignup).forEach((key) => {
          var _a;
          this.modelSignup[key] = (_a = this.modelSignup[key]) == null ? void 0 : _a.trim();
        });
      },
      deep: true
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_message_component = __nuxt_component_3;
  const _component_input_component = __nuxt_component_1;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "sign-up-page",
    class: "flex-column-center",
    style: _ctx.readyForView ? null : { display: "none" }
  }, _attrs))} data-v-2eeca6b5><form class="sign-up-form" data-v-2eeca6b5><div class="message-box" data-v-2eeca6b5>`);
  if (_ctx.signupProgressStatus) {
    _push(ssrRenderComponent(_component_message_component, {
      type: "success",
      message: _ctx.backendMessage(_ctx.signupResponse.message)
    }, null, _parent));
  } else if (_ctx.showEmailInputError || _ctx.showFullnameInputError) {
    _push(ssrRenderComponent(_component_message_component, {
      type: "error",
      message: _ctx.backendMessage(_ctx.messages.USER_REGISTRATION_FAILED)
    }, null, _parent));
  } else if (_ctx.signupProgressStatus === false) {
    _push(ssrRenderComponent(_component_message_component, {
      type: "error",
      message: _ctx.backendMessage(_ctx.signupResponse.message)
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_message_component, {
      "hide-icon": "",
      type: "info",
      message: _ctx.$t("get_started.sign_up.welcome_message")
    }, null, _parent));
  }
  _push(`</div><div class="input-group" data-v-2eeca6b5>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "fullname-input",
    type: "text",
    name: "fullname",
    autocomplete: "name",
    placeholder: "John Doe",
    modelValue: _ctx.modelSignup.fullname,
    "onUpdate:modelValue": ($event) => _ctx.modelSignup.fullname = $event,
    maxlength: "50",
    label: _ctx.$t("get_started.sign_up.fullname"),
    "left-icon": { icon: "person", size: "2.5rem" },
    "input-size": {
      width: "100%",
      height: "4rem"
    },
    "show-error": {
      message: _ctx.showFullnameInputError,
      highlight: !!_ctx.showFullnameInputError
    },
    required: "",
    clearable: ""
  }, null, _parent));
  _push(`<br data-v-2eeca6b5>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "email-input",
    type: "email",
    name: "email",
    autocomplete: "email",
    placeholder: "example@domain.com",
    modelValue: _ctx.modelSignup.email,
    "onUpdate:modelValue": ($event) => _ctx.modelSignup.email = $event,
    label: _ctx.$t("get_started.sign_up.email"),
    "left-icon": { icon: "alternate_email", size: "2.5rem" },
    "input-size": {
      width: "100%",
      height: "4rem"
    },
    "show-error": {
      message: _ctx.showEmailInputError,
      highlight: !!_ctx.showEmailInputError
    },
    required: "",
    clearable: ""
  }, null, _parent));
  _push(`<br data-v-2eeca6b5>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "password-input",
    type: "password",
    name: "password",
    autocomplete: "new-password",
    modelValue: _ctx.modelSignup.password,
    "onUpdate:modelValue": ($event) => _ctx.modelSignup.password = $event,
    label: _ctx.$t("get_started.sign_up.password"),
    "left-icon": { icon: "lock", size: "2.5rem" },
    "input-size": {
      width: "100%",
      height: "4rem"
    },
    "show-error": {
      message: _ctx.passwordStrength === 1 ? _ctx.$t("get_started.sign_up.password_levels.weak") : null,
      highlight: _ctx.passwordStrength === 1
    },
    "show-warning": {
      message: _ctx.passwordStrength === 2 ? _ctx.$t("get_started.sign_up.password_levels.moderate") : null,
      highlight: _ctx.passwordStrength === 2
    },
    "show-success": {
      message: _ctx.passwordStrength === 3 ? _ctx.$t("get_started.sign_up.password_levels.strong") : null
    },
    required: "",
    clearable: ""
  }, null, _parent));
  _push(`<br data-v-2eeca6b5>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "terms-of-service",
    name: "terms-of-service",
    type: "checkbox",
    "html-label": _ctx.termsOfService.html,
    required: "",
    modelValue: _ctx.termsOfService.value,
    "onUpdate:modelValue": ($event) => _ctx.termsOfService.value = $event
  }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "submit-btn",
    type: "submit",
    onReadyForView: _ctx.setReadyForView,
    label: _ctx.$t("get_started.sign_up.submit_btn"),
    "button-type": "1",
    "left-icon": { icon: "lock" },
    "input-size": {
      width: "100%",
      height: "3.5rem"
    },
    disabled: !_ctx.readyForSubmit,
    "is-loading": _ctx.submitIsLoading
  }, null, _parent));
  _push(`</form><span class="already-have-account" data-v-2eeca6b5>${ssrInterpolate(_ctx.$t("get_started.sign_up.already_have_account"))} `);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "?view=log_in",
    class: "decoration"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("get_started.sign_up.log_in"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("get_started.sign_up.log_in")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><br data-v-2eeca6b5></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/views/signUp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const sign_up = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2eeca6b5"]]);
const loginResponse = defaults.defaultResponses.login();
const _sfc_main$1 = defineComponent({
  name: "LogIn",
  computed: {
    readyForSubmit() {
      let ready = false;
      let { password, email } = this.modelLogin;
      if (password && email) {
        ready = true;
      }
      return ready;
    },
    modelLogin() {
      const { modelLogin } = useAuthStore();
      return modelLogin;
    },
    loginProgressStatus() {
      return this.loginResponse.success;
    },
    showEmailInputError() {
      let error = null;
      if (this.loginProgressStatus === false && this.loginResponse.message === this.messages.INVALID_EMAIL) {
        error = this.backendMessage(this.messages.INVALID_EMAIL);
      }
      return error;
    }
  },
  data: () => {
    return {
      readyForView: false,
      submitIsLoading: false,
      loginResponse,
      messages
    };
  },
  unmounted() {
    this.resetModel();
  },
  methods: {
    backendMessage,
    async submit() {
      this.submitIsLoading = true;
      const { submitLogin, authUser, afterAuthPath } = useAuthStore();
      await submitLogin().then(async (response) => {
        this.loginResponse = { ...response };
        if (this.loginResponse.success) {
          await authUser().then(() => this.$router.push(afterAuthPath)).finally(() => this.submitIsLoading = false);
        }
      }).catch((error) => {
        this.loginResponse = { ...error };
      }).finally(() => {
        this.submitIsLoading = false;
      });
    },
    resetModel() {
      const { resetModelLogin } = useAuthStore();
      resetModelLogin();
    },
    setReadyForView(val) {
      this.readyForView = val;
    }
  },
  watch: {
    modelLogin: {
      handler(val) {
        this.loginResponse = loginResponse;
        Object.keys(this.modelLogin).forEach((key) => {
          var _a;
          this.modelLogin[key] = (_a = this.modelLogin[key]) == null ? void 0 : _a.trim();
        });
      },
      deep: true
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_message_component = __nuxt_component_3;
  const _component_input_component = __nuxt_component_1;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "log-in-page",
    class: "flex-column-center",
    style: _ctx.readyForView ? null : { display: "none" }
  }, _attrs))} data-v-c175a761><form class="log-in-form" data-v-c175a761><div class="message-box" data-v-c175a761>`);
  if (!_ctx.showEmailInputError && _ctx.loginProgressStatus === false) {
    _push(ssrRenderComponent(_component_message_component, {
      type: "error",
      message: _ctx.backendMessage(_ctx.loginResponse.message)
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_message_component, {
      "hide-icon": "",
      type: "info",
      message: _ctx.$t("get_started.log_in.welcome_message")
    }, null, _parent));
  }
  _push(`</div><div class="input-group" data-v-c175a761>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "email-input",
    type: "email",
    name: "email",
    placeholder: "example@domain.com",
    modelValue: _ctx.modelLogin.email,
    "onUpdate:modelValue": ($event) => _ctx.modelLogin.email = $event,
    autocomplete: "email",
    label: _ctx.$t("get_started.log_in.email"),
    "left-icon": { icon: "alternate_email", size: "2.5rem" },
    "input-size": {
      width: "100%",
      height: "4rem"
    },
    "show-error": {
      message: _ctx.showEmailInputError,
      highlight: !!_ctx.showEmailInputError
    },
    required: "",
    clearable: ""
  }, null, _parent));
  _push(`<br data-v-c175a761>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "password-input",
    type: "password",
    name: "password",
    autocomplete: "current-password",
    modelValue: _ctx.modelLogin.password,
    "onUpdate:modelValue": ($event) => _ctx.modelLogin.password = $event,
    label: _ctx.$t("get_started.log_in.password"),
    "left-icon": { icon: "lock", size: "2.5rem" },
    "input-size": {
      width: "100%",
      height: "4rem"
    },
    required: "",
    clearable: ""
  }, null, _parent));
  _push(`<div class="forget-password-area" data-v-c175a761>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/forgot_password",
    class: "decoration"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("get_started.log_in.forget_password"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("get_started.log_in.forget_password")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_input_component, {
    id: "submit-btn",
    type: "submit",
    label: _ctx.$t("get_started.log_in.submit_btn"),
    onReadyForView: _ctx.setReadyForView,
    "left-icon": { icon: "lock" },
    "input-size": {
      width: "100%",
      height: "3.5rem"
    },
    "is-loading": _ctx.submitIsLoading,
    disabled: !_ctx.readyForSubmit
  }, null, _parent));
  _push(`</form><span class="no-account-yet" data-v-c175a761>${ssrInterpolate(_ctx.$t("get_started.log_in.no_account_yet"))} `);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "?view=sign_up",
    class: "decoration"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("get_started.log_in.sign_up"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("get_started.log_in.sign_up")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` ${ssrInterpolate(_ctx.$t("get_started.log_in.now").toLowerCase())}! </span><br data-v-c175a761></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/views/logIn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const log_in = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c175a761"]]);
const _sfc_main = defineComponent({
  name: "get-started",
  components: { sign_up, log_in },
  data: () => {
    return {
      views: ["log_in", "sign_up"]
    };
  },
  computed: {
    currentView() {
      let { view } = this.$route.query;
      if (view && this.views.includes(view == null ? void 0 : view.toString())) {
        return view;
      }
      this.$router.push("?view=log_in");
      return null;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "getstarted-page" }, _attrs))}><div class="getstarted-container default-container"><nav id="getstarted-views-nav" class="flex-row-center"><!--[-->`);
  ssrRenderList(_ctx.views, (page) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: ["flex-row-center", { "active": page === _ctx.currentView }],
      id: page,
      key: page,
      to: `?view=${page}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(_ctx.$t(`pages.${page}`))}`);
        } else {
          return [
            createTextVNode(toDisplayString(_ctx.$t(`pages.${page}`)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></nav><section id="getstarted-layout" class="${ssrRenderClass([`${_ctx.currentView}-area`, "default-container"])}">`);
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.currentView), null, null), _parent);
  _push(`</section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/getstarted.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const getstarted = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  getstarted as default
};
//# sourceMappingURL=getstarted-JdqGT_yS.js.map
