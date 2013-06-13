var app = angular.module("Bubblemevalid", ["ngResource","validatingPopupModule"]);
	app.config(["$httpProvider", function(provider) {
		provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
		provider.responseInterceptors.push(app.interceptor);
	}]);
app.factory("Bubble", function($resource){
		return $resource("/bubble/:id", {id: "@id"}, {update: {method: "PUT"}});
	});
//service to broadcast intercepting 422 Validation errors
// We could allso scope.$watch for changes in services but in our case
// we need to trigger the user controller which is listening for this specific broadcast
	app.factory('ajaxErrorService',function($rootScope){
		var ajaxError={};
		ajaxError.errors;
		ajaxError.broadcast422Errors = function(errors)
		{
			ajaxError.errors=errors;
			$rootScope.$broadcast('error422');
		}
		ajaxError.broadcastSuccess = function()
		{
			$rootScope.$broadcast('ajaxSuccess');
		}
		return ajaxError;
	})
	app.interceptor = ['$q', '$injector','ajaxErrorService', function ($q, $injector,ajaxErrorService) {

				function success(response) {
					ajaxErrorService.broadcastSuccess();
					return response;
				}
				function error(response) {
					if (response.status === 422 ) {
						console.log(response);
						if((typeof response.data !="undefined") && (typeof response.data.errors != "undefined"))
						{
								ajaxErrorService.broadcast422Errors(response.data.errors);
						}
					}
					return $q.reject(response);
				}

				return function (promise) {
					return promise.then(success, error);
				}
			}];