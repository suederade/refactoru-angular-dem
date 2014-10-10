myApp.directive('draggable', function(){
	return {
		restrict: 'A',
		link: function($scope, element, atttrs) {
			element.draggable({
				revert:'invalid',
				helper: 'clone',
				appendTo: 'body'
			});
		}
	};
});

myApp.directive('droppable', ['$state', function($state){
	return {
		restrict: 'A',
		link: function($scope, element, attrs){
			element.droppable({
				accept: ".pieces",
				hoverClass: "drop-hover",
				drop: function(event, ui){
					var tempState = ui.draggable.attr('data-state');
					if($state !== tempState){
						console.log('Data content:', tempState);
						$state.go(tempState);
					}
				}
			});
		}
	}
}]);

myApp.directive('starcraft', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/templates/starcraft-template.html'
	}
});