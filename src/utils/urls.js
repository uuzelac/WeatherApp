/**
 * URLS generators.
 *
 * @module utils/urls
 */

/**
 * Base URL
 *
 * @type {string}
 */

export const urlBase = 'https://fishingbooker.com/jobs/weather_data';

/**
 * Generate get weather data URL.
 *
 * @function
 * @return {string}
 */
export const removeUserPermissionUrl = (startDate, endDate) => `${urlBase}?start_date=${startDate}&end_date=${endDate}`;
