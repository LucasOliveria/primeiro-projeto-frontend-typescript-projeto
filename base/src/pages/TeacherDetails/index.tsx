import { useParams } from 'react-router-dom';
import CardDetails from '../../components/CardDetails';
import Header from '../../components/Header';
import { Teacher } from '../../types/types';
// import { useEffect, useState } from "react";

function TeacherDetails({ teachers }: { teachers: Teacher[] }) {
  const { id } = useParams();
  const currentTeacher: Teacher | undefined = teachers.find((teacher) => teacher.id === Number(id));
  console.log(teachers);

  // OUTRA SOLUÇÃO
  // const [currentTeacher, setCurrentTeacher] = useState<Teacher>();
  // useEffect(() => {
  // const json = localStorage.getItem('current-teacher')
  // if (json) {
  //   const newCurrentTeacher = JSON.parse(json)
  //   setCurrentTeacher(newCurrentTeacher)
  // }
  // }, [])

  return (
    <div className='generic-container'>
      <Header arrow />
      {
        currentTeacher ?
          <CardDetails teacher={currentTeacher} />
          :
          <h1 style={{ position: 'absolute', top: "50vh" }}>404 - NOT FOUND</h1>
      }
    </div>
  )
}

export default TeacherDetails