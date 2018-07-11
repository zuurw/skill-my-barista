/* eslint-disable  func-names */
/* eslint-disable  no-console */

import { SkillBuilders } from 'ask-sdk';
import { ErrorHandler, LaunchRequestHandler, SessionEndedRequestHandler } from './Handlers';
import { CancelAndStopIntentHandler, HelpIntentHandler, NumberOfRecipesIntentHandler, RecipeIntentHandler, RecipeSuggestionIntentHandler } from './IntentHandlers';





const skillBuilder = SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    new LaunchRequestHandler(),
    new HelpIntentHandler(),
    new CancelAndStopIntentHandler(),
    new SessionEndedRequestHandler(),
    new RecipeSuggestionIntentHandler(),
    new RecipeIntentHandler(),
    new NumberOfRecipesIntentHandler()
  )
  .addErrorHandlers(new ErrorHandler())
  .lambda();
