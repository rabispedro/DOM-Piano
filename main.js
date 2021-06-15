//	Get all Piano Keys
const keys = document.querySelectorAll(".key")

//	Play notes
function playNote(event){
	let audioKeyCode = getKeyCode(event)

	//	Typed/Pressed Key
	const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

	//	If Key exists
	const cantFoundAnyKey = !key

	if(cantFoundAnyKey){
		return
	}

	//	Play Audio
	addPlayingClass(key)
	playAudio(audioKeyCode)

	return
}

function removePlayingClass(event){
	event.target.classList.remove("playing")
}

function addPlayingClass(key){
	key.classList.add("playing")
}

function playAudio(audioKeyCode){
	const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
	audio.currentTime = 0
	audio.play()
}

function getKeyCode(event){
	let keyCode;
	const isKeyboard = event.type === "keydown"

	if(isKeyboard){
		keyCode = event.keyCode
	}else{
		keyCode = event.target.dataset.key
	}

	return keyCode
}

function registerEvents(){
	//	Handle Mouse Clicks
	keys.forEach(obj => {
		obj.addEventListener("click", playNote)
		obj.addEventListener("transitionend", removePlayingClass)
	})

	//	Handle Keyboard Typing
	window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)
