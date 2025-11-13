import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiCalling = ({ API, onData }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data);
        if (onData) onData(res.data); 
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API]);
  return null; 
};

export default ApiCalling;
