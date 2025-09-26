import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { JSX } from 'react/jsx-runtime'

type Props = {
  search: string | undefined;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
}

const SearchBar: React.FC<Props> = ({search, onSearchChange, onSearchSubmit}: Props): JSX.Element => {

  return (
    <div>
      <form onSubmit={(e) => onSearchSubmit(e)}>
        <input type="text" placeholder="Search for a stock" onChange={(e) => onSearchChange(e)} />
      </form>
    </div>
  )
}

export default SearchBar