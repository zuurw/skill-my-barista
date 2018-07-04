module.exports = {
    canHandleRequest(handlerInput, expectedRequest) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === expectedRequest;
    },
    canHandleRequestWithIntents(handlerInput, expectedRequest, expectedIntents) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === expectedRequest && (expectedIntents.indexOf(request.intent.name) > -1);
    },
    speakWithRepromptAndSimpleCard(handlerInput, message, reprompt, skillName) {
        return handlerInput.responseBuilder
        .speak(message)
        .reprompt(reprompt)
        .withSimpleCard(skillName, message)
        .getResponse();
    },
    speakWithReprompt(handlerInput, message, reprompt) {
        return handlerInput.responseBuilder
        .speak(message)
        .reprompt(reprompt)
        .getResponse();
    },
    speak(handlerInput, message) {
        return handlerInput.responseBuilder
        .speak(message)
        .getResponse();      
    }
};