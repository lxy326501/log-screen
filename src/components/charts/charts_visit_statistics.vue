<template>
	<div id="visit_statistics">
		<dv-border-box-13 backgroundColor="#080d31">
			<p class="visit_statistics_title">主机访问统计</p>
			<dv-charts style="height: 330px;position: relative;left: 10px;" :option="option" />
		</dv-border-box-13>
	</div>
</template>

<script>
	import api_list from '../api_config.js'
	import axios from 'axios'
	export default {
		name: 'visit_statistics',
		data: function() {
			return {
				option: {},
				ip_list: [],
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
				}, 8000); //每八秒刷新一次
			},
			'format': function() {
				// 将类型，名称，ip替换成中文
				var data_list = [];
				let data, type, name, ip;

				ip = [{
						'out_name': '192.168.10.100',
						'name': '西区三号机'
					},
					{
						'out_name': '192.168.10.204',
						'name': '西区一号机'
					},
					{
						'out_name': '239.255.255.250',
						'name': '南区三号机'
					},
					{
						'out_name': '192.168.10.255',
						'name': '北区十号机'
					},
					{
						'out_name': '192.168.5.255',
						'name': '东区五号机'
					}
				]
				this.ip_list.ip_list.forEach(function(item, index) {
					ip.forEach(function(items, indexs) {
						item = item.replace(items.out_name, items.name)
					})
					data_list.push(item)
				})
				return data_list
			},
			'create': function() {
				var that = this;
				var ip_name;
				axios.get(api_list.log_screen.ip_access).then(function(response) {
					that.ip_list = response.data,
						ip_name = that.format()
					that.option = {
						xAxis: {
							// name: '主机名称',
							axisTick: {
								show: false,
							},
							axisLabel: {
								style: {
									fill: '#ffffff',
									fontSize: 13,
								}
							},
							axisLine: {
								style: {
									stroke: '#ffffff',
									lineWidth: 1
								}
							},
							data: ip_name,
						},
						yAxis: {
							name: '访问次数',
							nameTextStyle: {
								fill: '#ffffff',
								fontSize: 10
							},
							axisTick: {
								show: false,
							},
							axisLabel: {
								style: {
									fill: '#ffffff',
									fontSize: 13,
								}
							},
							axisLine: {
								style: {
									stroke: '#ffffff',
									lineWidth: 1
								}
							},
							min: 0,
							 
							data: 'value'
						},
						series: [{
							data: response.data.number_list,
							type: 'bar',
							label: {
								style: {
									fontSize: 20,
								}
							},
							gradient: {
								color: ['#37a2da', '#67e0e3']
							}
						}],
						color: ['#ffffff']
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
