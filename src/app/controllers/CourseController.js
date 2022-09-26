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
    //[GET]me/courses/id/edit
    edit(req, res, next){
        // console.log(req.params.id);
        Course.findById({_id: req.params.id})
            .then(course => res.render('courses/updatecourse', {course: singleMongooseToObject(course)}))
            .catch(next)
    }
      //[PUT]/courses/id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(()=> res.redirect('../me/stored/courses'))
            .catch(next)
    }
     //[DELETE]/courses/id
    destroy(req, res, next){
           Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('../me/stored/courses'))
            .catch(next)
        
    }
  
}

module.exports = new CourseController();
