export const errorHandler = (data = "", code, message) => {
  return {
    data: data,
    code: code,
    message: message,
  };
};
