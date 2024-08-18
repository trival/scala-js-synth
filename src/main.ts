import "./style.css";
import WebRenderer from "@elemaudio/web-renderer";

console.log("Hello, World!");

import { test2, test } from "./scala/main.js";
console.log(test2(5, 3));

// sounds

const btn = document.getElementById("play-sound");

const ctx = new AudioContext();
const core = new WebRenderer();

async function main() {
	ctx.resume();

	let node = await core.initialize(ctx, {
		numberOfInputs: 0,
		numberOfOutputs: 1,
		outputChannelCount: [2],
	});

	node.connect(ctx.destination);

	const val = test();
	console.log(val);

	let stats = await core.render(...val);
	console.log(stats);
}

if (btn) {
	btn.addEventListener("click", main);
}
