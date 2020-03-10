<template>
	<div class="the-project-save">
		<svg width="20" height="20" v-if="status == 'init'">
			<image xlink:href="@/../../common/src/assets/icons/save.svg" src="@/../../common/src/assets/icons/save.png" width="20" height="20" />
		</svg>

		<svg width="20" height="20" v-if="status == 'waiting'">
			<image xlink:href="@/../../common/src/assets/icons/timer.svg" src="@/../../common/src/assets/icons/timer.png" width="20" height="20" />
		</svg>

		<svg width="20" height="20" v-if="status == 'saved'">
			<image xlink:href="@/../../common/src/assets/icons/check.svg" src="@/../../common/src/assets/icons/check.png" width="20" height="20" />
		</svg>

		<a @click="saveProjectEvent" v-if="status == 'init'">
			{{ $t('project-setup.SAVE_PROJECT') }}
		</a>

		<span v-if="status == 'waiting'">
			{{ $t('project-setup.SAVING_PROJECT') }}
		</span>

		<span v-if="status == 'saved'">
			{{ $t('project-setup.SAVED_PROJECT') }}
		</span>
	</div>
</template>

<script>

export default {
	name: 'TheProjectSave',
	data () {
		return {
			status: 'init'
		}
	},
	methods: {
		saveProjectEvent () {
			this.status = 'waiting'
			setTimeout(this.projectSaved, 2000)
		},

		projectSaved () {
			this.status = 'saved'
		}
	}
}
</script>

<style>
.the-project-save {
	text-align: center;
}
.the-project-save a, .the-project-save span {
	position: relative;
	top: -5px;
	display: inline-block;
	margin-left: 16px;
	font-size: 13px;
	color: #B4B4B4;
}
.the-project-save a {
	text-decoration: underline;
	cursor: pointer;
}
</style>
