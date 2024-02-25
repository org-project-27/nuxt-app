import {defineComponent} from 'vue'
import iconsList from "assets/images/icons/materialIconsList";
import {stringToElement} from 'assets/scripts/helpers/generalHelpers.js';
import colorUtilities from "assets/scripts/constants/colorUtilities.js";

export default defineComponent({
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
            default: () => '40px'
        },
        color:  {
            type: String,
            default: () => colorUtilities.$black_color
        },
    },
    computed: {
        iconComputed() {
            if (this.iconName) {
                if (this.iconsList[this.iconName]) {
                    return this.iconsList[this.iconName][this.fill ? 'fill' : 'simple'];
                }
            }
            return null;
        }
    },
    data() {
        return {
            iconsList,
        }
    },
    mounted() {
        this.getStyledByProps();
    },
    methods: {
        stringToElement,
        getStyledByProps() {
            let parent = this.$refs['custom-icon'];
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
        fill(val, oldVal)
        {
            if (val !== oldVal) this.getStyledByProps();
        },
        color(val, oldVal)
        {
            if (val !== oldVal) this.getStyledByProps();
        },
        iconSize(val, oldVal)
        {
            if (val !== oldVal) this.getStyledByProps();
        },
        iconName(val, oldVal)
        {
            if (val !== oldVal) this.getStyledByProps();
        },
    }
})