import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = JSON.stringify({
    username,
    password
  })
  // const data = {
  //   username,
  //   password
  // }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout(token) {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info/' + token, // ,
    method: 'get'
    // ,
    // params: { token }
  })
}
