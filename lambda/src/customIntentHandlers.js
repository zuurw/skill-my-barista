const Requests = require('./requests.js');
const Intents = require('./intents.js');
const Helpers = require('./helpers.js');
const Constants = require('./constants.js');
const Data = require('./data.js');

const SuggestionRecetteIntentHandler = {
    canHandle(handlerInput) {
        return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.SUGGESTION_RECETTE_INTENT]); 
    },
    handle(handlerInput) {
        const boisson = Helpers.getRecetteAleatoire();
        return Helpers.speakWithMultipleMessageAndSingleCardAndParameter(handlerInput, Constants.SUGGESTION_RECETTE_MESSAGES, Constants.INGREDIENTS_RECETTE_MESSAGES, Constants.SKILL_NAME, boisson);
    }
};

const RecetteSpecifiqueIntentHandler = {
    canHandle(handlerInput) {
        return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.RECETTE_SPECIFIQUE_INTENT]); 
    },
    handle(handlerInput) {
        const boisson = Helpers.getRecetteAleatoire();
        return Helpers.speakWithMultipleMessageAndSingleCardAndParameter(handlerInput, Constants.RECETTE_SPECIFIQUE_MESSAGES, Constants.INGREDIENTS_RECETTE_MESSAGES, Constants.SKILL_NAME, boisson);
    }
};

const NombreRecetteIntentHandler = {
    canHandle(handlerInput) {
        return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.NOMBRE_RECETTE_INTENT]); 
    },
    handle(handlerInput) {
        const nombreRecettes = Data.RECETTES.length;
        return Helpers.speakWithParameter(handlerInput, Constants.NOMBRE_RECETTE_MESSAGES, nombreRecettes);
    }
};

  module.exports = {
    SuggestionRecetteIntentHandler,
    RecetteSpecifiqueIntentHandler,
    NombreRecetteIntentHandler
  };