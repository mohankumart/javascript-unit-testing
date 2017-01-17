/**
 * New utils file
 */
function gatherNamesOf (arrayOfPeople) {
	return arrayOfPeople.map(function(){
		return person.name;
	})
}

module.exports = gatherNamesOf;