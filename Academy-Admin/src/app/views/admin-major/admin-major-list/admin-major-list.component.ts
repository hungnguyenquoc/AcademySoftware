import { Component, OnInit } from '@angular/core';
import { MajorService } from '../../../_services/major.service';
import { Major } from '../../../_models/major';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-admin-major-list',
  templateUrl: './admin-major-list.component.html',
  styleUrls: ['./admin-major-list.component.css']
})
export class AdminMajorListComponent implements OnInit {
  majorsList: Major[];
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};

  constructor(private majorService: MajorService, private toastr: ToastrService) { }

  ngOnInit() {
    // this.majorService.getMajors().subscribe(data => this.majorsList = data);
    // this.RefreshList();
    // this.dtOptions = {
    //   // pagingType: 'full_numbers',
    //   pageLength: 5,
    //   orderCellsTop: true,
    //   processing: true,
    //   language: {
    //     url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Vietnamese.json'
    //   }
    // };
  }
  // RefreshList() {
  //   this.majorService.getMajors().subscribe(data => this.majorsList = data);
  // }
  // deleteMajor(id: number) {
  //   this.majorService.deleteMajor(id).subscribe(() => {
  //     this.toastr.success('Đã xóa thành công');
  //   }, err => {
  //     this.toastr.warning(err);
  //   });
  // }
}
