require(['text!views/test/test.html'], function(html){
	
	var test_html = _.template(html);
	for(var i=0; i <= 1000; i++){
		$('#list').append(test_html({title:'opa-' + i}))
	}
});

