<template>
	<div class="the-project-investors-circles">
		<div class="circle circle-public" @click.self="changeCircle('public')" :class="{ selected: sharedState.project.circlesToCommunicate === 'public' }">
			<div class="circle inner circle-private" @click.self="changeCircle('private')" :class="{ selected: sharedState.project.circlesToCommunicate === 'public' || sharedState.project.circlesToCommunicate === 'private' }">
				<div class="circle inner circle-lovemoney" @click.self="changeCircle('lovemoney')" :class="{ selected: sharedState.project.circlesToCommunicate !== '' }">
				</div>
			</div>
		</div>

		<div class="button-list">
			<button type="button" class="button-lovemoney" @click="changeCircle('lovemoney')" :class="{ selected: sharedState.project.circlesToCommunicate !== '' }">
				{{ $t('project-setup.project-investors.investors-circles.CIRCLE_LOVEMONEY') }}
			</button>
			<button type="button" class="button-private" @click="changeCircle('private')" :class="{ selected: sharedState.project.circlesToCommunicate === 'public' || sharedState.project.circlesToCommunicate === 'private' }">
				{{ $t('project-setup.project-investors.investors-circles.CIRCLE_PRIVATE') }}
			</button>
			<button type="button" class="button-public" @click="changeCircle('public')" :class="{ selected: sharedState.project.circlesToCommunicate === 'public' }">
				{{ $t('project-setup.project-investors.investors-circles.CIRCLE_PUBLIC') }}
			</button>
		</div>
	</div>
</template>

<script>
import { store } from '../../store.js'

export default {
	name: 'TheProjectInvestorsCircles',
	data () {
		return {
			sharedState: store.state
		}
	},
	methods: {
		changeCircle (circleSelected) {
			this.sharedState.project.circlesToCommunicate = circleSelected
		}
	}
}
</script>

<style>
div.the-project-investors-circles div.circle {
	border-radius: 50%;
	cursor: pointer;
}
div.the-project-investors-circles div.circle-public {
	float: left;
	width: 250px;
	height: 250px;
	border: 1px solid #B4B4B4;
}
div.the-project-investors-circles div.circle-public.selected {
	background: #B4B4B4;
}

div.the-project-investors-circles div.circle.inner {
	position: relative;
	left: 50px;
	top: 50px;
}
div.the-project-investors-circles div.circle-private {
	width: 150px;
	height: 150px;
	border: 1px solid #999;
}
div.the-project-investors-circles div.circle-private.selected {
	background: #999;
}
div.the-project-investors-circles div.circle-lovemoney {
	width: 50px;
	height: 50px;
	border: 1px solid #333;
}
div.the-project-investors-circles div.circle-lovemoney.selected {
	background: #333;
}

div.the-project-investors-circles div.button-list {
	float: right;
	margin-top: 30px;
	margin-right: 16px;
	width: calc(100% - 255px); /* largeur cercle + les bordures */
	max-width: 160px;
}
div.the-project-investors-circles button {
	font-weight: bold;
	text-transform: capitalize;
}
div.the-project-investors-circles button.button-public {
	border: 2px solid #B4B4B4;
	background: #FFF;
	color: #333;
}
div.the-project-investors-circles button.button-public.selected {
	background: #B4B4B4;
	color: #FFF;
}
div.the-project-investors-circles button.button-public.selected::before {
	content: "\002713";
}
div.the-project-investors-circles button.button-private {
	border: 2px solid #999;
	background: #FFF;
	color: #333;
}
div.the-project-investors-circles button.button-private.selected {
	background: #999;
	color: #FFF;
}
div.the-project-investors-circles button.button-private.selected::before {
	content: "\002713";
}
div.the-project-investors-circles button.button-lovemoney {
	border: 2px solid #333;
	background: #FFF;
	color: #333;
}
div.the-project-investors-circles button.button-lovemoney.selected {
	background: #333;
	color: #FFF;
}
div.the-project-investors-circles button.button-lovemoney.selected::before {
	content: "\002713";
}
</style>
