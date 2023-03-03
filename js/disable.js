alert("This is an example page");
$(document).ready(function()
{
	// disable right click in the webpage
	$("#editor").on("context-menu",function(e)
	{
		return false;
	});
	$("#editor").bind('cut copy paste',function(e)
	{
		e.preventDefault();
	});
});