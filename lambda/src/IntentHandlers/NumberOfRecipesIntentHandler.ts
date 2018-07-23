import { NOMBRE_RECETTE_MESSAGES } from "../Constants";
import { NOMBRE_RECETTE_INTENT } from "../intents";
import { LilaIntentHandler } from "skill-lilasoft-toolkit";

export default class NumberOfRecipesIntentHandler extends LilaIntentHandler {   
    constructor() {
        super(NOMBRE_RECETTE_INTENT, NOMBRE_RECETTE_MESSAGES, null);
    }
};