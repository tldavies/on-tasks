// Copyright 2015, EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Catalog Drive IDs',
    injectableName: 'Task.Catalog.Drive.Id',
    implementsTask: 'Task.Base.Linux.Catalog',
    schemaRef: 'linux-catalog.json',
    options: {
        commands: [
            {
                command: 'sudo node get_driveid.js',
                downloadUrl: '{{ api.templates }}/get_driveid.js?nodeId={{ task.nodeId }}'
            }
        ]
    },
    properties: {
        catalog: {
            type: 'driveId'
        }
    }
};
