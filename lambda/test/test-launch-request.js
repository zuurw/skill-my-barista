require('mocha');
const expect = require('chai').expect;
const Skill = require('../src/index.js').handler;
const Assertion = require('../src/utils/assertion.js');
const request = require('./requests/test_launch_request.json');
const Constants = require('../src/constants.js');

describe('skill-coffee-recipes Test - LaunchRequest', () => {
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

  it('it lets the session open', () => {
    Assertion.checkSessionStatus(skill_response, false);
  });

  it('it responses with one of sentences', () => {
    Assertion.checkOutputSpeechContainsList(skill_response, Constants.WELCOME_MESSAGES);
  });
});