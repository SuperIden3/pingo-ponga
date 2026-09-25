const canvas = document.getElementById("main_canvas");
const context = canvas.getContext("2d");

function main() {
	return [1, new Error("not implemented")];
}

// --- //

console.group("cleanup");
const [code, _err] = main();
if (code !== 0) console.error("Exited with code %o: %o", code, _err); else console.log();
console.groupEnd("cleanup");
