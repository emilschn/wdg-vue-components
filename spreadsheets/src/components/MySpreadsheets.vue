<template>
  <div class="my-spreasheets">
	<h1>Calculateur de royalties</h1>
	<p>
		Version : {{version}}<br>
		Complétez les cases blanches
	</p>

	<h2>Mon prévisionnel</h2>

	<MySelect labelSelect="Ce prévisionnel concerne" idSelect="blablaid" nameSelect="blablaname" :optionItems=selectPreviOptions :onSelectedEvent=selectPreviChangeEvent></MySelect>
	<br>

	<MySelect labelSelect="Nombre d'années" idSelect="nbyear" nameSelect="nbyear" :optionItems=selectNbYearsOptions :onSelectedEvent=selectNbYearsChangeEvent></MySelect>
	<br>
	
	<MyEstimatedYear v-for="yearItem in listYears" :item=yearItem :onInputEvent=estimatedYearInputEvent></MyEstimatedYear>
	<br>

	<div class="clear">
		Total CA : {{ totalTurnover }} k€<br>
		Marge moyenne : {{ averageMargin }} %<br>
	</div>
  </div>
</template>

<script>
import MySelect from '@/components/MySelect'
import MyEstimatedYear from '@/components/MyEstimatedYear'

export default {
	name: 'MySpreadsheets',
	components: {
		MySelect,
		MyEstimatedYear
	},
	data () {
		return {
			version: 'novembre 2019',
			//nbYearInit: 0,
			listYears: Array(),
			totalTurnover: 0,
			averageMargin: 0,
			selectPreviOptions: [
				{ Id: "1", Text: "L'activité générale de mon entreprise" },
				{ Id: "2", Text: "Une nouvelle activité annexe de mon entreprise" }
			],
			selectNbYearsOptions: [
				{ Id: "1", Text: "1" },
				{ Id: "2", Text: "2" },
				{ Id: "3", Text: "3" },
				{ Id: "4", Text: "4" },
				{ Id: "5", Text: "5" },
				{ Id: "6", Text: "6" },
				{ Id: "7", Text: "7" }
			]
		}
	},
	methods: {
		/*initListYear() {
			for ( var i = 0; i < this.nbYearInit; i++ ) {
				if ( this.listYears[ i ] == undefined ) {
					this.listYears.splice( i, 0, this.initItem( i + 1 ) );
				}
			}
		},*/

		initItem( index ) {
			var buffer = {
				index: index,
				turnover: 0,
				marginPercent: 0
			};
			return buffer;
		},

		selectPreviChangeEvent( val ){
			// Rien
		},

		selectNbYearsChangeEvent( val ){
			var nVal = Number( val );
			for ( var i = 0; i < val; i++ ) {
				if ( this.listYears[ i ] == undefined ) {
					this.listYears.splice( i, 0, this.initItem( i + 1 ) );
				}
			}
			while ( this.listYears.length > val ) {
				this.listYears.pop();
			}

			this.updateCalculation();
		},

		estimatedYearInputEvent( yearObject ){
			this.listYears[ yearObject.index - 1 ].turnover = yearObject.turnover;
			this.listYears[ yearObject.index - 1 ].marginPercent = yearObject.marginPercent;
			this.updateCalculation();
		},

		updateCalculation() {
			this.totalTurnover = 0;
			var totalmarginPercent = 0;
			for ( var i = 0; i < this.listYears.length; i++ ) {
				this.totalTurnover += Number( this.listYears[ i ].turnover );
				totalmarginPercent += Number( this.listYears[ i ].marginPercent );
			}
			this.averageMargin = totalmarginPercent / this.listYears.length;
			console.log( 'fin update calc' );
		}
	},
	mounted(){
		//this.initListYear();
	}
}
</script>

<style>
	.clear {
		clear: both;
	}
</style>