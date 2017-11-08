function foo(){
	var i = 100;
	
	function bar(){
		console.log(i);
	}
	
	baz(bar);
}

function baz(fn){
	fn();
}
