import { revalidatePath } from "next/cache";
import { User } from "./models";
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
