<template>
	<div id="blacklist_alarm">
		<dv-border-box-13 backgroundColor="#080d31">
			<div>
				<p class="blacklist_alarm_title">黑名单告警日志实时列表</p>
				<dv-scroll-board :config="config" style="position: relative;left:7px;top: 15px; width:483px;height:230px;color: #a7dbff;" />		
			</div>
				
		</dv-border-box-13>
	</div>
</template>

<script>
	import api_list from '../api_config.js'
	import axios from 'axios'
	export default {
		name: 'blacklist_alarm',
		data: function(){
			return {
				config: {},
				data_list: [],
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
			'format': function() {
				var that = this;
				// 将类型，名称替换成中文
				var data_list = [];
				let data,type,name,ip
				
				type= [
					{'out_name':'modbus_bl','name':'提示'},
					{'out_name':'bacnet_pkt','name':'重要'},
					{'out_name':'rule_ev','name':'严重'},
				]	
				
				name = [
					{'out_name':'e48cdebf','name':'QY-5 橡胶磨粉机'},
					{'out_name':'1449b0a1','name':'油压成型机'},
					{'out_name':'2b83fdcd','name':'油压成型机'}
				]
				
				that.data_list.result.forEach(function(item,index){
					type.forEach(function(items,indexs){
						item[1] = item[1].replace(items.out_name,items.name)					
					})
					name.forEach(function(items,indexs){
						item[2] = item[2].replace(items.out_name,items.name)					
					})
					data_list.push(item)
				})
				return data_list
			},
			'create': function(){
				var that = this;
				axios.get(api_list.log_screen.black_list).then(function(response){
					if(response.data.result.length == 0){			
						response.data.result = [
							['无','无','无','无'],
							['无','无','无','无'],
							['无','无','无','无'],
							['无','无','无','无'],
							['无','无','无','无'],
						]
					}else {
						that.data_list = response.data
						response.data.result = that.format()
						// response.data.result = response.data.result
					}
					that.config = {
						header: ['时间', '类型', '设备名称', '黑名单ip', ],
						data: response.data.result,
						headerBGC: '#080d31d1',
						oddRowBGC:'#080d31d1',
						evenRowBGC:'#080d31d1',
						waitTime: 7000,
						rowNum: 5, //表格行数
						columnWidth: [270, 185, 200, 215],
						// index: true,
						// columnWidth: [180]
						align: ['center','center','center','center','center','center']
					}
					
				}).catch(function(error){
					console.log(error);
				})
				
			}
		},
	}
</script>

<style>
</style>
