import WDGInput from './../../../common/src/components/WDGInput';

export default {
  title: 'WDGInput',
  component: WDGInput,
};

export const SingleLine = () => ({
	components: { WDGInput },
	template: '<WDGInput></WDGInput>',
});

export const SingleLineLabel = () => ({
	components: { WDGInput },
	template: '<WDGInput><slot slot="label">Name :</slot></WDGInput>',
});

export const SingleLineLabelComment = () => ({
	components: { WDGInput },
	template: '<WDGInput><slot slot="label">Label</slot><slot slot="comment">Comment</slot></WDGInput>',
});

export const SingleLineLabelGreyBG = () => ({
	components: { WDGInput },
	template: '<div style="background: grey; width: 100%; height: 100px;"><WDGInput><slot slot="label">Name :</slot></WDGInput></div>',
});

export const SingleLineGreyBG = () => ({
	components: { WDGInput },
	template: '<div style="background: grey; width: 100%; height: 100px;"><WDGInput></WDGInput></div>',
});

export const MultilineGreyBG = () => ({
	components: { WDGInput },
	template: '<div style="background: grey; width: 100%; height: 100px;"><WDGInput :multiline="true"></WDGInput></div>',
});