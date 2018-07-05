//'use strict';
/* Copyright 2018 Mike Hoolehan 

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
//const Skill = require('../index.js');

module.exports = {
    LaunchRequest: function() {//attributes, intent) {
        return {
			"version": "1.0",
			"session": {
				"new": false,
				"sessionId": "amzn1.echo-api.session.9e3df6ec-f92d-4eaa-8e9d-131df2061ee0",
				"application": {
					"applicationId": "amzn1.ask.skill.9368a552-4309-4247-a3bf-505266eb9837"
				},
				"user": {
					"userId": "amzn1.ask.account.AH4HWOXIKWFPJYPGY7QZR3NELFQFO62PKFAKZYJL56KGVJ4NKMO6DWFGUNQ5U5VIFL7CFV6XXWUIT5LVSDCHNDEDSH5XT4LMAVE4MCJJKP3L5CZNX6KGJLCZWA5V3KW7IMGOAKHSTX2KLYF77BIEOJ4CP2OUYIKSBHTOG5JBOWCHCLVR5V2QBBKYSDIXUM2LK5PLWQXWYYKMSZY"
				}
			},
			"context": {
				"System": {
					"application": {
						"applicationId": "amzn1.ask.skill.9368a552-4309-4247-a3bf-505266eb9837"
					},
					"user": {
						"userId": "amzn1.ask.account.AH4HWOXIKWFPJYPGY7QZR3NELFQFO62PKFAKZYJL56KGVJ4NKMO6DWFGUNQ5U5VIFL7CFV6XXWUIT5LVSDCHNDEDSH5XT4LMAVE4MCJJKP3L5CZNX6KGJLCZWA5V3KW7IMGOAKHSTX2KLYF77BIEOJ4CP2OUYIKSBHTOG5JBOWCHCLVR5V2QBBKYSDIXUM2LK5PLWQXWYYKMSZY"
					},
					"device": {
						"deviceId": "amzn1.ask.device.AGH4S2PIIKH4SL7XVEUXY4BJLYKBMXQ7NREQVGMPKI7HRFVG33BDBOIVJZTPM22QJIH3B6WBOSNRVV3A54REWHIKBCF5ZVHGQHRTGI2B2OPCRQ4Q2DXITQQ3DB7CON7PSECDXBIELJ4OFBDDWUSRF4LC3MLA",
						"supportedInterfaces": {}
					},
					"apiEndpoint": "https://api.eu.amazonalexa.com",
					"apiAccessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjkzNjhhNTUyLTQzMDktNDI0Ny1hM2JmLTUwNTI2NmViOTgzNyIsImV4cCI6MTUzMDc4MTg5NSwiaWF0IjoxNTMwNzc4Mjk1LCJuYmYiOjE1MzA3NzgyOTUsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUdINFMyUElJS0g0U0w3WFZFVVhZNEJKTFlLQk1YUTdOUkVRVkdNUEtJN0hSRlZHMzNCREJPSVZKWlRQTTIyUUpJSDNCNldCT1NOUlZWM0E1NFJFV0hJS0JDRjVaVkhHUUhSVEdJMkIyT1BDUlE0UTJEWElUUVEzREI3Q09ON1BTRUNEWEJJRUxKNE9GQkREV1VTUkY0TEMzTUxBIiwidXNlcklkIjoiYW16bjEuYXNrLmFjY291bnQuQUg0SFdPWElLV0ZQSllQR1k3UVpSM05FTEZRRk82MlBLRkFLWllKTDU2S0dWSjROS01PNkRXRkdVTlE1VTVWSUZMN0NGVjZYWFdVSVQ1TFZTRENITkRFRFNINVhUNExNQVZFNE1DSkpLUDNMNUNaTlg2S0dKTENaV0E1VjNLVzdJTUdPQUtIU1RYMktMWUY3N0JJRU9KNENQMk9VWUlLU0JIVE9HNUpCT1dDSENMVlI1VjJRQkJLWVNESVhVTTJMSzVQTFdRWFdZWUtNU1pZIn19.J1ysZnZi55TzMjJgVwkPle2-rwyPXFT_dAThQra1D4cUsFt3v8AX58anOmtllkPBSsae8fycaup2n7DH2Aq3VELs7uGQkbs2GImbrqlufLQHRXiSW3Y3-7ZUbfBMoqRwR0oiFuabk3UKPeytdWecNxVXu2gyfody4YrfoSQ-PWVV0TcPx6VLRgpRK5FGjEw7u1dBN-vUyEKFp7wFyurrxfkTtA7FCEyVqw-a5ePy6X6fD9YDTdaxkpKwe7bGfhrtWjH7WgWJvSRUfN-CYV00__JB8Qo4FqMRQfhiLKf8MrKbGu5lWyxIx2F7v22Q6j3lTb9Wi0EKbjKbRp7UDQt2lA"
				}
			},
			"request": {
				"type": "SessionEndedRequest",
				"requestId": "amzn1.echo-api.request.8f05916f-2aab-422c-b29f-8456adeaeaa0",
				"timestamp": "2018-07-05T08:11:35Z",
				"locale": "fr-FR",
				"reason": "USER_INITIATED"
			}
        };
    },
};



{

}