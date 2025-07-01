import '../styles/premium.css';
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { currentUser } = useAuth();

  return (
    <div className="page-container">
      <h1>Profile Page</h1>
      <p><strong>Email:</strong> {currentUser.email}</p>
      <p><strong>UID:</strong> {currentUser.uid}</p>
    </div>
  );
}

export default Profile;