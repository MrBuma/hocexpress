const Course = require('../models/Course');
const { singleMongooseToObject} = require('../../util/mongoosehelp');
class CourseController {
    //[GET] courses/show
    show(req, res, next) {
        // res.send('DETAL PAGE' + req.params.slug);

        Course.findOne({slug: req.params.slug})
            .then(course => res.render('courses/show', {course: singleMongooseToObject(course)}))
            .catch(next)
    }   
    //[GET] courses/create
    create(req, res){
        res.render('courses/create')
    }
    //[POST] courses/stored
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoid}/default.jpg`;
        console.log(formData);
        const course = new Course(formData);
        course.save()
        .then(()=> res.redirect('/courses'))
        .catch(next)
      
    };
  
}

module.exports = new CourseController();
