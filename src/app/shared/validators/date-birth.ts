import { AbstractControl } from "@angular/forms";

export function validateDOB(control: AbstractControl) {
  let currentDateTime = new Date();
  currentDateTime.setHours(0, 0, 0, 0);

  let controlValue = new Date(control.value);
  controlValue.setHours(0, 0, 0, 0);

  //console.log(currentDateTime+'-'+controlValue)

  if (currentDateTime < control.value) {
    return { dateError: true };
  }
  return null;
}
