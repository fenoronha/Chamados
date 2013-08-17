require(['text!views/test/test.html'], function(html){
	
	var test_html = _.template(html);

	$('body').append(test_html({title:'opa'}));
});

