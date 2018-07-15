import { EXIT_MESSAGES } from "../Constants";
import { LilaRequestHandler, STOP_INTENT } from "../../../../skill-lilasoft-toolkit/dist/src";

export default class CancelIntentHandler extends LilaRequestHandler {   
    constructor() {
        super(STOP_INTENT, EXIT_MESSAGES, null);
    }
};