import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/services/service.service';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  names:any
  total:any
  category:any
  totalvalue:any
  constructor(private service:ServiceService, private toaster:ToastrService){}
  ngOnInit(): void {

    this.service.getCategoryvalue().subscribe((res:any)=>{


      this.category=res.data.map((value:any)=>{
        return value.category 
      })
      this.totalvalue=res.data.map((value:any)=>{
        return value.totalvalue
      })

      console.log(this.category);
      console.log(this.totalvalue);
      var mysecondChart = new Chart("mysecondChart", {
        type: 'bar',
        data: {
          labels:this.category,
          datasets: [{
            label: 'Analysis',
            data: this.totalvalue,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)', 
              'rgba(54, 162, 235, 0.2)', 
              'rgba(255, 206, 86, 0.2)' 
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)', 
              'rgba(54, 162, 235, 1)', 
              'rgba(255, 206, 86, 1)' 
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: { 
              beginAtZero: true
            }
          }
        }
      });
      
    },(err)=>{
      this.toaster.error(err.error.message)
    })


    this.service.getProductvalue().subscribe((res:any)=>{
      
      this.names=res.data.map((value:any)=>{
        return value.name 
      })
      this.total=res.data.map((value:any)=>{
        return value.totalPrice
      })


     
      var myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels:this.names,
          datasets: [{
            label: 'Analysis',
            data: this.total,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)', 
              'rgba(54, 162, 235, 0.2)', 
              'rgba(255, 206, 86, 0.2)' 
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)', 
              'rgba(54, 162, 235, 1)', 
              'rgba(255, 206, 86, 1)' 
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: { 
              beginAtZero: true
            }
          }
        }
      });
    },(err)=>{
      this.toaster.error(err.error.message)
    })
   
  }
}
