export const getUsersSelector = (state) => {
  return state.usersPage.users
}

export const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize
}
