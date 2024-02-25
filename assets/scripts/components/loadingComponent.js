import {defineComponent} from 'vue'
import colorUtilities from "assets/scripts/constants/colorUtilities.js";
import {developerAnnounce, generateUniqueId} from "assets/scripts/helpers/generalHelpers.js";

export default defineComponent({
    name: "LoadingComponent",
    props: {
        id: [String, Number],
        type: {
            type: String,
            default: () => '2'
        },
        size: {
            type: String,
            default: () => '20'
        },
        color: {
            type: String,
            default: () => colorUtilities.$main_color
        },
        speed: {
            type: String,
            default: () => '1'
        }
    },
    computed:{
        idComputed(){
            if(!this.id){
                developerAnnounce('Loading component required an id!');
                return this.generateUniqueId();
            }
            return this.id;
        },
    },
    data(){
        return {
            readyForView: false
        }
    },
    mounted() {
        this.readyForView = false;
        this.getStyledAnimated();
    },
    methods: {
        generateUniqueId,
        getStyledAnimated(){
            this.$nextTick(() => {
                const element = document.getElementById(this.idComputed);
                switch (this.type){
                    case '1':
                        element.style.background = this.color;
                        element.style.padding = (Number(this.size) / 5) + 'px';
                        element.style.width = Number(this.size) + 'px';
                        element.style.animationDuration = `${1 / this.speed}s`
                        break;
                    case '2':
                        element.style.width = Number(this.size) + 'px';
                        element.style.backgroundSize = `${Number(this.size) / 3}px ${Number(this.size) / 3}px`;
                        element.style.aspectRatio = "1";
                        element.style.setProperty('--_c', `no-repeat radial-gradient(farthest-side, ${this.color} 92%, #0000)`);
                        element.style.animationDuration = `${1 / this.speed}s`
                        break;
                    case '3':
                        element.style.width = Number(this.size) + 'px';
                        element.style.border = `${this.size / 5}px solid ${this.color}`;
                        break;
                    case '4':
                        element.style.width = Number(this.size) + 'px';
                        element.style.backgroundSize = `${Number(this.size) / 4}px ${Number(this.size) / 4}px`;
                        element.style.aspectRatio = "1.154";
                        element.style.setProperty('--_g', `no-repeat radial-gradient(farthest-side, ${this.color} 92%, #0000)`);
                        element.style.animationDuration = `${1 / this.speed}s`
                        break;
                    case '5':
                        element.style.width = Number(this.size) + 'px';
                        element.style.animationDuration = `${1 / this.speed}s`
                        break;
                    case 'clock':
                        element.style.width = Number(this.size) + 'px';
                        element.style.color = this.color;
                        element.style.animationDuration = `${1 / this.speed}s`
                        break;
                    default:
                        element.style.display = 'none';
                }
                this.readyForView = true;
            })
        }
    },
    unmounted() {
        this.readyForView = false;
    },
    watch: {
        type(){
            this.readyForView = false;
            this.getStyledAnimated();
        },
        size(){
            this.readyForView = false;
            this.getStyledAnimated();
        },
        color(){
            this.readyForView = false;
            this.getStyledAnimated();
        },
        speed(){
            this.readyForView = false;
            this.getStyledAnimated();
        },
    }
})