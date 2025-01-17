import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import dbConnect from "./mongo";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  "use server";
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const isAdmin = formData.get("isAdmin") === "true"; // Convert to boolean
  const isActive = formData.get("isActive") === "true";

  console.log(formData);

  try {
    await dbConnect();

    const newUser = new User({
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create user");
  }

  //   revalidatePath("http://localhost:3000/dashboard/users");
  redirect("http://localhost:3000/dashboard/users");
};

export const updateUser = async (formData) => {
  "use server";
  const id = formData.get("id");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const address = formData.get("address");
  const isAdmin = formData.get("isAdmin") === "true"; // Convert to boolean
  const isActive = formData.get("isActive") === "true";

  try {
    const updatedFields = {
      username,
      email,
      password,
      phone,
      address,
      isActive,
      isAdmin,
    };
    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );

    await dbConnect();

    await User.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.log(error);
    throw new Error("failed to create user");
  }

  //   revalidatePath("http://localhost:3000/dashboard/users");
  redirect("http://localhost:3000/dashboard/users");
};
export const updateProduct = async (formData) => {
  "use server";
  const id = formData.get("id");
  const title = formData.get("title");
  const desc = formData.get("desc");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const color = formData.get("color");
  const size = formData.get("size");
  const cat = formData.get("cat");

  try {
    const updatedFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    };
    Object.keys(updatedFields).forEach(
      (key) =>
        (updatedFields[key] === "" || undefined) && delete updatedFields[key]
    );

    await dbConnect();

    await Product.findByIdAndUpdate(id, updatedFields);
  } catch (error) {
    console.log(error);
    throw new Error("failed to create user");
  }

  //   revalidatePath("http://localhost:3000/dashboard/users");
  redirect("http://localhost:3000/dashboard/products");
};

export const addProduct = async (formData) => {
  "use server";
  const title = formData.get("title");
  const desc = formData.get("desc");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const color = formData.get("color");
  const size = formData.get("size");
  const cat = formData.get("cat");

  console.log(formData);

  try {
    await dbConnect();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
      cat,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("failed to create product");
  }

  //   revalidatePath("http://localhost:3000/dashboard/users");
  redirect("http://localhost:3000/dashboard/products");
};

export const deleteProduct = async (formData) => {
  "use server";
  const id = formData.get("id");

  console.log(formData);

  try {
    await dbConnect();

    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to create product");
  }

  revalidatePath("http://localhost:3000/dashboard/products");
  // redirect("http://localhost:3000/dashboard/products");
};

export const deleteUser = async (formData) => {
  "use server";
  const id = formData.get("id");

  console.log(formData);

  try {
    await dbConnect();

    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("failed to create user");
  }

  revalidatePath("http://localhost:3000/dashboard/users");
  // redirect("http://localhost:3000/dashboard/products");
};
