import { LilaRequestHandler } from '../../../../skill-lilasoft-toolkit/dist/src';
import { ERROR_REPROMPTS, ERROR_MESSAGES } from '../Constants';

export default class ErrorHandler extends LilaRequestHandler {
    constructor() {
        super(null, ERROR_MESSAGES, ERROR_REPROMPTS);
    }
};