export const getUserById = async (req, res) => {
  const { userDb } = req;

  return res.status(200).json({ user: userDb });
};
