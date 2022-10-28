import { BallTriangle } from 'react-loader-spinner';
import { DivStyled } from './Loader.styled';

export const Loader = () => (
  <DivStyled>
    <BallTriangle color="#3f51b5" height={200} width={200} />
  </DivStyled>
);
