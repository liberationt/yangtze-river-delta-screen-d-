//老人列表
import request from "@/utils/request";
export function getElderList(params) {
    return request({
      url: "/screen/screen/person/personInfoList",
      method: "get",
      params
    });
}
//贫困老人
export function getPoorList(params) {
    return request({
      url: "/screen/screen/person/the/poor/list",
      method: "get",
      params
    });
}
// 特困老人
export function getExtremelyList(params) {
    return request({
      url: "/screen/screen/person/extremely/poor/list",
      method: "get",
      params
    });
}

// 社区设施列表
export function getPensionAgencyList(params) {
  return request({
    url: "/screen/screen/service/provider/area/pensionAgency",
    method: "get",
    params
  });
}

// 机构数量
export function getInstitutionCount(params) {
  return request({
    url: "/screen/screen/service/provider/regional/institutionCount",
    method: "get",
    params
  });
}
//社区
export function getInstitutionCounts(params) {
  return request({
    url: "/screen/screen/service/provider/regional/institutionCounts",
    method: "get",
    params
  });
}