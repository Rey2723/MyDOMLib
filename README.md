# MyDOMLib
# MyDOMLib

Hello! Welcome to MyLib!
Note: This is a work in progress, so new features are yet to come!

While there are a few side functions, MyLib is mainly made for DOM manipulation.

#|—————————————————|
#| *Documentation* |
#|—————————————————|

ErrorCatch(code, htmlElement, type, replace);
	Parameters:
		code:
			The code you want to analyze.
			Can either be a function,
			string (" "), or a
			multi-line string (` `).
		htmlElement:
			The HTML element(s) that will
			display the error. To use "_"
			to select the element just do
			"_("your element").elementSelected".
		type:
			The type you want to edit the 
			HTML element. It can be either
			text or html.
		replace:
			If you want to replace the 
			HTML element's current text 
			content or inner html you set
			it to true. If you don't you
			set it to false.
	Example:

		<!DOCTYPE html>
		<html>
		<head>
			<!--Assuming you have the library file-->
			<script src="myLib.js"></script>
		</head>
		<body>
			<p id="errorDisplay"></p>
			<script>
				//With a string:
				new ErrorCatch("function() {}", _("#errorDisplay").elementSelected, "text", true);
				//This will have the error "SyntaxError: Function statements must have a name."
				
				//With a function name:
				new ErrorCatch(exampleFunction, _("#errorDisplay").elementSelected, "text", true);
				
				function exampleFunction() {
					console.log("hi");
					wefi
				}
				//This will have the error "ReferenceError: Can't find variable: wefi"
				
				//With a multi-line string:
				new ErrorCatch(`
				function hi() {
					va qwerty =
				}
				`, _("#errorDisplay").elementSelected, "text", true);
				//This will have the error "SyntaxError: Unexpected identifier 'qwerty'"
				//Note: You will need to have ES6 enabled to have multi-line comments.
			</script>
		</body>
		</html>
