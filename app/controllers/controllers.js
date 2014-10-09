(function(){

myApp.factory('Thumbnails', function(){
	var thumbnails = [
	{
		img: 'http://placehold.it/360x500',
		altImg: "http://placehold.it/150x100",
		alt: "This template",
		name: "Super 1",
		url: "#/homeview"
	},
	{
		img: "http://placehold.it/360x500",
		altImg: "http://placehold.it/150x100",
		alt: "This template",
		name: "Super 2",
		url: "#/view2"
	},
	{
		img: "http://placehold.it/360x500",
		altImg: "http://placehold.it/150x100",
		alt: "This template",
		name: "Super 1",
		url: "/"
	},
	{
		img: "http://placehold.it/360x500",
		altImg: "http://placehold.it/150x100",
		alt: "This template",
		name: "Super 2",
		url: "#/view2"
	},
	{
		img: "http://placehold.it/360x500",
		altImg: "http://placehold.it/150x100",
		alt: "This template",
		name: "Super 1",
		url: "/"
	},
	{
		img: "http://placehold.it/360x500",
		altImg: "http://placehold.it/150x100",
		alt: "This template",
		name: "Super 2",
		url: "#/view2"
	}
	];

	return thumbnails;
});

myApp.factory('Starcraft', function(){
	var starcraft = [
	{
		id: 'content',
		alt: 'Starcraft',
		img: 'http://placehold.it/150x100',
		state: 'starcraft'
	},
	{
		id: 'html',
		alt: 'HTML',
		img: 'http://placehold.it/150x100',
		state: 'starcraftHtml'
	},
	{
		id: 'js',
		alt: 'JS',
		img: 'http://placehold.it/150x100',
		state: 'starcraftJs'
	}
	];	
	return starcraft;
});

myApp.factory('QuotesInfo', function(){
	var quotesInfo = [
	{
		id: 'content',
		alt: 'Quotes',
		img: 'http://placehold.it/150x100',
		state: 'quotes'
	},
	{
		id: 'html',
		alt: 'HTML',
		img: 'http://placehold.it/150x100',
		state: 'quotesHtml'
	},
	{
		id: 'js',
		alt: 'JS',
		img: 'http://placehold.it/150x100',
		state: 'quotesJs'
	}
	];
	return quotesInfo;
});

//////////////////////////
// Thumbnail Controller //
//////////////////////////
myApp.controller('ThumbnailController', function($scope, Thumbnails){
	$scope.thumbnails = Thumbnails;

});
// End Thumbnail Controller

myApp.controller('DngController', function($scope, Thumbnails, Starcraft, QuotesInfo){
	$scope.thumbnails = Thumbnails;
	$scope.starcraft = Starcraft;
	$scope.quotesInfo = QuotesInfo;
	$scope.showEdit = true;
	$scope.showTemplates = false;
	$scope.toggleEdit = function() {
		$('.edit-items').toggle('slide', {direction: 'up'});
	};
	$scope.toggleTemplates = function() {
		$('.template-items').toggle('slide', {direction: 'up'});
	};
	$scope.displayModules = function() {
		$('.modules').toggle('slide', {direction: 'up'}, 1000);
	};
});

})();