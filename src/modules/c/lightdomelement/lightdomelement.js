import { LightningElement, api } from 'lwc';

export default class LightDomApp extends LightningElement {
    static renderMode = 'light'; // the default is 'shadow'

    @api label = 'Light Dom App';
}