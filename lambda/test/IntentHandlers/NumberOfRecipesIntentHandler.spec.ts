import { LilaIntentHandler } from 'skill-lilasoft-toolkit';
import { assert } from "chai";
import { NOMBRE_RECETTE_MESSAGES } from "../../src/Constants";
import { NumberOfRecipesIntentHandler } from "../../src/IntentHandlers";
import { NOMBRE_RECETTE_INTENT } from '../../src/Intents';

describe("CancelIntentHandler", () => {
    describe("constructor", () => {
        it("it calls super() with correct parameters", () => {
            const handler = new NumberOfRecipesIntentHandler();
            const intentHandler = <LilaIntentHandler>handler;
            assert.equal(intentHandler.intentName, NOMBRE_RECETTE_INTENT);
            assert.equal(intentHandler.messages, NOMBRE_RECETTE_MESSAGES);
            assert.equal(intentHandler.reprompts, undefined);
        });
    });
});