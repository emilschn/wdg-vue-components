export const number = {
	formatStr(nInput, sAutoFormat = '') {
		// On passe les entiers en float avec .00 pour qu'ils soient reconnus par le pattern en dessous
		if (nInput === parseInt(nInput, 10)) {
			nInput = parseFloat(nInput).toFixed(2)
		}
		let sInput = nInput.toString()
		// Suppression des caractères non-numériques
		sInput = sInput.split(',').join('.')
		sInput = sInput.replace(/[^\d.-]/g, '')
		// Si pourcent, on reste entre 0 et 100
		if (sAutoFormat === 'wdg-percent') {
			if (Number(sInput) < 0) {
				sInput = '0'
			}
			if (Number(sInput) > 100) {
				sInput = '100'
			}
		}
		// Remplacement . par , pour les décimales
		sInput = sInput.split('.').join(',')
		// Ecarts pour les milliers
		sInput = sInput.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

		// Si c'est en fait un entier, on enlève les chiffres après la virgule
		let aCutDecimals = sInput.split(',')
		if (aCutDecimals[1] === '00') {
			sInput = aCutDecimals[0]

			// Si c'est un format money et qu'il y a un seul chiffre après la virgule, on rajoute un 0
		} else if (sAutoFormat === 'money' && aCutDecimals[1].length === 1) {
			sInput += '0'
		}
		return sInput
	}
}
