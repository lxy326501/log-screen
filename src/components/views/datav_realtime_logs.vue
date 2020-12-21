<template>
	<div id="relatime_logs">
		<dv-border-box-13 backgroundColor="#080d31">
			<div>
				<p class="relatime_log_titles">异常告警日志实时列表</p>
				<dv-scroll-board :config="config" style="position: relative;left:30px;top: 15px; width:800px;height:280px;color: #a7dbff;" />
			</div>
		</dv-border-box-13>
	</div>
</template>

<script>
	import api_list from '../api_config.js'
	import axios from 'axios'
	export default {
		name: 'relatime_log',
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
					{'out_name':'modbus_bl','name':'油压成型机'},
					{'out_name':'bacnet_pkt','name':'QY-5 橡胶磨粉机'},
					{'out_name':'rule_ev','name':'油压成型机'},
					{'out_name':'arp_pkt','name':'警告'},
				]	
				
				name = [
					{'out_name':'e48cdebf','name':'QY-5 橡胶磨粉机'},
					{'out_name':'1449b0a1','name':'油压成型机'},
					{'out_name':'2b83fdcd','name':'油压成型机'}
				]
				
				ip = [
					{'out_name':'192.168.10.100','name':'西区三号机'},
					{'out_name':'192.168.10.204','name':'西区一号机'},
					{'out_name':'239.255.255.250','name':'南区三号机'},
					{'out_name':'192.168.10.255','name':'北区十号机'},
					{'out_name':'192.168.5.255','name':'东区五号机'}
				]
				
				that.data_list.result.forEach(function(item,index){
					type.forEach(function(items,indexs){
						item[1] = item[1].replace(items.out_name,items.name)					
					})
					name.forEach(function(items,indexs){
						item[2] = item[2].replace(items.out_name,items.name)					
					})
					ip.forEach(function(items,indexs){
						item[4] = item[4].replace(items.out_name,items.name)					
					})
					data_list.push(item)
				})
				return data_list
			},
			'create': function(){
				var that = this;
				axios.get(api_list.log_screen.exception_list).then(function(response){
					if (response.data.result.length == 0){
						response.data.result = [
								['无','无','无','无','无'],
								['无','无','无','无','无'],
								['无','无','无','无','无'],
								['无','无','无','无','无'],
								['无','无','无','无','无'],
								['无','无','无','无','无'],
								['无','无','无','无','无'],
							]
					}else {
						that.data_list = response.data
						response.data.result = that.format()
					} 
					that.config = {
						header: ['告警时间', '告警类型', '设备名称', '源ip', '目的ip', ],
						data: response.data.result,		
						// [
						// 	['2020/10/19 14:20:15', 'ams_pkt', 'e48cdebf', '192.168.1.100', '192.168.0.13'],
						// 	['2020/11/10 10:19:10', 'bacnet_pkt', '1449b0a1', '127.0.0.1', '172.23.2.15'],
						// 	['2020/11/15 14:23:18', 'rule_ev', '2b83fdcd', '10.0.0.8', '172.23.2.31'],
						// 	['2020/10/27 14:52:04', 'rule_asset', 'e48cdebf', '192.168.43.195', '192.168.1.8'],
						// 	['2020/09/22 09:32:09', 'cip_pkt', 'e48cdebf', '127.0.0.1', '192.168.0.13'],
						// 	['2020/10/19 14:17:25', 'dnp3_pkt', '1449b0a1', '172.23.2.15', '13.10.168.192'],
						// 	['2020/10/19 07:08:29', 'rule_asset', 'test', '127.0.0.1', '192.168.0.190'],
						// 	['2020/10/19 22:14:20', 'dns_pkt', '2b83fdcd', '172.16.16.12', '192.168.1.100'],
						// 	['2020/10/19 14:25:27', 'dsi_pkt', '1449b0a1', '192.168.0.13', '192.168.1.1'],
						// 	['2020/10/19 21:36:26', 'eplv1_pkt', '1449b0a1', '192.168.0.101', '192.168.0.13'],
						// 	['2020/10/19 14:23:16', 'ftp_pkt', '2b83fdcd', '192.168.0.130', '192.168.1.2'],
						// 	['2020/10/19 23:19:08', 'goose_pkt', 'e48cdebf', '127.0.0.1', '192.168.1.5'],
						// 	['2020/10/19 14:42:56', 'learn', 'test', '172.23.2.31', '192.168.0.13'],
						// 	['2020/10/19 00:49:53', 'gryphon_pkt', 'test', '192.168.1.99', '192.168.43.195'],
						// 	['2020/10/19 14:53:42', 'hartip_pkt', '1449b0a1', '192.168.1.100', '172.23.2.15'],
						// 	['2020/10/19 14:18:59', 'hartip_tcp_bl', 'e48cdebf', '192.168.1.99', '192.168.1.100'],
						// 	['2020/10/19 19:38:35', 'rule_asset', '1449b0a1', '172.23.2.31', '192.168.1.8'],
						// 	['2020/10/19 16:28:27', 'https_pkt', 'test', '127.0.0.1', '172.23.2.31'],
						// 	['2020/11/10 08:29:23', 'lldp_pkt', 'test', '192.168.43.195', '172.23.2.15']
						// ],
						headerBGC: '#080d31d1',
						oddRowBGC:'#080d31d1',
						evenRowBGC:'#080d31d1',
						waitTime: 5000,
						rowNum: 7, //表格行数
						columnWidth: [180, 180, 130, 180, 180],
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
