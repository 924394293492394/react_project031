import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer = (props) => {
  const { activeCount } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        )}
      </ul>
    </footer>
  )
}


export default Footer
