# PerimeterX Captcha WASM

This project recreates the WASM part of the PerimeterX Captcha script in Node.js. (PxCaptcha v1.8.7)

## Table of Contents
- [PerimeterX Captcha WASM](#perimeterx-captcha-wasm)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Structure](#structure)
  - [How the Code Works](#how-the-code-works)
  - [Usage](#usage)

## Overview

The main objective of this project is to emulate the functionality provided by the original PerimeterX Captcha script in a Node.js environment using WebAssembly.

The original challenge script is as follows:

```javascript
!function (r, u) {
    if (r.PX12544 = ae(), r.PX12589 = Be, Ce) {
        try {
            r.PX12590 = Ce.a();
        } catch (r) {}
        try {
            r.PX12610 = Ce.b(u);
        } catch (r) {}
    }
}(r, t)
```

In this project, `Ce` corresponds to our `functions` module, and it is used to generate `PX12590` and `PX12610`.

## Structure

- `main.js`: 
  - The primary entry point of the application.
  - Reads and loads a WASM script from a file named `script.txt` which contains the WebAssembly code in an "encrypted" format.
  - Once the WASM script is loaded, it calls functions from the `functions` object exported from `helpers.js`.
  
- `helpers.js`: 
  - Contains utility functions and the structure required for the WebAssembly script to operate.
  - Exports the `loadStructure` function which sets up necessary WebAssembly bindings.
  - Exports the `functions` object which has methods `a` and `b` that emulate the behavior of the original `Ce` object from the PerimeterX Captcha script.

## How the Code Works

1. The `main.js` file begins by reading a WASM script from a file named `script.txt`.
2. This script is then compiled and instantiated using Node.js's WebAssembly API.
3. After the WASM module is ready, the exported functions are stored in the global variable `instance`.
4. The `functions.a()` and `functions.b()` methods are then used to perform operations similar to the original PerimeterX Captcha script. These functions interface with the WASM module using the global `instance` variable.

## Usage

1. Ensure you have Node.js installed on your machine.
2. Clone the repository and navigate to the project directory.
3. Run the `main.js` script using Node.js:

```bash
node main.js
```

This will load the WebAssembly script and execute the defined functions.

## Important Note on Memory Buffer Emulation
In the `helpers.js` file, at [line 194](https://github.com/glizzykingdreko/PerimeterX-Captcha-WASM/blob/2654029deb8fb0091660cd37f1117c81f640658a/helpers.js#L195), there's a function:

```javascript
function H() {
return (null === m || 0 === m.byteLength) && (m = new Int32Array(global.instance.memory.buffer)), m;
}
```

This function retrieves the `memory.buffer` and utilizes it for several operations. The buffer's size and behavior can vary based on the environment it's running in and how the WebAssembly module was compiled.

Both Node.js and web browsers use the WebAssembly API, which allows developers to set the initial and maximum memory when creating a WebAssembly instance. By default, if you don't specify the initial memory size during instantiation, both environments will use the size defined within the module itself.

However, there are nuances:

- **Memory Growth** Browsers might permit memory to grow automatically up to a certain limit, while in Node.js, you might need to handle this more explicitly.
- **Environmental Differences** The actual memory available might be influenced by the system's configurations, the Node.js process settings, or browser constraints.

If you aim to emulate a specific device or browser, consider specifying memory sizes explicitly when instantiating the WebAssembly module. This adjustment ensures consistent behavior across different environments and can help in emulating specific device or browser behaviors.