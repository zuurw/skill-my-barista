"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const intents_1 = require("../intents");
const src_1 = require("../../../../skill-lilasoft-toolkit/dist/src");
class RecipeIntentHandler extends src_1.LilaRequestHandler {
    constructor() {
        super(intents_1.RECETTE_SPECIFIQUE_INTENT, Constants_1.SUGGESTION_RECETTE_MESSAGES, Constants_1.INGREDIENTS_RECETTE_MESSAGES);
    }
}
exports.default = RecipeIntentHandler;
;
//# sourceMappingURL=RecipeIntentHandler.js.map