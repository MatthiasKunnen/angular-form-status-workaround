import { AbstractControl } from '@angular/forms';

import { MonoTypeOperatorFunction } from 'rxjs/interfaces';
import { interval } from 'rxjs/observable/interval';
import { distinctUntilChanged, map, merge } from 'rxjs/operators';

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
) => MonoTypeOperatorFunction<string> = (control, i = 250) => source => source.pipe(
    merge(interval(i).pipe(map(() => control.status))),
    distinctUntilChanged(),
);
