import Typography from "~/components/Typography";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        {/* TODO: h1 component */}
        <Typography variant="h2" color="white">
          Caju Drag-and-Drop
        </Typography>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
