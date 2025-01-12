import { User } from "./models";
import dbConnect from "./mongo";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    await dbConnect();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(err);
    throw new Error("failed to fetch users");
  }
};
