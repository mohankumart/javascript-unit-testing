/**
 * New node file
 */
var expect = require('chai').expect;


function titleCase(title){
	var words = title.split(' ');
	var titleCaseWords = words.map(function(word){
		return word[0].toUpperCase() + word.substring(1)
	});
	
	
	return titleCaseWords.join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('the great mouse detective')).to.be.equal('The Great Mouse Detective');





