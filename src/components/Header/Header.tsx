<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

import * as S from './Header.style';
import BACK from '../../assets/chevron-back.svg?react';

type HeaderType = 'logo' | 'back' | null;
=======
import * as S from './Header.style';

import BACK from '../../assets/chevron-back.svg';
import { useNavigate } from 'react-router-dom';

type HeaderType = 'logo' | 'back';
>>>>>>> todari

interface HeaderProps {
  type?: HeaderType;
}

const Header = ({ type = 'logo' }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.Header>
<<<<<<< HEAD
      <S.PrefixButton onClick={() => navigate('/')}>
        {type === 'logo' ? (
          <S.Logo>SHOP</S.Logo>
        ) : type === 'back' ? (
          <BACK className="icon-small" />
        ) : null}
=======
      <S.PrefixButton onClick={type === 'back' ? () => navigate(-1) : () => {}}>
        {type === 'logo' ? (
          <S.Logo>SHOP</S.Logo>
        ) : (
          <S.SvgContainer src={BACK} alt="chevron-back" />
        )}
>>>>>>> todari
      </S.PrefixButton>
    </S.Header>
  );
};

export default Header;
