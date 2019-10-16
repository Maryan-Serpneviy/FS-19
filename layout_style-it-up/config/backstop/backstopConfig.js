'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl: basicScenario.referenceUrl + '/style-it-up/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Entire document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'Block',
      selectors: ['#qa-block'],
    },
    {
      ...basic,
      label: 'Hovered block',
      hoverSelectors: ['#qa-block'],
      selectors: ['#qa-block'],
    },
  ],
};

module.exports = config;
