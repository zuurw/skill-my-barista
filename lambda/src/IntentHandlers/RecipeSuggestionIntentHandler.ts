import { SUGGESTION_RECETTE_INTENT } from "../intents";
import { SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES } from "../Constants";
import { LilaIntentHandler } from "skill-lilasoft-toolkit";

export default class RecipeSuggestionIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(SUGGESTION_RECETTE_INTENT, SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES);
    }
};