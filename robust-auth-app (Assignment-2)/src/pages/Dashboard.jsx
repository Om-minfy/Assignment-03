import '../styles/premium.css';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!currentUser.emailVerified) {
    return <p>Please verify your email to access the dashboard.</p>;
  }

  return (
    <div className="page-container">
      <h1>Welcome to Dashboard</h1>
      <p>You are logged in as <strong>{currentUser.email}</strong></p>
      <button onClick={() => navigate("/profile")}>Go to Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;