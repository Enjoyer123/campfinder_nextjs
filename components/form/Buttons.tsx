"use client"

import { RotateCw } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button"

type btnSize = 'default' | 'sm' | 'lg';

type SubmitButtonProps = {
    className?: string;
    size?: btnSize;
    text?: string;

}

export const SubmitButton = (props: SubmitButtonProps) => {
    const { className, size, text } = props;

    const { pending } = useFormStatus();
    return (
        <Button
            className={`${className}` + "text-white font-bold py-2 px-4 rounded " + (size === 'lg' ? 'w-full' : '')}
            disabled={pending}
            type="submit"
        >

            {
                pending ? (
                    <RotateCw className="animate-spin" />
                ) : (
                    <span>{text}</span>
                )
            }
        </Button>
    )
}