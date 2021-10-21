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
		// NB : on a 3 cercles d'investisseurs, mais avec la revue des offres, les cercles lovemoney et private renvoient tous les 2 vers l'offre private
		changeCircle (circleSelected) {
			this.sharedState.project.circlesToCommunicate = circleSelected
			this.sharedState.project.chosenFormula = circleSelected
			if (circleSelected === 'lovemoney') {
				this.sharedState.project.chosenFormula = 'private'
			}
		}
	}
}
</script>

<style>
div.the-project-investors-circles {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
div.the-project-investors-circles div.circle {
	border-radius: 50%;
	cursor: pointer;
	width: 49%;
}
div.the-project-investors-circles div.circle-public {
	width: 250px;
	height: 250px;
	border: 1px solid #ebebeb;
}
div.the-project-investors-circles div.circle-public.selected {
	background: #ebebeb;
}

div.the-project-investors-circles div.circle.inner {
	position: relative;
	left: 50px;
	top: 50px;
}
div.the-project-investors-circles div.circle-private {
	width: 150px;
	height: 150px;
	border: 1px solid #c2c2c2;
}
div.the-project-investors-circles div.circle-private.selected {
	background: #c2c2c2;
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
	margin-top: 30px;
	margin-right: 16px;
	/* width: calc(100% - 255px); largeur cercle + les bordures */
	max-width: 160px;
	width: 49%;
}
div.the-project-investors-circles button {
	font-weight: bold;
	text-transform: capitalize;
}
div.the-project-investors-circles button.button-public {
	border: 2px solid #ebebeb;
	background: #FFF;
	color: #333;
}
div.the-project-investors-circles button.button-public.selected {
	background: #ebebeb;
	color: #333;
}
div.the-project-investors-circles button.button-public.selected::before {
	content: "\002713";
	margin-right: 5px;
}
div.the-project-investors-circles button.button-private {
	border: 2px solid #c2c2c2;
	background: #FFF;
	color: #333;
}
div.the-project-investors-circles button.button-private.selected {
	background: #c2c2c2;
	color: #333;
}
div.the-project-investors-circles button.button-private.selected::before {
	content: "\002713";
	margin-right: 5px;
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
	margin-right: 5px;
}
@media only screen and (max-width: 767px) {
	div.the-project-investors-circles div.circle.inner {
		left: 0;
		top: 0;
	}
}
</style>
