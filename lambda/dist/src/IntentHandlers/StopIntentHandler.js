"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const src_1 = require("../../../../skill-lilasoft-toolkit/dist/src");
class CancelIntentHandler extends src_1.LilaRequestHandler {
    constructor() {
        super(src_1.STOP_INTENT, Constants_1.EXIT_MESSAGES, null);
    }
}
exports.default = CancelIntentHandler;
;
//# sourceMappingURL=StopIntentHandler.js.map