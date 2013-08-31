(function(){

	require.config({
		paths: {
			'text': 'js/libs/require/text',
			'jquery': 'js/libs/jquery/js/jquery-1.9.1',
			'underscore': 'js/libs/underscore/underscore'
		},
		baseUrl: 'http://delta.chamados:8888/',
		urlArgs: '_'+ Math.random() // evitar o cache dos arquivos carregados
	});

	require(['require','text', 'jquery', 'underscore'], function(require){
			var dependencies = [	
								'js/app/application'
							];

		require(dependencies, function(require){});
	});
})();