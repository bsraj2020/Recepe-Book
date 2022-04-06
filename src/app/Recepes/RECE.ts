import { ingredient } from "../shared/ingredient";

export class RECE{
  
   public name:string='';
   public desc:string='';
   public imgPath: string='' ;
   public Ingredients!:ingredient[];

   constructor(name:string, desc:string, imgPath:string, Ingredients:ingredient[])
   {
            this.name=name;
            this.desc=desc;
            this.imgPath=imgPath; 
            this.Ingredients=Ingredients
   }
   
}