export const setIndex = (setIndexState) => {
  const today = new Date().getDate();

  const dayBeforeString = localStorage.getItem("today");
  const dayBefore = dayBeforeString ? JSON.parse(dayBeforeString) : null;

  if (dayBefore && Array.isArray(dayBefore)) {
    if (dayBefore[0] !== today) {
      localStorage.setItem("today", JSON.stringify([today, dayBefore[1] + 1]));
      setIndexState(dayBefore[1] + 1);
    }
  } else {
    localStorage.setItem("today", JSON.stringify([today, 0]));

    setIndexState(dayBefore ? dayBefore[1] : 0);
  }
};
