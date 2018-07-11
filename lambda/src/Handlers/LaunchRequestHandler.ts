import { HandlersHelper, SpeakersHelper, MessagesHelper } from "../Helpers";
import { LAUNCH_REQUEST } from "../Requests";
import { Response } from "ask-sdk-model";
import { WELCOME_MESSAGES, WELCOME_REPROMPTS, SKILL_NAME } from "../Constants";
import { RequestHandler, HandlerInput } from "ask-sdk";

export default class LaunchRequestHandler implements RequestHandler {
    handlersHelper: HandlersHelper;
    speakersHelper: SpeakersHelper;
    messagesHelper: MessagesHelper;
    
    constructor() {
        this.handlersHelper = new HandlersHelper();
        this.speakersHelper = new SpeakersHelper();
        this.messagesHelper = new MessagesHelper();
    }

    public canHandle(handlerInput: HandlerInput): boolean {
        return this.handlersHelper.canHandleRequest(handlerInput, LAUNCH_REQUEST); 
    }; 
    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const message = this.messagesHelper.getRandomMessage(WELCOME_MESSAGES);
        const reprompt = this.messagesHelper.getRandomMessage(WELCOME_REPROMPTS);
        return this.speakersHelper.speakWithRepromptAndSimpleCard(handlerInput, message, reprompt, SKILL_NAME);
    }
};