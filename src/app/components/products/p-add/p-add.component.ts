import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css']
})
export class PAddComponent implements OnInit{

  addform!:FormGroup

  constructor(private service:ServiceService, private router:Router,private toaster:ToastrService){}
  ngOnInit(): void {
    this.addform= new FormGroup({
      name:new FormControl(''),
      price:new FormControl(''),
      quantity:new FormControl(''),
      category:new FormControl('')
    })
  }

  submit(){
    
    const data= this.addform.getRawValue()
    console.log(data);
    
    if(data.name=='' || data.price==''|| data.quantity==''|| data.category==''){
      this.toaster.error('please fill...')
      return
    }
    this.service.addProduct(data).subscribe((res:any)=>{
      this.toaster.success(res.message)
      this.router.navigate(['list'])
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }

}
