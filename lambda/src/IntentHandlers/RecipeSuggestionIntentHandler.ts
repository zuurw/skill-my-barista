import { IIntentHandler } from "./IIntentHandler";
import { HandlersHelper, RecipesHelper, SpeakersHelper, MessagesHelper } from "../Helpers";
import { SUGGESTION_RECETTE_INTENT } from "../Intents";
import { SKILL_NAME, SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES } from "../Constants";
import { Response } from 'ask-sdk-model';
import { HandlerInput, RequestHandler } from "ask-sdk";

export default class RecipeSuggestionIntentHandler implements RequestHandler {
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

    public async canHandle(handlerInput: HandlerInput): Promise<boolean> {
        return this.handlersHelper.canHandleRequestWithIntents(handlerInput, [SUGGESTION_RECETTE_INTENT]); 
    }; 
    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const recipe = this.recipesHelper.getRandomRecipe();
        const message = this.messagesHelper.getRandomMessageWithParameter(SUGGESTION_RECETTE_MESSAGES, recipe);
        const cardMessage = this.messagesHelper.getRandomMessageWithParameter(INGREDIENTS_RECETTE_MESSAGES, recipe);

        return this.speakersHelper.speakWithSimpleCardAndCardMessage(handlerInput, message, cardMessage, SKILL_NAME);
    }
};