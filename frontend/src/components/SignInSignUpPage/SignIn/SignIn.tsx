import { useState } from 'react';
import styles from './SignIn.module.css';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type SignInFormData = {
  email: string;
  password: string;
};

const defaultFormData = {
  email: '',
  password: ''
};

const SignIn: React.FC = () => {
  const [signInFormData, setSignInFormData] = useState<SignInFormData>(defaultFormData);
  const { signIn, error } = useAuth(); // Get signIn function and error message from AuthContext

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setSignInFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn(signInFormData.email, signInFormData.password); // Use signIn from AuthContext
    navigate('/users/me')
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInCard}>
        <form className={styles.signInForm} onSubmit={handleSubmit}>
          <label>Email</label> <br />
          <input 
            placeholder='user@example.com' 
            name='email' 
            type='email' 
            value={signInFormData.email}
            onChange={handleFormChange}
          /><br />
          <label>Password</label> <br />
          <input 
            placeholder='******' 
            name='password' 
            type='password' 
            value={signInFormData.password}
            onChange={handleFormChange}
          /><br />
          <button>Sign In</button>
        </form>
      </div>
      {error && 
        <p className={styles.errorMsg}>
          {error}
        </p>
      }
    </div>
  );
};

export default SignIn;
