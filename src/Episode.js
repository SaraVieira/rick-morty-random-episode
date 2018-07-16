import React, { Fragment } from 'react'

export default ({ name, episode, date }) => (
  <Fragment>
    <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
      <span class="bg-black-90 lh-copy white pa1 tracked-tight">{name}</span>
    </h3>
    <time class="f6 mt1 dib ttu tracked">
      <small>{date}</small>
    </time>
    <h5 class="f6 ttu tracked black-80 mb4">{episode}</h5>
  </Fragment>
)
