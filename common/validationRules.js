import { extend, localize, setInteractionMode } from 'vee-validate'
import { required, email, alpha, numeric } from 'vee-validate/dist/rules'
// régles existantes : https://logaretm.github.io/vee-validate/guide/rules.html#rules
import i18n from '@/i18n'

// No message specified.
extend('alpha', alpha)
extend('numeric', numeric)

// Override the default message.
extend('required', {
  ...required,
  message: i18n.t('validations.REQUIRED')
})
extend('email', {
  ...email,
  message: i18n.t('validations.EMAIL')
})

// Créer des règles personnalisées
// règle pour les noms et prénoms, alpha, espace, tiret, apostrophe
extend('name', value => {
    const regex = /^([a-zA-Z\u00C0-\u00FF]+['-]?[a-zA-Z\u00C0-\u00FF]+){1,30}$/
    if (value.match(regex)) {
      return true
    }
    return i18n.t('validations.NAME')
})
// règle pour les numéros de téléphone
extend('phone_number', value => {
    const regex = /^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[.\-\s]?\d\d){4}$/
    if (value.match(regex)) {
      return true
    }
    return i18n.t('validations.PHONE_NUMBER')
})

setInteractionMode('lazy')

localize('fr')
