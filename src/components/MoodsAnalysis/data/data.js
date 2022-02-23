import { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../../context/appcontext";

export const GetAverageSleptHours = () => {
  const { user } = useContext(AppContext);
  const [averagehours, setAverageHours] = useState(0);

  axios
    .get(`http://localhost:3001/users/average_hours_data/${user.id}`)
    .then((response) => {
      setAverageHours(response.data.averagesleepinghours);
    })
    .catch((error) => {
      console.log(error);
    });

  return averagehours;
};
