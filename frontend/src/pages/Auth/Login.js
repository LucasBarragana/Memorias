import "./Auth.css";

// Components
import Message from "../../components/Message";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { login, reset } from "../../slices/authSlice";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(login(user));
  };

  // Clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className="back">
      <img src="back.png" alt="" />
      <div id="login">
        <div className="logo">
          <img src="logo.png" alt="logo"/>
        </div>
        <p className="subtitle">Faça o login para ver o que há de novo e guardar suas memórias.</p>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!loading && <input type="submit" value="Entrar" />}
            {loading && <input type="submit" disabled value="Aguarde..." />}
            {error && <Message msg={error} type="error" />}
          </form>      
        </div>        
      </div>
    </div>
    
  );
};

export default Login;
