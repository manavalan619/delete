import { Component, OnInit } from '@angular/core';
import { GetallService } from './bootstrap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bootstrapp',
  templateUrl: './bootstrapp.component.html',
  styleUrls: ['./bootstrapp.component.scss']
})
export class BootstrappComponent implements OnInit {

  constructor(private getallService: GetallService, private router: Router
  ) {

  }
  name = 'Angular';
  rowData1: any = [];
  gridApi: any;
  rowData: any = [];
  page = 1;
  pagelength = this.rowData.length;
  pageSize = 10;

  ngOnInit(): void {
    this.GpGetAllValues();
  }


  onSelectionChanged(event) {
    const selectedRows = this.gridApi.getSelectedRows();
    this.GpRoute(selectedRows[0]._id);
  }
  GpRoute(queryId) {
    this.router.navigate(['/ud'], { queryParams: { 'id': queryId } });
  }
  demo(values) {
    this.GpRoute(values._id);
    console.log("Row click is working", values._id)
  }
  // columnDefs = [
  // ];
  columnDefs = [
    { headerName: 'Name', field: 'Name' },
    { headerName: 'Email', field: 'Email' },
    { headerName: 'ID', field: 'Email' },
  ];
  GpGetAllValues() {
    this.getallService.GpGetAllValues()
      .subscribe(
        data => {
          console.log('successfully get all data --- ', data);
          this.rowData = data;
        },
        error => {
          console.log('cannot able to get all data --- ', error);
        }
      );

  }

}
