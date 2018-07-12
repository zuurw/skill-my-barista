import { HandlersHelper } from "../Helpers";
import { SESSION_ENDED_REQUEST } from "../Requests";
import { Response } from "ask-sdk-model";
import { RequestHandler, HandlerInput } from "ask-sdk";

export default class SessionEndedRequestLauncher implements RequestHandler {
    handlersHelper: HandlersHelper;
    
    constructor() {
        this.handlersHelper = new HandlersHelper();
    }

    public canHandle(handlerInput: HandlerInput): boolean {
        return this.handlersHelper.canHandleRequest(handlerInput, SESSION_ENDED_REQUEST); 
    }; 
    public async handle(handlerInput: HandlerInput): Promise<Response> {
        // console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        return handlerInput.responseBuilder.getResponse();
    }
};