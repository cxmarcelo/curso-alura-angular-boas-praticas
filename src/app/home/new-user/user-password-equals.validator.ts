import { FormGroup } from "@angular/forms";

export function userEqualsPasswordValidator(formGroup: FormGroup) {
    const username = formGroup.get('userName')?.value ?? '';
    const password = formGroup.get('password')?.value ?? '';
  
    if (username.trim() + password.trim()) {
      return username !== password ? null : { userEqualsPass: true };
    } else {
      return null;
    }
  }