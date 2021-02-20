//老人人口
import request from "@/utils/request";
//户籍人口统计
export function getHousehold(params) {
    return request({
      url: "/screen/screen/person/population/category/count",
      method: "get",
      params
    });
}
//常住人口统计
export function getLongTime(params) {
    return request({
      url: "/screen/screen/person/population/category/count",
      method: "get",
      params
    });
}
//老人动态数据
export function getPersonNews(params) {
    return request({
      url: "/screen/screen/person/news",
      method: "get",
      params
    });
}
//居住状态统计
export function getPersonLiveStatus(params) {
    return request({
      url: "/screen/screen/person/live/status",
      method: "get",
      params
    });
}
//增长趋势
export function getElderlyGraph(params) {
    return request({
      url: "/screen/screen/person/elderly/rowth/trend/graph",
      method: "get",
      params
    });
}
//政策覆盖
export function getPolicyCoverage(params) {
    return request({
      url: "/screen/screen/person/policy/coverage",
      method: "get",
      params
    });
}


//地图
export function getMapData(params) {
  return request({
    url: "/screen/screen/map/csj",
    method: "get",
    params
  });
}
export function getMapArea(params) {
  return request({
    url: "/screen/area/config/area",
    method: "get",
    params
  });
}
// /area/config/area{"areaCode":["31"]}


//机构养老
// 机构数量
export function getHealthyCount(params) {
    return request({
      url: "/screen/screen/service/provider/healthyCount",
      method: "get",
      params
    });
}
// 床位数量
export function getBedCount(params) {
    return request({
      url: "/screen/screen/service/provider/area/bed",
      method: "get",
      params
    });
}
//入住老人
export function getLiveCount(params) {
    return request({
      url: "/screen/org/person/total",
      method: "get",
      params
    });
}
//机构动态数据
export function getMechanismDynamic(params) {
    return request({
      url: "/screen/screen/service/provider/mechanism/dynamic",
      method: "get",
      params
    });
}
//运营形式(入住老人统计)
export function getRegionalPension(params) {
    return request({
      url: "/screen/screen/service/provider/regional/pension",
      method: "get",
      params
    });
}
//运营形式(机构数统计)
export function getOperatingForms(params) {
    return request({
      url: "/screen/screen/service/provider/regional/totalNumberOfOperatingForms",
      method: "get",
      params
    });
}
//入住老人年龄分布
export function getAssortAge(params) {
    return request({
      url: "/screen/org/person/assort/age",
      method: "get",
      params
    });
}
//日常监测
export function getRatingStatistics(params) {
    return request({
      url: "/screen/screen/service/provider/regional/ratingStatistics",
      method: "get",
      params
    });
}
//法人性质
export function getLegalPerson(params) {
    return request({
      url: "/screen/screen/service/provider/regional/legalPerson",
      method: "get",
      params
    });
}




//居家社区养老服务

//机构类型统计
export function getOrganizationTypeCount(params) {
  return request({
    url: "/screen/screen/service/provider/healthyCount",
    method: "get",
    params
  });
}
//机构类型增长
export function getOrganizationTypeIncrease(params) {
  return request({
    url: "/screen/screen/service/provider/healthyCount/increase",
    method: "get",
    params
  });
}
//综合统计
export function getComprehensive(params) {
  return request({
    url: "/screen/screen/service/provider/healthyCount/comprehensive",
    method: "get",
    params
  });
}
//老年综合津贴
export function getHealthySubsidy(params) {
    return request({
      url: "/screen/screen/service/provider/healthyCount/subsidy",
      method: "get",
      params
    });
}
//养老服务补贴
export function getPensionSubsidy(params) {
    return request({
      url: "/screen/screen/service/provider/healthyCount/pensionSubsidy",
      method: "get",
      params
    });
}
//长护险补贴(原始数据)
export function getLevelCount(params) {
    return request({
      url: "/screen/screen/long/nursing/risks/levelCount",
      method: "get",
      params
    });
}
//老年综合津贴
export function getComprehensiveAllowance(params) {
  return request({
    url: "/screen/screen/service/provider/healthyCount/comprehensiveAllowance",
    method: "get",
    params
  });
}
//居家动态数据
export function getHomeDynamic(params) {
    return request({
      url: "/screen/screen/service/provider/home/dynamic",
      method: "get",
      params
    });
}



//专项服务
//志愿者年龄
export function getStatistics(params) {
  return request({
    url: "/screen/volunteer/age/group/statistics",
    method: "get",
    params
  });
}
//志愿者服务对象
export function getVolunteerStatistics(params) {
  return request({
    url: "/screen/volunteer/service/obj/age/group/statistics",
    method: "get",
    params
  });
}

//专项服务动态数据
export function getScroll(params) {
  return request({
    url: "/screen/volunteer/lao/wu/scroll",
    method: "get",
    params
  });
}
//适老化改造
export function getAdaptAgingn(params) {
  return request({
    url: "/screen/volunteer/adapt/agingn",
    method: "get",
    params
  });
}
//时间银行
export function getTimeBank(params) {
  return request({
    url: "/screen/volunteer/time/bank",
    method: "get",
    params
  });
}
//视频
export function getCollection(params) {
  return request({
    url: "/screen/volunteer/silver/bell/collection",
    method: "get",
    params
  });
}
//金额
export function getSubsidyMoney(params) {
  return request({
    url: "/screen/screen/assistive/contract/current/subsidy/money",
    method: "get",
    params
  });
}
//租赁点
export function getContract(params) {
  return request({
    url: "/screen/screen/assistive/contract/status",
    method: "get",
    params
  });
}
//合同
export function getStore(params) {
  return request({
    url: "/screen/screen/assistive/store/count",
    method: "get",
    params
  });
}

