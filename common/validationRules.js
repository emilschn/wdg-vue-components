import { extend, localize } from 'vee-validate'
import { required, email, alpha, numeric } from 'vee-validate/dist/rules'
// régles existantes : https://logaretm.github.io/vee-validate/guide/rules.html#rules

// No message specified.
extend('alpha', alpha)
extend('email', email)
extend('numeric', numeric)
extend('required', required)

// Créer des règles personnalisées
extend('test', value => {
    if (value === 'test') {
      return true
    }
    return 'Ce champ doit contenir test'
})
// règle pour les noms et prénoms, alpha, espace, tiret, apostrophe
extend('name', value => {
    const regex = /^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/
    if (value.match(regex)) {
      return true
    }
    return 'Ce champ n\'est pas valide'
})
// règle pour les numéros de téléphone
extend('phone_number', value => {
    const regex = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[.\-\s]?\d\d){4}$/
    if (value.match(regex)) {
      return true
    }
    return 'Ce champ n\'est pas valide'
})

localize('fr')
