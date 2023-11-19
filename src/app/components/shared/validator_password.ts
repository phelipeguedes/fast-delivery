import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function ConfirmPasswordValidator(inputPassword: string, inputConfirmPassword: string): ValidatorFn {
  return (formGroup: FormGroup): { [key: string]: any } | null => {
    const originalPassword = formGroup.get(inputPassword).value;
    const confirmPassword = formGroup.get(inputConfirmPassword).value;

    return originalPassword === confirmPassword ? null : { 'confirmPassword': true };
  };
}
