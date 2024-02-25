import {defineComponent} from 'vue';
import {
    developerAnnounce,
    generateUniqueId,
} from 'assets/scripts/helpers/generalHelpers.js';
import {inputCategories, inputTypes} from "assets/scripts/constants/inputConstants.js";
import colorUtilities from "assets/scripts/constants/colorUtilities.js";

//#TODO: This components aren't Vue file. Be careful for it!
import IconComponent from "assets/scripts/components/iconComponent.js";
import LoadingComponent from "assets/scripts/components/loadingComponent.js";

export default defineComponent({
    name: "InputComponent",
    components: { IconComponent, LoadingComponent },
    emits: [
        'click',
        'inputFocus',
        'readyForView',
        'update:modelValue',
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
            default: () => 'text'
        },
        name: {
            type: String,
            default: () => 'text'
        },
        placeholder: String,
        inputSize: {
            type: Object,
            default: () => {
                return {
                    width: '300px',
                    height: '50px'
                }
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
            default: () => '0'
        },
        showSuccess: {
            type: Object,
            default: () => {
                return {
                    message: null,
                    highlight: false,
                    icon: null
                }
            }
        },
        showInfo: {
            type: Object,
            default: () => {
                return {
                    message: null,
                    highlight: false,
                    icon: null
                }
            }
        },
        showWarning: {
            type: Object,
            default: () => {
                return {
                    message: null,
                    highlight: false,
                    icon: null
                }
            }
        },
        showError: {
            type: Object,
            default: () => {
                return {
                    message: null,
                    highlight: false,
                    icon: null
                }
            }
        },
    },
    computed: {
        colorUtilities() {
            return colorUtilities
        },
        idComputed(){
            if(!this.id){
                developerAnnounce('Input component required an id!');
                return this.generateUniqueId();
            }
            return this.id;
        },
        modelComputed:{
            set(val){
                if(!this.disabled){
                    this.model = val;
                    this.$emit('update:modelValue', val);
                }
            },
            get(){
                return this.model;
            }
        },
        focusComputed: {
            set(val){
                this.inputFocus = val;
                this.$emit('inputFocus', val);
            },
            get(){
                return this.inputFocus;
            }
        },
        labelActive(){
            return this.label;
        },
        showMaxLengthCounter(){
            return this.typing
                && this.inputFocus
                && (this.maxlength
                    && this.modelValue
                    && !this.hideMaxlengthCounter);
        },
        showClearButton(){
            return !this.typing && (this.modelComputed && this.clearable);
        },
        showInputRightSideArea(){
            if(this.inputCategory === 'password'){
                return true;
            } else {
                return this.showMaxLengthCounter || this.showClearButton;
            }
        },
        showInputLeftSideArea(){
            return this.leftIcon;
        },
        inputCategory() {
            if(this.type){
                if(inputTypes.includes(this.type)){
                    return Object.keys(inputCategories).find(key => {
                        return inputCategories[key].includes(this.type)
                    })
                }
            }
            return null;
        },
        inputMessage(){
            let messageData = {
                key: null,
                message: null,
                color: null,
                icon: null
            }
            if (this.showError.message || this.showError.highlight){
                messageData.key = this.showError.highlight ? 'error' : null;
                messageData.icon = this.showError.icon || 'error';
                messageData.message = this.showError.message;
                messageData.color = colorUtilities.$error_color;
            } else if (this.showWarning.message || this.showWarning.highlight){
                messageData.key = this.showWarning.highlight ? 'warning' : null;
                messageData.icon = this.showWarning.icon || 'warning';
                messageData.message = this.showWarning.message;
                messageData.color = colorUtilities.$warning_color
            } else if (this.showSuccess.message || this.showSuccess.highlight){
                messageData.key = this.showSuccess.highlight ? 'success' : null;
                messageData.icon = this.showSuccess.icon || 'check_circle';
                messageData.message = this.showSuccess.message;
                messageData.color = colorUtilities.$success_color_1;
            } else if (this.showInfo.message || this.showInfo.highlight){
                messageData.key = this.showInfo.highlight ? 'info' : null;
                messageData.icon = this.showInfo.icon || 'info';
                messageData.message = this.showInfo.message;
                messageData.color = colorUtilities.$black_color;
            }
            return messageData
        },
        visibilityTrigger: {
            set(val){
                this.passwordVisibilityTrigger = val;
            },
            get(){
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
        }
    },
    mounted() {
        const input = this.$refs['input-component'];
        if(input){
            if(this.modelValue){
                this.modelComputed = this.modelValue;
            }
            if(this.inputSize){
                input.style.width = this.inputSize.width;
                input.style.height = this.inputSize.height;
            }
            if(this.midSize){
                input.style.width = 100 + 'px';
                input.style.height = 30 + 'px';
            }
            if(this.style){
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
        modelValue(val, oldVal){
            if(val !== oldVal && !this.disabled){
                this.modelComputed = this.modelValue;
            }
        },
        readyForView(val) {
                this.$emit('readyForView', val)
        }
    },
    methods:{
        generateUniqueId,
        clearAllButton(){
            this.modelComputed = null;
            const input = document.getElementById(this.idComputed);
            if(input){
                input.focus();
            }
        },
        handleInputChange(){
            this.typing = true;
            this.customDebounce(function (){
                this.typing = false;
            })();
        },
        customDebounce(func, delay = 400) {
            const self = this
            return function(...args) {
                clearTimeout(self.debounceId);
                self.debounceId = setTimeout(() => {
                    func.apply(self, args);
                }, delay);
            };
        },
        iconColorDetecter(main) {
            if(this.focusComputed){
                return main ? main : colorUtilities.$black_color;
            }
            return colorUtilities.$black_color_4
        },
    }
});