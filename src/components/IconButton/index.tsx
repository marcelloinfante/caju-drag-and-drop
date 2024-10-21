import * as S from "./styles";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <S.IconButton {...props}>{children}</S.IconButton>;
};

export default IconButton;
