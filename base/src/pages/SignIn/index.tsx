import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import { setToken, getToken } from '../../utils/storage';
import './styles.css';

type FormLogin = {
  email: string,
  password: string
}

function SignIn() {
  const [formLogin, setFormLogin] = useState<FormLogin>({
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!formLogin.email || !formLogin.password) {
      return console.log("Informe o E-mail e Senha");
    }
    try {
      const response = await api.post('/login', {
        email: formLogin.email,
        password: formLogin.password
      });

      setToken('token', response.data.accessToken);
      navigate('/main');
      setFormLogin({
        email: '',
        password: ''
      })
    } catch (error: any) {
      console.log(error.response.data);
    }
  }
  function handleFormLogin(event: ChangeEvent<HTMLInputElement>) {
    setFormLogin({ ...formLogin, [event.target.name]: event.target.value })
  }
  useEffect(() => {
    getToken('token') ? navigate('/main') : navigate('/');
  }, []);

  return (
    <div className="generic-container container-signin">
      <div className='container-form-signin'>
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit} className='form-signin'>
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