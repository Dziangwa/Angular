import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from '../popup.service';
import { PopupComponent } from '../popup.component';


@Component({
  selector: 'app-elementy',
  templateUrl: './elementy.component.html',
  styleUrls: ['./elementy.component.css']
})
export class ElementyComponent {

  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }



}
