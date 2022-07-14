exports.insertAuto = function(req,res){
    return res.send(req.originalUrl)
}

exports.slashWalaFunction = function(req, res) {
    // console.log(req)
    return res.send(req.originalUrl);
}