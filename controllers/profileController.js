export const publicInfo = (req, res) => {
  res.status(200).json({
    message: "Welcome stranger! This is public information.",
  });
};

export const protectedProfile = (req, res) => {
  res.status(200).json({
    message: "Protected profile route",
  });
};