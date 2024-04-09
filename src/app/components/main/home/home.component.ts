import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  prodata:any
  searchvalue=''
  p:any
  constructor(private service:ServiceService,private router:Router,private toaster:ToastrService){}
  ngOnInit(): void {
    this.service.getProduct().subscribe((res:any)=>{
      this.prodata=res.productdata
     },(err)=>{
      this.toaster.error('wrong...!')
     })
  }
  
}
