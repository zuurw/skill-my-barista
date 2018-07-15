import { EXIT_MESSAGES } from "../Constants";
import { LilaRequestHandler, CANCEL_INTENT } from "../../../../skill-lilasoft-toolkit/dist/src";

export default class CancelIntentHandler extends LilaRequestHandler {   
    constructor() {
        super(CANCEL_INTENT, EXIT_MESSAGES, null);
    }
};