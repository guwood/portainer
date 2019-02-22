// TODO: legacy extension management
angular.module('extension.storidge', [])
.config(['$stateRegistryProvider', function ($stateRegistryProvider) {
  'use strict';

  var storidge = {
    name: 'storidge',
    parent: 'root',
    abstract: true,
    url: '/storidge'
  };

  var profiles = {
    name: 'storidge.profiles',
    url: '/profiles',
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/profiles/profiles.html',
        controller: 'StoridgeProfilesController'
      }
    }
  };

  var profile = {
    name: 'storidge.profiles.profile',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/profiles/edit/profile.html',
        controller: 'StoridgeProfileController'
      }
    }
  };

  var drives = {
    name: 'storidge.drives',
    url: '/drives',
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/drives/drives.html',
        controller: 'StoridgeDrivesController'
      }
    }
  };

  var drive = {
    name: 'storidge.drives.drive',
    url: '/:id',
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/drives/inspect/drive.html',
        controller: 'StoridgeDriveController'
      }
    }
  };

  var profileCreation = {
    name: 'storidge.profiles.new',
    url: '/new',
    params: {
      profileName: ''
    },
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/profiles/create/createprofile.html',
        controller: 'StoridgeCreateProfileController'
      }
    }
  };

  var cluster = {
    name: 'storidge.cluster',
    url: '/cluster',
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/cluster/cluster.html',
        controller: 'StoridgeClusterController'
      }
    }
  };

  var node = {
    name: 'storidge.cluster.node',
    url: '/:name',
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/nodes/inspect/node.html',
        controller: 'StoridgeNodeController'
      }
    }
  };

  var monitor = {
    name: 'storidge.monitor',
    url: '/events',
    views: {
      'content@': {
        templateUrl: 'app/extensions/storidge/views/monitor/monitor.html',
        controller: 'StoridgeMonitorController'
      }
    }
  };

  $stateRegistryProvider.register(storidge);
  $stateRegistryProvider.register(drives);
  $stateRegistryProvider.register(drive);
  $stateRegistryProvider.register(profiles);
  $stateRegistryProvider.register(profile);
  $stateRegistryProvider.register(profileCreation);
  $stateRegistryProvider.register(cluster);
  $stateRegistryProvider.register(node);
  $stateRegistryProvider.register(monitor);
}]);
