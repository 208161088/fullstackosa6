const notificationReducer = (state = '', action) => {
  switch (action.type) {
  case 'NOTIFICATION':
    return action.text
  case 'RESET':
    return ''
  default:
    return state
  }
}

export const notify = (text, time) => {
  return async (dispatch) => {
    const timer = setTimeout(() => {
      dispatch({
        type: 'RESET',
      })
    }, time*1000)
    clearTimeout(timer-1)
    dispatch({
      type: 'NOTIFICATION',
      text: text
    })
  }
}

export const notificationReset = () => {
  return {
    type: 'RESET'
  }
}

export default notificationReducer