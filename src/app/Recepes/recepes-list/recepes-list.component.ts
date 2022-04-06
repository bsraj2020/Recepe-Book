import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { RECE } from '../RECE';
import { recepeListService } from '../recepeList.service';

@Component({
  selector: 'app-recepes-list',
  templateUrl: './recepes-list.component.html',
  styleUrls: ['./recepes-list.component.css']
})
export class RecepesListComponent implements OnInit {
 /*ab service use kr rhe ha

   RecList : RECE[] = [
    new RECE("Momos","Tasty Momos of Delhi", "https://cdn.pixabay.com/photo/2021/10/28/08/48/momos-6749181_960_720.jpg"),
    new RECE("Samosa","Garama Garam", "https://www.seriouseats.com/thmb/98LmEBUumXHU-BJ3IzHAlQF_1NA=/1500x1125/filters:fill(auto,1)/20210909-SAMOSAS-ANDREWJANJIGIAN-86-ca872c2eae8e4e7eb4e7b47cfad8715e.jpg"),
    // new RECE("Kachodi","Jodhpur ki Famous", "https://static.toiimg.com/thumb/55415543.cms?width=1200&height=900")
  ];
  
 */
  RecList : RECE[]=[];
 // ReceDetails!:RECE; prhle ye parent -> child ja rha tha , @input ko use krke

 OnNewRecepe()
 {
    // this.route.navigate(['new'], {relativeTo:this.activeroute});
     this.recepeListService.isNewReceEnabled.next(true) ;
 }
  
  ItemClicked(ReceClicked:RECE,id:number)
  {   
      //console.log('id is- ',id);
      //this.ReceDetails=d ;
       this.recepeListService.itemSelected.next(id) ;
       this.route.navigate(['/recepe',id]) ;
       this.recepeListService.isNewReceEnabled.next(false) ;
  }

  constructor(private recepeListService: recepeListService, private route:Router,
    private activeroute:ActivatedRoute){}
  ngOnInit(): void {
    this.RecList = this.recepeListService.getRecList()

    // this is updating the reclist 
    this.recepeListService.itemSelected.subscribe((idx)=>{
      this.RecList = this.recepeListService.RecList ;
    })

    this.recepeListService.ReceListCHanged.subscribe((updatedReceList:RECE[])=>{
      this.RecList=updatedReceList ;
    })

  }

}
