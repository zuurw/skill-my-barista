import { SpeakersHelper } from "../Helpers";
import { Response } from "ask-sdk-model";
import { RequestHandler, HandlerInput } from "ask-sdk";

export default class ErrorHandler implements RequestHandler {
    speakersHelper: SpeakersHelper;
    
    constructor() {
        this.speakersHelper = new SpeakersHelper();
    }

    public canHandle(): boolean {
        return true; 
    }; 
    public async handle(handlerInput: HandlerInput): Promise<Response> {
        const message = 'Sorry, I can\'t understand the command. Please say again.';
        const reprompt = 'Sorry, I can\'t understand the command. Please say again.';
  
        return this.speakersHelper.speakWithReprompt(handlerInput, message, reprompt);
    }
};