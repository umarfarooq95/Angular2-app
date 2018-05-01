import {NgModule} from "@angular/core";
import {FormComponent} from "./form/form.component";
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations:[
    FormComponent,
    ReactiveFormsComponent
  ],
  imports:[
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class FormModule{

}
