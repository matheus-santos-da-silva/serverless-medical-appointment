export const validateData = ({ name, doctorName, date }) => {
  if (!name || !doctorName || !date) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing data, please check and try again!",
      }),
    };
  }

  if (typeof name != "string" || typeof doctorName != "string" || typeof date != "string") {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid Data Type, please check and try again!",
      }),
    };
  }

  return {
    name,
    doctorName,
    date,
  };
};
