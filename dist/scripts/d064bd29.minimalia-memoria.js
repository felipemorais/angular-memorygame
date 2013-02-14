'use strict';

var minimaliaMemoriaApp = angular.module('minimaliaMemoriaApp' , [] )
  .controller('Cards', function( $scope ) {

  var sortedList = [];
  var selecteds = [];
  var cards = [{
      title:"LedZepeling",
      img:'images/ledzeppeling.png'
    },{
      title:"radiohead",
      img:'images/radiohead.png'
    },{
      title:"anthrax",
      img:'images/anthrax.png'
    },{
      title:"redhot",
      img:'images/redhot.png'
    },{
      title:"james brown",
      img:'images/james.png'
    },{
      title:"metallica",
      img:'images/metallica.png'
    },{
      title:"ironmaiden",
      img:'images/iron.png'
    },{
      title:"sepultura",
      img:'images/sepultura.png'
    },{
      title:"slayer",
      img:'images/slayer.png'
    },{
      title:"minimalia",
      img:'images/minimalia.png'
    }
  ];

  function closeItens() {
    selecteds.forEach( function( e ) {
      e.isselected = false;
    });
    selecteds = [];
  } 

  function sortCards() {
    var a = [];
    var i, l, card;
    for( i = 0, l = cards.length; i < l; i++ ) {
      card = cards[ i ];
      a.push( { title: card.title, img: card.img });
      a.push( { title: card.title, img: card.img });
    }
    sortedList = a.sort( function() { 
      return 0.5 - Math.random(); 
    });
    return sortedList;
  };

  function isEquals() {
    return selecteds[ 0 ].title === selecteds[ 1 ].title;
  }
  
  function isFinished() {
    return ( $scope.opened === cards.length );
  }

  /* Scopes */

  $scope.cards = sortCards();
  $scope.tries = 0;
  $scope.opened = 0;

  $scope.reset =function(){
    $scope.cards = sortCards();
    $scope.tries = 0;
    $scope.opened = 0;
  };

  $scope.selectItem = function( e ){
    
    if( e.isselected || e.isopened ) {
      return false;
    }

    e.isselected = true;
    selecteds.push( e );
   
    if ( selecteds.length == 2 ) {

      if( isEquals() ) {

        selecteds.forEach( function( k ) {
          k.isopened = true;
        });

        $scope.opened++;
      }

      $scope.tries++;

      // refactor timeout
      setTimeout( function() {
        closeItens();
      }, 500 );

      if( isFinished() ) {
        alert("venceu")
      }

    }
  };
      
});

  
