import React, { Component, Fragment } from 'react'
import Episode from './Episode'
import Characters from './Characters'

const totesRandom = n => Math.floor(Math.random() * n) + 1

class App extends Component {
  state = {
    episode: {},
    numberOfEpsisodes: 0,
    chars: [],
    empty: true
  }

  loadEpisodeNumbers = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/episode/')
    const json = await data.json()

    this.setState({
      episodeNumber: totesRandom(json.info.count),
      chars: [],
      character: {}
    })
  }

  getChar = async ids => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/${ids}`)
    const chars = await data.json()

    this.setState({ chars })
  }

  loadEpisode = async () => {
    await this.loadEpisodeNumbers()
    const { episodeNumber } = this.state
    const data = await fetch(
      `https://rickandmortyapi.com/api/episode/${episodeNumber}`
    )
    const episode = await data.json()

    const ids = episode.characters.map(c => parseInt(c.match(/\d+$/)))
    this.getChar(ids)

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
          <h3 class="f2 tc mb3 f1-m f-headline-l measure-narrow lh-title mv0">
            <span class="bg-black-90 lh-copy white pa1">
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
