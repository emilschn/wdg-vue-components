import WDGFileList from './../../../common/src/components/WDGFileList';
import { i18n } from '../../src/plugins/i18n';

export default {
  title: 'WDGFileList',
  component: WDGFileList,
};

const listOneFile = [
	{ id: '1', url: 'https://www.wedogood.co' }
];
const listMultipleFile = [
	{ id: '1', url: 'https://www.wedogood.co' },
	{ id: '2', url: 'https://www.wedogood.co' },
	{ id: '3', url: 'https://www.wedogood.co' }
];

export const Empty = () => ({
	components: { WDGFileList },
	template: '<WDGFileList><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList>',
	i18n,
});

export const OneFile = () => ({
	components: { WDGFileList },
	template: '<WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});


export const OneFileBlackBackground = () => ({
	components: { WDGFileList },
	template: '<div style="background: #333;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileGreyBackground = () => ({
	components: { WDGFileList },
	template: '<div style="background-color: #e1e2e3; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlueBackground = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #00879B; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFilePinkBackground = () => ({ // pas très lisible le texte blanc sur rose + rose de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="background-color: #F9CBCB; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileGreenBackground = () => ({ // vert de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="background-color: #5EB82C; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileYellowBackground = () => ({ // pas très lisible le texte blanc sur jaune + jaune de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="background-color: #EBCE67; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundUppercase = () => ({
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-transform: uppercase;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundBold = () => ({
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; font-weight: 700;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundAlignCenter = () => ({ // le petit point avant "fichier 1" reste à gauche
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-align: center;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundAlignRight = () => ({ // le petit point avant "fichier 1" reste à gauche
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-align: right;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundItalic = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; font-style: italic"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundUnderline = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-decoration: underline #fff;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackText = () => ({ // ne modifie que le texte "aucun fichier choisi"
	components: { WDGFileList },
	template: '<div style="color: #333;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlueText = () => ({ // ne modifie que le texte "aucun fichier choisi"
	components: { WDGFileList },
	template: '<div style="color: #00879B;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileRedText = () => ({ // ne modifie que le texte "aucun fichier choisi"
	components: { WDGFileList },
	template: '<div style="color: #EA4F51;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileGreenText = () => ({ // ne modifie que le texte "aucun fichier choisi" + vert de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="color: #5EB82C;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFilePinkText = () => ({ // ne modifie que le texte "aucun fichier choisi" + rose de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="color: #F9CBCB;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileYellowText = () => ({ // ne modifie que le texte "aucun fichier choisi" + jaune de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="color: #EBCE67;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundMargin = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; margin: 20px;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const OneFileBlackBackgroundMaxWidth = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; max-width: 400px;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});


/////////////////////
/// MULTIPLE FILE ///
////////////////////


export const MultipleFile = () => ({
	components: { WDGFileList },
	template: '<WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackground = () => ({
	components: { WDGFileList },
	template: '<div style="background-color: #333"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileGreyBackground = () => ({
	components: { WDGFileList },
	template: '<div style="background-color: #e1e2e3; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlueBackground = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #00879B; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFilePinkBackground = () => ({ // pas très lisible le texte blanc sur rose + rose de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="background-color: #F9CBCB; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileGreenBackground = () => ({ // vert de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="background-color: #5EB82C; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileYellowBackground = () => ({ // pas très lisible le texte blanc sur jaune + jaune de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="background-color: #EBCE67; font-family: Trebuchet MS;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundUppercase = () => ({
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-transform: uppercase;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundBold = () => ({
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; font-weight: 700;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundAlignCenter = () => ({ // les petits points avant "fichier" restent à gauche
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-align: center;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundAlignRight = () => ({ // les petits points avant "fichier" restent à gauche
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-align: right;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundItalic = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; font-style: italic"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundUnderline = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; text-decoration: underline #fff;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackText = () => ({ // ne modifie que le texte "aucun fichier choisi"
	components: { WDGFileList },
	template: '<div style="color: #333;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlueText = () => ({ // ne modifie que le texte "aucun fichier choisi"
	components: { WDGFileList },
	template: '<div style="color: #00879B;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileRedText = () => ({ // ne modifie que le texte "aucun fichier choisi"
	components: { WDGFileList },
	template: '<div style="color: #EA4F51;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileGreenText = () => ({ // ne modifie que le texte "aucun fichier choisi" + vert de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="color: #5EB82C;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFilePinkText = () => ({ // ne modifie que le texte "aucun fichier choisi" + rose de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="color: #F9CBCB;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileYellowText = () => ({ // ne modifie que le texte "aucun fichier choisi" + jaune de la nouvelle charte
	components: { WDGFileList },
	template: '<div style="color: #EBCE67;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundMargin = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; margin: 20px;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const MultipleFileBlackBackgroundMaxWidth = () => ({ 
	components: { WDGFileList },
	template: '<div style="background-color: #333; font-family: Trebuchet MS; max-width: 400px;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});