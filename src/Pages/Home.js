import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { totesRandom, episodesURL, fetchData } from '../utils'

class Home extends Component {
  state = {
    episode: {},
    episodeNumber: null,
    chars: [],
    empty: true
  }

  componentDidMount() {
    this.loadEpisodeNumbers()
  }

  loadEpisodeNumbers = async () => {
    const {
      info: { count }
    } = await fetchData(episodesURL)

    this.setState({
      episodeNumber: totesRandom(count)
    })
  }

  render() {
    const { episodeNumber } = this.state
    return (
      <div className="App">
        <h3 className="f2 tc mb3 f1-m f-headline-l measure-narrow lh-title mv0">
          <span className="bg-black-90 lh-copy white pa1">
            Get a random Rick and Morty Episode
          </span>
        </h3>
        <button
          className="pointer btn f6 link dim br1 ph3 pv2 mb2 dib black bg-white"
          onClick={() => this.props.history.push(`/episode/${episodeNumber}`)}
        >
          Get Episode
        </button>
      </div>
    )
  }
}

export default withRouter(Home)
