const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (
    !validator.isLength(data.firstname, {
      max: 15,
      min: 2
    })
  ) {
    errors.firstname = "First Name must be minimum 2 to maximum 15 charecters";
  }

  if (validator.isEmpty(data.firstname)) {
    errors.firstname = "First Name field is required";
  }

  if (
    !validator.isLength(data.lastname, {
      max: 15,
      min: 2
    })
  ) {
    errors.lastname = "Last Name must be minimum 2 to maximum 15 charecters";
  }

  if (validator.isEmpty(data.lastname)) {
    errors.lastname = "Last Name field is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
