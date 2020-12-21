<template>
	<div id="security_status">
		<div class="m_day">
			当天攻击数
			<dv-digital-flop :config="config_m_day" class="d_m_day" />
		</div>
		<div class="m_week">
			本周攻击数
			<dv-digital-flop :config="config_m_week" class="d_m_week" />
		</div>
		<div class="b_day">
			当天黑名单数
			<dv-digital-flop :config="config_b_day" class="d_b_week" />
		</div>
		<div class="b_week">
			本周黑名单数
			<dv-digital-flop :config="config_b_week" class="d_b_week" />
		</div>
		<charts-person-relation></charts-person-relation>
		<!-- <charts-security-histogram></charts-security-histogram> -->
	
	</div>
</template>

<script>
	// import security_histrgram from './charts_security_histogram.vue'
	import person_relation from './charts_person_relation.vue'
	import api_list from '../api_config.js'
	import axios from 'axios'
	export default {
		name: 'security_status',
		data: function(){
			return {
				config_m_day: {},
				config_m_week: {},
				config_b_day: {},
				config_b_week: {},
			}
		},
		components: {
			'charts-person-relation': person_relation
			// 'charts-security-histogram': security_histrgram
		},
		mounted() {
			this.init()
		},
		methods: {
			'init': function(){
				this.get_data()
				this.get_week()
				this.timing_start()
			},
			//定时函数
			'timing_start': function(){
				setInterval(()=> {
					this.get_data()
					this.get_week()
				},80000)
			},
			'get_data': function(){
				var that = this;
				axios.get(api_list.log_screen.day).then(function(response) {
					that.config_m_day = {
						number: [response.data.attach_num],
						content: '{nt}次'
					}
					that.config_b_day = {
						number: [response.data.blacklist_num],
						content: '{nt}次'
					}
					
				}).catch(function(error) {
					console.log(error);
				})
			},
			'get_week': function(){
				var that = this;
				axios.get(api_list.log_screen.week).then(function(response) {
					that.config_m_week = {
						number: [response.data.attach_num],
						content: '{nt}次'
					}
					that.config_b_week = {
						number: [response.data.blacklist_num],
						content: '{nt}次'
					}
				}).catch(function(error) {
					console.log(error);
				})
			}
		}
	}
</script>

<style>
</style>
