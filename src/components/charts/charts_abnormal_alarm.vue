<template>
	<div id="abnormal_alarm">
		<dv-border-box-13 backgroundColor="#080d31">
			<p class="abnormal_alarm_title">异常告警统计</p>
			<dv-decoration-9 :dur="20" class="decoration">
				<span id="status"> {{ status }} </span>
			</dv-decoration-9>
			<dv-charts style="width: 494px;height: 410px; position: absolute; left: 5px;top:-12px;" :option="option" />
			<!-- <div id="charts_abnormal_alarm" style="width: 494px;height: 308px; position: absolute; left: -55px;top:35px;"></div> -->
		</dv-border-box-13>
	</div>
</template>

<script>
	import api_list from '../api_config.js'
	import axios from 'axios'
	export default {
		name: 'abnormal_alarm',
		data: function() {
			return {
				option: {},
				status: ''
			}
		},
		mounted() {
			this.visit_statistics()
			this.timing_start()
		},
		methods: {
			'timing_start': function() {
				setInterval(() => {
					this.visit_statistics()
				}, 8000); //每八秒刷新一次
			},
			'visit_statistics': function() {
				var that = this;
				axios.get(api_list.log_screen.exception_piechart).then(function(response) {
					if (response.data.result.length == 0){
						that.status = '正常'
						document.getElementById('status').style.color = '#55ff7f'
					}else {
						that.status = '严重'
						document.getElementById('status').style.color = '#ff0000'
						that.option = {
							color: ['#00ffff', '#3277f9', '#fd8589', '#592fee', '#aaff7f', '#ffaaff', '#ff007f'],
							series: [{
								type: 'pie',
								data:  response.data.result,
								radius: ['32%', '50%'],
								insideLabel: {
									show: true,
									style: {
										fontSize: 15,
										fill: '#ffffff',
										textAlign: 'center',
										textBaseline: 'middle'
									}
								},
								outsideLabel: {
									show: true,
									style: {
										fontSize: 18,
										// fill: '#00e8e8',
										textAlign: 'center',
										textBaseline: 'middle'
									}
								},
							}]
						}
					}
					
				}).catch(function(error) {
					console.log(error);
				})
			},
			'create': function() {
				var that = this;
				var charts_abnormal_alarm = this.$echarts.init(document.getElementById("charts_abnormal_alarm"))
				var option_abnormal_alarm = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b}: {c} ({d}%)'
					},
					color: ['#00ffff', '#3277f9', '#fd8589', '#592fee', '#aaff7f', '#ffaaff', '#ff007f'],
					legend: {
						orient: 'vertical',
						textStyle: {
							color: '#aaaaff',
							fontSize: 15,
						},
						right: 5,
						top: 80,
						data: ['arp协议', '流量基线', '黑客命令', 'dos攻击', 'dns洪水', '异常登录']
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [{
								value: +(Math.random() * 7 + 92).toFixed(0),
								name: 'arp协议'
							},
							{
								value: +(Math.random() * 7 + 72).toFixed(0),
								name: '流量基线'
							},
							{
								value: +(Math.random() * 7 + 62).toFixed(0),
								name: '黑客命令'
							},
							{
								value: +(Math.random() * 7 + 52).toFixed(0),
								name: 'dos攻击'
							},
							{
								value: +(Math.random() * 7 + 42).toFixed(0),
								name: 'dns洪水'
							},
							{
								value: +(Math.random() * 7 + 32).toFixed(0),
								name: '异常登录'
							}
						]
					}]
				};
				charts_abnormal_alarm.setOption(option_abnormal_alarm);

			}
		}
	}
</script>

<style>
</style>
