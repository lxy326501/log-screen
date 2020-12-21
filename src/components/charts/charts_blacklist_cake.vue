<template>
	<div id="blacklist_cake">
		<dv-border-box-13 backgroundColor="#080d31">
			<p class="blacklist_cake_title">黑名单告警饼状图</p>
			<dv-charts style="absolute; left: 15px;top:-65px;width: 450px;height: 350px;" :option="option" />
			<dv-decoration-9 :dur="20" class="decoration1" v-if="status">
				<span id="status"> 正常</span>
			</dv-decoration-9>
		</dv-border-box-13>
	</div>
</template>

<script>
	import api_list from '../api_config.js'
	import axios from 'axios'
	export default {
		name: 'electricity',
		data: function() {
			return {
				option: {},
				result: [],
				status: false,
			}
		},
		props: [],
		components: {},
		watch: {},
		mounted() {
			this.init()
		},
		methods: {
			'init': function(){
				this.create()
				this.timing_start()
			},
			'timing_start': function() {
				setInterval(() => {
					this.create()
				}, 8000);		//每八秒刷新一次
			},
			'create': function() {
				var that = this;
				axios.get(api_list.log_screen.black_piechart).then(function(response) {
					// that.status = (response.data.result.length == 0) ? true : false;
					if (response.data.result.length == 0){
						that.status = true
					}else {
						that.option = {
							color: ['#aaaaff','#aaff7f','#27f8f8','#fd8589','#285dc9','#ffaaff','#ff007f'],
							series: [
							    {
							      type: 'pie',
							      data: response.data.result,
							      insideLabel: {
							      	show: true,
							      	style: {
							      		fontSize: 12,
							      		fill: '#ffffff',
							      		textAlign: 'center',
							      		textBaseline: 'middle'
							      	}
							      },
							      outsideLabel: {
							      	show: true,
							      	style: {
							      		fontSize: 15,
							      		// fill: '#00e8e8',
							      		textAlign: 'center',
							      		textBaseline: 'middle'
							      	}
							      },
							      roseType: true
							    }
							  ]
						}	
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
