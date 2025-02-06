import React, { useState, useEffect } from "react";
import axios from "axios";

function Homescreen() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/rooms");
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Homescreen</div>;
}

export default Homescreen;
