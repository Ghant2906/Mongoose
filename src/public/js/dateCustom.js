const convertDate = (date) => {
  // Input date string

  // Create a Date object from the input string
  const dateObject = new Date(date);

  // Extract day, month, and year components
  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1; // Months are zero-based, so add 1
  const year = dateObject.getUTCFullYear();

  // Format the date as "yyyy-mm-dd"
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
  return formattedDate;
};
export default convertDate;
