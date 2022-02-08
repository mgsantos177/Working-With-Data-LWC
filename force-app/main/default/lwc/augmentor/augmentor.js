import { LightningElement, api } from 'lwc';

export default class Augmentor extends LightningElement {

  @api startCounter = 0;
  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value);
  }

  handleMaximizeCounter() {
    this.template.querySelector('c-numerator').maximizeCounter();
  }
}