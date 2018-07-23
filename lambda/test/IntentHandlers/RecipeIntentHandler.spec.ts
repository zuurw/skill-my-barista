import { LilaIntentHandler } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES } from "../../src/Constants";
import { NumberOfRecipesIntentHandler } from "../../src/IntentHandlers";
import { RECETTE_SPECIFIQUE_INTENT } from '../../src/Intents';

describe("NumberOfRecipesIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new NumberOfRecipesIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, RECETTE_SPECIFIQUE_INTENT);
            assert.equal(intentHandler.messages, SUGGESTION_RECETTE_MESSAGES);
            assert.equal(intentHandler.reprompts, INGREDIENTS_RECETTE_MESSAGES);
        });
    });
});