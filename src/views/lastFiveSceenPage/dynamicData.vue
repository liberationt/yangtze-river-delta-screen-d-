<template>
	<div class="dynamicDataPage">
		<div class="baseTitle">实时服务信息</div>
		<div class="section-1">
			<div class="displayFlexSpace">
				<div class="displayFlex">
					<p class="old-partner subTitles mr30" :class="dynamicState?'checkoutColor':''">老伙伴计划</p>
					<p class="old-partner subTitles" :class="dynamicState?'':'checkoutColor'">辅具租赁</p>
					<p class="subTitle ml30" style="color:#6d8f92;" @click="toSLH">适老化改造</p>
				</div>
        		<div class="nameSpace displayFlexSpace" @click="toYLY"><img src="@/assets/yly.png" alt=""><span class="floatStyle ml5">养老云平台</span></div>
			</div>
			<div class="copy-table" v-if="dynamicState">
				<div class="row-top">
					<p>服务日期</p>
					<p>服务对象</p>
					<p>服务内容</p>
					<p>志愿者</p>
					<p>志愿者所属组织</p>
				</div>
				<vue-seamless-scroll
						:data="laohuobanData"
						class="seamless-table"
						:class-option="optionSingleHeight"
				>
					<ul class="item">
						<li class="table-row-content" v-for="item in laohuobanData" :key="item.id">
							<p>{{item.serviceDate}}</p>
							<p>{{item.vsoName}}</p>
							<p>{{item.serviceContentName}}</p>
							<p>{{item.volunteerName}}</p>
							<p>{{item.vorgName}}</p>
						</li>
					</ul>
				</vue-seamless-scroll>
			</div>
			<div class="copy-table copy-table1" v-if="!dynamicState">
				<div class="row-top">
					<p>签署日期</p>
					<p>产品名称及型号</p>
					<p>承租人</p>
					<p>租赁点</p>
				</div>
				<vue-seamless-scroll
						:data="fujuData"
						class="seamless-table"
						:class-option="optionSingleHeight"
				>
					<ul class="item">
						<li class="table-row-content" v-for="item in fujuData" :key="item.id">
							<p>{{item.signDate}}</p>
							<p>{{item.productName}}</p>
							<p>{{item.fullName}}</p>
							<p>{{item.storeName}}</p>
						</li>
					</ul>
				</vue-seamless-scroll>
			</div>
		</div>
		<div class="section-2">
			<!-- <p class="old-fair subTitle mb30">老博会</p> -->
			<div class="displayFlex mb30">
				<p class="old-partner subTitles checkoutColor">老博会</p>
				<p class="subTitle ml30" style="color:#6d8f92;opacity:0.4">福祉大赛</p>
				<p class="subTitle ml30" style="color:#6d8f92;opacity:0.4">智慧养老示范基地</p>
				<p class="subTitle ml30" style="color:#6d8f92;opacity:0.4">智慧养老案例</p>
			</div>
			<div class="contain">
				<el-carousel ref="carousel"  :interval="4000" style="width:100%;height:350px"  indicator-position="outside">
					<el-carousel-item  ref="item"  v-for="item in oldFairData" :key="item.id">
						<img :src="item.url" alt="" width="100%" height="100%"/>
						<div class="content">
							<div class="caption">{{item.title}}</div>
							<div class="hr"></div>
							<div class="info">
								<p>{{item.content}}</p>
							</div>
						</div>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
	</div>
