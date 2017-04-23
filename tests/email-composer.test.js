'use strict';

describe('App emailComposerApp', function() {

  // Include Modules
  beforeEach(module('emailComposerApp'));
  beforeEach(module('ng-file-input'));
  beforeEach(module('pascalprecht.translate'));

  describe('Controller MainController', function() {

    // Global variables
    var ctrl,
        $scope,
        $translate;

    // Inject depencencies
    beforeEach(inject(function($rootScope, $controller, $templateCache, $compile) {

      $scope = $rootScope.$new();

      $translate = { use: function() {} };

      ctrl = $controller('MainController', {
        '$scope': $scope,
        '$translate': $translate
      });
    }));

    it('Should have email object.', function () {
        expect(ctrl.email).toBeDefined();
    });

    it('Should not have attached files.', function () {
        expect(ctrl.email.attached).toBeUndefined();
    });

    it('Should not have images.', function () {
        expect(ctrl.images.length).toBe(0);
    });

  });

});
