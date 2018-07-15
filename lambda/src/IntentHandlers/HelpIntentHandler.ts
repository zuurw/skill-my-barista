import { HELP_REPROMPTS, HELP_MESSAGES } from "../Constants";
import { LilaRequestHandler, HELP_INTENT } from "../../../../skill-lilasoft-toolkit/dist/src";

export default class HelpIntentHandler extends LilaRequestHandler {   
    constructor() {
        super(HELP_INTENT, HELP_MESSAGES, HELP_REPROMPTS);
    }
};