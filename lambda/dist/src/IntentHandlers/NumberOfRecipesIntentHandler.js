"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const intents_1 = require("../intents");
const src_1 = require("../../../../skill-lilasoft-toolkit/dist/src");
class NumberOfRecipesIntentHandler extends src_1.LilaRequestHandler {
    constructor() {
        super(intents_1.NOMBRE_RECETTE_INTENT, Constants_1.NOMBRE_RECETTE_MESSAGES, null);
    }
}
exports.default = NumberOfRecipesIntentHandler;
;
//# sourceMappingURL=NumberOfRecipesIntentHandler.js.map