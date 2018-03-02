import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
 
import { BikeService } from '../shared/bike.service'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']

})
export class BikeComponent implements OnInit {
 
  constructor(private bikeService: BikeService, private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
   
  }
  

   // public show = false;
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.bikeService.selectedBike = { 
    BikeID : null,
    Reference:'',
    Description:'',
    Quantity:'',
    Type:'',
    Color:''

    }
  }
  
 
  onSubmit(form: NgForm) {
    if (form.value.BikeID == null) {
      form.value.BikeID =0
      this.bikeService.postBike(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.bikeService.getBikeList();
          this.toastr.success('New Record Added Succcessfully', 'Bike Register');
        })
    }
    else {
      this.bikeService.putBike(form.value.BikeID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.bikeService.getBikeList();
        this.toastr.info('Record Updated Successfully!', 'Bike Register');
      });
    }
  }
}