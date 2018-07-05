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
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(message)
        .reprompt(reprompt)
        .withSimpleCard(skillName, message)
        .getResponse();
    },
    speakWithReprompt(handlerInput, message, reprompt) {
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(message)
        .reprompt(reprompt)
        .getResponse();
    },
    speak(handlerInput, message) {
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(message)
        .getResponse();      
    },
    getRandomItem(arrayOfItems) {
        // the argument is an array [] of words or phrases
        let i = 0;
        i = Math.floor(Math.random() * arrayOfItems.length);
        return (arrayOfItems[i]);
    }
};