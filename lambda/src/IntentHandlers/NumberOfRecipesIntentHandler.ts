import { NOMBRE_RECETTE_MESSAGES } from "../Constants";
import { NOMBRE_RECETTE_INTENT } from "../intents";
import { LilaRequestHandler } from "../../../../skill-lilasoft-toolkit/dist/src";

export default class NumberOfRecipesIntentHandler extends LilaRequestHandler {   
    constructor() {
        super(NOMBRE_RECETTE_INTENT, NOMBRE_RECETTE_MESSAGES, null);
    }
};