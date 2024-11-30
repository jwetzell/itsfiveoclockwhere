import { DateTime } from 'luxon';

export interface Timezone {
  name: string;
  location?: TimezoneLocation;
  time?: DateTime;
}

export function TimezoneCompare(a: Timezone, b: Timezone) {
  if (a.time != undefined && b.time != undefined) {
    if (a.time.startOf('day') < b.time.startOf('day')) return 1;
    if (a.time.startOf('day') > b.time.startOf('day')) return -1;
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
export function GetClosestTimezoneFrom(timezone: string, timezones: Timezone[]): Timezone | undefined {
  const location1 = timezoneMap[timezone];
  let closestDist = Number.MAX_SAFE_INTEGER;
  let closestTimezone: Timezone | undefined = undefined;

  timezones.forEach((timezone) => {
    const location2 = timezoneMap[timezone.name];

    const deltaLat = (location2.lat - location1.lat) * (Math.PI / 180);
    const deltaLong = (location2.long - location1.long) * (Math.PI / 180);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(location1.lat * (Math.PI / 180)) *
        Math.cos(location2.lat * (Math.PI / 180)) *
        Math.sin(deltaLong / 2) *
        Math.sin(deltaLong / 2);

    const dist = Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    if (dist < closestDist) {
      closestDist = dist;
      closestTimezone = timezone;
    }
  });

  return closestTimezone;
}

export function TimezoneList() {
  return Object.keys(timezoneMap);
}

export interface TimezoneLocation {
  lat: number;
  long: number;
}

//TODO: This still needs to be fully populated
export const timezoneMap: { [key: string]: TimezoneLocation } = {
  'Africa/Abidjan': { lat: 5.359952, long: -4.008256 },
  'Africa/Accra': { lat: 5.603717, long: -0.186964 },
  'Africa/Addis_Ababa': { lat: 9.03314, long: 38.75008 },
  'Africa/Algiers': { lat: 36.753769, long: 3.058756 },
  'Africa/Asmara': { lat: 15.339, long: 38.937111 },
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
  'Africa/El_Aaiun': { lat: 27.15, long: -13.1991 },
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
  'Africa/Malabo': { lat: 3.755, long: 8.7821 },
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
  'America/Adak': { lat: 51.88, long: -176.6581 },
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
  'America/Argentina/Rio_Gallegos': { lat: -51.623, long: -69.2168 },
  'America/Argentina/Salta': { lat: -24.7821, long: -65.4232 },
  'America/Argentina/San_Juan': { lat: -31.5351, long: -68.5386 },
  'America/Argentina/San_Luis': { lat: -33.3017, long: -66.3378 },
  'America/Argentina/Tucuman': { lat: -26.8083, long: -65.2176 },
  'America/Argentina/Ushuaia': { lat: -54.8019, long: -68.303 },
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
  'America/Bogota': { lat: 4.711, long: -74.0721 },
  'America/Boise': { lat: 43.615, long: -116.2023 },
  'America/Cambridge_Bay': { lat: 69.1169, long: -105.0597 },
  'America/Campo_Grande': { lat: -20.4649, long: -54.6218 },
  'America/Cancun': { lat: 21.1619, long: -86.8515 },
  'America/Caracas': { lat: 10.4806, long: -66.9036 },
  'America/Cayenne': { lat: 4.9224, long: -52.3135 },
  'America/Cayman': { lat: 19.3133, long: -81.2546 },
  'America/Chicago': { lat: 41.8781, long: -87.6298 },
  'America/Chihuahua': { lat: 28.633, long: -106.0691 },
  'America/Costa_Rica': { lat: 9.7489, long: -83.7534 },
  'America/Creston': { lat: 41.0586, long: -94.3613 },
  'America/Cuiaba': { lat: -15.5954, long: -56.0926 },
  'America/Curacao': { lat: 12.1696, long: -68.99 },
  'America/Danmarkshavn': { lat: 76.7667, long: -18.6667 },
  'America/Dawson': { lat: 46.8686, long: -99.7515 },
  'America/Dawson_Creek': { lat: 55.7596, long: -120.2377 },
  'America/Denver': { lat: 39.7392, long: -104.9903 },
  'America/Detroit': { lat: 42.3314, long: -83.0458 },
  'America/Dominica': { lat: 15.415, long: -61.371 },
  'America/Edmonton': { lat: 53.5461, long: -113.4938 },
  'America/Eirunepe': { lat: -6.6571, long: -69.8667 },
  'America/El_Salvador': { lat: 13.7942, long: -88.8965 },
  'America/Fort_Nelson': { lat: 58.805, long: -122.6972 },
  'America/Fortaleza': { lat: -3.7327, long: -38.527 },
  'America/Glace_Bay': { lat: 46.1969, long: -59.957 },
  'America/Goose_Bay': { lat: 53.3017, long: -60.3261 },
  'America/Grand_Turk': { lat: 21.4675, long: -71.1389 },
  'America/Grenada': { lat: 12.1165, long: -61.679 },
  'America/Guadeloupe': { lat: 16.265, long: -61.551 },
  'America/Guatemala': { lat: 15.7835, long: -90.2308 },
  'America/Guayaquil': { lat: -2.1894, long: -79.8891 },
  'America/Guyana': { lat: 4.8604, long: -58.9302 },
  'America/Halifax': { lat: 44.6488, long: -63.5752 },
  'America/Havana': { lat: 23.1136, long: -82.3666 },
  'America/Hermosillo': { lat: 29.073, long: -110.9559 },
  'America/Indiana/Indianapolis': { lat: 39.7684, long: -86.1581 },
  'America/Indiana/Knox': { lat: 41.2959, long: -86.625 },
  'America/Indiana/Marengo': { lat: 38.3692, long: -86.3436 },
  'America/Indiana/Petersburg': { lat: 38.492, long: -87.2786 },
  'America/Indiana/Tell_City': { lat: 37.9514, long: -86.7678 },
  'America/Indiana/Vevay': { lat: 38.7478, long: -85.0672 },
  'America/Indiana/Vincennes': { lat: 38.6773, long: -87.5286 },
  'America/Indiana/Winamac': { lat: 41.0514, long: -86.6031 },
  'America/Inuvik': { lat: 68.3607, long: -133.723 },
  'America/Iqaluit': { lat: 63.7467, long: -68.517 },
  'America/Jamaica': { lat: 18.1096, long: -77.2975 },
  'America/Juneau': { lat: 58.3019, long: -134.4197 },
  'America/Kentucky/Louisville': { lat: 38.2527, long: -85.7585 },
  'America/Kentucky/Monticello': { lat: 36.8298, long: -84.8491 },
  'America/Kralendijk': { lat: 12.1443, long: -68.2655 },
  'America/La_Paz': { lat: -16.4897, long: -68.1193 },
  'America/Lima': { lat: -12.0464, long: -77.0428 },
  'America/Los_Angeles': { lat: 34.0522, long: -118.2437 },
  'America/Lower_Princes': { lat: 18.0513, long: -63.0471 },
  'America/Maceio': { lat: -9.666, long: -35.7352 },
  'America/Managua': { lat: 12.115, long: -86.2362 },
  'America/Manaus': { lat: -3.119, long: -60.0217 },
  'America/Marigot': { lat: 18.0675, long: -63.0825 },
  'America/Martinique': { lat: 14.6415, long: -61.0242 },
  'America/Matamoros': { lat: 25.869, long: -97.5027 },
  'America/Mazatlan': { lat: 23.2494, long: -106.4111 },
  'America/Menominee': { lat: 45.1078, long: -87.6143 },
  'America/Merida': { lat: 20.9674, long: -89.5926 },
  'America/Metlakatla': { lat: 55.1292, long: -131.5722 },
  'America/Mexico_City': { lat: 19.4326, long: -99.1332 },
  'America/Miquelon': { lat: 46.0878, long: -64.7782 },
  'America/Moncton': { lat: 46.0878, long: -64.7782 },
  'America/Monterrey': { lat: 46.8852, long: -56.3159 },
  'America/Montevideo': { lat: -34.9011, long: -56.1645 },
  'America/Montserrat': { lat: 16.7425, long: -62.1874 },
  'America/Nassau': { lat: 25.0443, long: -77.3504 },
  'America/New_York': { lat: 40.7128, long: -74.006 },
  'America/Nipigon': { lat: 49.0125, long: -88.2633 },
  'America/Nome': { lat: 64.5011, long: -165.4064 },
  'America/Noronha': { lat: -3.8576, long: -32.4297 },
  'America/North_Dakota/Beulah': { lat: 47.2633, long: -101.7779 },
  'America/North_Dakota/Center': { lat: 47.1164, long: -101.2996 },
  'America/North_Dakota/New_Salem': { lat: 46.845, long: -101.4113 },
  'America/Nuuk': { lat: 64.1814, long: -51.6941 },
  'America/Ojinaga': { lat: 29.5459, long: -104.4083 },
  'America/Panama': { lat: 8.538, long: -80.7821 },
  'America/Pangnirtung': { lat: 66.1466, long: -65.7012 },
  'America/Paramaribo': { lat: 5.852, long: -55.2038 },
  'America/Phoenix': { lat: 33.4484, long: -112.074 },
  'America/Port-au-Prince': { lat: 18.5944, long: -72.3074 },
  'America/Port_of_Spain': { lat: 10.6603, long: -61.5086 },
  'America/Porto_Velho': { lat: -8.7636, long: -63.8972 },
  'America/Puerto_Rico': { lat: 18.2208, long: -66.5901 },
  'America/Punta_Arenas': { lat: -53.1638, long: -70.9171 },
  'America/Rainy_River': { lat: 48.7217, long: -94.5695 },
  'America/Rankin_Inlet': { lat: 62.8084, long: -92.0853 },
  'America/Recife': { lat: 8.0577, long: -34.883 },
  'America/Regina': { lat: 50.4452, long: -104.6189 },
  'America/Resolute': { lat: 74.6973, long: -94.8297 },
  'America/Rio_Branco': { lat: 9.974, long: -67.8098 },
  'America/Santarem': { lat: -2.4407, long: -54.7136 },
  'America/Santiago': { lat: 33.4489, long: -70.6693 },
  'America/Santo_Domingo': { lat: 18.4861, long: -69.9312 },
  'America/Sao_Paulo': { lat: -23.5558, long: -46.6396 },
  'America/Scoresbysund': { lat: 71.0036, long: -22.2862 },
  'America/Sitka': { lat: 57.0531, long: -135.33 },
  'America/St_Barthelemy': { lat: 17.89618, long: -62.84978 },
  'America/St_Johns': { lat: 47.5615, long: -52.7126 },
  'America/St_Kitts': { lat: 17.3578, long: -62.783 },
  'America/St_Lucia': { lat: 13.9094, long: -60.9789 },
  'America/St_Thomas': { lat: 18.3381, long: -64.8941 },
  'America/St_Vincent': { lat: 12.9843, long: -61.2872 },
  'America/Swift_Current': { lat: 50.2851, long: -107.7972 },
  'America/Tegucigalpa': { lat: 14.065, long: -87.1715 },
  'America/Thule': { lat: 77.4228, long: -68.2423 },
  'America/Thunder_Bay': { lat: 48.3809, long: -89.2477 },
  'America/Tijuana': { lat: 32.5149, long: -117.0382 },
  'America/Toronto': { lat: 43.6532, long: -79.3832 },
  'America/Tortola': { lat: 18.4335, long: -64.6333 },
  'America/Vancouver': { lat: 49.2827, long: -123.1207 },
  'America/Whitehorse': { lat: 60.7212, long: -135.0568 },
  'America/Winnipeg': { lat: 49.8951, long: -97.1384 },
  'America/Yakutat': { lat: 59.5469, long: -139.7272 },
  'America/Yellowknife': { lat: 62.454, long: -114.3718 },
  'Antarctica/Casey': { lat: -66.2821, long: 110.5285 },
  'Antarctica/Davis': { lat: -68.5762, long: 77.9696 },
  'Antarctica/DumontDUrville': { lat: -66.663, long: 140.0019 },
  'Antarctica/Macquarie': { lat: -54.6208, long: 158.8556 },
  'Antarctica/Mawson': { lat: -67.6033, long: 62.8742 },
  'Antarctica/McMurdo': { lat: -77.8419, long: 166.6863 },
  'Antarctica/Palmer': { lat: -64.7743, long: -64.0538 },
  'Antarctica/Rothera': { lat: -67.5666644, long: -68.1333328 },
  'Antarctica/Syowa': { lat: -69.0044, long: 39.5816 },
  'Antarctica/Troll': { lat: -72.0166, long: 2.5333 },
  'Antarctica/Vostok': { lat: -78.4645, long: 106.8339 },
  'Arctic/Longyearbyen': { lat: 78.2232, long: 15.6267 },
  'Asia/Aden': { lat: 12.7855, long: 45.0187 },
  'Asia/Almaty': { lat: 43.222, long: 76.8512 },
  'Asia/Amman': { lat: 31.9539, long: 35.9106 },
  'Asia/Anadyr': { lat: 64.7337, long: 177.4968 },
  'Asia/Aqtau': { lat: 43.6588, long: 51.1975 },
  'Asia/Aqtobe': { lat: 50.2839, long: 57.167 },
  'Asia/Ashgabat': { lat: 37.9601, long: 58.3261 },
  'Asia/Atyrau': { lat: 47.0945, long: 51.9238 },
  'Asia/Baghdad': { lat: 33.3152, long: 44.3661 },
  'Asia/Bahrain': { lat: 26.0667, long: 50.5577 },
  'Asia/Baku': { lat: 40.4093, long: 49.8671 },
  'Asia/Bangkok': { lat: 13.7563, long: 100.5018 },
  'Asia/Barnaul': { lat: 53.3497, long: 83.7836 },
  'Asia/Beirut': { lat: 33.8938, long: 35.5018 },
  'Asia/Bishkek': { lat: 42.8746, long: 74.5698 },
  'Asia/Brunei': { lat: 4.5353, long: 114.7277 },
  'Asia/Chita': { lat: 52.0515, long: 113.4712 },
  'Asia/Choibalsan': { lat: 48.0951, long: 114.5356 },
  'Asia/Colombo': { lat: 6.9271, long: 79.8612 },
  'Asia/Damascus': { lat: 33.5138, long: 36.2765 },
  'Asia/Dhaka': { lat: 23.8103, long: 90.4125 },
  'Asia/Dili': { lat: -8.5569, long: 125.5603 },
  'Asia/Dubai': { lat: 25.2048, long: 55.2708 },
  'Asia/Dushanbe': { lat: 38.5598, long: 68.787 },
  'Asia/Famagusta': { lat: 35.1149, long: 33.9192 },
  'Asia/Gaza': { lat: 31.3547, long: 34.3088 },
  'Asia/Hebron': { lat: 31.5326, long: 35.0998 },
  'Asia/Ho_Chi_Minh': { lat: 10.8231, long: 106.6297 },
  'Asia/Hong_Kong': { lat: 22.3193, long: 114.1694 },
  'Asia/Hovd': { lat: 47.9795, long: 91.6348 },
  'Asia/Irkutsk': { lat: 52.2855, long: 104.289 },
  'Asia/Jakarta': { lat: -6.2088, long: 106.8456 },
  'Asia/Jayapura': { lat: -2.5916, long: 140.669 },
  'Asia/Jerusalem': { lat: 31.7683, long: 35.2137 },
  'Asia/Kabul': { lat: 34.5553, long: 69.2075 },
  'Asia/Kamchatka': { lat: 56.1327, long: 159.5314 },
  'Asia/Karachi': { lat: 24.8607, long: 67.0011 },
  'Asia/Kathmandu': { lat: 27.7172, long: 85.324 },
  'Asia/Khandyga': { lat: 62.6564, long: 135.554 },
  'Asia/Kolkata': { lat: 22.5726, long: 88.3639 },
  'Asia/Krasnoyarsk': { lat: 56.0153, long: 92.8932 },
  'Asia/Kuala_Lumpur': { lat: 3.139, long: 101.6869 },
  'Asia/Kuching': { lat: 1.5535, long: 110.3593 },
  'Asia/Kuwait': { lat: 29.3117, long: 47.4818 },
  'Asia/Macau': { lat: 22.1987, long: 113.5439 },
  'Asia/Magadan': { lat: 59.5594, long: 150.8128 },
  'Asia/Makassar': { lat: -5.1477, long: 119.4327 },
  'Asia/Manila': { lat: 14.5995, long: 120.9842 },
  'Asia/Muscat': { lat: 23.588, long: 58.3829 },
  'Asia/Nicosia': { lat: 35.1856, long: 33.3823 },
  'Asia/Novokuznetsk': { lat: 53.7596, long: 87.1216 },
  'Asia/Novosibirsk': { lat: 54.9833, long: 82.8964 },
  'Asia/Omsk': { lat: 54.9914, long: 73.3645 },
  'Asia/Oral': { lat: 51.2278, long: 51.3865 },
  'Asia/Phnom_Penh': { lat: 11.5564, long: 104.9282 },
  'Asia/Pontianak': { lat: -0.0263, long: 109.3425 },
  'Asia/Pyongyang': { lat: 39.0738, long: 125.8198 },
  'Asia/Qatar': { lat: 25.3548, long: 51.1839 },
  'Asia/Qostanay': { lat: 53.2198, long: 63.6354 },
  'Asia/Qyzylorda': { lat: 44.8488, long: 65.4823 },
  'Asia/Riyadh': { lat: 24.7136, long: 46.6753 },
  'Asia/Sakhalin': { lat: 50.691, long: 142.9506 },
  'Asia/Samarkand': { lat: 39.627, long: 66.975 },
  'Asia/Seoul': { lat: 37.5665, long: 126.978 },
  'Asia/Shanghai': { lat: 31.2304, long: 121.4737 },
  'Asia/Singapore': { lat: 1.3521, long: 103.8198 },
  'Asia/Srednekolymsk': { lat: 67.4373, long: 153.7287 },
  'Asia/Taipei': { lat: 25.033, long: 121.5654 },
  'Asia/Tashkent': { lat: 41.2995, long: 69.2401 },
  'Asia/Tbilisi': { lat: 41.7151, long: 44.8271 },
  'Asia/Tehran': { lat: 35.6892, long: 35.6892 },
  'Asia/Thimphu': { lat: 27.4712, long: 89.6339 },
  'Asia/Tokyo': { lat: 35.6762, long: 139.6503 },
  'Asia/Tomsk': { lat: 56.4884, long: 84.948 },
  'Asia/Ulaanbaatar': { lat: 47.8864, long: 106.9057 },
  'Asia/Urumqi': { lat: 43.8266, long: 87.6169 },
  'Asia/Ust-Nera': { lat: 64.5672, long: 143.2265 },
  'Asia/Vientiane': { lat: 17.9757, long: 102.6331 },
  'Asia/Vladivostok': { lat: 43.1332, long: 131.9113 },
  'Asia/Yakutsk': { lat: 62.0397, long: 129.7422 },
  'Asia/Yangon': { lat: 16.8409, long: 96.1735 },
  'Asia/Yekaterinburg': { lat: 56.8431, long: 60.6454 },
  'Asia/Yerevan': { lat: 40.1872, long: 44.5152 },
  'Atlantic/Azores': { lat: 38.7216, long: -27.2206 },
  'Atlantic/Bermuda': { lat: 32.2937, long: -64.7755 },
  'Atlantic/Canary': { lat: 28.2916, long: -16.6291 },
  'Atlantic/Cape_Verde': { lat: 16.4969, long: -23.1918 },
  'Atlantic/Faroe': { lat: 61.8925022, long: -6.9729703 },
  'Atlantic/Madeira': { lat: 32.7607, long: -16.9595 },
  'Atlantic/Reykjavik': { lat: 65.4215, long: -19.0346 },
  'Atlantic/South_Georgia': { lat: -55.9654, long: -29.9202 },
  'Atlantic/St_Helena': { lat: -23.8689, long: -9.1899 },
  'Atlantic/Stanley': { lat: -51.6882, long: 59.8139 },
  'Australia/Adelaide': { lat: -34.9285, long: 138.6007 },
  'Australia/Brisbane': { lat: -27.4705, long: 153.026 },
  'Australia/Broken_Hill': { lat: -31.9596, long: 141.4608 },
  'Australia/Darwin': { lat: -12.462827, long: 130.841782 },
  'Australia/Eucla': { lat: -35.306179, long: 149.126419 },
  'Australia/Hobart': { lat: -42.880554, long: 147.324997 },
  'Australia/Lindeman': { lat: -35.306179, long: 149.126419 },
  'Australia/Lord_Howe': { lat: -31.555326, long: 159.082121 },
  'Australia/Melbourne': { lat: -37.8136, long: 144.9631 },
  'Australia/Perth': { lat: -31.9523, long: 115.8613 },
  'Australia/Sydney': { lat: -33.8688, long: 151.2093 },
  'Europe/Amsterdam': { lat: 52.3676, long: 4.9041 },
  'Europe/Andorra': { lat: 42.5063, long: 1.5218 },
  'Europe/Astrakhan': { lat: 46.3586, long: 48.0569 },
  'Europe/Athens': { lat: 37.9838, long: 23.7275 },
  'Europe/Belgrade': { lat: 44.8125, long: 20.4612 },
  'Europe/Berlin': { lat: 52.52, long: 13.405 },
  'Europe/Bratislava': { lat: 48.1486, long: 17.1077 },
  'Europe/Brussels': { lat: 50.8476, long: 4.3572 },
  'Europe/Bucharest': { lat: 44.4268, long: 26.1025 },
  'Europe/Budapest': { lat: 47.4979, long: 19.0402 },
  'Europe/Busingen': { lat: 47.697, long: 8.6904 },
  'Europe/Chisinau': { lat: 47.0105, long: 28.8638 },
  'Europe/Copenhagen': { lat: 55.6761, long: 12.5683 },
  'Europe/Dublin': { lat: 53.3498, long: -6.2603 },
  'Europe/Gibraltar': { lat: 36.1408, long: -5.3536 },
  'Europe/Guernsey': { lat: 49.4482, long: -2.5895 },
  'Europe/Helsinki': { lat: 60.1699, long: 24.9384 },
  'Europe/Isle_of_Man': { lat: 54.2361, long: -4.5481 },
  'Europe/Istanbul': { lat: 41.0082, long: 28.9784 },
  'Europe/Jersey': { lat: 49.2138, long: -2.1358 },
  'Europe/Kaliningrad': { lat: 54.7104, long: 20.4522 },
  'Europe/Kiev': { lat: 50.4501, long: 30.5234 },
  'Europe/Kirov': { lat: 58.603, long: 49.6679 },
  'Europe/Lisbon': { lat: 38.7223, long: -9.1393 },
  'Europe/Ljubljana': { lat: 46.0569, long: 14.5058 },
  'Europe/London': { lat: 51.5072, long: -0.1276 },
  'Europe/Luxembourg': { lat: 49.8153, long: 6.1296 },
  'Europe/Madrid': { lat: 40.4168, long: -3.7038 },
  'Europe/Malta': { lat: 35.9375, long: 14.3754 },
  'Europe/Mariehamn': { lat: 60.0971, long: 19.9348 },
  'Europe/Minsk': { lat: 53.9006, long: 27.559 },
  'Europe/Monaco': { lat: 3.7384, long: 7.4246 },
  'Europe/Moscow': { lat: 55.7558, long: 37.6173 },
  'Europe/Oslo': { lat: 59.9139, long: 10.7522 },
  'Europe/Paris': { lat: 48.8566, long: 2.3522 },
  'Europe/Podgorica': { lat: 42.4304, long: 19.2594 },
  'Europe/Prague': { lat: 50.0755, long: 14.4378 },
  'Europe/Riga': { lat: 56.9496, long: 24.1052 },
  'Europe/Rome': { lat: 41.9028, long: 12.4964 },
  'Europe/Samara': { lat: 53.2038, long: 50.1606 },
  'Europe/San_Marino': { lat: 43.9424, long: 12.4578 },
  'Europe/Sarajevo': { lat: 43.8563, long: 18.4131 },
  'Europe/Saratov': { lat: 51.5462, long: 46.0154 },
  'Europe/Simferopol': { lat: 44.9521, long: 34.1024 },
  'Europe/Skopje': { lat: 41.9981, long: 21.4254 },
  'Europe/Sofia': { lat: 42.6977, long: 23.3219 },
  'Europe/Stockholm': { lat: 59.3293, long: 18.0686 },
  'Europe/Tallinn': { lat: 59.437, long: 24.7536 },
  'Europe/Tirane': { lat: 41.3275, long: 19.8187 },
  'Europe/Ulyanovsk': { lat: 54.3187, long: 48.3978 },
  'Europe/Uzhgorod': { lat: 48.6208, long: 22.2879 },
  'Europe/Vaduz': { lat: 47.141, long: 9.5209 },
  'Europe/Vatican': { lat: 41.9029, long: 12.4534 },
  'Europe/Vienna': { lat: 48.2082, long: 16.3738 },
  'Europe/Vilnius': { lat: 54.6872, long: 25.2797 },
  'Europe/Volgograd': { lat: 48.708, long: 44.5133 },
  'Europe/Warsaw': { lat: 52.2297, long: 21.0122 },
  'Europe/Zagreb': { lat: 45.815, long: 15.9819 },
  'Europe/Zaporozhye': { lat: 47.8388, long: 35.1396 },
  'Europe/Zurich': { lat: 47.3769, long: 8.5417 },
  'Indian/Antananarivo': { lat: -18.8792, long: 47.5079 },
  'Indian/Chagos': { lat: -4.416665, long: 72.5999976 },
  'Indian/Christmas': { lat: -10.4475, long: 105.6904 },
  'Indian/Cocos': { lat: -12.1642, long: 96.871 },
  'Indian/Comoro': { lat: -11.6455, long: 43.3333 },
  'Indian/Kerguelen': { lat: -49.3948, long: 69.3545 },
  'Indian/Mahe': { lat: -4.6827, long: 55.4804 },
  'Indian/Maldives': { lat: 3.2028, long: 73.2207 },
  'Indian/Mauritius': { lat: -20.3484, long: 57.5522 },
  'Indian/Mayotte': { lat: -12.8275, long: 45.1662 },
  'Indian/Reunion': { lat: -21.1151, long: 55.5364 },
  'Pacific/Apia': { lat: -13.8507, long: -171.7514 },
  'Pacific/Auckland': { lat: -36.8509, long: 174.7645 },
  'Pacific/Bougainville': { lat: -6.3754, long: 155.3807 },
  'Pacific/Chatham': { lat: -44.0058, long: -176.5401 },
  'Pacific/Chuuk': { lat: 7.417, long: 151.783 },
  'Pacific/Easter': { lat: -27.1127, long: -109.3497 },
  'Pacific/Efate': { lat: -17.6577, long: 168.4297 },
  'Pacific/Fakaofo': { lat: -9.3803, long: -171.2188 },
  'Pacific/Fiji': { lat: -17.7134, long: 178.065 },
  'Pacific/Funafuti': { lat: -8.5211, long: 179.1962 },
  'Pacific/Galapagos': { lat: -0.7772, long: -91.1425 },
  'Pacific/Gambier': { lat: 40.3756, long: -82.3971 },
  'Pacific/Guadalcanal': { lat: -9.5773, long: 160.1456 },
  'Pacific/Guam': { lat: 13.4443, long: 144.7937 },
  'Pacific/Honolulu': { lat: 21.3069, long: -157.8583 },
  // 'Pacific/Kanton': { lat: -2.8040, long: -171.6432 }, // Why is this not valid?,
  'Pacific/Kiritimati': { lat: 1.8721, long: -157.4278 },
  'Pacific/Kosrae': { lat: 5.2992, long: 162.9697 },
  'Pacific/Kwajalein': { lat: 8.7167, long: 167.7333 },
  'Pacific/Majuro': { lat: 7.0667, long: 171.2667 },
  'Pacific/Marquesas': { lat: -9.7812, long: -139.0817 },
  'Pacific/Midway': { lat: 28.2072, long: -177.3735 },
  'Pacific/Nauru': { lat: -0.5228, long: 166.9315 },
  'Pacific/Niue': { lat: -19.0544, long: -169.8672 },
  'Pacific/Norfolk': { lat: -29.0408, long: 167.9547 },
  'Pacific/Noumea': { lat: -22.2735, long: 166.4481 },
  'Pacific/Pago_Pago': { lat: -14.2756, long: -170.702 },
  'Pacific/Palau': { lat: 7.515, long: 134.5825 },
  'Pacific/Pitcairn': { lat: -24.3768, long: -128.3242 },
  'Pacific/Pohnpei': { lat: 6.8541, long: 158.2624 },
  'Pacific/Port_Moresby': { lat: -9.4438, long: 147.1803 },
  'Pacific/Rarotonga': { lat: -21.2292, long: -159.7763 },
  'Pacific/Saipan': { lat: 15.185, long: 145.7467 },
  'Pacific/Tahiti': { lat: -17.6509, long: -149.426 },
  'Pacific/Tarawa': { lat: 1.4518, long: 172.9717 },
  'Pacific/Tongatapu': { lat: -21.1466, long: -175.2515 },
  'Pacific/Wake': { lat: 19.2796, long: 166.6499 },
  'Pacific/Wallis': { lat: -14.2938, long: -178.1165 },

  // update 20221201
  'Africa/Asmera': { lat: 15.3229, long: 38.9251 },
  'Africa/Timbuktu': { lat: 16.7666, long: -3.0026 },
  'America/Argentina/ComodRivadavia': { lat: -45.8656, long: -67.4822 },
  'America/Atka': { lat: 52.21, long: -174.203 },
  'America/Buenos_Aires': { lat: -34.6037, long: -58.3816 },
  'America/Catamarca': { lat: -28.4696, long: -65.7795 },
  'America/Coral_Harbour': { lat: 64.1388, long: -83.1699 },
  'America/Cordoba': { lat: -31.4201, long: -64.1888 },
  'America/Ensenada': { lat: 31.8667, long: -116.5964 },
  'America/Fort_Wayne': { lat: 41.0793, long: -85.1394 },
  'America/Godthab': { lat: 64.1743, long: -51.7373 },
  'America/Indianapolis': { lat: 39.7684, long: -86.1581 },
  'America/Jujuy': { lat: -24.1858, long: -65.2995 },
  'America/Knox_IN': { lat: 41.2959, long: -86.625 },
  'America/Louisville': { lat: 38.2527, long: -85.7585 },
  'America/Mendoza': { lat: -32.8895, long: -68.8458 },
  'America/Montreal': { lat: 45.5019, long: -73.5674 },
  'America/Porto_Acre': { lat: 29.9051, long: -94.0122 },
  'America/Rosario': { lat: -32.9587, long: -60.693 },
  'America/Santa_Isabel': { lat: 17.9661, long: -66.4049 },
  'America/Shiprock': { lat: 36.7856, long: -108.687 },
  'America/Virgin': { lat: 37.2083, long: -113.1883 },
  'Antarctica/South_Pole': { lat: -90.0, long: 45.0 },
  'Asia/Ashkhabad': { lat: 37.9601, long: 58.3261 },
  'Asia/Calcutta': { lat: 22.5726, long: 88.3639 },
  'Asia/Chongqing': { lat: 29.5657, long: 106.5512 },
  'Asia/Chungking': { lat: 29.5657, long: 106.5512 },
  'Asia/Dacca': { lat: 23.8103, long: 90.4125 },
  'Asia/Harbin': { lat: 45.7567, long: 126.6424 },
  'Asia/Istanbul': { lat: 41.0082, long: 28.9784 },
  'Asia/Kashgar': { lat: 39.4677, long: 75.9938 },
  'Asia/Katmandu': { lat: 27.7172, long: 85.324 },
  'Asia/Macao': { lat: 22.1987, long: 113.5439 },

  'Asia/Rangoon': { lat: 16.8409, long: 96.1735 },
  'Asia/Saigon': { lat: 10.8231, long: 106.6297 },
  'Asia/Tel_Aviv': { lat: 32.0853, long: 34.7818 },
  'Asia/Thimbu': { lat: 27.4716, long: 89.6386 },
  'Asia/Ujung_Pandang': { lat: -5.1477, long: 119.4327 },
  'Asia/Ulan_Bator': { lat: 47.8864, long: 106.9057 },
  'Atlantic/Faeroe': { lat: 61.8926, long: -6.9118 },
  'Atlantic/Jan_Mayen': { lat: 71.0318, long: -8.292 },
  'Australia/Canberra': { lat: -35.2802, long: 149.131 },
  'Australia/Currie': { lat: -39.9301, long: 143.8538 },
  'Australia/Queensland': { lat: -22.5752, long: 144.0848 },
  'Australia/Tasmania': { lat: -42.0409, long: 146.8087 },
  'Australia/Victoria': { lat: -36.9848, long: 143.3906 },
  'Australia/Yancowinna': { lat: -32.008999964, long: 141.138166114 },
  'Brazil/Acre': { lat: -9.0238, long: -70.812 },
  'Brazil/DeNoronha': { lat: -3.853808, long: -32.423786 },
  'Canada/Newfoundland': { lat: 53.1355, long: -57.6604 },
  'Canada/Saskatchewan': { lat: 52.9399, long: -106.4509 },
  'Canada/Yukon': { lat: 64.2823, long: -135.0 },
  'Chile/EasterIsland': { lat: -27.1127, long: -109.3497 },
  Cuba: { lat: 21.5218, long: -77.7812 },
  Egypt: { lat: 26.8206, long: 30.8025 },
  Eire: { lat: 53.1424, long: -7.6921 },
  'Europe/Belfast': { lat: 54.5973, long: -5.9301 },
  'Europe/Kyiv': { lat: 50.4501, long: 30.5234 },
  'Europe/Nicosia': { lat: 35.1856, long: 33.3823 },
  'Europe/Tiraspol': { lat: 46.85, long: 29.6333 },
  Greenwich: { lat: 51.4934, long: 0.0098 },
  Hongkong: { lat: 22.3193, long: 114.1694 },
  Iceland: { lat: 64.9631, long: -19.0208 },
  Iran: { lat: 32.4279, long: 53.688 },
  Israel: { lat: 31.0461, long: 34.8516 },
  Jamaica: { lat: 18.1096, long: -77.2975 },
  Japan: { lat: 36.2048, long: 138.2529 },
  Kwajalein: { lat: 8.7167, long: 167.7333 },
  Libya: { lat: 26.3351, long: 17.2283 },
  'Mexico/BajaNorte': { lat: 30.8406, long: -115.2838 },
  'Mexico/BajaSur': { lat: 26.0444, long: -111.6661 },
  Navajo: { lat: 36.0672, long: -109.188 },
  'Pacific/Enderbury': { lat: -3.1272, long: -171.0837 },
  'Pacific/Johnston': { lat: 41.671, long: -93.713 },
  'Pacific/Kanton': { lat: -2.804, long: -171.6432 },
  'Pacific/Ponape': { lat: 6.8541, long: 158.2624 },
  'Pacific/Samoa': { lat: -14.271, long: -170.1322 },
  'Pacific/Truk': { lat: 7.4469, long: 151.7473 },
  'Pacific/Yap': { lat: 9.5557, long: 138.1399 },
  Poland: { lat: 51.9194, long: 19.1451 },
  Portugal: { lat: 39.3999, long: -8.2245 },
  Singapore: { lat: 1.3521, long: 103.8198 },
  Turkey: { lat: 38.9637, long: 35.2433 },
  'US/Alaska': { lat: 64.2008, long: -149.4937 },
  'US/Aleutian': { lat: 52.096813, long: -173.500556 },
  'US/Arizona': { lat: 34.0489, long: -111.0937 },
  'US/Hawaii': { lat: 19.8968, long: -155.5828 },
  'US/Indiana-Starke': { lat: 41.2716, long: -86.6208 },
  'US/Michigan': { lat: 44.3148, long: -85.6024 },
  'US/Samoa': { lat: -14.271, long: -170.1322 },
};
