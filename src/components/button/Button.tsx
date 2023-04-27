import ButtonComponents from "./Button.styled";

interface ButtonProps {
   onClick: () => void;
   children: React.ReactNode;
   color: string;
   textColor: string;
}

function Button({ onClick, children, color, textColor }: ButtonProps) {
   return (
      <ButtonComponents.Container
         bgColor={color}
         textColor={textColor}
         onClick={onClick}
      >
         <ButtonComponents.Text>{children}</ButtonComponents.Text>
      </ButtonComponents.Container>
   );
}

export default Button;
