import { useNavigate } from 'react-router-dom';
import { Teacher } from '../../types/types';
import './style.css';

function LittleCard({ teacher }: { teacher: Teacher }) {
  const navigate = useNavigate()
  return (
    <div className='little-card' onClick={() => navigate(`/teacher/${teacher.id}`)}>
      <div className='content-photo'>
        <img src={teacher.avatar} alt="teacher" />
      </div>
      <h3>{teacher.name}</h3>
    </div>
  )
}

export default LittleCard;