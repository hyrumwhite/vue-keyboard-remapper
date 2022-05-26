<template>
	<div style="margin: 16px 0px">Click a button to remap the key</div>
	<div class="keyboard-container">
		<Keyboard @boundKeyDown="handleBoundKeyDown" />
	</div>
	<input style="margin-top: 16px" ref="input" />
</template>

<script setup>
import { ref } from "vue";
import Keyboard from "#components/keyboard.vue";
const input = ref(null);
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const handleBoundKeyDown = ($event) => {
	let inputEl = input.value;
	inputEl.setRangeText(
		$event,
		inputEl.selectionStart,
		inputEl.selectionEnd,
		"end"
	);
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
<style scoped>
.keyboard-container {
	padding: 8px;
	border: 1px solid buttonborder;
	border-radius: 2px;
	background: hsl(100, 5%, 85%);
}
</style>
