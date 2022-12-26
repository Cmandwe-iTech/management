const express = require("express");
const bodyparser = require("body-parser");
const route = express.Router();
const student = require("../models/student");
const classdata = require("../models/class");


route.use(bodyparser.json())

route.post("/v1/myClass", async(req, res)=>{
    try{
       const data = await classdata.find()
       const seq = data.length
       if(!data){
        const clas = await classdata.create({
            class : req.body.class,
            myClassId : seq + 1
        })
        res.json({
              clas
        })
       }else{
        const clas = await classdata.create({
            class : req.body.class,
            myClassId : seq + 1
        })
       }
       
       res.json({
             clas
       })
    }catch(e){
        e.message
    }
})

route.post("/v1/myClass/:myClassId/students", async(req, res)=>{
    try{
      const stud = await student.find({myClassId:req.params.myClassId})
      const studseq = stud.length
      const studs = await student.create({
        name:req.body.name,
        StudentId:studseq+1,
        student_count:studseq+1
      })
      res.json({
        studs
      })
    }catch(e){
        e.message
    }
})

route.get("/v1/myClass", async(req, res)=>{
    try{
      const dat = await classdata.find()
    if(dat) {res.json({
        dat
      })}
     else{
        res.status(400).json({
            status:"data not available"
        })
     } 
    }catch(e){
        e.message
    }
})

route.get("/v1/myClass/:myClassId", async(req, res)=>{
    try{
      const dat = await classdata.find({myClassId:req.params.myClassId})
     if(dat){ res.json({
        dat
      })}
      else{
        res.status(400).json({
            status: "id not found"
        })
      }
    }catch(e){
        e.message
    }
})

route.get("/v1/myClass/:myClassId/students", async(req, res)=>{
    try{
      const dat = await student.find()
     if(dat){ res.json({
        dat
      })}
      else{
        res.status(400).json({
            status: "not found"
        })
      }
    }catch(e){
        e.message
    }
})

route.get("/v1/myClass/:myClassId/students/:studentId", async(req, res)=>{
    try{
      const dat = await student.find({studentId:req.body.studentId})
     if(dat){ res.json({
        dat
      })}
      else{
        res.status(400).json({
            status: "not found"
        })
      }
    }catch(e){
        e.message
    }
})
route.put("/v1/myClass/:myClassId/students/:studentId", async(req, res)=>{
    try{
      const dat = await student.find({studentId:req.body.studentId})
     if(dat){
        const updatdata = await student.updateOne(req.body)
        res.json({
            status:"updated successfully",
            updatdata
        })
     }
      else{
        res.status(400).json({
            status: "not found"
        })
      }
    }catch(e){
        e.message
    }
})
route.delete("/v1/myClass/:myClassId", async(req, res)=>{
    try{
      const dat = await classdata.find({myClassId:req.params.myClassId})
     if(dat){
        await classdata.delete({myClassId:req.params.myClassId})
        res.json({
            status:"deleted successfully",
    
        })
     }
      else{
        res.status(400).json({
            status: "not found"
        })
      }
    }catch(e){
        e.message
    }
})
route.delete("/v1/myClass/:myClassId/students/:studentId", async(req, res)=>{
    try{
      const dat = await student.find({studentId:req.params.studentId})
     if(dat){
        await student.delete({studentId:req.params.studentId})
        res.json({
            status:"deleted successfully",
    
        })
     }
      else{
        res.status(400).json({
            status: "not found"
        })
      }
    }catch(e){
        e.message
    }
})

module.exports = route;