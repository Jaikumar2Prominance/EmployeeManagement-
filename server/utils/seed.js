const faker = require('faker');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const Users = require('../models/Users');
require("../config/passport")(passport);

const seedDb = async () => {
  console.log('Seeding database...');

  // create 3 users
  const usersPromises = [...Array(3).keys()].map((index, i) => {

    const email = `email${index}@email.com`;
    const password = '123456789';
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    var role = 'employee';

    if (index === 0) {
      role = 'admin';
    } 

    Users.findOne({
      email: email
    }).then(user => {
      // if user exist return 404  error with message: user already exist
      if (user) {
        
      } else {
        // if user does  not exist create new user here
        const NewUser = new Users({
          firstname,
          lastname,
          email,
          password,
          role
        });
        // before create new user we need to bcryt the password to store securely in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
              console.log(err);
            }
            // push hash password to new user
            NewUser.password = hash;
  
            // finally save the user
            NewUser.save()
              .then(user => {
                //
                const profileFields = {
                  user: user._id
                };
                Profile.findOne({
                  user: user._id
                }).then(profile => {
                  if (profile) {
                    // Update
                    Profile.findOneAndUpdate(
                      {
                        user: user._id
                      },
                      {
                        $set: profileFields
                      },
                      {
                        new: true
                      }
                    ).then(profile => {
                      //res.json(profile)
                      
                    });
                  } else {
                    // Create
                    new Profile(profileFields)
                      .save()
                      .then(profile => { 
                        //res.json(profile) 
                        
                      });
                  }
                });
  
                //
              })
              .catch(err => {
                console.log(err);
              });
          });
        });
      }
    });

    //return user;
  });
};

module.exports = seedDb;