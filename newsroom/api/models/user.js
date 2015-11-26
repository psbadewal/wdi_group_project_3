var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  local: {
    firstName: { type: String },
    lastName:  { type: String },
    email:     { type: String, unique: true, required: true },
    password:  { type: String, required: true },
  }, twitter:  {
    id:           { type: String },
    screen_name:  { type: String },
    location:     { type: String },
    description:  { type: String },
    first_name:   { type: String },
    last_name:    { type: String }
  }
});

userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model("User", userSchema);