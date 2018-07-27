import React, { Component } from 'react'
import Episode from '../Episode'
import Characters from '../Characters'
import { charURL, fetchData, episodeURL, getIds } from '../utils'

class EpisodePage extends Component {
  state = {
    episode: {},
    chars: []
  }

  componentDidMount() {
    this.loadEpisode()
  }

  getChar = async ids => {
    const chars = await fetchData(charURL(ids))

    this.setState({ chars })
  }

  loadEpisode = async () => {
    const { match } = this.props
    const episode = await fetchData(episodeURL(match.params.id))

    // get all charecters in episode
    this.getChar(getIds(episode))

    this.setState({
      episode: {
        name: episode.name,
        date: episode.air_date,
        episode: episode.episode
      }
    })
  }

  render() {
    const { episode, chars } = this.state
    return (
      <div className="App">
        <Episode {...episode} />
        <Characters chars={chars} />
      </div>
    )
  }
}

export default EpisodePage
