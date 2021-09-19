const db = require('../models');

exports.create = (req, res) => {
   db.categories.create(req.body).then(response => {
       return res.json(response);
   }).catch(error => {
      return res.json(error);
   })

}

exports.findAll = (req, res) => {
    db.categories.findAll().then(response => {
        return res.json(response);
    }).catch(err => {
        return res.json(err)
    })
}

exports.findById = (req, res) => {
    db.categories.findAll({where:{id : req.params.categoryId}}).then(response => {
        if(response) return res.status(400).send({message: `Categories search: ${req.params.categoryId} id not found!`})
        return res.json(response);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    })
}

exports.update = (req, res) => {
    db.categories.update(req.body, {where : {id : req.params.categoryId}}).then(response => {
        return res.json(req.body);
    }).catch(error => {
        return res.json(error);
    })
}

exports.delete = (req, res) => {
    db.categories.destroy({where : { id : req.params.categoryId}}).then(response => {
        return res.json(response);
    }).catch(error => {
        return res.json(error);
    })
}
