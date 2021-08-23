# pkg-example

This repository is a test to package a **simple Node.js Webserver** into a **single executable**
that can be run even on devices without Node.js installed.

- [usage](#usage)
- [process args](#process-args)
- [http endpoints](#http-endpoints)
- [builds](#builds)
- [build from source](#build-from-source)
- [resource consumption statistics](#resource-consumption-statistics)


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

### resource consumption statistics

Tested with apache jmeter v5.4.1, **1000 threads, 1 secs ramp-up, 3 seconds duration**.  
During this simple test **no** request left unanswered, so there is no need to count those.  

processor and ram usage report:  
**mac:** activity monitor reporting.

| runtime | os | state | ram | cpu% (1core) | avg response time |
| --- | --- | --- | --- | --- | --- |
| **mac** | - | - | - | - | - |
| nodejs | mac | idle | ~25MB | 0,00% | / |
| nodejs | mac | load | ~56MB | ~23,00% | 155ms |
| pkg bytecode | mac (pkg) | idle | ~22MB | 0,00% | / |
| pkg bytecode | mac (pkg) | load | ~60MB | ~28,00% | 9ms |
| **windows** | - | - | - | - | - |
| nodejs | win | idle |  ~30MB | 0,00% | / |
| nodejs | win | load | ~60MB | 30,00% | 172ms |
| pkg bytecode | win | idle | ~28MB | 0,00%  | / |
| pkg bytecode | win | load | ~60MB | ~33,00% | 15ms |
