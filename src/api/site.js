import axios from 'axios'
import qs from 'qs'
import { PREFIX_URL, UAID } from './config'
import { getSign } from 'common/js/util'

export function getSiteinfo(token) {
  const url = `${PREFIX_URL}/site_info`
  let data = {
    token: token
  }
  return axios.get(url, {
    params: Object.assign({ sign: getSign(data) }, data)
  }).then(function(res) {
    return Promise.resolve(res)
  })
}
export function setSiteinfo(token, icon, site_name, title_suffix, announcement, footer) {
  const url = `${PREFIX_URL}/set_sub_site`
  let data = {
    token: token,
    icon: icon,
    site_name: site_name,
    title_suffix: title_suffix,
    announcement: announcement,
    footer: footer
  }
  return axios.post(url, qs.stringify(Object.assign({ sign: getSign(data)}, data)))
    .then(function(res) {
      return Promise.resolve(res)
    })
}
export function getAgencyservice(token) {
  const url = `${PREFIX_URL}/agency_service`
  let data = {
    token: token
  }
  return axios.get(url, {
    params: Object.assign({ sign: getSign(data) }, data)
  }).then(function(res) {
    return Promise.resolve(res)
  })
}
