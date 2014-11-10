
(function($){
	$(function(){
		
	  	$('input#go').click(function(){
			if(checkform() == true){
		      	$.post("/newsletter/?p=subscribe&id=2", $("#signup").serialize(),
		      	function(data) {
		         	//alert("Data Loaded: " + data);
		        });
		      	$('#signup').html('<h3>Thank you for your trust.</h3> We\'ll keep you updated about our progress once you confirm your subscription. Check you email.');
		    }
	  	});

	function checkform(){
	  	var email = $('input#email').val();

	 	if( email == "" ){
	 		var status = 'empty';
	 		boxDialog(status);
	      	return false;
	    }
	    if( validateEmail(email) == false ){
	    	var status = 'fail';
	      	boxDialog(status);
	      	return false;
	    }
	    return true;
	}

	function validateEmail(email){
		//testing regular expression
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;

		if(filter.test(email)){
  			return true;
		}else{
  			return false;
		}
	}
	
	function boxDialog(status){
		if(status == 'empty'){
			var text = 'You forgot to enter your email address... :(';
		} else if(status == 'fail'){
			var text = 'It looks like an invalid email... :(';
		}
		
		var template = '<div class="overlay"><div class="box dialog"><h3>Ops...</h3>' + text + '</div></div>';
		
		$('body').append(template);
		
		$('.overlay').click(function(){
			$('.box.dialog').removeClass('open');
			$(this).remove();
		});
		
	}
	

	});
})(jQuery);