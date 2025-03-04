import { User, Products, Product } from "./models";
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
export const fetchUser = async (id) => {
  try {
    await dbConnect();
    // const count = await User.countDocuments({ username: { $regex: regex } });
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch user");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");

  const Item_per_page = 2;

  try {
    await dbConnect();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(Item_per_page)
      .skip(Item_per_page * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch products");
  }
};

export const fetchProduct = async (id) => {
  try {
    await dbConnect();

    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch product");
  }
};
