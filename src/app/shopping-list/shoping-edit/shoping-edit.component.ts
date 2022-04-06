import { Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';


import { ingredient } from 'src/app/shared/ingredient';
import { LoggerService } from 'src/app/shared/services';
import { shoppingListService } from '../shoppingList.service';




@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
  providers:[LoggerService]
})
export class ShopingEditComponent implements OnInit,OnChanges,DoCheck {
   
  @Input() data:any; // It would get data from parent component
  // constructor() {
  //   console.log("constructor Called");
  //  }
  name='' ;
  amount:any ;

 // @Output() ingCreated = new EventEmitter<ingredient>();
 @ViewChild('nameRef') childName!:ElementRef  ; //isse variable acces kro ya [(ngModel)] se
 
  On_Ingre_created(nameRef: any)
  {
    console.log("Funtion se pass hua hai- ", nameRef.value) //vha se ref ko fun se pass kraya hai
    console.log("View Child se aaya- ",this.childName.nativeElement.value) //viewchild se bhi kar skate hai,pura div bhi le skate hai
   // this.ingCreated.emit(new ingredient(this.name,this.amount)); 
    this.ShopingService.ingreList.push(new ingredient(this.name,this.amount))
   /* ye [(ngModel se)] 
       varna 
       this.childName.nativeElement.value 
       ye krna pdta
    */
  }

  OnSubmitAdd(form:NgForm){
  // console.log("Form values : " ,form.value);
  if(!this.isShoopingEditmode)
  this.ShopingService.ingreList.push(new ingredient(form.value.name,form.value.amount)) ;
  else
     this.ShopingService.ingreList[this.editIndex] = new ingredient(form.value.name,form.value.amount);
     this.isShoopingEditmode = false;

    }
    
  // Dependancy injection
  // But ye sahi tarika Nhi hai
         // loggerService :any = new LoggerService() ;
  constructor(private loggerService:LoggerService,private ShopingService:shoppingListService)  {}     
  DeleteLogger(msg:any){
      this.loggerService.PrintMsg(msg);
   // ye galat hai  delete this.ShopingService.ingreList[this.editIndex];
     this.ShopingService.ingreList.splice(this.editIndex,1);
  }

  
  ClearClicked(msg:string){
    console.log('Clear button clicked') ;
    // this.Shoppingform.setValue({
    //   name:'',amount:''
    // })
  
    this.Shoppingform.reset(); 
    this.isShoopingEditmode=false;
  }
   
  curIngre !: ingredient ;
  @ViewChild('f') Shoppingform!:NgForm  ;
  isShoopingEditmode:boolean=false;
  editIndex:number = -1;

  ngOnInit(): void 
  { console.log("ngOnInit Called");
    // shoppingList item pr click krne se vo edit modepr aa jayenge
    this.ShopingService.subEditShoppingList.subscribe((idx:number)=>{
      this.curIngre = this.ShopingService.getIngreList()[idx] ;
       this.Shoppingform.setValue({ name:this.curIngre.name, amount:this.curIngre.amount });
       this.isShoopingEditmode = true;
       this.editIndex = idx;
    })
  }
 
  onWritingText1( event :Event)
  {
    //  this.name = (<HTMLInputElement> event.target).value ;
  }

  onWritingText2( event :Event)
  {
    //  this.amount = Number((<HTMLInputElement> event.target).value) ;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngDoCheck()
  {
  //  console.log("ngDoCheck Called");
  }
  

}
