import ButtonComponents from "./Button.styled";

interface ButtonProps {
   onClick: () => void;
   children: React.ReactNode;
   color: string;
   textColor: string;
   disabled?: boolean;
}

function Button({
   onClick,
   children,
   color,
   textColor,
   disabled,
}: ButtonProps) {
   return (
      <ButtonComponents.Container
         bgColor={color}
         textColor={textColor}
         onClick={onClick}
         disabled={disabled}
      >
         <ButtonComponents.Text>{children}</ButtonComponents.Text>
      </ButtonComponents.Container>
   );
}

export default Button;
