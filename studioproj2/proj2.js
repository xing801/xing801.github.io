document.querySelectorAll(".text").forEach((item, i) => {
	item.addEventListener("click", expand)
})
function expand(){
	var button=event.currentTarget
	document.querySelector(".dot").classList.toggle("expand")
	console.log(button.dataset.number)
document.querySelectorAll(".paragraph").forEach((item, i) => {
	if(button.dataset.number==item.dataset.number) {
		item.style.opacity=1
	} else {
		item.style.opacity=0
	}
})
}

