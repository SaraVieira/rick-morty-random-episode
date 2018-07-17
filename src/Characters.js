import React, { Fragment } from 'react'

export default ({ chars }) => (
  <Fragment>
    <h3 className="mb2 f3 f2-m f-headline-2 measure-narrow lh-title mv0">
      <span className="bg-black-90 lh-copy white pa1">Characters</span>
    </h3>
    <div className="flex flex-wrap mt2 mb4">
      {chars.map(char => (
        <div className="pa1 tc" key={char.id}>
          <img
            src={char.image || './assets/one.jpg'}
            className="br2 h3 w3 dib"
            alt={char.name}
          />
        </div>
      ))}
    </div>
  </Fragment>
)
