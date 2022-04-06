import { EventEmitter, Injectable } from "@angular/core";

// delete button clickpr hai

export class LoggerService
{
    PrintMsg(msg:any){
        console.log(msg);
    }

    //kam nhi kr rha
    statusUpdated = new EventEmitter<string>();
    EmitData(msg:string){
        console.log('Emit data me khada h')
       this.statusUpdated.emit(msg);
    }
}