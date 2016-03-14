'use strict'

// var $ = require('nd-jquery')
var chai = require('chai')
var sinonChai = require('sinon-chai')
var Selector = require('../index')

var expect = chai.expect
// var sinon = window.sinon

chai.use(sinonChai)

/*globals describe,it*/

describe('Selector', function() {

  it('new Selector', function() {
    expect(Selector).to.be.a('function')
    expect(new Selector).to.be.a('object')
  })

})
