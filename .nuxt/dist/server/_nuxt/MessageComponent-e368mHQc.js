import { i as iconsList, _ as __nuxt_component_1$1 } from "./IconComponent-P6HKMbV0.js";
import { defineComponent, mergeProps, useSSRContext, unref, readonly } from "vue";
import { c as colorUtilities } from "./colorUtilities-oyJUFuPL.js";
import { h as developerAnnounce, i as generateUniqueId, _ as _export_sfc, s as stringToElement } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderDynamicModel } from "vue/server-renderer";
const _sfc_main$2 = defineComponent({
  name: "LoadingComponent",
  props: {
    id: [String, Number],
    type: {
      type: String,
      default: () => "2"
    },
    size: {
      type: String,
      default: () => "20"
    },
    color: {
      type: String,
      default: () => colorUtilities.$main_color
    },
    speed: {
      type: String,
      default: () => "1"
    }
  },
  computed: {
    idComputed() {
      if (!this.id) {
        developerAnnounce("Loading component required an id!");
        return this.generateUniqueId();
      }
      return this.id;
    }
  },
  data() {
    return {
      readyForView: false
    };
  },
  mounted() {
    this.readyForView = false;
    this.getStyledAnimated();
  },
  methods: {
    generateUniqueId,
    getStyledAnimated() {
      this.$nextTick(() => {
        const element = (void 0).getElementById(this.idComputed);
        switch (this.type) {
          case "1":
            element.style.background = this.color;
            element.style.padding = Number(this.size) / 5 + "px";
            element.style.width = Number(this.size) + "px";
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "2":
            element.style.width = Number(this.size) + "px";
            element.style.backgroundSize = `${Number(this.size) / 3}px ${Number(this.size) / 3}px`;
            element.style.aspectRatio = "1";
            element.style.setProperty("--_c", `no-repeat radial-gradient(farthest-side, ${this.color} 92%, #0000)`);
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "3":
            element.style.width = Number(this.size) + "px";
            element.style.border = `${this.size / 5}px solid ${this.color}`;
            break;
          case "4":
            element.style.width = Number(this.size) + "px";
            element.style.backgroundSize = `${Number(this.size) / 4}px ${Number(this.size) / 4}px`;
            element.style.aspectRatio = "1.154";
            element.style.setProperty("--_g", `no-repeat radial-gradient(farthest-side, ${this.color} 92%, #0000)`);
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "5":
            element.style.width = Number(this.size) + "px";
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "clock":
            element.style.width = Number(this.size) + "px";
            element.style.color = this.color;
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          default:
            element.style.display = "none";
        }
        this.readyForView = true;
      });
    }
  },
  unmounted() {
    this.readyForView = false;
  },
  watch: {
    type() {
      this.readyForView = false;
      this.getStyledAnimated();
    },
    size() {
      this.readyForView = false;
      this.getStyledAnimated();
    },
    color() {
      this.readyForView = false;
      this.getStyledAnimated();
    },
    speed() {
      this.readyForView = false;
      this.getStyledAnimated();
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: _ctx.idComputed,
    style: _ctx.readyForView ? null : { display: "none" },
    class: "loader-area loader-" + _ctx.type
  }, _attrs))} data-v-30c12d4d></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-30c12d4d"]]);
