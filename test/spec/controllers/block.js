'use strict';

describe('Controller: BlockCtrl', function () {

  // load the controller's module
  beforeEach(module('controllerQuizApp'));

  var BlockCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlockCtrl = $controller('BlockCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlockCtrl.awesomeThings.length).toBe(3);
  });
});
