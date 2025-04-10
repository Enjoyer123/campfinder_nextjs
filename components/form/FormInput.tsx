
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type FormInputProps = {
    name: string;
    type?: string;
    label?: string;
    defaltValue?: string;
    placeholder?: string;

}

const FormInput = (props:FormInputProps) => {

    const {name ,type, label ,defaltValue,placeholder } = props;
    

    return (
        <div className="mb-2">
            <Label htmlFor={name} className="mb-2">{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} defaultValue={defaltValue} className="w-full" />

        </div>
    )
}
export default FormInput