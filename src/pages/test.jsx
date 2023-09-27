import React, { useEffect, useState } from 'react'
import Course from './Course.jsx';
import { useFormik } from 'formik';

export default function Test() {
 
 let [courses,setCourses]=useState([])
 let course={title:'',desc:''}
 function addCourse() {
    course=formik.values;
    console.log(course);
    courses.push(course);
    setCourses(courses)
  }
 
 let formik=useFormik(
    {initialValues:{
        title:'',
        desc:''
    },
    onSubmit:addCourse
}
 )
 
 function deleteCourse(id) {
    let arrayAfterDelete=courses.filter(
        (course)=>{
          if (course.id!=id) {
            return course;
          }
        }
    )
    setCourses(arrayAfterDelete);
 }
 
  return (
    <div>
     
 <form className='container mt-5' method='post' onSubmit={formik.handleSubmit}>
  <div className="mt-5">
    <label  className="form-label">title</label>
    <input type="text" id='title' onChange={formik.handleChange} className="form-control"  />
    {/* <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mt-5">
    <label  className="form-label">description</label>
    <input type="text" id='desc' onChange={formik.handleChange} className="form-control" />
    {/* <div id="emailHelp" classname="form-text">We'll never share your email with anyone else.</div> */}
  </div>

  <button type="submit" className="btn btn-primary mt-5">Add</button>
</form>

    
     <table className="table mt-5">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">desc</th>
    </tr>
  </thead>
  <tbody>
    {
        courses?.map((element,index)=>{
       return  <Course key={index} t={element.title} index={index}  deleteCourse={deleteCourse} desc={element.desc} />
       
        })

    }

  </tbody>
</table>
    </div>
  )
}
