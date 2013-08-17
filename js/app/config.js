(function(){

	require.config({
		paths: {
			'text': 'js/libs/text',
			'jquery': 'js/libs/jquery-1.10.2',
			'underscore': 'js/libs/underscore'
		},
		baseUrl: 'http://delta.chamados:8888/',
		urlArgs: '_'+ Math.random() // evitar o cache dos arquivos carregados
	});

	require(['require','text','underscore','jquery'], function(require, text, _, $){
		var dependencies = [	
								'js/app/application'
							];

		require(dependencies, function(require){});
	});
})();