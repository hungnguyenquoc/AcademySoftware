import { Directive, Injectable, forwardRef } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ProgramStudyService } from '../_services/program-study.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class ProgramStudyValidator implements AsyncValidator {
  constructor(private programService: ProgramStudyService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null > {

    return this.programService.isProgramStudyExist(ctrl.value)
    .pipe(map(pro_Name => (pro_Name ? {programExist: true} : null)),
    catchError(() => of(null))
    );
  }
}




@Directive({
  selector: '[appProgramStudy]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ProgramStudyValidator),
      multi: true
    }
  ]
})
export class ProgramStudyDirective {

  constructor(private validator: ProgramStudyValidator) { }
  validate(control: AbstractControl) {
    this.validator.validate(control);

  }
}
