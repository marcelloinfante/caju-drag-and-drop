import { ReactNode, HTMLAttributes } from "react";

import { CardMain } from "./styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  innerRef?: (element: HTMLElement | null) => void;
}

const Card = ({ children, innerRef, ...props }: CardProps) => {
  return (
    <CardMain ref={innerRef} {...props}>
      {children}
    </CardMain>
  );
};

export default Card;
