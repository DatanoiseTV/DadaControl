'use strict';

module.exports = function(app) {
  app.controller('DadaControl', [
    '$scope', 'leafletData', '$http', '$filter', 'downloadFile', '$translate',
    'jsonrpc',
    function($scope, leafletData, $http, $filter, downloadFile, $translate,
             jsonrpc) {

      $scope.selectedLanguage = $translate.use();
      $scope.$watch('selectedLanguage', function(language) {
        $translate.use(language);
      });

    }
  ]);
};
