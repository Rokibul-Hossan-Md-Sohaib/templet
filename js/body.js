


globalHTML5Api.on('load', function(){
	function prevent(_event) {
		if (_event) {
			_event.returnValue = false;
			_event.cancelBubble = true;
			if (_event.preventDefault) {
				_event.preventDefault();
			}
			if (_event.stopPropagation) {
				_event.stopPropagation();
			}
		}
	}
	globalHTML5Api.init({
		'resize': [
			{
				'name': 'state-1',
				'fixed' : {
					'vertical':'center',
					'horizontal':'center'
				},
				'width': '300px',
				'height': '250px'
			}
		]
	});
	function $(id){
		return document.getElementById(id);
	}
	var close = $('close');
	close.onclick = function(_event){
		prevent(_event);
		globalHTML5Api.close();
	};
	document.body.onclick = function(_event){
		prevent(_event);
		globalHTML5Api.click();
		globalHTML5Api.close(true);
	};
	document.body.onselectstart = function() {
		return false;
	}
});