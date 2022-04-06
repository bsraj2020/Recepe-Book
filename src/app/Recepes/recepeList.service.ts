import { EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import { ingredient } from "../shared/ingredient";
import { RECE } from "./RECE";

export class recepeListService
{
    itemSelected =  new Subject<number>();
    ReceListCHanged = new Subject<RECE[]>();
    isNewReceEnabled = new Subject<boolean>() ;
    EditRecepe = new Subject<RECE>() ;
    
    RecList : RECE[] = [
        new RECE("Momos"," Tasty Momos of Delhi", 
        "https://cdn.pixabay.com/photo/2021/10/28/08/48/momos-6749181_960_720.jpg",
        [new ingredient('momos', 2),new ingredient('chutney', 4),new ingredient('Tomatao Soup', 1) ] ),

        new RECE("Samosa"," Jodhpuri Kaju Samosa",
         "https://www.seriouseats.com/thmb/98LmEBUumXHU-BJ3IzHAlQF_1NA=/1500x1125/filters:fill(auto,1)/20210909-SAMOSAS-ANDREWJANJIGIAN-86-ca872c2eae8e4e7eb4e7b47cfad8715e.jpg",
         [new ingredient('samosa', 2),new ingredient('chutney', 4)]),
         
      ];

      getRecList(){
          return this.RecList.slice(); //taki copy return ho na ki original
      }

    
     
}