<template>
	<div id="person_relation">
		<div id="charts_person_relation" style="width: 890px;height: 470px; position: relative;top: 135px;left: 1px;"></div>
	</div>
</template>

<script>
	import img from '../../assets/logo.png'
	import computer from '../../assets/imgs/电脑2.png'
	import comput from '../../assets/imgs/电脑.png'
	import server from '../../assets/imgs/服务器.png'
	import route from '../../assets/imgs/路由器.png'
	import protect from '../../assets/imgs/防火墙3.png'
	import router from '../../assets/imgs/路由器.png'
	import network from '../../assets/imgs/圆柱体.png'
	import folder from '../../assets/imgs/文件夹.png'
	import conductor from '../../assets/imgs/半导体.png'
	
	export default {
		name: 'person_relation',
		props: [],
		components: {

		},
		watch: {},
		mounted() {
			this.create()
		},
		methods: {
			create: function() {
				var charts_person_relation = this.$echarts.init(document.getElementById("charts_person_relation"));
				var computers,computs,servers,protects,routers,networks,folders,conductors;
				computers = 'image://' + computer
				computs = 'image://' + comput
				servers = 'image://' + server
				protects = 'image://' + protect
				routers = 'image://' + router
				networks = 'image://' + network
				folders = 'image://' + folder
				conductors = 'image://' + conductor
				
				var option_person_relation = {
					tooltip: {},
					series: [{
						type: 'graph',
						layout: 'force',
						force: {
							repulsion: 180
						},
						symbolSize: 40,
						roam: true,
						// label: {
						// 	show: true
						// },
						edgeSymbol: ['circle', 'arrow'],
						edgeSymbolSize: [5],
						edgeLabel: {
							fontSize: 20
						},
						data: [{
							name: 'node1',
							symbol: servers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253<br />',
							}
						}, {
							name: 'node2',
							symbol: routers,
							tooltip: {
								formatter: '{b0}: 10.245.142.207',
							}
						}, {
							name: 'node3',
							symbol: routers,
							tooltip: {
								formatter: '{b0}: 10.245.142.209',
							}
						}, {
							name: 'node4',
							symbol: routers,
							tooltip: {
								formatter: '{b0}: 10.245.142.213',
							}
						}, {
							name: 'node5',
							symbol: routers,
							tooltip: {
								formatter: '{b0}: 10.245.142.255',
							}
						}, {
							name: 'node6',
							symbol: routers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node7',
							symbol: protects,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node8',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node9',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node10',
							symbol: computs,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node11',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node12',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.207',
							}
						}, {
							name: 'node13',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node14',
							symbol: computs,
							tooltip: {
								formatter: '{b0}: 10.245.142.207',
							}
						}, {
							name: 'node15',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node16',
							symbol: protects,
							tooltip: {
								formatter: '{b0}: 10.245.142.207',
							}
						}, {
							name: 'node17',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node18',
							symbol: computs,
							tooltip: {
								formatter: '{b0}: 10.245.142.153',
							}
						}, {
							name: 'node19',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node20',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.273',
							}
						}, {
							name: 'node21',
							symbol: conductors,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node22',
							symbol: protects,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node23',
							symbol: conductors,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node24',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.233',
							}
						}, {
							name: 'node25',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node26',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.23',
							}
						}, {
							name: 'node27',
							symbol: folders,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node28',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node29',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node30',
							symbol: protects,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node31',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node32',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}, {
							name: 'node33',
							symbol: computers,
							tooltip: {
								formatter: '{b0}: 10.245.142.253',
							}
						}],
						// links: [],
						links: [{
							source: 'node1',
							target: 'node2',
							lineStyle: {
								color: '#aaffff'
							}
						}, {
							source: 'node1',
							target: 'node3',
							lineStyle: {
								color: '#aaffff'
							}
						}, {
							source: 'node1',
							target: 'node4',
							lineStyle: {
								color: '#aaffff'
							}
						}, {
							source: 'node1',
							target: 'node5',
							lineStyle: {
								color: '#aaffff'
							}
						}, {
							source: 'node1',
							target: 'node6',
							lineStyle: {
								color: '#aaffff'
							}
						}, {
							source: 'node2',
							target: 'node7',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node2',
							target: 'node8',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node2',
							target: 'node9',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node2',
							target: 'node10',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node3',
							target: 'node11',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node3',
							target: 'node12',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node3',
							target: 'node13',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node3',
							target: 'node14',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node3',
							target: 'node15',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node3',
							target: 'node16',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node5',
							target: 'node17',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node5',
							target: 'node18',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node5',
							target: 'node19',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node5',
							target: 'node20',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node5',
							target: 'node21',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node5',
							target: 'node22',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node4',
							target: 'node23',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node4',
							target: 'node24',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node4',
							target: 'node25',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node4',
							target: 'node26',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node4',
							target: 'node27',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node4',
							target: 'node28',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node6',
							target: 'node29',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node6',
							target: 'node30',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node6',
							target: 'node31',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node6',
							target: 'node32',
							lineStyle: {
								color: '#00aaff'
							}
						}, {
							source: 'node6',
							target: 'node33',
							lineStyle: {
								color: '#00aaff'
							}
						}],
						lineStyle: {
							opacity: 0.9,
							width: 2,
							curveness: 0
						},
					}]
				};
				charts_person_relation.setOption(option_person_relation);
			}
		}
	}
</script>

<style>
</style>