const inputTypes = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week"
];
const inputCategories = {
  writeable: ["text", "number", "url", "email", "search", "tel"],
  password: ["password"],
  date: ["date", "datetime-local", "month", "time", "week"],
  buttons: ["button", "submit", "reset"],
  selectable: ["radio", "checkbox"],
  hiddenField: ["hidden"],
  colorPicker: ["color"],
  image: ["image"],
  sliders: ["range"],
  upload: ["file"]
};
const IconComponent = defineComponent({
  name: "IconComponent",
  props: {
    iconName: String,
    fill: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    iconSize: {
      type: [String, Number],
      default: () => "40px"
    },
    color: {
      type: String,
      default: () => colorUtilities.$black_color
    }
  },
  computed: {
    iconComputed() {
      if (this.iconName) {
        if (this.iconsList[this.iconName]) {
          return this.iconsList[this.iconName][this.fill ? "fill" : "simple"];
        }
      }
      return null;
    }
  },
  data() {
    return {
      iconsList
    };
  },
  mounted() {
    this.getStyledByProps();
  },
  methods: {
    stringToElement,
    getStyledByProps() {
      let parent = this.$refs["custom-icon"];
      if (this.iconComputed) {
        let icon = this.stringToElement(this.iconComputed);
        if (icon) {
          icon.style.width = this.iconSize;
          icon.style.height = this.iconSize;
          icon.style.fill = this.color;
        }
        if (parent.children.length) {
          parent.removeChild(parent.firstChild);
        }
        parent.appendChild(icon);
      } else {
        if (parent.children.length) {
          parent.removeChild(parent.firstChild);
        }
      }
    }
  },
  watch: {
    fill(val, oldVal) {
      if (val !== oldVal)
        this.getStyledByProps();
    },
    color(val, oldVal) {
      if (val !== oldVal)
        this.getStyledByProps();
    },
    iconSize(val, oldVal) {
      if (val !== oldVal)
        this.getStyledByProps();
    },
    iconName(val, oldVal) {
      if (val !== oldVal)
        this.getStyledByProps();
    }
  }
});
const LoadingComponent = defineComponent({
  name: "LoadingComponent",
  props: {
    id: [String, Number],
    type: {
      type: String,
      default: () => "2"
    },
    size: {
      type: String,
      default: () => "20"
    },
    color: {
      type: String,
      default: () => colorUtilities.$main_color
    },
    speed: {
      type: String,
      default: () => "1"
    }
  },
  computed: {
    idComputed() {
      if (!this.id) {
        developerAnnounce("Loading component required an id!");
        return this.generateUniqueId();
      }
      return this.id;
    }
  },
  data() {
    return {
      readyForView: false
    };
  },
  mounted() {
    this.readyForView = false;
    this.getStyledAnimated();
  },
  methods: {
    generateUniqueId,
    getStyledAnimated() {
      this.$nextTick(() => {
        const element = (void 0).getElementById(this.idComputed);
        switch (this.type) {
          case "1":
            element.style.background = this.color;
            element.style.padding = Number(this.size) / 5 + "px";
            element.style.width = Number(this.size) + "px";
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "2":
            element.style.width = Number(this.size) + "px";
            element.style.backgroundSize = `${Number(this.size) / 3}px ${Number(this.size) / 3}px`;
            element.style.aspectRatio = "1";
            element.style.setProperty("--_c", `no-repeat radial-gradient(farthest-side, ${this.color} 92%, #0000)`);
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "3":
            element.style.width = Number(this.size) + "px";
            element.style.border = `${this.size / 5}px solid ${this.color}`;
            break;
          case "4":
            element.style.width = Number(this.size) + "px";
            element.style.backgroundSize = `${Number(this.size) / 4}px ${Number(this.size) / 4}px`;
            element.style.aspectRatio = "1.154";
            element.style.setProperty("--_g", `no-repeat radial-gradient(farthest-side, ${this.color} 92%, #0000)`);
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "5":
            element.style.width = Number(this.size) + "px";
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          case "clock":
            element.style.width = Number(this.size) + "px";
            element.style.color = this.color;
            element.style.animationDuration = `${1 / this.speed}s`;
            break;
          default:
            element.style.display = "none";
        }
        this.readyForView = true;
      });
    }
  },
  unmounted() {
    this.readyForView = false;
  },
  watch: {
    type() {
      this.readyForView = false;
      this.getStyledAnimated();
    },
    size() {
      this.readyForView = false;
      this.getStyledAnimated();
    },
    color() {
      this.readyForView = false;
      this.getStyledAnimated();
    },
    speed() {
      this.readyForView = false;
      this.getStyledAnimated();
    }
  }
});
const _sfc_main$1 = defineComponent({
  name: "InputComponent",
  components: { IconComponent, LoadingComponent },
  emits: [
    "click",
    "inputFocus",
    "readyForView",
    "update:modelValue"
  ],
  props: {
    inputStyle: Object,
    style: Object,
    leftIcon: Object,
    id: [String, Number],
    required: Boolean,
    autofocus: Boolean,
    readonly: Boolean,
    autocomplete: String,
    disabled: Boolean,
    pattern: String,
    maxlength: [Number, String],
    value: [Number, String, Object, Boolean],
    label: String,
    htmlLabel: String,
    isLoading: Boolean,
    midSize: Boolean,
    type: {
      type: String,
      default: () => "text"
    },
    name: {
      type: String,
      default: () => "text"
    },
    placeholder: String,
    inputSize: {
      type: Object,
      default: () => {
        return {
          width: "300px",
          height: "50px"
        };
      }
    },
    modelValue: {
      default: () => null
    },
    clearable: {
      type: Boolean,
      default: () => false
    },
    hideMaxlengthCounter: {
      type: Boolean,
      default: () => false
    },
    buttonType: {
      type: String,
      default: () => "0"
    },
    showSuccess: {
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        };
      }
    },
    showInfo: {
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        };
      }
    },
    showWarning: {
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        };
      }
    },
    showError: {
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        };
      }
    }
  },
  computed: {
    colorUtilities() {
      return colorUtilities;
    },
    idComputed() {
      if (!this.id) {
        developerAnnounce("Input component required an id!");
        return this.generateUniqueId();
      }
      return this.id;
    },
    modelComputed: {
      set(val) {
        if (!this.disabled) {
          this.model = val;
          this.$emit("update:modelValue", val);
        }
      },
      get() {
        return this.model;
      }
    },
    focusComputed: {
      set(val) {
        this.inputFocus = val;
        this.$emit("inputFocus", val);
      },
      get() {
        return this.inputFocus;
      }
    },
    labelActive() {
      return this.label;
    },
    showMaxLengthCounter() {
      return this.typing && this.inputFocus && (this.maxlength && this.modelValue && !this.hideMaxlengthCounter);
    },
    showClearButton() {
      return !this.typing && (this.modelComputed && this.clearable);
    },
    showInputRightSideArea() {
      if (this.inputCategory === "password") {
        return true;
      } else {
        return this.showMaxLengthCounter || this.showClearButton;
      }
    },
    showInputLeftSideArea() {
      return this.leftIcon;
    },
    inputCategory() {
      if (this.type) {
        if (inputTypes.includes(this.type)) {
          return Object.keys(inputCategories).find((key) => {
            return inputCategories[key].includes(this.type);
          });
        }
      }
      return null;
    },
    inputMessage() {
      let messageData = {
        key: null,
        message: null,
        color: null,
        icon: null
      };
      if (this.showError.message || this.showError.highlight) {
        messageData.key = this.showError.highlight ? "error" : null;
        messageData.icon = this.showError.icon || "error";
        messageData.message = this.showError.message;
        messageData.color = colorUtilities.$error_color;
      } else if (this.showWarning.message || this.showWarning.highlight) {
        messageData.key = this.showWarning.highlight ? "warning" : null;
        messageData.icon = this.showWarning.icon || "warning";
        messageData.message = this.showWarning.message;
        messageData.color = colorUtilities.$warning_color;
      } else if (this.showSuccess.message || this.showSuccess.highlight) {
        messageData.key = this.showSuccess.highlight ? "success" : null;
        messageData.icon = this.showSuccess.icon || "check_circle";
        messageData.message = this.showSuccess.message;
        messageData.color = colorUtilities.$success_color_1;
      } else if (this.showInfo.message || this.showInfo.highlight) {
        messageData.key = this.showInfo.highlight ? "info" : null;
        messageData.icon = this.showInfo.icon || "info";
        messageData.message = this.showInfo.message;
        messageData.color = colorUtilities.$black_color;
      }
      return messageData;
    },
    visibilityTrigger: {
      set(val) {
        this.passwordVisibilityTrigger = val;
      },
      get() {
        return this.passwordVisibilityTrigger;
      }
    }
  },
  data() {
    return {
      inputTypes,
      model: null,
      readyForView: false,
      inputFocus: false,
      typing: false,
      debounceId: null,
      passwordVisibilityTrigger: false
    };
  },
  mounted() {
    const input = this.$refs["input-component"];
    if (input) {
      if (this.modelValue) {
        this.modelComputed = this.modelValue;
      }
      if (this.inputSize) {
        input.style.width = this.inputSize.width;
        input.style.height = this.inputSize.height;
      }
      if (this.midSize) {
        input.style.width = "100px";
        input.style.height = "30px";
      }
      if (this.style) {
        Object.entries(this.style).forEach(([key, value]) => {
          input.style[key] = value;
        });
      }
    }
    this.readyForView = true;
  },
  unmounted() {
    this.readyForView = false;
  },
  watch: {
    modelValue(val, oldVal) {
      if (val !== oldVal && !this.disabled) {
        this.modelComputed = this.modelValue;
      }
    },
    readyForView(val) {
      this.$emit("readyForView", val);
    }
  },
  methods: {
    generateUniqueId,
    clearAllButton() {
      this.modelComputed = null;
      const input = (void 0).getElementById(this.idComputed);
      if (input) {
        input.focus();
      }
    },
    handleInputChange() {
      this.typing = true;
      this.customDebounce(function() {
        this.typing = false;
      })();
    },
    customDebounce(func, delay = 400) {
      const self = this;
      return function(...args) {
        clearTimeout(self.debounceId);
        self.debounceId = setTimeout(() => {
          func.apply(self, args);
        }, delay);
      };
    },
    iconColorDetecter(main) {
      if (this.focusComputed) {
        return main ? main : colorUtilities.$black_color;
      }
      return colorUtilities.$black_color_4;
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const _component_icon_component = __nuxt_component_1$1;
  const _component_loading_component = __nuxt_component_2;
  if (_ctx.inputCategory === "writeable") {
    _push(`<div${ssrRenderAttrs(mergeProps({
      style: _ctx.readyForView ? null : { display: "none" },
      ref: "input-component",
      class: ["input-component writeable", {
        "active": _ctx.focusComputed,
        "deactive": !_ctx.focusComputed,
        "disabled": _ctx.disabled,
        "message-active": _ctx.inputMessage.message,
        "info": _ctx.inputMessage.key === "info",
        "error": _ctx.inputMessage.key === "error",
        "warning": _ctx.inputMessage.key === "warning",
        "success": _ctx.inputMessage.key === "success"
      }]
    }, _attrs))} data-v-d1ae12c6>`);
    if (_ctx.labelActive) {
      _push(`<label${ssrRenderAttr("for", _ctx.idComputed)} class="cannot-select" data-v-d1ae12c6>${ssrInterpolate(_ctx.label)} ${ssrInterpolate(_ctx.required && !_ctx.disabled ? "*" : null)}</label>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="input-container flex-row-center" data-v-d1ae12c6><div class="${ssrRenderClass([{ "deactive": !_ctx.showInputLeftSideArea }, "left-side"])}" data-v-d1ae12c6>`);
    _push(ssrRenderComponent(_component_icon_component, {
      class: "input-icon",
      fill: _ctx.focusComputed,
      "icon-name": (_a = _ctx.leftIcon) == null ? void 0 : _a.icon,
      "icon-size": (_b = _ctx.leftIcon) == null ? void 0 : _b.size,
      color: _ctx.iconColorDetecter((_c = _ctx.leftIcon) == null ? void 0 : _c.color)
    }, null, _parent));
    _push(`</div><input${ssrRenderAttr("id", _ctx.idComputed)}${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("name", _ctx.name)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""}${ssrIncludeBooleanAttr(_ctx.autofocus) ? " autofocus" : ""}${ssrRenderAttr("placeholder", _ctx.placeholder)}${ssrRenderAttr("maxlength", _ctx.maxlength)}${ssrIncludeBooleanAttr("readonly" in _ctx ? _ctx.readonly : unref(readonly)) ? " readonly" : ""}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${ssrRenderAttr("pattern", _ctx.pattern)} style="${ssrRenderStyle(_ctx.inputStyle)}"${ssrRenderAttr("autocomplete", _ctx.autocomplete)}${ssrRenderDynamicModel(_ctx.type, _ctx.modelComputed, null)} data-v-d1ae12c6><div class="${ssrRenderClass([{ "deactive": !_ctx.showInputRightSideArea }, "right-side"])}" data-v-d1ae12c6>`);
    if (_ctx.showMaxLengthCounter) {
      _push(`<div class="cannot-select char-counter" data-v-d1ae12c6>${ssrInterpolate(_ctx.modelValue.length)}/${ssrInterpolate(_ctx.maxlength)}</div>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.showClearButton) {
      _push(ssrRenderComponent(_component_icon_component, {
        onClick: _ctx.clearAllButton,
        "icon-name": "cancel",
        "icon-size": "2rem",
        class: "clear-icon",
        color: _ctx.iconColorDetecter((_d = _ctx.leftIcon) == null ? void 0 : _d.color)
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
    if (!!_ctx.inputMessage.message) {
      _push(`<div class="message-area cannot-select" data-v-d1ae12c6>`);
      if (!!_ctx.inputMessage.icon) {
        _push(ssrRenderComponent(_component_icon_component, {
          "icon-name": _ctx.inputMessage.icon,
          "icon-size": "1.3rem",
          class: "message-icon",
          color: _ctx.inputMessage.color
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span style="${ssrRenderStyle({ "color": _ctx.inputMessage.color })}" data-v-d1ae12c6>${ssrInterpolate(_ctx.inputMessage.message)}</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else if (_ctx.inputCategory === "password") {
    _push(`<div${ssrRenderAttrs(mergeProps({
      style: _ctx.readyForView ? null : { display: "none" },
      ref: "input-component",
      class: ["input-component writeable", {
        "active": _ctx.focusComputed,
        "deactive": !_ctx.focusComputed,
        "disabled": _ctx.disabled,
        "message-active": _ctx.inputMessage.message,
        "info": _ctx.inputMessage.key === "info",
        "error": _ctx.inputMessage.key === "error",
        "warning": _ctx.inputMessage.key === "warning",
        "success": _ctx.inputMessage.key === "success"
      }]
    }, _attrs))} data-v-d1ae12c6>`);
    if (_ctx.labelActive) {
      _push(`<label${ssrRenderAttr("for", _ctx.idComputed)} class="cannot-select" data-v-d1ae12c6>${ssrInterpolate(_ctx.label)} ${ssrInterpolate(_ctx.required && !_ctx.disabled ? "*" : null)}</label>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="input-container flex-row-center" data-v-d1ae12c6><div class="${ssrRenderClass([{ "deactive": !_ctx.showInputLeftSideArea }, "left-side"])}" data-v-d1ae12c6>`);
    _push(ssrRenderComponent(_component_icon_component, {
      class: "input-icon",
      fill: _ctx.focusComputed,
      "icon-name": (_e = _ctx.leftIcon) == null ? void 0 : _e.icon,
      "icon-size": (_f = _ctx.leftIcon) == null ? void 0 : _f.size,
      color: _ctx.iconColorDetecter((_g = _ctx.leftIcon) == null ? void 0 : _g.color)
    }, null, _parent));
    _push(`</div><input${ssrRenderAttr("id", _ctx.idComputed)}${ssrRenderAttr("type", _ctx.visibilityTrigger ? "text" : _ctx.type)}${ssrRenderAttr("name", _ctx.name)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""}${ssrIncludeBooleanAttr(_ctx.autofocus) ? " autofocus" : ""}${ssrRenderAttr("placeholder", _ctx.placeholder || "•••••••••")}${ssrRenderAttr("maxlength", _ctx.maxlength)}${ssrIncludeBooleanAttr("readonly" in _ctx ? _ctx.readonly : unref(readonly)) ? " readonly" : ""}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${ssrRenderAttr("pattern", _ctx.pattern)} style="${ssrRenderStyle(_ctx.inputStyle)}"${ssrRenderAttr("autocomplete", _ctx.autocomplete)}${ssrRenderDynamicModel(_ctx.visibilityTrigger ? "text" : _ctx.type, _ctx.modelComputed, null)} data-v-d1ae12c6><div class="${ssrRenderClass([{ "deactive": !_ctx.showInputRightSideArea }, "right-side"])}" data-v-d1ae12c6>`);
    if (_ctx.modelComputed) {
      _push(ssrRenderComponent(_component_icon_component, {
        onClick: ($event) => _ctx.visibilityTrigger = !_ctx.visibilityTrigger,
        "icon-name": _ctx.visibilityTrigger ? "visibility" : "visibility_off",
        "icon-size": "2rem",
        class: "clear-icon",
        color: _ctx.iconColorDetecter((_h = _ctx.leftIcon) == null ? void 0 : _h.color)
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
    if (!!_ctx.inputMessage.message) {
      _push(`<div class="message-area cannot-select" data-v-d1ae12c6>`);
      if (!!_ctx.inputMessage.icon) {
        _push(ssrRenderComponent(_component_icon_component, {
          "icon-name": _ctx.inputMessage.icon,
          "icon-size": "1.3rem",
          class: "message-icon",
          color: _ctx.inputMessage.color
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span style="${ssrRenderStyle({ "color": _ctx.inputMessage.color })}" data-v-d1ae12c6>${ssrInterpolate(_ctx.inputMessage.message)}</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else if (_ctx.inputCategory === "buttons") {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: [
        "input-component buttons cannot-select",
        `${_ctx.isLoading ? "is-loading" : ""} ${_ctx.disabled ? "disabled" : ""} button-type-` + _ctx.buttonType
      ],
      ref: "input-component",
      style: _ctx.readyForView ? null : { display: "none" }
    }, _attrs))} data-v-d1ae12c6>`);
    if (_ctx.isLoading) {
      _push(`<div class="image-box" data-v-d1ae12c6>`);
      _push(ssrRenderComponent(_component_loading_component, {
        id: _ctx.idComputed,
        size: "25",
        type: "5",
        color: "white",
        speed: ".8"
      }, null, _parent));
      _push(`</div>`);
    } else {
      _push(`<input${ssrRenderAttr("id", _ctx.idComputed)}${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("name", _ctx.name)}${ssrIncludeBooleanAttr(_ctx.autofocus) ? " autofocus" : ""}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""} style="${ssrRenderStyle(_ctx.inputStyle)}"${ssrRenderAttr("value", _ctx.label)} class="${ssrRenderClass({ "mid-size": _ctx.midSize })}" data-v-d1ae12c6>`);
    }
    _push(`</div>`);
  } else if (_ctx.inputCategory === "selectable") {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: ["input-component selectable", { "disabled": _ctx.disabled }],
      style: _ctx.readyForView ? null : { display: "none" }
    }, _attrs))} data-v-d1ae12c6><input${ssrRenderAttr("id", _ctx.idComputed)}${ssrRenderAttr("type", _ctx.type)}${ssrRenderAttr("name", _ctx.name)}${ssrIncludeBooleanAttr(_ctx.autofocus) ? " autofocus" : ""}${ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""} style="${ssrRenderStyle(_ctx.inputStyle)}"${ssrRenderAttr("value", _ctx.value)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} class="${ssrRenderClass({ "disabled": _ctx.disabled })}"${ssrRenderDynamicModel(_ctx.type, _ctx.modelComputed, _ctx.value)} data-v-d1ae12c6>`);
    if (_ctx.label) {
      _push(`<label${ssrRenderAttr("for", _ctx.idComputed)} class="${ssrRenderClass([{ "disabled": _ctx.disabled }, "cannot-select"])}" data-v-d1ae12c6>${ssrInterpolate(_ctx.label)}</label>`);
    } else if (_ctx.htmlLabel) {
      _push(`<label${ssrRenderAttr("for", _ctx.idComputed)} class="${ssrRenderClass([{ "disabled": _ctx.disabled }, "cannot-select"])}" data-v-d1ae12c6><span data-v-d1ae12c6>${_ctx.htmlLabel}</span></label>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InputComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d1ae12c6"]]);
let timeOutId;
const _sfc_main = defineComponent({
  name: "MessageComponent",
  props: {
    message: [String, Number],
    type: {
      type: String,
      default: () => "warn"
    },
    hideIcon: Boolean,
    hideAnimation: Boolean
  },
  data() {
    return {
      colorUtilities,
      timeOut: 1200,
      timeOutId
    };
  },
  methods: {
    addBounceEffect() {
      this.timeOutId = setTimeout(() => {
        const element = (void 0).getElementsByClassName(this.type)[0];
        if (element) {
          element.classList.add("bounce");
        }
        clearTimeout(this.timeOutId);
      }, this.timeOut);
    }
  },
  mounted() {
    if (!this.hideAnimation) {
      this.addBounceEffect();
    }
  },
  unmounted() {
    clearTimeout(this.timeOutId);
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon_component = __nuxt_component_1$1;
  if (_ctx.type === "error") {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.type }, _attrs))} data-v-d3b3991c>`);
    if (!_ctx.hideIcon) {
      _push(ssrRenderComponent(_component_icon_component, {
        "icon-name": "error",
        "icon-size": "25",
        color: _ctx.colorUtilities.$error_color_1
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<b data-v-d3b3991c>${ssrInterpolate(_ctx.message)}</b></span>`);
  } else if (_ctx.type === "warn") {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.type }, _attrs))} data-v-d3b3991c>`);
    if (!_ctx.hideIcon) {
      _push(ssrRenderComponent(_component_icon_component, {
        "icon-name": "warning",
        "icon-size": "25",
        color: _ctx.colorUtilities.$warning_color_3
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<b data-v-d3b3991c>${ssrInterpolate(_ctx.message)}</b></span>`);
  } else if (_ctx.type === "success") {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.type }, _attrs))} data-v-d3b3991c>`);
    if (!_ctx.hideIcon) {
      _push(ssrRenderComponent(_component_icon_component, {
        fill: "",
        "icon-name": "check_circle",
        "icon-size": "25",
        color: _ctx.colorUtilities.$success_color_1
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<b data-v-d3b3991c>${ssrInterpolate(_ctx.message)}</b></span>`);
  } else if (_ctx.type === "info") {
    _push(`<span${ssrRenderAttrs(mergeProps({ class: _ctx.type }, _attrs))} data-v-d3b3991c>`);
    if (!_ctx.hideIcon) {
      _push(ssrRenderComponent(_component_icon_component, {
        "icon-name": "info",
        "icon-size": "25",
        color: _ctx.colorUtilities.$black_color_2
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`<b data-v-d3b3991c>${ssrInterpolate(_ctx.message)}</b></span>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MessageComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d3b3991c"]]);
export {
  __nuxt_component_1 as _,
  __nuxt_component_2 as a,
  __nuxt_component_3 as b
};
//# sourceMappingURL=MessageComponent-e368mHQc.js.map
