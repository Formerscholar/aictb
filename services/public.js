import request from './axios'

export function getProvinces(params) {
  return request({
    url: '/getProvinces',
    method: 'GET',
    params,
  })
}

export function getCitys(params) {
  return request({
    url: '/getCitys',
    method: 'GET',
    params,
  })
}

export function gethelpsList(params) {
  return request({
    url: '/helpsList',
    method: 'GET',
    params,
  })
}

export function gethelpsDetail(params) {
  return request({
    url: '/helpsDetail',
    method: 'GET',
    params,
  })
}

export function joinAgent(params) {
  return request({
    url: '/joinAgent',
    method: 'GET',
    params,
  })
}

export function gethelpsTypeDetail(params) {
  return request({
    url: '/helpsTypeDetail',
    method: 'GET',
    params,
  })
}
