var EasyTranslate = /** @class */ (function () {
    function EasyTranslate(s, defaultLang, mode, urlFile) {
        this.haveAttribute = null;
        this.mainTranslateObject = null;
        this.defaultTranslate = null;
        this.mode = false;
        this.defaultTranslate = defaultLang;
        // this.changeLang(this.defaultTranslate);
        if (!mode && s == undefined) {
            console.error("Error, you are using object mode and don't give a object");
            return;
        }
        else {
            this.mainTranslateObject = s;
        }
        if (mode && urlFile !== undefined) {
        }
        if (s == null && s == undefined && mode == true) {
            this.mainTranslateObject = this.getFileIfMode(urlFile);
        }
        if (mode === undefined || mode === null) {
            console.error("Mode error");
            return;
        }
        if (mode && urlFile === undefined) {
            console.error("You are using the url mode, but the url is not defined");
        }
        else {
            this.urlFile = urlFile;
        }
    }
    EasyTranslate.prototype.getElementsToTransalte = function () {
        var elements = document.querySelectorAll('*');
        var allElementasWhoHaveAttr = [];
        // for(let a of elements){
        // 	if(a.getAttribute('translate') != undefined) allElementasWhoHaveAttr.push(a);
        //  }
        Array.prototype.forEach.call(elements, function (element) {
            if (element.getAttribute('translate') != undefined)
                allElementasWhoHaveAttr.push(element);
        });
        return allElementasWhoHaveAttr;
    };
    EasyTranslate.prototype.setDefaultLang = function (s) {
        if (this.defaultTranslate == s)
            console.info("You are already using the language: " + s);
        this.defaultTranslate = s;
        this.changeLang(s);
    };
    EasyTranslate.prototype.changeLang = function (lang) {
        if (this.checkIndex(lang)) {
            var ela = this.getElementsToTransalte();
            // Get object keys.
            var keys = Object.keys(this.mainTranslateObject[lang]);
            for (var _i = 0, ela_1 = ela; _i < ela_1.length; _i++) {
                var a = ela_1[_i];
                var htmlAttr = a.getAttribute('translate');
                if (keys.indexOf(htmlAttr) != -1) {
                    a.innerHTML = this.mainTranslateObject[lang][htmlAttr];
                }
            }
        }
        else {
            console.error("The language prefix " + lang + " does not exist in the object to translate. ");
            return;
        }
    };
    EasyTranslate.prototype.getFileIfMode = function (urlFIle) {
        var ob = {};
        if (this.checkUrl) {
            var client = new XMLHttpRequest();
            client.open('GET', urlFIle);
            client.onreadystatechange = function () {
                if (client.status == 200 && client.readyState == 4) {
                    try {
                        ob = client.responseText;
                        console.log(ob);
                    }
                    catch (e) {
                        console.error("Error at parsing json file.");
                    }
                }
            };
            if (client.status == 404)
                console.error("The " + urlFIle + " file  not found");
            client.send(null);
        }
        else {
            console.log("Can't make the request");
        }
        return ob;
    };
    EasyTranslate.prototype.checkUrl = function (url) {
        var request;
        if ('XMLHttpRequest' !== undefined) {
            request = new XMLHttpRequest();
        }
        request.open('GET', url);
        request.onreadystatechange = function () {
            if (request.status == 200)
                return true;
        };
        request.send(null);
        return false;
    };
    EasyTranslate.prototype.checkIndex = function (s) {
        for (var a in this.mainTranslateObject) {
            if (a === s) {
                return true;
            }
        }
        return false;
    };
    return EasyTranslate;
}());
