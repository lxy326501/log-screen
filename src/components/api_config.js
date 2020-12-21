// var url = window.env.url;
var url = 'http://10.245.142.253:7999';	



var obj = {
	'log_screen': {
		'day':url+'/safestatus/day',
		'week': url+'/safestatus/week',
		'monitor': url+'/monitor',
		'black_piechart':url+'/realtime/black_piechart',
		'black_list':url+'/realtime/black_list',
		'exception_piechart':url+'/realtime/exception_piechart',
		'exception_list':url+'/realtime/exception_list',
		'warn_num':url+'/warn_num',
		'ip_access':url+'/ip_access',
	},
};

export default obj;