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
                    <div class="clock-text">
                        <span class="title">{{ $t('project-setup.intro.TEXT_3') }}</span>
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
    .the-screen-intro .the-tab-title {
        font-weight: 700;
		text-align: left;
	}
    .the-screen-intro .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0px 15px;
    }
    .the-screen-intro .content .left {
        margin-top: 60px;
    }
	.the-screen-intro .result .title {
		font-size: 24px;
        font-weight: 700;
        line-height: 2.2;
	}
	.the-screen-intro .result .text {
        font-weight: 500;
		font-size: 16px;
	}
	.the-screen-intro .time {
        display: flex;
        margin-top: 50px;
        border: 1px solid #B3DAE1;
        padding: 20px;
        align-items: center;
	}
    .the-screen-intro .time .clock-text {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
	.the-screen-intro .time .title {
		font-size: 16px;
        color:#00879b;
        font-weight: 700;
        margin-bottom: 10px;
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
        padding-right: 10px;
    }
	.the-screen-intro .wdg-button {
		text-align: center;
	}
	.the-screen-intro button {
		min-width: 176px;
		width: auto;
		margin-top: 0px;
		margin-bottom: 0px;
		padding: 0px 24px;
	}
    .the-screen-intro .the-project-link-send{
		margin-top: 10px;
        font-weight: 400;
    }
    .wdg-mascot{
        max-width: 300px;
    }
@media only screen and (max-width: 767px) {
    .the-screen-intro .content {
        flex-direction: column;
        width: auto;
    }
    .the-screen-intro .content .title{
        line-height: normal;
        display: block;
        margin-bottom: 8px;
    }
    .the-screen-intro .time {
        margin-bottom: 50px;
    }
    .wdg-mascot {
        display: none;
    }
    .the-screen-intro button {
        max-width: 200px;
    }
}
</style>
