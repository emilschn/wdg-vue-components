<template>
	<div class="wdg-slider">
		<VueSlideBar
		  v-model="slider.val"
		  :min="min"
		  :max="max"
		  :processStyle="slider.processStyle"
		  :lineHeight="slider.lineHeight"
		  :tooltipStyles="slider.tooltipStyles"
		  @input="changeValue"
		  >
			<template slot="tooltip">
				<div class="tooltipPerso">
				{{slider.val}} 000 €
				</div>
			</template>
		</VueSlideBar>
	</div>
</template>

<script>
import VueSlideBar from 'vue-slide-bar'

export default {
	name: 'WDGSlider',
	components: {
		VueSlideBar
	},
	props: {
		defaultValue: { type: Number, default: 5 },
		min: { type: Number, default: 1 },
		max: { type: Number, default: 10 },
		onChange: { type: Function }
	},
	data () {
		return {
			slider: {
				val: 0,
				lineHeight: 10,
				speed: 0.5,
				processStyle: {
					backgroundColor: '#424242'
				}
				/*,
				tooltipStyles: {
					backgroundColor: '#A3A3A3',
					fontWeight: 'bold',
					borderColor: '#979797',
					fontSize: '24px',
					top: '-10px',
					borderRadius: '8px'
				} */
			}
		}
	},
	methods: {
		changeValue (val) {
			this.slider.val = val
			this.$emit('update:valueReturn', val)
			this.onChange(val)
		}
	},
	mounted () {
		this.slider.val = this.defaultValue
	}
}
</script>

<style>
.tooltipPerso{
    background-color: #fff;
    color: #00879B;
	border: 1px solid #C2C2C2;
    font-size: 24px;
    font-weight: 700;
    width:130px;
    padding: 8px;
    position: absolute;
    top: -30px;
    cursor: pointer;
	text-align: center;
}
.tooltipPerso:after {
	content: "";
	position: absolute;
    bottom: -10px;
    left: 50%;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: inherit;
	transform: translate(-50%, 0);
	color: #C2C2C2;
}
.vue-slide-bar-component {
	padding-top: 60px !important; /* réécriture sur le CSS de l'élément externe pour l'adapter à la page */
}
.vue-slide-bar {
	border-radius: 0px !important;
	background-color: #EBEBEB !important;

}
.vue-slide-bar-process {
	border-radius: 0px !important;
	background-color: #00879B !important;
}
</style>
