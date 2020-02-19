import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CourseCategory } from '../_models/coursecategory';
import { CourseCategoryService } from '../_services/course-category.service';

@ Injectable()
export class CourseCategoryListResolver implements Resolve< CourseCategory[]> {


    constructor(private courseCategoryService: CourseCategoryService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable< CourseCategory[]> {
        return this.courseCategoryService.getAll().pipe(
            catchError(error => {
                console.log(error);
                // this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
