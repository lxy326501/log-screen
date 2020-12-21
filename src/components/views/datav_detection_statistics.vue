<template>
	<div id="dection_statistics">
		<dv-border-box-13 backgroundColor="#080d31">
			<p class="dection_statistics_title">检测统计</p>
			<dv-capsule-chart :config="config" style="position: relative;left:10px;top: 20px;width:430px;height:300px" />
		</dv-border-box-13>
	</div>
</template>

<script>
	import api_list from '../api_config.js'
	import axios from 'axios'
	export default {
		name: 'dection_statistics',
		data: function(){
			return {
				config: {},
			}
		},
		mounted() {
			this.create()
			this.timing_start()
		},
		methods: {
			'timing_start': function() {
				setInterval(() => {
					this.create()
				}, 8000);		//每八秒刷新一次
			},
			'create': function(){
				var that = this;
				axios.get(api_list.log_screen.monitor).then(function(response) {
					that.config = {
						data: [
							{
							  name: '通信日志数量',
							  value: response.data.communication_num
							},
							{
							  name: '资产日志数量',
							  value: response.data.asset_num
							},
						    {
						      name: '白名单日志数量',
						      value: response.data.whitelist_num
						    },
						    {
						      name: '黑名单日志数量',
						      value: response.data.blacklist_num
						    },
						    {
						      name: '异常检测日志数量',
						      value: response.data.anomaly_monitoring_num
						    },
							{
							  name: '恶意攻击日志数量',
							  value: response.data.purpose_attack_num
							},
						  ],
						  colors: ['#55aaff', '#00ffff', '#e690d1', '#5555ff', '#96bfff', '#00ff7f'],
						  showValue: true
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
