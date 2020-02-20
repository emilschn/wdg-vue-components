<template>
  <div class="the-screen-project-infos">
    Coucou !<br><br>

  	<div>
		Ma structure est
		<WDGSelect id="organizationType" name="organizationType" :value="organizationType" v-bind:isInline="true" v-bind:hasFilter="true" :optionItems="organizationTypeList" v-bind:valueReturn.sync="organizationType" />
	</div>

	<div v-if="organizationType === 'not-created'">
		sous le nom de <WDGInput v-bind:isInline="true" />.
	</div>

	<div v-else>
		du nom de <WDGInput v-bind:isInline="true" />, immatriculée <WDGInput v-bind:isInline="true" />.
	</div>

	<div>
		J'ai besoin de <WDGInput v-bind:isInline="true" /> €,<br>
		pour mon actitivté de <WDGInput v-bind:isInline="true" /><br>
		J'ai connu WE DO GOOD via <WDGSelect v-bind:isInline="true" />
	</div>

	<div v-if="canShowUserInfos">
		Je m'appelle <WDGInput v-bind:isInline="true" />, vous pouvez me joindre<br>
		à l'adresse mail <WDGInput v-bind:isInline="true" /><br>
		et au numéro de téléphone <WDGInput v-bind:isInline="true" />.
	</div>
  </div>
</template>

<script>
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGInput from '@/../../common/src/components/WDGInput'

export default {
	name: 'TheScreenProjectInfos',
	components: {
		WDGInput,
		WDGSelect
	},
	props: {
		msg: String
	},
	data () {
		return {
			organizationTypeList: [
				{ Id: 'not-created', Text: 'En cours de création' },
				{ Id: 'sas', Text: 'SAS' }
			],
			organizationType: 'not-created',
			organizationName: '',
			organizationID: '',
			amountNeeded: 0,
			organizationDescription: '',
			sourceKnown: '',
			userName: '',
			userMail: '',
			userPhone: ''
		}
	},
	computed: {
		canShowUserInfos () {
			let buffer = false
			buffer = (this.organizationType !== 'not-created')
			return buffer
		}
	}
}
</script>

<style>
</style>
