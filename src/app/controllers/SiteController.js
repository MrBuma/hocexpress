const Course = require('../models/Course');
const { multiMongooseToObject } = require('../../util/mongoosehelp');
class SiteController {
    //[GET] /
    index(req, res, next) {
        // res.render('home');
            // Course.find({}, function(error, courses){
            //     if(!error){
            //         res.json(courses);
            //     }else {
            //         next(error);
            //     }
        // })
        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject()); chuyen ve object literal
                courses = multiMongooseToObject(courses);
                res.render('home', {courses});
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
