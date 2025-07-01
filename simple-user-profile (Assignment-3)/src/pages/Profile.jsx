import '../styles/premium.css';
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Profile() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, [currentUser]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <h1>Profile Page</h1>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>UID:</strong> {currentUser.uid}</p>
      <p><strong>Signed Up On:</strong> {userData.createdAt?.toDate().toString()}</p>
    </div>
  );
}

export default Profile;