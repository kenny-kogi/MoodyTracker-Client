const handleColorChange = (v) => {
  let color = "";

  const moodcolor = {
    none: "grey",
    mild: "yellow",
    moderate: "green",
    severe: "red",
  };

  if (v === 0) {
    color = moodcolor.none;
  } else if (v === 1) {
    color = moodcolor.mild;
  } else if (v === 2) {
    color = moodcolor.moderate;
  } else if (v === 3) {
    color = moodcolor.severe;
  }

  return color;
};

export default handleColorChange;
