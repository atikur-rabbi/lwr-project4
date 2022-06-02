import { LightningElement } from 'lwc';


export default class HelloWorldApp extends LightningElement {
    
    title = "Welcome to Lightning Web Components!";
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
        console.log('clickedButtonLabel: ' + this.clickedButtonLabel);
    }
}
