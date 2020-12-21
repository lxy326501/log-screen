<template>
	<div id="headers">
		<p class="title">工业企业网络纵深安全监控系统</p>
		<dv-decoration-11 style="width:160px;height:70px;position: relative;left: 25px;top: -75px;font-size: 18px;font-weight: bold;color: #b6dbf5;">
			异常统计
		</dv-decoration-11>
		
		<dv-decoration-10 style="width:71%;height:5px;position: relative;left: 205px;top: -75px;" />
		
		<dv-decoration-11 style="width: 280px;height: 70px;position: relative;left: 1597px;top: -152px;font-size: 18px;font-weight: bold;color: rgb(182, 219, 245)">
			{{ current_time }}
		</dv-decoration-11>
	</div>
</template>

<script>
	export default {
		name: 'headers',
		data: function(){
			return {
				current_time: '',
			}
		},
		mounted() {
			this.get_time()
			this.timing_start()
		},
		methods: {
			'timing_start': function() {
				setInterval(() => {
					this.get_time()
				}, 1000);		//每八秒刷新一次
			},
			'get_time': function() {
				var Datatime = new Date()
				this.current_time = Datatime.toLocaleString();
			},
		},
	}
</script>

<style>
</style>
