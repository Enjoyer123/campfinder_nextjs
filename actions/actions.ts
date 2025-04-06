"use server"

import { profileSchema, ValidateWithZod } from "@/utils/schemas";
import { string } from "zod";


const renderError = (error: unknown):{ message : string } => {


    return {
        message: error instanceof Error ? error.message : "An Error occured!!",                               
    }
}

export const CreateProfileAction = async (prevState:any,formData: FormData) => {
    
    try {
        const rawData = Object.fromEntries(formData.entries());
        const validateField = ValidateWithZod(profileSchema,rawData);
        console.log(validateField);
        return {message: "Profile Created"}

    }catch (error) {
        console.log(error); 
        return renderError(error);
    }
    


   return {message: "Profile Created"}

}