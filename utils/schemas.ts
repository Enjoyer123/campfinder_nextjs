import {z,ZodSchema} from 'zod';


export const profileSchema = z.object({    

    firstname : z.string().min(2,{message: "First Name must be at least 2 characters long"}),
    lastname : z.string().min(2,{message: "Last Name must be at least 2 characters long"}),
    username : z.string().min(2,{message: "User Name must be at least 2 characters long"}),
})


export const ValidateWithZod = <T>(schema: ZodSchema<T>, data: any):T => {

    const result = schema.safeParse(data);
    if (!result.success) {
       const error =  result.error?.errors.map((error) => error.message); 
        throw new Error(error.join(", "));
    }
    return result.data;


}