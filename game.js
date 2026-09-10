const canvas = document.getElementById("main_canvas");
const context = canvas.getContext("2d");

function main() {
	return [1, new Error("not implemented")];
}

// --- //

console.group("cleanup");
const [_code, _err] = main();
if (_code !== 0) console.error("Exited with code %o: %o", _code, _err); else console.log();
console.groupEnd("cleanup");
