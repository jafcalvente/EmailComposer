angular.module('emailComposerApp', [
    'ng-file-input'
  ])
  .controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {

    var vm = this;

    vm.images = [];
    vm.email = {};
    vm.deleteImage = deleteImage;
    vm.openInputFile = openInputFile;

    // Watcher for changes on uploaded files
    $scope.$watch('vm.email.attached', function(files) {
      if (files) {
        files.forEach(function(file) {
          var reader = new FileReader();

          // Setting image information and refreshing the view
          reader.onload = function(e) {
            $scope.$apply(function() {
              vm.images.push({
                thumbnail: e.target.result,
                title: file.name
              });
            });
          };

          reader.readAsDataURL(file);
        });
      }
      delete vm.email.attached;
    });

    /**
     * Remove image from gallery.
     */
    function deleteImage(index) {
      vm.images.splice(index, 1);
    }

    /**
     * Open file selector.
     */
    function openInputFile($event) {
      // Cleaning input in order to can reuse it
      angular.element('#inputFile').val('');

      // Opening input file component
      angular.element('#inputFile').trigger('click');
    };

  }]);
