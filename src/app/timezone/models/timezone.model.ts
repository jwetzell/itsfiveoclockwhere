import { DateTime } from 'luxon';

export interface Timezone {
    name: string;
    time?: DateTime;
}

export function TimezoneCompare(a: Timezone, b: Timezone) {
    if (a.time != undefined && b.time != undefined) {
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
    }

    if (a.time == undefined && b.time != undefined) {
        return -1;
    }

    if (b.time == undefined && a.time != undefined) {
        return 1;
    }

    return 0;
}