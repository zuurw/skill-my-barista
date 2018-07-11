require('mocha');
const expect = require('chai').expect;
const assert = require('chai').assert;
const Constants = require('../src/Constants.ts');

describe('skill-coffee-recipes Test - Constants', () => {
    it('Constants SKILL_NAME must be defined', () => {
        expect(Constants).to.have.property('SKILL_NAME');
    });

    it('Constants WELCOME_MESSAGES must be defined', () => {
        expect(Constants).to.have.property('WELCOME_MESSAGES');
    });

    it('Constants WELCOME_MESSAGES should equals 5', () => {
        assert.equal(Constants.WELCOME_MESSAGES.length, 5);
    });

    it('Constants WELCOME_REPROMPTS must be defined', () => {
        expect(Constants).to.have.property('WELCOME_REPROMPTS');
    });

    it('Constants WELCOME_REPROMPTS should equals 4', () => {
        assert.equal(Constants.WELCOME_REPROMPTS.length, 4);
    });

    it('Constants HELP_MESSAGES must be defined', () => {
        expect(Constants).to.have.property('HELP_MESSAGES');
    });

    it('Constants HELP_MESSAGES should equals 1', () => {
        assert.equal(Constants.HELP_MESSAGES.length, 1);
    });
});