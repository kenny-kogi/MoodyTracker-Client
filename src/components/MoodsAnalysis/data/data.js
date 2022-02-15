import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";

export const GetSleepingHoursData = () => {
  const { user } = useContext(AppContext);
  const [hours_data, setHoursData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/hours_data/${user.id}`)
      .then((response) => {
        setHoursData(response.data.sleepinghoursdata);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return hours_data;
};
