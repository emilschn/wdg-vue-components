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
        />
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
        max: { type: Number, default: 10 }
	},
	data () {
		return {
            slider: {
                val: this.defaultValue,
                lineHeight: 10,
                processStyle: {
                    backgroundColor: '#424242'
                },
                tooltipStyles: {
                    backgroundColor: '#A3A3A3',
                    fontWeight: 'bold',
                    borderColor: '#979797',
                    fontSize: '24px',
                    top: '-10px',
                    borderRadius: '8px'
                }
            }
		}
	},
    methods: {
        changeValue (val) {
            console.log(val)
        }
    }
}
</script>

<style>
</style>
