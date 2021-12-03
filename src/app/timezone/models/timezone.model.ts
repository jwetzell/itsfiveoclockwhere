import { DateTime } from 'luxon';

export interface Timezone {
    name: string;
    location?: TimezoneLocation;
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

// http://www.movable-type.co.uk/scripts/latlong.html
export function GetClosestTimezoneFrom(timezone: string, timezones: Timezone[]) {
    var location1 = timezoneMap[timezone]


    var closestDist = Number.MAX_SAFE_INTEGER
    var closestTimezone = undefined
    timezones.forEach(element => {
        var location2 = timezoneMap[element.name]

        var deltaLat = (location2.lat - location1.lat) * (Math.PI / 180);
        var deltaLong = (location2.long - location2.long) * (Math.PI / 180);

        var a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(location1.lat * (Math.PI / 180)) * Math.cos(location2.lat * (Math.PI / 180)) *
            Math.sin(deltaLong / 2) * Math.sin(deltaLong / 2);

        var dist = Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        if (dist < closestDist) {
            closestDist = dist
            closestTimezone = element
        }
    });
    return closestTimezone
}

export function TimezoneList() {
    return Object.keys(timezoneMap)
}

export interface TimezoneLocation {
    lat: number;
    long: number;
}

//TODO: This still needs to be fully populated
export var timezoneMap: { [key: string]: TimezoneLocation } = {
    'Africa/Abidjan': { lat: 5.359952, long: -4.008256 },
    'Africa/Accra': { lat: 5.603717, long: -0.186964 },
    'Africa/Addis_Ababa': { lat: 9.033140, long: 38.750080 },
    'Africa/Algiers': { lat: 36.753769, long: 3.058756 },
    'Africa/Asmara': { lat: 15.339000, long: 38.937111 },
    'Africa/Bamako': { lat: 12.6392, long: -8.0029 },
    'Africa/Bangui': { lat: 4.3947, long: 18.5582 },
    'Africa/Banjul': { lat: 13.4544, long: -16.5753 },
    'Africa/Bissau': { lat: 11.8632, long: -15.5843 },
    'Africa/Blantyre': { lat: -15.7667, long: 35.0168 },
    'Africa/Brazzaville': { lat: -4.2634, long: 15.2429 },
    'Africa/Bujumbura': { lat: -3.3614, long: 29.3599 },
    'Africa/Cairo': { lat: 30.0444, long: 31.2357 },
    'Africa/Casablanca': { lat: 33.5731, long: -7.5898 },
    'Africa/Ceuta': { lat: 35.8894, long: -5.3213 },
    'Africa/Conakry': { lat: 9.6412, long: -13.5784 },
    'Africa/Dakar': { lat: 14.7167, long: -17.4677 },
    'Africa/Dar_es_Salaam': { lat: -6.7924, long: 39.2083 },
    'Africa/Djibouti': { lat: 11.5721, long: 43.1456 },
    'Africa/Douala': { lat: 4.0511, long: 9.7679 },
    'Africa/El_Aaiun': { lat: 27.1500, long: -13.1991 },
    'Africa/Freetown': { lat: 8.4657, long: -13.2317 },
    'Africa/Gaborone': { lat: -24.6282, long: 25.9231 },
    'Africa/Harare': { lat: -17.8216, long: 31.0492 },
    'Africa/Johannesburg': { lat: -26.2041, long: 28.0473 },
    'Africa/Juba': { lat: 4.8594, long: 31.5713 },
    'Africa/Kampala': { lat: 0.3476, long: 32.5825 },
    'Africa/Khartoum': { lat: 15.5007, long: 32.5599 },
    'Africa/Kigali': { lat: -1.9579, long: 30.1127 },
    'Africa/Kinshasa': { lat: -4.4419, long: 15.2663 },
    'Africa/Lagos': { lat: 6.5244, long: 3.3792 },
    'Africa/Libreville': { lat: 0.4162, long: 9.4673 },
    'Africa/Lome': { lat: 6.1256, long: 1.2254 },
    'Africa/Luanda': { lat: -8.8147, long: 13.2302 },
    'Africa/Lubumbashi': { lat: -11.6876, long: 27.5026 },
    'Africa/Lusaka': { lat: -15.3875, long: 28.3228 },
    'Africa/Malabo': { lat: 3.7550, long: 8.7821 },
    'Africa/Maputo': { lat: -25.9692, long: 32.5732 },
    'Africa/Maseru': { lat: -29.3151, long: 27.4869 },
    'Africa/Mbabane': { lat: -26.3054, long: 31.1367 },
    'Africa/Mogadishu': { lat: 2.0469, long: 45.3182 },
    'Africa/Monrovia': { lat: 6.3156, long: -10.8074 },
    'Africa/Nairobi': { lat: -1.2921, long: 36.8219 },
    'Africa/Ndjamena': { lat: 12.1348, long: 15.0557 },
    'Africa/Niamey': { lat: 13.5116, long: 2.1254 },
    'Africa/Nouakchott': { lat: 18.0735, long: -15.9582 },
    'Africa/Ouagadougou': { lat: 12.3714, long: -1.5197 },
    'Africa/Porto-Novo': { lat: 6.4969, long: 2.6289 },
    'Africa/Sao_Tome': { lat: 0.1864, long: 6.6131 },
    'Africa/Tripoli': { lat: 32.8872, long: 13.1913 },
    'Africa/Tunis': { lat: 36.8065, long: 10.1815 },
    'Africa/Windhoek': { lat: -22.5609, long: 17.0658 },
    'America/Adak': { lat: 51.8800, long: -176.6581 },
    'America/Anchorage': { lat: 61.2181, long: -149.9003 },
    'America/Anguilla': { lat: 18.2206, long: -63.0686 },
    'America/Antigua': { lat: 14.5573, long: -90.7332 },
    'America/Araguaina': { lat: -7.1916, long: -48.2095 },
    'America/Argentina/Buenos_Aires': { lat: -34.6037, long: -58.3816 },
    'America/Argentina/Catamarca': { lat: -28.4696, long: -65.7795 },
    'America/Argentina/Cordoba': { lat: -31.4201, long: -64.1888 },
    'America/Argentina/Jujuy': { lat: -24.1858, long: -65.2995 },
    'America/Argentina/La_Rioja': { lat: 42.2871, long: -2.5396 },
    'America/Argentina/Mendoza': { lat: -32.8895, long: -68.8458 },
    'America/Argentina/Rio_Gallegos': { lat: -51.6230, long: -69.2168 },
    'America/Argentina/Salta': { lat: -24.7821, long: -65.4232 },
    'America/Argentina/San_Juan': { lat: -31.5351, long: -68.5386 },
    'America/Argentina/San_Luis': { lat: -33.3017, long: -66.3378 },
    'America/Argentina/Tucuman': { lat: -26.8083, long: -65.2176 },
    'America/Argentina/Ushuaia': { lat: -54.8019, long: -68.3030 },
    'America/Aruba': { lat: 12.5211, long: -69.9683 },
    'America/Asuncion': { lat: -25.2637, long: -57.5759 },
    'America/Atikokan': { lat: 48.7575, long: -91.6218 },
    'America/Bahia': { lat: -11.4099, long: -41.2809 },
    'America/Bahia_Banderas': { lat: 20.8075, long: -105.2481 },
    'America/Barbados': { lat: 13.1939, long: -59.5432 },
    'America/Belem': { lat: -1.4563, long: -48.5013 },
    'America/Belize': { lat: 17.5046, long: -88.1962 },
    'America/Blanc-Sablon': { lat: 51.4264, long: -57.1313 },
    'America/Boa_Vista': { lat: 2.8206, long: -60.6738 },
    'America/Bogota': { lat: 4.7110, long: -74.0721 },
    'America/Boise': { lat: 43.6150, long: -116.2023 },
    'America/Cambridge_Bay': { lat: 69.1169, long: -105.0597 },
    'America/Campo_Grande': { lat: -20.4649, long: -54.6218 },
    'America/Cancun': { lat: 21.1619, long: -86.8515 },
    'America/Caracas': { lat: 10.4806, long: -66.9036 },
    'America/Cayenne': { lat: 4.9224, long: -52.3135 },
    'America/Cayman': { lat: 19.3133, long: -81.2546 },
    'America/Chicago': { lat: 41.8781, long: -87.6298 },
    'America/Chihuahua': { lat: 28.6330, long: -106.0691 },
    'America/Costa_Rica': { lat: 9.7489, long: -83.7534 },
    'America/Creston': { lat: 41.0586, long: -94.3613 },
    'America/Cuiaba': { lat: -15.5954, long: -56.0926 },
    'America/Curacao': { lat: 12.1696, long: -68.9900 },
    'America/Danmarkshavn': { lat: 76.7667, long: -18.6667 },
    'America/Dawson': { lat: 46.8686, long: -99.7515 },
    'America/Dawson_Creek': { lat: 55.7596, long: -120.2377 },
    'America/Denver': { lat: 39.7392, long: -104.9903 },
    'America/Detroit': { lat: 42.3314, long: -83.0458 },
    'America/Dominica': { lat: 15.4150, long: -61.3710 },
    'America/Edmonton': { lat: 53.5461, long: -113.4938 },
    'America/Eirunepe': { lat: -6.6571, long: -69.8667 },
    'America/El_Salvador': { lat: 13.7942, long: -88.8965 },
    'America/Fort_Nelson': { lat: 58.8050, long: -122.6972 },
    'America/Fortaleza': { lat: -3.7327, long: -38.5270 },
    'America/Glace_Bay': { lat: 46.1969, long: -59.9570 },
    'America/Goose_Bay': { lat: 53.3017, long: -60.3261 },
    'America/Grand_Turk': { lat: 21.4675, long: -71.1389 },
    'America/Grenada': { lat: 12.1165, long: -61.6790 },
    'America/Guadeloupe': { lat: 16.2650, long: -61.5510 },
    'America/Guatemala': { lat: 15.7835, long: -90.2308 },
    'America/Guayaquil': { lat: -2.1894, long: -79.8891 },
    'America/Guyana': { lat: 4.8604, long: -58.9302 },
    'America/Halifax': { lat: 44.6488, long: -63.5752 },
    'America/Havana': { lat: 23.1136, long: -82.3666 },
    'America/Hermosillo': { lat: 29.0730, long: -110.9559 },
    'America/Indiana/Indianapolis': { lat: 39.7684, long: -86.1581 },
    'America/Indiana/Knox': { lat: 41.2959, long: -86.6250 },
    'America/Indiana/Marengo': { lat: 38.3692, long: -86.3436 },
    'America/Indiana/Petersburg': { lat: 38.4920, long: -87.2786 },
    'America/Indiana/Tell_City': { lat: 37.9514, long: -86.7678 },
    'America/Indiana/Vevay': { lat: 38.7478, long: -85.0672 },
    'America/Indiana/Vincennes': { lat: 38.6773, long: -87.5286 },
    'America/Indiana/Winamac': { lat: 41.0514, long: -86.6031 },
    'America/Inuvik': { lat: 68.3607, long: -133.7230 },
    'America/Iqaluit': { lat: 63.7467, long: -68.5170 },
    'America/Jamaica': { lat: 18.1096, long: -77.2975 },
    'America/Juneau': { lat: 58.3019, long: -134.4197 },
    'America/Kentucky/Louisville': { lat: 38.2527, long: -85.7585 },
    'America/Kentucky/Monticello': { lat: 36.8298, long: -84.8491 },
    'America/Kralendijk': { lat: 12.1443, long: -68.2655 },
    'America/La_Paz': { lat: -16.4897, long: -68.1193 },
    'America/Lima': { lat: -12.0464, long: -77.0428 },
    'America/Los_Angeles': { lat: 34.0522, long: -118.2437 },
    'America/Lower_Princes': { lat: 18.0513, long: -63.0471 },
    'America/Maceio': { lat: -9.6660, long: -35.7352 },
    'America/Managua': { lat: 12.1150, long: -86.2362 },
    'America/Manaus': { lat: -3.1190, long: -60.0217 },
    'America/Marigot': { lat: 18.0675, long: -63.0825 },
    'America/Martinique': { lat: 14.6415, long: -61.0242 },
    'America/Matamoros': { lat: 25.8690, long: -97.5027 },
    'America/Mazatlan': { lat: 23.2494, long: -106.4111 },
    'America/Menominee': { lat: 45.1078, long: -87.6143 },
    'America/Merida': { lat: 20.9674, long: -89.5926 },
    'America/Metlakatla': { lat: 55.1292, long: -131.5722 },
    'America/Mexico_City': { lat: 19.4326, long: -99.1332 },
    'America/Miquelon': { lat: 0, long: 0 },
    'America/Moncton': { lat: 0, long: 0 },
    'America/Monterrey': { lat: 0, long: 0 },
    'America/Montevideo': { lat: 0, long: 0 },
    'America/Montserrat': { lat: 0, long: 0 },
    'America/Nassau': { lat: 0, long: 0 },
    'America/New_York': { lat: 0, long: 0 },
    'America/Nipigon': { lat: 0, long: 0 },
    'America/Nome': { lat: 0, long: 0 },
    'America/Noronha': { lat: 0, long: 0 },
    'America/North_Dakota/Beulah': { lat: 0, long: 0 },
    'America/North_Dakota/Center': { lat: 0, long: 0 },
    'America/North_Dakota/New_Salem': { lat: 0, long: 0 },
    'America/Nuuk': { lat: 0, long: 0 },
    'America/Ojinaga': { lat: 0, long: 0 },
    'America/Panama': { lat: 0, long: 0 },
    'America/Pangnirtung': { lat: 0, long: 0 },
    'America/Paramaribo': { lat: 0, long: 0 },
    'America/Phoenix': { lat: 0, long: 0 },
    'America/Port-au-Prince': { lat: 0, long: 0 },
    'America/Port_of_Spain': { lat: 0, long: 0 },
    'America/Porto_Velho': { lat: 0, long: 0 },
    'America/Puerto_Rico': { lat: 0, long: 0 },
    'America/Punta_Arenas': { lat: 0, long: 0 },
    'America/Rainy_River': { lat: 0, long: 0 },
    'America/Rankin_Inlet': { lat: 0, long: 0 },
    'America/Recife': { lat: 0, long: 0 },
    'America/Regina': { lat: 0, long: 0 },
    'America/Resolute': { lat: 0, long: 0 },
    'America/Rio_Branco': { lat: 0, long: 0 },
    'America/Santarem': { lat: 0, long: 0 },
    'America/Santiago': { lat: 0, long: 0 },
    'America/Santo_Domingo': { lat: 0, long: 0 },
    'America/Sao_Paulo': { lat: 0, long: 0 },
    'America/Scoresbysund': { lat: 0, long: 0 },
    'America/Sitka': { lat: 0, long: 0 },
    'America/St_Barthelemy': { lat: 0, long: 0 },
    'America/St_Johns': { lat: 0, long: 0 },
    'America/St_Kitts': { lat: 0, long: 0 },
    'America/St_Lucia': { lat: 0, long: 0 },
    'America/St_Thomas': { lat: 0, long: 0 },
    'America/St_Vincent': { lat: 0, long: 0 },
    'America/Swift_Current': { lat: 0, long: 0 },
    'America/Tegucigalpa': { lat: 0, long: 0 },
    'America/Thule': { lat: 0, long: 0 },
    'America/Thunder_Bay': { lat: 0, long: 0 },
    'America/Tijuana': { lat: 0, long: 0 },
    'America/Toronto': { lat: 0, long: 0 },
    'America/Tortola': { lat: 0, long: 0 },
    'America/Vancouver': { lat: 0, long: 0 },
    'America/Whitehorse': { lat: 0, long: 0 },
    'America/Winnipeg': { lat: 0, long: 0 },
    'America/Yakutat': { lat: 0, long: 0 },
    'America/Yellowknife': { lat: 0, long: 0 },
    'Antarctica/Casey': { lat: 0, long: 0 },
    'Antarctica/Davis': { lat: 0, long: 0 },
    'Antarctica/DumontDUrville': { lat: 0, long: 0 },
    'Antarctica/Macquarie': { lat: 0, long: 0 },
    'Antarctica/Mawson': { lat: 0, long: 0 },
    'Antarctica/McMurdo': { lat: 0, long: 0 },
    'Antarctica/Palmer': { lat: 0, long: 0 },
    'Antarctica/Rothera': { lat: 0, long: 0 },
    'Antarctica/Syowa': { lat: 0, long: 0 },
    'Antarctica/Troll': { lat: 0, long: 0 },
    'Antarctica/Vostok': { lat: 0, long: 0 },
    'Arctic/Longyearbyen': { lat: 0, long: 0 },
    'Asia/Aden': { lat: 0, long: 0 },
    'Asia/Almaty': { lat: 0, long: 0 },
    'Asia/Amman': { lat: 0, long: 0 },
    'Asia/Anadyr': { lat: 0, long: 0 },
    'Asia/Aqtau': { lat: 0, long: 0 },
    'Asia/Aqtobe': { lat: 0, long: 0 },
    'Asia/Ashgabat': { lat: 0, long: 0 },
    'Asia/Atyrau': { lat: 0, long: 0 },
    'Asia/Baghdad': { lat: 0, long: 0 },
    'Asia/Bahrain': { lat: 0, long: 0 },
    'Asia/Baku': { lat: 0, long: 0 },
    'Asia/Bangkok': { lat: 0, long: 0 },
    'Asia/Barnaul': { lat: 0, long: 0 },
    'Asia/Beirut': { lat: 0, long: 0 },
    'Asia/Bishkek': { lat: 0, long: 0 },
    'Asia/Brunei': { lat: 0, long: 0 },
    'Asia/Chita': { lat: 0, long: 0 },
    'Asia/Choibalsan': { lat: 0, long: 0 },
    'Asia/Colombo': { lat: 0, long: 0 },
    'Asia/Damascus': { lat: 0, long: 0 },
    'Asia/Dhaka': { lat: 0, long: 0 },
    'Asia/Dili': { lat: 0, long: 0 },
    'Asia/Dubai': { lat: 0, long: 0 },
    'Asia/Dushanbe': { lat: 0, long: 0 },
    'Asia/Famagusta': { lat: 0, long: 0 },
    'Asia/Gaza': { lat: 0, long: 0 },
    'Asia/Hebron': { lat: 0, long: 0 },
    'Asia/Ho_Chi_Minh': { lat: 0, long: 0 },
    'Asia/Hong_Kong': { lat: 0, long: 0 },
    'Asia/Hovd': { lat: 0, long: 0 },
    'Asia/Irkutsk': { lat: 0, long: 0 },
    'Asia/Jakarta': { lat: 0, long: 0 },
    'Asia/Jayapura': { lat: 0, long: 0 },
    'Asia/Jerusalem': { lat: 0, long: 0 },
    'Asia/Kabul': { lat: 0, long: 0 },
    'Asia/Kamchatka': { lat: 0, long: 0 },
    'Asia/Karachi': { lat: 0, long: 0 },
    'Asia/Kathmandu': { lat: 0, long: 0 },
    'Asia/Khandyga': { lat: 0, long: 0 },
    'Asia/Kolkata': { lat: 0, long: 0 },
    'Asia/Krasnoyarsk': { lat: 0, long: 0 },
    'Asia/Kuala_Lumpur': { lat: 0, long: 0 },
    'Asia/Kuching': { lat: 0, long: 0 },
    'Asia/Kuwait': { lat: 0, long: 0 },
    'Asia/Macau': { lat: 0, long: 0 },
    'Asia/Magadan': { lat: 0, long: 0 },
    'Asia/Makassar': { lat: 0, long: 0 },
    'Asia/Manila': { lat: 0, long: 0 },
    'Asia/Muscat': { lat: 0, long: 0 },
    'Asia/Nicosia': { lat: 0, long: 0 },
    'Asia/Novokuznetsk': { lat: 0, long: 0 },
    'Asia/Novosibirsk': { lat: 0, long: 0 },
    'Asia/Omsk': { lat: 0, long: 0 },
    'Asia/Oral': { lat: 0, long: 0 },
    'Asia/Phnom_Penh': { lat: 0, long: 0 },
    'Asia/Pontianak': { lat: 0, long: 0 },
    'Asia/Pyongyang': { lat: 0, long: 0 },
    'Asia/Qatar': { lat: 0, long: 0 },
    'Asia/Qostanay': { lat: 0, long: 0 },
    'Asia/Qyzylorda': { lat: 0, long: 0 },
    'Asia/Riyadh': { lat: 0, long: 0 },
    'Asia/Sakhalin': { lat: 0, long: 0 },
    'Asia/Samarkand': { lat: 0, long: 0 },
    'Asia/Seoul': { lat: 0, long: 0 },
    'Asia/Shanghai': { lat: 0, long: 0 },
    'Asia/Singapore': { lat: 0, long: 0 },
    'Asia/Srednekolymsk': { lat: 0, long: 0 },
    'Asia/Taipei': { lat: 0, long: 0 },
    'Asia/Tashkent': { lat: 0, long: 0 },
    'Asia/Tbilisi': { lat: 0, long: 0 },
    'Asia/Tehran': { lat: 0, long: 0 },
    'Asia/Thimphu': { lat: 0, long: 0 },
    'Asia/Tokyo': { lat: 0, long: 0 },
    'Asia/Tomsk': { lat: 0, long: 0 },
    'Asia/Ulaanbaatar': { lat: 0, long: 0 },
    'Asia/Urumqi': { lat: 0, long: 0 },
    'Asia/Ust-Nera': { lat: 0, long: 0 },
    'Asia/Vientiane': { lat: 0, long: 0 },
    'Asia/Vladivostok': { lat: 0, long: 0 },
    'Asia/Yakutsk': { lat: 0, long: 0 },
    'Asia/Yangon': { lat: 0, long: 0 },
    'Asia/Yekaterinburg': { lat: 0, long: 0 },
    'Asia/Yerevan': { lat: 0, long: 0 },
    'Atlantic/Azores': { lat: 0, long: 0 },
    'Atlantic/Bermuda': { lat: 0, long: 0 },
    'Atlantic/Canary': { lat: 0, long: 0 },
    'Atlantic/Cape_Verde': { lat: 0, long: 0 },
    'Atlantic/Faroe': { lat: 0, long: 0 },
    'Atlantic/Madeira': { lat: 0, long: 0 },
    'Atlantic/Reykjavik': { lat: 0, long: 0 },
    'Atlantic/South_Georgia': { lat: 0, long: 0 },
    'Atlantic/St_Helena': { lat: 0, long: 0 },
    'Atlantic/Stanley': { lat: 0, long: 0 },
    'Australia/Adelaide': { lat: 0, long: 0 },
    'Australia/Brisbane': { lat: 0, long: 0 },
    'Australia/Broken_Hill': { lat: 0, long: 0 },
    'Australia/Darwin': { lat: 0, long: 0 },
    'Australia/Eucla': { lat: 0, long: 0 },
    'Australia/Hobart': { lat: 0, long: 0 },
    'Australia/Lindeman': { lat: 0, long: 0 },
    'Australia/Lord_Howe': { lat: 0, long: 0 },
    'Australia/Melbourne': { lat: 0, long: 0 },
    'Australia/Perth': { lat: 0, long: 0 },
    'Australia/Sydney': { lat: 0, long: 0 },
    'Europe/Amsterdam': { lat: 0, long: 0 },
    'Europe/Andorra': { lat: 0, long: 0 },
    'Europe/Astrakhan': { lat: 0, long: 0 },
    'Europe/Athens': { lat: 0, long: 0 },
    'Europe/Belgrade': { lat: 0, long: 0 },
    'Europe/Berlin': { lat: 0, long: 0 },
    'Europe/Bratislava': { lat: 0, long: 0 },
    'Europe/Brussels': { lat: 0, long: 0 },
    'Europe/Bucharest': { lat: 0, long: 0 },
    'Europe/Budapest': { lat: 0, long: 0 },
    'Europe/Busingen': { lat: 0, long: 0 },
    'Europe/Chisinau': { lat: 0, long: 0 },
    'Europe/Copenhagen': { lat: 0, long: 0 },
    'Europe/Dublin': { lat: 0, long: 0 },
    'Europe/Gibraltar': { lat: 0, long: 0 },
    'Europe/Guernsey': { lat: 0, long: 0 },
    'Europe/Helsinki': { lat: 0, long: 0 },
    'Europe/Isle_of_Man': { lat: 0, long: 0 },
    'Europe/Istanbul': { lat: 0, long: 0 },
    'Europe/Jersey': { lat: 0, long: 0 },
    'Europe/Kaliningrad': { lat: 0, long: 0 },
    'Europe/Kiev': { lat: 0, long: 0 },
    'Europe/Kirov': { lat: 0, long: 0 },
    'Europe/Lisbon': { lat: 0, long: 0 },
    'Europe/Ljubljana': { lat: 0, long: 0 },
    'Europe/London': { lat: 0, long: 0 },
    'Europe/Luxembourg': { lat: 0, long: 0 },
    'Europe/Madrid': { lat: 0, long: 0 },
    'Europe/Malta': { lat: 0, long: 0 },
    'Europe/Mariehamn': { lat: 0, long: 0 },
    'Europe/Minsk': { lat: 0, long: 0 },
    'Europe/Monaco': { lat: 0, long: 0 },
    'Europe/Moscow': { lat: 0, long: 0 },
    'Europe/Oslo': { lat: 0, long: 0 },
    'Europe/Paris': { lat: 0, long: 0 },
    'Europe/Podgorica': { lat: 0, long: 0 },
    'Europe/Prague': { lat: 0, long: 0 },
    'Europe/Riga': { lat: 0, long: 0 },
    'Europe/Rome': { lat: 0, long: 0 },
    'Europe/Samara': { lat: 0, long: 0 },
    'Europe/San_Marino': { lat: 0, long: 0 },
    'Europe/Sarajevo': { lat: 0, long: 0 },
    'Europe/Saratov': { lat: 0, long: 0 },
    'Europe/Simferopol': { lat: 0, long: 0 },
    'Europe/Skopje': { lat: 0, long: 0 },
    'Europe/Sofia': { lat: 0, long: 0 },
    'Europe/Stockholm': { lat: 0, long: 0 },
    'Europe/Tallinn': { lat: 0, long: 0 },
    'Europe/Tirane': { lat: 0, long: 0 },
    'Europe/Ulyanovsk': { lat: 0, long: 0 },
    'Europe/Uzhgorod': { lat: 0, long: 0 },
    'Europe/Vaduz': { lat: 0, long: 0 },
    'Europe/Vatican': { lat: 0, long: 0 },
    'Europe/Vienna': { lat: 0, long: 0 },
    'Europe/Vilnius': { lat: 0, long: 0 },
    'Europe/Volgograd': { lat: 0, long: 0 },
    'Europe/Warsaw': { lat: 0, long: 0 },
    'Europe/Zagreb': { lat: 0, long: 0 },
    'Europe/Zaporozhye': { lat: 0, long: 0 },
    'Europe/Zurich': { lat: 0, long: 0 },
    'Indian/Antananarivo': { lat: 0, long: 0 },
    'Indian/Chagos': { lat: 0, long: 0 },
    'Indian/Christmas': { lat: 0, long: 0 },
    'Indian/Cocos': { lat: 0, long: 0 },
    'Indian/Comoro': { lat: 0, long: 0 },
    'Indian/Kerguelen': { lat: 0, long: 0 },
    'Indian/Mahe': { lat: 0, long: 0 },
    'Indian/Maldives': { lat: 0, long: 0 },
    'Indian/Mauritius': { lat: 0, long: 0 },
    'Indian/Mayotte': { lat: 0, long: 0 },
    'Indian/Reunion': { lat: 0, long: 0 },
    'Pacific/Apia': { lat: 0, long: 0 },
    'Pacific/Auckland': { lat: 0, long: 0 },
    'Pacific/Bougainville': { lat: 0, long: 0 },
    'Pacific/Chatham': { lat: 0, long: 0 },
    'Pacific/Chuuk': { lat: 0, long: 0 },
    'Pacific/Easter': { lat: 0, long: 0 },
    'Pacific/Efate': { lat: 0, long: 0 },
    'Pacific/Fakaofo': { lat: 0, long: 0 },
    'Pacific/Fiji': { lat: 0, long: 0 },
    'Pacific/Funafuti': { lat: 0, long: 0 },
    'Pacific/Galapagos': { lat: 0, long: 0 },
    'Pacific/Gambier': { lat: 0, long: 0 },
    'Pacific/Guadalcanal': { lat: 0, long: 0 },
    'Pacific/Guam': { lat: 0, long: 0 },
    'Pacific/Honolulu': { lat: 0, long: 0 },
    // 'Pacific/Kanton': {lat: 0, long: 0}, // Why is this not valid?,
    'Pacific/Kiritimati': { lat: 0, long: 0 },
    'Pacific/Kosrae': { lat: 0, long: 0 },
    'Pacific/Kwajalein': { lat: 0, long: 0 },
    'Pacific/Majuro': { lat: 0, long: 0 },
    'Pacific/Marquesas': { lat: 0, long: 0 },
    'Pacific/Midway': { lat: 0, long: 0 },
    'Pacific/Nauru': { lat: 0, long: 0 },
    'Pacific/Niue': { lat: 0, long: 0 },
    'Pacific/Norfolk': { lat: 0, long: 0 },
    'Pacific/Noumea': { lat: 0, long: 0 },
    'Pacific/Pago_Pago': { lat: 0, long: 0 },
    'Pacific/Palau': { lat: 0, long: 0 },
    'Pacific/Pitcairn': { lat: 0, long: 0 },
    'Pacific/Pohnpei': { lat: 0, long: 0 },
    'Pacific/Port_Moresby': { lat: 0, long: 0 },
    'Pacific/Rarotonga': { lat: 0, long: 0 },
    'Pacific/Saipan': { lat: 0, long: 0 },
    'Pacific/Tahiti': { lat: 0, long: 0 },
    'Pacific/Tarawa': { lat: 0, long: 0 },
    'Pacific/Tongatapu': { lat: 0, long: 0 },
    'Pacific/Wake': { lat: 0, long: 0 },
    'Pacific/Wallis': { lat: 0, long: 0 },
}