"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const src_1 = require("../../../../skill-lilasoft-toolkit/dist/src");
class HelpIntentHandler extends src_1.LilaRequestHandler {
    constructor() {
        super(src_1.HELP_INTENT, Constants_1.HELP_MESSAGES, Constants_1.HELP_REPROMPTS);
    }
}
exports.default = HelpIntentHandler;
;
//# sourceMappingURL=HelpIntentHandler.js.map