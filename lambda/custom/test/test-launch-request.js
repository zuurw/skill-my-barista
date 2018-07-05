require('mocha');
const expect = require('chai').expect;
const Skill = require('../index.js').handler;
const Assertion = require('../utils/assertion.js');
const request = require('./requests/test_launch_request.json');

describe('skill-coffee-recipes Test - LaunchRequest', () => {
  before(() => {
    //this.timeout(5000);
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

  it('it closes the session ', () => {
    Assertion.checkSessionStatus(skill_response, false);
  });
});

//   before(() => {

//     this.timeout(5000);

//     return new Promise((resolve, reject) => {
//         skill(request, null, (error, responseEnvelope) => {
//           skill_response = responseEnvelope;
//           resolve();
//         });
//     });
//   });
// });

// const Skill = require('../index.js'); 
// const expect = require('chai').expect;
// const fixtures = require('../fixtures/test_launch_request.js');

// let DEBUG_RESPONSE = false;

// const lambdaContext = function (test_func, done) {
//     return {
//         'succeed': function (data) {
//             if (DEBUG_RESPONSE) {
//                 console.log(JSON.stringify(data, null, '\t'));
//             }
//             test_func(data);
//             done()
//         },
//         'fail': done
//     };
// };

// describe('Testing LaunchRequest', function () {
//   describe('Get phrases', function () {
//        it('Launch with phrase', function (done) {
//           Skill['handler'](fixtures.LaunchRequest(),
//               lambdaContext(function (data) {
//               // expect(data.sessionAttributes.STATE).to.equal("_PHRASE_MODE");
//               // expect(data.sessionAttributes.phrases_used).to.be.an('array').of.length(1);
//               // expect(data.response.outputSpeech.ssml).to.contain("<audio src=");
//               expect(data.response.shouldEndSession).to.be.false;
//           }, done));
//       });
//     });
//   });

// // describe('PhraseMode', function () {
// //   describe('Get new phrase intent', function () {
// //        it('Launch with phrase', function (done) {
// //           Skill['handler'](fixtures.intentRequestFixture({}, "EstonianPhraseIntent"),
// //               lambdaContext(function (data) {
// //               expect(data.sessionAttributes.STATE).to.equal("_PHRASE_MODE");
// //               expect(data.sessionAttributes.phrases_used).to.be.an('array').of.length(1);
// //               expect(data.response.outputSpeech.ssml).to.contain("<audio src=");
// //               expect(data.response.shouldEndSession).to.be.false;
// //           }, done));
// //       });
// //     });
// //   });

// // const context = require('aws-lambda-mock-context');
// // const ctx = context();

// // describe("Testing LaunchRequest", function() {
// //     var speechResponse = null;
// //     var speechError = null;

// //     before(function(done){
// //         index.handler({
// //           "version": "1.0",
// //           "session": {
// //             "new": false,
// //             "sessionId": "amzn1.echo-api.session.9e3df6ec-f92d-4eaa-8e9d-131df2061ee0",
// //             "application": {
// //               "applicationId": "amzn1.ask.skill.9368a552-4309-4247-a3bf-505266eb9837"
// //             },
// //             "user": {
// //               "userId": "amzn1.ask.account.AH4HWOXIKWFPJYPGY7QZR3NELFQFO62PKFAKZYJL56KGVJ4NKMO6DWFGUNQ5U5VIFL7CFV6XXWUIT5LVSDCHNDEDSH5XT4LMAVE4MCJJKP3L5CZNX6KGJLCZWA5V3KW7IMGOAKHSTX2KLYF77BIEOJ4CP2OUYIKSBHTOG5JBOWCHCLVR5V2QBBKYSDIXUM2LK5PLWQXWYYKMSZY"
// //             }
// //           },
// //           "context": {
// //             "System": {
// //               "application": {
// //                 "applicationId": "amzn1.ask.skill.9368a552-4309-4247-a3bf-505266eb9837"
// //               },
// //               "user": {
// //                 "userId": "amzn1.ask.account.AH4HWOXIKWFPJYPGY7QZR3NELFQFO62PKFAKZYJL56KGVJ4NKMO6DWFGUNQ5U5VIFL7CFV6XXWUIT5LVSDCHNDEDSH5XT4LMAVE4MCJJKP3L5CZNX6KGJLCZWA5V3KW7IMGOAKHSTX2KLYF77BIEOJ4CP2OUYIKSBHTOG5JBOWCHCLVR5V2QBBKYSDIXUM2LK5PLWQXWYYKMSZY"
// //               },
// //               "device": {
// //                 "deviceId": "amzn1.ask.device.AGH4S2PIIKH4SL7XVEUXY4BJLYKBMXQ7NREQVGMPKI7HRFVG33BDBOIVJZTPM22QJIH3B6WBOSNRVV3A54REWHIKBCF5ZVHGQHRTGI2B2OPCRQ4Q2DXITQQ3DB7CON7PSECDXBIELJ4OFBDDWUSRF4LC3MLA",
// //                 "supportedInterfaces": {}
// //               },
// //               "apiEndpoint": "https://api.eu.amazonalexa.com",
// //               "apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjkzNjhhNTUyLTQzMDktNDI0Ny1hM2JmLTUwNTI2NmViOTgzNyIsImV4cCI6MTUzMDc4MTg5NSwiaWF0IjoxNTMwNzc4Mjk1LCJuYmYiOjE1MzA3NzgyOTUsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUdINFMyUElJS0g0U0w3WFZFVVhZNEJKTFlLQk1YUTdOUkVRVkdNUEtJN0hSRlZHMzNCREJPSVZKWlRQTTIyUUpJSDNCNldCT1NOUlZWM0E1NFJFV0hJS0JDRjVaVkhHUUhSVEdJMkIyT1BDUlE0UTJEWElUUVEzREI3Q09ON1BTRUNEWEJJRUxKNE9GQkREV1VTUkY0TEMzTUxBIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUg0SFdPWElLV0ZQSllQR1k3UVpSM05FTEZRRk82MlBLRkFLWllKTDU2S0dWSjROS01PNkRXRkdVTlE1VTVWSUZMN0NGVjZYWFdVSVQ1TFZTRENITkRFRFNINVhUNExNQVZFNE1DSkpLUDNMNUNaTlg2S0dKTENaV0E1VjNLVzdJTUdPQUtIU1RYMktMWUY3N0JJRU9KNENQMk9VWUlLU0JIVE9HNUpCT1dDSENMVlI1VjJRQkJLWVNESVhVTTJMSzVQTFdRWFdZWUtNU1pZIn19.J1ysZnZi55TzMjJgVwkPle2-rwyPXFT_dAThQra1D4cUsFt3v8AX58anOmtllkPBSsae8fycaup2n7DH2Aq3VELs7uGQkbs2GImbrqlufLQHRXiSW3Y3-7ZUbfBMoqRwR0oiFuabk3UKPeytdWecNxVXu2gyfody4YrfoSQ-PWVV0TcPx6VLRgpRK5FGjEw7u1dBN-vUyEKFp7wFyurrxfkTtA7FCEyVqw-a5ePy6X6fD9YDTdaxkpKwe7bGfhrtWjH7WgWJvSRUfN-CYV00__JB8Qo4FqMRQfhiLKf8MrKbGu5lWyxIx2F7v22Q6j3lTb9Wi0EKbjKbRp7UDQt2lA"
// //             }
// //           },
// //           "request": {
// //             "type": "SessionEndedRequest",
// //             "requestId": "amzn1.echo-api.request.8f05916f-2aab-422c-b29f-8456adeaeaa0",
// //             "timestamp": "2018-07-05T08:11:35Z",
// //             "locale": "fr-FR",
// //             "reason": "USER_INITIATED"
// //           }
// //         }, ctx);

// //         ctx.Promise
// //             .then(resp => { speechResponse = resp; done(); })
// //             .catch(err => { speechError = err; done(); });
// //     });

// //     describe("The response is structurally correct for Alexa Speech Services", function() {
// //         it('should not have errored',function() {
// //             expect(speechError).to.be.null
// //         });

// //         // it('should have a version', function() {
// //         //     expect(speechResponse.version).not.to.be.null
// //         // })

// //         // it('should have a speechlet response', function() {
// //         //     expect(speechResponse.response).not.to.be.null
// //         // })

// //         // it("should have a spoken response", () => {
// //         //     expect(speechResponse.response.outputSpeech).not.to.be.null
// //         // })

// //         // it("should end the alexa session", function() {
// //         //     expect(speechResponse.response.shouldEndSession).not.to.be.null
// //         //     expect(speechResponse.response.shouldEndSession).to.be.true
// //         // })
// //     });
// // });