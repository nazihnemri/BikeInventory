import { Component, OnInit } from '@angular/core';
 
import { BikeService } from '../shared/bike.service'
import { Bike } from '../shared/bike.model';
import { ToastrService } from 'ngx-toastr';    
@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
 
  constructor(private bikeService: BikeService,private toastr : ToastrService) { }
 
  ngOnInit() {
    this.bikeService.getBikeList();
  }
 
 sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
 
  showForEdit(emp: Bike) {
  
   this.bikeService.show2=true;
   //this.sleep(5000);
   this.bikeService.selectedBike = Object.assign({}, emp);
   

  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bikeService.deleteBike(id)
      .subscribe(x => {
        this.bikeService.getBikeList();
        this.toastr.warning("Deleted Successfully","Bike Register");
      })
    }
  }
}