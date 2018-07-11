import { NOMBRE_RECETTE_MESSAGES } from "../Constants";
import { NOMBRE_RECETTE_INTENT } from "../intents";
import { HandlersHelper, RecipesHelper, SpeakersHelper, MessagesHelper } from "../Helpers";
import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from 'ask-sdk-model';
import { RECIPE_NUMBER } from "../Data";

export default class NumberOfRecipesIntentHandler implements RequestHandler {
    handlersHelper: HandlersHelper;
    recipesHelper: RecipesHelper;
    speakersHelper: SpeakersHelper;
    messagesHelper: MessagesHelper;
    
    constructor() {
        this.handlersHelper = new HandlersHelper();
        this.recipesHelper = new RecipesHelper();
        this.speakersHelper = new SpeakersHelper();
        this.messagesHelper = new MessagesHelper();
    }

    public canHandle(handlerInput: HandlerInput): boolean {
        return this.handlersHelper.canHandleRequestWithIntents(handlerInput, [NOMBRE_RECETTE_INTENT]); 
    }; 
    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const message = this.messagesHelper.getRandomMessageWithParameter(NOMBRE_RECETTE_MESSAGES, RECIPE_NUMBER);
        return this.speakersHelper.speak(handlerInput, message);
    }
};