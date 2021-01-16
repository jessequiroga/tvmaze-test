import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchShowInfo, fetchEpisodes } from "redux/actions";
import { getCurrentShowInfo, getEpisodes } from "redux/selectors";
import * as Style from "./style.js";
import { NO_IMAGE_URL } from "common/constants.js";

const TVShowInfo = props => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const show = useSelector(getCurrentShowInfo); // get current show information
  const episodes = useSelector(getEpisodes);  // get fetched episode list

  const [seasonNum, setSeasonNum] = useState(1);  // Season Number in Pagination

  if (!parseInt(id)) {
    // if URL is not correct redirect it to home page
    window.location.href = "/";
  }

  useEffect(() => {
    // fetch show information, and episode list
    dispatch(fetchShowInfo(parseInt(id)));
    dispatch(fetchEpisodes(parseInt(id)));
  }, []);

  // If not fetched data, return it
  if (!show) {
    return null;
  }
  if (!episodes.length) {
    return null;
  }

  // Season Navigation - Prev
  const onPrevPage = () => {
    if (seasonNum === 1) {
      return;
    }
    setSeasonNum(seasonNum - 1);
  };
  // Season Navigation - Prev
  const onNextPage = () => {
    if (!episodes.filter(item => item.season === seasonNum + 1).length) {
      return;
    }
    setSeasonNum(seasonNum + 1);
  };
  
  return (
    <Style.Container>
      <Style.Body>
        <Style.PageTitle>{show.name}</Style.PageTitle>
        <Style.ShowListContainer>
          <Style.ShowWrapper key={show.id}>
            <Style.Image
              src={show.image ? show.image.medium : NO_IMAGE_URL}
            />
            <Style.ShowDetail>
              {show.summary && (
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
              )}
            </Style.ShowDetail>
          </Style.ShowWrapper>
          <Style.ListTitle>Season {seasonNum}</Style.ListTitle>
          <Style.ShowListContainer>
            {episodes
              .filter(episode => episode.season === seasonNum)
              .map(episode => (
                <Style.EpisodeWrapper key={episode.id}>
                  <Style.Image
                    src={episode.image ? episode.image.medium : NO_IMAGE_URL}
                    alt="No Image"
                  />
                  <Style.ShowDetail>
                    <Style.ShowTitle>Episode {episode.number} - {episode.name}</Style.ShowTitle>
                    {episode.summary && (
                      <div
                        dangerouslySetInnerHTML={{ __html: episode.summary }}
                      />
                    )}
                  </Style.ShowDetail>
                </Style.EpisodeWrapper>
              ))}
          </Style.ShowListContainer>
        </Style.ShowListContainer>
        <Style.Navigator>
          <Style.NavButton onClick={onPrevPage}>Prev</Style.NavButton>
          <Style.PageNumLabel>
            {seasonNum} / {Math.max(...episodes.map(item => item.season))}
          </Style.PageNumLabel>
          <Style.NavButton onClick={onNextPage}>Next</Style.NavButton>
        </Style.Navigator>
      </Style.Body>
    </Style.Container>
  );
};

export default TVShowInfo;
