export const totesRandom = n => Math.floor(Math.random() * n) + 1
export const episodesURL = 'https://rickandmortyapi.com/api/episode/'
export const charURL = ids => `https://rickandmortyapi.com/api/character/${ids}`
export const episodeURL = id => `https://rickandmortyapi.com/api/episode/${id}`

export const fetchData = async url => {
  const data = await fetch(url)
  const json = await data.json()

  return json
}

export const getIds = episode =>
  episode.characters.map(c => parseInt(c.match(/\d+$/), 10))
