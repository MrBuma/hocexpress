const Course = require('../models/Course');
const { MultiMongooseToObject} = require('../../util/mongoosehelp');
class MeController {
  
    //[get] me/stored/courses
    storedCourses(req, res, next){
       
       res.send('Hello')
    };
}

module.exports = new MeController();
