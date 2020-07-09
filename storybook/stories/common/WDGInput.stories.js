import WDGInput from './../../../common/src/components/WDGInput';

export default {
  title: 'WDGInput',
  component: WDGInput,
};

export const SingleLineNoStyle = () => ({
	components: { WDGInput },
	template: '<WDGInput></WDGInput>',
});

export const SingleLine = () => ({
	components: { WDGInput },
	template: '<WDGInput customStyle="natural-language"></WDGInput>',
});

export const SingleLineLabel = () => ({
	components: { WDGInput },
	template: '<div style="font-family: Trebuchet MS"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput></div>',
});

export const SingleLineLabelComment = () => ({
	components: { WDGInput },
	template: '<div style="font-family: Trebuchet MS"><WDGInput customStyle="natural-language"><slot slot="label">Label</slot><slot slot="comment">Comment</slot></WDGInput></div>',
});

export const GreyBG = () => ({
	components: { WDGInput },
	template: '<div style="background: #e1e2e3; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const BlackBG = () => ({
	components: { WDGInput },
	template: '<div style="background: #333; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const RedBG = () => ({
	components: { WDGInput },
	template: '<div style="background: #EA4F51; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const BlueBG = () => ({
	components: { WDGInput },
	template: '<div style="background: #00879B; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const GreenBG = () => ({
	components: { WDGInput },
	template: '<div style="background: #5EB82C; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const YellowBG = () => ({
	components: { WDGInput },
	template: '<div style="background: #EBCE67; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const PinkBG = () => ({
	components: { WDGInput },
	template: '<div style="background: #F9CBCB; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const AlignCenter = () => ({
	components: { WDGInput },
	template: '<div style="text-align: center; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const AlignRight = () => ({
	components: { WDGInput },
	template: '<div style="text-align: right; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const Margin = () => ({
	components: { WDGInput },
	template: '<div style="margin: 20px; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});

export const MaxWidth400 = () => ({
	components: { WDGInput },
	template: '<div style="max-width: 400px; width: 100%; font-family: Trebuchet MS;"><WDGInput customStyle="natural-language"><slot slot="label">Name :</slot></WDGInput><br><br><WDGInput customStyle="natural-language"></WDGInput><br><br><WDGInput :multiline="true" customStyle="natural-language"></WDGInput></div>',
});