<template>
  <div class="my-estimated-year">
	  <label>Année {{ item.index }}</label><br>
	  <input type="text" :id="'turnover-' + item.index" v-model="turnover" v-on:input="onInputLocalEvent"> k€<br>
	  <input type="text" :id="'margin-' + item.index" v-model="margin" v-on:input="onInputLocalEvent"> k€<br>
	  <span>{{ marginPercent }}</span> %<br>
	  <input type="text" :id="'treasury-' + item.index" v-model="treasury" v-on:input="onInputLocalEvent"> €<br>

  </div>
</template>

<script>
export default {
	name: 'MyEstimatedYear',
	props: {
		item: Object,
		onInputEvent: Function
	},

	data () {
		return {
			turnover: "0",
			margin: "0",
			marginPercent: "0",
			treasury: "0"
		}
	},

	methods: {
		onInputLocalEvent( val ) {
			if ( this.turnover != 0 ) {
				this.marginPercent = this.margin / this.turnover;
			} else {
				this.marginPercent = 0;
			}

			var returnObject = {
				'index': this.item.index,
				'turnover': this.turnover,
				'marginPercent': this.marginPercent
			};
			this.onInputEvent( returnObject );
		}
	}
}
</script>

<style>
.my-estimated-year {
	float: left;
}
</style>
