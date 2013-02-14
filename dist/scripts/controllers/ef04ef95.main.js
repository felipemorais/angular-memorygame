'use strict';

minimaliaMemoriaApp.controller('MainCtrl', function( $scope, $defer ) {
	var cards = [{
			title:"LedZepeling"
		},{
			title:"radiohead"
		},{
			title:"antrax"
		},{
			title:"redhot"
		},{
			title:"james brown"
		},{
			title:"metallica"
		},{
			title:"ironmaiden"
		},{
			title:"sepultura"
		},{
			title:"slayer"
		},{
			title:"greenday"
		}
	];
	$scope.sortCards = function(){
		console.log("sort")
		return [].concat( cards ).concat( cards ).sort(
			function() { 
				return 0.5 - Math.random(); 
			} 
		);
	};
  	$scope.$on('$viewContentLoaded', function() {
  		console.log("loaded")
    	cardsControll();
	});
	animator( $scope.cards, $defer );
});
/*
function cardsControll( cards ) {
    var self = this;
    var selecteds = [];
    var opened = [];

    for(var i=0;i<cards.length;i++){
        cards[ i ].onclick = function() {
            self.selectItem( cards[ i ] );
        }
    }
   

    this.selectItem = function( e ){
        if ( selecteds.length == 2 ) {
            this.closeItens();
        }

        e.className = e.className.replace('is-selected', '') + ' is-selected';
        selecteds.push( e );
        return false;
    }
    this.closeItens = function(){
        selecteds.forEach(function(e){
            console.log(e)
            e.className = e.className.replace('is-selected', '');
        });
        selecteds = [];
    }   
};
*/
angular.module('cards', [])..directive('card', function(){
    return {
      restrict: 'C',
      // This HTML will replace the zippy directive.
      //replace: true,
      transclude: true,
     // scope: { title:'@cardTitle' },
      //template: '<div>' +
        //          '<div class="title">{{title}}</div>' +
          //        '<div class="body" ng-transclude></div>' +
            //    '</div>',
      // The linking function will add behavior to the template
      link: function(scope, element, attrs) {
        var opened = true;

        // Clicking on title should open/close the zippy
        element.bind('click', toggle);

        // Toggle the closed/opened state
        function toggle() {
          opened = !opened;
          element.removeClass(opened ? 'closed' : 'opened');
          element.addClass(opened ? 'opened' : 'closed');
        }

        // initialize the zippy
        toggle();
      }
    }
  });
  