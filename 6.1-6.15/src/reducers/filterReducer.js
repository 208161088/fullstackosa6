const filterReducer = (state = '', action) => {
  switch (action.type) {
  case 'CHANGE':
    return action.text
  default:
    return state
  }
}

export const filterChange = (text) => {
  return {
    type: 'CHANGE',
    text
  }
}

export default filterReducer