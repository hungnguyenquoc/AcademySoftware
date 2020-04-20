import { Directive } from '@angular/core';
import { ValidatorFn, FormGroup, ValidationErrors, NG_VALIDATORS, AbstractControl } from '@angular/forms';



export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const pro_Name = control.get('pro_Name');
  // const alterEgo = control.get('alterEgo');

  return name ? { 'identityRevealed': true } : null;
};

@Directive({
  selector: '[appIdentityRevealed]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IdentityRevealedDirective, multi: true }]
})
export class IdentityRevealedDirective {

  validate(control: AbstractControl): ValidationErrors {
    return identityRevealedValidator(control);
  }

}
