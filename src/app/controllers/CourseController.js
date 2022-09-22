const Course = require('../models/Course');
const { singleMongooseToObject} = require('../../util/mongoosehelp');
class CourseController {
    //[GET] courses/show
    show(req, res, next) {
        //res.send('DETAL PAGE' + req.params.slug);

        Course.findOne({slug: req.params.slug})
            .then(course => res.render('courses/show', {course: singleMongooseToObject(course)}))
            .catch(next)

    }
    //[GET] courses/create
    create(req, res){
        res.send('Create Course');
    }
}

module.exports = new CourseController();
