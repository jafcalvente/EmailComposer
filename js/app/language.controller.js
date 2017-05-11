(function() {
    'use strict';

    angular.module('emailComposerApp')

    	.controller('languageController', LanguageController);

    LanguageController.$inject = [
    	'$translate'
    ];

    function LanguageController(
    	$translate
    ){

        var vm = this;

        vm.changeLanguage = changeLanguage;

        /**
         * Change the language.
         */
        function changeLanguage(key) {
          $translate.use(key);
        }

    }

})();
