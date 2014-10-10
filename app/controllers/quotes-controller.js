(function() {
	myApp.controller('QuotesController', function($scope){
		// QUOTE class
		var Quote = function(quote) {
			this.text = quote.text;
			this.author = quote.author;
			this.id = _.uniqueId('quote_');
			this.rating = quote.rating;
		};
		$scope.newQuote = {};
		// Hard coded for quickness
		$scope.quotes = [{
			text: 'Awesome',
			author: 'Me',
			id: 'quote_1',
			rating: 1
		},
		{
			text: 'Excellent',
			author: 'Ted',
			id: 'quote_2',
			rating: 5
		},
		{
			text: 'To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.',
			author: 'C.S. Lewis',
			id: 'quote_3',
			rating: 10
		},
		{
			text: 'More awesome',
			author: 'Me',
			id: 'quote_4',
			rating: 0
		},
		{
			text: 'Look!',
			author: 'Michael',
			id: 'quote_5',
			rating: 2
		},
		{
			text: 'Everybody jump!',
			author: 'Josh',
			id: 'quote_6',
			rating:7		}
		];

		$scope.randomQuote = [];
		$scope.search = '';
		$scope.addQuote = function(quote){
			var aQuote = new Quote(quote);
			

			$scope.quotes.push(aQuote);
			$scope.resetForm();
			console.log('Quotes:', $scope.quotes);
		};
		// To reset new quote form that is bound to the textareas
		$scope.resetForm = function() {
			$scope.newQuote = {
				text: '',
				author: ''
			};
		};
		//Delete a specific quote
		// $(document).on('click', '.remove', function() {
		// 	var getId = $(this).closest('.quote').attr('id');
		// });
		
		$scope.removeQuote = function(id) {
			console.log('ID:', id);
			$scope.quotes = $scope.quotes.filter(function(quote) {
				return quote.id !== id;
			});
		};
		// Change the search filter to only show quotes for specific author
		$scope.changeFilter = function(id){
			var obj = $scope.quotes.filter(function(quote){
				console.log('ID in filter:', id);
				return quote.id  === id;
			});
			console.log('Object:', obj[0]);
			console.log('Object author:', obj[0].author);
			$scope.search = obj[0].author;
		};
		// Generate random quote
		$scope.randomQuoteGenerator = function(){
			$scope.randomQuote = [];
			var randomNum = _.random(1, $scope.quotes.length);
			console.log('Random number:', randomNum);
			console.log('Random Quote from $scope.quotes:', $scope.quotes[randomNum]);
			$scope.randomQuote.push($scope.quotes[randomNum]);
			console.log('Random quote array:', $scope.randomQuote);
			console.log('Quotes:', $scope.quotes)
		};

		// For Rating system
		$scope.rate = 7;
		$scope.max = 10;
		$scope.isReadonly = false;
		$scope.hoveringOver = function(value) {
		    $scope.overStar = value;
		};
	});
})();