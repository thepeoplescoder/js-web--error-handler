// Overriding the default error handler just to show that it can be done.
// This is to assist in debugging scripts.
window.alert("pulling in error handler.");
onerror = (function (globalObject, oldOnError)
{
	alert("creating the function.");
	return function (errMsg, scriptUrl, lineNumber, columnNumber, errObj)
	{
		// Build error message.
		var message = "Error triggered.\n\n";
		message += "Error: " + errMsg + "\n";
		message += "URL of script: " + scriptUrl + "\n";
		message += "Line " + lineNumber + ", Column " + columnNumber;

		// Display the message.  We alert() it just in case
		// if we forget to check the JS console.
		console.log(message);
		if (globalObject.alert)
		{
			globalObject.alert(message);
		}

		// Chain previous handler.  Basically "playing nice with others."
		// Not really necessary here, but I'm just showing that it's possible.
		if (oldOnError instanceof Function)
		{
			oldOnError(errMsg, scriptUrl, lineNumber, columnNumber, errObj);
		}
	}
})(this, onerror);
