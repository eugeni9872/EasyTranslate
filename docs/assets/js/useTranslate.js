
var translate = {
	
	'en':{
		'page-title':'Dimension by HTML5 UP',
		'title':'Dimension',
		'present':'A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br /> for free under the <a href="https://html5up.net/license">Creative Commons</a> license.',
		'into':'Intro',
		'work':'Work',
		'about':'About',
		'contact':'Contact'
	},
	'es':{
		'page-title':'Dimensión por HTML5 UP',
		'title':'Dimensión',
		'present':'Una plantilla de sitio totalmente receptiva diseñada por <a href="https://html5up.net"> HTML5 UP </a> y lanzada <br /> gratis bajo <a href = "https://html5up.net/ licencia "> Creative Commons </a> licencia.',
		'into':'PRESENTACION',
		'work':'TRABAJOS',
		'about':'SOBRE MI',
		'contact':'CONTACTO'
	}
	
}

var traductor = new EasyTranslate(translate,'en',0);
traductor.setDefaultLang('en');


function cambia(l){
    traductor.changeLang(l);
}