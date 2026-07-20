export const profile = (req, res) => {
  return res.status(200).json({
    message: "Profile fetched successfully",
    user: {
      id: req.user.id,
      email: req.user.email,
      created_at: req.user.created_at,
    },
  });
};