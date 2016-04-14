// Copyright 2016, EMC, Inc.
/* jshint node:true */

'use strict';

describe(require('path').basename(__filename), function () {
    var base = require('./base-task-data-spec');

    base.before(function (context) {
        context.taskdefinition = helper.require('/lib/task-data/base-tasks/uefi-task.js');
    });

    describe('task-data', function () {
        base.examples();
    });

});