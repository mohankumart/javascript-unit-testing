var expect = require('chai').expect;

describe('checkForShip',function(){
	var checkForShip = require('../game_logic/ship_methods').checkForShip;
	
	it('should correctly report no ship at a given players coordinate',function(){
		player = {
			ships: [
			  {
				  locations: [[0,0]]
			  }      
			]	
		}
		expect(checkForShip(player,[9,9])).to.be.false;
	});
	
	it('should correctly report ship at a given players coordinate',function(){
		player = {
			ships: [
			  {
				  locations: [[0,0]]
			  }      
			]	
		}
		expect(checkForShip(player,[0,0])).to.be.true;
	});
	
	it('should handle ship located at multiple locations',function(){
		player = {
			ships: [
			  {
				  locations: [[0,0],[0,1]]
			  }      
			]	
		}
		expect(checkForShip(player,[0,0])).to.be.true;
		expect(checkForShip(player,[0,1])).to.be.true;
		expect(checkForShip(player,[9,9])).to.be.false;
	});
	
	it('should handle ships located at multiple locations',function(){
		player = {
			ships: [
			  {
				  locations: [[9,9]]
			  }
			]	
		}
		expect(checkForShip(player,[9,9])).to.be.true;
	});
	
});


describe('damageShip', function(){
	var damageShip = require('../game_logic/ship_methods').damageShip;
	
	it('it should register damage on agiven ship at a given location', function(){
		var ship = {
				locations: [[0, 0]],
				damage: []
			};
		damageShip(ship, [0,0]);
		expect(ship.damage).to.not.be.empty;	
	});
});

