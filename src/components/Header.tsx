import styled from '@emotion/styled';
import {AiOutlineSearch} from 'react-icons/ai'

const Base = styled.header`
position: fixed;
top: 0;
left: 0;
background-color: white;
text-align: center;
box-shadow: rgb(0 0 0 / 0%) 0 px 1px 0px 0px;
width: 100%;
height: 62px;
z-index: 10;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;

const MenyListWrapper = styled.div``;

const MenuList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
display: flex;
overflow: hidden;
`;

const Menu = styled.li`
display:flex;
align-items: center;
height: 62px;
flex-shrink: 0;
/* 첫 번째 항목이 아닐 때 */
&:not(:first-child) {
  margin-left: 24px;
}
`;

const MenuButton = styled.button<{active?: boolean}>`
  font-size: 15px;
  color : ${({active}) => active ? `rgb(53,53,53)` : `rgb(126,126,126)`};
  cursor: pointer;
  border: none;
  background: none;
`;

const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  /* []로 조건을 줄 수 있다. Props도 가능할 듯. */
  > span[className="primary"] {
    color: rgb(255,47,110);
  }
  >span:not(.primary) {
    color: #222;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.div``;

const SearchLabel = styled.label`
  background : rgb(245,245,247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  /* 검색어가 길어질 경우를 대비 */
  text-overflow: ellipsis;
  overflow: hidden;
  caret-color: rgb(53,53,53);
  line-height: 23px;
`;

const SignIn = styled.button`
  background: transparent;
  color: rgb(116,116,123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;

const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53,53,53);
  font-size: 14px;
  border: 1px solid rgba(116,116,123,.5);
  cursor: pointer;
  margin: 15px 0;
`;

const Header:React.FC = () => {
  const handleKeyword = () => {}


  return (
    <Base>
      <Navigation>
        <MenyListWrapper>
          <MenuList>
            <Menu>
              <Link href='/'>
                <TextLogo>
                  <span className='primary'>WATchOUT</span>
                  <span>Pedia</span>
                </TextLogo>
              </Link>
            </Menu>
            <Menu>
              <Link href='/movie'>
                <MenuButton>영화</MenuButton>
              </Link>
              <Link href='/tv'>
                <MenuButton>TV프로그램</MenuButton>
              </Link>
            </Menu>
            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLabel>
                      <AiOutlineSearch />
                      <SearchInput placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해 보세요.' onChange={handleKeyword} />
                    </SearchLabel>
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>
            </SearchMenu>
            <Menu>
              <SignIn>로그인</SignIn>
            </Menu>
            <Menu>
              <SignUp>회원가입</SignUp>
            </Menu>
          </MenuList>
        </MenyListWrapper>
      </Navigation>
    </Base>
  )
}

export default Header;