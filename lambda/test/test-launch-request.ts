import 'mocha';
import { expect } from 'chai';
import { handler as Skill } from '../src/Index';
import Assertion from './Utils/Assertion';
import { ResponseEnvelope, RequestEnvelope } from 'ask-sdk-model';
import { WELCOME_MESSAGES } from '../src/Constants';
import { launchRequest } from './Requests';

const assertion = new Assertion();
const USER_ID = "amzn1.ask.account.123";
let skillResponse: ResponseEnvelope;

describe('skill-coffee-recipes Test - LaunchRequest', () => {
  before(() => {
    return new Promise((resolve, reject) => {
      Skill(launchRequest, null, (error, responseEnvelope) => {
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

  it('it lets the session open', () => {
    assertion.checkSessionStatus(skillResponse, false);
  });

  it('it responses with one of sentences', () => {
    assertion.checkOutputSpeechContainsList(skillResponse, WELCOME_MESSAGES);
  });
});