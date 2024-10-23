import * as S from "./styles";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <S.IconButton data-testid="icon-button" {...props}>
      {children}
    </S.IconButton>
  );
};

export default IconButton;
