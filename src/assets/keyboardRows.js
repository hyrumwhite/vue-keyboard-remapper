export const keyboardKeys = {};
const createKey = (code = "", className, text = "", character = "") => {
	let key = {
		class: className,
		code,
		active: false,
		text,
		character,
		shiftKeyCharacter: "",
		shiftKeyText: text,
		ctrlKeyCharacter: "",
		ctrlKeyText: text,
		altKeyCharacter: "",
		altKeyText: text,
		altgrKeyCharacter: "",
		altgrKeyText: text,
	};
	if (key.code) {
		keyboardKeys[key.code] = key;
	}
	return key;
};

const row0 = [
	createKey("Backquote"),
	createKey("Digit1"),
	createKey("Digit2"),
	createKey("Digit3"),
	createKey("Digit4"),
	createKey("Digit5"),
	createKey("Digit6"),
	createKey("Digit7"),
	createKey("Digit8"),
	createKey("Digit9"),
	createKey("Digit0"),
	createKey("Minus"),
	createKey("Equal"),
	createKey("Backspace", "backspace-key rightside", "Backspace"),
];
const row1 = [
	createKey("Tab", "tab-key", "Tab"),
	createKey("KeyQ"),
	createKey("KeyW"),
	createKey("KeyE"),
	createKey("KeyR"),
	createKey("KeyT"),
	createKey("KeyY"),
	createKey("KeyU"),
	createKey("KeyI"),
	createKey("KeyO"),
	createKey("KeyP"),
	createKey("BracketLeft"),
	createKey("BracketRight"),
	createKey("Backslash", "backslash-key"),
];
const row2 = [
	createKey("CapsLock", "capslock-key leftside", "Caps Lock"),
	createKey("KeyA"),
	createKey("KeyS"),
	createKey("KeyD"),
	createKey("KeyF"),
	createKey("KeyG"),
	createKey("KeyH"),
	createKey("KeyJ"),
	createKey("KeyK"),
	createKey("KeyL"),
	createKey("Semicolon"),
	createKey("Quote"),
	createKey("Enter", "enter-key rightside", "Enter"),
];
const row3 = [
	createKey("ShiftLeft", "shiftleft-key leftside", "Shift"),
	createKey("KeyZ"),
	createKey("KeyX"),
	createKey("KeyC"),
	createKey("KeyV"),
	createKey("KeyB"),
	createKey("KeyN"),
	createKey("KeyM"),
	createKey("Comma"),
	createKey("Period"),
	createKey("Slash"),
	createKey("ShiftRight", "shiftright-key rightside", "Shift"),
];
const row4 = [
	createKey("ControlLeft", "control-key", "Ctrl"),
	createKey("", "disabled control-key"),
	createKey("AltLeft", "control-key", "Alt"),
	createKey("Space", "space-key"),
	createKey("AltRight", "control-key", "Alt"),
	createKey("AltGr", "control-key", "AltGr"),
	createKey("ControlRight", "control-key", "Ctrl"),
];

export const keyboardRows = [row0, row1, row2, row3, row4];
