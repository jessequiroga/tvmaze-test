import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

// Main Page Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// Top Search Header Container
export const SearchHeader = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3c948b;
`;

// Top Search Input Box
export const SearchInput = styled.input`
  height: 24px;
  border-radius: 10px 0 0 10px;
  border-right: none;
  padding-left: 12px;
  &:focus {
    outline: none;
  }
`;
// Top Search Button
export const SearchButton = styled.button`
  height: 30px;
  border-radius: 0 10px 10px 0;
  &:focus {
    outline: none;
  }
`;

// Main Content Wrapper
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

// Page Title For "Search Results"
export const PageTitle = styled.h1`
  color: #0a0a0a;
`;

// Filtered show list wrapper
export const ShowListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// One show information block wrapper
export const ShowWrapper = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  ${breakpoint('tablet')`
    flex-direction: row;
    align-items: end;
    border: none;
  `}
`;

// Image - "Show" Image
export const Image = styled.img`
  margin-right: 20px;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
`;

// Show detail information - Name, summary
export const ShowDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

// Show title wrapper
export const ShowTitle = styled.a`
  font-size: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #3c948b;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  display: none;
  ${breakpoint('tablet')`
    display: block;
  `}
`;

// Show network country flag
export const Flag = styled.img`
  margin-left: 10px;
  width: 16px;
`;

// Pagination navigator container
export const Navigator = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

// Navigation buttons
export const NavButton = styled.button`
  height: 20px;
`;

// Navigation label
export const PageNumLabel = styled.h5`
  color: #174677;
  padding: 0 20px;
`;