/*
* 护理人员页
* */
//护理员-数量统计
export function getTotalStatistics (params) {
    //areaCode:31
    return request({
        url: "/screen/screen/service/provider/persion/worker/yrd/count",
        method: "get",
        params
    });
}
//护理员-户籍统计
export function getCensusStatistics(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/service/provider/worker/census/statistics",
        method: "get",
        params
    });
}
//护理员-医养结合
//死数据
export function getMedicalCare(params) {
    //{areaCode:31,type:[]}
    return request({
        url: "/screen/screen/service/provider/yrd/medical/care",
        method: "get",
        params
    });
}
//活数据
export function getMedicalCare1(params) {
    //{areaCode:31,type:[]}
    return request({
        url: "screen/screen/service/provider/item/service/key",
        method: "get",
        params
    });
}

export function getMedicalCare2(params) {
    //{areaCode:31,type:[]}
    return request({
        url: "screen/screen/service/provider/regional/institutionCount",
        method: "get",
        params
    });
}

//护理员-从业年限
export function getObtainYearsData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/service/providerworker/working/years",
        method: "get",
        params
    });
}

/*
* 养老顾问页面
* */

//顾问点统计(原始数据)
export function getAdvisoryPointData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/advisory/pointCount",
        method: "get",
        params
    });
}
//顾问点比例(原始数据)
export function getAdvisoryPointRatioData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/advisory/pointCount/type",
        method: "get",
        params
    });
}
//顾问员统计(原始数据)
export function getAdvisoryEmpCountData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/advisory/empCount",
        method: "get",
        params
    });
}
//顾问员比例(原始数据)
export function getAdvisoryEmpCountTypeData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/advisory/empCount/type",
        method: "get",
        params
    });
}
//咨询记录(原始数据)
export function getAdvisoryRecordData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/advice/record/record",
        method: "get",
        params
    });
}
//空中养老顾问
export function getAdvisoryRecordAirData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/advice/record/air/pension",
        method: "get",
        params
    });
}

//老伙伴数据
export function getLaoHuoBanData(params) {
    //areaCode:31
    return request({
        url: "/screen/volunteer/record/dynamics",
        method: "get",
        params
    });
}
//辅具数据
export function getLaoFuJuData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/assistive/contract/dynamics",
        method: "get",
        params
    });
}
//老博会
export function getOldFairData(params) {
    //areaCode:31
    return request({
        url: "/screen/volunteer/old/fair",
        method: "get",
        params
    });
}

//长三角 左倒二 老人数量、老龄化
export function getOldNumData(params) {
    //areaCode:310112000000
    return request({
        url: "/screen/screen/person/elderly/aging",
        method: "get",
        params
    });
}
//长三角 左倒二 老人数量历年增长趋势
export function getAddTrendData(params) {
    //areaCode:310112000000
    return request({
        url: "/screen/screen/person/increased/trend",
        method: "get",
        params
    });
}
//长三角 左倒二 区域分布
export function getDistributedData(params) {
    //areaCode:310112000000
    return request({
        url: "/screen/screen/person/csj/distributed",
        method: "get",
        params
    });
}
//长三角 养老服务机构设施
export function getServiceFacData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/service/provider/elderly/service/facilities",
        method: "get",
        params
    });
}

//视频监控
export function getVideoData() {
    //areaCode:31
    return request({
        url: "/screen/screen/intelligent/monitor/csj",
        method: "get"
    });
}

//区域对口签约
export function getSigningData(params) {
    //areaCode:31
    return request({
        url: "/screen/screen/person/csj/counterpart/signing",
        method: "get",
        params
    });
}

//总数
export function getElderNumber(params) {
  //areaCode:31
  return request({
      url: "/screen/screen/person/elderly/censusRegister",
      method: "get",
      params
  });
}


//老伙伴项目
export function getVolunteerNumber(params) {
  //areaCode:31
  return request({
      url: "/screen/volunteer/volunteer/count",
      method: "get",
      params
  });
}
export function getServeNumber(params) {
  //areaCode:31
  return request({
      url: "/screen/volunteer/serviceObject/count",
      method: "get",
      params
  });
}

//地图  街镇
export function getMapStreet(params) {
  //areaCode:31
  return request({
      url: "/screen/area/config/street",
      method: "get",
      params
  });
}
//长护险
export function getPeopleNumber(params) {
  return request({
    url: "/screen/screen/long/nursing/risks/peopleCount",
    method: "get",
    params
  });
}
//地图

export function getMapLast(params) {
  return request({
    url: "/screen/area/config/signUp",
    method: "get",
    params
  });
}

//最后地图
export function getMapNumber(params) {
  return request({
    url: "/screen/screen/service/provider/offSite",
    method: "get",
    params
  });
}
export function getCooperation(params) {
  return request({
    url: "/screen/screen/service/provider/cooperation",
    method: "get",
    params
  });
}
