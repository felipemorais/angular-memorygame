'use strict';

describe('Controller: Cards', function() {

  // load the controller's module
  beforeEach(module('minimaliaMemoriaApp'));

  var Cards,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    Cards = $controller('Cards', {
      $scope: scope
    });
  }));

  function findCard( card1, equal ) {
    var card;
    equal = !equal;
    scope.cards.forEach(function( e, i ){
      
      if( i > 0 && e.title === card1.title && !!equal ) {
        card = e;
      }else if( e.title !== card1.title && !equal ) {
        card = e;
      }
    });
    return card;
  }
  it('should attach a list of cards to the scope', function() {
    expect(scope.cards.length).toBe(20);
  });

  it('Element selected ', function() {
    var card1 = scope.cards[ 0 ];
    scope.selectItem( card1 );
    expect( card1.isselected ).toEqual( true );
  });

  it('reset ', function() {
    var card1 = scope.cards[ 0 ];
    scope.selectItem( card1 );
    expect( card1.isselected ).toEqual( true );
    scope.reset();
    card1 = scope.cards[ 0 ];
    expect( card1.isselected ).not.toEqual( true );
  });

  it('Element opened ', function() {
    var card1 = scope.cards[ 0 ];
    var card2 = findCard( card1 );

    scope.selectItem( card1 );
    scope.selectItem( card2 );
    expect( card1.isopened ).toEqual( true );
    expect( card2.isopened ).toEqual( true );
  });
  //refactor
  it('Element closed ', function() {
    var card1 = scope.cards[ 0 ];
    var card2 = findCard( card1, true );
    var card3 = findCard( card1 );

    scope.selectItem( card1 );
    expect( card1.isselected ).toEqual( true );
    
    scope.selectItem( card2 );
    expect( card2.isselected ).toEqual( true );

    scope.selectItem( card3 );

    expect( card3.isselected ).toEqual( true );
    
    //expect( scope.cards[ 0 ] ).toEqual( true );
    //expect( card2.isselected ).not.toEqual( true );
    //expect( card1.isopened ).not.toEqual( true );
    //expect( card2.isopened ).not.toEqual( true );

  });
 
});
