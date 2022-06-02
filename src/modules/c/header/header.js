import { LightningElement , api } from 'lwc';

export default class Header extends LightningElement {
    @api label = 'Light Dom App';

    renderedCallback() {

        // this.template.querySelector('lightning-button').label = 'Light Dom App';
    }
}