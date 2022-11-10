import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSreset";
import Menu from "../src/components/Menu";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.header`
  .header__avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .header__user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <img className="header__banner" src="banner" />
      <section className="header__user-info">
        <img className="header__avatar" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

//statement
//retorno por expressão
function TimeLine(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
