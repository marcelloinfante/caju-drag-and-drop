import { HTMLAttributes } from "react";

import * as S from "./styles";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  innerRef?: (element: HTMLElement | null) => void;
}

const Card = ({ children, innerRef, ...props }: CardProps) => {
  return (
    <S.Card data-testid="card" ref={innerRef} {...props}>
      {children}
    </S.Card>
  );
};

export default Card;
