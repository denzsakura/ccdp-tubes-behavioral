const addWeeksToDate = (dateObj: Date, numberOfWeeks: number) => {
  dateObj.setDate(dateObj.getDate() + numberOfWeeks * 7);
  return dateObj;
};

export { addWeeksToDate };
