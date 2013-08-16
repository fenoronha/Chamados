(function(){

	require.config({
		paths: {
			'jquery': 'js/libs/jquery-1.10.2'
		},
		baseUrl: 'http://delta.chamados:8888/',
		urlArgs: '_'+ Math.random() // evitar o cache dos arquivos carregados
	});

	require(['require','jquery'], function(require, $){
		var dependencies = [
								'js/app/application'
							];

		require(dependencies, function(require){});
	});
})();