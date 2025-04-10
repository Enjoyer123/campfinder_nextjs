"use server"

import { profileSchema, ValidateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { string } from "zod";
import db from "@/utils/db";
import { redirect } from "next/navigation";

const getAuthUser = async () => {
    const user = await currentUser();
    console.log(user);
    if (!user) {
        throw new Error("User not authenticated");
    }

    if(!user.privateMetadata.hasProfile) redirect("/profile/create");
    return user;
}



const renderError = (error: unknown): { message: string } => {


    return {
        message: error instanceof Error ? error.message : "An Error occured!!",
    }
}

export const CreateProfileAction = async (prevState: any, formData: FormData) => {

    try {

        const user = await getAuthUser();
        const rawData = Object.fromEntries(formData.entries());
        const validateField = ValidateWithZod(profileSchema, rawData);

        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage: user.imageUrl ?? " ",
                firstName: validateField.firstname,
                lastName: validateField.lastname,
                userName: validateField.username
            }
        });


        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {

            privateMetadata: {
                hasProfile: true,
            },
        })


    } catch (error) {
        // console.log(error);
        return renderError(error);
    }

    redirect("/");


}