'use strict';

module.exports = function(app) {
  app.controller('DadaControl', [
    '$scope', 'leafletData', '$http', '$filter', '$translate', 
    function($scope, leafletData, $http, $filter, $translate) {

      $scope.selectedLanguage = $translate.use();
      $scope.$watch('selectedLanguage', function(language) {
        $translate.use(language);
      });

    }
  ]);
};
