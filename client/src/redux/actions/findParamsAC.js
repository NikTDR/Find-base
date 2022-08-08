export const setFindParams = (params)=>({
  type:'SET_PARAMS',
  payload : params
})

export const getFindParams = (value)=>({
  type:'GET_PARAMS',
  payload : value
})
