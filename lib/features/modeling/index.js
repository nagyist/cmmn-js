module.exports = {
  __init__: [ 'modeling', 'cmmnUpdater' ],
  __depends__: [
    require('../rules'),
    require('diagram-js/lib/command'),
    require('diagram-js/lib/features/selection')
  ],
  cmmnFactory: [ 'type', require('./CmmnFactory') ],
  cmmnUpdater: [ 'type', require('./CmmnUpdater') ],
  elementFactory: [ 'type', require('./ElementFactory') ],
  modeling: [ 'type', require('./Modeling') ],
  layouter: [ 'type', require('./CmmnLayouter') ]
};