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

        function filterDataByFarm(data, filter) {
	filter = filter.toLowerCase();
return _.filter(data, function(data) 
{
return ( filter == "" || data.farm.Title.toLowerCase().indexOf(filter) != -1 ||  data.color.Title.toLowerCase().indexOf(filter) != -1 || data.farm.Owner.Title.toLowerCase().indexOf(filter) != -1 || data.season.Title.toLowerCase().indexOf(filter) != -1);});
} 
		
		
    }
})();
