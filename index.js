/**
 * @module Selector
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict'

var Widget = require('nd-widget')
var Template = require('nd-template')

var Selector = module.exports = Widget.extend({

  Implements: [Template],

  attrs: {
    classPrefix: 'ui-selector',
    template: require('./src/selector.handlebars'),
    filter: function(option) {
      return option
    }
  },

  events: {
    'click div': function(e) {
      this.trigger('select',
        this.get('filter')(this.get('options')[e.target.getAttribute('data-index')]),
        e.target, e.ctrlKey || e.metaKey)
    }
  },

  initAttrs: function(config) {
    Selector.superclass.initAttrs.call(this, config)

    this.set('model', {
      options: this.get('options')
    })
  }

})
