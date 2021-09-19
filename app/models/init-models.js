var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _comments = require("./comments");
var _posts = require("./posts");
var _roles = require("./roles");
var _users = require("./users");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    categories,
    comments,
    posts,
    roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
