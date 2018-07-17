import { ResponseEnvelope } from 'ask-sdk-model';
export default class Assertion {
    checkResponseStructure(response: ResponseEnvelope): void;
    checkOutputSpeech(response: ResponseEnvelope): void;
    checkOutputSpeachContains(response: ResponseEnvelope, text: string): void;
    checkOutputSpeechContainsList(response: ResponseEnvelope, texts: string[]): void;
    checkOutputSpeachDoesNotContains(response: ResponseEnvelope, text: string): void;
    checkSessionStatus(response: ResponseEnvelope, shouldEndSession: boolean): void;
    checkStandardCard(response: ResponseEnvelope): void;
    checkReprompt(response: ResponseEnvelope): void;
    checkNoReprompt(response: ResponseEnvelope): void;
    checkAudioPlayDirective(response: ResponseEnvelope): void;
}
