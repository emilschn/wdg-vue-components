<template>
    <div class="wdg-message">
        <span v-show="iconFont" :class="[ 'glyphicon', `glyphicon-${this.iconFont}`, 'icon-'+iconColor ]"></span>
		<span v-if="iconSVG !== null" class="icon">
			<svg width="40" height="40">
				<image
				:href="getIcon"
				:src="getIcon"
				width="40"
				height="40"
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
	padding: 8px;
	margin: 0px;
	border: 1px solid #B3DAE1;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.wdg-message .text {
	left: 20px;
}
.wdg-message .icon-white {
	font-size: 20px;
    color: #FFFFFF;
}
.wdg-message .icon-black {
	font-size: 20px;
    color: #333333;
}
.wdg-message .icon-blue {
	font-size: 20px;
    color: #00879B;
}
.wdg-message .icon-red {
	font-size: 20px;
    color: #EA4F51;
}
.wdg-message .icon-yellow {
	font-size: 20px;
    color: #EBCE67;
}
.wdg-message .icon-green {
	font-size: 20px;
    color: #5EB82C;
}
.wdg-message .icon-grey {
	font-size: 20px;
    color: #e1e2e3;
}
.wdg-message .icon-palegreen {
	font-size: 20px;
    color: #CEE9C0;
}
.wdg-message .icon-pink {
	font-size: 20px;
    color: #F9CBCB;
}
</style>
