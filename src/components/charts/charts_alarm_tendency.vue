<template>
	<div id="alarm_tendency">
		<dv-border-box-13 backgroundColor="#080d31">
			<p class="alarm_tendency_title">主机访问趋势</p>
			<dv-loading v-if="loading">Loading...</dv-loading>
			<div id="charts_alarm_tendency" style="width: 480px;height: 250px;position: absolute;top: 10px;left: 10px;"></div>
		</dv-border-box-13>
	</div>
</template>

<script>
	export default {
		name: 'electricity',
		data: function() {
			return {
				loading: true,
				time: [],
			}
		},
		props: ['data_alarm_tendency'],
		components: {},
		// watch: {
		// 	'create':function(new_data,old_date){
		// 		this.data_alarm_tendency = new_data;
		// 	}
		// },
		mounted() {
			// this.get_time()
			this.create()
			this.timing_start()
		},
		methods: {
			//定时函数
			'timing_start': function(){
				setInterval(()=> {
					this.create()
				},8000)
			},
			'create': function() {
				if (this.data_alarm_tendency.time_list) {
					this.loading = false
				}
				var charts_alarm_tendency = this.$echarts.init(document.getElementById("charts_alarm_tendency"))
				var option_alarm_tendency = {
					xAxis: {
						type: 'category',
						name: '/小时',
						boundaryGap: false,
						axisLine: {
							lineStyle: {
								color: "#ffffff"
							}
						},
						data: this.data_alarm_tendency.time_list,
					},
					yAxis: {
						type: 'value',
						splitLine:{show: false},
						axisLine: {
							lineStyle: {
								color: "#ffffff"
							}
						},
					},
					series: [{
						data: this.data_alarm_tendency.number_list,
						type: 'line',
						smooth: true,
						color: '#a730fb',
						areaStyle: {}
					}]
				};
				charts_alarm_tendency.setOption(option_alarm_tendency);
			}
		}
	}
</script>

<style>
</style>
