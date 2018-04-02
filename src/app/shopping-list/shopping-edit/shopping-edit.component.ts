import {Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from '@angular/forms'
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  //@ViewChild('nameInput') nameInput:ElementRef;
  //@ViewChild('amountInput') amountInput:ElementRef;
  //@Output() onIngredientAdded = new EventEmitter<Ingredient>()
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppinngListService: ShoppingListService) {
  }

  ngOnInit() {
    this.subscription = this.shoppinngListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true
        this.editedItem = this.shoppinngListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        })
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onAddedItem(form: NgForm) {
    // const ingName = this.nameInput.nativeElement.value;
    // const ingAmount = this.amountInput.nativeElement.value;

    const values = form.value;
    const newIngredient = new Ingredient(values.name, values.amount)
    //this.onIngredientAdded.emit(newIngredient)
    if (this.editMode) {
      this.shoppinngListService.updateIngredients(this.editedItemIndex, newIngredient)
    }
    else {
      this.shoppinngListService.addIngredients(newIngredient)
    }
    this.editMode = false;
    form.reset()
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppinngListService.deleteIngredients(this.editedItemIndex);
    this.onClear()
  }
}
