import { SUGGESTION_RECETTE_INTENT } from "../intents";
import { SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES } from "../Constants";
import { LilaRequestHandler } from "../../../../skill-lilasoft-toolkit/dist/src";

export default class RecipeSuggestionIntentHandler extends LilaRequestHandler {   
    constructor() {
        super(SUGGESTION_RECETTE_INTENT, SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES);
    }
};