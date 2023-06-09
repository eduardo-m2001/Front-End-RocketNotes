import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};

    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  gap: 2rem;


  > li {
    list-style: none;
    font-weight: 400;

    line-height: 2.1rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
  }


`
export const Search = styled.div`
  grid-area: search;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 6.4rem 6.4rem 0;
  height: 5.6rem;
  border-radius: 10px;


`
export const Content = styled.div`
  grid-area: content;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  padding: 0 6.4rem;
  overflow-y: auto;
`
export const NewNote = styled(Link)`
  grid-area: newnote;
  border: none;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};;
  
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    gap: .8rem;

      span {
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 2.6rem;
      }
  }


`

