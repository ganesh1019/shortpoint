'use strict';
const Cucumber = require('cucumber');
const fs = require('fs');
const {defineSupportCode} = require('cucumber');
const assert = require('chai').assert;

defineSupportCode(function ({Before, After,setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
});
