import * as S from "./styles";

const IconButton = ({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <S.IconButton data-testid="icon-button" {...props}>
      {children}
    </S.IconButton>
  );
};

export default IconButton;
