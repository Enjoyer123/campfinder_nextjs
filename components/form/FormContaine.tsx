"use client"
import { use, useActionState } from "react"
import { toast } from "sonner"
import { useEffect } from "react"
import { stat } from "fs"

const innitialState = {
    message: "",

}


import { actionFunction } from "@/utils/types"

const FormContainer = ({ action, children }: { action: actionFunction , children: React.ReactNode }) => {
    const [state, formAction] = useActionState(action, innitialState)


    useEffect(() => {
        if (state.message) {
            toast("Meaage", {
                description: state.message,
                duration: 5000,

            })
        }
    }, [state])




    return (

        <form action={formAction}>

            {children}
        </form>
    )
}
export default FormContainer