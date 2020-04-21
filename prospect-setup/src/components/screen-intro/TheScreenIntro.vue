<template>
	<div class="the-screen-intro">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  >
			<slot slot="title">{{ $t('project-setup.intro.TITLE') }}</slot>
		</TheTabTitle>
        <div class="content">
            <div class="left">
                <div class="result">
                    <span class="title">{{ $t('project-setup.intro.TEXT_1') }}</span><br>
                    <span class="text">{{ $t('project-setup.intro.TEXT_2') }}</span><br>
                </div>
                <div class="time">
                    <div><img src="@/assets/picto_clock.png"  alt="WE DO GOOD" /></div>
                    <div class="content">
                        <span class="title">{{ $t('project-setup.intro.TEXT_3') }}</span><br>
                        <span class="text">{{ $t('project-setup.intro.TEXT_4') }}</span>
                    </div>
                </div>
            </div>
            <WDGMascot type="face-2">
                <slot slot="text">
                    <span>
                        <span class="title">{{ $t('project-setup.intro.MASCOT_TEXT_1') }}</span>
                        <ul>
                            <li>{{ $t('project-setup.intro.MASCOT_TEXT_2') }}</li>
                            <li>{{ $t('project-setup.intro.MASCOT_TEXT_3') }}</li>
                            <li>{{ $t('project-setup.intro.MASCOT_TEXT_4') }}</li>
                        </ul>
                    </span>
                </slot>
            </WDGMascot>
        </div>
        <WDGButton
            color="red"
            type="button"
            :clickEvent="changeStep"
            >
            <slot slot="label">{{ $t('project-setup.START') }}</slot>
        </WDGButton>
        <TheProjectLinkSend></TheProjectLinkSend>
        <br>
	</div>
</template>

<script>
// import i18n from '@/i18n'
import { store } from '../../store.js'
import TheTabTitle from '@/components/common/TheTabTitle'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGButton from '@/../../common/src/components/WDGButton'
import TheProjectLinkSend from '@/components/screen-intro/TheProjectLinkSend'

export default {
	name: 'TheScreenIntro',
	components: {
		TheTabTitle,
		WDGMascot,
		WDGButton,
        TheProjectLinkSend
	},
	props: {
	},
	data () {
		return {
		}
	},
    methods: {
        changeStep: function (event) {
            store.changeStep('project-infos')
        }
    },
	computed: {
	}
}
</script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&display=swap");

    .the-screen-intro .the-tab-title {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
		text-align: left;
	}
    .the-screen-intro .content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    }
	.the-screen-intro .result {
        width:322px;
        height:200px;
		background-image: url("../../assets/intro_bulle.png");
	}
	.the-screen-intro .result .title {
		font-size: 24px;
        font-weight: 700;
        position: relative;
        display: inline-block;
        width:250px;
        left: 55px;
        top:30px;
        line-height: 30px;
	}
	.the-screen-intro .result .text {
        position: relative;
        display: inline-block;
        width:250px;
        left: 55px;
        top:50px;
        font-weight: 500;
	}
	.the-screen-intro .time {
        width:322px;
        display: flex;
        margin-top: 50px;
	}
    .the-screen-intro .time .content {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 18px;
    }
	.the-screen-intro .time .title {
		font-size: 16px;
        color:#00879b;
        font-weight: 700;
	}
	.the-screen-intro .time .text {
        color:#a8a8a8;
        font-weight: 400;
	}
    .the-screen-intro .wdg-mascot.face-2 .title {
		font-size: 24px;
		font-style: normal;
        font-weight: bold;
    }
    .the-screen-intro .wdg-mascot.face-2 ul {
		padding: 0;
    }
    .the-screen-intro .wdg-mascot.face-2 li {
        list-style: none; /* Remove list bullets */
		padding: 0px;
		margin: 10px;
		font-size: 16px;
		font-style: normal;
        font-weight: 500;
        text-align: left;
    }
    .the-screen-intro .wdg-mascot.face-2 li:before {
        content: "✔";
        color: #00879b;
        padding-right: 18px;
    }
	.the-screen-intro .wdg-button {
		text-align: center;
	}
	.the-screen-intro button {
		margin-top: 0px;
		margin-bottom: 0px;
		max-width: 176px;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
	}
    .the-screen-intro .the-project-link-send{
		margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

    }
</style>
