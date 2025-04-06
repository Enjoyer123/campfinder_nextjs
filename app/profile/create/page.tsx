
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";

import FormContainer from "@/components/form/FormContaine";
import { Tiro_Tamil } from "next/font/google";
import { title } from "process";
import { CreateProfileAction } from "@/actions/actions";


const CreateProfile = () => {
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">New user</h1>
            <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
                
                <FormContainer action={CreateProfileAction}>

                
                    <div className="grid grid-cols-1 gap-4 mb-4">

                        <FormInput name="firstname" label="First Name" placeholder="First Name" type="text" />
                        <FormInput name="lastname" label="Last Name" placeholder="Last Name" type="text" />
                        <FormInput name="username" label="User Name" placeholder="User Name" type="text" />
                    </div>
                    <SubmitButton text="Create Profile" size="lg" />
                
                </FormContainer>
            </div>



        </section>
    )
}
export default CreateProfile