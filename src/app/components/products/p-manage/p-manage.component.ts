import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-p-manage',
  templateUrl: './p-manage.component.html',
  styleUrls: ['./p-manage.component.css']
})
export class PManageComponent implements OnInit{

  prodata:any
  isShow:boolean=false
  edituser:any
  name=''
  category=''
  price:number=0
  quantity:number=0
  id:string=''
  constructor(private service:ServiceService,private toaster:ToastrService,private router:Router){}
  ngOnInit(): void {
     this.service.getProduct().subscribe((res:any)=>{
      this.prodata=res.productdata
     },(err)=>{
      this.toaster.error('wrong...!')
     })

    
  }

  submit(){
    
    
    if(this.name=='' || !this.price|| !this.quantity ||!this.category){
      this.toaster.error('please fill...')
      return
    }
    const data={
      name:this.name,
      price:this.price,
      quantity:this.quantity,
      category:this.category,
      id:this.id
    }
    
    this.service.editProduct(data).subscribe((res:any)=>{
      this.toaster.success(res.message)
      this.isShow=false
      this.router.navigate(['list'])
      this.ngOnInit()
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }
  change(){
    this.isShow=false
  }

  edit(item:any){

    this.isShow=true
    this.name=item.name   
    this.price=item.price   
    this.quantity=item.quantity  
    this.category=item.category  
    this.id=item._id 

  }
  delete(id:string){
    this.service.deleteProduct(id).subscribe((res:any)=>{
      this.toaster.success(res.message)
      this.ngOnInit()
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }
}
