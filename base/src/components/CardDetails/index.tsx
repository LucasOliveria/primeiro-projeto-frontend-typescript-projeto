import { Teacher } from '../../types/types';
import './style.css';

function CardDetails({ teacher }: { teacher: Teacher }) {

  return (
    <div className='card-details'>
      <img src={teacher?.avatar} alt="teacher Photo" />
      <h3>{teacher?.name}</h3>
      <p>{teacher?.stack}</p>
      <div className='line'></div>
      <h4>Bio</h4>
      <div className='container-about'>
        <p>{teacher?.bio}</p>
      </div>
    </div>
  )
}

export default CardDetails;