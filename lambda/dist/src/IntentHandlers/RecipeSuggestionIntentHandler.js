"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const intents_1 = require("../intents");
const Constants_1 = require("../Constants");
const src_1 = require("../../../../skill-lilasoft-toolkit/dist/src");
class RecipeSuggestionIntentHandler extends src_1.LilaRequestHandler {
    constructor() {
        super(intents_1.SUGGESTION_RECETTE_INTENT, Constants_1.SUGGESTION_RECETTE_MESSAGES, Constants_1.INGREDIENTS_RECETTE_MESSAGES);
    }
}
exports.default = RecipeSuggestionIntentHandler;
;
//# sourceMappingURL=RecipeSuggestionIntentHandler.js.map