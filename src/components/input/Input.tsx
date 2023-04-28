import { useState } from "react";
import InputComponent from "./Input.styled";
import { v4 as uuid } from "uuid";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   errorMsg?: string;
}

function Input({ label, errorMsg, ...rest }: InputProps) {
   const [id] = useState(uuid());

   return (
      <InputComponent.Container>
         {label && (
            <InputComponent.Label htmlFor={id}>
               {label}
               {label && (
                  <InputComponent.ErrorMsg>{errorMsg}</InputComponent.ErrorMsg>
               )}
            </InputComponent.Label>
         )}
         <InputComponent.Input id={id} {...rest} />
      </InputComponent.Container>
   );
}

export default Input;
