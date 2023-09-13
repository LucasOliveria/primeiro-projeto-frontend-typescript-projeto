import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CardDetails from '../../components/CardDetails';
import Header from '../../components/Header';
import { Teacher } from '../../types/types';

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
    const currentTeacher = teachers.find((teacher) => teacher.id === Number(id));
    setTeacher(currentTeacher!)
  }

  useEffect(() => {
    getTeacher()
  }, [])

  return (
    <div className='generic-container'>
      <Header arrow />
      <CardDetails teacher={teacher} />
    </div>
  )
}

export default TeacherDetails