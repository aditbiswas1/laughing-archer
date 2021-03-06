'use strict';

describe('Controller: GroupviewCtrl', function () {

  // load the controller's module
  beforeEach(module('zenTasksApp'));

  var GroupviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupviewCtrl = $controller('GroupviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
