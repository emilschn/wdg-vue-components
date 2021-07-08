<template>
	<div
	  class="wdg-message"
	  :class="[ 'border-'+iconColor ]"
	  >
		<span
			v-show="iconFont"
			:class="[ 'fas', `fa-${this.iconFont}`, 'icon-'+iconColor ]"
			>
		</span>
		<span v-if="iconSVG !== null" class="icon">
			<svg width="30" height="30">
				<image
				  :href="getIcon"
				  :src="getIcon"
				  width="30"
				  height="30"
				  />
			</svg>
		</span>
		<span class="text">
			<slot name="label"></slot>
		</span>
	</div>
</template>

<script>
export default {
	name: 'WDGMessage',
	props: {
		id: { type: String, default: null },
		iconSVG: { type: String, default: null },
        iconFont: { type: String, default: null },
		iconColor: { type: String, default: 'black' }
    },
    computed: {
		getIcon: function () {
			let iconSrc = ''
			if (this.iconSVG !== '') {
				iconSrc = this.iconSVG
			} else if (this.iconFont !== '') {
				iconSrc = this.iconFont
			} else if (this.iconColor !== '') {
				iconSrc = this.iconColor
			}
			return require('@/../../common/src/assets/icons/' + iconSrc)
		}
    }
}
</script>

<style>
.wdg-message {
	text-align: left;
	height: 100%;
	width: 100%;
	padding: 14px;
	margin: 0px;
	border: 1px solid;
	box-sizing: border-box;
	display: flex;
	align-items: center;
}
.wdg-message .text {
	margin-left: 10px;
}
.wdg-message .icon-white {
	font-size: 20px;
	color: #FFFFFF;
}
.wdg-message.border-white {
	border-color: #FFFFFF;
}
.wdg-message .icon-black {
	font-size: 20px;
	color: #333333;
}
.wdg-message.border-black {
	border-color: #333333;
}
.wdg-message .icon-blue {
	font-size: 20px;
	color: #00879B;
}
.wdg-message.border-blue {
	border-color: #00879B;
}
.wdg-message .icon-paleblue {
	font-size: 20px;
	color: #B3DAE1;
}
.wdg-message.border-paleblue {
	border-color: #B3DAE1;
}
.wdg-message .icon-red {
	font-size: 20px;
	color: #EA4F51;
}
.wdg-message.border-red {
	border-color: #EA4F51;
}
.wdg-message .icon-yellow {
	font-size: 20px;
	color: #EBCE67;
}
.wdg-message.border-yellow {
	border-color: #EBCE67;
}
.wdg-message .icon-green {
	font-size: 20px;
	color: #5EB82C;
}
.wdg-message.border-green {
	border-color: #5EB82C;
}
.wdg-message .icon-grey {
	font-size: 20px;
	color: #e1e2e3;
}
.wdg-message.border-grey {
	border-color: #e1e2e3;
}
.wdg-message .icon-palegreen {
	font-size: 20px;
	color: #CEE9C0;
}
.wdg-message.border-palegreen {
	border-color: #CEE9C0;
}
.wdg-message .icon-pink {
	font-size: 20px;
	color: #F9CBCB;
}
.wdg-message.border-pink {
	border-color: #F9CBCB;
}
</style>
