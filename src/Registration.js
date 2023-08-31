import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { getMessaging, getToken } from "firebase/messaging";
// import { auth, messaging } from "./firebaseConfig";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableNotifications, setEnableNotifications] = useState(false);

  useEffect(() => {
    const messaging = getMessaging();
    getToken(messaging)
      .then((currentToken) => {
        if (currentToken) {
          console.log("FCM Token:", currentToken);
        } else {
          console.log("No registration token available.");
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token.", err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const token = await getToken(messaging);

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      await axios.post("http://localhost:5000/api/register", {
        userId: user.uid,
        name,
        email,
      });

      await axios.post("http://localhost:5000/api/notification-preferences", {
        userId: user.uid,
        enableNotifications,
      });

      console.log("User registered successfully");
      alert("User registered successfully");
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };
  return (
    <div className="containereg">
      <div className="innerBox">
        <form onSubmit={handleSubmit} className="innerBoxreg">
          <h2>Registration</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            Enable Notifications:
            <input
              type="checkbox"
              checked={enableNotifications}
              onChange={(e) => setEnableNotifications(e.target.checked)}
            />
          </label>
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
