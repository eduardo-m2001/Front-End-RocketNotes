import styled from 'styled-components'

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
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

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

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    list-style: none;
    margin-top: 6.4rem;

  }

  > li {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
  }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      text-decoration: none;
    }

    li:first-child {
        a {
          color: ${({ theme }) => theme.COLORS.ORANGE};
        }
    }


`
export const Search = styled.div`
  grid-area: search;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 6.4rem 6.4rem;
  height: 5.6rem;
  border-radius: 10px;
  
  

  > input { 
    width: 100%;
    height: 5.6rem;
    background: #232129;
    border-radius: 10px;
    border: none;

    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    padding-left: 1.6rem;

  }
  
`
export const Content = styled.div`
  grid-area: content;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  margin: 2rem 6.4rem 0 6.4rem;

  > Section {
    > div {
      width: 100%;
      height: 11.2rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      padding-left: 2.2rem;
      margin-bottom: 1.6rem;
      border-radius: 10px;

      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 2.9rem;

      > div.tags {
        display: flex;
        gap: .6rem;
      }
        span {
        width: 6.4rem;
        height: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`
export const NewNote = styled.button`
  grid-area: newnote;
  border: none;
  background: ${({ theme }) => theme.COLORS.ORANGE};
  
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

      span {
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 2.6rem;
      }
  }


`

