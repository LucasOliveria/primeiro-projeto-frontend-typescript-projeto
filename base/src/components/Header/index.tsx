import './style.css';
import Logo from '../../assets/logo.svg'
import Arrow from '../../assets/arrow.svg'
import { useNavigate } from 'react-router-dom';

function Header({ arrow }: { arrow?: boolean }) {
  const navigate = useNavigate();

  return (
    <div className='container-header'>
      {arrow && <img src={Arrow} alt="arrow" onClick={() => navigate('/main')} />}
      <img src={Logo} alt="logo" />
    </div>
  )
}

export default Header;