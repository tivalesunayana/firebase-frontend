import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/'); 
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut(); 
      navigate('/'); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="containerdash">
    <h1 className="dashboard-title">Welcome to the Dashboard, {user && user.displayName}!</h1>
    <button className="logout-btn" onClick={handleLogout}>Logout</button>
  </div>
  );
}

export default Dashboard;
