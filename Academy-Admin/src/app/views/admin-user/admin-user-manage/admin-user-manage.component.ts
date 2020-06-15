import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../../_models/user';
import { Role } from '../../../_models/role';
import { Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UserService } from '../../../_services/user.service';
import { RoleService } from '../../../_services/role.service';
import { Router, ActivatedRoute } from '@angular/router';
// import * as XLSX from 'xlsx';  

@Component({
  selector: 'app-admin-user-manage',
  templateUrl: './admin-user-manage.component.html',
  styleUrls: ['./admin-user-manage.component.css']
})
export class AdminUserManageComponent implements OnInit {
  usersList: User;
  roleList: Role;
  // title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  modalRef: BsModalRef;
  sub: any;
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';  

  constructor(private userService: UserService,
              private roleService: RoleService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.sub = this.userService.getAll().subscribe(data => {
      this.usersList = data;
    });
    this.dtOptions = {
      // pagingType: 'full_numbers',
      pageLength: 5,
      orderCellsTop: true,
      processing: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.20/i18n/Vietnamese.json'
      }
    };
  }
  //
  // ExportTOExcel() {  
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();  
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
  //   XLSX.writeFile(wb, 'ScoreSheet.xlsx');  
  // }  
  //
  refreshList() {
    this.userService.getAll().subscribe(data => {
      this.usersList = data;
    });
  }
  //
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  //
  itemCreated() {
    this.refreshList();
  }
  //
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
  //
  openModalUpdate(templateUpdate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateUpdate);
  }
  //
  // refreshList() {
  //   this.userService.getAll().subscribe(data => {
  //     this.usersList = data;
  //   });
  // }
  // //
  // itemCreated() {
  //   this.refreshList();
  // }
  // //
  // openModal(template: TemplateRef<any>) {
  //   this.bsModalRef = this.modalService.show(template, {class: 'modal-lg'});
  // }
  // //
  // openModalUpdate(templateUpdate: TemplateRef<any>) {
  //   this.bsModalRef = this.modalService.show(templateUpdate);
  // }
  // // Hàm refresh List
  // refeshList() {
  //   this.userService.getAll()
  //   .subscribe(data => {
  //     this.usersList = data;
  //     this.dtTrigger.next();
  //   });
  // }
  // openModal(template: TemplateRef<any>) {
  //   this.bsModalRef = this.modalService.show(template, {class: 'modal-lg'});
  // }
  //
  // tslint:disable-next-line:use-lifecycle-interface
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  //   this.dtTrigger.unsubscribe();
  // }
  // itemCreated() {
  //   this.refeshList();
  // }
}
