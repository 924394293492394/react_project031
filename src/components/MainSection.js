import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount, actions }) =>
  (
    <section className="main">
      {
        !!todosCount && 
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            readOnly
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList />
      {
        <Footer/>
      }
    </section>
  )

MainSection.propTypes = {
}

export default MainSection;