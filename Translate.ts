class Translate{

	private haveAttribute:string = null;
	private mainTranslateObject:object=null;
	private defaultTranslate = null;

	constructor(s:object, defaultLang:string, mode:boolean){
		if(s != null || s != undefined){
			this.mainTranslateObject = s;
		}else{
			console.error("You need an object with the properties to be able to do the translation");
			return;
		}

		if(mode == undefined || mode == null){
			console.error("Mode error");
			return
		}
		if(!this.checkIndex(defaultLang)){
			console.error("The language prefix "+  defaultLang  + " does not exist in the object to translate. ");
			return;
		}

		this.defaultTranslate = defaultLang;
		this.changeLang(this.defaultTranslate);
	}
	 
	 getElementsToTransalte():Array<Element>{
	 	let elements: NodeListOf<Element> = document.querySelectorAll('*');
	 	let allElementasWhoHaveAttr:Array<Element> = [];


         Array.prototype.forEach.call(elements, function(index,a){
	 		if(a.getAttribute('translate') != undefined) allElementasWhoHaveAttr.push(a);
	 	});

         
         
	 	return allElementasWhoHaveAttr;
	}

	setDefaultLang(s:string){
		if(this.defaultTranslate == s )console.info("You are already using the language: " + s);
		this.defaultTranslate = s;
		this.changeLang(s);
	}

	changeLang(lang:string){
		if(this.checkIndex(lang)){
			let ela:Array<Element> = this.getElementsToTransalte();

			// Get object keys.
			let keys:Array<string> = Object.keys(this.mainTranslateObject[lang]);
			for(let a of ela){
				let htmlAttr:string = a.getAttribute('translate');

				if(keys.indexOf(htmlAttr) != -1){
					a.innerHTML = this.mainTranslateObject[lang][htmlAttr];
				}
			}

		}else{
			console.error("The language prefix "+  lang  + " does not exist in the object to translate. ");
			return;
		}

	}


	checkIndex(s:string):boolean{
		for(let a in this.mainTranslateObject){
			if(a === s){
				return true;
			}
		}
		return false;
	}
}


