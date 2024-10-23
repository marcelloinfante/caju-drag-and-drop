import * as S from "./styles";

const Loading = () => {
  return (
    <S.LoaderBackground data-testid="loading">
      <S.LoaderComponent />;
    </S.LoaderBackground>
  );
};

export default Loading;
