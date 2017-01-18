var expect = require('chai').expect;

describe('checkForShip',function(){
	var checkForShip = require('../game_logic/ship_methods').checkForShip;
	var player;
	
	before(function(){
		player = {
			ships: [
				  {
					  locations: [[0,0],[0,1]]
				  }      
			]	
		};
	});
	
	it('should correctly report no ship at a given players coordinate',function(){
		//expect(checkForShip(player,[9,9])).to.be.false;
	});
	
	it('should correctly report ship at a given players coordinate',function(){
		//expect(checkForShip(player,[0,0])).to.be.true;
	});
	
	it('should handle ship located at multiple locations',function(){
		player = {
				
		}
		//expect(checkForShip(player,[0,0])).to.be.true;
		//expect(checkForShip(player,[0,1])).to.be.true;
		//expect(checkForShip(player,[9,9])).to.be.false;
	});
	
	it('should handle ships located at multiple locations',function(){
		//expect(checkForShip(player,[9,9])).to.be.true;
	});
	
});


describe('damageShip', function(){
	var damageShip = require('../game_logic/ship_methods').damageShip;
	var ship;
	beforeEach(function(){
		ship = {
				locations: [[0, 0]],
				damage: []
			};
	});
	
	after(function(){
		console.log('entire test suite completed')
	});
	
	afterEach(function(){
		console.log('each test suite completed');
	});
	
	
	it('it should register damage on agiven ship at a given location', function(){
		damageShip(ship, [0,0]);
		//expect(ship.damage).to.not.be.empty;	
	});
});

describe('edgeCases',function(){
	var damageShip = require('../game_logic/ship_methods').damageShip;
	var ship;
	before(function(){
		ship = {
				locations: [[0, 0]],
				damage: []
			};
	});
	it('it should throw error if no coordinates are specified', function(){
		var handler = function(){
			damageShip(ship)
		}
		expect(handler).to.throw(Error);	
	});
});


