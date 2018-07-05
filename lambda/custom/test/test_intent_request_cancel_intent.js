require('mocha');
const expect = require('chai').expect;
const Skill = require('../index.js').handler;
const Assertion = require('../utils/assertion.js');
const request = require('./requests/test_intent_request_cancel_intent.json');
const Constants = require('../constants.js');

describe('skill-coffee-recipes Test - IntentRequest CancelIntent', () => {
  before(() => {
    return new Promise((resolve, reject) => {
      Skill(request, null, (error, responseEnvelope) => {
        skill_response = responseEnvelope;
        resolve();
      });
    }); 
  });

  it('it responses with valid response structure ', () => {
    Assertion.checkResponseStructure(skill_response);
  });

  it('it responses with output speech ', () => {
    Assertion.checkOutputSpeech(skill_response);
  });

  it('it responses with one of sentences', () => {
    Assertion.checkOutputSpeechContainsList(skill_response, Constants.EXIT_MESSAGES);
  });
});