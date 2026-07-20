export const publicInfo = (req, res) => {
  res.status(200).json({
    message: "Welcome stranger! This info is public."
  });
};