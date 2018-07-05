module.exports = {
    canHandleRequest(handlerInput, expectedRequest) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === expectedRequest;
    },
    canHandleRequestWithIntents(handlerInput, expectedRequest, expectedIntents) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === expectedRequest && (expectedIntents.indexOf(request.intent.name) > -1);
    },
    speakWithRepromptAndSimpleCard(handlerInput, messages, reprompts, skillName) {
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const message = this.getRandomItem(messages);
        return handlerInput.responseBuilder
        .speak(message)
        .reprompt(this.getRandomItem(reprompts))
        .withSimpleCard(skillName, message)
        .getResponse();
    },
    speakWithReprompt(handlerInput, messages, reprompst) {
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(this.getRandomItem(messages))
        .reprompt(this.getRandomItem(reprompts))
        .getResponse();
    },
    speak(handlerInput, messages) {
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(this.getRandomItem(messages))
        .getResponse();      
    },
    getRandomItem(arrayOfItems) {
        // the argument is an array [] of words or phrases
        let i = 0;
        i = Math.floor(Math.random() * arrayOfItems.length);
        return (arrayOfItems[i]);
    }
};