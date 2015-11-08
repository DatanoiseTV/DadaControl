'use strict';

var dadacontrol = angular.module('DadaControl', [
  'ui.bootstrap', 'ngAnimate', 'leaflet-directive', 'pascalprecht.translate'
]);

require('./config')(dadacontrol);
require('./controllers')(dadacontrol);
require('./directives')(dadacontrol);
require('./filters')(dadacontrol);
