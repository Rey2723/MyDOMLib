function ErrorCatch(code, htmlElement, type, replace) {
    if(typeof code === "string" || typeof code === "function") {
        try{
            if(typeof code === "string") {
                new Function(code);
            }else{
                code();
            }
        }catch(error){
            if(type === "text") {
                if(replace === true) {
                    htmlElement.textContent = error;
                }else{
                    htmlElement.textContent += error;
                }
            }else if(type === "html") {
                if(replace === true) {
                    htmlElement.innerHTML = error;
                }else{
                    htmlElement.innerHTML += error;
                }
            }
        }
    }
}
function LI_createBlankElem$23() {
    var LI_blankElem$23 = document.createElement("blank-element");
    
    LI_blankElem$23.style.display = "none";
    LI_blankElem$23.style.backgroundColor = "#f0f0f0";
    LI_blankElem$23.style.padding = "10px";
    LI_blankElem$23.style.border = "1px solid #ccc";
    
    return LI_blankElem$23;
}
var LI_blankElem$23 = LI_createBlankElem$23();
document.body.appendChild(LI_blankElem$23);
function _(selection) {
    
    var LI_elem$23;
    var LI_selectionId = selection.replace(/[#]/, '');
    var LI_selectionClass = selection.replace(/[.]/, '');
    function checkType() {
        if(selection.startsWith("#")) {
            console.log("id true");
            LI_elem$23 = document.getElementById(LI_selectionId);
            
        }else if(selection.startsWith(".")) {
            console.log("class true");
            LI_elem$23 = Array.from(document.getElementsByClassName(LI_selectionClass));
        }else{
            LI_elem$23 = Array.from(document.getElementsByTagName(selection));
        }
    }
    function edit(whatToEdit, whatToEditTo, add) {
        function checkAdd() {
            if(add === undefined || add === false) {
                return false;
            }else if(add === true){
                return true;
            }
        }
        if(whatToEdit === "text") {
            isArrayThenClbk(LI_elem$23, function(i) {
                if(!checkAdd()) {
                    LI_elem$23[i].textContent = whatToEditTo;
                }else{
                    LI_elem$23[i].textContent += whatToEditTo;
                }
            }, function(){
                LI_elem$23.textContent = whatToEditTo;
            });
        }
        if(whatToEdit === "html") {
            isArrayThenClbk(LI_elem$23, function(i) {
                if(!checkAdd()) {
                    LI_elem$23[i].innerHTML = whatToEditTo;
                }else{
                    LI_elem$23[i].innerHTML += whatToEditTo;
                }
            },function(){
                if(!checkAdd()) {
                    LI_elem$23.innerHTML = whatToEditTo;
                }else{
                    LI_elem$23.innerHTML += whatToEditTo;
                }
            });
        }
        if(whatToEdit === "src") {
            isArrayThenClbk(LI_elem$23, function(i) {
                if(!checkAdd()) {
                    LI_elem$23[i].src = whatToEditTo;
                }else{
                    LI_elem$23[i].src += whatToEditTo;
                }
            },function(){
                if(!checkAdd()) {
                    LI_elem$23.src = whatToEditTo;
                }else{
                    LI_elem$23.src += whatToEditTo;
                }
            });
        }
        if(whatToEdit === "alt") {
            isArrayThenClbk(LI_elem$23, function(i) {
                if(!checkAdd()) {
                    LI_elem$23[i].alt = whatToEditTo;
                }else{
                    LI_elem$23[i].alt += whatToEditTo;
                }
            },function(){
                if(!checkAdd()) {
                    LI_elem$23.alt = whatToEditTo;
                }else{
                    LI_elem$23.alt += whatToEditTo;
                }
            });
        }
        return whatToReturn();
    }
    function addClass(classToSet) {
        isArrayThenClbk(LI_elem$23, function(i) {
            try{
                LI_elem$23[i].classList.add(classToSet);
            }catch(error){
                LI_elem$23[i].className += classToSet;
            }
        }, function() {
            try{
                LI_elem$23.classList.add(classToSet);
            }catch(error) {
                LI_elem$23.className += classToSet;
            }
        });
        return whatToReturn();
    }
    function removeClass(classToRemove) {
        isArrayThenClbk(LI_elem$23, function(i) {
            LI_elem$23[i].classList.remove(classToRemove);
        }, function(){
            LI_elem$23.classList.remove(classToRemove);
        });
        return whatToReturn();
    }
    function setID(IDToSet) {
        isArrayThenClbk(LI_elem$23, function(i) {
            LI_elem$23[i].id = IDToSet;
        }, function() {
            LI_elem$23.id = IDToSet;
        });
        return whatToReturn();
    }
    function removeID() {
        isArrayThenClbk(LI_elem$23, function() {
            LI_elem$23[i].id = null;
        }, function(){
            
        });
        return whatToReturn();
    }
    function append(element) {
        isArrayThenClbk(LI_elem$23, function(i) {
            LI_elem$23[i].appendChild(element);
        }, function() {
            LI_elem$23.appendChild(element);
        });
        return whatToReturn();
    }
    function setStyle(styleToChangeOrSet, whatToMakeIt) {
        /*——————*/
        /* Matches dashed string for camelizing*/
        var rdashAlpha = /-([a-z])/g;
        
        /* Used by camelCase as callback to replace()*/
        function fcamelCase( _all, letter ) {
        	return letter.toUpperCase();
        }
        
        /* Convert dashed to camelCase*/
        function camelCase( string ) {
        	return string.replace( rdashAlpha, fcamelCase );
        }
        styleToChangeOrSet = camelCase(styleToChangeOrSet);
        /*FULL CREDIT TO jQuery UP TO ——————*/
        /*SEE HERE: https://github.com/jquery/jquery/blob/main/src/core/camelCase.js*/
        /*Note: I had to turn the //'s into /*...*/
        /*from the jQuery excerpt because of the way the min.js version of this is. Still full credit to jQuery though*/
        isArrayThenClbk(LI_elem$23, function(i) {
            LI_elem$23[i].style[styleToChangeOrSet] = whatToMakeIt;    
        }, function(i) {
            LI_elem$23.style[styleToChangeOrSet] = whatToMakeIt;
        });
        return whatToReturn();
    }
    checkType();
    var htmls = [];
    isArrayThenClbk(LI_elem$23, function(i) {
        htmls.push(LI_elem$23[i].innerHTML);
    }, function() {
        htmls = LI_elem$23.innerHTML;
    });
    var alts = [];
    isArrayThenClbk(LI_elem$23, function(i) {
        alts.push(LI_elem$23[i].alt);
    }, function() {
        alts = LI_elem$23.alt;
    });
    var srcs = [];
    isArrayThenClbk(LI_elem$23, function(i) {
        srcs.push(LI_elem$23[i].src);
    }, function() {
        srcs = LI_elem$23.src;
    });
    var widths = [];
    isArrayThenClbk(LI_elem$23, function(i) {
        widths.push(LI_elem$23[i].width);
    }, function() {
        widths = LI_elem$23.width;
    });
    var heights = [];
    isArrayThenClbk(LI_elem$23, function(i) {
        heights.push(LI_elem$23[i].height);
    }, function() {
        heights = LI_elem$23.height;
    });
    var texts = [];
    isArrayThenClbk(LI_elem$23, function(i) {
        texts.push(LI_elem$23[i].textContent);
    }, function() {
        texts = LI_elem$23.textContent;
    });
    function whatToReturn() {
        return  {
       	    el:LI_elem$23,
            alt:alts,
            src:srcs,
            html:htmls,
            width:widths,
            height:heights,
            text:texts,
            edit: edit,
            addClass: addClass,
            removeClass: removeClass,
            setID: setID,
            removeID: removeID,
            append: append,
            setStyle:setStyle,
            _:_
        }
    }
    return whatToReturn();
}
function createElem(element) {
    var elemCreated = document.createElement(element);
    LI_blankElem$23.appendChild(elemCreated);
    var hasBeenSet = false;
    function setID(idToSetTo) {
        elemCreated.id = idToSetTo;
        return {
            result:elemCreated,
            setID:setID,
            setClass:setClass,
        };
    }
    function setClass(classToSet) {
        try{
            elemCreated.classList.add(classToSet);
        }catch(error) {
            elemCreated.className += classToSet;
        }
        
        return {
            result:elemCreated,
            setID:setID,
            setClass:setClass,
        };
    }
    return {
        result: elemCreated,
        setID: setID,
        setClass: setClass,
    };
}
function isArrayThenClbk(elementToCheck, callbackIfTrue, callbackIfFalse) {
    if(Array.isArray(elementToCheck)) {
        for(var i = 0; i < elementToCheck.length; i++) {
            callbackIfTrue(i);
        }
    }else{
        callbackIfFalse();
    }
}
