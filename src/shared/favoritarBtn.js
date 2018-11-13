import React from 'react';

export default function FavoritarBtn(props) {
  return <button className="btn btn--like">{props.label || 'Favoritar'}</button>
}