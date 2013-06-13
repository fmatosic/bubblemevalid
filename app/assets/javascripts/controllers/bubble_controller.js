var  BubbleCtrl = ["$scope",  "Bubble","ajaxErrorService",function($scope,  Bubble,ajaxErrorService) {
	$scope.newBubble={};
	$scope.popupopts={};
	$scope.saveBubble=function()
	{

		Bubble.save($scope.newBubble,function(){
			alert("finally saved!");
		})
	}

}]