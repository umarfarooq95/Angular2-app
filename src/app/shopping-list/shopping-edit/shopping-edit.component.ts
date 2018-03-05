import { Component, OnInit ,ViewChild,Output,EventEmitter,ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }
  onAddedItem(){
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.onIngredientAdded.emit(newIngredient)
  }
}
