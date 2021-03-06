/*!
 * Sitemap
 * Copyright(c) 2011 Eugene Kalinin
 * MIT Licensed
 */
'use strict';

var padStart = require('lodash/padStart');

exports.getTimestampFromDate = function (dt, bRealtime) {
  var timestamp = [dt.getUTCFullYear(), padStart(dt.getUTCMonth() + 1, 2, '0'),
    padStart(dt.getUTCDate(), 2, '0')].join('-');

  // Indicate that lastmod should include minutes and seconds (and timezone)
  if (bRealtime && bRealtime === true) {
    timestamp += 'T';
    timestamp += [padStart(dt.getUTCHours(), 2, '0'),
      padStart(dt.getUTCMinutes(), 2, '0'),
      padStart(dt.getUTCSeconds(), 2, '0')
    ].join(':');
    timestamp += 'Z';
  }

  return timestamp;
};
