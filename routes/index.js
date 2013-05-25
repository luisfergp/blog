
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', count: req.count});
};
exports.video = function(req, res){
  res.render('video', { title: 'Express' });
};
