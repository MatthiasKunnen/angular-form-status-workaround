[![npm version](https://img.shields.io/npm/v/angular-form-status-workaround.svg?style=for-the-badge)](https://www.npmjs.com/package/angular-form-status-workaround)

# Angular form status workaround
Angular forms can sometimes be stuck pending as described in
https://github.com/angular/angular/issues/13200 and
https://github.com/angular/angular/issues/14542.

This RxJS operator provides a temporary workaround until this issue is fixed
upstream. When the bug is fixed, this library will be deprecated.

Example usage
```TypeScript
import { fixFormStatus } from 'angular-form-status-workaround';

form.statusChanges.pipe(
    fixFormStatus(form),
).subscribe(s => {
    // WILL emit when the async validators complete and not stay stuck at PENDING
});
```

This operator can also be used on any subclass of
[AbstractControl](https://angular.io/api/forms/AbstractControl).

It is also possible to state the rate at which the status will be checked by
passing the time in milliseconds as a second argument. Example:
`fixFormStatus(form, 100)`. The default rate is 250ms.
