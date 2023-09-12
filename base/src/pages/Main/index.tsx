import { useNavigate } from "react-router-dom";
import { getToken } from '../../utils/storage';
import './styles.css';

function Main() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='main'>
        <p>{getToken('token')}</p>
      </div>
    </div>
  );
}

export default Main;
