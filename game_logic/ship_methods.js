function checkForShip(player, coordinates) {
	var shipPresent, ship;
	
	for(var i=0; i<player.ships.length; i++){
		ship = player.ships[i];
		
		shipPresent = ship.locations.filter(function(actualCoordinate){
			return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
		})[0];
		
		if(shipPresent){
			return true;
		}else{
			return false;
		}
	}
}

function damageShip(ship, coordinates){
	if(!coordinates){
		throw Error('No Coordinates specified');
	}
	for(var i = 0; i<coordinates.length; i++){
		ship.damage.push(coordinates[i])
	}
}


module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;