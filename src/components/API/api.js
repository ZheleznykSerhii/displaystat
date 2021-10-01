import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'e53fd4bf-9a80-4541-baec-99bf8fe0bbd9',
  },
})

export const networkUsersAPI = {
  getUsers: (pageSelected = 1, pageSize = 10) => {
    return instance
      .get(`users?page=${pageSelected}&count=${pageSize}`)
      .then((response) => response.data)
  },
  follow(userID) {
    return instance.delete(`follow/${userID}`)
  },

  unfollow(userID) {
    return instance.post(`follow/${userID}`)
  },
  header() {
    return instance.get(`auth/me`)
  },
}

export const profileAPI = {
  getProfile(userID) {
    return instance.get(`profile/` + userID)
  },
  getStatus(userID) {
    return instance.get(`profile/status/` + userID)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status })
  },
}
