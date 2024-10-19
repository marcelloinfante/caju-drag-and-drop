import { ReactNode } from "react";

import { CardMain } from "./styles";

interface CardProps {
  children: ReactNode;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

const Card = ({ children, style }: CardProps) => {
  return <CardMain style={style}>{children}</CardMain>;
};

export default Card;
