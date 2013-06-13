var validatingPopup = angular.module("validatingPopupModule", ["ngResource"]);
validatingPopup.directive('validatingPopup', ['$compile','ajaxErrorService', function($compile,ajaxErrorService) {
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function($scope, element, attributes, ngModel) {
			var altElement=element;
			var options={	
					themePath:"/assets/jquerybubblepopup-themes",
					themeName: "orange",
					manageMouseEvents: false};
			var opts =angular.extend({}, options, $scope.$eval(attributes.validating_popup));
			//select2 inserts own element so need to find and adjust bubble popup location
			// to the new elements
			//if(_.has(attributes,"select2ng"))
			//	{
			//		altElement=$(element).closest("label").find(".select2-container");
			//s	}
			$(altElement).CreateBubblePopup(opts);
			element.on("keyup",function(){
				$(this).HideAllBubblePopups();
			});
			$scope.$on('error422',function(){
				//sconsole.log("FROM SERVICE"+ajaxErrorService.errors);
			if(altElement.HasBubblePopup())
				{
					if(_.has(ajaxErrorService.errors, element[0].getAttribute('data-name')))
					{
								$(altElement).ShowAllBubblePopups(
										{
											innerHtml: ajaxErrorService.errors[element[0].getAttribute('data-name')][0],
											themePath:"/assets/jquerybubblepopup-themes",
											themeName: "orange",
											manageMouseEvents: false,
											position: 'right',
											align:'middle'

										}, false
									);

							$(altElement).FreezeBubblePopup();
							$('.jquerybubblepopup').css('z-index','9999');
						}
						else
						{
							altElement.HideAllBubblePopups();
						}
			}
			});
			$scope.$on('hideBubbles',function(){
				if(altElement.HasBubblePopup())
				{
					altElement.HideAllBubblePopups();
				}
			});
			$scope.$on('ajaxSuccess',function(){
				if(altElement.HasBubblePopup())
				{
					altElement.HideAllBubblePopups();
				}
			});
		}
	}
}]);