import { LilaIntentHandler } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { SUGGESTION_RECETTE_MESSAGES, INGREDIENTS_RECETTE_MESSAGES } from "../../src/Constants";
import { RecipeSuggestionIntentHandler } from "../../src/IntentHandlers";
import { SUGGESTION_RECETTE_INTENT } from '../../src/Intents';

describe("RecipeSuggestionIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new RecipeSuggestionIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, SUGGESTION_RECETTE_INTENT);
            assert.equal(intentHandler.messages, SUGGESTION_RECETTE_MESSAGES);
            assert.equal(intentHandler.reprompts, INGREDIENTS_RECETTE_MESSAGES);
        });
    });
});