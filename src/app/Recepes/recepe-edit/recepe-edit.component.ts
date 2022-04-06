import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ingredient } from 'src/app/shared/ingredient';
import { RECE } from '../RECE';
import { recepeListService } from '../recepeList.service';

@Component({
  selector: 'app-recepe-edit',
  templateUrl: './recepe-edit.component.html',
  styleUrls: ['./recepe-edit.component.css']
})
export class RecepeEditComponent implements OnInit {

  constructor(private ReceService:recepeListService ) { }
  imgSource:string='' ;
   
  @ViewChild('f') f!:NgForm ;
  ngOnInit(): void {

    this.ReceService.EditRecepe.subscribe((rece:RECE)=>{
   console.log(' Recepw for Edit',rece)
   console.log(' Form is',this.f)


   setTimeout(() => {
    this.f.setValue({
      name:rece.name,
      imgPath:rece.imgPath,
      desc:rece.desc,
      ingredient:rece.Ingredients[0].name,
      amount:rece.Ingredients[0].amount
   });
 }, );
     

    })

  }

  OnAddRecepe(form:NgForm){
    console.log('Add Recepe Form is:',form.value.name)
     const values = form.value;
    
    this.ReceService.RecList.push(new RECE(values.name,values.desc,values.imgPath,
      [new ingredient(values.ingredient,values.amount)]));
     this.ReceService.ReceListCHanged.next(this.ReceService.RecList) ;
     console.log('Recepe List len On add New Recepe:- ',this.ReceService.RecList.length)
     form.reset() ;

  }

}
