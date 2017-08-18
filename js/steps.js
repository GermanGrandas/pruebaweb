;(function(){

	$(".step:nth-child(1)").addClass("active")

	const selector = "#contact-form"

	$(".path-step").on("click", (ev)=>{
		const $currentCircle = $(ev.target)
		$(".path-step.active").removeClass("active")
		$currentCircle.addClass("active")

		const position = $currentCircle.index(".path-step") + 1 
		let $test = $(".step:nth-child(" + position +")")
		siguiente($test)
	})

	$(selector).find(".input").on("change", (event)=>{
		let $input = $(event.target)
		let $next_step = $input.parent().next(".step")
		if($next_step.length > 0){
			siguiente($next_step)
		}else{
			validarFormulario()
		}
	})

	//Helpers

	function validarFormulario(){
		if(esValidoFormulario()){

		}else{
			let $fieldsetInvalido = $(selector).find(".input:invalid").first().parent()
			siguiente($fieldsetInvalido)
		}
	}

	function esValidoFormulario(){
		return document.querySelector(selector).checkValidity()
	}

	function siguiente($next_step){
		$(".step.active").removeClass("active")
		$next_step.addClass("active")
		$next_step.find(".input").focus()

		//Coordinar los circulos
		const position = ($next_step.index(".step"))
		console.log(position)
		$(".path-step.active").removeClass("active")
		$(".path-step:nth-child(" + position +")").addClass("active")
		
	}
})()