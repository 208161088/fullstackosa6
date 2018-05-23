import React from 'react'
import Filter from './Filter'
import { anecVote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { notificationReset } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
class AnecdoteList extends React.Component {
  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
                  has {anecdote.votes}
              <button onClick={() => {
                this.props.anecVote(anecdote)
                this.props.notify(`you voted '${anecdote.content}'`, 5)
              }
              }>
                  vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
const anecdotesToShow = (anecdotes, filter) => {
  let returnedAnecdotes = []
  for (let anecdote of anecdotes.sort((a, b) => b.votes - a.votes)){
    if(anecdote.content.includes(filter)){
      returnedAnecdotes.push(anecdote)
    }
  }
  return(returnedAnecdotes)
}

const mapDispatchToProps = {
  anecVote,
  notificationReset,
  notify
}
const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state.anecdote, state.filter)
  }
}
const ConnectedFilter = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)

export default ConnectedFilter
