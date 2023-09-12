import './styles.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type FormLogin = {
  email: string,
  password: string
}

function SignIn() {
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });

  function handleFormLogin(event: any) {
    setFormLogin({ ...formLogin, [event?.target.name]: event?.target.value })
  }
  return (
    <div className="generic-container">
      <div className='container-form-signin'>
        <img src={logo} alt="logo" />
        <form className='form-signin'>
          <input type="email" name="email" value={formLogin.email} placeholder='E-mail' autoComplete='true' onChange={handleFormLogin} />
          <input type="password" name="password" value={formLogin.password} placeholder='Password' autoComplete='true' onChange={handleFormLogin} />
          <span>Não tem cadastro? <Link to={"/"}>Clique aqui!</Link></span>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;