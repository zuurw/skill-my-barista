require('mocha');
const expect = require('chai').expect;
const Skill = require('../src/index.js').handler;
const Assertion = require('./utils/assertion.js');
const request = require('./requests/test_intent_request_suggestion_recette_intent.json');
const Constants = require('../src/constants.js');

describe('skill-coffee-recipes Test - IntentRequest SuggestionRecetteIntent', () => {
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

  it('it responses with parsed text', () => {
      console.log(skill_response);
    Assertion.checkOutputSpeachDoesNotContains(skill_response, '{nom}');
  });
});