const Requests = require('requests.js');
const Intents = require('intents.js');
const Helpers = require('helpers.js');
const Constants = require('constants.js');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return Helpers.canHandleRequest(handlerInput, Requests.LAUNCH_REQUEST);
  },
  handle(handlerInput) {
    return Helpers.speakWithRepromptAndSimpleCard(handlerInput, Constants.WELCOME_MESSAGE, Constants.WELCOME_REPROMPT, Constants.SKILL_NAME);
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.HELP_INTENT]);
  },
  handle(handlerInput) {
    return Helpers.speakWithReprompt(handlerInput, Constants.HELP_MESSAGE, Constants.HELP_REPROMPT);
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return Helpers.canHandleRequestWithIntents(handlerInput, Requests.INTENT_REQUEST, [Intents.CANCEL_INTENT, Intents.STOP_INTENT]);
  },
  handle(handlerInput) {
    return Helpers.speak(handlerInput, Constants.EXIT_MESSAGE);
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return Helpers.canHandleRequest(handlerInput, Requests.SESSION_ENDED_REQUEST);
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

module.exports = {
  LaunchRequestHandler,
  HelpIntentHandler,
  CancelAndStopIntentHandler,
  SessionEndedRequestHandler,
  ErrorHandler
};