/*
    These are date generation algorithms to sell the prototype and make
    it look like things are live and active. It works since everything is
    fake in here.
*/

/**
 * Generate a Date that is a given number of hours from now.
 * Pass a negative integer for past, or positive integer for future.
 * @returns String date as if it came back from an API
 */
export const generateDate_hourChange = function (h) {
  return generateDate(h * 60 * 60 * 1000);
};

/**
 * Generate a Date that is a given number of days from now.
 * Pass a negative integer for past, or positive integer for future.
 * @returns String date as if it came back from an API
 */
export const generateDate_dateChange = function (d) {
  return generateDate(d * 24 * 60 * 60 * 1000);
};

function generateDate(ms) {
  let d = new Date();
  d.setMilliseconds(d.getMilliseconds() + ms);
  return d.toISOString();
}
