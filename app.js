var angularApp = angular.module('weatherApp', ['ngResource']);
angularApp.controller("HomeController",function($resource){
	var vm=this;

	vm.getCityTemperature = function(){
		console.log(vm.cityName);
		var weatherResource = $resource('http://api.openweathermap.org/data/2.5/weather',
			{q:vm.cityName,appid:'27d43832d2a4adcb97fcbfa23db130aa'});
		vm.weatherResponse = weatherResource.get();
		console.log(vm.weatherResponse);
	}
});