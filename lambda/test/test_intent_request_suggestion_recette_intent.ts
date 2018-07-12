import 'mocha';
import { expect } from 'chai';
import { handler as Skill } from '../src/Index';
import Assertion from './Utils/Assertion';
import { ResponseEnvelope, RequestEnvelope } from 'ask-sdk-model';
import { recipeSuggestionRequest } from './Requests';

const assertion = new Assertion();
const USER_ID = "amzn1.ask.account.123";
let skillResponse: ResponseEnvelope;

describe('skill-coffee-recipes Test - IntentRequest SuggestionRecetteIntent', () => {
  before(() => {
    return new Promise((resolve, reject) => {
      Skill(recipeSuggestionRequest, null, (error, responseEnvelope) => {
        skillResponse = responseEnvelope;
        resolve();
      });
    }); 
  });

  it('it responses with valid response structure ', () => {
    assertion.checkResponseStructure(skillResponse);
  });

  it('it responses with output speech ', () => {
    assertion.checkOutputSpeech(skillResponse);
  });

  it('it responses with parsed text', () => {
    assertion.checkOutputSpeachDoesNotContains(skillResponse, '{nom}');
  });
});