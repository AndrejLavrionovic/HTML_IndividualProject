function openImage(num)
{
	var img=document.getElementsByName("image");
	var w=img[num].naturalWidth, h=img[num].naturalHeight;
	var innerW=window.innerWidth, innerH=window.innerHeight;
	var wPos=(innerW-w)/2;
	var hPos=(innerH-h)/2;
	var win=window.open("","Picture", "width="+w+", height="+h+", status=no, resizable=no");
	win.moveTo(wPos, hPos);
	var d=win.document;
	d.open();
	d.write("<img src="+img[num].src+" title=\"CLICK TO CLOSE\" onclick=\"window.close();\" />");
	d.close();
}