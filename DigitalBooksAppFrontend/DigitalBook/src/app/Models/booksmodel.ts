import { FormsModule,FormGroup,Validators,FormBuilder,FormControl} from "@angular/forms";
export class Book{
    id:number=0;
    title:string='';
    author:any ="";
    authorid:string="";
    publisher:string='';
    category:string='';
    content:string='';
    imageUrl:string=""
    active:string='';
    price:string='';
    releaseddate:string ="";
    referemail:any='';
    formBookGroup:FormGroup;//Create
    
    constructor(){
        var _builder=new FormBuilder();
         this.formBookGroup=_builder.group({});
         this.formBookGroup.addControl("titleControl",new FormControl('',Validators.required));
         this.formBookGroup.addControl("categoryControl",new FormControl('',Validators.required));
          
         this.formBookGroup.addControl("publisherControl",new FormControl('',Validators.required));
   
   

         var validationcollection=[];
         validationcollection.push(Validators.required);
         validationcollection.push(Validators.pattern("^[0-9]{3,3}$"));
         this.formBookGroup.addControl("priceControl",new FormControl('',Validators.compose(validationcollection)));
        }
    

}    
   