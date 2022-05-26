<template>
	<button
		:key="keyInfo.code + keyInfo.class + keyInfo.character"
		:class="{ [keyInfo.class || 'key']: true, active: keyInfo.active }"
	>
		<span>{{ text }}</span>
	</button>
</template>

<script>
export default {
	props: {
		keyInfo: {
			type: Object,
			default: () => ({}),
		},
		ctrlKey: {
			type: Boolean,
			default: false,
		},
		shiftKey: {
			type: Boolean,
			default: false,
		},
		altKey: {
			type: Boolean,
			default: false,
		},
		altGrKey: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		text() {
			if (this.ctrlKey) {
				return this.keyInfo.ctrlKeyText || this.keyInfo.ctrlKeyCharacter;
			} else if (this.shiftKey) {
				return this.keyInfo.shiftKeyText || this.keyInfo.shiftKeyCharacter;
			} else if (this.altKey) {
				return this.keyInfo.altKeyText || this.keyInfo.altKeyCharacter;
			} else if (this.altGrKey) {
				return this.keyInfo.altGrKeyText || this.keyInfo.altGrKeyCharacter;
			} else {
				return this.keyInfo.text || this.keyInfo.character.slice(0, 3);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
$key-width: 3em;
button {
	width: $key-width;
	height: $key-width;
	background: #efefef;
	border-radius: 2px;
	border: 1px solid rgb(118, 118, 118);
}
button.active {
	background: #aaaaaa;
}
button.disabled {
	opacity: 0.5;
	pointer-events: none;
}
.backspace-key {
	width: $key-width * 2.25;
}
.tab-key {
	width: $key-width * 1.5;
}
.capslock-key {
	width: $key-width * 1.75;
	span {
		font-size: 0.75em;
	}
}
.shiftleft-key {
	width: $key-width * 2.25;
}
.shiftright-key,
.enter-key,
.backslash-key {
	flex: 1 1 $key-width;
}
.rightside {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 0.75em;
}
.leftside {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-left: 0.75em;
	text-align: left;
}
.control-key {
	width: $key-width * 1.5;
}
.space-key {
	flex: 1 1 $key-width;
}
</style>