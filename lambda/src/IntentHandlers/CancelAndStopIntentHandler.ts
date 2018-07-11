import { EXIT_MESSAGES } from "../Constants";
import { CANCEL_INTENT, STOP_INTENT } from "../intents";
import { HandlersHelper, SpeakersHelper, MessagesHelper } from "../Helpers";
import { Response } from 'ask-sdk-model';
import { HandlerInput, RequestHandler } from "ask-sdk";

export default class CancelAndStopIntentHandler implements RequestHandler {
    handlersHelper: HandlersHelper;
    speakersHelper: SpeakersHelper;
    messagesHelper: MessagesHelper;
    
    constructor() {
        this.handlersHelper = new HandlersHelper();
        this.speakersHelper = new SpeakersHelper();
        this.messagesHelper = new MessagesHelper();
    }

    public canHandle(handlerInput: HandlerInput): boolean {
        return this.handlersHelper.canHandleRequestWithIntents(handlerInput, [CANCEL_INTENT, STOP_INTENT]); 
    }; 
    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const message = this.messagesHelper.getRandomMessage(EXIT_MESSAGES);
        return this.speakersHelper.speak(handlerInput, message);
    }
};