import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CardDetails from '../../components/CardDetails';
import Header from '../../components/Header';
import { Teacher } from '../../types/types';
import api from "../../services/api";

function TeacherDetails({ teachers }: { teachers: Teacher[] }) {
  const [teacher, setTeacher] = useState<Teacher>({
    id: 0,
    name: '',
    avatar: '',
    stack: '',
    bio: ''
  })

  const { id } = useParams();

  function getTeacher() {
    const currentTeacher = teachers.filter((teacher) => teacher.id === Number(id));
    setTeacher(currentTeacher[0])
  }

  /*  
  // Outra Solução

   async function getTeachers() {
      try {
        const response = await api.get('/teachers');
        const currentTeacher = response.data.find((teacher: Teacher) => teacher.id === Number(id))
        if (currentTeacher) {
          setTeacher(currentTeacher)
        }
      } catch (error) {
        console.log(error);
      }
    }
   */
  useEffect(() => {
    getTeacher()
    // getTeachers()
  }, [])

  return (
    <div className='generic-container'>
      <Header arrow />
      <CardDetails teacher={teacher} />
    </div>
  )
}

export default TeacherDetails