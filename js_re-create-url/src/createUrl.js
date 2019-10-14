'use strict';

/**
 * Implement createUrl function:
 *
 * Function takes string (template) and object (params). It returns URL based on
 * template and replaces all `{name}` with params.name. If params.name is not
 * given put 'undefined' instead.
 *
 * createUrl('/api/{id}', {id: 0}) === '/api/0'
 * createUrl('/api/{id}', {name: 'Petya'}) === '/api/undefined'
 * createUrl('/api/{list}/{id}', {list: 'items', id: 0}) === '/api/items/0'
 *
 * @param {string} template
 * @param {object} params
 *
 * @return {string} - created URL
 */
function createUrl(template, params) {
  const re = /{\w+}/;
  let url = template;
  for (const p in params) {
    if (url.includes(`{${p}}`)) {
      url = url.replace(`{${p}}`, params[p]);
    }
  }
  url = url.replace(new RegExp(re, 'g'), undefined);
  return url;
}

module.exports = createUrl;
