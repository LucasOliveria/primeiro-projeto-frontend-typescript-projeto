import { useNavigate } from 'react-router-dom';
import { Teacher } from '../../types/types';
import './style.css';

function LittleCard({ teacher }: { teacher: Teacher }) {
  const navigate = useNavigate()

  function handleCurrentTeacher(teacher: Teacher) {
    // OUTRA SOLUÇÃO
    // localStorage.setItem('current-teacher', JSON.stringify(teacher));
    navigate(`/teacher/${teacher.id}`);
  }
  return (
    <div className='little-card' onClick={() => handleCurrentTeacher(teacher)}>
      <div className='content-photo'>
        <img src={teacher.avatar} alt="teacher" />
      </div>
      <h3>{teacher.name}</h3>
    </div>
  )
}

export default LittleCard;