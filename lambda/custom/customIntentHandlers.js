const Requests = require('./requests.js');
const Intents = require('./intents.js');
const Helpers = require('./helpers.js');
const Constants = require('./constants.js');

const SuggestionRecetteIntentHandler = {
    canHandle(handlerInput) {
        return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.SUGGESTION_RECETTE_INTENT]); 
    },
    handle(handlerInput) {
      return Helpers.speak(handlerInput, Constants.SUGGESTION_RECETTE_MESSAGES);
    }
};

const RecetteSpecifiqueIntentHandler = {
    canHandle(handlerInput) {
        return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.RECETTE_SPECIFIQUE_INTENT]); 
    },
    handle(handlerInput) {
      return Helpers.speak(handlerInput, Constants.RECETTE_SPECIFIQUE_MESSAGES);
    }
};

const NombreRecetteIntentHandler = {
    canHandle(handlerInput) {
        return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.NOMBRE_RECETTE_INTENT]); 
    },
    handle(handlerInput) {
      return Helpers.speak(handlerInput, Constants.NOMBRE_RECETTE_MESSAGES);
    }
};

  module.exports = {
    SuggestionRecetteIntentHandler,
    RecetteSpecifiqueIntentHandler,
    NombreRecetteIntentHandler
  };