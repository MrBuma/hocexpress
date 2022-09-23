const Course = require('../models/Course');
const { singleMongooseToObject} = require('../../util/mongoosehelp');
class MeController {
  
    //[get] me/stored/courses
    show(req, res, next){
       
       res.gender('meStoredCourses')
    };
}

module.exports = new MeController();
