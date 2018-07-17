import React, { Component, Fragment } from 'react'
import Episode from './Episode'
import Characters from './Characters'
import {
  totesRandom,
  episodesURL,
  charURL,
  fetchData,
  episodeURL,
  getIds
} from './utils'

class App extends Component {
  state = {
    episode: {},
    episodeNumber: null,
    chars: [],
    empty: true
  }

  loadEpisodeNumbers = async () => {
    const {
      info: { count }
    } = await fetchData(episodesURL)

    this.setState({
      episodeNumber: totesRandom(count),
      chars: []
    })
  }

  getChar = async ids => {
    const chars = await fetchData(charURL(ids))

    this.setState({ chars })
  }

  loadEpisode = async () => {
    // Load number of episodes
    await this.loadEpisodeNumbers()
    const { episodeNumber } = this.state
    const episode = await fetchData(episodeURL(episodeNumber))

    // get all charecters in episode
    this.getChar(getIds(episode))

    this.setState({
      empty: false,
      episode: {
        name: episode.name,
        date: episode.air_date,
        episode: episode.episode
      }
    })
  }

  render() {
    const { episode, chars, empty } = this.state
    return (
      <div className="App">
        {episode.name && chars.length > 0 ? (
          <Fragment>
            <Episode {...episode} />
            <Characters chars={chars} />
          </Fragment>
        ) : null}
        {empty ? (
          <h3 className="f2 tc mb3 f1-m f-headline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1">
              Get a random Rick and Morty Episode
            </span>
          </h3>
        ) : null}
        <button
          className="pointer btn f6 link dim br1 ph3 pv2 mb2 dib black bg-white"
          onClick={() => this.loadEpisode()}
        >
          Get Episode
        </button>
      </div>
    )
  }
}

export default App
