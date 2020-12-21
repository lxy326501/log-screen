<template>
	<div id="data-view">
		<dv-full-screen-container>
			<div class="top_header">
				<datav-top-header></datav-top-header>
			</div>
			<div class="views_security_status">
				<charts-security-status></charts-security-status>
			</div>
			
			<div class="views_realtime_log">
				<datav-realtime-log></datav-realtime-log>
			</div>
			
			<div class="views_detection_statistics">
				<datav-detection-statistics></datav-detection-statistics>
			</div>
			
			<div class="views_visit_statistics">
				<charts-vistit-statistics></charts-vistit-statistics>
			</div>
			
			<div class="views_abnormal_alarm">
				<charts-abnormal-alarm></charts-abnormal-alarm>
			</div>
			
			<div class="views_blacklist_alarm">
				<datav-blacklist-alarm></datav-blacklist-alarm>
			</div>
			
			<div class="views_alarm_tendency">
				<charts-alarm-tendency :data_alarm_tendency='data_alarm_tendency'></charts-alarm-tendency>
			</div>
			
			<div class="views_blacklist_cake">
				<charts-blacklist-cake></charts-blacklist-cake>
			</div>
	</dv-full-screen-container>
	</div>
</template>

<script>
	import api_list from './api_config.js'
	import axios from 'axios'
	import top_header from './views/datav_top_header.vue'
	import security_status from './charts/charts_security_status.vue'
	import realtime_log from './views/datav_realtime_logs.vue'	//异常告警日志实时列表
	import dection_statistics from './views/datav_detection_statistics.vue'	//检测统计
	import visit_statistics from './charts/charts_visit_statistics.vue'	//主机访问统计 
	import abnormal_alarm from './charts/charts_abnormal_alarm.vue'	//异常告警饼状图
	import blacklist_alarm from './views/datav_blacklist_alarm.vue'	//黑名单告警日志实时列表
	import alarm_tendency from './charts/charts_alarm_tendency.vue'	//异常告警趋势
	import backlist_cake from './charts/charts_blacklist_cake.vue'
	export default {
		name: 'DataView',
		components: {
			'datav-top-header': top_header,
			'charts-security-status': security_status,
			'datav-realtime-log': realtime_log,
			'datav-detection-statistics': dection_statistics,
			'charts-vistit-statistics': visit_statistics,
			'charts-abnormal-alarm': abnormal_alarm,
			'datav-blacklist-alarm': blacklist_alarm,
			'charts-alarm-tendency': alarm_tendency,
			'charts-blacklist-cake': backlist_cake,
		},
		data: function(){
			return {
				loading: true,
				data_alarm_tendency : [],
			}
		},
		mounted () {
		  this.timing_start();
		},
		methods:{
			'init': function(){
				this.get_alarm_tendency()
			},
			'timing_start': function(){
				setInterval(()=> {
					this.get_alarm_tendency()
				},8000)
			},
			// 主机访问趋势
			'get_alarm_tendency': function(){
				var that = this;
				axios.get(api_list.log_screen.warn_num).then(function(response){
					that.data_alarm_tendency = response.data
				}).catch(function(error){
					console.log(error);
				})
			},
			cancelLoading () {
			  setTimeout(() => {
			    this.loading = false;
			  }, 2000);
			}
		},
		created: function(){
			this.init()
		}
	}
</script>

<style lang="less">
	#data-view {
	  width: 100%;
	  height: 100%;
	  background-color: #070f68;
	  color: #fff;
	  #dv-full-screen-container {
		padding: 0.8rem 0.8rem 0 0.2rem;
		// background-color: #081653;
		background-image: url('../assets/imgs/pageBg.png');
		background-size: cover;
		background-position: center center;
	  }
	}
</style>
