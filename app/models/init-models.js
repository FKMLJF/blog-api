var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _comments = require("./comments");
var _lang = require("./lang");
var _posts = require("./posts");
var _roles = require("./roles");
var _users = require("./users");

function initModels(sequelize) {
  var categories = _categories(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var lang = _lang(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  posts.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(posts, { as: "posts", foreignKey: "category_id"});
  categories.belongsTo(lang, { as: "lang", foreignKey: "lang_id"});
  lang.hasMany(categories, { as: "categories", foreignKey: "lang_id"});
  posts.belongsTo(lang, { as: "lang", foreignKey: "lang_id"});
  lang.hasMany(posts, { as: "posts", foreignKey: "lang_id"});
  comments.belongsTo(posts, { as: "post", foreignKey: "post_id"});
  posts.hasMany(comments, { as: "comments", foreignKey: "post_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  posts.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(posts, { as: "posts", foreignKey: "user_id"});

  return {
    categories,
    comments,
    lang,
    posts,
    roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
