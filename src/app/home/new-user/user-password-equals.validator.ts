import { FormGroup } from "@angular/forms";

export function userEqualsPasswordValidator(formGroup: FormGroup) {
    const username: string = formGroup.get("username")?.value ?? '';
    const password: string = formGroup.get("password")?.value ?? '';

    if(username.trim() + password.trim()) {
        return username != password ? null : {usernameEqualsPassword: true}
    } else {
        return null;
    }
}