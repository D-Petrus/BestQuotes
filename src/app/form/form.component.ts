import { Component, EventEmitter, Output} from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  panelAddQuote = false;
  @Output()
  newAddQuotation = new EventEmitter<Quotation>();

  quotation: Quotation = { author: '', sentence: '', votes: 0 };

  switchPanelAddQuote(): void{
    this.panelAddQuote=!this.panelAddQuote
  }


  addQuotation() {
    this.newAddQuotation.emit(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };

  }


}
