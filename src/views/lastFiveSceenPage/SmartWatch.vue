<template>
	<div class="SmartWatchPage">
		<div class="smartWatch baseTitle">智能监控</div>
		<div class="btnInfor">
			<span class="subTitles mr30 btn" :class="index=='1'?'checkoutColor':''" @click="tabCheck(1)">关闭</span>
			<span class="subTitles btn" :class="index=='2'?'checkoutColor':''" @click="tabCheck(2)">开启</span>
		</div>
		<div v-if="index==2">
			<div class="section" v-show="nowDataState">
				<ul>
					<li v-for="(item,i) in videoData1"  :key="item.id">
						<span class="hex">
							<span class="hexIn">
								<video
									@click="toLog(i)"
									:id="item.id"
									:src="item.url"
									width="100%"
									height="100%"
									autoplay
									muted="muted"
									playsInline
									webkit-playsinline
									v-if="item"
								>
								</video>
								<div class="noVideo"><img src="@/assets/1.png" alt=""></div>
							</span>
						</span>
					</li>
				</ul>
			</div>
			<div class="section" v-show="!nowDataState">
				<ul>
					<li v-for="(item) in videoData2"  :key="item.id">
						<span class="hex">
							<span class="hexIn">
								<video
										:id="item.id"
										:src="item.url"
										width="100%"
										height="100%"
										muted = "true"
										autoplay
										playsInline
										webkit-playsinline
										v-if="item"
								>
								</video>
						</span>
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div v-else class="noVudio">
			<div class="container">
				<div class="flip">
					<div class="front"><img src="@/assets/closeOne.png" alt="" class="vudioImg"></div>
					<div class="back"><img src="@/assets/closeTwo.png" alt="" class="vudioImg"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import EZUIKit from './../../../public/ezuikit'
    import {
        getVideoData
    } from '@/api/page'
	export default {
	    name: 'smartWatch',
	    data(){
	        return {
				index:1,
				plearOpt:[],
	            allVideoData:[],//所有28条视频
	            videoData1:[],//展示的前监控视频
	            videoData2:[],//展示的后监控视频
				nowDataState:true, //true 前14个，false后14个
			}
		},
		methods:{
			toLog(i){
				let noneVedio = document.getElementsByClassName('noVideo')[i]
				noneVedio.style.display='block'
			},
			tabCheck(num){
				this.index=num
				if(num==2){
					this.getData()
				}
				if(num == 1 ){
					// this.plearOpt.stop()
					this.plearOpt.forEach(item=>{
						item.stop()
					})
				}
			},	
	        getData(){
	            getVideoData().then(res =>{
					this.allVideoData = res.data
                    this.allVideoData.forEach((item,index)=>{
						Object.assign(item,{id:`myplayer`+ index})
						this.videoData1 = this.allVideoData.slice(0,14)
						this.videoData2 = this.allVideoData.slice(14)
					})
                    this.showVideo(this.allVideoData)
				})
			},
			showVideo(showData){
                showData.forEach((item,i)=>{
                    setTimeout(() =>{
						this.plearOpt[i]=new EZUIKit.EZUIPlayer(item.id);
						this.plearOpt[i].play()
						// new EZUIKit.EZUIPlayer(item.id)
                    },0)
				})
			}
		},
		created() {
	        // this.getData()
			// setInterval(()=>{
            //     this.nowDataState = !this.nowDataState
			// },30000)
        }
    }
</script>
<style lang="scss" scoped>
	.SmartWatchPage {
		width: 900px;
		.pageContain {
			.section {

			}
		}
	}
</style>
<style lang="scss" scoped>
	.SmartWatchPage ul {
		margin: 0;
		padding: 0;
	}
	.SmartWatchPage ul {
		list-style: none;
		width: 900px;
		margin: 100px auto;
	}
	.SmartWatchPage li {
		float: left;
		margin: 0 20px;
		height: 180px;
	}
	.SmartWatchPage .hex {
		overflow: hidden;
		display: block;
		width: 180px;
		height: 210px;
		transform: rotate(-60deg) skewY(30deg);
	}
	.SmartWatchPage .hexIn {
		background-color: #ccc;
		display: block;
		width: 180px;
		height: 210px;
		line-height: 210px;
		text-align: center;
		transform: skewY(-30deg) rotate(60deg);
		position: relative;
	}
	.SmartWatchPage .noVideo{
		display: none;
		overflow: hidden;
		// width: 180px;
		// height: 210px;
		// line-height: 210px;
		// text-align: center;
		// transform: skewY(-30deg) rotate(60deg);
		// img{
		// 	width: 180px;
		// 	height: 210px;
		// 	transform: skewY(-30deg) rotate(60deg);
		// }
		img{
			width: 180px;
			height: 210px;
		}
		position: absolute;
		top:0;
	}
	.SmartWatchPage li:nth-child(7n + 1) {
		margin-left: 130px;
	}
	.SmartWatchPage video{
		object-fit:fill;
	}
	.btnInfor{
		display: flex;
		.btn{
			cursor: pointer;
		}
	}
	.noVudio{
		text-align: center;
		padding:100px 0;
		// position: relative;
		// width:900px;
		// .vudioImg{
		// 	position: absolute;
		// 	left: 50%;
		// 	top:50%;
		// 	transform: translateX(-50%)
		// }
	}
	// perspective:1000;transform-style:preserve-3d;
.container{img{
	width:800px;height:700px;
}}
.container,.front,.back{width:800px;height:700px;}
.flip{position:relative;transition:2s;transform-style:preserve-3d;}
.front,.back{position:absolute;top: 0px;left: 0px;backface-visibility:hidden;display: flex;align-items: center;padding-left:27px}
.front{z-index:2;}
.back{transform:rotateY(-180deg);}
.container:hover .flip{transform:rotateY(180deg);}
// @keyframes spin {
//     from {
//         transform: rotateY(0deg);
//     }
//     to {
//         transform: rotateY(360deg);
//         transition: all 1s;
//     }
// }
</style>
