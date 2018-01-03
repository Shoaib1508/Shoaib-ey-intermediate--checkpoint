(function() {
    'use strict';

    angular
        .module('app')
        .factory('tomatoGridService', tomatoGridService);

    tomatoGridService.$inject = [];

    function tomatoGridService() {
        var service = {
            filterDataByFarm: filterDataByFarm,
			//filterDataBySearchBox: filterDataBySearchBox
        };

        return service; 

        function filterDataByFarm(data, filter) {
            return _.filter(data, function(data) {return data.farm.Title === filter;});
        }
		
		 function filterDataBySearchBox(data, filter) {
			 debugger;
            return _.filter(data, function(data) {return data.farm.Title === filter;});
        }
    }
})();
