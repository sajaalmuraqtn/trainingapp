import React from 'react'

export default function Course({t,index,desc,deleteCourse}) {
  return (
    <>
      <tr>
            <th scope="row">{index}</th>
            <td>{t}</td>
            <td>{desc}</td>
            <td><button className='btn btn-danger' 
            onClick={()=>deleteCourse(index)}>Delete</button></td>
        </tr>
    </>
  )
}
