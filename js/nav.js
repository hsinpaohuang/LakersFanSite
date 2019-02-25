function mouseover(box)
{
	box.classList.add("boxes_mouseover");
	box.classList.remove("boxes");
}
			
function mouseout(box)
{
	box.classList.add("boxes");
	box.classList.remove("boxes_mouseover");
}