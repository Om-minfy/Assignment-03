import '../styles/premium.css';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    });
  };

  return (
    <div>
      <h2>Welcome, you are logged in!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}