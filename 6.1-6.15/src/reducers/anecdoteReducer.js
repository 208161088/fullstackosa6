import anecdoteService from '../services/anecdotes'


const getId = () => (100000*Math.random()).toFixed(0)
const reducer = (store = [], action) => {

  switch (action.type) {
  case 'VOTE':{
    const old = store.filter(a => a.id !==action.data.id)
    return [...old, action.data]
  }
  case 'CREATE':{
    return [...store, action.data]
  }
  case 'INIT_ANECDOTES':
    return action.data
  default:
    return store
  }
}
export const anecCreation = (content) => {
  return async (dispatch) => {
    const newObject = { content, id: getId(), votes:0 }
    const newAnec = await anecdoteService.create(newObject)
    dispatch({
      type: 'CREATE',
      data: newAnec
    })
  }
}
export const anecVote = (anecdote) => {
  return async (dispatch) => {
    const newObject = { ...anecdote, votes: anecdote.votes+1}
    const newAnec = await anecdoteService.update(anecdote.id, newObject)
    dispatch({
      type: 'VOTE',
      data: newAnec
    })
  }
}
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer