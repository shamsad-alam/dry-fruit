import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiDatafetch() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
        setUserData(response.data);
        console.log(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* UserData ko render karein */}
          <h2>User Name: {userData.about}</h2>
          <p>Email: {userData.email}</p>
          {/* Aur baki ka data */}
        </div>
      )}
    </div>
  );
}

export default ApiDatafetch;
