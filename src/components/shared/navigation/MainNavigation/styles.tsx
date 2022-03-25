import styled from 'styled-components';

export const Nav = styled.nav`
  color: white;
  background: #1f6f78;
  height: 4rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
  font-weight: bold;
  font-size: 1.5rem;

  /* @media screen and (max-width: 678px) {
    justify-content: stretch;
  } */
`;

export const NavBarTitle = styled.div`
  padding-left: 1rem;
`;

export const MenuIcon = styled.div`
  padding: 1rem;
`;

export const Avatar = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid grey;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  background-color: grey;
  overflow: hidden;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;