require(['text!views/login/index.html'], function(html){
	
	var credentials = {
		username: 'admin',
		password: 'mudar123'
	};

	$('body').html(_.template(html)(credentials));

	$('#btn_sign_in').click(function(event){
		console.log(credentials);
	});
});



