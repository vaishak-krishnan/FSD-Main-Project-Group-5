const express = require("express");
const router = express.Router();
const studentDATA = require("../models/students");
const courseDATA = require("../models/courses");
const programDATA = require("../models/programs");
const batchDATA = require("../models/batch");
const officerData = require('../models/officer') 
const userData = require('../models/users') 
// const { findById } = require('../model/officer')




// ------------------------for admin------------------------- //

// -----------------------------------------------------------Start Student
//add data (post)
router.post('/add_student', async (req, res) => {

    try {
        let item = {

            student_name: req.body.student_name,
            contact_number: req.body.contact_number,
            email_id: req.body.email_id,
            contact_address: req.body.contact_address,
            course: req.body.course,
            batch: req.body.batch,
            program: req.body.program,
            training_head: req.body.training_head,
            placement_officer: req.body.placement_officer,
            employment_status: req.body.employment_status,
            course_status: req.body.course_status
        }
        const newdata = new studentDATA(item);
        const savedata = await newdata.save();
        console.log(item)
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

//get all Studentslist (get) for data
router.get('/studentslist', async (req, res) => {

    try {
        let studentslist = await studentDATA.find();

        console.log(`from get method ${studentslist}`);
        res.send(studentslist);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});

// fetch single student data (get)
router.get('/getsinglestudent/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const singleStudentdata = await studentDATA.findById(id);
        console.log(`from get with id method ${singleStudentdata}`);
        res.send(singleStudentdata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// delete  student data
router.delete('/deletestudent/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deleteStudentdata = await studentDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deleteStudentdata}`);
        res.send(deleteStudentdata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }
});

// update data
router.put('/updateStudent', async (req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend
            student_name: req.body.student_name,
            contact_number: req.body.contact_number,
            email_id: req.body.email_id,
            contact_address: req.body.contact_address,
            course: req.body.course,
            batch: req.body.batch,
            program: req.body.program,
            training_head: req.body.training_head,
            placement_officer: req.body.placement_officer,
            employment_status: req.body.employment_status,
            course_status: req.body.course_status
        }
        console.log("incoming data from update", item);

        let updatedata = await studentDATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// -----------------------------------------------------------end Student






// -----------------------------------------------------------Start Course
//add data (post)
router.post('/add_course', async (req, res) => {

    try {
        let item = {

            course_name: req.body.course_name,
            course_description: req.body.course_name
          

        }
        const newdata = new courseDATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

//get all Course list (get) for data
router.get('/courselist', async (req, res) => {

    try {
        let courseslist = await courseDATA.find();

        console.log(`from get method ${courseslist}`);
        res.send(courseslist);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});

// fetch single Course data (get)
router.get('/getsinglecourse/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const singlecoursedata = await courseDATA.findById(id);
        console.log(`from get with id method ${singlecoursedata}`);
        res.send(singlecoursedata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// delete  Course data
router.delete('/deletecourse/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletecoursedata = await courseDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deletecoursedata}`);
        res.send(deletecoursedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// update Course data
router.put('/updatecourse', async (req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend
           
            course_name: req.body.course_name,
            course_description: req.body.course_name
        }
        console.log("incoming data from update", item);

        let updatedata = await courseDATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// end course

// -----------------------------------------------------------Start batch
//add data (post)
router.post('/add_batch', async (req, res) => {

    try {
        let item = {

            batch_name: req.body.batch_name,
            batch_description: req.body.batch_name
          

        }
        const newdata = new batchDATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

//get all batch list (get) for data
router.get('/batchlist', async (req, res) => {

    try {
        let batchslist = await batchDATA.find();

        console.log(`from get method ${batchslist}`);
        res.send(batchslist);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});


// fetch single batch data (get)
router.get('/getsinglebatch/:id', async (req, res) => {

    try {
        let id = req.params.id;
        const singlebatchdata = await batchDATA.findById(id);
        console.log(`from get with id method ${singlebatchdata}`);
        res.send(singlebatchdata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// delete  batch data
router.delete('/deletebatch/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deletebatchdata = await batchDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deletebatchdata}`);
        res.send(deletebatchdata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// update batch data
router.put('/updatebatch', async (req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend
           
            batch_name: req.body.batch_name,
            batch_description: req.body.batch_name
        }
        console.log("incoming data from update", item);

        let updatedata = await batchDATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// end batch


// -----------------------------------------------------------Start program
//add data (post)
router.post('/add_program', async (req, res) => {

    try {
        let item = {

            program_name: req.body.program_name,
            program_description: req.body.program_name
          

        }
        const newdata = new programDATA(item);
        const savedata = await newdata.save();
        console.log(`from post method ${savedata}`);
        res.send(savedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

//get all program list (get) for data
router.get('/programlist', async (req, res) => {

    try {
        let programslist = await programDATA.find();

        console.log(`from get method ${programslist}`);
        res.send(programslist);
    }
    catch (error) {
        console.log(`error from get method ${error}`);

    }

});

// fetch single program data (get)
router.get('/getsingleprogram/:id', async (req, res) => {
    
    try {
        let id = req.params.id;
        const singleprogramdata = await programDATA.findById(id);
        console.log(`from get with id method ${singleprogramdata}`);
        res.send(singleprogramdata)
    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// delete  program data
router.delete('/deleteprogram/:id', async (req, res) => {

    try {
        let id = req.params.id;
        let deleteprogramdata = await programDATA.findByIdAndDelete(id);
        console.log(`from delete method ${deleteprogramdata}`);
        res.send(deleteprogramdata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// update program data
router.put('/updateprogram', async (req, res) => {

    try {
        let id = req.body._id;
        let item = { //remove 'data' from below if we not pass data object from frontend
           
            program_name: req.body.program_name,
            program_description: req.body.program_name
        }
        console.log("incoming data from update", item);

        let updatedata = await programDATA.findByIdAndUpdate(
            { "_id": id },
            { $set: item }
        );
        console.log(`from put method old data ${updatedata}`);
        res.send(updatedata);

    } catch (error) {
        console.log(`error from get method ${error}`);
    }

});

// end program

// officers


router.get('/officerlist',(req,res)=>{
    try{
        officerData.find().then(function(data){
            res.send(data);
        })
    }
    catch(error){
        console.log(error)
    }
})

//TODO: get single data from db  
router.get('/officerlist/:id',(req,res)=>{
    try{
        officerData.findById({"_id":req.params.id}).then(function(data){
            res.send(data);
            })
    }
   
    catch(error){
        console.log(error);
    } 
})
    
 // send data from db
 router.post('/officer',async(req,res)=>{
    try{
    

        console.log(req.body)
        let item = {  //to fetch and save data from front end in server
            name: req.body.name,
            contact_number: req.body.contact_number,
            email_id:req.body.email_id,
            address:req.body.address,
            location:req.body. location
        }
        const user = new officerData(item)
        const savedUser = await user.save();
        console.log('saved data :',savedUser);
        res.send();
    }
    catch(error){
        console.log(error);
    }   
  })

//TODO: delete a data from db

router.delete('/officerlist/:id',async(req,res)=>{
    try{
        let id = req.params.id
        const deleteBook = await officerData.findByIdAndDelete(id)
        res.send(deleteBook)
    }
    
        catch(error){
            console.log(error);
        }   
    
})

//TODO: Update  a  data from db 
router.put('/officerlist',async(req,res)=>{

    try{

        console.log(req.body);
        await officerData.findByIdAndUpdate(req.body._id, {$set:req.body})
         .then(function(data){
              res.send(data);
      })  
    }
    catch(error){
        console.log(error);
    } 
 
}) 



module.exports = router;