import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UdService } from './ud.service';



@Component({
  selector: 'app-ud',
  templateUrl: './ud.component.html',
  styleUrls: ['./ud.component.scss'],
})
export class UdComponent implements OnInit {

queryId: string;
school = {
   Name: '',
   Email: ''
};

  constructor(
private activatedRoute: ActivatedRoute,
private udService: UdService
  ) { }

  ngOnInit() {
    this.activatedRoute
 .queryParams
 .subscribe(params => {
 this.queryId = params.id;
 this.GpUpdate();
});
this.GpGetNounById();
  }

GpGetNounById() {
 this.udService.GpGetNounById(this.queryId)
  .subscribe(
    data => {
       console.log('successfully get the data by id --- ', data);
       this.school = data;
    },
    error => {
       console.log('cannot able to get the data using its id--- ', error);
    }
    );
}
GpUpdate() {
 this.udService.GpUpdate(this.school)
  .subscribe(
    data => {
 this.school.Name = '';

 this.school.Email = '';

       console.log('data updated successfully --- ', data);
    },
    error => {
       console.log('cannot able to update the data --- ', error);
    }
    );
}

}