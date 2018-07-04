/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const Helpers = require('helpers.js');
const DefaultIntentHandlers = require('defaultIntentHandlers.js');

const SuggestionRecetteIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest' && handlerInput.requestEnvelope.request.intent.name === 'SuggestionRecetteIntent';  
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Que diriez vous de faire un Lungo aujourd\'hui?')
      .getResponse();
  }
};



const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    DefaultIntentHandlers.LaunchRequestHandler,
    SuggestionRecetteIntentHandler,
    DefaultIntentHandlers.HelpIntentHandler,
    DefaultIntentHandlers.CancelAndStopIntentHandler,
    DefaultIntentHandlers.SessionEndedRequestHandler
  )
  .addErrorHandlers(DefaultIntentHandlers.ErrorHandler)
  .lambda();
