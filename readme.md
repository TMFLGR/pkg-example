# pkg-example

This repository is a test to package a **simple Node.js Webserver** into a **single executable**
that can be run even on devices without Node.js installed.

### usage

```bash
# for macos
./dist/pkg-example-macos
# for windows
./dist/pkg-example-win.exe
# for linux
./dist/pkg-example-linux
```

### process args

the following process arguments can be used optionally

| arg | default value |  
| --- | --- |
| (optional) --port / --p |  3000 |

```bash
# on mac / linux
$ ./pgk-example-macos --port 8080
$ ./pkg-example-linux --port 8080

# or for windows (currently untested)
./pkg-example-win.exe --port 8080
```

### http endpoints

| route | response | description |  
| --- | --- | --- |
| /health |  "up" | responds with a small status message to check if the server is up |
| /shutdown |  "bye" | responds with bye and exits the process with status code `exit(0)` |
| /* | | responds with index.html, or if requested, with static content inside public folder |

### builds

Example builds are located in `./dist` folder.  
There are builds available for `windows`, `linux` and `mac`, but only for `x64 architectures`.  
We can build `arm64` too but x86 seems to be unsupported...

### build from source

```bash
$ npm install
$ npm run build
```

For build options check the "pkg"-section inside the [package.json](package.json) file and 
the pkg documentation [https://github.com/vercel/pkg](https://github.com/vercel/pkg).
