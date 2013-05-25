
/*
 * Count
 */
var count=0;
exports.getCount = function(req, res, next){
	count++;
	console.log("visitas: " + count.getcount_);
	next();
};


exports.count_mw = function() { 
	console.log("visitas: " + count);
	return count;
};
