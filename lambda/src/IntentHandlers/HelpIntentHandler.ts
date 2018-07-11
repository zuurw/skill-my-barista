import { HELP_REPROMPTS, HELP_MESSAGES } from "../Constants";
import { HELP_INTENT } from "../intents";
import { HandlersHelper, SpeakersHelper, MessagesHelper } from "../Helpers";
import { Response } from 'ask-sdk-model';
import { HandlerInput, RequestHandler } from "ask-sdk";

export default class HelpIntentHandler implements RequestHandler {
    handlersHelper: HandlersHelper;
    speakersHelper: SpeakersHelper;
    messagesHelper: MessagesHelper;
    
    constructor() {
        this.handlersHelper = new HandlersHelper();
        this.speakersHelper = new SpeakersHelper();
        this.messagesHelper = new MessagesHelper();
    }

    public canHandle(handlerInput: HandlerInput): boolean {
        return this.handlersHelper.canHandleRequestWithIntents(handlerInput, [HELP_INTENT]); 
    }; 
    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const message = this.messagesHelper.getRandomMessage(HELP_MESSAGES);
        const reprompt = this.messagesHelper.getRandomMessage(HELP_REPROMPTS);
        return this.speakersHelper.speakWithReprompt(handlerInput, message, reprompt);
    }
};