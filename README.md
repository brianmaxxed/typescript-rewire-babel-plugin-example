# typescript-rewire-babel-plugin-example

Issue: babel-plugin-rewire does not work with ts-node

1. js-version branch illustrates the working js version.

2. master adds ts-node and converts the test file into typescript.

It fails with error:

```
$ ./node_modules/mocha/bin/mocha --require ts-node/register --require babel-register ./test/index.test.js

/Users/petrgazarov/workspace/typescript-rewire-babel-plugin-example/test/index.test.js:3
__Rewire__('message', 'baz!');
^
TypeError: _get__(...) is not a function
    at Object.<anonymous> (/Users/petrgazarov/workspace/typescript-rewire-babel-plugin-example/test/index.test.js:3:1)
    at Module._compile (module.js:541:32)
    at loader (/Users/petrgazarov/workspace/typescript-rewire-babel-plugin-example/node_modules/babel-register/lib/node.js:144:5)
    at Object.require.extensions.(anonymous function) [as .js] (/Users/petrgazarov/workspace/typescript-rewire-babel-plugin-example/node_modules/babel-register/lib/node.js:154:7)
    at Module.load (module.js:456:32)
    at tryModuleLoad (module.js:415:12)
    at Function.Module._load (module.js:407:3)
    at Module.require (module.js:466:17)
    at require (internal/module.js:20:19)
    at /Users/petrgazarov/workspace/typescript-rewire-babel-plugin-example/node_modules/mocha/lib/mocha.js:230:27
    at Array.forEach (native)
    at Mocha.loadFiles (/Users/petrgazarov/workspace/typescript-rewire-babel-plugin-example/node_modules/mocha/lib/mocha.js:227:14)
error Command failed with exit code 1.
```