</template>
<script>
    import {areaCode} from "../../api/areaCode1";
	import {
	    getLaoHuoBanData,
        getOldFairData,
        getLaoFuJuData
    } from '@/api/page'
	export default {
	    name:'dynamicData',
		data(){
	        return{
                laohuobanData:[],
				fujuData:[],
				oldFairData:[],
				dynamicState:true, //true:老伙伴 ，false:辅具租赁
				idx:'',//轮播下标
			}
		},
		computed: {
			optionSingleHeight () {
				return {
					hoverStop: true,
					limitMoveNum:3,
					//  singleHeight: 40 ,   //（带停顿的）
					// waitTime:2000,        //（停顿时间）
					// direction: 0          （从上往下的）
					direction:1,           //（左右的）
					step:0.2,              //（调整速度的）0
					hoverStop:true        //(鼠标停留停止 离开继续运行（反之则停止）)
				}
			}
		},
		methods:{
			toYLY(){
				window.open('http://www.ucanyun.com', '_blank',"width=1920,height=1080,left=4800,menubar=no,toolbar=no,status=no,scrollbars=yes");
			},
			toSLH(){
				window.open('http://ylfw.shweilao.cn', '_blank',"width=1920,height=1080,left=4800,menubar=no,toolbar=no,status=no,scrollbars=yes");

			},
	        //每隔30s切换动态数据
	        DynamicData(){
	            this.dynamicState = !this.dynamicState
			},
			getData(){
	            //获取老伙伴数据
                getLaoHuoBanData({
                    areaCode: areaCode,
					pageNum:1,
					pageSize:15
                }).then(res =>{
					this.laohuobanData = res.data
				})

				//获取辅具数据
                getLaoFuJuData({
                    areaCode: areaCode,
                    pageNum:1,
                    pageSize:15
                }).then(res =>{
                    this.fujuData = res.data
                })

				//获取老博会数据
                getOldFairData({
                    areaCode: areaCode
				}).then(res =>{
                    this.oldFairData = res.data
                })
			}
		},
		created(){
	        this.getData()
		},
		mounted() {
	        setInterval(()=>{
	            this.DynamicData()
			},10000)
        }
    }
</script>
<style lang="scss" scoped>
	.dynamicDataPage {
		width: 900px;
		.section-1 {
			.copy-table {
				width: 100%;
				display: flex;
				flex-direction: column;
				margin-top: 25px;
				.seamless-table {
					overflow: hidden;
					padding: 0;
					height: 380px;
					border: none;
				}
				.row-top,li {
					width: 900px;
					border:1px solid #034050;
					// display: flex;
					// flex-direction: row;
					// justify-content: space-around;
					align-items: center;
					margin: 5px 0;
					padding: 10px;
					p {
						display: inline-block;
						font-size: 18px;
						width: 135px;
						color:#e6e9ea;
						// font-weight: 600;
						
					}
					p:nth-last-child(1){
						width: 300px;
					}
					
				}
				.row-top:nth-of-type(odd){
					background: #074144;
					
				}
				.table-row-content:nth-of-type(even){
					background: #074144;
					color: #1aded9;
				}	
				.row-top p{
						font-size: 20px;
						font-weight: 600;
						color:#1aded9;

					}
				.row-content {
					p {
						color: #FFFFFF;
					}
				}
			}
			.copy-table1{
				.row-top,li{
					p {
						display: inline-block;
						font-size: 18px;
						width: 135px;
						color:#e6e9ea;
						
					}
					p:nth-last-child(3){
						width: 300px;
					}
					p:nth-last-child(1){
						width: 300px;
					}
				}
				.row-top p{
						color:#1aded9;
						font-size: 18px;
						font-weight: 600;
					}
				
				.row-top:nth-of-type(odd){
					background: #074144;
					
				}
				.table-row-content:nth-of-type(even){
					background: #074144;
					color: #1aded9;
				}	
			}
		}
		.section-2 {
			margin-top: 40px;
			.contain {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				transition: width 2s;
				.content {
					display: flex;
					flex-direction: column;
					align-items: flex-start ;
					position: absolute;
					bottom: 0;
					width: 100%;
					// background: black;
					height: 35%;
					// opacity: 0.3;
					background:rgba(0,0,0,.7);
					padding-left: 50px;
					color: #FFFFFF;
					font-weight: bold;
					
					.caption {
						font-size: 25px;
						margin: 5px 0 0;
					}
					.info {
						p {
							text-indent: 2em;
							line-height: 30px;
							font-size:18px;
							overflow : hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}
					}
				}
			}
		}
	}
</style>

