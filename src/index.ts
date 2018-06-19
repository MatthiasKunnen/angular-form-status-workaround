import { AbstractControl } from '@angular/forms';

import {
    interval,
    merge,
    MonoTypeOperatorFunction,
} from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

/**
 * Temporary async validator fix until
 * https://github.com/angular/angular/issues/13200 and
 * https://github.com/angular/angular/issues/14542 are addressed.
 *
 * Takes an optional interval as the second parameter which is the period
 * in milliseconds at which the form status will be checked. Default 250ms.
 */
export const fixFormStatus: (
    control: AbstractControl,
    interval?: number,
) => MonoTypeOperatorFunction<string> = (control, i = 250) => source =>
    merge(
        source,
        interval(i).pipe(map(() => control.status)),
    ).pipe(
        distinctUntilChanged(),
    );
