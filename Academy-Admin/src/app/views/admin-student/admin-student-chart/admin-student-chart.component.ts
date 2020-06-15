import { Component, OnInit } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Label } from "ng2-charts";
import { StudentService } from "../../../_services/student.service";
import * as moment from "moment";
import { Student } from "../../../_models/student";
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ResponseStudents {
  results: Student[];
}

@Component({
  selector: "app-admin-student-chart",
  templateUrl: "./admin-student-chart.component.html",
  styleUrls: ["./admin-student-chart.component.css"],
})
export class AdminStudentChartComponent implements OnInit {

  orders: any;
  orderLabels: string[];
  orderData: number[];

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false,
  };
  temp: any;
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // // public barCharOptions: any = [
  // //   scaleShowVerticalLines: false;
  // //   responsive: true;
  // // ];
  // studentsList: Student[];
  // students: any;
  // studentLabels: string[];
  // studentData: number[];

  // Test thử nghiệm

  

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.getStudentsPagination(1, 100).subscribe(
      res => {
        console.log(res['page']);
        this.temp = res['page'];
        console.log(this.temp.total);
        console.log(res['data']);
        const localChartData = this.getChartData(res);
        console.log(localChartData.map(x => x[0]));
        // this.barChartLabels = localChartData.map( x => x[0]).reverse();
        // this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Sales'}];
      }
    );
  }
  // test
  // main
  getChartData(res: Student[] ) {
    this.orders = res['page']['total'];
    // this.temp = this.orders;
    const data = this.orders.map(o => o.total);
    console.log(data);
    // this.orders = res['page']['data'];
    // // this.temp = res['page'];
    // // console.log(this.temp.total);
    // const data = this.orders.map(o => o.total);
    // console.log(data);
    // const data = this.orders.map(o => o.this.temp.total);
    // console.log(data);
    // const labels = this.orders.map(o => moment(new Date(o.createdDate)).format('dd/MM/yyyy'));
    // const formattedLabels = this.orders.reduce((r, e) => {
    //   r.push([moment(e.createdDate).format('YYYY-MM-DD'), e.total]);
    //   return r;
    // }, []);

    // const p = [];
    // // console.log('formattedLabels:', formattedLabels);
    // const chartData = formattedLabels.reduce((r, e) => {
    //   const key = e[0];
    //   if ( !p[key] ) {
    //     p[key] = e;
    //     r.push(p[key]);
    //   } else {
    //     p [key] [1] += e[1];
    //   }
    //   return r;
    // }, []);

    // return chartData;
  }


//  this.studentService.getStudentsPagination(1, 100).subscribe((res) => {
    //   const localChartData = this.getChartData(res);
    //   this.barChartLabels = localChartData.map(c => c[0]).reserve());
    //   // this.barChartLabels = localChartData.map(x => x[0]).reverse();
    //   this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Students'}];
    // }};
  // getChartData(res: Student[]) {
  //   this.orders = res['page']['data'];
  //   const data = this.orders.map( p => p.stu_Fullname);
  //   // const labels = this.orders.map(o => moment(new Date(o.createdDate)).format('YY-MM-DD'));
  //   const formattedOrders = this.orders.reduce((r, e) => {
  //     r.push([moment(e.createdDate).format('YY-MM-DD'), e.stu_Fullname]);
  //     return r;
  //   }, []);

  //   const p = [];
  //   console.log('formattedOrders:', formattedOrders);
  //   const chartData = formattedOrders.reduce((r, e) => {
  //     const key = e[0];
  //     if (!p[key]) {
  //       p[key] = e;
  //       r.push(p[key]);
  //     } else {
  //       p[key][1] += e[1];
  //     }
  //     return r;
  //   }, []);
  //   console.log(chartData);

    // const myData = [3, 5, 99].reduce((sum, value) => {
    //   console.log('sum:', sum, 'value:', value );
    //   return sum + value;
    // }, 0);
    // console.log('myData:', myData);
    // console.log(labels);
  }


    //  this.studentService.getStudentsPagination(1, 100).subscribe((res) => {
    //   const localChartData = this.getChartData(res);
    //   this.barChartLabels = localChartData.map(c => c[0]).reserve());
    //   // this.barChartLabels = localChartData.map(x => x[0]).reverse();
    //   this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Students'}];
    // }};

    // this.studentService.getStudentsPagination(1, 100).subscribe((res) => {
    //   const localChartData = this.getChartData(res);
    //   this.barChartLabels = localChartData.map(c => c[0]).reserve());
    //   // this.barChartLabels = localChartData.map(x => x[0]).reverse();
    //   this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Students'}];
    // }};

  //
 

  //   // console.log(chartData);
  // }

  //
  // events
  

