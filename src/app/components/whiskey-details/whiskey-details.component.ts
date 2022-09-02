// import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { CrudService } from '../service/crud.service';
// import { FormGroup, FormBuilder } from "@angular/forms";

// @Component({
//   selector: 'app-whiskey-details',
//   templateUrl: './whiskey-details.component.html',
//   styleUrls: ['./whiskey-details.component.css']
// })
// export class WhiskeyDetailsComponent implements OnInit {

//   getId: any;
//   updateForm: FormGroup;
   
//   constructor(
//     public formBuilder: FormBuilder,
//     private router: Router,
//     private ngZone: NgZone,
//     private activatedRoute: ActivatedRoute,
//     private crudService: CrudService
//   ) {
//     this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
//     this.crudService.GetWhiskeys().subscribe(res => {
//       this.updateForm.setValue({
//         name: res[''],
//         glassType: res[''],
//         price: res[''],
//         alcohol: res['']
//       });
//     });
 
//     this.updateForm = this.formBuilder.group({
//       name:[''],
//       glassType:[''],
//       price:[],
//       alcohol:['']
//     })
//   }
 
//   ngOnInit() { }
 

//   onUpdate(id:any): any {

//     var formData: any = new FormData();
//     formData.append("price", this.updateForm.get('price')?.value);


//     console.log(formData)

//      fetch("http://localhost:3001/drink" + window.location.pathname, {
//        method: "PUT",
//         body: formData,  
//       })
//       window.location.reload()
    


//   }
 
// }