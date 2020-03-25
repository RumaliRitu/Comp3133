import React from 'react';
import Course from './course';

const Student = props => {
    return  <pre>Student <b>{props.name}</b> with student <b>{props.number}</b>
                <br/>
                Student is enrolled in <b>Course {props.enrolledcourse}</b>
            </pre>;
};
 
export default Student;