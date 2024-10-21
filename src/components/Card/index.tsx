import { ReactNode, HTMLAttributes } from "react";

import * as S from "./styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  innerRef?: (element: HTMLElement | null) => void;
}

const Card = ({ children, innerRef, ...props }: CardProps) => {
  return (
    <S.Card ref={innerRef} {...props}>
      {children}
    </S.Card>
  );
};

export default Card;
