/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');
const Helpers = require('helpers.js');
const DefaultIntentHandlers = require('defaultIntentHandlers.js');
const CustomIntentHandlers = require('customIntentHandlers.js');




const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    DefaultIntentHandlers.LaunchRequestHandler,
    DefaultIntentHandlers.HelpIntentHandler,
    DefaultIntentHandlers.CancelAndStopIntentHandler,
    DefaultIntentHandlers.SessionEndedRequestHandler,
    CustomIntentHandlers.SuggestionRecetteIntentHandler,
    CustomIntentHandlers.RecetteSpecifiqueIntentHandler,
    CustomIntentHandlers.NombreRecetteIntentHandler
  )
  .addErrorHandlers(DefaultIntentHandlers.ErrorHandler)
  .lambda();
