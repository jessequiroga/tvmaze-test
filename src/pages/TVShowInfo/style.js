import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';

// Main Page Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

// Verically arranged list container
export const ShowListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// One show information block wrapper
export const ShowWrapper = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  background: #eeeeee;
  border: 4px solid #174677;
  flex-direction: column;
  align-items: center;
  ${breakpoint('tablet')`
    flex-direction: row;
    align-items: end;
  `}
`;

// One episode information block wrapper
export const EpisodeWrapper = styled.div`
  display: flex;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #174677;
  border-radius: 10px;
  ${breakpoint('tablet')`
    flex-direction: row;
    align-items: end;
    border: none;
  `}
`;

// Image - "Show" Image, "Episode" Image
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
  margin-bottom: 0px;
  cursor: pointer;
  color: #3c948b;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;
  ${breakpoint('tablet')`
    margin-top: 0px;
    margin-bottom: 20px;
    text-align: left;
  `}
`;

// Episode List Title - Season #NUM
export const ListTitle = styled.h2`
  padding: 20px;
  cursor: pointer;
  color: #3c948b;
  border: 1px solid;
  text-decoration: none;
  text-align: center;
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