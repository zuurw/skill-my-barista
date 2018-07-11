'use strict';

import { HandlerInput } from 'ask-sdk';
import { Response } from 'ask-sdk-model';

export interface IIntentHandler {
    canHandle(handlerInput : HandlerInput) : Promise<boolean>;
    handle(handlerInput : HandlerInput) : Promise<Response>;
};