const fs = require('fs');
const {loadStructure, functions} = require("./helpers.js");

function loadWasmScript() {
    return new Promise((resolve, reject) => {
        var script = atob(fs.readFileSync("script.txt")),
            lenght = script.length;
            wasm = new Uint8Array(new ArrayBuffer(lenght));

        for (var i = 0; i < lenght; i++) {
            wasm[i] = script.charCodeAt(i);
        }

        WebAssembly.compile(wasm).then(function (A) {
            WebAssembly.instantiate(A, loadStructure()).then(function(g) {
                var instance;
                if (g instanceof WebAssembly.Instance) {
                    instance = g;
                } else {
                    instance = g.instance;
                }
                // Assuming you want to keep the instance as 'M'
                resolve(instance.exports);
            });
        }).catch(reject);
    });
}

loadWasmScript().then((compiled) => {
    let instance = compiled;
    global.instance = instance
    console.log(
        functions.a()
    );
}).catch(console.error);
