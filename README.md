# MyDOMLib

Hello! Welcome to MyLib! Note: This is a work in progress, so new features are yet to come!

While there are a few side functions, MyDOMLib is mainly made for DOM manipulation.

## Documentation

### ErrorCatch(code, htmlElement, type, replace)

#### Parameter(s):

- `code`:
  The code you want to analyze. It can either be a function, string (" "), or a multi-line string (``).
  
- `htmlElement`:
  The HTML element(s) that will display the error. To use "_" to select the element, just do _("your element").elementSelected.
  
- `type`:
  The type you want to edit the HTML element. It can be either text or html.
  
- `replace`:
  If you want to replace the HTML element's current text content or inner HTML, set it to true. If you don't, set it to false.

#### Example:

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Assuming you have the library file -->
    <script src="myLib.js"></script>
</head>
<body>
    <p id="errorDisplay"></p>
    <script>
        // With a string:
        new ErrorCatch("function() {}", _("#errorDisplay").elementSelected, "text", true);
        // This will have the error "SyntaxError: Function statements must have a name."

        // With a function name:
        new ErrorCatch(exampleFunction, _("#errorDisplay").elementSelected, "text", true);

        function exampleFunction() {
            console.log("hi");
            wefi
        }
        // This will have the error "ReferenceError: Can't find variable: wefi"

        // With a multi-line string:
        new ErrorCatch(`
            function hi() {
                var qwerty =
            }
        `, _("#errorDisplay").elementSelected, "text", true);
        // This will have the error "SyntaxError: Unexpected identifier 'qwerty'"
        // Note: You will need to have ES6 enabled to have multi-line comments.
    </script>
</body>
</html>
```

### _(selection)

#### Parameter(s):

-`selection`:
  The HTML element you want to select. It can start with `.` when you want to select a class, `#` for when you want to select an ID, and use start with nothing if you are selecting elements.
  Example:
  ```html
<!DOCTYPE html>
<html>
<head>
    <!--Assuming you have the library file-->
    <script src="myLib.js"></script>
    <style>
        .hello {
            color:red;
        }
    </style>
</head>
<body>
    <div id="myDiv">
        This is a div with the ID of "myDiv"
    </div>
    <p class="hello">This is a p element with the class of "hello"</p>
    <p class="hello">This is a p element with the class of "hello"</p>
    <p class="hello">This is a p element with the class of "hello"</p>
    <p class="hello">This is a p element with the class of "hello"</p>
    <p class="hello">This is a p element with the class of "hello"</p>
    <img id="picture" src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" alt="Cat August 2010-4.jpg" width="300">
    <img id="picture2" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Labrador_Retriever_-_Male_IMG_3323.jpg" width="300">
    <div id="appendDiv"></div>
    <script>
        //Here it returns the element with the id of "myDiv":
        _("#myDiv").el;

        //Here it edit's the text element:
        _("#myDiv").edit("text", "This is an edited div with the ID of \"myDiv\"");

        //Here it changes the src of 2 elements in one line:
        _("#picture").edit("src", "https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Labrador_Retriever_-_Male_IMG_3323.jpg")._("#picture2").edit("src", "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg");
        //This shows that you can chain.

        //Here it changes the alt of 2 elements in 2 lines:
        _("#picture").edit("alt", "Black Labrador Retriever");
        _("#picture2").edit("alt", "Cat August 2010-4.jpg");

        //Here it collects all the elements with the class of "hello" and edit's their color and gives them a border:
        _(".hello").setStyle("color", "green").setStyle("border", "10px ridge black");
        //Here it makes a totally new element and appends it to an element with the id of "appendDiv" with a border:
        var newElement = createElem("p").setID("divP").setClass("divP").setClass("divP2").result;
        _("#divP").edit("text", "Hello! This is a \"p\" element inside a ");
        _(".divP").edit("text", "div!", true);
        _(".divP2").setStyle("margin-left", "10px");
        _("#appendDiv").append(newElement).setStyle("border", "10px ridge red");
    </script>
</body>
</html>
  ```
#### Returned Variables:

-`el`:
  By using "_("whateverYouWantToSelect").el" it will return the element that has been selected.
