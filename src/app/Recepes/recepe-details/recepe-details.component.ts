import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ingredient } from 'src/app/shared/ingredient';
import { RECE } from '../RECE';
import { recepeListService } from '../recepeList.service';

@Component({
  selector: 'app-recepe-details',
  templateUrl: './recepe-details.component.html',
  styleUrls: ['./recepe-details.component.css']
})
export class RecepeDetailsComponent implements OnInit {

  constructor(private ReceService:recepeListService,private activeroute :ActivatedRoute,
    private router:Router) { }
 
   // @Input() ReceDetails!:RECE;
  
     ReceDetails : RECE = new RECE('','','',[]) ;
     RecIndex : number=-1 ;
     isNewRecepeEnabled:boolean  = true ;
   
  ngOnInit(): void 
  {   
       this.ReceService.itemSelected.subscribe(
         (id:number)=>{
           this.ReceDetails=this.ReceService.RecList[id]; 
        //  alert("Bhai service se cross-sommunication hua hai") 
       // console.log('index is- ',id, " Rece is- ") ;
         this.RecIndex = id ;
      }
       )

      // this.ReceDetails = this.ReceService.RecList[this.activeroute.snapshot.params['idx']];
       /*
       this.activeroute.params.subscribe(
         (params:Params)=>{
            this.RecIndex =  params['idx'] ;
            console.log("Rec Index in Rec Deatils is : ",this.RecIndex)
            this.ReceDetails = this.ReceService.RecList[+this.RecIndex]
         }
       )*/
       
     this.ReceService.isNewReceEnabled.subscribe((NewRecepeEnabled:boolean)=>{
       this.isNewRecepeEnabled = NewRecepeEnabled ;
       
     })

      
  }

  EditRecepe(curRece:RECE){
        this.isNewRecepeEnabled = true ;
       this.ReceService.EditRecepe.next(curRece)
      
  }

  DeleteRecepe(){
  //  console.log('selected recepe index for deleletion is: ', this.RecIndex);
   this.ReceService.RecList.splice(this.RecIndex,1);
   console.log('Rec List length after delere recepe- ',this.ReceService.RecList.length)
   this.ReceDetails= new RECE('','','',[]) ;
  }

  

}
