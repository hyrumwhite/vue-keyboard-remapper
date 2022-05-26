<template>
	<div class="keyboard">
		<div class="keyboard-row" v-for="(row, index) of keyboardRows" :key="index">
			<KeyboardKey
				v-for="(key, index) of row"
				:key="key.code + key.class + index"
				:keyInfo="key"
				:shiftKey="modifier === 'shiftKey'"
				:ctrlKey="modifier === 'ctrlKey'"
				:altKey="modifier === 'altKey'"
				:altGrKey="modifier === 'altGrKey'"
			/>
		</div>
	</div>
</template>

<script>
import { keyboardRows, keyboardKeys } from "#assets/keyboardRows.js";
import { keymap } from "#assets/keymap.js";
import KeyboardKey from "./KeyboardKey.vue";
export default {
	components: {
		KeyboardKey,
	},
	emits: ["boundKeyDown"],
	data() {
		return {
			keyboardRows,
			keyboardKeys,
			modifiers: {
				shiftKey: false,
				ctrlKey: false,
				altKey: false,
				altGrKey: false,
			},
			modifier: "",
		};
	},
	mounted() {
		document.addEventListener("keydown", this.handleKeydown);
		document.addEventListener("keyup", this.handleKeyup);
		window.addEventListener("blur", this.handleWindowBlur);
		this.getSavedBindings();
	},
	unmounted() {
		document.removeEventListener("keydown", this.handleKeydown);
		document.removeEventListener("keyup", this.handleKeyup);
		window.removeEventListener("blur", this.handleWindowBlur);
	},
	methods: {
		getSavedBindings() {
			for (let row of this.keyboardRows) {
				for (let button of row) {
					let binding = keymap[button.code];
					for (let key in binding) {
						if (binding[key]) {
							button[key] = binding[key];
							if (key === "character" && !binding.shiftKeyCharacter) {
								button.shiftKeyCharacter = binding.character.toUpperCase();
							}
						}
					}
				}
			}
		},
		emitBoundKey(key) {
			let characterKey = `${this.modifier}Character`;
			if (this.modifier === "") {
				characterKey = "character";
			}
			let character = key[characterKey];
			if (character || key.character) {
				this.$emit("boundKeyDown", character);
				return true;
			}
		},
		setModifier($event) {
			this.modifier = "";
			if ($event.shiftKey) {
				this.modifier = "shiftKey";
			}
			if ($event.ctrlKey) {
				this.modifier = "ctrlKey";
			}
			if ($event.altKey) {
				this.modifier = "altKey";
			}
			if ($event.altGrKey) {
				this.modifier = "altGrKey";
			}
		},
		handleKeydown($event) {
			this.setModifier($event);
			let key = this.keyboardKeys[$event.code];
			if (key) {
				if (!key.active) {
					key.active = true;
				}
				let cancelEvent = this.emitBoundKey(key);
				if (cancelEvent) {
					$event.preventDefault();
					$event.stopPropagation();
					return false;
				}
			}
		},
		handleKeyup($event) {
			this.setModifier($event);
			this.modifiers.shiftKey = $event.shiftKey;
			this.modifiers.ctrlKey = $event.ctrlKey;
			this.modifiers.altKey = $event.altKey;
			this.modifiers.altGrKey = $event.altGrKey;
			let key = this.keyboardKeys[$event.code];
			if (key && key.active) {
				key.active = false;
			}
		},
		handleWindowBlur() {
			this.setModifier({});
			for (let code in this.keyboardKeys) {
				this.keyboardKeys[code].active = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.keyboard {
	display: flex;
	flex-direction: column;
	grid-gap: 0.25em;
}
.keyboard-row {
	display: flex;
	flex-wrap: nowrap;
	grid-gap: 0.25em;
}
</style>
