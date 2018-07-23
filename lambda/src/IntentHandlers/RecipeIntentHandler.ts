import { RECIPE_SUGGESTION_INTENT } from "../intents";
import { RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES } from '../Constants';
import { LilaIntentHandler } from "skill-lilasoft-toolkit";

export default class RecipeIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(RECIPE_SUGGESTION_INTENT, RECIPE_SUGGESTION_MESSAGES, RECIPE_INGREDIENTS_MESSAGES);
    }
};