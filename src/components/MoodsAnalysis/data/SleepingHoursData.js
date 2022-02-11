import { useContext, useState } from "react";
import { MoodContext } from "../../../context/moodcontext";

export const SleepingHoursData = () => {
  const { moods } = useContext(MoodContext);
  const [sleptHours, setSleptHours] = useState(0);

  const isEmpty = Object.keys(moods).length === 0;

  isEmpty
    ? setSleptHours(0)
    : moods.map((mood) => {
        console.log(mood.hours_slept);
        return setSleptHours(mood.hours_slept);
      });

  console.log("Hours Slept Array", sleptHours);
};
