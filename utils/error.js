export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = "sorry not found";
  return err;
};
