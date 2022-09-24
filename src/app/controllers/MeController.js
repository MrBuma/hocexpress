const Course = require('../models/Course');
const { multiMongooseToObject} = require('../../util/mongoosehelp');
class MeController {
  
    //[get] me/stored/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/storedcourses', {courses: multiMongooseToObject(courses)}))
            .catch(next)
      
    };
}

module.exports = new MeController();
