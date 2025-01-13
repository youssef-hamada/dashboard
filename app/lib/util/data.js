import { User } from "./models";
import dbConnect from "./mongo";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const Item_per_page = 2;

  try {
    await dbConnect();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(Item_per_page)
      .skip(Item_per_page * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
};
