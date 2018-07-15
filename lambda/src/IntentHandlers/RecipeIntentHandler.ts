import { SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES } from "../Constants";
import { RECETTE_SPECIFIQUE_INTENT } from "../intents";
import { LilaRequestHandler } from "../../../../skill-lilasoft-toolkit/dist/src";

export default class RecipeIntentHandler extends LilaRequestHandler {   
    constructor() {
        super(RECETTE_SPECIFIQUE_INTENT, SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES);
    }
};