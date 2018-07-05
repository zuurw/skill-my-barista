const Data = require('./data.js');
const format = require('string-format');

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
    speakWithReprompt(handlerInput, messages, reprompts) {
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
    speakWithMultipleMessageAndSingleCardAndParameter(handlerInput, firstMessages, secondMessages, skillName, parameter) {
        const item = this.getRandomItem(firstMessages) + this.getRandomItem(secondMessages);
        const parsedItem = format(item, parameter);
        console.log('parsedItem :', parsedItem);

        return handlerInput.responseBuilder
        .speak(parsedItem)
        .withSimpleCard(skillName, parameter.recette)
        .getResponse();     
    },
    speakWithParameter(handlerInput, messages, parameter) {
        const item = this.getRandomItem(messages);
        const parsedItem = format(item, parameter);
        console.log('parsedItem :', parsedItem);
        // const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        return handlerInput.responseBuilder
        .speak(parsedItem)
        .getResponse();      
    },
    getRandomItem(arrayOfItems) {
        let i = 0;
        i = Math.floor(Math.random() * arrayOfItems.length);
        return (arrayOfItems[i]);
    },
    getRecetteAleatoire() {
        const nomRecette = this.getRandomItem(Object.keys(Data.RECETTES));
        return this.getRecette(nomRecette);
    },
    getRecette(nomRecette) {
        let boisson = {
            nom: this.getValueFromArrayKey(Data.NOMS, nomRecette),
            ingredients: this.getValueFromArrayKey(Data.INGREDIENTS, nomRecette),
            recette: this.getValueFromArrayKey(Data.RECETTES, nomRecette)
        }

        return boisson;
    },
    getValueFromArrayKey(array, key) {
        return array[key];
    }
};