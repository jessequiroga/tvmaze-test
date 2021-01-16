import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchShows } from "redux/actions";
import { getSearchedShows } from "redux/selectors";
import * as Style from "./style.js";
import { NO_IMAGE_URL } from "common/constants.js";

const SHOWS_PER_PAGE = 5;

const TVShowList = () => {
  const dispatch = useDispatch();
  const tvShows = useSelector(getSearchedShows); // get fetched show list
  const searchKeywordRef = useRef(null);

  const [pageNum, setPageNum] = useState(1); // page num of Pagination
  
  useEffect(() => {
    // fetch the show list at first
    dispatch(searchShows(""));
  }, []);

  // dispatch event when press search button
  const onSearchShows = () => {
    const keyword = searchKeywordRef.current.value;
    dispatch(searchShows(keyword));
    setPageNum(1);
  };

  // Pagination - Prev
  const onPrevPage = () => {
    if (pageNum === 1) {
      return;
    }
    setPageNum(pageNum - 1);
  };
  // Pagination - Next
  const onNextPage = () => {
    const pageCount = Math.ceil(tvShows.length / SHOWS_PER_PAGE);
    if (pageNum === pageCount) {
      return;
    }
    setPageNum(pageNum + 1);
  };
  // Hook the Search Input Key press event - If enter is inputed, then call the search function 
  const _onKeyDown = e => {
    if (e.keyCode === 13) {
      onSearchShows();
    }
  };

  return (
    <Style.Container>
      <Style.SearchHeader>
        <Style.SearchInput ref={searchKeywordRef} onKeyDown={_onKeyDown} />
        <Style.SearchButton onClick={onSearchShows}>Search</Style.SearchButton>
      </Style.SearchHeader>
      <Style.Body>
        <Style.PageTitle>Search Results</Style.PageTitle>
        <Style.ShowListContainer>
          {tvShows
            .slice(
              pageNum * SHOWS_PER_PAGE - SHOWS_PER_PAGE,
              pageNum * SHOWS_PER_PAGE
            )
            .map(show => (
              <Style.ShowWrapper key={show.id}>
                <Style.Image
                  src={show.image ? show.image.medium : NO_IMAGE_URL}
                  alt="No Image"
                />
                <Style.ShowDetail>
                  <Style.ShowTitle href={`/shows/${show.id}`}>
                    {show.name}
                    {show.network &&
                      show.network.country &&
                      show.network.country.code && (
                        <Style.Flag
                          src={`http://static.tvmaze.com/intvendor/flags/${show.network.country.code.toLowerCase()}.png`}
                        />
                      )}
                  </Style.ShowTitle>
                  {show.summary && (
                    <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                  )}
                </Style.ShowDetail>
              </Style.ShowWrapper>
            ))}
        </Style.ShowListContainer>
        <Style.Navigator>
          <Style.NavButton onClick={onPrevPage}>Prev</Style.NavButton>
          <Style.PageNumLabel>{`${pageNum} / ${Math.ceil(
            tvShows.length / SHOWS_PER_PAGE
          )}`}</Style.PageNumLabel>
          <Style.NavButton onClick={onNextPage}>Next</Style.NavButton>
        </Style.Navigator>
      </Style.Body>
    </Style.Container>
  );
};

export default TVShowList;
