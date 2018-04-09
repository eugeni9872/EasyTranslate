# EasyTranslate JS!

EasyTranslate originalmente esta escrito el TypeScript, con la finalidad de hacer una página accesible en mas de un idioma. La ventaja de utilizar EasyTranslate es que no depende de ninguna libreria como jQuery o cualquer otra, esta escrita para ser ejecutada sin ninguna dependencia, es decir solo te hace falta incluir el archivo y list. DEMO

[DEMO](https://eugeni9872.github.io/EasyTranslate/ "DEMO")



## Como se utiliza? 

Para poder utilizar las funcionalidades de EasyTransalte, simplemente se tiene que incluir el archivo EasyTransjalte.js

    <!DOCTYPE html>
    <html>
    <head>
    	<title>EasyTranslate</title>
    </head>
    <body>
    
    
    <!-- EasyTranslate js -->
    <script src="https://cdnpythondevji.nyc3.digitaloceanspaces.com/js/EasyTranslate.js"></script>
    </body>
    </html>

 
 Una vez tenemos el archivo importado, podemos hacer uso de el. Por ejemplo:

	//Nuestro objeto que contiene los datos que se van a traducir
    var translate = {
    
		    'en':{
		    
		    'page-title':'Dimension by HTML5 UP',
		    
		    'title':'Dimension',
		    
		    'work':'Work',
		    
		    'about':'About',
		    
		    'contact':'Contact'
		    
		    },
		    
		    'es':{
		    
		    'page-title':'Dimensión por HTML5 UP',
		    
		    'title':'Dimensión',
		    
		    'work':'TRABAJOS',
		    
		    'about':'SOBRE MI',
		    
		    'contact':'CONTACTO'
		    
		    }
		    
    }
    //Instancia de nuestro objeto.
    var traductor = new EasyTranslate(translate,'en',0);
    
    //Metodo que nos permite cambiar el idioma por defecto
    traductor.setDefaultLang('en');
    
    //Evento que contesta a los botones de cambiar el idioma.
    function cambia(l){
	    Utilizamos el metodo changeLang del objeto, para realizar los cambios.
	    traductor.changeLang(l);
    
    }


Listo ahora simplemente tenemos que enlazar cada elemento del objeto hacia el elemento que queremos traducir utilizando el atributo ***translate***.  Ejemplo:


    <h1  translate="title"></h1>


Ahora con la ayuda de dos botones podemos cambiar el contenido del sitio.

	<!--Botones que responden a los eventos, cuando se haga click-->
    <button onclick="return cambia('en');" translate="en">EN</button>
    
    <button onclick="return cambia('es');" translate="es">ES</button>

Con esto ya podemos traducir nuestro sitio web.


## Parámetros EasyTranslate

Al hacer una instancia del  traductor, le tenemos que pasar una serie de parámetros. 

| Parámetro|  Descripción |
|---|---|
| Objeto |  El objeto con el que se va a traducir la web |
| Idioma por defecto |  El idioma por defecto que se va a utilizar |
| Modo|  El modo nos permite trabajar con archivos json. **Actualmente en desarrollo**  utiliza 0|


## Métodos

Tenemos una serie de métodos que nos permiten cambiar los el comportamiento del traductor.

| Método|  Descripción | Parámetro| Resultado
|---|---|---|---|
| **setDefaultLang**|  Nos permite cambiar el idioma por defecto | idioma | void
| **changeLang**|  Se encarga de cambiar el idioma de la página web.  | idioma| void
| **checkIndex**|  Devuelve true si el idioma que pasamos existe en el objeto.  | idioma|**true-false**



## Licencia

© [GNU FDL](http://www.gnu.org/copyleft/fdl.html) por Eugeni Bejan
