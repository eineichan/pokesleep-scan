var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../../../tmp/pkbuild/node_modules/regenerator-runtime/runtime.js
var require_runtime = __commonJS({
  "../../../../tmp/pkbuild/node_modules/regenerator-runtime/runtime.js"(exports, module) {
    var runtime = (function(exports2) {
      "use strict";
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
      };
      var undefined2;
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      try {
        define({}, "");
      } catch (err) {
        define = function(obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });
        return generator;
      }
      exports2.wrap = wrap;
      function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed";
      var ContinueSentinel = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function() {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
      defineProperty(
        GeneratorFunctionPrototype,
        "constructor",
        { value: GeneratorFunction, configurable: true }
      );
      GeneratorFunction.displayName = define(
        GeneratorFunctionPrototype,
        toStringTagSymbol,
        "GeneratorFunction"
      );
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function(method) {
          define(prototype, method, function(arg) {
            return this._invoke(method, arg);
          });
        });
      }
      exports2.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports2.mark = function(genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      };
      exports2.awrap = function(arg) {
        return { __await: arg };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function(value2) {
                invoke("next", value2, resolve, reject);
              }, function(err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return PromiseImpl.resolve(value).then(function(unwrapped) {
              result.value = unwrapped;
              resolve(result);
            }, function(error) {
              return invoke("throw", error, resolve, reject);
            });
          }
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function(resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
        }
        defineProperty(this, "_invoke", { value: enqueue });
      }
      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
      });
      exports2.AsyncIterator = AsyncIterator;
      exports2.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(
          wrap(innerFn, outerFn, self, tryLocsList),
          PromiseImpl
        );
        return exports2.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            }
            return doneResult();
          }
          context.method = method;
          context.arg = arg;
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            if (context.method === "next") {
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted;
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      }
      function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined2) {
          context.delegate = null;
          if (methodName === "throw" && delegate.iterator["return"]) {
            context.method = "return";
            context.arg = undefined2;
            maybeInvokeDelegate(delegate, context);
            if (context.method === "throw") {
              return ContinueSentinel;
            }
          }
          if (methodName !== "return") {
            context.method = "throw";
            context.arg = new TypeError(
              "The iterator does not provide a '" + methodName + "' method"
            );
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          context[delegate.resultName] = info.value;
          context.next = delegate.nextLoc;
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined2;
          }
        } else {
          return info;
        }
        context.delegate = null;
        return ContinueSentinel;
      }
      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator");
      define(Gp, iteratorSymbol, function() {
        return this;
      });
      define(Gp, "toString", function() {
        return "[object Generator]";
      });
      function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports2.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse();
        return function next() {
          while (keys.length) {
            var key2 = keys.pop();
            if (key2 in object) {
              next.value = key2;
              next.done = false;
              return next;
            }
          }
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i = -1, next = function next2() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next2.value = iterable[i];
                  next2.done = false;
                  return next2;
                }
              }
              next2.value = undefined2;
              next2.done = true;
              return next2;
            };
            return next.next = next;
          }
        }
        return { next: doneResult };
      }
      exports2.values = values;
      function doneResult() {
        return { value: undefined2, done: true };
      }
      Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
          this.prev = 0;
          this.next = 0;
          this.sent = this._sent = undefined2;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined2;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined2;
              }
            }
          }
        },
        stop: function() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function(exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            if (caught) {
              context.method = "next";
              context.arg = undefined2;
            }
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        },
        complete: function(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          return ContinueSentinel;
        },
        finish: function(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName,
            nextLoc
          };
          if (this.method === "next") {
            this.arg = undefined2;
          }
          return ContinueSentinel;
        }
      };
      return exports2;
    })(
      // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      typeof module === "object" ? module.exports : {}
    );
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/getId.js
var require_getId = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/getId.js"(exports, module) {
    "use strict";
    module.exports = (prefix, cnt) => `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`;
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/createJob.js
var require_createJob = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/createJob.js"(exports, module) {
    "use strict";
    var getId = require_getId();
    var jobCounter = 0;
    module.exports = ({
      id: _id,
      action,
      payload = {}
    }) => {
      let id = _id;
      if (typeof id === "undefined") {
        id = getId("Job", jobCounter);
        jobCounter += 1;
      }
      return {
        id,
        action,
        payload
      };
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/log.js
var require_log = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/log.js"(exports) {
    "use strict";
    var logging = false;
    exports.logging = logging;
    exports.setLogging = (_logging) => {
      logging = _logging;
    };
    exports.log = (...args) => logging ? console.log.apply(exports, args) : null;
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/createScheduler.js
var require_createScheduler = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/createScheduler.js"(exports, module) {
    "use strict";
    var createJob = require_createJob();
    var { log } = require_log();
    var getId = require_getId();
    var schedulerCounter = 0;
    module.exports = () => {
      const id = getId("Scheduler", schedulerCounter);
      const workers = {};
      const runningWorkers = {};
      let jobQueue = [];
      schedulerCounter += 1;
      const getQueueLen = () => jobQueue.length;
      const getNumWorkers = () => Object.keys(workers).length;
      const dequeue = () => {
        if (jobQueue.length !== 0) {
          const wIds = Object.keys(workers);
          for (let i = 0; i < wIds.length; i += 1) {
            if (typeof runningWorkers[wIds[i]] === "undefined") {
              jobQueue[0](workers[wIds[i]]);
              break;
            }
          }
        }
      };
      const queue = (action, payload) => new Promise((resolve, reject) => {
        const job = createJob({ action, payload });
        jobQueue.push(async (w) => {
          jobQueue.shift();
          runningWorkers[w.id] = job;
          try {
            resolve(await w[action].apply(exports, [...payload, job.id]));
          } catch (err) {
            reject(err);
          } finally {
            delete runningWorkers[w.id];
            dequeue();
          }
        });
        log(`[${id}]: Add ${job.id} to JobQueue`);
        log(`[${id}]: JobQueue length=${jobQueue.length}`);
        dequeue();
      });
      const addWorker = (w) => {
        workers[w.id] = w;
        log(`[${id}]: Add ${w.id}`);
        log(`[${id}]: Number of workers=${getNumWorkers()}`);
        dequeue();
        return w.id;
      };
      const addJob = async (action, ...payload) => {
        if (getNumWorkers() === 0) {
          throw Error(`[${id}]: You need to have at least one worker before adding jobs`);
        }
        return queue(action, payload);
      };
      const terminate = async () => {
        Object.keys(workers).forEach(async (wid) => {
          await workers[wid].terminate();
        });
        jobQueue = [];
      };
      return {
        addWorker,
        addJob,
        terminate,
        getQueueLen,
        getNumWorkers
      };
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/getEnvironment.js
var require_getEnvironment = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/getEnvironment.js"(exports, module) {
    "use strict";
    module.exports = (key) => {
      const env = {};
      if (typeof WorkerGlobalScope !== "undefined") {
        env.type = "webworker";
      } else if (typeof document === "object") {
        env.type = "browser";
      } else if (typeof process === "object" && typeof __require === "function") {
        env.type = "node";
      }
      if (typeof key === "undefined") {
        return env;
      }
      return env[key];
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/resolvePaths.js
var require_resolvePaths = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/utils/resolvePaths.js"(exports, module) {
    "use strict";
    var isBrowser = require_getEnvironment()("type") === "browser";
    var resolveURL = isBrowser ? (s) => new URL(s, window.location.href).href : (s) => s;
    module.exports = (options) => {
      const opts = { ...options };
      ["corePath", "workerPath", "langPath"].forEach((key) => {
        if (options[key]) {
          opts[key] = resolveURL(opts[key]);
        }
      });
      return opts;
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/OEM.js
var require_OEM = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/OEM.js"(exports, module) {
    "use strict";
    module.exports = {
      TESSERACT_ONLY: 0,
      LSTM_ONLY: 1,
      TESSERACT_LSTM_COMBINED: 2,
      DEFAULT: 3
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/package.json
var require_package = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/package.json"(exports, module) {
    module.exports = {
      name: "tesseract.js",
      version: "6.0.1",
      description: "Pure Javascript Multilingual OCR",
      main: "src/index.js",
      type: "commonjs",
      types: "src/index.d.ts",
      unpkg: "dist/tesseract.min.js",
      jsdelivr: "dist/tesseract.min.js",
      scripts: {
        start: "node scripts/server.js",
        build: "rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs",
        "profile:tesseract": "webpack-bundle-analyzer dist/tesseract-stats.json",
        "profile:worker": "webpack-bundle-analyzer dist/worker-stats.json",
        prepublishOnly: "npm run build",
        wait: "rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",
        test: "npm-run-all -p -r start test:all",
        "test:all": "npm-run-all wait test:browser test:node:all",
        "test:browser": "karma start karma.conf.js",
        "test:node": "nyc mocha --exit --bail --require ./scripts/test-helper.mjs",
        "test:node:all": "npm run test:node -- ./tests/*.test.mjs",
        lint: "eslint src",
        "lint:fix": "eslint --fix src",
        postinstall: "opencollective-postinstall || true"
      },
      browser: {
        "./src/worker/node/index.js": "./src/worker/browser/index.js"
      },
      author: "",
      contributors: [
        "jeromewu"
      ],
      license: "Apache-2.0",
      devDependencies: {
        "@babel/core": "^7.21.4",
        "@babel/eslint-parser": "^7.21.3",
        "@babel/preset-env": "^7.21.4",
        "@rollup/plugin-commonjs": "^24.1.0",
        acorn: "^8.8.2",
        "babel-loader": "^9.1.2",
        buffer: "^6.0.3",
        cors: "^2.8.5",
        eslint: "^7.32.0",
        "eslint-config-airbnb-base": "^14.2.1",
        "eslint-plugin-import": "^2.27.5",
        "expect.js": "^0.3.1",
        express: "^4.18.2",
        mocha: "^10.2.0",
        "npm-run-all": "^4.1.5",
        karma: "^6.4.2",
        "karma-chrome-launcher": "^3.2.0",
        "karma-firefox-launcher": "^2.1.2",
        "karma-mocha": "^2.0.1",
        "karma-webpack": "^5.0.0",
        nyc: "^15.1.0",
        rimraf: "^5.0.0",
        rollup: "^3.20.7",
        "wait-on": "^7.0.1",
        webpack: "^5.79.0",
        "webpack-bundle-analyzer": "^4.8.0",
        "webpack-cli": "^5.0.1",
        "webpack-dev-middleware": "^6.0.2",
        "rollup-plugin-sourcemaps": "^0.6.3"
      },
      dependencies: {
        "bmp-js": "^0.1.0",
        "idb-keyval": "^6.2.0",
        "is-url": "^1.2.4",
        "node-fetch": "^2.6.9",
        "opencollective-postinstall": "^2.0.3",
        "regenerator-runtime": "^0.13.3",
        "tesseract.js-core": "^6.0.0",
        "wasm-feature-detect": "^1.2.11",
        zlibjs: "^0.3.1"
      },
      overrides: {
        "@rollup/pluginutils": "^5.0.2"
      },
      repository: {
        type: "git",
        url: "https://github.com/naptha/tesseract.js.git"
      },
      bugs: {
        url: "https://github.com/naptha/tesseract.js/issues"
      },
      homepage: "https://github.com/naptha/tesseract.js",
      collective: {
        type: "opencollective",
        url: "https://opencollective.com/tesseractjs"
      }
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/defaultOptions.js
var require_defaultOptions = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/defaultOptions.js"(exports, module) {
    "use strict";
    module.exports = {
      /*
       * Use BlobURL for worker script by default
       * TODO: remove this option
       *
       */
      workerBlobURL: true,
      logger: () => {
      }
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/defaultOptions.js
var require_defaultOptions2 = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/defaultOptions.js"(exports, module) {
    "use strict";
    var version = require_package().version;
    var defaultOptions = require_defaultOptions();
    module.exports = {
      ...defaultOptions,
      workerPath: `https://cdn.jsdelivr.net/npm/tesseract.js@v${version}/dist/worker.min.js`
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/spawnWorker.js
var require_spawnWorker = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/spawnWorker.js"(exports, module) {
    "use strict";
    module.exports = ({ workerPath, workerBlobURL }) => {
      let worker;
      if (Blob && URL && workerBlobURL) {
        const blob = new Blob([`importScripts("${workerPath}");`], {
          type: "application/javascript"
        });
        worker = new Worker(URL.createObjectURL(blob));
      } else {
        worker = new Worker(workerPath);
      }
      return worker;
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/terminateWorker.js
var require_terminateWorker = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/terminateWorker.js"(exports, module) {
    "use strict";
    module.exports = (worker) => {
      worker.terminate();
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/onMessage.js
var require_onMessage = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/onMessage.js"(exports, module) {
    "use strict";
    module.exports = (worker, handler) => {
      worker.onmessage = ({ data }) => {
        handler(data);
      };
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/send.js
var require_send = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/send.js"(exports, module) {
    "use strict";
    module.exports = async (worker, packet) => {
      worker.postMessage(packet);
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/loadImage.js
var require_loadImage = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/loadImage.js"(exports, module) {
    "use strict";
    var readFromBlobOrFile = (blob) => new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = ({ target: { error: { code } } }) => {
        reject(Error(`File could not be read! Code=${code}`));
      };
      fileReader.readAsArrayBuffer(blob);
    });
    var loadImage2 = async (image) => {
      let data = image;
      if (typeof image === "undefined") {
        return "undefined";
      }
      if (typeof image === "string") {
        if (/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
          data = atob(image.split(",")[1]).split("").map((c) => c.charCodeAt(0));
        } else {
          const resp = await fetch(image);
          data = await resp.arrayBuffer();
        }
      } else if (typeof HTMLElement !== "undefined" && image instanceof HTMLElement) {
        if (image.tagName === "IMG") {
          data = await loadImage2(image.src);
        }
        if (image.tagName === "VIDEO") {
          data = await loadImage2(image.poster);
        }
        if (image.tagName === "CANVAS") {
          await new Promise((resolve) => {
            image.toBlob(async (blob) => {
              data = await readFromBlobOrFile(blob);
              resolve();
            });
          });
        }
      } else if (typeof OffscreenCanvas !== "undefined" && image instanceof OffscreenCanvas) {
        const blob = await image.convertToBlob();
        data = await readFromBlobOrFile(blob);
      } else if (image instanceof File || image instanceof Blob) {
        data = await readFromBlobOrFile(image);
      }
      return new Uint8Array(data);
    };
    module.exports = loadImage2;
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/index.js
var require_browser = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/worker/browser/index.js"(exports, module) {
    "use strict";
    var defaultOptions = require_defaultOptions2();
    var spawnWorker = require_spawnWorker();
    var terminateWorker = require_terminateWorker();
    var onMessage = require_onMessage();
    var send = require_send();
    var loadImage2 = require_loadImage();
    module.exports = {
      defaultOptions,
      spawnWorker,
      terminateWorker,
      onMessage,
      send,
      loadImage: loadImage2
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/createWorker.js
var require_createWorker = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/createWorker.js"(exports, module) {
    "use strict";
    var resolvePaths = require_resolvePaths();
    var createJob = require_createJob();
    var { log } = require_log();
    var getId = require_getId();
    var OEM = require_OEM();
    var {
      defaultOptions,
      spawnWorker,
      terminateWorker,
      onMessage,
      loadImage: loadImage2,
      send
    } = require_browser();
    var workerCounter = 0;
    module.exports = async (langs = "eng", oem = OEM.LSTM_ONLY, _options = {}, config = {}) => {
      const id = getId("Worker", workerCounter);
      const {
        logger,
        errorHandler,
        ...options
      } = resolvePaths({
        ...defaultOptions,
        ..._options
      });
      const promises = {};
      const currentLangs = typeof langs === "string" ? langs.split("+") : langs;
      let currentOem = oem;
      let currentConfig = config;
      const lstmOnlyCore = [OEM.DEFAULT, OEM.LSTM_ONLY].includes(oem) && !options.legacyCore;
      let workerResReject;
      let workerResResolve;
      const workerRes = new Promise((resolve, reject) => {
        workerResResolve = resolve;
        workerResReject = reject;
      });
      const workerError = (event) => {
        workerResReject(event.message);
      };
      let worker = spawnWorker(options);
      worker.onerror = workerError;
      workerCounter += 1;
      const startJob = ({ id: jobId, action, payload }) => new Promise((resolve, reject) => {
        log(`[${id}]: Start ${jobId}, action=${action}`);
        const promiseId = `${action}-${jobId}`;
        promises[promiseId] = { resolve, reject };
        send(worker, {
          workerId: id,
          jobId,
          action,
          payload
        });
      });
      const load = () => console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)");
      const loadInternal = (jobId) => startJob(createJob({
        id: jobId,
        action: "load",
        payload: { options: { lstmOnly: lstmOnlyCore, corePath: options.corePath, logging: options.logging } }
      }));
      const writeText = (path, text, jobId) => startJob(createJob({
        id: jobId,
        action: "FS",
        payload: { method: "writeFile", args: [path, text] }
      }));
      const readText = (path, jobId) => startJob(createJob({
        id: jobId,
        action: "FS",
        payload: { method: "readFile", args: [path, { encoding: "utf8" }] }
      }));
      const removeFile = (path, jobId) => startJob(createJob({
        id: jobId,
        action: "FS",
        payload: { method: "unlink", args: [path] }
      }));
      const FS = (method, args, jobId) => startJob(createJob({
        id: jobId,
        action: "FS",
        payload: { method, args }
      }));
      const loadLanguageInternal = (_langs, jobId) => startJob(createJob({
        id: jobId,
        action: "loadLanguage",
        payload: {
          langs: _langs,
          options: {
            langPath: options.langPath,
            dataPath: options.dataPath,
            cachePath: options.cachePath,
            cacheMethod: options.cacheMethod,
            gzip: options.gzip,
            lstmOnly: [OEM.DEFAULT, OEM.LSTM_ONLY].includes(currentOem) && !options.legacyLang
          }
        }
      }));
      const initializeInternal = (_langs, _oem, _config, jobId) => startJob(createJob({
        id: jobId,
        action: "initialize",
        payload: { langs: _langs, oem: _oem, config: _config }
      }));
      const reinitialize = (langs2 = "eng", oem2, config2, jobId) => {
        if (lstmOnlyCore && [OEM.TESSERACT_ONLY, OEM.TESSERACT_LSTM_COMBINED].includes(oem2)) throw Error("Legacy model requested but code missing.");
        const _oem = oem2 || currentOem;
        currentOem = _oem;
        const _config = config2 || currentConfig;
        currentConfig = _config;
        const langsArr = typeof langs2 === "string" ? langs2.split("+") : langs2;
        const _langs = langsArr.filter((x) => !currentLangs.includes(x));
        currentLangs.push(..._langs);
        if (_langs.length > 0) {
          return loadLanguageInternal(_langs, jobId).then(() => initializeInternal(langs2, _oem, _config, jobId));
        }
        return initializeInternal(langs2, _oem, _config, jobId);
      };
      const setParameters = (params = {}, jobId) => startJob(createJob({
        id: jobId,
        action: "setParameters",
        payload: { params }
      }));
      const recognize = async (image, opts = {}, output = {
        text: true
      }, jobId) => startJob(createJob({
        id: jobId,
        action: "recognize",
        payload: { image: await loadImage2(image), options: opts, output }
      }));
      const detect = async (image, jobId) => {
        if (lstmOnlyCore) throw Error("`worker.detect` requires Legacy model, which was not loaded.");
        return startJob(createJob({
          id: jobId,
          action: "detect",
          payload: { image: await loadImage2(image) }
        }));
      };
      const terminate = async () => {
        if (worker !== null) {
          terminateWorker(worker);
          worker = null;
        }
        return Promise.resolve();
      };
      onMessage(worker, ({
        workerId,
        jobId,
        status,
        action,
        data
      }) => {
        const promiseId = `${action}-${jobId}`;
        if (status === "resolve") {
          log(`[${workerId}]: Complete ${jobId}`);
          promises[promiseId].resolve({ jobId, data });
          delete promises[promiseId];
        } else if (status === "reject") {
          promises[promiseId].reject(data);
          delete promises[promiseId];
          if (action === "load") workerResReject(data);
          if (errorHandler) {
            errorHandler(data);
          } else {
            throw Error(data);
          }
        } else if (status === "progress") {
          logger({ ...data, userJobId: jobId });
        }
      });
      const resolveObj = {
        id,
        worker,
        load,
        writeText,
        readText,
        removeFile,
        FS,
        reinitialize,
        setParameters,
        recognize,
        detect,
        terminate
      };
      loadInternal().then(() => loadLanguageInternal(langs)).then(() => initializeInternal(langs, oem, config)).then(() => workerResResolve(resolveObj)).catch(() => {
      });
      return workerRes;
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/Tesseract.js
var require_Tesseract = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/Tesseract.js"(exports, module) {
    "use strict";
    var createWorker = require_createWorker();
    var recognize = async (image, langs, options) => {
      const worker = await createWorker(langs, 1, options);
      return worker.recognize(image).finally(async () => {
        await worker.terminate();
      });
    };
    var detect = async (image, options) => {
      const worker = await createWorker("osd", 0, options);
      return worker.detect(image).finally(async () => {
        await worker.terminate();
      });
    };
    module.exports = {
      recognize,
      detect
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/languages.js
var require_languages = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/languages.js"(exports, module) {
    "use strict";
    module.exports = {
      AFR: "afr",
      AMH: "amh",
      ARA: "ara",
      ASM: "asm",
      AZE: "aze",
      AZE_CYRL: "aze_cyrl",
      BEL: "bel",
      BEN: "ben",
      BOD: "bod",
      BOS: "bos",
      BUL: "bul",
      CAT: "cat",
      CEB: "ceb",
      CES: "ces",
      CHI_SIM: "chi_sim",
      CHI_TRA: "chi_tra",
      CHR: "chr",
      CYM: "cym",
      DAN: "dan",
      DEU: "deu",
      DZO: "dzo",
      ELL: "ell",
      ENG: "eng",
      ENM: "enm",
      EPO: "epo",
      EST: "est",
      EUS: "eus",
      FAS: "fas",
      FIN: "fin",
      FRA: "fra",
      FRK: "frk",
      FRM: "frm",
      GLE: "gle",
      GLG: "glg",
      GRC: "grc",
      GUJ: "guj",
      HAT: "hat",
      HEB: "heb",
      HIN: "hin",
      HRV: "hrv",
      HUN: "hun",
      IKU: "iku",
      IND: "ind",
      ISL: "isl",
      ITA: "ita",
      ITA_OLD: "ita_old",
      JAV: "jav",
      JPN: "jpn",
      KAN: "kan",
      KAT: "kat",
      KAT_OLD: "kat_old",
      KAZ: "kaz",
      KHM: "khm",
      KIR: "kir",
      KOR: "kor",
      KUR: "kur",
      LAO: "lao",
      LAT: "lat",
      LAV: "lav",
      LIT: "lit",
      MAL: "mal",
      MAR: "mar",
      MKD: "mkd",
      MLT: "mlt",
      MSA: "msa",
      MYA: "mya",
      NEP: "nep",
      NLD: "nld",
      NOR: "nor",
      ORI: "ori",
      PAN: "pan",
      POL: "pol",
      POR: "por",
      PUS: "pus",
      RON: "ron",
      RUS: "rus",
      SAN: "san",
      SIN: "sin",
      SLK: "slk",
      SLV: "slv",
      SPA: "spa",
      SPA_OLD: "spa_old",
      SQI: "sqi",
      SRP: "srp",
      SRP_LATN: "srp_latn",
      SWA: "swa",
      SWE: "swe",
      SYR: "syr",
      TAM: "tam",
      TEL: "tel",
      TGK: "tgk",
      TGL: "tgl",
      THA: "tha",
      TIR: "tir",
      TUR: "tur",
      UIG: "uig",
      UKR: "ukr",
      URD: "urd",
      UZB: "uzb",
      UZB_CYRL: "uzb_cyrl",
      VIE: "vie",
      YID: "yid"
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/PSM.js
var require_PSM = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/constants/PSM.js"(exports, module) {
    "use strict";
    module.exports = {
      OSD_ONLY: "0",
      AUTO_OSD: "1",
      AUTO_ONLY: "2",
      AUTO: "3",
      SINGLE_COLUMN: "4",
      SINGLE_BLOCK_VERT_TEXT: "5",
      SINGLE_BLOCK: "6",
      SINGLE_LINE: "7",
      SINGLE_WORD: "8",
      CIRCLE_WORD: "9",
      SINGLE_CHAR: "10",
      SPARSE_TEXT: "11",
      SPARSE_TEXT_OSD: "12",
      RAW_LINE: "13"
    };
  }
});

// ../../../../tmp/pkbuild/node_modules/tesseract.js/src/index.js
var require_src = __commonJS({
  "../../../../tmp/pkbuild/node_modules/tesseract.js/src/index.js"(exports, module) {
    "use strict";
    require_runtime();
    var createScheduler = require_createScheduler();
    var createWorker = require_createWorker();
    var Tesseract2 = require_Tesseract();
    var languages = require_languages();
    var OEM = require_OEM();
    var PSM = require_PSM();
    var { setLogging } = require_log();
    module.exports = {
      languages,
      OEM,
      PSM,
      createScheduler,
      createWorker,
      setLogging,
      ...Tesseract2
    };
  }
});

// src/reader.ts
var import_tesseract = __toESM(require_src());

// ../../../../tmp/pkreimer/src/img/food/largeleek.png
var largeleek_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/tastymushroom.png
var tastymushroom_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/fancyegg.png
var fancyegg_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/softpotato.png
var softpotato_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/fancyapple.png
var fancyapple_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/fieryherb.png
var fieryherb_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACYSSURBVHhe7Z197GRVecf9p7Zq30RjVF5WdoFdXNfVVRZ22V1ZWCtL6Qa0S6y2NmhKtTa+xfIScOtKjSGYFE0Um9JE29hKik2N+AKlFgsKtGyRakuxRoyBpPhCJSkBRLg9n+feZ/bMme99m7n3zm935o/Pb+Z35t47d+79zvM85znPOfO017zr7CURHzj1qCUCda2qkI2LirqgSw6irlkZsnERURdyySTq2ilk46KhLuCSctQ1TJGNi4S6cEvqUdcyRjYuCuqCLWmOuqaObFwE1IVa0h51bUE2Hu6oC7RketQ1lo2HM+rCLJmd9DpPNBzOqAuypDviaz32z+GMuhBLusev99jFP1xRF2BJf3DNJ27C4Yb64Ev6R96MwwX1gZcMg7whXaLetAp1jGlQx14yHPKmzIp6o2lQx65DHWfJ8MibMwvqTWZFvU+K2m/J/JA3aVrUG/TFvN53STPGbtAsqIMvOD8fOCFpa8MRgTMCFwf+OvC1wLcC3w/8sHjk/5sCvP6BwJkB9lPHGxQpkraoAy8oCOmqwJ2BrAARfC6ASNQ+MVsCVwcQjO8/Dez/FwHeE4Gr9+oVKZQ2qIMuKG8MPBJQN9rBqqT7uRj/O6D26QKs3RWBFwUGEZoUS1PUARcQrAwWSd1QhVuulwewKmqbvomFln6eTpCCaYI62ILBN5+bo25cFYhwXoJKeTiApVWfbyakaOpQB1owuBl9uq4hQVydWy4pnCrUQRYIbkAja/Mnpx6dfezUE+VrTbhyy6rsms3HZzds3Jj92/rN2bdP3Jrdt3Zbdv/aHdmB1Wdkt7zk1caNm3dlnztpe3bdtpOzq3dszD607UXyeDVgedXnnRopnjLUARYIrBTfbnVjxrhm68bs/l2/nX1h+xb5ehmI8dpNJ2Z3bDgp+/Fxp2WPrNk1weNBVI+sOi275/mvyG559snZ7c87OfuXo3eMuH3tLhPbX27PhcYx1XslEHOpzzw1UkAKtfMCQW9O3ZAxrtqyOjtw2lnZU+dcaMJS2yiwTlgmLJISU8oTa16dPbzm9OzOo1+V3XFUIaojt4244wVbTXBYtn96eW7R3JpVCK3T3qIUUYracYFo1OPDOj3yG2/PstdeYsL6823r5HYxLqgHj9uZPbrurFw4wRoZiZhSHg3cG7a7LbJWKS4wFxsiq3CVnSZWpZBi1E4LBC5C3YQRuL3vnHGeiQlRAf+rbWMQ4kM7zs+ePPNd2VN73mvw/Kc7L8hFViMurNZ9x56e3XpUsFJCVA7CQlS4R6yWOpcACVX1+adGislROywQcfZ8AlzKTdt3ZI/teWcuqHMvMhAIgbTaB7BkIyHuvWwkxhGhjWM8tuGcSnHVCitYKURFzEW8pc4lgmy/ugZTIwUFauMFotL90dtDHCamIAZE4hbr4bMukPsAQnxiz3tyASHCYr8UxIXl+r8QI0FbYWGhzPVt2p5dtb1Rz5RkrboOU7MU1SQMr6iLb2CN4lgq5mfnXJTds/PciX0I6pUQy3DLV+YSia94VDEWVoqg/jNbt06cRwm/H1DXYSaWohqHlIK6+AZxETe8TBwIIk0xfHrbRrNidVYqxgQYKBPWY0Wv8K4gIBcWvUNERW6rIpZK6dwFOktRHYTkZ+kgsomKm15jceKkKK6vSohl1FkshEWeaySqwvURoDdMkBKs9zKU4yxFdZDSuAr310QgCAJhXblttblEszwtRQXZa/dZDxGrpGIshPXAqtNNWAiKQL2F61MVFp2zFFXOuQF1E6wX5wG3EkEMQiKW+tFZ5+eiOufi3PqIbRW5EPdbT/OOV23MfrBmm4koFZbnsL6OqIK4GvT6gLFNCgHV5+8c2bhgkHGWA8qkFEwkLawO2/r2rUSFCIOoeL+vv2pddu+mraMgXXH3qi1msRqKivHNQQv+ZOOCQa9I3Yzsazt25UJpIRAnO/dSC9pz63Wp3MbhdUT1wO7zsptOfV72vdfsyZ7acF5pj/B/V+8099dQVL30+uqQjQsEAbscWMYFThN4g+9zz64zCou3b2IbJxfVPtv286f+qokL64WIVHzFIPT3jzo1u37LzolzTsAKd56faopsXCBKC/Us7zSFqACxIKgDOzdZbguhyO2CoHj97tNPyT5/yi+Ypcr2XmHJ0bKsOzEXiVE6COq8C5hgMajrS5GNC4QcCyT3VGetLNAucZFugRAMLk5vs98SrcRTI1GFNt6zcjjnyB2VQ0YBerfqsw6KbFwQcBMTN4aAvc5auQWit5i+BggLa/UfZ2y355Ov77f465btq8dFtfcySzMgIOUGia+ohKjIVXldFdbq+cXzuSAbFwTm603cHPJQVdYKUSGoB896Y56GSNycv44lwmrFwuI1BMS+BOmI6juvPjMXFa8FYT120uvLrVVoZ/xPnXcBrj22wsRZ9AiZ8KGuQW/IxgWBCZ/xTTFr5T3BWCwxxE8E2LkghDUKr2ONbt72wsIS5du4qNj3hq1HRKLaV7wW3jMI2gU0IaoAVuzjm0tjq7rq1ncH1HXoBdm4AEg3CD6ulwrG4TViJ+u9STe3zwJ3TxscFM5++99F5dYMIdp+bq1CDKVEBVSYqnNuwWCWSzZ2DB+Gb4uDC2JYwaGNXAtZ4aHiAgZfJy78aOimLCgvrBFurkyA7uoQkFmkvZebgHguRcX7RWUy9Pp+uvo1UlhfeWnjweUycIvqenSObOwAxMR6Aj8NqA9YhccF0+ZgmFnMACvHQMTqWyqnsFOvjljKe3u51SHoLhMggkFY5KRMQHuvGBOV9RSDoGJR8ciA85Orz7TB5e8ef7IUFhMt1Hm34GeB9Fr0gmycERkUTwmBKON46n1SEBT5G3Uc8BIRkqITr5MXypOZJUE76YUgLHp6CKtMgAiL4yAkeoZlosqD9WDNeFx9to0L3rb2xOwfT1hjwlJjhEwHU+eeQqxYkecaxB3KxhngpNWHmRWsH8X+iEwtdIGo6tZNAMqNZVKU2nWzIGXCMiFdamLBFZYKK2xDfgrxEWc5eeqBlMIVuaCCANmOuOlL61Zln1x/hIkKi4XlSkVFpUNF4D7G9Vt2VlU78MWPr10vyMYZQADqw/QBIvGaoipLlSIHnKm3KhMVIBhPI5iwzPJoYZFNZxssFaKih4jlIuDHlfKc6gXE9NF1z8j+9sQXmJVCUGXxVVNhMX7ItC++KOr1QK91WI5snIGJLvwAEEup9lZY/VSNsChnwRKZK8SFJcLy3h/Cia0VmDsMcRd8+sXPza5Z/ytmqRAUYspW75aCiqlzhVSOMjhN1UOFK+x8Or1CNk6JjF2o9/7CyzaMYB4dvRvgOW1/t2l99levXGfz7NQx+oZMdm2aIRGWzc4JbWPbBFFhlVxIWC3+B8RGKcx/Hr/JxESFAoLCSql4SlEVvCMkypIpT2b+oNomwBdf3bvOkY1TQqpg4sMgFtYdUBcqheEK1iloGqRWQQ+P0mD1Wgo3xYQSemgG8VMSQ7mwEAvC8aqF0bYhbvLEKKLikW1s3uAp51sZjAuJx6Ziirn3+FfK88ftMc3Lq0mJsdR2AUIVde86RzbOgIxfgG9b2XoEillyNvSKPBAnk662ifnQ1mMsOUkuaTSB1CwQginERsAdHgneEU6eIN2fbxtg3384+djsulc8x1wdXyZ6e5ZFd8TnbANjhbdu2GTDTkzrQlDUudtU+0JUMO/4CmTjDFTGOwSfWCV10RRYL0Ti++Mum8xAiWvUsTpYL7Wdg7Do7vvNJ6dEhYERBBeD4K9+2dOz24P7xgqxDdv//bojLRD/6PpnWu8Oy0TtlBpMngWOSdmMWahiZk68fgPtFfEVvWd13zpHNs5AbboBcagLVgbi8n25qfR46iYOWKKzcGM8IjCC81ikMbT7ghwmhNjKMMRS8PgxO000H17/cyYkXifopg1BfeIlv2TWivgJYXUtKsCF8uXEQvksHQeRYcHUZwx0Po2+Ctk4IwzRqA82ArGoi1YGAT778UitN7N/CVCV9SIQTxOdLi5WgCn7Nn/zxafI947Btf3rCetNRPTqsHLEPR97yS/a/wiL/5v08GYlnlPo1gqxVZQrDzacA7KxA0hilsZbVVZLBbV88+kEICxmpyAsvp2YfaxXbInSRGdsucgvlYmLHmr6vilYIXp05J8QEVbLUweI65a1a01U0wTmwH5N9iXW+tZR+fQvFxaiqnGDTVZt7gzZ2BFkx+W6UgiBlenSC0YSkABfJQkJhm1VuxBf+AW1i1mYf1+jIE10WmlwJDK3XMRV8TkR/6XvmcJN5xxJaCIsBOWWCpF5PsoFUjXLhtfYxnuKgAWEqv2A19Pp9VyHit7gYGkGRzZ2jFy1pcz1fOOEl5pVUO6EG+HC8oDVA1jasF6IJhYWvTdba6HIOZm4Qu9OFcw1c4e7zTIhJiwXIC6ERY7qgeO2mvjY1kXDPrjRnN3WxmdhG75I7EecxnH5318rY0JY9AbDY0XHZrA0gyMbO0aWqNBtTi8YN4JvLBlpbhA3IH6dC84MYBeUXdQCxEXcYVWdIwuVF+VNVHIGYdHDI3kbnxNWqyol4hYGEcTCcnEBz7FofAYGlfmieFIUiMFoQ0SI0Y/D/540Ve+dEsdYfPaKpCgMMvAcIxs7Rg760sNTF4xvNDeCm8P/8YXmORbrpmNOstxNKqx7NhfT2kdxVT6+x7hcnlmnBip3h546SM+rLP5DVG6tiKdcTDyP3aJDG/B6DD1KoAPgguLLxLHrLBWwDQLk85vlJn8VHiusldfBD4ps7Bi5LJCyWICZR0B84wGr5TEHa0LhAq5dtdYsViwuppv/YPNvmWgOCgsR7TeL5RMbzJqF4J78U1lFJkNM6Xm54F1EiAI4R74EPOc1BAOxmPx/9iPYZx+OhUDcNabvV4avi+XhQE1sBYMlRWNkY8fIioeqlAMXm28xNwq3wf+0cwNIN3ziRUfbhU2FxdKLuLmRy0NYey+3wjvG98xNhtfJrtPTxO2lQTzQubjuxWtH+SveHzfm1ggRIRRcHXETx0KkiIXzpR1L5LhLxA3ynnwOaOr2HLdo7gYRFeODFbN26JnPZX6hbOwYfqRo4kOr8cO4N8TNJJbhRsYDtl9ddXL2kWNfaBc3FhZLU7uwTFDnXGyCYnzPy1j4H6Exdkdy06ZSCWE5zC/kXJh5jKVB6C6q2FVzwzk3zjkO0J24vYm7K2PMWoUvEsnimpGIuVgrkI0dIictEDSnQbJbEL/w3DC3WgjMbxZuEIt199F5EA+I7PpjNuYxlgsrxFfEVbhAn21sQXxo93Wn6iYnXPlra7LHr323ifKjRz3dROVWi84F5xR/hhi+JI56vS0M5XhsZavMhJ5gzdoN1KipezIIsrFD5NihimEQFO4Gd+LWCXy4hBtJO9bqU0cfNyYsniMsrFleE1X0CkNMRWEd4qJshUe3VrwnC/Wr84Nr3rQxe+ybwXU+enn2oxt/dywRSva9SlRdw7VBoCRFERXWqsF6WHNbtwFkY4fISQsqvvJvNzeNuAQLhvtAUNxMAl7iq/ev/mUTEVbKhcUFx5IBVQYeZ+WB/KVmregZMnDMcd2KIHB1fojqkTvfkT35ndAJuD+I9Cfvy255/RazWqQIuNGIPP0MfeEu0EVVE6zDXFaYcVhzTb7QEdSoT3xohmbKKhz8hhHsEsO49fK80ZWrn2sgpji+QmRYMYTFDTBBudUKMRUJUi9n8XiNJGaax4JPveUks1Qmqu9ebDxxz3uze/90j+2v8mt9MoWo6IWr+zEIvkKkfLEjZKUDRXzqAjqIixuHqLAOgMgoSblozTNMPGl8xdghLpL8Fhff0g7EWgF6gpS3eEfAhUGWPT23v3nbKSaiWFQP3/b27KGv/F523bu323ARFQ7qvPsAUZEQRlTQQFRzXRDERdW3sOSCZiq+UrhVoJuOG8RSpcIij8Nz2rynaBn5ENh6LRWBOmKgI0Dw7cNFpBPi80pFlX3vEnOHxFc3f3iPbUMagh5ieq5dg6vmC+aiohfI7+HE5ysYtCwmJRZV38KSA9Aq4+4xj4I4i0dcHcL64Jpnm2VCULhDhIToeJ1YC8FhwYjHCNL9JvngMbkk3GF8Tp+7+AwTlIOwXFR3ffINY9viyr12qw+wUpwziWDyVHyeBiv39fKbg20YUlhyjJCeWHwhCaY97kkFhiB45CIjJgJ3xOXpBg/aaadH6HEXYkNcxCbcKBcWbhVhEfz7+dxwReh9RoKKLdUDX3yrpRzi8wdis6Z1/E3hs3OuXAu+FOTlymrOEphtPlhlqCIVVd/CkqmGVFhcUM9Y4/68G++WBlEhFESDoBCWCwkRXXbssybyWi4uXAjuhOO6sPidP69ZuvWqXx+zVIiKwN1FddWe8l/wwi22LVhUkJ9CUDzHzWKl3PU1WLMdSzVXUTlDCqvRGKH30IijwAdkAYvjosI6YWkQkosJeI7IUmEBN4hHrACWEVdIEM953Pbx12VPfvvCCVH9+KY3W7BOzJWeu4JJItNYLwQFfHYEdedz8kI9asviHyGogBqrubq/lKGEJUuUqQJNLzLi4hFh0XPj5iMW3B8uzQWCsIixsFiA9fJkaZx+GBGCePan9oqbj8WiV0oPj/xULCoCd0QFX/rj3RPnXQfH5bNhxe5fu8OEnH7OGFIuWGP/sUoSng0FBVQsdPr7gl0xhLAohZ24KKoshZuAuLBSuETEg2iwRjwHAnR/jqh4jTZEN+oNJsIi9cAgLQE3tVaffeYR2a0Xnpk99eD7RqIiruLxJ//8VnOBWDJ13m1g/JE4DLFh0egJIzoemUEEBOTET7jlqvFKQW+/f9MVfQurUYKUWAqXQDxFOy4PK0NQjqtzQbkLRFT+v4qtYlEhtrhHRYLzvs/+jg3TuKiAXBWi+q9r3zR2riuQuWbU2yAbO0QO6RBnxUErMRBuAevjFgiBefLT3SKP3gt0i0Ub202IKhCPpzFMc+NbdpiwGKJxF1jXA1whUHo017G/tsjGDplIOdCbwk3QWyNo9V6fiyoWCHETosEqAWJDSLEFI+4yq0Xdd4BeVTr3EME8+I0/zL75wV02NIPFSoN1hnLi81xBUKUweGnxrMjGDild65PutGeVVXykcAvmLpFfj0BYHIMeFfEUwx7pr4ri4rBSWCuEZTFW6BEiKKxVk2CdL4RqHxBKvNU1XpHIxo6RP9fGjaI3hIVpKiwsEolDhm9cLKQFOJaTvo/lqoKIiKXo+SEmHpvEVQT8BN2MK5JtV4PWCoJxigQJ0lmY5MBpZ9kaEjz3wL1ifYUq7gwcEtZLNnYMi9aqi2QJQPI2xEM2fIE7E4LymInXuTmIw90ZmXN1bEB03vtDXGxPmsHjqh989Q9kEpTeWzwVzFMHZWU2Dj08BMQUNFtcxEt3YqjH35P/Yj3bITrE1tIiDrIq3yzIxh6o/PFu4iHcGK5xJLAiXvKYCevGt/zqvS/Ne3VFcrNMWAgGAY2EFYit1kM3XzC2r8+0JgeFiMjWk6xlVMAFVlUYSOUD5TmxmHiuyCd5RNsEoVHtiihb5rKars86OLKxY0g7lFoth28sLgILRryEmBAbsVjsNtLkZll8RDyViopHz1fd9+U3j7aNBQXk1CiTJmHrlau0q1JmrBQ/kWKCcYsUiagJeSl1LjZEdiBYsaZuN0DPmzQEQzsrJmkqGzuAoQaCTZluUBDPEIyTQOVbi5tUY2WUsMRDMQhNblO87sSpBeIrLB9iZuzQBQXk1QBRkaz1sUtAbPENR1Q+83oaQSl8SQAsGFYw/lwNIQ5jnJYhNe4B8Nx/CoVH2nodDpKNM8LMkLqf3xiBkHww14rojtxhlqosuKWMJRZMOqZHvioWHsQuEGF5KQw1WYzVuaB4REiURyMst1QxvlwjovQfc2oiKtuuhQDZlkeWX2phvdrAPeptFo9snAG+BY1FlVY6kH0nWUqgTrwVL/bh4MJGogkCivNPH9q5ygLyVFQ8ei8wDtgRFlYId4ewiKv4n8Fq2hAZ5+SiA589TcA9cl+JKGKouWfSLJWsWCGmo6ntFHb8vZdZRWzV+qMz0Fsdl2ycAUys+gATqAU4yMQzrEP6ASx4D/GWWy+EQ6LTRYMVwkL5Ma1ioXjNcRfoA8xeDQrcLN734DT3s63enkFwRAVYNF7j3BAY1tVcaO0qy4huv7k2Zgr5jwnkU/2r9xs9D6Ki92jXZ9Vp9t5drM+awD1T93ImZOMMuB8vhRyPqmPyQWgsVpyFR1wkRhEXlsaGYwpXR+acWInjjqUWCsxahW3pAWKt0mEbhIWVwvUB54C1otCOkQEfQvL/OTeGoxBW5a9Y2FT+fbYgCYvcMgvbJsva2hHjKy3b9mbV8n0I3n3GNq/5HMj4WnH9CCH8c8xIL0scycYZUCduFwFY3CzufQGuhhvqXXushddakQgFnlMew1gfwvLMOcJCbNxoXJ0SVmyt0h4k58R7exGgD3yTzff3ZoySoSW3nsQ79n4llgdx+ARZfuYES5UH5PvHrJFtW6wLz+sIFcsGtuxSeI26/VRUMfRScc18Ds6rZZVETOfuUDbOgLRYZYVwuBasAL0vX+cAy8HN9BvLTeaGI6w/e9YLTFzESaQcXFiqF5gG7FgrBBGfF26FwXDOgffx6lQGt3lPrCbjkC4qzzHRG1QWC1EhCmZOu6hGlijeztxkLkD/lQq2dVH5oiWIqq6uy+HLgdAIMYhdsawxtFfEaZ0H8bJxBmSMxbeJm1d2QQiUeczjmrNtYBpR4YoYeAYqLO85/3UWvFuFQhAOwiKu4lEJCyvm1ooJE+l52cSIokoVeE8EjAtGULGlihOXCDRd4A135uvAIyrEYi6O387BWsXsvdyEybZgS3vbdLXL8x8a59pUWKppqYjPOh8mko0zIIv7AHOtPizgjrz3hcAIoOkZcmN5ZHyQwWXSBD6UgyvEIqWCclGl1orAPz0nBELPE9Ei4ljMnvkn9ZH2TOEAKzObUIJFCoLgOe7Pfz+H6fy4S2IrhAM8d5dH7GVLK7FvEJ8NAW04z1IudXMXuU5xT7UJJIHTz1DAZAx1L2dCNs4AS+ZULmqbxlgxiAvrBQTVXqPlJTAMGCshpcTWCnFVVS9QxYl18rjKOg1BVIi5bC4fIj0QhIVYfE0IXBmCQjCO//SJ46/7I1bNCK6L2UPEmbg+ROOdmRSfGOLbquuYUjUUFehl8RDZOCOlVgsIMAniq+bmITDSDsQGcXJwLIdVwshahZ4gwiqzVjFYJQ/csV6IyitP6UWSK8OV4nY5B0SLIBBILJ5YVDG+jf9IE9P9gfr+eIU/lhGgypXkrK+p5UtMQhyL0tFpIiy+yDVBfS/jjbKxAxr9GKb3FL0shSAfMRFkEv+k2zexWAirqieoIBj3zgFjlNTFU26DiCYGskOPFCuIMJQVSsXEz6CwGMldGzaaVUIg9HwREjOzEQjtdFoQDKKih+qr2wDPSYO44LDofPmUkGL4ctZk7Xtb50E2dkSr3y5s0lVWCdCY2Fp5lr2q3BhLRoKV8cbP/OZJeYVCEJKlNBjoLvJlY+8RhEWxICvPcNOxMm5pwNfQwrqQxQdcF0LAjdE5wc3xOtshFl6jnddxg1giOjvsi8sD/s+32237KyHFcIyaZCo9eHXfOkE2dkgrcdWB9UlvdExVlt1BTCRT3a3ZfqFDwLGxUlaSw/GEqABh/fsf7TZhISSsD9YGK+KWCLBCLiIEEQfbLhD2wRIhRoTm7QiM/WLSY1SBkGtE1fvsadnYMZR08CPX6gO2Qg0wj254sFa8RllMGlthtRATvcp0LBEQE6JCiCNh0U5hYBCSWbDCijGkxFpZVEVgRbjpCAhwc1gh1vPCrdWJwQWEO8T9Yb0QJJaqqYhSOCdCjPTaJfQ+20c29gDfDrmWQxsQihIGpLEVFgkhIpg4K28CTJ4jGI6LGE1IhZh47bEvvyP7n2veYFbKh4/MZR65Y+S6/KYiJASCxcIS4Y5oi298ilspniNMrJ+70bbiIlBvMJZ4SP4mdB38WCbfFmqG1IeuhBurkqEOsRWBNQIrE2DMmDUqLBLHZ93Rpy5+T/bU2y60pCeL5lJhAKxzCiRWydrHNxaBYHGwWFguhIL44m2qcJF5jKW2KYMOkOrwJAw22VU2DgQ5LypL6ZnEQiOolKU3NjFCCSRYHgSBoAjeY6ukQEC4TKaDYY2wSi4mG27Z9f6DjDLmJEIvC4+X2DgeGXJimThDjjDcapFCwB26NWoDlqqNtaInra5XwqAzqGXjnEBogEWbuDDESVXWivgKQdWJChAWIiS5ScBtsc2mrZb9JlvO6spk0cEXxvWlvW34BnEFkSEuyyVF4kJIBOWeTkB8baxWGzh23QSPgkF/Ug5k45yRbrKuR9gGc3nBSnm9E+Ih70R5C2N3ZNERF0MvZNd55H/gfytroTIh7M+qgbgtn9UNiIt8E1aLmGkaq1VHw3gKestVVSEb50jppIsmMVMTCOSZnUOVxM+2vXPk6hATg8cIzMpWGDxmEDkmiInXYstFhQLxFvVaiAtX6CkCLCHxFhasTFwIBFdGohi8EiFe3yKFeqwG8RSw4o+6zr0jG+eInCamivhaEdwkOSsSoV6WTM8Oa0XsxMAw1gqXR9Z89PMoxFVGEWM5QWCjqoZgtQjqKaVmbBPrRXyEkBAa4iLfpVwiAipLDCMcLFI8YRZBVZS+xFC8N9eJrbbkjHphDpROx68ayqmKqYjJyF2pdRmYp+h1UT6IjJUilooL9BAdgsMN8mh1WGbBwnsXVotYi1Ibpv9TfoPAsGDey8MdEsshOtpcWIglPa8OYFB5rtPAbBkjXyhLbTAwxAITF4oUQ1l5jCVLA1ZGE7XjNonJ3DopmBya9/L2WZBOHOVukeeM8xFvxbGWVzPw6FYLYWH5KJ/GaiEsL62mDZFhrUg9AFbMXSbiatija8pc4qkY19NKEVbp7J66FANpAxceBYC4u7pqBqCUhEpN6qEQltWkF3EU4qJ6Actl7VGxns9a5jEWFoPXCGu0LEAhMLdi1HghMuIx4ifEhrgQWYNMeRN6z6bX4VpaScKSlacIhLRAKipAWLzGYDPiItOujlEGloKJCt4rzAP2YMGCsAjOaQPiLf5HdCYkE15UORr24TEVVoyLjEeEFlszhAYziIu839zXzopFBaMnauMBkbXy6frrYwQXGNdcVVUxKGy9+XBj6b1R0mKTIxBNUTaMC8RNYrks/kqDduIzc6WXWMoBoSAYJayU2Jq5RaNalrVSKTxssFoyUFA5t15fTCwox/6ojQektDCwrLDPqxgYvkFYPrO5DfSuiHEYlmFsjtIUJjDw62Cet0JkBPDEWhaDWRkxtem5lSJo90kPuLqmwkpBWGAWj+rVYs0KKmepFVPnH2B4TF3PQUkF5dgftcOAyNIaenJKVJ5dH5UeB6tVsxrfI6LNuvM+0EueCWEhEOrNqTbAirnQSCd88RWrLHDnf/8pFcu4QzjGLMKKsckbAQRGPX6FsOa+AEgqphi5w4BQ9aAumlkhJSyslRXzFdaqpvSYXhLvIevwfYo/wzIE0zwn14SwsGI2qSEIhzbExxig9+xot+GcsA8QYyEsX8dLiaaUsD37+YwgrJWawBEx19/NASWmGLnTgMgUA2mCshSDB+2ICipKj+8M+PvIX8lghZtYHEDMhXgQVtyOuLBqDCwjsjgfhcgYs2O2Nm4MsbhQeByJLWIkJKxT2J79cH01gnIGH/uLUUJKkTsOBAPO0pKoCaguKoJ2L+YjX+U1UoI4pyN/4g4YRokFBLhIhOVWzEFcvIbw4nbgOByPwNvX+UIsWCCsmYLXr9+y0wSZTqatYa69QCWkFLnjQJwbmLhouLW4MC8VFrkrd4NV64cG0tJbMtJqO7mWBO4wFRZgqcasVYFKdCIyJroiHGPz8aPn/uMB6T4NmGu+SolIIXceCHmjSXAqUQHx1ShoD+JSs5sL1A9CVq4q6PGWw/BL6iarqJm71wVYd3rQ6ecaDCWgMuQBBqDUNaVLPMaisqC9yF3hBityV4hIvW9leTRxkk+obVsWzECxOmYH8AXEuhM6qM80CEo8VciDDIBMMdhkCSEq8NwVoiLbXpFp/2Gg6iZULl9JGsJXTWbohZgKl5hCO68jROZDNiy4awqzaLhGc7VQjhJOHfJAA6AuZmmKIQ3aeazIXdWV4JZWUSiY8EnvESxGCvCc9oY1UW1A9J4iUec+OEo0TZAH6xnpBkkxEJgjIicWlgftVYt8FDSpQ2LZHpk4nQOIifTB3Mf7UpRgmiIP2DNy+j1VnSakohSG57g/Jw7a1UTUgjh3VQdWobSn2BH8LjaCIeYjTkLQwHPaVszy2SlKLG2QB+0ZGV/hBnFxDkIipsJSmbUqgnYeG+aumiJ/FL0DEK16vxWPEkpb5IF7Rv7yKmkGd3Wep3ILhZhcWC1zV03BquCOKOlVx20DnQfEqt5nxaNEMg3y4D1TGjwzPOMB+khUEbS1zF1NAzEa9WGylEdAfolt2QcXt2LdWx1KINMi32AASi0Dbg63SICOyNxaISxyVxXlxtxU9V6zQNqC6la+DIDogOdYx0NWRClKHLMg32QAKtfPIvGJa0RguD4gcVox4AyHzU0eGiWMWZFvNBCVvwjWElyReo8lNShRdIF8swFpGsfU0cuvKxzuKEF0hf1RbzogciJFC3r7PZjDmVQIXTN6ot58QGQKogGIqrdfsDpciQXQF2P/qJMYEM8lyeI/AWOCS0vVkvh+98lEgzqZOYDIsGIE+AzTMJ4GiAkLtRTUFKT3uk9kozqpJYc26j73iWwEdXJLDk3U/e0b2eiok1xyaKHu6xDIxhh1sksODdT9HArZmKJOesnKRt3HIZGNCnXyS1Ym6v4NjWwsQ32IJSsLdd/mgWysQn2YJSsDdb/mhWysQ32oJfNF3ad5IhuboD7ckvmg7s+8kY1NUR9yybCo+7ISkI1tUB92yTCo+7FSkI1tUR96Sb+o+7CSkI3ToD78kn5Q13+lIRunRV2EJd2irvvK4+yn/T+nQOtnLVjzrgAAAABJRU5ErkJggg==";

// ../../../../tmp/pkreimer/src/img/food/beansausage.png
var beansausage_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/moomoomilk.png
var moomoomilk_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/honey.png
var honey_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/pureoil.png
var pureoil_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/warmingginger.png
var warmingginger_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/snoozytomato.png
var snoozytomato_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/soothingcacao.png
var soothingcacao_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/slowpoketail.png
var slowpoketail_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/greengrasssoybeans.png
var greengrasssoybeans_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/greengrasscorn.png
var greengrasscorn_default = "data:image/png;base64,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dS97TrEVftW1oAQL68APv9Z/zz33bPR/fNcWROTTvirwNKNZMJ1E3pMp93qgktaxjI5DikVRg8HkkgkSSTP9MCm+QBMRNZJ31m+ZLWtWz+vJcV3MGGRnoGi2CUDPr9+w+aUvfenWpRdf2xSo/8JacII1u574yFsHfnDvvUOOWy0gEo4+n+gIiDkxkmEBnYa9MyNUnfliFgJhQASeipqbWtIJWfVp90JVEq9ZdvK4nkTeVepGDXlSVGUwHyJTEfRWPe+Fmze+4uVbtYuevcHcv4lrwQoW1o6HvtX/5Hfu2Pjwww9t6Z4YL0iZvldWAzSlC01MI3Ga8plcMXXehZvRLHfi6PCWJ554otASqinvuUhNoc8FYKjq5IQ1edwzFRO1YqnBmlMM3Fta24odS1dv7unpqRTW9NPAwMC29p/TfL+5fvFa0II1u+L99/bvu+MrG75/z9acHda2NBqNQp41Vs31im2rztj80qtetjV//Z+KAERP/bBfi+INweHDdGxkmMb27aajhw9RrXhEpoWlojprLzaUWobSLTnqWLGS1vSvpc5151JLX882/bQXNQXpFKxfC8F6+hrefnf/kSNHNlTLZVpz2uptS9a/vCkIzdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczdVczbUQ1v8PSoCUhHiC8x8AAAAASUVORK5CYII=";

// ../../../../tmp/pkreimer/src/img/food/coffee.png
var coffee_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/pumpkin.png
var pumpkin_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/avocado.png
var avocado_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/food/nuts.png
var nuts_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/data/food_and_cooking.ts
var Food = class _Food {
  static list = [
    { name: "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", energy: 185, img: largeleek_default },
    { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", energy: 167, img: tastymushroom_default },
    { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", energy: 115, img: fancyegg_default },
    { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", energy: 124, img: softpotato_default },
    { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", energy: 90, img: fancyapple_default },
    { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", energy: 130, img: fieryherb_default },
    { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", energy: 103, img: beansausage_default },
    { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", energy: 98, img: moomoomilk_default },
    { name: "\u3042\u307E\u3044\u30DF\u30C4", energy: 101, img: honey_default },
    { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", energy: 121, img: pureoil_default },
    { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", energy: 109, img: warmingginger_default },
    { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", energy: 110, img: snoozytomato_default },
    { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", energy: 151, img: soothingcacao_default },
    { name: "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD", energy: 342, img: slowpoketail_default },
    { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", energy: 100, img: greengrasssoybeans_default },
    { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", energy: 140, img: greengrasscorn_default },
    { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", energy: 153, img: coffee_default },
    { name: "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", energy: 250, img: pumpkin_default },
    { name: "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", energy: 162, img: avocado_default },
    { name: "\u3072\u3068\u304F\u3061\u30CA\u30C3\u30C4", energy: 112, img: nuts_default }
  ];
  static map = _Food.list.reduce(
    (a, x) => (a[x.name] = x, a),
    {}
  );
  static maxEnergy;
  static averageEnergy;
  static averageMaxCookedEnergy;
};
var Cooking = class _Cooking {
  static list = [
    { type: "\u30AB\u30EC\u30FC", name: "\u3054\u3061\u3083\u307E\u305C\u30AB\u30EC\u30FC", energy: 0, foodList: [] },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4\u30AB\u30EC\u30FC",
      energy: 748,
      foodList: [{ name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 7 }]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3042\u3076\u308A\u30C6\u30FC\u30EB\u30AB\u30EC\u30FC",
      energy: 7483,
      foodList: [
        { name: "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD", num: 8 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 25 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30B5\u30F3\u30D1\u30EF\u30FC\u30C8\u30DE\u30C8\u30AB\u30EC\u30FC",
      energy: 2078,
      foodList: [
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 10 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 5 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u305C\u3063\u305F\u3044\u306D\u3080\u308A\u30D0\u30BF\u30FC\u30AB\u30EC\u30FC",
      energy: 9010,
      foodList: [
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 18 },
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 12 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 15 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 10 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u304B\u3089\u304F\u3061\u30CD\u30AE\u3082\u308A\u30AB\u30EC\u30FC",
      energy: 5900,
      foodList: [
        { name: "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", num: 14 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 10 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 8 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30AD\u30CE\u30B3\u306E\u307B\u3046\u3057\u30AB\u30EC\u30FC",
      energy: 4162,
      foodList: [
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 14 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 9 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u304A\u3084\u3053\u3042\u3044\u30AB\u30EC\u30FC",
      energy: 4523,
      foodList: [
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 12 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 8 },
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 11 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 4 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u6E80\u8179\u30C1\u30FC\u30BA\u30D0\u30FC\u30B0\u30AB\u30EC\u30FC",
      energy: 1910,
      foodList: [
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 8 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 8 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u307B\u3063\u3053\u308A\u30DB\u30EF\u30A4\u30C8\u30B7\u30C1\u30E5\u30FC",
      energy: 3181,
      foodList: [
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 10 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 8 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 4 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u305F\u3093\u3058\u3085\u3093\u30DB\u30EF\u30A4\u30C8\u30B7\u30C1\u30E5\u30FC",
      energy: 814,
      foodList: [{ name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 7 }]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30DE\u30E1\u30D0\u30FC\u30B0\u30AB\u30EC\u30FC",
      energy: 856,
      foodList: [{ name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 7 }]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30D9\u30A4\u30D3\u30A3\u30CF\u30CB\u30FC\u30AB\u30EC\u30FC",
      energy: 839,
      foodList: [{ name: "\u3042\u307E\u3044\u30DF\u30C4", num: 7 }]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30CB\u30F3\u30B8\u30E3\u30AB\u30EC\u30FC",
      energy: 9445,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 24 },
        { name: "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", num: 12 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 9 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 5 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3072\u3067\u308A\u30AB\u30C4\u30EC\u30C4\u30AB\u30EC\u30FC",
      energy: 1942,
      foodList: [
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 10 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 5 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3068\u3051\u308B\u30AA\u30E0\u30AB\u30EC\u30FC",
      energy: 2150,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 10 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 6 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30D3\u30EB\u30C9\u30A2\u30C3\u30D7\u30DE\u30E1\u30AB\u30EC\u30FC",
      energy: 3372,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 12 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 6 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 4 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 4 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3058\u3085\u3046\u306A\u3093\u30B3\u30FC\u30F3\u30B7\u30C1\u30E5\u30FC",
      energy: 4670,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 14 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 8 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 8 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u308C\u3093\u3054\u304F\u30B3\u30FC\u30F3\u30AD\u30FC\u30DE\u30AB\u30EC\u30FC",
      energy: 13690,
      foodList: [
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 27 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 24 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 14 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 12 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3081\u3056\u3081\u308B\u30D1\u30EF\u30FC\u30B7\u30C1\u30E5\u30FC",
      energy: 19061,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 28 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 25 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 23 },
        { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", num: 16 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30D4\u30E8\u30D4\u30E8\u30D1\u30F3\u30C1\u8F9B\u53E3\u30AB\u30EC\u30FC",
      energy: 5702,
      foodList: [
        { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", num: 11 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 11 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 11 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3044\u3042\u3044\u304E\u308A\u3059\u304D\u713C\u304D\u30AB\u30EC\u30FC",
      energy: 20655,
      foodList: [
        { name: "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", num: 27 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 26 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 26 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 22 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u306A\u308A\u304D\u308A\u30D0\u30B1\u30C3\u30C1\u30E3\u30B7\u30C1\u30E5\u30FC",
      energy: 15621,
      foodList: [
        { name: "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", num: 10 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 16 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 18 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 25 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3057\u3093\u308A\u3087\u304F\u30A2\u30DC\u30AB\u30C9\u30B0\u30E9\u30BF\u30F3",
      energy: 24802,
      foodList: [
        { name: "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", num: 22 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 20 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 41 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 32 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30EF\u30AB\u30AF\u30B5\u30AB\u30EC\u30FC\u30D1\u30F3",
      energy: 10945,
      foodList: [
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 20 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 20 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 8 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 15 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u3068\u3073\u306F\u306D\u308B\u30AB\u30EC\u30FC\u3046\u3069\u3093",
      energy: 25539,
      foodList: [
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 39 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 31 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 22 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 20 }
      ]
    },
    {
      type: "\u30AB\u30EC\u30FC",
      name: "\u30BF\u30CD\u3070\u304F\u3060\u3093\u30CA\u30F3\u30AB\u30EC\u30FC",
      energy: 7950,
      foodList: [
        { name: "\u3072\u3068\u304F\u3061\u30CA\u30C3\u30C4", num: 15 },
        { name: "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", num: 12 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 12 }
      ]
    },
    { type: "\u30B5\u30E9\u30C0", name: "\u3054\u3061\u3083\u307E\u305C\u30B5\u30E9\u30C0", energy: 0, foodList: [] },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30E4\u30C9\u30F3\u30C6\u30FC\u30EB\u306E\u30DA\u30C3\u30D1\u30FC\u30B5\u30E9\u30C0",
      energy: 8169,
      foodList: [
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 10 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 15 },
        { name: "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD", num: 10 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30AD\u30CE\u30B3\u306E\u307B\u3046\u3057\u30B5\u30E9\u30C0",
      energy: 5859,
      foodList: [
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 17 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 8 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 8 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3086\u304D\u304B\u304D\u30B7\u30FC\u30B6\u30FC\u30B5\u30E9\u30C0",
      energy: 1898,
      foodList: [
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 10 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 6 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u304F\u3044\u3057\u3093\u307C\u3046\u30DD\u30C6\u30C8\u30B5\u30E9\u30C0",
      energy: 5040,
      foodList: [
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 14 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 9 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 7 },
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 6 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3046\u308B\u304A\u3044\u3068\u3046\u3075\u30B5\u30E9\u30C0",
      energy: 3113,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 15 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 9 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3070\u304B\u3062\u304B\u3089\u30EF\u30A4\u30EB\u30C9\u30B5\u30E9\u30C0",
      energy: 3046,
      foodList: [
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 9 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 6 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 5 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 3 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30DE\u30E1\u30CF\u30E0\u30B5\u30E9\u30C0",
      energy: 978,
      foodList: [{ name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 8 }]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8\u30B5\u30E9\u30C0",
      energy: 1045,
      foodList: [{ name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 8 }]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30E2\u30FC\u30E2\u30FC\u30AB\u30D7\u30EC\u30FC\u30BC",
      energy: 2942,
      foodList: [
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 12 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 6 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 5 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30E0\u30E9\u3063\u3051\u30C1\u30E7\u30B3\u30DF\u30FC\u30C8\u30B5\u30E9\u30C0",
      energy: 3665,
      foodList: [
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 14 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 9 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30AA\u30FC\u30D0\u30FC\u30D2\u30FC\u30C8\u30B5\u30E9\u30C0",
      energy: 5225,
      foodList: [
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 17 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 10 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 8 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4\u30B5\u30E9\u30C0",
      energy: 855,
      foodList: [{ name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 8 }]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3081\u3093\u3048\u304D\u306D\u304E\u30B5\u30E9\u30C0",
      energy: 2845,
      foodList: [
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 5 },
        { name: "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", num: 10 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30E1\u30ED\u30E1\u30ED\u308A\u3093\u3054\u306E\u30C1\u30FC\u30BA\u30B5\u30E9\u30C0",
      energy: 2655,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 15 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 5 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 3 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30CB\u30F3\u30B8\u30E3\u30B5\u30E9\u30C0",
      energy: 11659,
      foodList: [
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 11 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 19 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 12 },
        { name: "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", num: 15 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u306D\u3063\u3077\u3046\u3068\u3046\u3075\u30B5\u30E9\u30C0",
      energy: 2114,
      foodList: [
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 6 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 10 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30EF\u30AB\u30AF\u30B5\u30B5\u30E9\u30C0",
      energy: 11393,
      foodList: [
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 22 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 17 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 14 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 9 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3081\u3044\u305D\u3046\u30B9\u30A4\u30FC\u30C8\u30B5\u30E9\u30C0",
      energy: 7675,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 21 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 16 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 12 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u307F\u3060\u308C\u3065\u304D\u30B3\u30FC\u30F3\u30B5\u30E9\u30C0",
      energy: 2785,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 9 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 8 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u307E\u3051\u3093\u304D\u30B3\u30FC\u30D2\u30FC\u30B5\u30E9\u30C0",
      energy: 20218,
      foodList: [
        { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", num: 28 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 28 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 22 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 22 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u30AF\u30ED\u30B9\u30C1\u30E7\u30C3\u30D7\u30C9\u30B5\u30E9\u30C0",
      energy: 8755,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 20 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 15 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 11 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 10 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u306F\u306A\u3075\u3076\u304D\u30DF\u30E2\u30B6\u30B5\u30E9\u30C0",
      energy: 11881,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 25 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 17 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 15 },
        { name: "\u30DE\u30E1\u30DF\u30FC\u30C8", num: 12 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u308A\u3093\u3054\u3055\u3093\u30E8\u30FC\u30B0\u30EB\u30C8\u30B5\u30E9\u30C0",
      energy: 19293,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 35 },
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 28 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 23 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 18 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u304F\u3060\u3051\u308B\u30A2\u30DC\u30AB\u30C9\u30B5\u30E9\u30C0",
      energy: 7125,
      foodList: [
        { name: "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", num: 14 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 18 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 10 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3058\u306A\u3089\u3057\u30EF\u30AB\u30E2\u30EC\u30C1\u30C3\u30D7\u30B9",
      energy: 25162,
      foodList: [
        { name: "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", num: 28 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 25 },
        { name: "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", num: 30 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 22 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u3054\u308D\u3054\u308D\u306D\u3063\u3068\u3046\u30B5\u30E9\u30C0",
      energy: 25356,
      foodList: [
        { name: "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", num: 20 },
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 30 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 18 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 27 }
      ]
    },
    {
      type: "\u30B5\u30E9\u30C0",
      name: "\u304F\u3055\u3080\u3059\u3073\u30B5\u30E9\u30C0\u30E9\u30C3\u30D7",
      energy: 26350,
      foodList: [
        { name: "\u3072\u3068\u304F\u3061\u30CA\u30C3\u30C4", num: 30 },
        { name: "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", num: 22 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 36 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 33 }
      ]
    },
    { type: "\u30C7\u30B6\u30FC\u30C8", name: "\u3054\u3061\u3083\u307E\u305C\u30B8\u30E5\u30FC\u30B9", energy: 0, foodList: [] },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3058\u3085\u304F\u305B\u3044\u30B9\u30A4\u30FC\u30C8\u30DD\u30C6\u30C8",
      energy: 1907,
      foodList: [
        { name: "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", num: 9 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 5 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3075\u304F\u3064\u306E\u30B8\u30F3\u30B8\u30E3\u30FC\u30AF\u30C3\u30AD\u30FC",
      energy: 4921,
      foodList: [
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 14 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 12 },
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 5 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 4 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4\u30B8\u30E5\u30FC\u30B9",
      energy: 855,
      foodList: [{ name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 8 }]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30AF\u30E9\u30D5\u30C8\u30B5\u30A4\u30B3\u30BD\u30FC\u30C0",
      energy: 1079,
      foodList: [{ name: "\u3042\u307E\u3044\u30DF\u30C4", num: 9 }]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3072\u306E\u3053\u306E\u30B8\u30F3\u30B8\u30E3\u30FC\u30C6\u30A3\u30FC",
      energy: 1913,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 7 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 9 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30D7\u30EA\u30F3\u306E\u30D7\u30EA\u30F3\u30A2\u30E9\u30E2\u30FC\u30C9",
      energy: 7594,
      foodList: [
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 20 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 15 },
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 10 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 10 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3042\u304F\u307E\u306E\u30AD\u30C3\u30B9\u30D5\u30EB\u30FC\u30C4\u30AA\u30EC",
      energy: 4734,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 11 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 9 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 7 },
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 8 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u306D\u304C\u3044\u3054\u3068\u30A2\u30C3\u30D7\u30EB\u30D1\u30A4",
      energy: 1748,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 12 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 4 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30CD\u30ED\u30EA\u306E\u30C7\u30C8\u30C3\u30AF\u30B9\u30C6\u30A3\u30FC",
      energy: 5065,
      foodList: [
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 11 },
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 15 },
        { name: "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", num: 9 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3042\u307E\u3044\u304B\u304A\u308A\u30C1\u30E7\u30B3\u30B1\u30FC\u30AD",
      energy: 3378,
      foodList: [
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 9 },
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 8 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 7 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30E2\u30FC\u30E2\u30FC\u30DB\u30C3\u30C8\u30DF\u30EB\u30AF",
      energy: 814,
      foodList: [{ name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 7 }]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u304B\u308B\u308F\u3056\u30BD\u30A4\u30B1\u30FC\u30AD",
      energy: 1924,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 8 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 7 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u306F\u308A\u304D\u308A\u30D7\u30ED\u30C6\u30A4\u30F3\u30B9\u30E0\u30FC\u30B8\u30FC",
      energy: 3263,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 15 },
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 8 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30DE\u30A4\u30DA\u30FC\u30B9\u3084\u3055\u3044\u30B8\u30E5\u30FC\u30B9",
      energy: 1924,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 7 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 9 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u304A\u304A\u304D\u3044\u30DE\u30E9\u30B5\u30C0",
      energy: 3015,
      foodList: [
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 10 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 7 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 6 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3061\u304B\u3089\u3082\u3061\u30BD\u30A4\u30C9\u30FC\u30CA\u30C3\u30C4",
      energy: 5547,
      foodList: [
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 12 },
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 7 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 16 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u3060\u3044\u3070\u304F\u306F\u3064\u30DD\u30C3\u30D7\u30B3\u30FC\u30F3",
      energy: 6048,
      foodList: [
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 15 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 14 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 7 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u304A\u3061\u3083\u304B\u3044\u30B3\u30FC\u30F3\u30B9\u30B3\u30FC\u30F3",
      energy: 10925,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 20 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 20 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 18 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 9 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u306F\u306A\u3073\u3089\u306E\u307E\u3044\u30C1\u30E7\u30B3\u30BF\u30EB\u30C8",
      energy: 3314,
      foodList: [
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 11 },
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 11 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30D5\u30E9\u30EF\u30FC\u30AE\u30D5\u30C8\u30DE\u30AB\u30ED\u30F3",
      energy: 13834,
      foodList: [
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 25 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 25 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 17 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 10 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30B9\u30D1\u30FC\u30AF\u30B9\u30D1\u30A4\u30B9\u30B3\u30FC\u30E9",
      energy: 17494,
      foodList: [
        { name: "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", num: 35 },
        { name: "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", num: 20 },
        { name: "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", num: 20 },
        { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", num: 12 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u306F\u3084\u304A\u304D\u30B3\u30FC\u30D2\u30FC\u30BC\u30EA\u30FC",
      energy: 6793,
      foodList: [
        { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", num: 16 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 14 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 12 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30C9\u30AA\u30FC\u306E\u30A8\u30AF\u30EC\u30A2",
      energy: 20885,
      foodList: [
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 30 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 26 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 22 },
        { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", num: 24 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u304B\u305F\u3084\u3076\u308A\u30B3\u30FC\u30F3\u30C6\u30A3\u30E9\u30DF\u30B9",
      energy: 7125,
      foodList: [
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 12 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 14 },
        { name: "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", num: 14 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30C9\u30AD\u30C9\u30AD\u3053\u308F\u3044\u304B\u304A\u30D1\u30F3\u30B1\u30FC\u30AD",
      energy: 24354,
      foodList: [
        { name: "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", num: 18 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 24 },
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 32 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 29 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u30B0\u30E9\u30B9\u30DF\u30AD\u30B5\u30FC\u30B9\u30E0\u30FC\u30B8\u30FC",
      energy: 8165,
      foodList: [
        { name: "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", num: 18 },
        { name: "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", num: 16 },
        { name: "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", num: 14 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u307F\u3064\u3042\u3064\u3081\u30C1\u30E7\u30B3\u30EF\u30C3\u30D5\u30EB",
      energy: 25484,
      foodList: [
        { name: "\u3042\u307E\u3044\u30DF\u30C4", num: 38 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", num: 28 },
        { name: "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", num: 28 },
        { name: "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", num: 21 }
      ]
    },
    {
      type: "\u30C7\u30B6\u30FC\u30C8",
      name: "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD\u30ED\u30FC\u30EB\u30B1\u30FC\u30AD",
      energy: 19846,
      foodList: [
        { name: "\u3072\u3068\u304F\u3061\u30CA\u30C3\u30C4", num: 26 },
        { name: "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD", num: 10 },
        { name: "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", num: 22 },
        { name: "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", num: 33 }
      ]
    }
  ].map(
    (x) => ({
      ...x
    })
  );
  static map = _Cooking.list.reduce(
    (a, x) => (a[x.name] = x, a),
    {}
  );
  static maxFoodNum;
  static maxEnergy;
  static cookingPowerUpEnergy;
  static cookingPowerUpEnergyAverage;
  static cookingPowerUpEnergyMap;
  static recipeLvs = {
    1: { bonus: 1, totalExp: 0 },
    2: { bonus: 1.02, totalExp: 1080 },
    3: { bonus: 1.04, totalExp: 2324 },
    4: { bonus: 1.06, totalExp: 3936 },
    5: { bonus: 1.08, totalExp: 5545 },
    6: { bonus: 1.09, totalExp: 7341 },
    7: { bonus: 1.11, totalExp: 9712 },
    8: { bonus: 1.13, totalExp: 12760 },
    9: { bonus: 1.16, totalExp: 16426 },
    10: { bonus: 1.18, totalExp: 20791 },
    11: { bonus: 1.19, totalExp: 25639 },
    12: { bonus: 1.21, totalExp: 30911 },
    13: { bonus: 1.23, totalExp: 36621 },
    14: { bonus: 1.24, totalExp: 42922 },
    15: { bonus: 1.26, totalExp: 49882 },
    16: { bonus: 1.28, totalExp: 57551 },
    17: { bonus: 1.3, totalExp: 66001 },
    18: { bonus: 1.31, totalExp: 75131 },
    19: { bonus: 1.33, totalExp: 84981 },
    20: { bonus: 1.35, totalExp: 95642 },
    21: { bonus: 1.37, totalExp: 107159 },
    22: { bonus: 1.4, totalExp: 119576 },
    23: { bonus: 1.42, totalExp: 132938 },
    24: { bonus: 1.45, totalExp: 147309 },
    25: { bonus: 1.47, totalExp: 162621 },
    26: { bonus: 1.5, totalExp: 178929 },
    27: { bonus: 1.52, totalExp: 196563 },
    28: { bonus: 1.55, totalExp: 215605 },
    29: { bonus: 1.58, totalExp: 236149 },
    30: { bonus: 1.61, totalExp: 258299 },
    31: { bonus: 1.64, totalExp: 281955 },
    32: { bonus: 1.67, totalExp: 306759 },
    33: { bonus: 1.7, totalExp: 332769 },
    34: { bonus: 1.74, totalExp: 360469 },
    35: { bonus: 1.77, totalExp: 389943 },
    36: { bonus: 1.81, totalExp: 421521 },
    37: { bonus: 1.84, totalExp: 455380 },
    38: { bonus: 1.88, totalExp: 491055 },
    39: { bonus: 1.92, totalExp: 528663 },
    40: { bonus: 1.96, totalExp: 568918 },
    41: { bonus: 2, totalExp: 611541 },
    42: { bonus: 2.04, totalExp: 656646 },
    43: { bonus: 2.08, totalExp: 704344 },
    44: { bonus: 2.13, totalExp: 754748 },
    45: { bonus: 2.17, totalExp: 807184 },
    46: { bonus: 2.22, totalExp: 862205 },
    47: { bonus: 2.27, totalExp: 920936 },
    48: { bonus: 2.32, totalExp: 983590 },
    49: { bonus: 2.37, totalExp: 1050391 },
    50: { bonus: 2.42, totalExp: 1121582 },
    51: { bonus: 2.48, totalExp: 1196687 },
    52: { bonus: 2.53, totalExp: 1319485 },
    53: { bonus: 2.59, totalExp: 1471363 },
    54: { bonus: 2.65, totalExp: 1672589 },
    55: { bonus: 2.71, totalExp: 1930878 },
    56: { bonus: 2.77, totalExp: 2231322 },
    57: { bonus: 2.83, totalExp: 2579312 },
    58: { bonus: 2.9, totalExp: 2977994 },
    59: { bonus: 2.97, totalExp: 3413120 },
    60: { bonus: 3.03, totalExp: 3891145 },
    61: { bonus: 3.09, totalExp: 4433557 },
    62: { bonus: 3.15, totalExp: 5054788 },
    63: { bonus: 3.21, totalExp: 5773019 },
    64: { bonus: 3.27, totalExp: 6606405 },
    65: { bonus: 3.34, totalExp: 7599103 },
    66: { bonus: 3.39, totalExp: 8631742 },
    67: { bonus: 3.43, totalExp: 9710333 },
    68: { bonus: 3.48, totalExp: 10831445 },
    69: { bonus: 3.52, totalExp: 12036881 },
    70: { bonus: 3.58, totalExp: 13355125 }
  };
  static maxRecipeLv;
  static potMax = 87;
  static maxRecipeBonus;
  // 週に料理チャンスでn%上がる時、どのくらい期待値があるか
  // TODO: こんなfor回さんでも計算できない？頑張ってみたけど無理だった…
  static getChanceWeekEffect(effect, day = null, initial = 0) {
    if (effect == 0) {
      if (day == null) {
        return {
          total: 24.6,
          successProbabilityList: [
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.1,
            0.3,
            0.3,
            0.3
          ]
        };
      } else if (day == 6) {
        return {
          total: 3.9,
          successProbabilityList: [0.3, 0.3, 0.3]
        };
      } else {
        return {
          total: 3.3,
          successProbabilityList: [0.1, 0.1, 0.1]
        };
      }
    }
    if (day == null) {
      let p = Math.min(effect / 21, 0.7);
      let result = 0;
      let pList = [1];
      for (let i = 1; i <= 21; i++) {
        let thisP = 0;
        for (let j = 1; j <= i; j++) {
          let rate = ((i <= 18 ? 0.1 : 0.3) + Math.min(i == j ? p * j + initial : p * j, 0.7)) * pList[i - j];
          for (let k = i - j + 1; k < i; k++) {
            rate *= 1 - pList[k];
          }
          thisP += rate;
        }
        result += thisP * (i <= 18 ? 1 : 2) + 1;
        pList.push(thisP);
      }
      return { total: result, successProbabilityList: pList.slice(1) };
    } else {
      let p = Math.min(effect / 3, 0.7);
      let result = 0;
      let pList = [1];
      for (let i = 1; i <= 3; i++) {
        let thisP = 0;
        for (let j = 1; j <= i; j++) {
          let rate = ((day == 6 ? 0.3 : 0.1) + Math.min(i == j ? p * j + initial : p * j, 0.7)) * pList[i - j];
          for (let k = i - j + 1; k < i; k++) {
            rate *= 1 - pList[k];
          }
          thisP += rate;
        }
        result += thisP * (day == 6 ? 2 : 1) + 1;
        pList.push(thisP);
      }
      return { total: result, successProbabilityList: pList.slice(1) };
    }
  }
  static evaluateLvList(config) {
    return structuredClone(this.list).map((cooking) => {
      cooking.lv = 1;
      if (cooking.rate > 1) {
        if (config.simulation.cookingRecipeLvType1) {
          cooking.lv1 = config.simulation.cookingSettings[cooking.name].lv;
          cooking.lv = Math.max(cooking.lv, cooking.lv1);
        }
        if (config.simulation.cookingRecipeLvType2) {
          cooking.lv2 = config.simulation.cookingRecipeFixLv;
          cooking.lv = Math.max(cooking.lv, cooking.lv2);
        }
        if (config.simulation.cookingRecipeLvType3) {
          let exp = 0;
          let lv = 1;
          for (let i = 0; i < config.simulation.cookingRecipeRepeatLv; i++) {
            exp += _Cooking.recipeLvs[lv].bonus * cooking.energy;
            while (_Cooking.recipeLvs[lv].totalExp <= exp && lv < _Cooking.maxRecipeLv) {
              lv++;
            }
          }
          cooking.lv3 = lv;
          cooking.lv = Math.max(cooking.lv, cooking.lv3);
        }
        if (config.simulation.cookingRecipeLvType4) {
          let exp = 0;
          let lv = 1;
          const num = Math.round(cooking.energy * config.simulation.cookingRecipeRepeatLv2 / 100);
          for (let i = 0; i < num; i++) {
            exp += _Cooking.recipeLvs[lv].bonus * cooking.energy;
            while (_Cooking.recipeLvs[lv].totalExp <= exp && lv < _Cooking.maxRecipeLv) {
              lv++;
            }
          }
          cooking.lv4 = lv;
          cooking.lv = Math.max(cooking.lv, cooking.lv4);
        }
      }
      cooking.recipeLvBonus = _Cooking.recipeLvs[cooking.lv]?.bonus ?? 0;
      cooking.eventFoodRate = config.simulation?.eventBonus?.food && cooking.foodList.some(({ name }) => name == config.simulation.eventBonus.food) ? 1.5 : 1;
      cooking.fixEnergy = cooking.energy * cooking.recipeLvBonus * cooking.eventFoodRate;
      cooking.fixAddEnergy = cooking.fixEnergy - cooking.rawEnergy;
      cooking.enable = true;
      if (config.simulation?.enableCooking?.[cooking.name] === false) cooking.enable = false;
      if ((config.simulation?.mode == 1 || config.simulation?.mode == 2) && config.simulation?.cookingSettings[cooking.name].lv >= _Cooking.maxRecipeLv)
        cooking.enable = false;
      return cooking;
    });
  }
  static getEnableCookingList(config) {
    return _Cooking.evaluateLvList(config).filter((x) => x.enable);
  }
  static getDisabledCookingNum(config) {
    return _Cooking.list.length - _Cooking.getEnableCookingList(config).length;
  }
};
Cooking.maxRecipeLv = Object.values(Cooking.recipeLvs).length;
Cooking.maxRecipeBonus = Math.max(...Object.values(Cooking.recipeLvs).map((x) => x.bonus));
for (let food of Food.list) {
  food.bestTypeRate = {
    \u30AB\u30EC\u30FC: 1,
    \u30B5\u30E9\u30C0: 1,
    \u30C7\u30B6\u30FC\u30C8: 1
  };
  food.bestRate = 0;
  food[`maxAddEnergy_\u30AB\u30EC\u30FC`] = 0;
  food[`maxAddEnergy_\u30B5\u30E9\u30C0`] = 0;
  food[`maxAddEnergy_\u30C7\u30B6\u30FC\u30C8`] = 0;
}
Food.maxEnergy = Math.max(...Food.list.map((x) => x.energy));
Food.averageEnergy = Food.list.reduce((a, x) => a + x.energy, 0) / Food.list.length;
for (let cooking of Cooking.list) {
  cooking.foodNum = cooking.foodList.reduce((a, x) => a + x.num, 0);
  cooking.rawEnergy = cooking.foodList.reduce((a, x) => a + Food.map[x.name].energy * x.num, 0);
  cooking.rate = cooking.rawEnergy ? cooking.energy / cooking.rawEnergy : 1;
  cooking.maxEnergy = cooking.energy * Cooking.maxRecipeBonus;
  cooking.addEnergy = cooking.energy - cooking.rawEnergy;
  cooking.maxAddEnergy = cooking.maxEnergy - cooking.rawEnergy;
  for (let { name, num } of cooking.foodList) {
    if (Food.map[name].bestRate < cooking.rate) {
      Food.map[name].bestRate = cooking.rate;
      Food.map[name].bestCooking = cooking;
    }
    if (Food.map[name].bestTypeRate[cooking.type] == null || Food.map[name].bestTypeRate[cooking.type] < cooking.rate) {
      Food.map[name].bestTypeRate[cooking.type] = cooking.rate;
    }
    Food.map[name][`maxAddEnergy_${cooking.type}`] = Math.max(
      Food.map[name][`maxAddEnergy_${cooking.type}`],
      cooking.maxAddEnergy
    );
  }
}
Cooking.maxFoodNum = Math.max(...Cooking.list.map((x) => x.foodNum));
Cooking.maxEnergy = Math.max(...Cooking.list.map((x) => x.maxEnergy));
Food.averageMaxCookedEnergy = Food.list.reduce((a, f) => a + f.energy * f.bestRate * Cooking.maxRecipeBonus, 0) / Food.list.length;
Cooking.cookingPowerUpEnergy = 0;
Cooking.cookingPowerUpEnergyAverage = 0;
Cooking.cookingPowerUpEnergyMap = {};
for (let type of ["\u30AB\u30EC\u30FC", "\u30B5\u30E9\u30C0", "\u30C7\u30B6\u30FC\u30C8"]) {
  let typeCookingList = Cooking.list.filter((c) => c.type == type);
  let normalPotCookableList = typeCookingList.filter((x) => x.foodNum <= Cooking.potMax);
  let normalPotMaxCooking = normalPotCookableList.sort((a, b) => b.maxEnergy - a.maxEnergy)[0];
  let allPotMaxCooking = typeCookingList.sort((a, b) => b.maxEnergy - a.maxEnergy)[0];
  if (allPotMaxCooking.name != normalPotMaxCooking.name) {
    let addVolume = (allPotMaxCooking.maxEnergy - normalPotMaxCooking.maxEnergy) / (allPotMaxCooking.foodNum - normalPotMaxCooking.foodNum);
    Cooking.cookingPowerUpEnergy = Math.max(Cooking.cookingPowerUpEnergy, addVolume);
    Cooking.cookingPowerUpEnergyAverage += addVolume;
    Cooking.cookingPowerUpEnergyMap[type] = addVolume;
  }
  for (let food of Food.list) {
    food[`bestTypeRate_${type}`] = food.bestTypeRate[type];
    food[`maxEnergy_${type}`] = food.energy * food.bestTypeRate[type] * Cooking.maxRecipeBonus;
  }
}
for (let food of Food.list) {
  food.maxEnergy = Math.max(food.maxEnergy_\u30AB\u30EC\u30FC, food.maxEnergy_\u30B5\u30E9\u30C0, food.maxEnergy_\u30C7\u30B6\u30FC\u30C8);
}
Cooking.cookingPowerUpEnergyAverage /= 3;

// ../../../../tmp/pkreimer/src/data/nature.ts
var Nature = class {
  static list = [
    { name: "\u3055\u307F\u3057\u304C\u308A", good: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", weak: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", goodShort: "\u624B", weakShort: "\u5143" },
    { name: "\u3044\u3058\u3063\u3071\u308A", good: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", weak: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", goodShort: "\u624B", weakShort: "\u98DF" },
    { name: "\u3084\u3093\u3061\u3083", good: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", weak: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", goodShort: "\u624B", weakShort: "\u30B9" },
    { name: "\u3086\u3046\u304B\u3093", good: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", weak: "EXP\u7372\u5F97\u91CF", goodShort: "\u624B", weakShort: "EX" },
    { name: "\u305A\u3076\u3068\u3044", good: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", weak: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", goodShort: "\u5143", weakShort: "\u624B" },
    { name: "\u308F\u3093\u3071\u304F", good: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", weak: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", goodShort: "\u5143", weakShort: "\u98DF" },
    { name: "\u306E\u3046\u3066\u3093\u304D", good: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", weak: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", goodShort: "\u5143", weakShort: "\u30B9" },
    { name: "\u306E\u3093\u304D", good: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", weak: "EXP\u7372\u5F97\u91CF", goodShort: "\u5143", weakShort: "EX" },
    { name: "\u3072\u304B\u3048\u3081", good: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", weak: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", goodShort: "\u98DF", weakShort: "\u624B" },
    { name: "\u304A\u3063\u3068\u308A", good: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", weak: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", goodShort: "\u98DF", weakShort: "\u5143" },
    { name: "\u3046\u3063\u304B\u308A\u3084", good: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", weak: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", goodShort: "\u98DF", weakShort: "\u30B9" },
    { name: "\u308C\u3044\u305B\u3044", good: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", weak: "EXP\u7372\u5F97\u91CF", goodShort: "\u98DF", weakShort: "EX" },
    { name: "\u304A\u3060\u3084\u304B", good: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", weak: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", goodShort: "\u30B9", weakShort: "\u624B" },
    { name: "\u304A\u3068\u306A\u3057\u3044", good: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", weak: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", goodShort: "\u30B9", weakShort: "\u5143" },
    { name: "\u3057\u3093\u3061\u3087\u3046", good: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", weak: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", goodShort: "\u30B9", weakShort: "\u98DF" },
    { name: "\u306A\u307E\u3044\u304D", good: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", weak: "EXP\u7372\u5F97\u91CF", goodShort: "\u30B9", weakShort: "EX" },
    { name: "\u304A\u304F\u3073\u3087\u3046", good: "EXP\u7372\u5F97\u91CF", weak: "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9", goodShort: "EX", weakShort: "\u624B" },
    { name: "\u305B\u3063\u304B\u3061", good: "EXP\u7372\u5F97\u91CF", weak: "\u3052\u3093\u304D\u56DE\u5FA9\u91CF", goodShort: "EX", weakShort: "\u5143" },
    { name: "\u3088\u3046\u304D", good: "EXP\u7372\u5F97\u91CF", weak: "\u98DF\u6750\u304A\u624B\u4F1D\u3044\u78BA\u7387", goodShort: "EX", weakShort: "\u98DF" },
    { name: "\u3080\u3058\u3083\u304D", good: "EXP\u7372\u5F97\u91CF", weak: "\u30E1\u30A4\u30F3\u30B9\u30AD\u30EB\u767A\u751F\u78BA\u7387", goodShort: "EX", weakShort: "\u30B9" },
    { name: "\u3066\u308C\u3084" },
    { name: "\u304C\u3093\u3070\u308A\u3084" },
    { name: "\u3059\u306A\u304A" },
    { name: "\u304D\u307E\u3050\u308C" },
    { name: "\u307E\u3058\u3081" }
  ];
  static map = this.list.reduce((a, x) => (a[x.name] = x, a), {});
};
var nature_default = Nature;

// ../../../../tmp/pkreimer/src/img/berry/belueberry.png
var belueberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/blukberry.png
var blukberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/cheriberry.png
var cheriberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/chestoberry.png
var chestoberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/durinberry.png
var durinberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/figyberry.png
var figyberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/grepaberry.png
var grepaberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/leppaberry.png
var leppaberry_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABx4SURBVHhe7Z1rsGVFdcetfMnnfE2FCmUVSSqlFYwPBIshQmBgZgB5hYCADu9BUMDhJThODTDiYECUR0KiRCmTUsrCRIgksaBMIW9BAXkJYsWkYgIRLE0hCOz0r+9Zhz59/rt373P37n3mzpmq38zcPufsR/f/rrV69ep93rT6zHXbFVve8zsLRqj+mRdk47yiOndHR/XTPCAb5xHVqQuWUP01NLJx3lCduWAS1W9DIhvnCdWJCzSq/4ZCNs4LqvMWpFH9OASycR5QnbYgD9WfpZGNQ6M6a0E7VL+WRDYOieqkBbOh+rcUsnEoVOcsWB6qn0sgG4dAdcqCblD93TeysTSqMxZ0i+r3PpGNJVGdsKAfVP/3hWwshbr5Bf2ixqEPZGMJ1E0vKIMaj66RjX2jbnZBWdS4dIls7BN1k3PEzo73O6513OF40vGi4yVH5Xh19P//cjzs+IbjIscqx2861DHnFjU+XSEb+0Ld3MD8nuN4x+cdzzoQz3K427HNcYDjtxzqnHOFGqcukI19oG5qIExMWCQljq7AsiFYRDbX1kyN13KRjV2jbmYAcFe4OCWCvsGlnu5A1OraBkeN23KQjV2ibqIwuzu+6lADXhqsGDHZbzvUtQ6KGr9ZkY1doS6+MBc71AAPDROCIxzqmgdFjeMsyMYuUBddEKwUszY1qPXs9+Zq2zl7VVde/+fVtbecUf3NPZuqGx7dVn3xiSuqG398XfXFZ6/1///Cg5dW199+TnXNTSdXV122utr6wbdVW1btpI+ZBkvKTFTdw2Co8WyLbFwu6mILcopDDaIEUVz5ucO8iBCPAkF94dnPTXDDs9f4dnvPDU9f5cV25eb9qi1rd5HnqgHrRYpD3ctgqHFtg2xcDuoiC0L8ogZvkn129pZGiQmx/PWPPlNd9/Tl1dU/vKz6zJOXNML7eD+fM8Fh8bZu2E2fX7PRoe5pMNT45iIbZ0VdXEGaReUEhXUy12Yghr98+i/GQrriiS3Vp35wUXXpI+dWW77/0eoT3/vIGH6mHT75gwv9+3h/LDSOh2VDvLhXeT3TMGudK9eoxjkH2TgL6qIKwlReDdQYBpd4KRQUFsbEtO2xT3jRfOzB06rzHzihuuC7J3shISAlnlw4PufBTfpYTFxbxNy5RjXeTcjGtqiLKcg+DjVASzgrRZBdJyhEc9FDG8ZiQlyILBYIeEvmXrv4kQurTQ+fX13w0DnVuQ9+tNr43bMmoI3XeA/v3frYJv95rBgWMzPQnyvXqMY9hWxsg7qIgpDRJvmoBqa6+JA/mIijiH1Cd4dFMkFhmUIRwZVPXOJFYSKKBdQWjsHxiL8yA3yWiJjhqnsvjhr/OmRjG9QFFOQKhxoQLyrSAqGVMsEgKrNS/Bu7uW2Pb/ZiUuLoivPu2FBtPnZXee0C7nNXh+qDoigNKGRjLurEBeE3WQ2Cz0eFlioWFRZKiYr/9y2okLMfOLPatGkffQ+aLzlY5xx0aUhpIUY25qJOWpDaZRpcjRIVmKWCMJYidlLxUt8gro9/5f3+l0HdSw2U7yAw1S9FUHoIkY05qJMVpNZakaCsExWBuYkqjKmIe9SgxyCCU+85ufrgncdWx/zb0dWf3XF4ddjth47h56O/faR//cS7jq9Ov+80eZwYjotrvGjDO+U9JSDFovqnCEoXhmzMQZ2oIDq2cr/1llIgNxWKCutkosJqWTuWSg22waAjEoSz5p/3rw745upWrPuXNV6EOSLjXFuuP6Kt9WJWrPqoCEobIBtzUCcpiCzKYypv1spmf4bNAIEUA23M+lLuD0EhDCWYWUCcHBMBqfOBWS8fe+WlJQgJVB8VQWkDZGMT6gQF0W7QDYJZq9gFEpQra1UXqDO4uDUljq5AZLhMLFmd0MYCS1swyqRVPxVB6QNkYxPqBAUhcTjVwWTW66wV8VRsrRCbGkwG+X3fOkiKoS9wsZzTYjRcZwhtJ3ztfT6Fou7dMXezRNnYhDp4QdjAMNW5ll1nfS4UFdhMkDSDtdVZq+VaqoNuWzNGvT4Lh3/zwOqCC1ZN3fOIhcXqCDpyqoPNDVJlEIoKzFoRZ1mbiq1wTWpg60A8J3/l4OrcrX9abTrp7dMuy7nnzUe+xYvizOvXequDSJpEx+tH3XpwddqNB1cXnr1HU6y1MmIsdfCCUNI73bluQM0NhoKCML6iGoE2NRP8yP1nZM36eA9iyhjwNGt38Zl3BEmagX99Jr5dLResjFmhOnhBZODOgNS5wTDNYFl25QabXCCCwoJggdQ1DASl16qfiqD0YcjGFOoEBZGVDPy2I6x4NggE64gqjK/iBWVmZkpMBm7Juzpx7gFh+5rqoyIobYTIxhTqJAVhj95UJ1OpWRdfmbDCNEMoKmDWpQQFuD1Kb9R5B2RuLZUhG+tQJynIbziSrjBOM4AJywJ3kqKxsOqSoF5U4nwNsI5nqNdnhUkLu6zpA9U/RVC6UMjGFOpkBdHBuwt4EdZVT32ytbBY+1Oiwv1lWioqPlliUtvq+ZlyFypcqUxg5xDvbxIdryOk8NkQ4XEHQemhDtnYhDppQRiYqcEg3aCEZcF7mGoIhaVSDEz3M4J0lpXYG4jYsaYMPiJADBQf2oNE6rCHixArUetOtQLWaO62gxlKC3XIxibUSQsin7lAqYxyhZZuCGOsMHhXs0FyTuocAVggRIBrospTvWdWEBvPfBi87kqh9KCQjU2oExZE7sahXEYF74Cw6rLu8fIN1qrBBbLRoe8HioRwrrkSmdJEjGxsQp2sIHrzhBPD9d+/dEJQhi3pWGEfGxxMWHHg3mCtpBsuCC5zu4i3ZGMT6kQFYQOFHGDKZmJRgRX4WXFfmHkPRQVzlgCtg2WcQWeHoLRhyMYc1IkKogv9nNW6/K6NU8KKA3ibGVLJEIrquH+cKb1Qj7seKhIQq+ErFNoV8qUgnzXoA96UNkA25qBOUhCZzwLKZ2JhgblD+5kAnvXBUFgZQXst5NIuvWxNddnffcCL28pzbEc0Fa0TPH2V3/DBpIOHkPjd0u3XCYHZKakO1U9FUPqQjbmokxSkdjPFtlvfmAEa5g5twAng46Ucv7AsjleH39l8/RFeSJc/vsWDm6WGnv8zmUBYISw7wZTQRvzVdy70Lj1z13TIoBtcY21MNbRBnaAgJB5VB3uXg7sLhUVlQxhnMfhxcjTXYrCEhHgRT7gr2twrJTm4XxNbHVwjKRITXCwyLBoPL2nhOklTqL4qQqiNiR9mQZ2gILUPAsG9hMKyfJbFWQxsKCyfZhDHCUGwCApRIh7q16nwJBcW4uva71vv2Xj/8T7VwXkRNRYtFphhQpsS2aPblrbm560EkKBVfVUE08WESNqiDlwYAlf9tGNnfa58dPOEuBhgS5QyiAjAhEUBnjzOCOIn3ClijIUUlxPzYBHOde4Dp3hhmchMaLzunxHx+GYpMOD6sGRTAuP5W+L6IgYX15RYclEHHAhZ8QBx+gFRhYnSUFh+bVAcg2I+NpTyXhMSy0AIrG4jRGyV+BlrhdXi/KHIaEtZMSxtLLDMZz+wNqn6qwhSNE2oAw2MzoRHVotBxB1awV+4TihTDS62OevmI72YsESIqW5HTciF3ztXisQg3uNazJqZwJosWOgiSQZnPNhtsA2tUjgp1EHmALLRqmP99N+EFc8MEYsJi3r0+LOIivfkbDaNIZhPWSLg9VBguE4sm3qvQQw2tl5PX5XzULdBnrUlxVOHOsAcYGUpMv0Q5rUYNIRlte/s7TNhTdReOffHBgkslBJNLgT4lnpIgdCJu8xFIjb1PoMqjnFurFlcVFEUX2eUAlKoDw8ICVKy741fU0Km24QVpxzCdULq2e0zzP5IniqxhOAWDfW6QTpCCSQGi2rWC6GlUha4xlBcDW6x+E4eKaIY9cGBIFCX+wpTWEwVCgsrYaKCcdbdxVXsQFYCQUAE8aGlC7HdzUpoTXGX4RfIR+Ii0E+50wlxuRljYkMrFM3OSyGFqA8NABUNM9c9WQCPmBAWlgGLYDuQYeNn9/cDQ54KEcTCwC3mPseB9yGw+Bi54uI6ibdMXE1BvcVcZO0TW9IoPiz2nT5STIb6QGGIn1pbqBg634SFoLBcgCXjNYP3QLyZVVWZ5sBsMjwO5LpFLJWJi2tW7zGIuUxcPpEq+mBEsW/DkIIC9ebCtPoiAOPKVTtXf7/P71e37f/W6v5D31k9cNLeXiz81hNIx2KKYUBDIcwqKkNZrpyAHkJxNQX041yXi7cSLpGae9XXnTOPoqLmu3aBOWbrnjt5ISGiF9bvW71yylrPrzcs/fvUtsPGrsTEQ1zy8C/uq+752R0TooKwupQ0g9odzfIPs0jcJ7NHttDzf1IW8Xv5fDwRIBURC6MOL/RRzEX8pd4D/MJYvOUTqKKvRhSJteZNVORcsqo0r/2TN0+JSfEPX//QhJW6+T++XNmfr/77306IiveFAsCVhSJBUAgotWZHhQTvCz/Hkk94XMh1iYDbRlxYr9RMMXSJieqIIhn5eRJVluvD1T1+xB5SRAbW6tXT11WvnrnOB+6hcLBSQBY7FBXE1ioUB2LJ3Q2NuMLPKqsFqRlfDDPZHJdo2XmevqOubUTvX2s3L6KSz7wKweVhoV45aY0UEyJ6/aKDqupSx6cO9jz5+aOnxKNiLNpCUUGcUmhbBEheLPw8Gfzw+JA7SzQsS88kRL0OY6vlYq3EemLvQfx2ISpiKOXysEyvn3/ghJhCbr/xKO86YiEBg0AQHQsKwsVp46Hz9vUTAnV9CgLo0CXWWa1U3BTDveAOm2aJZrUSM8Te3aFsLEij+/vOAbtOCQq8oISYQh7Zts5bnqbMeAj5qlBQcPA3Vle/Om7JUmI1sZ7qWmNiq6ViLVIbShx1WLyVslq2nsj396jrcrDMo8ajM2RjIQjU1U17tq36XRlLETvVWaiYV87ftzrmptU+Adq07of4SA2oWSDHeO69b/Xigh+u3dNfn7ruEOrg42OpBe02gTzgElOxFq4dYTFLTLjDXr/pQjYWgJRC7eyPAP2nx+09JarXNjZbqQm2HFjd/aF3e4vDoCIwxIPIGGDA7WFJUll14iuE9bN1b69eXr+m+uUh+1c/WbtHlrgoxwmPxTUoC5qb2wLSJz4jnwj+x+6wvjCw1xp52ViA2mx6nah8YK7E08BLH97LiwurEw5wLliw29fv5oUFJqxccZHnio+pMvK+Tj6xdBPDLJGlKfUamDtMzA57XZiWjT1T+92CxC5KVFgeJZpcENd/HvM2vzHBrFcOvJffeBNVLCzALSZjrlU7+bLn+NgqI992lpgSFhMUhOXXD9V1LVWGqPHpBNnYI7U7axgcFVPNaqliiLd+uf5d1X8fvWt104V7+kSntGL/tBRTIULEiPszUYWuMOTB/f9Y3pOBK506j0OJq23iNGXliLF8nCWuaQRPyVHjtGxkY4/UPkzD56h6ElWICezFI//Ig3geOfEd3l3yL8Kz1wwTFTk0JaxfHNSQinABdJyN70pcKWz9MFHx0Fu1g2zsidpND+SpYlG1DtTb4maWiAw3GQothHZeJ/lq16WEBc+v2d0vM6n7gzqrBSp5mlPa3AQbZr2w6pegtnthcQOy2pPgN05++pSCEoNx9Qeq6l+vXuKmzfo9HWOL2qQblLB+vm7v6kdr3jF1f2Pc4KpYyyCgj2eLuaXNdVgAnxBWb899kI09wBKCujHpAmuD9W2HVNX9XxstIQd/CogLC5oSFryw+t3V1/f7Q3mfuCOqIJSoDJK5KjuPa5zFetnyzkoWlqz+xHXEa39JF/jkHSMlRX+wXOr9HUK8x/W9dNQBUlTwwupVPgWh7tWg3EaJyiCfppKoWK82yz9gM8PEFv3tWlj6QWkONQuszaojnro/JdwhMZm7vv87XIsKENaLLtZKBvJukFMu0SBxG4sLiL1y3eNKFxYPqpi6KW+tIlElrdXLz41UJP4Qc6nPdAzXqARlEGfhDpusFruA6maJIawI1K1z5swcV7Kw9OOzHW2s1WufPmqkIPGHmEt8pg9w20pQBmmH59+7m7dazHTVfRt8f06OuFgCUq4RSKim8lisGbK0sxJjLBm0s2wTx1ZM6dVgQq2wfnzfUkAvPtMHqcDd+J+9loTVlDQFCgdzxMWyUso11okLYZHLWonCou5n6oaIQUJRQWMy9LmnRmoa/cFSFRQVpAJ3w4RFXiunvAa3yANJlKBiyHcp11hXQ48rJOWwEoUlKxjkemBTKQwiIpaCwoLybDkwGbgbCIs4K8cdjnED3zRbNHCNdSkJJSxSDglhbZcJUrku6N1gJCqSj3Iw5wgmFrnC+t99dvfCokhR9UEdVELkuEZSEqq+LE5HICz+XWlLOrKKgQRiLKxUfDUXOGvKakBbYSUz8TVQ0qy2kcWouItcV5hItf8nhLVdLkLLvYEq0977uuAyoQwaYSkhhTArRFg2M8yNsxRk6WfJd4UuEQtGMaA6voMvglLj1gmysSPk2qAs4suoXx+MkbXCXSsxhZDHCoUFqYXpRpylobynyT3GbhFLBV5kd23Ux176zh41bp0gGzsAE6tuRm7fmmdhYU0RVl1VQwiZ91hYiQCemn8GV702ydpd/MYMVY8PxFxhQI+gyHF5i3XrBn3MpRImNXadIBs7gKBw6mZwC7Go5llYpEAQFeSkGoitYmEllnf4VgkSyDIloyCpWuce1Q4gln54Dr06lqPXR3fLxmWCtdr+hTVygUZu4B4LKzEz5AuXrM+yHy1A6iD3GREkTjdt2kcfZzvdTEHibepmtidhMVM1UTUt5YDFVy2EhaUK+4ydS1gx9d5JXOylxBVXoxLAJ5701+vDQWRjB0hhUdSnhDVvs0KLq4wcN2jxFVi6ARJLO3W7ZHgMZvMzwZzlit0iyVMTlWXjh1iABtnYAa2ENU95LKxnKKqc2SCYqDoQlkG5EU/hU5/1xA8fAVuwbpgR9rpDB2RjB7QTlhtANciliUUFOdYqdINgSzqQcIU5wTOxavLZFvE2fnOHzAh5FLn6jKP3b66QjR3QSligBroksfsDrksJKcZmgy2FxVOfVd8p6h9HEBUOUt6MsJgR+q9pUZ9ZiuXUeTpDNnZAvbBEHgv62OqVBbO/IFAPyZkJxtYKTFSQSDe0/daIWssV1tIzO0RYPnCvf/gabladozNkYwfUCgvXQl1TLKwh4qwwTxWTU3sFsbUKZ4SQSJC2fUYVbrE25gpdIsLiaTTMHtV7Hb0tPhuysQOmheVuEmFRtMeAILDYei13K302CSsFOekFUNYqDNwhsaQzy7dF1O4fCGeJ1GwlMu5sbFHH7hTZ2AG1CdLX7zxjYnBCgdVZrVe/cFRVPXlOVf10c1U9dpp8TxZOUCpAD8mdBUJsrSCMr1iEVv0wYtbKgtpcF5l5XCEPZ0vEV21iu5mRjR2hbqqqntkkZ1q0sR43FWvdeUpVvfzpqnrts2/QVlzOEqrgPAZR5cRVEOatQkJrlSibWc5jsZMukUVrhJWIr4o86102doRcosBiUQWqBgsYWJ8wxS3ee+qkoIyffFwLKMR93lunhMsLaSMqK4+Jid1g5nLOLNS7RAffr5iIrwhT1DE7RTZ2hHwACA+crR7+mBwwgwH2JchYqpBQWAjHWbcxTkTeKmUKKQRXnCsqUC4QQlFBQ2WD6rM21Oe36kVVJL4C2dgR8vuabzn+XVX1/MXjIF7BjMyLJxaW8eBZUiCzkDv7M+pcYDwbbCjyY11Q9Vlbap/eU8M2hzpO58jGjpDmms6uHt7oA/GXzz58auCItar7z6uqFy6tqhe3amHdfaoUSRtwfSrWS1EnKgiDdkgs5XS5nMLMkgfVqvPEEJp0JehGZGNHEGTqXTrXHbE0w3OWq/ryKV5gWI5fb15yk15UIbGwbj9JiiUHBNXWSoFKLRixtYKEG+x6VpZ8SHBAF+43G9nYIXJ7Pe7QB/EIKxaRwt5nwvrWyVI0KUhn1Fko4ivEDSrWSokKYlE1bLHna4ZVXy2HVD0X7UVFBbKxQ453qJutfnWTC85drDQlohywcuudhXPWR4kIeI33YJ1Sgbm3ks9seuPYWNJg1ppyfxDPBHlQW2IZhzSB6qcuwM0RQ9mTffiXn4u5vxDZ2CG1MQDf9IDlqe7bkG+5jFs+PCGOWfHZ/rpzO/E2iWrCBR7ynuq1m4/1bjoRtLMlTvVT1/S+ZNOEbOwYYoqpTqbz/UAgLpKgzALVACuchVFCaQvikcd3VgtX/fNT95OCMsYBu4nK/ZLwC6Pud0TxL/0eCtnYMbXJvLHVMpgtZlovNaNsS3XvaPYZwtLR6HoQixIUjF1gIKpXbztB3ueI5SZFtxv4fib5Qg/U5lt8rBWK69vOiuQIbJnuEGFOHO+ZC5YsZ3gtDmW1lKhIgTApUfc4ouiXfQ+FfZucfLEH5BOTcYdfOvQtU4PpcbGKD+7rXOSLW2e2Wj6zb7kyJyg/Q1XX4GABvFFU957qUyjqHkf0uodvXjBRlRQW1G4Q4Ot1vZDEwHqwYogMqxJaMic6AnAlnhQ+tsIqclx1vghWCcik+2DdCeqliw92nz1xSVQOBJYI2KH3wrqhCUVVWljkb1Sne7xLTIkrwFsYhIHQXExEykAJCFgwJg/FDA+8KMQxG0GEuMqRmMY4gWF11T2NaFsput0Ri6q0sECuH8I1B+zyxgDGg5oBLot4CFeFZQndF2BpfF2X+GwjSlDg2hviKrbQF6kmGAolKpBv7pFkLZGPt3AxIojOhZkZAsIyGTMLCgvqgnIpKtfO16So+whY0QG7EpQhP9AzyVqisbgY0EzX2AtYTurBlKic8PmqOXX9ASvaBSoxhcgPFaC2lmg8U0RUo0GUA98XCKrOSoF7vcH9QZHy36FQQoqRHyxE8jkFxFzhdL53gTUJyoGbbQjUYUWnFpSIFPLDBZHVDwbWy5fYhC4Jgc0Y4E+BVeR4DYKyPFVDSgGIHwdfp+sLJaA6/F/qIAWRj5QMwfVgLeLB9oJAZLlCQ0i8N0dMIzhvhusDNkgsRDVi/B91sII0PnwMa/HEJWucMN5ITE5hYosJLV4uToSPbF6dY6UA99fbg2KHJhRMLhM/qIMWJOvZUGx69QKz4L5jsFAtBAU7fKCumGpQBy9IbQJVgYvyMdhyRebcJMfJdHkhO3RKIYVsVCcpCBsq68psJwm2OTFbw9IgkPHykM30cIXEVQ4sEq/zPsp2MmZ5Cq6vyMbPoVC6aINsBHWygvDQV8pq1aAODS6b61PXvSJQemiLbDTUSQtDlp7Zlhrg0lBDvsNVKcyKbAxRJx8A1tyGEhiC2qGK9LpANsaoixgIBhgXmbtJc1aIoQjMV7yFMtS4LwfZqFAXMyBsSmBrGZn72mqJlmARqUtnD94gW6aGQo33cpGNdaiLmhP4Cju2VpHFR2hYHL6ESAkIa8frCAlhItC53j3TZ/+H49slsjGFurgF/dFn/8fH7hLZ2IS6yAXdo/oe1Hvboo7bJbIxB3WxC7pD9XmI+kwu6nhdIxtzURe9YPmovlaozzahjtMHsrEN6uIXzI7q4xTqGHWoz/eFbGyLuokF7VF9m4M6Voz6XJ/IxllQN7MgH9WnbVDHNNT7+0Y2zoq6qQXNqL5cDn0csy2ycTnEnbYgjerDlYBsXC6qAxdMo/pupSAbu0B15II3UH22kpCNXaE6dMHKFxXIxi5RHbsjo/poJSIbu0Z18I6I6puVimzsA9XROxKqT1Yu6970/4ph6GP3krYlAAAAAElFTkSuQmCC";

// ../../../../tmp/pkreimer/src/img/berry/lumberry.png
var lumberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/magoberry.png
var magoberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/oranberry.png
var oranberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/pamtreberry.png
var pamtreberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/pechaberry.png
var pechaberry_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABo3SURBVHhe7Z1r8GRFeYf5kk/5ki9WKiUXK8YoIRCLkqQSUFKCMQRSEWIZEkoSLJCiNtlAUCAaLotoIoRC0AAKAoKB4ppd5BLYXSQLWeS2KhCQQsIaDbEoo0bBUovkpJ+e6dmePr/u0+fMuc3ufHjqv/vOmTnndP/mfd9+u/vMbu88+YidhnMP3H2XQd3/mJDGZUQ1/s6OaoexII3LhGrwXQnVJmNAGpcB1ci7Kqp9hkYax45q3F0d1U5DIo1jRTXoih2oNhsKaRwjqiFXlFFtNwTSOCZU461Io9qxb6RxLKhGW5GHas8+kcYxoBprRT1Uu/aFNA6NaqQVzVDt2wfSOCSqcVYshmrnrpHGoVCNsqIdVHt3iTQOgWqMFe2i2r0rpLFvVCOs6AbV/l0gjX2ibn5Ft6h+aBtp7At10yv6QfVHm0hjH6ibXdEvql/aQhq7Rt3kimFQ/dMG0tgl6uZ2Mn7W8FrDmw2/bTjccJQHttcZ1HsHQfXTokhjV6ibWnJ+zoBwzjdsNfzQUGSy3XC94RjD4EJT/bUI0tgF6maWkN8yfNBwh+ElgxJMExDkSQZ1zt5Q/dYUaWwbdRNLwmsMhK+LDM8YlCjaZJvhAIO6ll5Q/dcEaWwTdfEjx4npQsNPDEoAXTOo91L9WBdpbAt10SOGpPpvDG2GuEVA2Oo6e0H1Zx2ksQ3UxY6QNxneZyAEqc6tzccPeX3xid/bp7jsD99SXH3MQcU/vu/txc0nHTYDG6+r9wpI7tV194Lq11ykcVHURY4MvBMjuYVCHSJCOFv/9vjim7dcWBTbNhTFs5uK4rnNcZ6+pygeua146dbz7XvV5wYwUFD30Auqf3OQxjqEF+Bf1AhhVEcirjqwmoN2t17n2fUfL15+7vai+MHWovjeQ1pAKRDgw7cUxf1XFk9deoYVqDzfDm41qPvpBb+/c5HGKtTJRw6CusygOi3JR9+2V3H3umOLFx+4ovjpi8YbvfJImW9tKYrn7zN/Hy2Kl54qiu8/vwP+/8L988J6bL31WlZcmz9TvHzHJTZEqvN7cP3q3npB6SCFNKZQJx0xDN0bCer2U95lxVT8txGCEpMPAnr1O0VRvKzhNYSHqJ68eyIqx4Oft+J6dePl1huqa/FgcKHusxeUHmJIYwx1spFCUk4OpTonCgk3YS7qmRQpQfngtab5VQkTEmuIi8GGuudeULpQSKNCnWSEMMVCDSg/KTd5E6HulW1XTXImJZ4USkQhP9g+SepdCAyZeq0a4mIeUt1/Lyh9hEhjiPrwEUJRk/k31RElbO50+tH1vJNCCcmHHIsQ+JU7tKhgmmv54qrIuZiXVG3QC0ojIdLooz54ZFA62GxQHVCCEdjmc/6s+MnWmyYd/l8PasHkwIiQEBcm7N95ZpLIu7wqFgJ9puHQQUJPaFb3MOU8g2qPXlBa8ZFGh/rAEUEelZ2Y46HmBOXzDSMORKLEE8JxiDEc6aWIhUAfLxw6qHVVlCJYGaHapheUZhzSCOqDRgQJbFYe5UKeFFQIHgaRUT7wwea8T13CUWCMh24sCavYdKmtc6n7Ijc0f1kVMeiSG6UdkEb1ASOBpDU77JEEf//ez1ZXw7uEYqgSUkiQZ/lQ+lD3N2WUc4olg3rzSGC0pxq2BImvnWIZUlDA+ZWIYgR5loNkvmJ+kYGLarNeCDUEc/9RbxoBuHomY1WDzkHjEzpssqw6um9SI0HFlmuksGD7dee58KdgRQbLfVT79YKvI5j9Qx08AkhOK5f7usTcdo7q4L4hsScv+5pJ2p/MDIXwwLVSVA5yRXX/U1jZqtqwF3xRwZhFtdagGnAOVggMnkcByf1LZrT4w4cno0eKrUwHOZ6/S4vJR4wMfShBVITE0aw+lQeMgMrpGIbhNuwRblRH9wmiCqv2vqhyxeULi3zrMcMTU/7NfHnMX0oQqj2mXG1Q7dkLYxcWjaMabcbMS1XlUoQjvAi1J+dJgH9j4zW3MkG9P5ewBsbnK2FBKjRuvWEiqoeumAjp6askFaNEVnKodu2FsQqLdUeqsSzkUiyqswXHVOijgOkLKQfEgcjU56VAvOFnhWHQJ+W1EBaiEmLy+dG/fiqVyI9i7ZZ8cSCSoiK3qFylSSfXFVQI70eY6vMViDH8DCUox7cS0zvUsoSQFHzBVDtNGdxryRcGIB7+zDeTOTMb+lKiWmTOT4HAEKo6l08orJS3gpiwEBWjSCGiEiZMshoDDy7bbARr5eULPcNkqmocC/mUnY5JiYpcye/cNqkKj2EoVGLy2Z6Y4nnhRi0khRHXtotOkm02ZVCvJY09kqymMyVj59BSOVXbnkpRNeHskvcqbwWx5P2r/1RbWHitRK416FJmaewJip+qQSxWVIQHGj2VU4Ui6AKEo87vYFTJMUpIPilvRRisIyww4qrItQZbECiNPcA0TbSiTviznooGT5UUnKfoA3V+H1YxMOJTgoKqGlYTYRnsCFG04RSKzKr9O0caeyBaACVRtzkVjZ0qfuIllAC6IlXrwqP6IiEfJOS5KZ2c9Vgc+9znpXiSPHGlnc5SbWkYbA5RGjvmHQbVCLaabkd/NDSdoTrRQd6jBNAVKWHVnWxWNBWWCYc/vu8C2Z5TBln5II0d8jMG/dQWk4Qygz9r6JyquhJAV6hrgNyFfFU0FRZ86ZLUrupBdlJLY4dEJ5aZuZ81MqFEdaJPnx4rlryHIXAREJYSTQ7bLi++eX1kpemE3ienpbEjWKMulxPP5VUQjgLZmMAGBbdJAVufOZaqZXGNOblTLpQblGhymIbDxPr43pfUSGNHRBP2uRAYeiuExL48HyeuLgujDjW9k7Prpi41pnNKGGERDhMFU7bF8WxU1S+dII0dEC0v2HqV38BhbsXWqlBYbLFyr3dVcqDYqTxVF6ICJqBZHqOEk4MRVkUSz7NSVd90gjR2gC6GmoSdxWtzDRx2JOEvFBb4x7RVfWd+0C2l8T/f0ZWogNWjGSsbopg86/82r0sl8b3uQ5TGmuCNqrYgsXO3dLOsK7KL21zjqhKD8lihsICcC4HV8WAIieN5X9WEc1ujvxhuvXtTr2Xeh7ASSXyv4VAaM8CtMoPub2l3j5cOXS47lf0bnMFqyEphMfoLRYUXC4/zQWRu3Tnexwcbr6XqUiF1RcV9kIwz0vPBpo4Ht3J0S/NwiLBevfs02dZTqCH6fdMZ0lhBcjXCFP/pv+x7Kx3DFi27/JYQ4Dew6liSdfIqJyqEoY7rgjrFTwYeXzcC+s/b4/yHOSYUWLinkCXJQjiVPHiuFdYYwqE0JqDYpi44BqsXZEHUrlf/4mWTb6jfyFWF0T6pIyqmbpSQYuDB3HvdkuRFxTUV1vZLTym195TeHiYijRF46Je62NqwQI1NmFZY4FYxQE5xtGuoUXEd7pqqqCsqh/NcsW1fdcU1FdYrV31AtvsU6omqf1tFGgWENXWRjbAlBicq4Bvrd9SQO2+aFD6VaHIgbPL+yA5oCx49J6GfJu//e9XJlsRjkHp5hrw0CuLbsQ7fa4J6LcIsDDrCcAgkzKrju6RJOQGvo0STA/lWmF/FoI387WAObJQpOObWM2fC+srHouu0elm2LI0CWS445y/eWJz96FuLsx9/W3HOZ/cvzj10z9IxClu78oUFbv2VT5+eq+kKhUWFpfKrJmy6tChuO2smrO9dcapsewOFahYDqH5uDWkUlC/woN2Ls7ccaEXlOOuff7NY967XlY/1YLdNSVRAOFAdR64Tzh22CV5qkTk/rk+JJgcS+MTzGmpx78VWWMXn/soK61VDYu6QEpDq59aQxgCKauWLO3iPOVHNMGJbd8IbysdPsasYlLAgLD344FHaFBif1dRLheB5lHBS8B4ErUTShLsvmhMWJDa2dv70ZWkM0MIyYU8Ka8qHLthHhsZnLv5LLSpHmMiHkHstIrA2BeVTVb/ycbWstsIgfOHvJsK67oMzYdHWYftP4Rljqq9bQxoDeBJx+eISwlr35YMn/zbeizzM30liVzIoQfmofCsEcRDGckTGMQiyTgmhCYgFgaU8GK+70NtWGIQNHy0JS+ZZk75gybLq69aQxoDawgoh93ICs9M4SkwhOeLyobMQjs8iudOihNcTXkvuaDAXRAXXnz4TVkWe1Wk9SxoDosL68KPzyXuU6cgRgbG0QwpJURUWl5mKRxbVYjoiDIUF1Axl/3X8QwTSGBAV1ikPvqUsogpqCQtSCf0ykyqK1sUl7kJYiXpWp488ksaA6Kjw/Zv3leIJOfOxt1rv9tcP1/RYDoqD/rTPstNm0g4ucRfCSswbslBA9XcrSGMAxbTyhZl86b13/rIVjRKTAzGdeN9+VoTw0v3rtHhy2FlCY5veCm4zbRoRVmLesNMEXhoFclnxCev3Lk7d+utSUI6TvvhrM1GdaHhuy1otmlzolGX2Xm17K1cYjQiLBF71nR0dHmT6VqE1EEe8d/6AOPKnbU++YSIWJSjAmzlROR76l+O0YOpC7rVsAuN62/ZWfhgEr9zgSPx0SmcjQ2kUyJ8WoQiaCoehsBDh+nuPnCSbSixNYHS1LAKLLY9pij8aTAgrMTLsbJe0NArkZgimbo654w3F2i37ZwkLLr73kKJYf64WySKQ4COyuvWvvmg7BELorcCb0nFsPO09pb6b0tl+Q2kUsFmifGEmTv/pF95YHHfP3tnCOnXTAUVx44eL4s4Go8M6EHIAwVmuSYM3AcSJCNoUKB5VCWMRNn6yLKqIsBKPOuL3sVV/L4w0RpB51geu3td6rVhNKxQWbL/+eLt2yDaOEsWYQJwIrqnQusirAK8vhBWKCoaoZUljBLnY75wz9rbCinktf1To2HDrEfabZRuHPEF16FipO2jAGyphLALeXoiKSKCElZiM9p+wzEPaeLYGNlY/sLSm8botaYzAtq7yxR26pw2HMa+FLRQWUzvcMENjmyeoDhw7OQLjGCWMRfCr7CERYSWKpKxyYBcVNS31OjR65KQ0RqACL+tZLhzitcIRIgXSUFhAOOSmbb61LOJSoTsmsC48lc2rvGJoSFDDAupYCWHlwk4rpYko0phAlh1YuYCwQI0QVTi8bv1hE2Fdfcok32LZx5jDIoXIVE7oBNZVTlUlKhCJO7QgLKjluaQxQfRpfGtu+hUrLOpa4aoHqvOhsNZu3L/48TVr7Y3bfAtx0XB0oOq4oeHalN2Hzif/4a8SR1NiOZWPt5EiJJFj1SX7wSLSmIBwKH8p/qyzJsKCsBpPeMQWiosk3t08hb1ZIxEax+S9uBZCtnrNEXY+A5NFRUY+FRn9lYjkV1DxPPg6ZJcnpLECimrlkx68h507dOIK5xCV16Km5bwWzIkLD0HHjEFgdnVmxGPhYSs737yXz+B+EAti475CsPO6LXya98jPihAJg8UVp1Q9snuC6T9G+B+59oDizI9Ef7oue0WENFbAsFSd1F6QE1Y41cO/Y6WHuYZgpDjXaFOB0eiqY/tAjV4RlFsOPDSJMAiJyrstciOoT3/594srv3HUDIQmj59ELaWLOaQxA5nEh14rDIl2CU0gLP7/3c+9f64h5j2Xh/vW8+32O7lL8CBcD385L3/HIiiHGA36xB4SwqDr77ccMieombAOje4RZeGn0sQc0pgBv9OiTlqcfeqbZsKCsLalQiLzh2Fj2M60Cb1oSHA5DJ6jS6GRW5lwMguH6lqGhDYyI+uw/XzCde/M8dLmSlCOoYQF0V/sciNEICTiqXxxUZIIxfXIjUeXGmTHaFE0aAhCI1wtKjZCLu/ncxDSJccXxT+cWD7fWDBfwLDdfPyFfqGgrt7+bosvKMdQoRCiDwpZ955ftIJy4goLpyrfovwQhkSwdS68hmrUHBAc3gbRxYh5I86NsD6zpvzaGEiMBB3UsAh5oYd64LsXFz8qXrS8+NPHi088e1hxwdO/U3z6hT+wkHupvjUoLZSQxhpEHxZyxid/dSYsQDy+16LWFYrr/DsPtpVi1UCVobEL8FQIC4Gp14eEtoiMBIHR9tP3nFBKyh0vF/8+ExZc+OSRtl8+9sQhth9Unxqyn68ljTWI/9hSkMjDmvvfXBKXvx4eXEVeYTu4NGrsCM6DqCA2mBiSSAj8n+v/3K7SvfZ5HeLgiu1HWi/le6zztr3d9gl/GSXKPp04EqWDEtJYk+jPw7mFgD5hMq/EtfHmo2SjOWYC69KDEf6csPoScy7BKNB5p9uf+mMpJAeCIuSxUx0BXfq1Yy1OVMACgUQY7KzyHoNZcnUhdvlyKK6weBqGRUoQKplXWG9Cx5OHtSW0DR+y+Z6D/8vjhmCaVzkx3f34n0QTcIcvKL/dJWZUr/rRwAqIrBEhSGMDokVT1O+PEoHE/rSHfmPuhkjoCZVNxOVjvRmjSR9sPsHr375tTfHIw5NvvN9JdAi4/xNeOOZLj50w2W3Us+Beuev0bDEBSTgJeY6gaP8Kb5UdBkEaGxL9ASaemRXmWzFx+eu3moorFzrp5mePlp0SI+xQ3o/Qvr3ZiFSIYREQEgLe9NXjStfpCz7kU18/IltQDkpC9vkaov8M/AZSrR090rgA0acq+0trfHGFYREQnMu7EFdVzlUXEtyqfKQpCAAh4AERBYJDIDx0dubh+GvADhzDsbzHiSjHI/ngnQh3fr6UC19o1tSpfptSy1uBNC5AfJRo8OcSfdQaLvIuv5DKaDFWiqgDYS81YgK8AR3FN98HW8pTNKXpZzoxUSII2y8X284b9089R7a2twJpXJDkj4ifdvl8fctB8s43J7xxvJdL7KmvqCJqLjFR0bGuQJjzjSfE0Jkcj+C6EFsMzreomBxu0JQoL0CjLWLS2ALxZ8Kb5NAtZQ6hQh9O/wCCI2QSFllq0yTvYhQV5il1ktsUTmh0eJtCc17TCWnR6/RxoqoIgY1/f0caW4LdHuWLZdRx8B52e74SF3lXagMsyT35F6Ex13sRQika+h2GoNQ52gLP57wawnCiU7jXORbaFlGIXWVi2nDthv1Sk83wDoPq20qksSWiq00tRlxhGcIH7xWOGh0IjNfwXiT2VbkXybpLhunILjtt7DjPf9K9+xbr3ht92h8stJlVGlsk/YsW5tsS81yO4zfuI0eODr59rCkiPMYE5rwVXkF9xq4Aoc+vEyYKocCunIWeBS+NLZNM5vFcsZzLBw9GiFQJvrM5gfnLnYHSwq4qKj8/daJKLD12LPwceGnsAJ53qW5ggsm7wtUQMcjByA9SYZL8hqfasHcRL0b4U8c68HrkbnyjSWj5i4jpEDWYWBb8EbWDdpZ9sAMK3aoPayGNHZEWl4Fhr9tVnYPzYrh51bCAyGI5lWp4Bd92zsPxqXONhdh92RFgfMoGWntIiDR2CL88pW5oBosEU0l9DESGp6FR58Ll9InNPmG+URfeizcbk8i4FjdiVtecIapWf1RAGjsmnXOBaQBWRdTxXj6ES4RGg4alC4Tn5xuLYoftU2+m8r8uQUyct+pLQlG6QlSM3rNXLuQgjT2AuJgqUDe5g8P3so3SVGDgC8vWb0TDtwkhCM9Bh7ft0ZyQ+PycEA42p0qLClidovqpMdLYE8w/yZ+rK2EEhgcLV0hUgefyvUhuZ7QJQsajIAbCJ8JA4IgEuD6Hs/E6x3G8P6hQnx+D82aM/oAvueqfhZDGnpE/Rh6Doh4io/5V5cl8b0WHqQ7YGaH4mVgC49OJqGC3d558hHyhZxgxVodGhfFmiI2G9KEA6CfueAHVCTsbTNMwAJJtNU9nogIrrJGIi9DIz8qqRqgNv/jqRAWEFNUROxM2SY/vB3TwBe5UVDAT1kjEBUx85uVeEVix6osKCIt/tOH1skOWnTV37Vc1ReNgqqazZ7v7zAlrROICBKZXSFTAI5VCYZHI/+4NP29zL9U5y4qtT+X92Dtt2flvQTtKwhqZuMA9dDW6EyhEhUFE5SDpV520TOClMhN0OM+g2rYzpLBAHTwCXmsgP+BpNzyrSSb8obAIgb6wYFnDIiM+RsUZuZSj098ljCFF5VBvGBlyZxBzjr6wDr/xF0rCgiNv2dMuy1EdODYQlC125oU94IvHsiXVbp0jBeWj3jQi9Hov823myXROWEpUDkQ35rwLQTHaY0Ai71XT+a/UVyHFFKLeOCL0rqCDpkn8lgOjHsuHgiuozh0Ccigb8vI9FDDqW3gtVRtIISnUm0dCunJ/6J42hLz7pj2loODYm35p1oEUWxlpdT2nqOCciNvumsnPoRzspult1JcCvZQElEJ9yAhI7mWcYTwYDynBCxBaAMHZ+o+apDVCY66tay/mxMS5aoY7B2WEwXKpEKeVOeHkoD5sBDBSVI2+GFPB0eGEVTwZIUoJpA5MuyBs65nqhTofisjU+lR7DIKvk7n/5KI+dAQgrmrP1QYmvDIfhwe0c5NGIAgPr+ODjdc4hmOtR6of4kJGJygINVIy5KI+fAQQFvUTnZcfnosxOkGB0oc05qJOMhJ4qnN2pX7E4IEZnHA/6j4HR+kCpLEO6mQjgm84T0phGK46zocHi3FsayssFoBr4PeamWlQ9zUKlB4c0lgXddIR8hoDncVOFEZShBb+Ur0Pl+YSUpkKaTQJ3gA8E483J0/k3P61jBKlAx9pbII6+U4CtSGKjlSzCa+pH43Mhc0LiJba02hKBbmo/g+Rxqaoi9hJYUcLXo6HveJl8HoIj1UEPgiH1ziGsMxaqEZPbxkLqt8V0rgI6mJW7Byo/o4hjYuiLmrFcqP6OYU0toG6uBXLierfKqSxLdRFrlguVL/mII1toi52xXKg+jMXaWwbddErxo3qxzpIYxeoi18xTlT/1UUau0LdxIpxofqtCdLYJepmVowD1V9NkcauUTe1YlhUPy2CNPaBurkVw6D6Z1GksU/Uja7oD9UnbSCNfaNueEX3qL5oC2kcAnXjK7pD9UGbSOOQqEZY0S6q3dtGGseAapAVi6PaugukcUyoxllRH9W23XHEbv8Pu5lXiZJyhfQAAAAASUVORK5CYII=";

// ../../../../tmp/pkreimer/src/img/berry/persimberry.png
var persimberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/rawstberry.png
var rawstberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/sitrusberry.png
var sitrusberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/wikiberry.png
var wikiberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/img/berry/yacheberry.png
var yacheberry_default = "data:image/png;base64,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";

// ../../../../tmp/pkreimer/src/data/berry.ts
var Berry = class {
  static list = [
    { name: "\u30AD\u30FC", energy: 28, type: "\u30CE\u30FC\u30DE\u30EB", img: persimberry_default, typeColor: "#c2c4c3", colorOrder: 1 },
    { name: "\u30D2\u30E1\u30EA", energy: 27, type: "\u307B\u306E\u304A", img: leppaberry_default, typeColor: "#fd8a51", colorOrder: 4 },
    { name: "\u30AA\u30EC\u30F3", energy: 31, type: "\u307F\u305A", img: oranberry_default, typeColor: "#4dbafd", colorOrder: 11 },
    { name: "\u30A6\u30D6", energy: 25, type: "\u3067\u3093\u304D", img: grepaberry_default, typeColor: "#fde222", colorOrder: 7 },
    { name: "\u30C9\u30EA", energy: 30, type: "\u304F\u3055", img: durinberry_default, typeColor: "#63df46", colorOrder: 9 },
    { name: "\u30C1\u30FC\u30B4", energy: 32, type: "\u3053\u304A\u308A", img: rawstberry_default, typeColor: "#5de2fd", colorOrder: 10 },
    { name: "\u30AF\u30E9\u30DC", energy: 27, type: "\u304B\u304F\u3068\u3046", img: cheriberry_default, typeColor: "#fdb024", colorOrder: 3 },
    { name: "\u30AB\u30B4", energy: 32, type: "\u3069\u304F", img: chestoberry_default, typeColor: "#ba6ff0", colorOrder: 15 },
    { name: "\u30D5\u30A3\u30E9", energy: 29, type: "\u3058\u3081\u3093", img: figyberry_default, typeColor: "#d9a35f", colorOrder: 5 },
    { name: "\u30B7\u30FC\u30E4", energy: 24, type: "\u3072\u3053\u3046", img: pamtreberry_default, typeColor: "#acdbfd", colorOrder: 13 },
    { name: "\u30DE\u30B4", energy: 26, type: "\u30A8\u30B9\u30D1\u30FC", img: magoberry_default, typeColor: "#fd819d", colorOrder: 2 },
    { name: "\u30E9\u30E0", energy: 24, type: "\u3080\u3057", img: lumberry_default, typeColor: "#c4c947", colorOrder: 8 },
    { name: "\u30AA\u30DC\u30F3", energy: 30, type: "\u3044\u308F", img: sitrusberry_default, typeColor: "#c7c49b", colorOrder: 6 },
    { name: "\u30D6\u30EA\u30FC", energy: 26, type: "\u30B4\u30FC\u30B9\u30C8", img: blukberry_default, typeColor: "#9f71a2", colorOrder: 16 },
    { name: "\u30E4\u30C1\u30A7", energy: 35, type: "\u30C9\u30E9\u30B4\u30F3", img: yacheberry_default, typeColor: "#7683f8", colorOrder: 12 },
    { name: "\u30A6\u30A4", energy: 31, type: "\u3042\u304F", img: wikiberry_default, typeColor: "#827878", colorOrder: 17 },
    { name: "\u30D9\u30EA\u30D6", energy: 33, type: "\u306F\u304C\u306D", img: belueberry_default, typeColor: "#88c8eb", colorOrder: 14 },
    { name: "\u30E2\u30E2\u30F3", energy: 26, type: "\u30D5\u30A7\u30A2\u30EA\u30FC", img: pechaberry_default, typeColor: "#fdc1fd", colorOrder: 0 }
  ];
  static map = this.list.reduce((a, x) => (a[x.name] = x, a), {});
  static typeList = [];
};
Berry.typeList = [
  "\u30CE\u30FC\u30DE\u30EB",
  "\u307B\u306E\u304A",
  "\u307F\u305A",
  "\u3067\u3093\u304D",
  "\u304F\u3055",
  "\u3053\u304A\u308A",
  "\u304B\u304F\u3068\u3046",
  "\u3069\u304F",
  "\u3058\u3081\u3093",
  "\u3072\u3053\u3046",
  "\u30A8\u30B9\u30D1\u30FC",
  "\u3080\u3057",
  "\u3044\u308F",
  "\u30B4\u30FC\u30B9\u30C8",
  "\u30C9\u30E9\u30B4\u30F3",
  "\u3042\u304F",
  "\u306F\u304C\u306D",
  "\u30D5\u30A7\u30A2\u30EA\u30FC"
].map((t) => Berry.list.find((x) => x.type == t));
var berry_default = Berry;

// ../../../../tmp/pkreimer/src/models/simulation/skills/skill-definition.ts
var SkillDefinition = class {
  name;
  effect;
  category;
  success;
  metronome;
  copyable;
  genki;
  selfHeal;
  isMetronomeSkill;
  plusMinusPair;
  specification;
  team;
  shard;
  energyOnly;
  skillSpecialtyOnly;
  foodList;
  evaluateEnergy;
  constructor({ specification: specification16, ...definition }) {
    Object.assign(this, { category: "etc", ...definition });
    Object.defineProperty(this, "specification", {
      value: specification16,
      writable: true,
      configurable: true,
      enumerable: false
    });
  }
};

// ../../../../tmp/pkreimer/src/models/simulation/skills/hadoudan-yume-no-kakera-get-skill.ts
function specification(effect) {
  return {
    inputs: [
      {
        key: "energy",
        label: "\u56FA\u5B9A\u30A8\u30CA\u30B8\u30FC",
        defaultValue: effect.energy,
        step: 0.1,
        unit: "\u30A8\u30CA\u30B8\u30FC",
        editable: false
      },
      {
        key: "shard",
        label: "\u3086\u3081\u306E\u304B\u3051\u3089",
        defaultValue: effect.shard,
        step: 0.1,
        unit: "\u304B\u3051\u3089",
        editable: false
      },
      { key: "skillPerDay", label: "1\u65E5\u306E\u767A\u52D5\u56DE\u6570", defaultValue: 8, step: 0.1, unit: "\u56DE" },
      { key: "weight", label: "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", defaultValue: 1, step: 0.1, unit: "\u500D" }
    ],
    modes: [3 /* SELECT */, 1 /* ABOUT */, 2 /* TEAM */].map(
      (id) => ({
        id,
        label: id === 3 /* SELECT */ ? "\u53B3\u9078\u8A08\u7B97\u6642" : id === 1 /* ABOUT */ ? "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642" : "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u3086\u3081\u306E\u304B\u3051\u3089 = \u3086\u3081\u306E\u304B\u3051\u3089 \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F\n\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u56FA\u5B9A\u30A8\u30CA\u30B8\u30FC\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u3086\u3081\u306E\u304B\u3051\u3089\u306F\u5B9F\u884C\u8005\u306E\u72B6\u614B\u3078\u8A18\u9332\u3057\u307E\u3059\u3002"
      })
    ),
    resultLabel: "\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values) => values.energy * values.weight
  };
}
var AuraSphereSkill = class {
  static skillDefinitions;
  evaluate({ effect, executor, weight }) {
    executor.shard += effect.shard * executor.skillPerDay * weight;
    return { energyPerSkill: effect.energy };
  }
};
AuraSphereSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u306F\u3069\u3046\u3060\u3093(\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S)",
    effect: [
      { shard: 240, energy: 200 },
      { shard: 340, energy: 285 },
      { shard: 480, energy: 393 },
      { shard: 670, energy: 542 },
      { shard: 920, energy: 748 },
      { shard: 1260, energy: 1033 },
      { shard: 1800, energy: 1501 },
      { shard: 2500, energy: 2042 }
    ],
    shard: true,
    category: "shard",
    specification: (level) => specification(AuraSphereSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions = AuraSphereSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/specification-helpers.ts
var modeList = [
  {
    id: 3 /* SELECT */,
    label: "\u53B3\u9078\u8A08\u7B97\u6642",
    formula: "",
    description: "\u53B3\u9078\u8A55\u4FA1\u7528\u306E\u4EE3\u8868\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  },
  {
    id: 1 /* ABOUT */,
    label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
    formula: "",
    description: "\u30DC\u30C3\u30AF\u30B9\u4E00\u89A7\u306E\u6982\u7B97\u8A55\u4FA1\u3067\u4F7F\u30461\u56DE\u3042\u305F\u308A\u306E\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  },
  {
    id: 2 /* TEAM */,
    label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
    formula: "",
    description: "\u7DE8\u6210\u4E2D\u306E\u5BFE\u8C61\u6570\u3092\u53CD\u6620\u3059\u308B1\u56DE\u3042\u305F\u308A\u306E\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  }
];
function specificationInput(key, label, defaultValue, unit) {
  return { key, label, defaultValue, step: 0.1, unit };
}
function specificationSelectInput(key, label, defaultValue, options) {
  return { key, label, defaultValue, type: "select", options };
}
function fixedSpecificationInput(key, label, defaultValue, unit) {
  return { ...specificationInput(key, label, defaultValue, unit), editable: false };
}
function specificationModes(formula, descriptions = {}) {
  return modeList.map((mode) => ({
    ...mode,
    formula,
    description: descriptions[mode.id] ?? mode.description
  }));
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/kinomi-burst-skill.ts
function berryBurstSpecification(effect) {
  const ruby = (value, unit, label) => `<ruby>${value}${unit}<rt>${label}</rt></ruby>`;
  const yamacheEnergy = ruby(berry_default.map["\u30E4\u30C1\u30A7"].energy, "\u30A8\u30CA\u30B8\u30FC", "\u30E4\u30C1\u30A7\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC");
  const selfBerryNum = ruby(effect.self, "\u500B", "\u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570");
  const otherBerryNum = ruby(effect.other, "\u500B", "\u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570");
  const otherCount = ruby(4, "\u5339", "\u30C1\u30FC\u30E0\u5185\u306E\u4ED6\u8005\u6570");
  const defaultExecutorBerry = berry_default.list.findIndex((berry) => berry.name === "\u30E4\u30C1\u30A7");
  const defaultExecutorBerryEnergy = Math.max(
    berry_default.list[defaultExecutorBerry].energy + 70 - 1,
    berry_default.list[defaultExecutorBerry].energy * 1.025 ** (70 - 1)
  );
  return {
    effectList: [
      { label: "\u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570", value: effect.self, unit: "\u500B" },
      { label: "\u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570", value: effect.other, unit: "\u500B" }
    ],
    inputs: [
      specificationSelectInput(
        "executorBerryIndex",
        "\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F",
        defaultExecutorBerry,
        berry_default.list.map((berry, index) => ({ label: berry.name, value: index }))
      ),
      {
        ...specificationInput("level", "\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB", 70, "Lv"),
        step: 1
      },
      fixedSpecificationInput(
        "otherBerryBaseEnergy",
        "\u30E4\u30C1\u30A7\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC",
        berry_default.map["\u30E4\u30C1\u30A7"].energy,
        "\u30A8\u30CA\u30B8\u30FC"
      ),
      fixedSpecificationInput("self", "\u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570", effect.self, "\u500B"),
      fixedSpecificationInput("other", "\u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570", effect.other, "\u500B"),
      {
        ...specificationInput(
          "otherBerryEnergySum",
          "\u4ED64\u5339\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC\u5408\u8A08",
          Math.round(defaultExecutorBerryEnergy * 4 * 1e3) / 1e3,
          "\u30A8\u30CA\u30B8\u30FC"
        ),
        step: 1,
        visibleModes: [2 /* TEAM */]
      },
      {
        ...specificationInput("eventRate", "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63", 1, "\u500D"),
        visibleModes: [1 /* ABOUT */, 2 /* TEAM */]
      },
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: "\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))\n\u4ED6\u8005\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(\u30E4\u30C1\u30A7\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), \u30E4\u30C1\u30A7\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))\n\u8A55\u4FA1 = \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 \u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570 + \u4ED6\u8005\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 \u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570 \xD7 \u30C1\u30FC\u30E0\u5185\u306E\u4ED6\u8005\u6570\n\u6700\u7D42\u8A55\u4FA1 = \u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        formulaHtml: `\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))
\u4ED6\u8005\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(${yamacheEnergy} + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), ${yamacheEnergy} \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))
\u8A55\u4FA1 = \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 ${selfBerryNum} + \u4ED6\u8005\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 ${otherBerryNum} \xD7 ${otherCount}
\u6700\u7D42\u8A55\u4FA1 = \u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "\u4ED6\u80054\u5339\u306F\u30E4\u30C1\u30A7\u306E\u307F\u3092\u57FA\u6E96\u306B\u8A55\u4FA1\u3057\u307E\u3059\u3002\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63\u306F\u9069\u7528\u3057\u307E\u305B\u3093\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: "\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))\n\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 \u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570 \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63\n\u4ED6\u8005\u3078\u306E\u52B9\u679C\u91CF = \u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570 \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63\n\u4ED6\u8005\u5206\u306E\u8A55\u4FA1 = \u5B9F\u884C\u8005\u4EE5\u5916\u306E\u4E0A\u4F4D4\u5339\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC\u5408\u8A08 \xD7 \u4ED6\u8005\u3078\u306E\u52B9\u679C\u91CF \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F + \u4ED6\u8005\u5206\u306E\u8A55\u4FA1",
        formulaHtml: `\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))
\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 ${selfBerryNum} \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63
\u4ED6\u8005\u3078\u306E\u52B9\u679C\u91CF = ${otherBerryNum} \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63
\u4ED6\u8005\u5206\u306E\u8A55\u4FA1 = \u5B9F\u884C\u8005\u4EE5\u5916\u306E\u4E0A\u4F4D4\u5339\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC\u5408\u8A08 \xD7 \u4ED6\u8005\u3078\u306E\u52B9\u679C\u91CF \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F
\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F + \u4ED6\u8005\u5206\u306E\u8A55\u4FA1`,
        description: "\u4ED6\u8005\u5206\u306F\u3001\u4ED6\u306E\u30DD\u30B1\u30E2\u30F3\u3078\u306E\u52B9\u679C\u3068\u3057\u3066\u5225\u9014\u4FDD\u6301\u3057\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))\n\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = (\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 \u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570 + \u03A3(\u4ED64\u5339\u305D\u308C\u305E\u308C\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 \u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570)) \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        formulaHtml: `\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1), \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB \u2212 1))
\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = (\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 ${selfBerryNum} + \u03A3(\u4ED64\u5339\u305D\u308C\u305E\u308C\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 ${otherBerryNum})) \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63
\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "\u5B9F\u884C\u8005\u5206\u3068\u3001\u4ED64\u5339\u305D\u308C\u305E\u308C\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC\u306B\u4ED6\u8005\u7528\u306E\u500B\u6570\u3092\u639B\u3051\u305F\u5024\u3092\u5408\u7B97\u3057\u307E\u3059\u3002"
      }
    ],
    resultLabel: "\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => {
      const executorBerryBaseEnergy = berry_default.list[values.executorBerryIndex].energy;
      const executorBerryEnergy = Math.max(
        executorBerryBaseEnergy + values.level - 1,
        executorBerryBaseEnergy * 1.025 ** (values.level - 1)
      );
      const other = Math.max(
        values.otherBerryBaseEnergy + values.level - 1,
        values.otherBerryBaseEnergy * 1.025 ** (values.level - 1)
      );
      const result = mode === 3 /* SELECT */ ? executorBerryEnergy * effect.self + other * effect.other * 4 : mode === 1 /* ABOUT */ ? executorBerryEnergy * effect.self * values.eventRate : (executorBerryEnergy * effect.self + values.otherBerryEnergySum * effect.other) * values.eventRate;
      return result * values.weight;
    }
  };
}
function disguiseBerryBurstSpecification(skill, effect) {
  const specification16 = berryBurstSpecification(effect);
  const disguiseFormula = "\u5927\u6210\u529F\u767A\u751F\u7387 = 1 \u2212 (1 \u2212 \u5927\u6210\u529F\u78BA\u7387)^1\u65E5\u306E\u30B9\u30AD\u30EB\u767A\u52D5\u56DE\u6570\n\u3070\u3051\u306E\u304B\u308F\u88DC\u6B63 = (\u5927\u6210\u529F\u767A\u751F\u7387 \xD7 (1\u65E5\u306E\u30B9\u30AD\u30EB\u767A\u52D5\u56DE\u6570 + 2) + (1 \u2212 \u5927\u6210\u529F\u767A\u751F\u7387) \xD7 1\u65E5\u306E\u30B9\u30AD\u30EB\u767A\u52D5\u56DE\u6570) \xF7 1\u65E5\u306E\u30B9\u30AD\u30EB\u767A\u52D5\u56DE\u6570";
  const addDisguiseFormula = (formula) => formula.replace("\n\u6700\u7D42\u8A55\u4FA1 = ", `
${disguiseFormula}
\u6700\u7D42\u8A55\u4FA1 = \u3070\u3051\u306E\u304B\u308F\u88DC\u6B63 \xD7 (`) + ")";
  return {
    ...specification16,
    inputs: [
      ...specification16.inputs,
      specificationInput("skillPerDay", "1\u65E5\u306E\u30B9\u30AD\u30EB\u767A\u52D5\u56DE\u6570", 8, "\u56DE"),
      specificationInput("successRate", "\u5927\u6210\u529F\u78BA\u7387", skill.success ?? 0)
    ],
    modes: specification16.modes.map((mode) => ({
      ...mode,
      formula: addDisguiseFormula(mode.formula),
      formulaHtml: mode.formulaHtml ? addDisguiseFormula(mode.formulaHtml) : void 0,
      description: `${mode.description} \u5927\u6210\u529F\u306B\u3088\u308B\u8FFD\u52A02\u56DE\u5206\u306F\u3001\u3070\u3051\u306E\u304B\u308F\u88DC\u6B63\u3068\u3057\u3066\u6700\u7D42\u8A55\u4FA1\u3078\u53CD\u6620\u3057\u307E\u3059\u3002`
    })),
    calculate: (values, mode) => {
      const result = specification16.calculate(values, mode);
      const additionalRate = 1 - (1 - values.successRate) ** values.skillPerDay;
      const disguiseRate = (additionalRate * (values.skillPerDay + 2) + (1 - additionalRate) * values.skillPerDay) / values.skillPerDay;
      return result * disguiseRate;
    }
  };
}
var BaseBerryBurstSkill = class {
  evaluate(context) {
    const { config, effect, executor, mode, pokemonList, weight } = context;
    let energyPerSkill = 0;
    if (mode == 1 /* ABOUT */) {
      energyPerSkill = executor.berryEnergy * effect.self * config.simulation.eventBonus.skill.berryBurst;
      executor.burstBonus = effect.other * weight * config.simulation.eventBonus.skill.berryBurst;
    } else if (mode == 2 /* TEAM */) {
      for (const subPokemon of pokemonList) {
        energyPerSkill += subPokemon.berryEnergy * (executor == subPokemon ? effect.self : effect.other) * config.simulation.eventBonus.skill.berryBurst;
      }
    } else {
      energyPerSkill = executor.berryEnergy * effect.self + Math.max(
        berry_default.map["\u30E4\u30C1\u30A7"].energy + executor.lv - 1,
        berry_default.map["\u30E4\u30C1\u30A7"].energy * 1.025 ** (executor.lv - 1)
      ) * effect.other * 4;
    }
    return { energyPerSkill: this.applyBonus(context, energyPerSkill) };
  }
};
var BerryBurstSkill = class extends BaseBerryBurstSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8",
      effect: [
        { self: 11, other: 1 },
        { self: 14, other: 2 },
        { self: 21, other: 2 },
        { self: 24, other: 3 },
        { self: 27, other: 4 },
        { self: 30, other: 5 }
      ],
      team: true,
      energyOnly: true,
      category: "energy"
    })
  ];
  applyBonus(_context, energyPerSkill) {
    return energyPerSkill;
  }
};
var DisguiseBerryBurstSkill = class extends BaseBerryBurstSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3070\u3051\u306E\u304B\u308F(\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8)",
      effect: [
        { self: 8, other: 1 },
        { self: 10, other: 2 },
        { self: 15, other: 2 },
        { self: 17, other: 3 },
        { self: 19, other: 4 },
        { self: 21, other: 5 }
      ],
      team: true,
      success: 0.2,
      energyOnly: true,
      category: "energy"
    })
  ];
  applyBonus({ copy, executor, fromMetronome, skill }, energyPerSkill) {
    if (copy || fromMetronome) return energyPerSkill;
    const success = 1 - (1 - skill.success) ** executor.skillPerDay;
    return energyPerSkill * ((success * (executor.skillPerDay + 2) + (1 - success) * executor.skillPerDay) / executor.skillPerDay);
  }
};
var skillDefinitions2 = [
  ...BerryBurstSkill.skillDefinitions,
  ...DisguiseBerryBurstSkill.skillDefinitions
];
for (const definition of BerryBurstSkill.skillDefinitions) {
  definition.specification = (level) => berryBurstSpecification(definition.effect[level]);
}
for (const definition of DisguiseBerryBurstSkill.skillDefinitions) {
  definition.specification = (level) => disguiseBerryBurstSpecification(
    definition,
    definition.effect[level]
  );
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/food-specification.ts
var modeList2 = [
  {
    id: 3 /* SELECT */,
    label: "\u53B3\u9078\u8A08\u7B97\u6642",
    formula: "",
    description: "\u53B3\u9078\u8A55\u4FA1\u7528\u306E\u4EE3\u8868\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  },
  {
    id: 1 /* ABOUT */,
    label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
    formula: "",
    description: "\u30DC\u30C3\u30AF\u30B9\u4E00\u89A7\u306E\u6982\u7B97\u8A55\u4FA1\u3067\u4F7F\u30461\u56DE\u3042\u305F\u308A\u306E\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  },
  {
    id: 2 /* TEAM */,
    label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
    formula: "",
    description: "\u7DE8\u6210\u4E2D\u306E\u5BFE\u8C61\u6570\u3092\u53CD\u6620\u3059\u308B1\u56DE\u3042\u305F\u308A\u306E\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  }
];
function input(key, label, defaultValue, unit) {
  return { key, label, defaultValue, step: 0.1, unit };
}
function fixedInput(key, label, defaultValue, unit) {
  return { ...input(key, label, defaultValue, unit), editable: false };
}
function allFoodEvaluation(foodGetRate) {
  return Food.list.reduce(
    (total, food) => total + food.energy * ((food.bestRate * Cooking.maxRecipeBonus - 1) * (foodGetRate / 100) + 1),
    0
  );
}
function foodHandlerSpecification(effect, kind, shard = 0) {
  const isPlus = kind === "plus";
  const isPresent = kind === "present";
  const isBuildUp = kind === "buildUp";
  const isAllFood = kind === "allFood";
  const foodCountLabel = isAllFood ? "\u5BFE\u8C61\u98DF\u6750\u6570\uFF08\u5168\u98DF\u6750\uFF09" : "\u5BFE\u8C61\u98DF\u6750\u6570";
  const selectFoodFormula = isAllFood ? `\u98DF\u6750\u5E73\u5747\u30A8\u30CA\u30B8\u30FC = \u03A3(\u5404\u98DF\u6750\u306E\u8A55\u4FA1) \xF7 ${foodCountLabel}
\u98DF\u6750\u7372\u5F97\u5F8C\u306E\u8A55\u4FA1 = \u98DF\u6750\u5E73\u5747\u30A8\u30CA\u30B8\u30FC \xD7 \u98DF\u6750\u7372\u5F97\u6570` : `\u98DF\u6750\u7372\u5F97\u5F8C\u306E\u8A55\u4FA1 = \u5BFE\u8C61\u98DF\u6750\u306E\u8A55\u4FA1\u5024\u5408\u8A08 \xF7 ${foodCountLabel} \xD7 \u98DF\u6750\u7372\u5F97\u6570`;
  const selectResultFormula = isAllFood ? "\u6700\u7D42\u8A55\u4FA1 = (\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 + \u98DF\u6750\u7372\u5F97\u5F8C\u306E\u8A55\u4FA1) \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F" : "\u6700\u7D42\u8A55\u4FA1 = (\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 + \u98DF\u6750\u7372\u5F97\u5F8C\u306E\u8A55\u4FA1) \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F";
  const extraInputs = isPlus ? [
    fixedInput("subEffect", "\u8FFD\u52A0\u52B9\u679C\u91CF", 0, "\u30A8\u30CA\u30B8\u30FC"),
    input("firstFoodEnergy", "\u7B2C1\u98DF\u6750\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC", 100, "\u30A8\u30CA\u30B8\u30FC"),
    input("firstFoodBestRate", "\u7B2C1\u98DF\u6750\u306E\u6700\u826F\u6599\u7406\u500D\u7387", 1, "\u500D"),
    input("candyEnergy", "\u30A2\u30E11\u500B\u306E\u30A8\u30CA\u30B8\u30FC", 1, "\u30A8\u30CA\u30B8\u30FC")
  ] : isPresent ? [input("candyEnergy", "\u30A2\u30E11\u500B\u306E\u30A8\u30CA\u30B8\u30FC", 1, "\u30A8\u30CA\u30B8\u30FC")] : [];
  const foodDescription = isBuildUp ? "\u3055\u3089\u306B\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u52B9\u679C\u91CF\u3092\u8FD4\u3057\u3001\u4E0B\u8A18\u306E\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u5171\u901A\u5F8C\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" : isPlus ? "\u98DF\u6750\u7372\u5F97\u6570\u3068\u5168\u98DF\u6750\u3092\u8FD4\u3057\u305F\u5F8C\u306B\u3001\u4E0B\u8A18\u306E\u98DF\u6750\u30B2\u30C3\u30C8\u5171\u901A\u5F8C\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002" : isAllFood ? `\u98DF\u6750\u7372\u5F97\u6570\u3068\u5168\u98DF\u6750\uFF08${Food.list.length}\u7A2E\u985E\uFF09\u3092\u8FD4\u3057\u305F\u5F8C\u306B\u3001\u4E0B\u8A18\u306E\u98DF\u6750\u30B2\u30C3\u30C8\u5171\u901A\u5F8C\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002` : "\u98DF\u6750\u7372\u5F97\u6570\u3068\u5BFE\u8C61\u98DF\u6750\u3092\u8FD4\u3057\u305F\u5F8C\u306B\u3001\u4E0B\u8A18\u306E\u98DF\u6750\u30B2\u30C3\u30C8\u5171\u901A\u5F8C\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002";
  return {
    inputs: [
      {
        ...fixedInput("foodGet", "\u98DF\u6750\u7372\u5F97\u6570", effect, "\u500B"),
        labelByMode: isAllFood ? { [3 /* SELECT */]: "\u98DF\u6750\u7372\u5F97\u6570" } : void 0
      },
      isAllFood ? fixedInput("foodCount", foodCountLabel, Food.list.length, "\u7A2E\u985E") : input("foodCount", foodCountLabel, kind === "select" ? 3 : 17, "\u7A2E\u985E"),
      {
        ...input("foodEnergy", "\u5BFE\u8C61\u98DF\u6750\u306E\u8A55\u4FA1\u5024\u5408\u8A08", 360, "\u30A8\u30CA\u30B8\u30FC"),
        labelByMode: isAllFood ? { [3 /* SELECT */]: "\u98DF\u6750\u5E73\u5747\u30A8\u30CA\u30B8\u30FC" } : void 0,
        fixedValue: (_values, mode) => isAllFood && mode === 3 /* SELECT */ ? allFoodEvaluation(_values.foodGetRate) / Food.list.length : null
      },
      ...isAllFood ? [
        {
          ...input("foodGetRate", "\u98DF\u6750\u30B2\u30C3\u30C8\u8A55\u4FA1\u7387", 50, "%"),
          visibleModes: [3 /* SELECT */]
        }
      ] : [],
      {
        ...input("eventRate", "\u98DF\u6750\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63", 1, "\u500D"),
        visibleModes: [1 /* ABOUT */, 2 /* TEAM */]
      },
      {
        ...input("foodGetEvaluateRate", "\u98DF\u6750\u30B2\u30C3\u30C8\u8A55\u4FA1\u7387", 1, "\u500D"),
        visibleModes: [1 /* ABOUT */, 2 /* TEAM */]
      },
      {
        ...input("foodEnergyWeight", "\u98DF\u6750\u8A55\u4FA1\u500D\u7387", 1, "\u500D"),
        visibleModes: [1 /* ABOUT */, 2 /* TEAM */]
      },
      {
        ...input("evaluationType", "\u98DF\u6750\u30B2\u30C3\u30C8\u8A55\u4FA1\u65B9\u5F0F", 2, "\uFF081: \u500B\u6570\uFF09"),
        visibleModes: [1 /* ABOUT */, 2 /* TEAM */]
      },
      input("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D"),
      ...extraInputs
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: `${isPlus ? "\u8FFD\u52A0\u98DF\u6750\u6570 = round(\u8FFD\u52A0\u52B9\u679C\u91CF \xF7 \u7B2C1\u98DF\u6750\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC) + 6\n\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u7B2C1\u98DF\u6750\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 \u7B2C1\u98DF\u6750\u306E\u6700\u826F\u6599\u7406\u500D\u7387 \xD7 \u6700\u5927\u30EC\u30B7\u30D4Lv\u30DC\u30FC\u30CA\u30B9 \xD7 \u8FFD\u52A0\u98DF\u6750\u6570\n" : isPresent ? "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30A2\u30E11\u500B\u306E\u30A8\u30CA\u30B8\u30FC \xD7 4\n" : "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\n"}\u5404\u98DF\u6750\u306E\u8A55\u4FA1 = \u98DF\u6750\u30A8\u30CA\u30B8\u30FC \xD7 ((\u6700\u826F\u6599\u7406\u500D\u7387 \xD7 \u6700\u5927\u30EC\u30B7\u30D4Lv\u30DC\u30FC\u30CA\u30B9 \u2212 1) \xD7 \u98DF\u6750\u30B2\u30C3\u30C8\u8A55\u4FA1\u7387 \xF7 100 + 1)
${selectFoodFormula}
${selectResultFormula}`,
        description: foodDescription
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: `${isPlus ? "\u98DF\u6750\u8A55\u4FA1\u500D\u7387\u304C0\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u3001\u8FFD\u52A0\u98DF\u6750\u6570 = round(\u8FFD\u52A0\u52B9\u679C\u91CF \xF7 \u7B2C1\u98DF\u6750\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC) + 6\u3002\u7B2C1\u98DF\u6750\u3092\u8FFD\u52A0\u98DF\u6750\u6570 \xD7 \u767A\u52D5\u56DE\u6570 \xD7 \u91CD\u307F\u8A18\u9332\u3057\u3001\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u7B2C1\u98DF\u6750\u306E\u6700\u5927\u8A55\u4FA1\u5024 \xD7 \u8FFD\u52A0\u98DF\u6750\u6570 \xD7 \u98DF\u6750\u8A55\u4FA1\u500D\u7387\n" : "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\n"}1\u98DF\u6750\u3042\u305F\u308A\u306E\u500B\u6570 = \u98DF\u6750\u7372\u5F97\u6570 \xD7 \u98DF\u6750\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63 \xF7 ${foodCountLabel} \xD7 \u98DF\u6750\u30B2\u30C3\u30C8\u8A55\u4FA1\u7387
\u8A55\u4FA1\u65B9\u5F0F\u304C\u500B\u6570\u306A\u3089\u500B\u6570\u3092\u8A18\u9332\u3001\u305D\u308C\u4EE5\u5916\u306F\u5BFE\u8C61\u98DF\u6750\u306E\u6700\u5927\u8A55\u4FA1\u5024\u5408\u8A08 \xD7 \u98DF\u6750\u8A55\u4FA1\u500D\u7387 \xD7 1\u98DF\u6750\u3042\u305F\u308A\u306E\u500B\u6570\u3092\u52A0\u7B97
${shard ? "\u304D\u3087\u3046\u3046\u3093: \u3086\u3081\u306E\u304B\u3051\u3089 += \u3086\u3081\u306E\u304B\u3051\u3089\u52B9\u679C\u91CF \xD7 \u767A\u52D5\u56DE\u6570 \xD7 \u91CD\u307F\n" : ""}\u6700\u7D42\u8A55\u4FA1 = (\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 + \u98DF\u6750\u7372\u5F97\u5F8C\u306E\u8A55\u4FA1) \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: foodDescription
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: `${isPlus ? "\u30D7\u30E9\u30B9\u307E\u305F\u306F\u30DE\u30A4\u30CA\u30B9\u304C2\u5339\u4EE5\u4E0A\u306A\u3089\u3001\u8FFD\u52A0\u98DF\u6750\u6570 = round(\u8FFD\u52A0\u52B9\u679C\u91CF \xF7 \u7B2C1\u98DF\u6750\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC) + 6 \u3092\u7B2C1\u98DF\u6750\u3078\u8FFD\u52A0\u98DF\u6750\u6570 \xD7 \u767A\u52D5\u56DE\u6570 \xD7 \u91CD\u307F\u8A18\u9332\u3059\u308B\u3002\u6E80\u305F\u3055\u306A\u3044\u5834\u5408\u306F\u8A18\u9332\u3057\u306A\u3044\u3002\n" : "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\n"}\u65E5\u66DC\u6E96\u5099\u3067\u306A\u3051\u308C\u3070\u30011\u98DF\u6750\u3042\u305F\u308A\u306E\u500B\u6570 = \u98DF\u6750\u7372\u5F97\u6570 \xD7 \u98DF\u6750\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63 \xF7 ${foodCountLabel} \xD7 \u98DF\u6750\u30B2\u30C3\u30C8\u8A55\u4FA1\u7387
\u8A55\u4FA1\u65B9\u5F0F\u304C\u500B\u6570\u306A\u3089\u500B\u6570\u3092\u8A18\u9332\u3001\u305D\u308C\u4EE5\u5916\u306F\u5BFE\u8C61\u98DF\u6750\u306E\u6700\u5927\u8A55\u4FA1\u5024\u5408\u8A08 \xD7 \u98DF\u6750\u8A55\u4FA1\u500D\u7387 \xD7 1\u98DF\u6750\u3042\u305F\u308A\u306E\u500B\u6570\u3092\u52A0\u7B97
${shard ? "\u304D\u3087\u3046\u3046\u3093: \u3086\u3081\u306E\u304B\u3051\u3089 += \u3086\u3081\u306E\u304B\u3051\u3089\u52B9\u679C\u91CF \xD7 \u767A\u52D5\u56DE\u6570 \xD7 \u91CD\u307F\n" : ""}\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 + \u98DF\u6750\u7372\u5F97\u5F8C\u306E\u8A55\u4FA1`,
        description: foodDescription
      }
    ],
    resultLabel: "\u98DF\u6750\u3092\u542B\u3080\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => {
      let handlerEnergy = 0;
      if (isPlus) {
        const num = Math.round(values.subEffect / values.firstFoodEnergy) + 6;
        if (mode === 3 /* SELECT */)
          handlerEnergy = values.firstFoodEnergy * values.firstFoodBestRate * Cooking.maxRecipeBonus * num;
        else if (mode === 1 /* ABOUT */ && values.foodEnergyWeight > 0)
          handlerEnergy = values.foodEnergy * num * values.foodEnergyWeight;
      } else if (isPresent && mode === 3 /* SELECT */) {
        handlerEnergy = values.candyEnergy * 4;
      }
      if (mode === 2 /* TEAM */ && values.evaluationType === 1) return handlerEnergy;
      const foodEnergy = mode === 3 /* SELECT */ ? (isAllFood ? values.foodEnergy : values.foodEnergy / values.foodCount) * values.foodGet : values.foodEnergy * values.foodEnergyWeight * values.foodGet * values.eventRate * values.foodGetEvaluateRate / values.foodCount;
      return (handlerEnergy + foodEnergy) * values.weight;
    }
  };
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/build-up-skill.ts
var BuildUpSkill = class {
  static skillDefinitions;
  evaluate({ effect }) {
    return {
      energyPerSkill: 0,
      foodGet: effect.main,
      foodGetList: Food.list,
      cookingChance: effect.sub
    };
  }
};
BuildUpSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u30D3\u30EB\u30C9\u30A2\u30C3\u30D7(\u6599\u7406\u30A2\u30B7\u30B9\u30C8S)",
    effect: [
      { main: 6, sub: 1 },
      { main: 8, sub: 2 },
      { main: 11, sub: 2 },
      { main: 14, sub: 3 },
      { main: 17, sub: 3 },
      { main: 21, sub: 4 },
      { main: 24, sub: 5 }
    ],
    category: "food",
    specification: (level) => {
      const effect = BuildUpSkill.skillDefinitions[0].effect[level];
      const result = foodHandlerSpecification(effect.main, "buildUp");
      result.modes = result.modes.map((mode) => ({
        ...mode,
        formula: `${mode.formula}
\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u52B9\u679C\u91CF = ${effect.sub}%\u3002\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u5171\u901A\u5F8C\u51E6\u7406\u3082\u5B9F\u884C\u3059\u308B\u3002`
      }));
      return result;
    }
  })
];
var skillDefinitions3 = BuildUpSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/hoppe-surisuri-skill.ts
function specification2(evaluateEnergy) {
  const configuredFormula = "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u8A55\u4FA1\u306E\u8A2D\u5B9A\u5024\u304C\u3042\u308C\u3070\u305D\u306E\u5024\u3001\u306A\u3051\u308C\u3070\u3053\u306E\u30B9\u30AD\u30EB\u306B\u767B\u9332\u3055\u308C\u305F\u8A55\u4FA1\u5024\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F";
  return {
    inputs: [
      specificationInput(
        "configuredEnergy",
        "\u53B3\u9078\u30FB\u30DC\u30C3\u30AF\u30B9\u7528\u306E\u8A2D\u5B9A\u5024",
        evaluateEnergy,
        "\u30A8\u30CA\u30B8\u30FC"
      ),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: configuredFormula,
        description: "\u767B\u9332\u3055\u308C\u305F\u8A55\u4FA1\u5024\u306F\u3001\u518D\u767A\u52D5\u306E\u78BA\u7387\u3092\u7528\u3044\u3066\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M\u6700\u5927\u5024\u304B\u3089\u521D\u671F\u5316\u3055\u308C\u3066\u3044\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: configuredFormula,
        description: "\u53B3\u9078\u8A08\u7B97\u6642\u3068\u540C\u3058\u5206\u5C90\u3067\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\n\u8FFD\u52A0\u767A\u52D5\u306E\u671F\u5F85\u56DE\u6570\u306F\u3001\u5BFE\u8C61\u9078\u629E\u30FB\u518D\u767A\u52D5\u78BA\u7387\u3092\u4F7F\u3063\u3066\u6700\u592710\u56DE\u53CD\u5FA9\u3057\u3001\u5BFE\u8C61\u30B9\u30AD\u30EB\u5074\u3078\u52A0\u7B97\u3057\u307E\u3059\u3002",
        description: "\u3053\u306E\u30CF\u30F3\u30C9\u30E9\u306F\u30C1\u30FC\u30E0\u8A08\u7B97\u306E\u8FFD\u52A0\u767A\u52D5\u3092\u76F4\u63A5\u8A55\u4FA1\u3057\u307E\u305B\u3093\u3002"
      }
    ],
    resultLabel: "\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => mode === 2 /* TEAM */ ? 0 : values.configuredEnergy * values.weight
  };
}
var CheekRubSkill = class {
  static skillDefinitions;
  evaluate({ config, mode, skill, skillLv }) {
    return {
      energyPerSkill: mode == 2 /* TEAM */ ? 0 : config.selectEvaluate.skillEnergy[skill.name][skillLv] ?? skill.evaluateEnergy[skillLv]
    };
  }
};
CheekRubSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u307B\u3063\u307A\u3059\u308A\u3059\u308A(\u3052\u3093\u304D\u30A8\u30FC\u30EBS)",
    effect: [9, 12, 16, 20, 27, 35].map((x) => ({ other: x / 5 })),
    team: true,
    genki: true,
    category: "heal",
    specification: (level) => specification2(CheekRubSkill.skillDefinitions[0].evaluateEnergy?.[level] ?? 0)
  })
];
var skillDefinitions4 = CheekRubSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/ryouri-chance-skill.ts
var weekEffectFormula = "\u9031\u306E\u6599\u7406\u56DE\u6570 = 21\u56DE\uFF08\u5E73\u65E518\u56DE\u3001\u65E5\u66DC3\u56DE\uFF09\n\u9031\u52B9\u679C\u91CF\u304C0\u306E\u5834\u5408\u3001\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 = 18 \xD7 (1 + 0.1) + 3 \xD7 (1 + 0.3 \xD7 2) = 24.6\n\u9031\u52B9\u679C\u91CF\u304C0\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u30011\u56DE\u3042\u305F\u308A\u306E\u4E0A\u6607\u91CF p = min(\u9031\u52B9\u679C\u91CF \xF7 21, 0.7)\nr\u2080 = 1\ni\u56DE\u76EE\uFF08i = 1 \u2026 21\uFF09\u306E\u57FA\u790E\u6210\u529F\u7387 q\u1D62 = i \u2264 18 \u306A\u30890.1\u3001\u305D\u308C\u4EE5\u5916\u306F0.3\ni\u56DE\u76EE\u306E\u6210\u529F\u6642\u306E\u8FFD\u52A0\u500D\u7387 b\u1D62 = i \u2264 18 \u306A\u30891\u3001\u305D\u308C\u4EE5\u5916\u306F2\nr\u1D62 = \u03A3[j = 1 \u2026 i] {(q\u1D62 + min(p \xD7 j, 0.7)) \xD7 r\u1D62\u208B\u2C7C \xD7 \u03A0[k = i \u2212 j + 1 \u2026 i \u2212 1] (1 \u2212 r\u2096)}\n\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 = \u03A3[i = 1 \u2026 21] (1 + b\u1D62 \xD7 r\u1D62)\n\uFF08\u7A7A\u306E\u7A4D \u03A0 \u306F1\u3068\u3059\u308B\uFF09";
var defaultCookingEnergyFormula = "\u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC\u306E\u65E2\u5B9A\u5024 = max(\u5168\u6599\u7406\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC) \xD7 \u6700\u5927\u30EC\u30B7\u30D4Lv\u30DC\u30FC\u30CA\u30B9";
function specification3(effect) {
  return {
    inputs: [
      fixedSpecificationInput("effect", "\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u52B9\u679C\u91CF", effect, "%"),
      specificationInput("skillPerDay", "1\u65E5\u306E\u767A\u52D5\u56DE\u6570", 8, "\u56DE"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D"),
      specificationInput("cookingEnergy", "\u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC", Cooking.maxEnergy, "\u30A8\u30CA\u30B8\u30FC"),
      specificationInput("cookingWeight", "\u6599\u7406\u8A55\u4FA1\u500D\u7387", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: `${defaultCookingEnergyFormula}
\u9031\u52B9\u679C\u91CF = \u52B9\u679C\u91CF \xF7 100 \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F \xD7 7
${weekEffectFormula}
\u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024 = (\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 \u2212 24.6) \xF7 7 \xD7 \u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC \xF7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xF7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F
\u6700\u7D42\u8A55\u4FA1 = \u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "\u9031\u306E\u6599\u7406\u671F\u5F85\u5024\u306E\u901A\u5E38\u6642\u304B\u3089\u306E\u5897\u5206\u3092\u30011\u65E5\u30FB1\u767A\u52D5\u3042\u305F\u308A\u3078\u63DB\u7B97\u3057\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: `${defaultCookingEnergyFormula}
\u9031\u52B9\u679C\u91CF = \u52B9\u679C\u91CF \xF7 100 \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F \xD7 7
${weekEffectFormula}
\u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024 = (\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 \u2212 24.6) \xF7 7 \xD7 \u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC \xF7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6599\u7406\u8A55\u4FA1\u500D\u7387 \xF7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F
\u6700\u7D42\u8A55\u4FA1 = \u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "\u65E5\u66DC\u6E96\u5099\u6642\u306F\u6982\u7B97\u8A55\u4FA1\u3092\u884C\u3044\u307E\u305B\u3093\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u84C4\u7A4D\u5024 = \u52B9\u679C\u91CF \xF7 100 \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u6599\u7406\u51E6\u7406\u7528\u306E\u72B6\u614B\u3092\u84C4\u7A4D\u3057\u3001\u30B9\u30AD\u30EB\u5358\u4F53\u306E\u8A55\u4FA1\u306F0\u3067\u3059\u3002"
      }
    ],
    resultLabel: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => {
      if (mode === 2 /* TEAM */) return 0;
      if (mode === 1 /* ABOUT */ && !values.skillPerDay) return 0;
      const totalEffect = values.effect / 100 * values.skillPerDay * values.weight * 7;
      const weeklyIncrease = (Cooking.getChanceWeekEffect(totalEffect).total - 24.6) / 7;
      return weeklyIncrease * values.cookingEnergy * (mode === 1 /* ABOUT */ ? values.cookingWeight : 1) / values.skillPerDay;
    }
  };
}
var CookingChanceSkill = class {
  static skillDefinitions;
  evaluate({ effect }) {
    return { energyPerSkill: 0, cookingChance: effect };
  }
};
CookingChanceSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S",
    effect: [4, 5, 6, 7, 8, 10],
    category: "cooking",
    specification: (level) => specification3(CookingChanceSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions5 = CookingChanceSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/ryouri-power-up-skill.ts
function specification4(effect) {
  return {
    inputs: [
      fixedSpecificationInput("effect", "\u934B\u62E1\u5F35\u91CF", effect, "\u500B"),
      specificationInput("skillPerDay", "1\u65E5\u306E\u767A\u52D5\u56DE\u6570", 8, "\u56DE"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\u3001\u934B\u306E\u62E1\u5F35\u91CF = \u934B\u62E1\u5F35\u91CF\n\u934B\u62E1\u5F35\u56DE\u6570\u30923\u56DE\u306E\u6599\u7406\u3078\u5206\u914D\u3057\u3001\u6599\u7406\u30A8\u30CA\u30B8\u30FC\u5DEE\u304B\u30891\u767A\u52D5\u3042\u305F\u308A\u3078\u623B\u3059",
        description: "\u6700\u5927\u934B\u306B\u610F\u5473\u304C\u3042\u308B\u67A0\u3068\u4F59\u5270\u67A0\u3092\u5206\u3051\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\u3001\u934B\u306E\u62E1\u5F35\u91CF = \u934B\u62E1\u5F35\u91CF\n\u62E1\u5F35\u524D\u5F8C\u306E\u6700\u9069\u6599\u7406\u306E\u6700\u7D42\u30A8\u30CA\u30B8\u30FC\u5DEE\u3092\u52A0\u7B97",
        description: "\u934B\u30B5\u30A4\u30BA\u306E\u5DEE\u3092\u6599\u7406\u30A8\u30CA\u30B8\u30FC\u3078\u63DB\u7B97\u3057\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u934B\u306E\u62E1\u5F35\u91CF\u3092\u84C4\u7A4D\u3057\u3001\u5404\u6599\u7406\u6642\u523B\u3067\u934B\u30B5\u30A4\u30BA\u3078\u52A0\u7B97\u3059\u308B\u3002",
        description: "\u30B9\u30AD\u30EB\u5358\u4F53\u306E\u30A8\u30CA\u30B8\u30FC\u306F\u8FD4\u3057\u307E\u305B\u3093\u3002"
      }
    ],
    resultLabel: "\u934B\u62E1\u5F35\u306E\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: () => 0
  };
}
var CookingPowerUpSkill = class {
  static skillDefinitions;
  evaluate({ effect }) {
    return { energyPerSkill: 0, cookingPowerUpEffect: effect };
  }
};
CookingPowerUpSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S",
    effect: [7, 10, 12, 17, 22, 27, 31],
    category: "cooking",
    specification: (level) => specification4(CookingPowerUpSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions6 = CookingPowerUpSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/magical-flame-skill.ts
var weekEffectFormula2 = "\u9031\u306E\u6599\u7406\u56DE\u6570 = 21\u56DE\uFF08\u5E73\u65E518\u56DE\u3001\u65E5\u66DC3\u56DE\uFF09\n\u9031\u52B9\u679C\u91CF\u304C0\u306E\u5834\u5408\u3001\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 = 18 \xD7 (1 + 0.1) + 3 \xD7 (1 + 0.3 \xD7 2) = 24.6\n\u9031\u52B9\u679C\u91CF\u304C0\u3088\u308A\u5927\u304D\u3044\u5834\u5408\u30011\u56DE\u3042\u305F\u308A\u306E\u4E0A\u6607\u91CF p = min(\u9031\u52B9\u679C\u91CF \xF7 21, 0.7)\nr\u2080 = 1\ni\u56DE\u76EE\uFF08i = 1 \u2026 21\uFF09\u306E\u57FA\u790E\u6210\u529F\u7387 q\u1D62 = i \u2264 18 \u306A\u30890.1\u3001\u305D\u308C\u4EE5\u5916\u306F0.3\ni\u56DE\u76EE\u306E\u6210\u529F\u6642\u306E\u8FFD\u52A0\u500D\u7387 b\u1D62 = i \u2264 18 \u306A\u30891\u3001\u305D\u308C\u4EE5\u5916\u306F2\nr\u1D62 = \u03A3[j = 1 \u2026 i] {(q\u1D62 + min(p \xD7 j, 0.7)) \xD7 r\u1D62\u208B\u2C7C \xD7 \u03A0[k = i \u2212 j + 1 \u2026 i \u2212 1] (1 \u2212 r\u2096)}\n\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 = \u03A3[i = 1 \u2026 21] (1 + b\u1D62 \xD7 r\u1D62)\n\uFF08\u7A7A\u306E\u7A4D \u03A0 \u306F1\u3068\u3059\u308B\uFF09";
var defaultCookingEnergyFormula2 = "\u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC\u306E\u65E2\u5B9A\u5024 = max(\u5168\u6599\u7406\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC) \xD7 \u6700\u5927\u30EC\u30B7\u30D4Lv\u30DC\u30FC\u30CA\u30B9";
function specification5(effect) {
  return {
    inputs: [
      fixedSpecificationInput("potSize", "\u934B\u62E1\u5F35\u91CF", effect.main, "\u500B"),
      fixedSpecificationInput("chanceEffect", "\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u52B9\u679C\u91CF", effect.sub, "%"),
      specificationInput("skillPerDay", "1\u65E5\u306E\u767A\u52D5\u56DE\u6570", 8, "\u56DE"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D"),
      specificationInput("cookingEnergy", "\u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC", Cooking.maxEnergy, "\u30A8\u30CA\u30B8\u30FC"),
      specificationInput("cookingWeight", "\u6599\u7406\u8A55\u4FA1\u500D\u7387", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: `\u934B\u306E\u62E1\u5F35\u91CF = \u934B\u62E1\u5F35\u91CF\u3002\u934B\u62E1\u5F35\u56DE\u6570\u30923\u56DE\u306E\u6599\u7406\u3078\u5206\u914D\u3057\u3001\u6599\u7406\u30A8\u30CA\u30B8\u30FC\u5DEE\u304B\u30891\u767A\u52D5\u3042\u305F\u308A\u3078\u623B\u3059\u3002
${defaultCookingEnergyFormula2}
\u9031\u52B9\u679C\u91CF = \u6599\u7406\u30C1\u30E3\u30F3\u30B9\u52B9\u679C\u91CF \xF7 100 \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F \xD7 7
${weekEffectFormula2}
\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024 = (\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 \u2212 24.6) \xF7 7 \xD7 \u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC \xF7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xF7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F
\u6700\u7D42\u8A55\u4FA1 = \uFF08\u934B\u62E1\u5F35\u306E\u8A55\u4FA1 + \u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024\uFF09\xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "\u934B\u62E1\u5F35\u3068\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u5171\u901A\u5F8C\u51E6\u7406\u3092\u3001\u540C\u3058\u767A\u52D5\u56DE\u6570\u306B\u5BFE\u3057\u3066\u5B9F\u884C\u3057\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: `\u934B\u306E\u62E1\u5F35\u91CF = \u934B\u62E1\u5F35\u91CF\u3002\u62E1\u5F35\u524D\u5F8C\u306E\u6700\u9069\u6599\u7406\u306E\u6700\u7D42\u30A8\u30CA\u30B8\u30FC\u5DEE\u3092\u52A0\u7B97\u3059\u308B\u3002
${defaultCookingEnergyFormula2}
\u9031\u52B9\u679C\u91CF = \u6599\u7406\u30C1\u30E3\u30F3\u30B9\u52B9\u679C\u91CF \xF7 100 \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F \xD7 7
${weekEffectFormula2}
\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024 = (\u9031\u306E\u6599\u7406\u671F\u5F85\u5024 \u2212 24.6) \xF7 7 \xD7 \u4F7F\u7528\u3059\u308B\u6599\u7406\u30A8\u30CA\u30B8\u30FC \xF7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6599\u7406\u8A55\u4FA1\u500D\u7387 \xF7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F
\u6700\u7D42\u8A55\u4FA1 = \uFF08\u934B\u62E1\u5F35\u306E\u8A55\u4FA1 + \u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u30CF\u30F3\u30C9\u30E9\u52A0\u7B97\u5024\uFF09\xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "\u65E5\u66DC\u6E96\u5099\u6642\u306F\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u6982\u7B97\u8A55\u4FA1\u3092\u884C\u3044\u307E\u305B\u3093\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u934B\u306E\u62E1\u5F35\u91CF\u3092\u5404\u6599\u7406\u6642\u523B\u3078\u84C4\u7A4D\u3059\u308B\u3002\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u84C4\u7A4D\u5024 = \u6599\u7406\u30C1\u30E3\u30F3\u30B9\u52B9\u679C\u91CF \xF7 100 \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u6599\u7406\u51E6\u7406\u7528\u306E\u4E21\u65B9\u306E\u72B6\u614B\u3092\u84C4\u7A4D\u3057\u3001\u30B9\u30AD\u30EB\u5358\u4F53\u306E\u8A55\u4FA1\u306F0\u3067\u3059\u3002"
      }
    ],
    resultLabel: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9\u306E\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => {
      if (mode === 2 /* TEAM */) return 0;
      if (mode === 1 /* ABOUT */ && !values.skillPerDay) return 0;
      const totalEffect = values.chanceEffect / 100 * values.skillPerDay * values.weight * 7;
      const weeklyIncrease = (Cooking.getChanceWeekEffect(totalEffect).total - 24.6) / 7;
      return weeklyIncrease * values.cookingEnergy * (mode === 1 /* ABOUT */ ? values.cookingWeight : 1) / values.skillPerDay;
    }
  };
}
var MagicalFlameSkill = class {
  static skillDefinitions;
  evaluate({ effect }) {
    return {
      energyPerSkill: 0,
      cookingPowerUpEffect: effect.main,
      cookingChance: effect.sub
    };
  }
};
MagicalFlameSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u30DE\u30B8\u30AB\u30EB\u30D5\u30EC\u30A4\u30E0(\u6599\u7406\u30A2\u30C9\u30D0\u30F3\u30B9S)",
    effect: [
      { main: 7, sub: 1 },
      { main: 10, sub: 2 },
      { main: 12, sub: 2 },
      { main: 17, sub: 3 },
      { main: 22, sub: 3 },
      { main: 27, sub: 4 },
      { main: 31, sub: 5 }
    ],
    category: "cooking",
    specification: (level) => specification5(MagicalFlameSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions7 = MagicalFlameSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/copy-skill.ts
function specification6(evaluateEnergy) {
  return {
    inputs: [
      {
        key: "selectEnergy",
        label: "\u53B3\u9078\u30FB\u30DC\u30C3\u30AF\u30B9\u7528\u306E\u8A2D\u5B9A\u5024",
        defaultValue: evaluateEnergy,
        step: 0.1,
        unit: "\u30A8\u30CA\u30B8\u30FC"
      },
      {
        key: "teamEnergy",
        label: "\u30C1\u30FC\u30E0\u7528\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S\u52B9\u679C",
        defaultValue: 400,
        step: 0.1,
        unit: "\u30A8\u30CA\u30B8\u30FC"
      },
      { key: "weight", label: "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", defaultValue: 1, step: 0.1, unit: "\u500D" }
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u8A55\u4FA1\u306E\u8A2D\u5B9A\u5024\u304C\u3042\u308C\u3070\u305D\u306E\u5024\u3001\u306A\u3051\u308C\u3070\u3053\u306E\u30B9\u30AD\u30EB\u306B\u767B\u9332\u3055\u308C\u305F\u8A55\u4FA1\u5024\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u767B\u9332\u3055\u308C\u305F\u8A55\u4FA1\u5024\u306F\u3001\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M\u306E\u540C\u3058\u30B9\u30AD\u30EBLv\u306E\u5024\u3067\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u8A55\u4FA1\u306E\u8A2D\u5B9A\u5024\u304C\u3042\u308C\u3070\u305D\u306E\u5024\u3001\u306A\u3051\u308C\u3070\u3053\u306E\u30B9\u30AD\u30EB\u306B\u767B\u9332\u3055\u308C\u305F\u8A55\u4FA1\u5024\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u53B3\u9078\u8A08\u7B97\u6642\u3068\u540C\u3058\u5206\u5C90\u3067\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S.effect[\u30B9\u30AD\u30EBLv]\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u30C1\u30FC\u30E0\u3067\u306F\u30B3\u30D4\u30FC\u5148\u3092\u76F4\u63A5\u8A55\u4FA1\u305B\u305A\u3001\u540C\u30EC\u30D9\u30EB\u306E\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"
      }
    ],
    resultLabel: "\u30B3\u30D4\u30FC\u5F8C\u306E\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => (mode === 2 /* TEAM */ ? values.teamEnergy : values.selectEnergy) * values.weight
  };
}
var BaseCopySkill = class {
  evaluate({ config, mode, skill, skillLv }) {
    return {
      energyPerSkill: mode == 2 /* TEAM */ ? skill_default.map["\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S"].effect[skillLv] : config.selectEvaluate.skillEnergy[skill.name][skillLv] ?? skill.evaluateEnergy[skillLv]
    };
  }
};
var TransformCopySkill = class _TransformCopySkill extends BaseCopySkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3078\u3093\u3057\u3093(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)",
      effect: [null, null, null, null, null, null, null],
      metronome: false,
      copyable: false,
      specification: (level) => specification6(_TransformCopySkill.skillDefinitions[0].evaluateEnergy?.[level] ?? 0)
    })
  ];
};
var MimicCopySkill = class _MimicCopySkill extends BaseCopySkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3082\u306E\u307E\u306D(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)",
      effect: [null, null, null, null, null, null, null],
      metronome: false,
      copyable: false,
      specification: (level) => specification6(_MimicCopySkill.skillDefinitions[0].evaluateEnergy?.[level] ?? 0)
    })
  ];
};
var skillDefinitions8 = [
  ...TransformCopySkill.skillDefinitions,
  ...MimicCopySkill.skillDefinitions
];

// ../../../../tmp/pkreimer/src/models/simulation/skills/energy-charge-skill.ts
function specification7(effect) {
  return {
    inputs: [
      fixedSpecificationInput("effect", "\u30B9\u30AD\u30EB\u52B9\u679C\u91CF", effect, "\u30A8\u30CA\u30B8\u30FC"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: specificationModes(
      "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u52B9\u679C\u91CF\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
      {}
    ),
    resultLabel: "\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values) => values.effect * values.weight
  };
}
var BaseEnergyChargeSkill = class {
  evaluate({ effect }) {
    return { energyPerSkill: effect };
  }
};
var EnergyChargeSSkill = class extends BaseEnergyChargeSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S",
      effect: [400, 569, 785, 1083, 1496, 2066, 3212],
      energyOnly: true,
      category: "energy"
    })
  ];
};
var RandomEnergyChargeSSkill = class extends BaseEnergyChargeSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)",
      effect: [500, 711.5, 981.5, 1354, 1870, 2582.5, 3915],
      energyOnly: true,
      category: "energy"
    })
  ];
};
var EnergyChargeMSkill = class extends BaseEnergyChargeSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M",
      effect: [800, 1251, 1726, 2383, 3290, 4546, 6858],
      energyOnly: true,
      category: "energy"
    })
  ];
};
var skillDefinitions9 = [
  ...EnergyChargeSSkill.skillDefinitions,
  ...RandomEnergyChargeSSkill.skillDefinitions,
  ...EnergyChargeMSkill.skillDefinitions
];
for (const definition of skillDefinitions9) {
  definition.specification = (level) => specification7(definition.effect[level]);
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/shokuzai-get-skill.ts
var FoodGetSkill = class {
  static skillDefinitions;
  evaluate({ effect }) {
    return { energyPerSkill: 0, foodGet: effect, foodGetList: Food.list };
  }
};
FoodGetSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u98DF\u6750\u30B2\u30C3\u30C8S",
    effect: [6, 8, 11, 14, 17, 21, 24],
    category: "food",
    specification: (level) => foodHandlerSpecification(FoodGetSkill.skillDefinitions[0].effect[level], "allFood")
  })
];
var skillDefinitions10 = FoodGetSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/shokuzai-select-skill.ts
var BaseFoodSelectSkill = class {
  addShard(_context) {
  }
  evaluate(context) {
    const { copy, effect, executor, skill } = context;
    this.addShard(context);
    return {
      energyPerSkill: 0,
      foodGet: effect.food,
      foodGetList: copy ? copy.base.foodList.map((x) => Food.map[x.name]) : skill.foodList ?? executor.base.foodList.map((x) => Food.map[x.name])
    };
  }
};
var FoodSelectSkill = class _FoodSelectSkill extends BaseFoodSelectSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S",
      effect: [
        { food: 5 },
        // 15%で仮定
        { food: 6 },
        { food: 8 },
        { food: 11 },
        { food: 13 },
        { food: 16 },
        { food: 18 }
      ],
      metronome: false,
      category: "food",
      specification: (level) => {
        const effect = _FoodSelectSkill.skillDefinitions[0].effect[level];
        return foodHandlerSpecification(effect.food, "select");
      }
      // 2026/1/28時点ではスキルコピーでも本人のではなく下記食材で固定
      // foodList: ['つやつやアボカド', 'ほっこりポテト', 'ピュアなオイル'].map(x => Food.map[x]),
    })
  ];
};
var LuckyFoodSelectSkill = class _LuckyFoodSelectSkill extends BaseFoodSelectSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u304D\u3087\u3046\u3046\u3093(\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S)",
      effect: [
        { food: 5 * 0.84, shard: 500 * 2 * 0.16 },
        // 少ない方:多い方(5倍)が3:1っぽいので(1 * 75% + 5 * 25%) = 2
        { food: 6 * 0.84, shard: 720 * 2 * 0.16 },
        { food: 8 * 0.84, shard: 1030 * 2 * 0.16 },
        { food: 11 * 0.84, shard: 1440 * 2 * 0.16 },
        { food: 13 * 0.84, shard: 2e3 * 2 * 0.16 },
        { food: 16 * 0.84, shard: 2800 * 2 * 0.16 },
        { food: 18 * 0.84, shard: 4e3 * 2 * 0.16 }
      ],
      foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"].map(
        (x) => Food.map[x]
      ),
      category: "food",
      specification: (level) => {
        const effect = _LuckyFoodSelectSkill.skillDefinitions[0].effect[level];
        return foodHandlerSpecification(effect.food, "select", effect.shard ?? 0);
      }
    })
  ];
  addShard({ effect, executor, weight }) {
    executor.shard += effect.shard * executor.skillPerDay * weight;
  }
};
var ViceGripFoodSelectSkill = class _ViceGripFoodSelectSkill extends BaseFoodSelectSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u304B\u3044\u308A\u304D\u30D0\u30B5\u30DF(\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S)",
      effect: [
        { food: 5 * 1.15 },
        // 15%で仮定
        { food: 6 * 1.15 },
        { food: 8 * 1.15 },
        { food: 11 * 1.15 },
        { food: 13 * 1.15 },
        { food: 16 * 1.15 },
        { food: 18 * 1.15 }
      ],
      foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"].map(
        (x) => Food.map[x]
      ),
      category: "food",
      specification: (level) => {
        const effect = _ViceGripFoodSelectSkill.skillDefinitions[0].effect[level];
        return foodHandlerSpecification(effect.food, "select");
      }
    })
  ];
};
var skillDefinitions11 = [
  ...FoodSelectSkill.skillDefinitions,
  ...LuckyFoodSelectSkill.skillDefinitions,
  ...ViceGripFoodSelectSkill.skillDefinitions
];

// ../../../../tmp/pkreimer/src/models/simulation/skills/genki-heal-skill.ts
var BaseHealSkill = class {
  evaluate(_context) {
    return { energyPerSkill: 0 };
  }
};
function specification8(effect) {
  const formula = "\u30B9\u30AD\u30EB\u5358\u4F53\u306E\u30A8\u30CA\u30B8\u30FC\u8A55\u4FA1 = 0\n\u81EA\u8EAB\u3078\u306E\u56DE\u5FA9\u91CF = \u81EA\u8EAB\u3078\u306E\u56DE\u5FA9\u91CF \xD7 \u30B9\u30AD\u30EB\u62BD\u9078\u306E\u91CD\u307F\n\u4ED6\u8005\u3078\u306E\u56DE\u5FA9\u91CF = \u4ED6\u8005\u3078\u306E\u56DE\u5FA9\u91CF \xD7 \u30B9\u30AD\u30EB\u62BD\u9078\u306E\u91CD\u307F";
  return {
    inputs: [
      fixedSpecificationInput("selfEffect", "\u81EA\u8EAB\u3078\u306E\u56DE\u5FA9\u91CF", effect.self ?? 0, "%"),
      fixedSpecificationInput("otherEffect", "\u4ED6\u8005\u3078\u306E\u56DE\u5FA9\u91CF", effect.other ?? 0, "%"),
      specificationInput("weight", "\u30B9\u30AD\u30EB\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: `${formula}
\u4ED6\u8005\u3078\u306E\u56DE\u5FA9\u91CF\u304C\u3042\u308C\u3070\u3001\u663C\u591C\u306E\u304A\u3066\u3064\u3060\u3044\u500D\u7387\u3092\u6C42\u3081\u3066\u56DE\u5FA9\u306E\u8A55\u4FA1\u3078\u63DB\u7B97\u3059\u308B\u3002`,
        description: "\u56DE\u5FA9\u306E\u8A55\u4FA1\u306F\u3052\u3093\u304D\u6642\u7CFB\u5217\u3092\u8A08\u7B97\u3059\u308B\u5171\u901A\u51E6\u7406\u3067\u6C42\u3081\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: `${formula}
\u7DE8\u6210\u78BA\u5B9A\u5F8C\u306B\u56DE\u5FA9\u52B9\u679C\u3092\u304A\u3066\u3064\u3060\u3044\u500D\u7387\u306E\u8A08\u7B97\u3078\u6E21\u3059\u3002`,
        description: "\u30B9\u30AD\u30EB\u5358\u4F53\u8A55\u4FA1\u306F0\u3067\u3001\u56DE\u5FA9\u91CF\u3092\u72B6\u614B\u3068\u3057\u3066\u4FDD\u6301\u3057\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: `${formula}
\u767A\u52D5\u6642\u523B\u3092\u542B\u3080\u56DE\u5FA9\u4E00\u89A7\u3092\u3001\u304A\u3066\u3064\u3060\u3044\u500D\u7387\u306E\u8A08\u7B97\u3078\u6E21\u3059\u3002`,
        description: "\u56DE\u5FA9\u91CF\u3092\u6642\u7CFB\u5217\u306E\u3052\u3093\u304D\u500D\u7387\u3068\u3057\u3066\u6271\u3044\u307E\u3059\u3002"
      }
    ],
    resultLabel: "\u72B6\u614B\u3078\u8A18\u9332\u3059\u308B\u56DE\u5FA9\u91CF",
    resultUnit: "%/\u56DE",
    calculate: (values) => (values.selfEffect + values.otherEffect) * values.weight
  };
}
var EnergyChargeHealSkill = class _EnergyChargeHealSkill extends BaseHealSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S",
      effect: [12, 16.2, 21.2, 26.6, 33.6, 43.4].map((x) => ({ self: x })),
      genki: true,
      selfHeal: true,
      category: "heal",
      specification: (level) => specification8(_EnergyChargeHealSkill.skillDefinitions[0].effect[level])
    })
  ];
};
var MoonlightHealSkill = class _MoonlightHealSkill extends BaseHealSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3064\u304D\u306E\u3072\u304B\u308A(\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S)",
      effect: [
        { self: 12, other: 6.3 },
        { self: 16.2, other: 7.7 },
        { self: 21.2, other: 10.1 },
        { self: 26.6, other: 13 },
        { self: 33.6, other: 17.2 },
        { self: 43.4, other: 22.8 }
      ].map((x) => ({ self: x.self, other: x.other * 0.5 / 5 })),
      // 大成功は50%、1匹だけなので/5
      genki: true,
      team: true,
      selfHeal: true,
      category: "heal",
      specification: (level) => specification8(_MoonlightHealSkill.skillDefinitions[0].effect[level])
    })
  ];
};
var EnergyCheerHealSkill = class _EnergyCheerHealSkill extends BaseHealSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS",
      effect: [12, 15, 20, 25, 33, 44].map((x) => ({ other: x / 5 })),
      team: true,
      genki: true,
      category: "heal",
      specification: (level) => specification8(_EnergyCheerHealSkill.skillDefinitions[0].effect[level])
    })
  ];
};
var EnergyAllHealSkill = class _EnergyAllHealSkill extends BaseHealSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS",
      effect: [5, 7, 9, 11.4, 15, 18.1].map((x) => ({ other: x })),
      team: true,
      genki: true,
      category: "heal",
      specification: (level) => specification8(_EnergyAllHealSkill.skillDefinitions[0].effect[level])
    })
  ];
};
var BerryJuiceHealSkill = class _BerryJuiceHealSkill extends BaseHealSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u304D\u306E\u307F\u30B8\u30E5\u30FC\u30B9(\u3052\u3093\u304D\u30AA\u30FC\u30EBS)",
      effect: [5, 7, 9, 11.4, 15, 18.1].map((x) => ({ other: x })),
      team: true,
      genki: true,
      category: "heal",
      specification: (level) => specification8(_BerryJuiceHealSkill.skillDefinitions[0].effect[level])
    })
  ];
};
var skillDefinitions12 = [
  ...EnergyChargeHealSkill.skillDefinitions,
  ...MoonlightHealSkill.skillDefinitions,
  ...EnergyCheerHealSkill.skillDefinitions,
  ...EnergyAllHealSkill.skillDefinitions,
  ...BerryJuiceHealSkill.skillDefinitions
];

// ../../../../tmp/pkreimer/src/models/simulation/skills/iyashi-no-hadou-skill.ts
function specification9(effect) {
  return {
    inputs: [
      specificationInput("supportScore", "\u30B5\u30DD\u30FC\u30C8\u5F79\u306E\u57FA\u6E96\u5024", 100, "\u30A8\u30CA\u30B8\u30FC"),
      fixedSpecificationInput("help1", "\u30E9\u30C6\u30A3\u30AA\u30B9\u4E0D\u5728\u6642\u306E\u8FFD\u52A0\u304A\u3066\u3064\u3060\u3044\u6570", effect.help1, "\u56DE"),
      fixedSpecificationInput("help2", "\u30E9\u30C6\u30A3\u30AA\u30B9\u7DE8\u6210\u6642\u306E\u8FFD\u52A0\u304A\u3066\u3064\u3060\u3044\u6570", effect.help2, "\u56DE"),
      specificationInput("berryEnergyPerHelp", "\u5BFE\u8C61\u5168\u54E1\u306E\u304D\u306E\u307F\u8A55\u4FA1/\u624B\u4F1D\u3044\u5408\u8A08", 100, "\u30A8\u30CA\u30B8\u30FC"),
      specificationInput("foodRate", "\u5BFE\u8C61\u5168\u54E1\u306E\u98DF\u6750\u78BA\u7387\u306E\u5E73\u5747", 0, "\uFF080\u301C1\uFF09"),
      specificationInput("latiosInTeam", "\u30E9\u30C6\u30A3\u30AA\u30B9\u7DE8\u6210\u6642", 0, "\uFF081: \u306F\u3044\uFF09"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30B5\u30DD\u30FC\u30C8\u5F79\u306E\u57FA\u6E96\u5024 \xD7 help2 \xD7 2\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u5E38\u306B help2 \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\n\u6700\u7D42\u8A55\u4FA1 = 0",
        description: "\u3053\u306E\u30E2\u30FC\u30C9\u3067\u306F\u76F4\u63A5\u8A55\u4FA1\u305B\u305A\u3001\u30C1\u30FC\u30E0\u8A08\u7B97\u3067\u6271\u3044\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "helpCount = (\u30E9\u30C6\u30A3\u30AA\u30B9\u7DE8\u6210\u6642\u306A\u3089 help2\u3001\u305D\u308C\u4EE5\u5916\u306Fhelp1) \xD7 2 \xF7 5\n\u304D\u306E\u307F\u8A55\u4FA1(\u5408\u8A08) = \u5BFE\u8C61\u5168\u54E1\u306E bEpH \xD7 helpCount \xD7 (1 \u2212 foodRate) \u3092\u5408\u7B97",
        description: "\u98DF\u6750\u500B\u6570\u306F\u5404\u5BFE\u8C61\u3078\u5225\u9014\u52A0\u7B97\u3057\u307E\u3059\u3002"
      }
    ],
    resultLabel: "\u304D\u306E\u307F\u90E8\u5206\u306E\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => mode === 3 /* SELECT */ ? values.supportScore * values.help2 * 2 * values.weight : mode === 1 /* ABOUT */ ? 0 : values.berryEnergyPerHelp * ((values.latiosInTeam ? values.help2 : values.help1) * 2 / 5) * (1 - values.foodRate) * values.weight
  };
}
var HealingWaveSkill = class {
  static skillDefinitions;
  evaluate(context) {
    const { effect, executor, mode, pokemonList, scoreForSupportEvaluate, weight } = context;
    let energyPerSkill = 0;
    if (mode == 3 /* SELECT */) {
      energyPerSkill = scoreForSupportEvaluate * effect.help2 * 2;
    } else if (mode == 2 /* TEAM */) {
      let helpCount = pokemonList.some((x) => x.base.name == "\u30E9\u30C6\u30A3\u30AA\u30B9") ? effect.help2 : effect.help1;
      helpCount = helpCount * 2 / 5;
      for (const subPokemon of pokemonList) {
        energyPerSkill += subPokemon.bEpH * helpCount * (1 - subPokemon.foodRate);
        for (const food of subPokemon.foodList) {
          executor[food.name] = (executor[food.name] ?? 0) + food.num / subPokemon.foodList.length * helpCount * subPokemon.foodRate * executor.skillPerDay * weight;
        }
      }
    }
    return { energyPerSkill };
  }
};
HealingWaveSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u3044\u3084\u3057\u306E\u306F\u3069\u3046(\u3052\u3093\u304D\u30A8\u30FC\u30EBS)",
    effect: [
      { other: 6, help1: 1, help2: 2 },
      { other: 8, help1: 2, help2: 3 },
      { other: 10, help1: 2, help2: 4 },
      { other: 13, help1: 3, help2: 5 },
      { other: 17, help1: 4, help2: 6 },
      { other: 22, help1: 4, help2: 7 }
    ].map((x) => ({ ...x, other: x.other * 2 / 5 })),
    team: true,
    genki: true,
    category: "heal",
    specification: (level) => specification9(HealingWaveSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions13 = HealingWaveSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/otetsudai-skill.ts
function helpSpecification(effect, isBoost) {
  const fix = isBoost ? effect.fix : effect;
  const team = isBoost ? effect.team.at(-1) : effect;
  const max = isBoost ? effect.max : effect;
  return {
    inputs: [
      fixedSpecificationInput(
        "effect",
        isBoost ? "\u56FA\u5B9A\u304A\u3066\u3064\u3060\u3044\u6570" : "\u8FFD\u52A0\u304A\u3066\u3064\u3060\u3044\u6570",
        fix,
        "\u56DE"
      ),
      fixedSpecificationInput("teamEffect", "\u30C1\u30FC\u30E0\u4EBA\u6570\u306B\u3088\u308B\u8FFD\u52A0\u6570", team - fix, "\u56DE"),
      fixedSpecificationInput("maxEffect", "\u53B3\u9078\u7528\u306E\u6700\u5927\u304A\u3066\u3064\u3060\u3044\u6570", max, "\u56DE"),
      specificationInput("supportScore", "\u30B5\u30DD\u30FC\u30C8\u5F79\u306E\u57FA\u6E96\u5024", 100, "\u30A8\u30CA\u30B8\u30FC"),
      specificationInput("berryEnergyPerHelp", "\u5BFE\u8C61\u5168\u54E1\u306E\u304D\u306E\u307F\u8A55\u4FA1/\u624B\u4F1D\u3044\u5408\u8A08", 100, "\u30A8\u30CA\u30B8\u30FC"),
      specificationInput("foodRate", "\u5BFE\u8C61\u5168\u54E1\u306E\u98DF\u6750\u78BA\u7387\u306E\u5E73\u5747", 0, "\uFF080\u301C1\uFF09"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: `\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30B5\u30DD\u30FC\u30C8\u5F79\u306E\u57FA\u6E96\u5024 \xD7 ${isBoost ? "\u53B3\u9078\u7528\u306E\u6700\u5927\u304A\u3066\u3064\u3060\u3044\u6570 \xD7 5" : "\u8FFD\u52A0\u304A\u3066\u3064\u3060\u3044\u6570"}
\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "\u304A\u3066\u3064\u3060\u3044\u30D6\u30FC\u30B9\u30C8\u306F effect.max \xD7 5\u3001\u305D\u308C\u4EE5\u5916\u306F effect \u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\n\u6700\u7D42\u8A55\u4FA1 = 0",
        description: "\u30C1\u30FC\u30E0\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u5074\u306E\u652F\u63F4\u51E6\u7406\u3067\u6271\u3044\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: `1\u5339\u3042\u305F\u308A\u306E\u304A\u3066\u3064\u3060\u3044\u6570 = ${isBoost ? "\u56FA\u5B9A\u304A\u3066\u3064\u3060\u3044\u6570 + \u30C1\u30FC\u30E0\u4EBA\u6570\u306B\u3088\u308B\u8FFD\u52A0\u6570" : "\u8FFD\u52A0\u304A\u3066\u3064\u3060\u3044\u6570 \xF7 5"}
\u304D\u306E\u307F\u8A55\u4FA1(\u5408\u8A08) = \u5BFE\u8C61\u5168\u54E1\u306E\u304D\u306E\u307F\u8A55\u4FA1/\u624B\u4F1D\u3044\u5408\u8A08 \xD7 1\u5339\u3042\u305F\u308A\u306E\u304A\u3066\u3064\u3060\u3044\u6570 \xD7 (1 \u2212 \u98DF\u6750\u78BA\u7387)`,
        description: "\u304D\u306E\u307F\u8A55\u4FA1\u3068\u98DF\u6750\u500B\u6570\u3092\u5225\u3005\u306B\u52A0\u7B97\u3057\u307E\u3059\u3002"
      }
    ],
    resultLabel: "\u304D\u306E\u307F\u90E8\u5206\u306E\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => mode === 3 /* SELECT */ ? values.supportScore * (isBoost ? values.maxEffect * 5 : values.effect) * values.weight : mode === 1 /* ABOUT */ ? 0 : values.berryEnergyPerHelp * (isBoost ? values.effect + values.teamEffect : values.effect / 5) * (1 - values.foodRate) * values.weight
  };
}
var BaseHelpSkill = class {
  evaluate(context) {
    const { effect, executor, helpBoostCount, mode, pokemonList, scoreForSupportEvaluate, weight } = context;
    let energyPerSkill = 0;
    if (mode == 3 /* SELECT */) {
      energyPerSkill = scoreForSupportEvaluate * this.selectHelpCount(context);
    } else if (mode == 2 /* TEAM */) {
      const helpCount = this.teamHelpCount(context);
      for (const subPokemon of pokemonList) {
        energyPerSkill += subPokemon.bEpH4Spt * helpCount * (1 - subPokemon.foodRate);
        for (const food of subPokemon.foodList) {
          executor[food.name] = (executor[food.name] ?? 0) + food.baseNum / subPokemon.foodList.length * helpCount * subPokemon.foodRate * executor.skillPerDay * weight;
        }
      }
    }
    return { energyPerSkill };
  }
};
var HelpSupportSkill = class extends BaseHelpSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S",
      effect: [6, 7, 8, 9, 10, 11, 12],
      team: true,
      category: "support"
    })
  ];
  selectHelpCount({ effect }) {
    return effect;
  }
  teamHelpCount({ effect }) {
    return effect / 5;
  }
};
var HelpBoostSkill = class extends BaseHelpSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u304A\u3066\u3064\u3060\u3044\u30D6\u30FC\u30B9\u30C8",
      effect: [
        { fix: 2, team: [0, 0, 1, 2, 4], max: 6 },
        { fix: 3, team: [0, 0, 1, 2, 4], max: 7 },
        { fix: 3, team: [0, 0, 2, 3, 5], max: 8 },
        { fix: 4, team: [0, 0, 2, 3, 5], max: 9 },
        { fix: 4, team: [0, 1, 3, 4, 6], max: 10 },
        { fix: 5, team: [0, 1, 3, 4, 6], max: 11 }
      ],
      team: true,
      category: "support"
    })
  ];
  selectHelpCount({ effect }) {
    return effect.max * 5;
  }
  teamHelpCount({ effect, helpBoostCount }) {
    return effect.fix + effect.team[helpBoostCount - 1];
  }
};
var skillDefinitions14 = [
  ...HelpSupportSkill.skillDefinitions,
  ...HelpBoostSkill.skillDefinitions
];
for (const definition of HelpSupportSkill.skillDefinitions) {
  definition.specification = (level) => helpSpecification(definition.effect[level], false);
}
for (const definition of HelpBoostSkill.skillDefinitions) {
  definition.specification = (level) => helpSpecification(definition.effect[level], true);
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/team-berry-specification.ts
var modeList3 = [
  {
    id: 3 /* SELECT */,
    label: "\u53B3\u9078\u8A08\u7B97\u6642",
    formula: "",
    description: "\u53B3\u9078\u8A55\u4FA1\u7528\u306E\u4EE3\u8868\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  },
  {
    id: 1 /* ABOUT */,
    label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
    formula: "",
    description: "\u30DC\u30C3\u30AF\u30B9\u4E00\u89A7\u306E\u6982\u7B97\u8A55\u4FA1\u3067\u4F7F\u30461\u56DE\u3042\u305F\u308A\u306E\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  },
  {
    id: 2 /* TEAM */,
    label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
    formula: "",
    description: "\u7DE8\u6210\u4E2D\u306E\u5BFE\u8C61\u6570\u3092\u53CD\u6620\u3059\u308B1\u56DE\u3042\u305F\u308A\u306E\u5024\u3068\u3057\u3066\u8A08\u7B97\u3057\u307E\u3059\u3002"
  }
];
function input2(key, label, defaultValue, unit) {
  return { key, label, defaultValue, step: 0.1, unit };
}
function fixedInput2(key, label, defaultValue, unit) {
  return { ...input2(key, label, defaultValue, unit), editable: false };
}
function teamBerrySpecification(skill, effect, type) {
  const aboutEffect = effect.team.at(-1);
  const selectedEffect = effect.team.at(-1);
  const bonus = effect.bonus ?? 0;
  const isMeteor = type === "meteor";
  return {
    inputs: [
      input2("berryEnergy", "\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC", 100, "\u30A8\u30CA\u30B8\u30FC"),
      fixedInput2(
        "otherBerryBaseEnergy",
        `${isMeteor ? "\u30E4\u30C1\u30A7" : "\u30DE\u30B4"}\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC`,
        berry_default.map[isMeteor ? "\u30E4\u30C1\u30A7" : "\u30DE\u30B4"].energy,
        "\u30A8\u30CA\u30B8\u30FC"
      ),
      input2("level", "\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB", 1, "Lv"),
      fixedInput2("self", "\u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570", selectedEffect.self, "\u500B"),
      fixedInput2("other", "\u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570", selectedEffect.other, "\u500B"),
      fixedInput2("bonus", "\u81EA\u8EAB\u3078\u306E\u8FFD\u52A0\u304D\u306E\u307F\u6570", bonus, "\u500B"),
      fixedInput2("otherCount", "\u30C1\u30FC\u30E0\u5185\u306E\u4ED6\u8005\u6570", 4, "\u5339"),
      input2("eventRate", "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63", 1, "\u500D"),
      input2("latiasInTeam", "\u30E9\u30C6\u30A3\u30A2\u30B9\u7DE8\u6210\u6642", 0, "\uFF081: \u306F\u3044\uFF09"),
      input2("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: `\u4ED6\u8005\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC = max(${isMeteor ? "\u30E4\u30C1\u30A7" : "\u30DE\u30B4"}\u306E\u307F\u57FA\u790E\u30A8\u30CA\u30B8\u30FC + (\u30EC\u30D9\u30EB \u2212 1), ${isMeteor ? "\u30E4\u30C1\u30A7" : "\u30DE\u30B4"}\u306E\u307F\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 1.025^(\u30EC\u30D9\u30EB \u2212 1))
\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 (\u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570${isMeteor ? " + \u81EA\u8EAB\u3078\u306E\u8FFD\u52A0\u304D\u306E\u307F\u6570" : ""}) + \u4ED6\u8005\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 \u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570 \xD7 4
\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "5\u5339\u7DE8\u6210\u6642\u306E\u81EA\u8EAB\u7528\u30FB\u4ED6\u8005\u7528\u306E\u500B\u6570\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: `\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 (\u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570${isMeteor ? " + \u81EA\u8EAB\u3078\u306E\u8FFD\u52A0\u304D\u306E\u307F\u6570" : ""}) \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63
burstBonus = \u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570 \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63
\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "5\u5339\u7DE8\u6210\u6642\u306E\u5024\u3092\u4F7F\u7528\u3057\u3001\u4ED6\u8005\u5206\u306E\u304D\u306E\u307F\u6570\u306F\u5225\u9014\u4FDD\u6301\u3057\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: `\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = (\u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 ${isMeteor ? "(\u30E9\u30C6\u30A3\u30A2\u30B9\u7DE8\u6210\u6642: \u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570\u3001\u305D\u308C\u4EE5\u5916: \u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570 + \u81EA\u8EAB\u3078\u306E\u8FFD\u52A0\u304D\u306E\u307F\u6570)" : "\u81EA\u8EAB\u3078\u306E\u304D\u306E\u307F\u6570"} + \u5B9F\u884C\u8005\u306E\u304D\u306E\u307F\u30A8\u30CA\u30B8\u30FC \xD7 \u4ED6\u8005\u3078\u306E\u304D\u306E\u307F\u6570 \xD7 \u30C1\u30FC\u30E0\u5185\u306E\u4ED6\u8005\u6570) \xD7 \u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8\u30A4\u30D9\u30F3\u30C8\u88DC\u6B63
\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F`,
        description: "5\u5339\u7DE8\u6210\u6642\u306E\u5024\u3092\u4F7F\u7528\u3057\u3001\u7DE8\u6210\u4E2D\u306E\u5404\u30DD\u30B1\u30E2\u30F3\u3092\u5B9F\u88C5\u3069\u304A\u308A\u5408\u7B97\u3057\u307E\u3059\u3002"
      }
    ],
    resultLabel: "\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => {
      const otherBerryEnergy = Math.max(
        values.otherBerryBaseEnergy + values.level - 1,
        values.otherBerryBaseEnergy * 1.025 ** (values.level - 1)
      );
      let result;
      if (mode === 3 /* SELECT */) {
        result = values.berryEnergy * (values.self + (isMeteor ? values.bonus : 0)) + otherBerryEnergy * values.other * 4;
      } else if (mode === 1 /* ABOUT */) {
        result = values.berryEnergy * (values.self + (isMeteor ? values.bonus : 0)) * values.eventRate;
      } else {
        const self = isMeteor && values.latiasInTeam ? values.self : values.self + (isMeteor ? values.bonus : 0);
        result = (values.berryEnergy * self + values.berryEnergy * values.other * values.otherCount) * values.eventRate;
      }
      return result * values.weight;
    }
  };
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/meteor-shower-skill.ts
var MeteorShowerSkill = class {
  static skillDefinitions;
  evaluate(context) {
    const { config, effect, executor, helpBoostCount, mode, pokemonList } = context;
    let energyPerSkill = 0;
    if (mode == 3 /* SELECT */) {
      const { self, other } = effect.team[helpBoostCount - 1];
      energyPerSkill = executor.berryEnergy * (self + effect.bonus) + Math.max(
        berry_default.map["\u30E4\u30C1\u30A7"].energy + executor.lv - 1,
        berry_default.map["\u30E4\u30C1\u30A7"].energy * 1.025 ** (executor.lv - 1)
      ) * other * 4;
    } else if (mode == 1 /* ABOUT */) {
      const { self, other } = effect.team.at(-1);
      energyPerSkill = executor.berryEnergy * (self + effect.bonus) * config.simulation.eventBonus.skill.berryBurst;
      executor.burstBonus = other * config.simulation.eventBonus.skill.berryBurst;
    } else {
      const { self, other } = effect.team[helpBoostCount - 1];
      const withLatias = pokemonList.some((x) => x.base.name == "\u30E9\u30C6\u30A3\u30A2\u30B9");
      for (const subPokemon of pokemonList) {
        energyPerSkill += executor.berryEnergy * (executor == subPokemon ? withLatias ? self : self + effect.bonus : other);
      }
      energyPerSkill *= config.simulation.eventBonus.skill.berryBurst;
    }
    return { energyPerSkill };
  }
};
MeteorShowerSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u308A\u3085\u3046\u305B\u3044\u3050\u3093(\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8)",
    effect: [
      {
        team: [
          { self: 12, other: 1 },
          { self: 14, other: 1 },
          { self: 18, other: 1 },
          { self: 18, other: 2 },
          { self: 20, other: 2 }
        ],
        bonus: 2
      },
      {
        team: [
          { self: 21, other: 1 },
          { self: 24, other: 1 },
          { self: 29, other: 1 },
          { self: 30, other: 2 },
          { self: 33, other: 2 }
        ],
        bonus: 4
      },
      {
        team: [
          { self: 29, other: 1 },
          { self: 29, other: 2 },
          { self: 35, other: 2 },
          { self: 37, other: 3 },
          { self: 41, other: 3 }
        ],
        bonus: 6
      },
      {
        team: [
          { self: 38, other: 1 },
          { self: 39, other: 2 },
          { self: 42, other: 3 },
          { self: 45, other: 4 },
          { self: 49, other: 4 }
        ],
        bonus: 8
      },
      {
        team: [
          { self: 43, other: 2 },
          { self: 44, other: 3 },
          { self: 48, other: 4 },
          { self: 49, other: 5 },
          { self: 53, other: 5 }
        ],
        bonus: 9
      },
      {
        team: [
          { self: 48, other: 3 },
          { self: 50, other: 4 },
          { self: 55, other: 4 },
          { self: 55, other: 5 },
          { self: 58, other: 5 }
        ],
        bonus: 10
      }
    ],
    team: true,
    category: "energy"
  })
];
var skillDefinitions15 = MeteorShowerSkill.skillDefinitions;
for (const definition of skillDefinitions15) {
  definition.specification = (level) => teamBerrySpecification(
    definition,
    definition.effect[level],
    "meteor"
  );
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/yubi-wo-furu-skill.ts
function specification10() {
  return {
    inputs: [
      {
        key: "targetEnergy",
        label: "\u62BD\u9078\u5148\u30B9\u30AD\u30EB\u306E\u8A55\u4FA1",
        defaultValue: 0,
        step: 0.1,
        unit: "\u30A8\u30CA\u30B8\u30FC"
      },
      { key: "targetWeight", label: "\u62BD\u9078\u5148\u306E\u91CD\u307F", defaultValue: 1, step: 0.1, unit: "\u500D" }
    ],
    modes: [3 /* SELECT */, 1 /* ABOUT */, 2 /* TEAM */].map(
      (id) => ({
        id,
        label: id === 3 /* SELECT */ ? "\u53B3\u9078\u8A08\u7B97\u6642" : id === 1 /* ABOUT */ ? "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642" : "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u62BD\u9078\u5BFE\u8C61\u306F\u3001\u3086\u3073\u3092\u3075\u308B\u3067\u767A\u52D5\u3067\u304D\u308B\u30B9\u30AD\u30EB\u306E\u4E00\u89A7\u3068\u3059\u308B\u3002\n\u5404\u62BD\u9078\u5148\u306E\u91CD\u307F = 1 \xF7 \u62BD\u9078\u5BFE\u8C61\u30B9\u30AD\u30EB\u6570\n\u5404\u62BD\u9078\u5148\u306E\u30B9\u30AD\u30EB\u52B9\u679C\u3068\u5171\u901A\u5F8C\u51E6\u7406\u3092\u305D\u306E\u307E\u307E\u8A08\u7B97\u3059\u308B\u3002\n\u671F\u5F85\u8A55\u4FA1 = \u03A3(\u62BD\u9078\u5148\u30B9\u30AD\u30EB\u306E\u8A55\u4FA1 \xD7 \u62BD\u9078\u5148\u306E\u91CD\u307F)",
        description: "\u62BD\u9078\u5148\u306E\u8A55\u4FA1\u3092\u5747\u7B49\u306A\u91CD\u307F\u3067\u5408\u7B97\u3057\u307E\u3059\u3002"
      })
    ),
    resultLabel: "\u62BD\u9078\u51481\u4EF6\u306E\u5BC4\u4E0E",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values) => values.targetEnergy * values.targetWeight
  };
}
var MetronomeSkill = class {
  static skillDefinitions;
};
MetronomeSkill.skillDefinitions = [
  new SkillDefinition({
    category: "etc",
    name: "\u3086\u3073\u3092\u3075\u308B",
    effect: [null, null, null, null, null, null, null],
    team: true,
    isMetronomeSkill: true,
    specification: () => specification10()
  })
];
var skillDefinitions16 = MetronomeSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/minus-skill.ts
function specification11(effect) {
  return {
    inputs: [
      fixedSpecificationInput("effect", "\u934B\u62E1\u5F35\u91CF", effect.main, "\u500B"),
      specificationInput("skillPerDay", "1\u65E5\u306E\u767A\u52D5\u56DE\u6570", 8, "\u56DE"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = 0\u3001\u934B\u306E\u62E1\u5F35\u91CF = \u934B\u62E1\u5F35\u91CF\n\u30D7\u30E9\u30B9\u307E\u305F\u306F\u30DE\u30A4\u30CA\u30B9\u304C2\u5339\u4EE5\u4E0A\u3044\u308B\u5834\u5408\u3001\u4ED6\u306E\u30DD\u30B1\u30E2\u30F3\u3078\u306E\u56DE\u5FA9\u91CF\u3082\u5171\u901A\u51E6\u7406\u3078\u6E21\u3059\u3002",
        description: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S\u3068\u540C\u3058\u934B\u62E1\u5F35\u51E6\u7406\u3092\u884C\u3044\u3001\u30DA\u30A2\u6761\u4EF6\u3092\u6E80\u305F\u3059\u5834\u5408\u306F\u56DE\u5FA9\u52B9\u679C\u3082\u52A0\u3048\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: "\u62E1\u5F35\u524D\u5F8C\u306E\u6700\u9069\u6599\u7406\u306E\u6700\u7D42\u30A8\u30CA\u30B8\u30FC\u5DEE\u3092\u52A0\u7B97",
        description: "\u934B\u30B5\u30A4\u30BA\u306E\u5DEE\u3092\u6599\u7406\u30A8\u30CA\u30B8\u30FC\u3078\u63DB\u7B97\u3057\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u934B\u306E\u62E1\u5F35\u91CF\u3092\u84C4\u7A4D\u3057\u3001\u5404\u6599\u7406\u6642\u523B\u3067\u934B\u30B5\u30A4\u30BA\u3078\u52A0\u7B97\u3059\u308B\u3002",
        description: "\u30B9\u30AD\u30EB\u5358\u4F53\u306E\u30A8\u30CA\u30B8\u30FC\u306F\u8FD4\u3057\u307E\u305B\u3093\u3002"
      }
    ],
    resultLabel: "\u934B\u62E1\u5F35\u306E\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: () => 0
  };
}
var MinusSkill = class {
  static skillDefinitions;
  evaluate({ effect }) {
    return { energyPerSkill: 0, cookingPowerUpEffect: effect.main };
  }
};
MinusSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u30DE\u30A4\u30CA\u30B9(\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S)",
    effect: [
      { main: 5, other: 8 / 5 },
      { main: 7, other: 10 / 5 },
      { main: 9, other: 13 / 5 },
      { main: 12, other: 17 / 5 },
      { main: 16, other: 23 / 5 },
      { main: 20, other: 30 / 5 },
      { main: 24, other: 35 / 5 }
    ],
    team: true,
    plusMinusPair: true,
    genki: true,
    category: "cooking",
    specification: (level) => specification11(MinusSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions17 = MinusSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/tsuki-no-inori-skill.ts
var MoonPrayerSkill = class {
  static skillDefinitions;
  evaluate(context) {
    const { config, effect, executor, helpBoostCount, mode, pokemonList } = context;
    let energyPerSkill = 0;
    if (mode == 3 /* SELECT */) {
      const { self, other } = effect.team[helpBoostCount - 1];
      energyPerSkill = executor.berryEnergy * self + Math.max(
        berry_default.map["\u30DE\u30B4"].energy + executor.lv - 1,
        berry_default.map["\u30DE\u30B4"].energy * 1.025 ** (executor.lv - 1)
      ) * other * 4;
    } else if (mode == 1 /* ABOUT */) {
      const { self, other } = effect.team.at(-1);
      energyPerSkill = executor.berryEnergy * self * config.simulation.eventBonus.skill.berryBurst;
      executor.burstBonus = other * config.simulation.eventBonus.skill.berryBurst;
    } else {
      const { self, other } = effect.team[helpBoostCount - 1];
      for (const subPokemon of pokemonList)
        energyPerSkill += executor.berryEnergy * (executor == subPokemon ? self : other);
      energyPerSkill *= config.simulation.eventBonus.skill.berryBurst;
    }
    return { energyPerSkill };
  }
};
MoonPrayerSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u307F\u304B\u3065\u304D\u306E\u3044\u306E\u308A(\u3052\u3093\u304D\u30AA\u30FC\u30EBS)",
    effect: [
      {
        team: [
          { self: 5, other: 1 },
          { self: 7, other: 1 },
          { self: 9, other: 1 },
          { self: 12, other: 1 },
          { self: 14, other: 2 }
        ],
        other: 3
      },
      {
        team: [
          { self: 9, other: 1 },
          { self: 12, other: 1 },
          { self: 15, other: 1 },
          { self: 16, other: 2 },
          { self: 19, other: 3 }
        ],
        other: 4
      },
      {
        team: [
          { self: 13, other: 1 },
          { self: 17, other: 1 },
          { self: 18, other: 2 },
          { self: 20, other: 3 },
          { self: 24, other: 4 }
        ],
        other: 5
      },
      {
        team: [
          { self: 17, other: 1 },
          { self: 19, other: 2 },
          { self: 25, other: 2 },
          { self: 28, other: 3 },
          { self: 29, other: 5 }
        ],
        other: 7
      },
      {
        team: [
          { self: 21, other: 1 },
          { self: 24, other: 2 },
          { self: 27, other: 3 },
          { self: 28, other: 5 },
          { self: 30, other: 7 }
        ],
        other: 9
      },
      {
        team: [
          { self: 25, other: 1 },
          { self: 29, other: 2 },
          { self: 30, other: 4 },
          { self: 31, other: 6 },
          { self: 32, other: 9 }
        ],
        other: 11
      }
    ],
    team: true,
    genki: true,
    category: "heal"
  })
];
var skillDefinitions18 = MoonPrayerSkill.skillDefinitions;
for (const definition of skillDefinitions18) {
  definition.specification = (level) => teamBerrySpecification(
    definition,
    definition.effect[level],
    "moon"
  );
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/nightmare-skill.ts
function specification12(effect) {
  return {
    inputs: [
      fixedSpecificationInput("effect", "\u56FA\u5B9A\u30A8\u30CA\u30B8\u30FC", effect, "\u30A8\u30CA\u30B8\u30FC"),
      specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: specificationModes(
      "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u56FA\u5B9A\u30A8\u30CA\u30B8\u30FC\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
      {}
    ),
    resultLabel: "\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values) => values.effect * values.weight
  };
}
var NightmareSkill = class {
  static skillDefinitions;
  evaluate({ effect }) {
    return { energyPerSkill: effect.energy };
  }
};
NightmareSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u30CA\u30A4\u30C8\u30E1\u30A2(\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M)",
    effect: [
      { energy: 2640, other: -12 },
      { energy: 3753, other: -12 },
      { energy: 5178, other: -12 },
      { energy: 7149, other: -12 },
      { energy: 9870, other: -12 },
      { energy: 13638, other: -12 },
      { energy: 18515, other: -12 }
    ],
    metronome: false,
    copyable: false,
    genki: true,
    category: "energy"
  })
];
var skillDefinitions19 = NightmareSkill.skillDefinitions;
for (const definition of skillDefinitions19) {
  definition.specification = (level) => specification12(definition.effect[level].energy);
}

// ../../../../tmp/pkreimer/src/models/simulation/skills/plus-skill.ts
var PlusSkill = class {
  static skillDefinitions;
  evaluate(context) {
    const { copy, effect, executor, foodEnergyMap, foodEnergyWeight, mode, pokemonList, weight } = context;
    const energyFood = Food.map[executor.foodList[0].name];
    const num = Math.round(effect.sub / energyFood.energy) + 6;
    let energyPerSkill = 0;
    if (mode == 3 /* SELECT */) {
      energyPerSkill = energyFood.energy * energyFood.bestRate * Cooking.maxRecipeBonus * num;
    } else if (mode == 1 /* ABOUT */ && foodEnergyWeight > 0) {
      executor[energyFood.name] = Number(executor[energyFood.name] ?? 0) + num * executor.skillPerDay * weight;
      energyPerSkill = foodEnergyMap[energyFood.name].max * num * foodEnergyWeight;
    } else if (mode == 2 /* TEAM */ && pokemonList.filter((x) => x.base.skill.plusMinusPair).length >= 2) {
      const getFood = Food.map[copy ? copy.foodList[0].name : executor.foodList[0].name];
      executor[getFood.name] = Number(executor[getFood.name] ?? 0) + num * executor.skillPerDay * weight;
    }
    return { energyPerSkill, foodGet: effect.main, foodGetList: Food.list };
  }
};
PlusSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u30D7\u30E9\u30B9(\u98DF\u6750\u30B2\u30C3\u30C8S)",
    effect: [
      { main: 5, sub: 0 },
      { main: 7, sub: 125 },
      { main: 9, sub: 300 },
      { main: 11, sub: 425 },
      { main: 13, sub: 600 },
      { main: 16, sub: 725 },
      { main: 18, sub: 850 }
    ],
    category: "food",
    plusMinusPair: true,
    specification: (level) => {
      const effect = PlusSkill.skillDefinitions[0].effect[level];
      const result = foodHandlerSpecification(effect.main, "plus");
      result.inputs.find((input3) => input3.key === "subEffect").defaultValue = effect.sub;
      return result;
    }
  })
];
var skillDefinitions20 = PlusSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/present-skill.ts
var PresentSkill = class {
  static skillDefinitions;
  evaluate({ config, effect, mode }) {
    return {
      energyPerSkill: mode == 3 /* SELECT */ ? config.selectEvaluate.energyPerCandy * 4 : 0,
      foodGet: effect,
      foodGetList: Food.list
    };
  }
};
PresentSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u30D7\u30EC\u30BC\u30F3\u30C8(\u98DF\u6750\u30B2\u30C3\u30C8S)",
    effect: [4, 6, 8, 10, 12, 15, 17],
    category: "food",
    specification: (level) => foodHandlerSpecification(PresentSkill.skillDefinitions[0].effect[level], "present")
  })
];
var skillDefinitions21 = PresentSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/psycho-break-skill.ts
function specification13(effect) {
  const baseInputs = [
    fixedSpecificationInput("effect", "\u56FA\u5B9A\u30A8\u30CA\u30B8\u30FC", effect.energy, "\u30A8\u30CA\u30B8\u30FC"),
    specificationInput("berryEnergy", "\u304D\u306E\u307F\u306E\u57FA\u790E\u30A8\u30CA\u30B8\u30FC", 100, "\u30A8\u30CA\u30B8\u30FC"),
    specificationInput("berryRate", "\u304D\u306E\u307F\u8A55\u4FA1\u500D\u7387", 100, "%"),
    specificationInput("level", "\u5B9F\u884C\u8005\u306E\u30EC\u30D9\u30EB", 1, "Lv"),
    specificationInput("top5Help", "\u4E0A\u4F4D5\u5339\u306E\u304A\u3066\u3064\u3060\u3044\u56DE\u6570\u5408\u8A08", 100, "\u56DE"),
    fixedSpecificationInput("zoneRate", "\u304D\u306E\u307F\u30BE\u30FC\u30F3\u500D\u7387", effect.zone, "\u500D"),
    specificationInput("dayRate", "\u65E5\u4ED8\u88DC\u6B63", 1, "\u500D"),
    specificationInput("weight", "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
  ];
  const boxFormula = "\u65E5\u4ED8\u88DC\u6B63 = day \u304C0\u4EE5\u4E0A\u306A\u3089 (6 \u2212 day) \xF7 2\u3001\u305D\u308C\u4EE5\u5916\u306F1.5\n\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = ((\u304D\u306E\u307F\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 \u304D\u306E\u307F\u8A55\u4FA1\u500D\u7387 \xF7 100 \xD7 1.025^(\u30EC\u30D9\u30EB \u2212 1) \xD7 \u4E0A\u4F4D5\u5339\u306E\u304A\u3066\u3064\u3060\u3044\u56DE\u6570\u5408\u8A08 \xD7 \u65E5\u4ED8\u88DC\u6B63 \xD7 \u304D\u306E\u307F\u30BE\u30FC\u30F3\u500D\u7387) \xF7 100) + \u56FA\u5B9A\u30A8\u30CA\u30B8\u30FC\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F";
  return {
    inputs: baseInputs,
    modes: [
      {
        id: 3 /* SELECT */,
        label: "\u53B3\u9078\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = ((\u304D\u306E\u307F\u57FA\u790E\u30A8\u30CA\u30B8\u30FC \xD7 2 \xD7 1.025^(\u30EC\u30D9\u30EB \u2212 1) \xD7 \u4E0A\u4F4D5\u5339\u306E\u304A\u3066\u3064\u3060\u3044\u56DE\u6570\u5408\u8A08 \xD7 21 \xF7 7) \xD7 \u304D\u306E\u307F\u30BE\u30FC\u30F3\u500D\u7387 \xF7 100) + \u56FA\u5B9A\u30A8\u30CA\u30B8\u30FC\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u540C\u3058\u304D\u306E\u307F\u3092\u6301\u3064\u5168\u30DD\u30B1\u30E2\u30F3\u304B\u3089\u3001\u8A08\u7B97\u3057\u305F\u304A\u3066\u3064\u3060\u3044\u56DE\u6570\u304C\u4E0A\u4F4D\u306E5\u5339\u3092\u9078\u3073\u307E\u3059\u3002"
      },
      {
        id: 1 /* ABOUT */,
        label: "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642",
        formula: boxFormula,
        description: "\u30DC\u30C3\u30AF\u30B9\u5185\u304B\u3089\u540C\u3058\u304D\u306E\u307F\u3092\u6301\u3064\u4E0A\u4F4D5\u5339\u3092\u9078\u3073\u307E\u3059\u3002"
      },
      {
        id: 2 /* TEAM */,
        label: "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: boxFormula,
        description: "\u30DC\u30C3\u30AF\u30B9\u5185\u304B\u3089\u540C\u3058\u304D\u306E\u307F\u3092\u6301\u3064\u4E0A\u4F4D5\u5339\u3092\u9078\u3073\u307E\u3059\u3002"
      }
    ],
    resultLabel: "\u304D\u306E\u307F\u30BE\u30FC\u30F3\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values, mode) => {
      const berryRate = mode === 3 /* SELECT */ ? 2 : values.berryRate / 100;
      const dayRate = mode === 3 /* SELECT */ ? 3 : values.dayRate;
      return (values.effect + values.berryEnergy * berryRate * 1.025 ** (values.level - 1) * values.top5Help * dayRate * values.zoneRate / 100) * values.weight;
    }
  };
}
var PsychoBreakSkill = class {
  static skillDefinitions;
  evaluate({
    boxPokemonList,
    config,
    effect,
    executor,
    mode
  }) {
    if (mode == 3 /* SELECT */) {
      const top52 = pokemon_default.list.filter((x) => x.berry.name == executor.base.berry.name).map(
        (x) => (x.specialty == "\u304D\u306E\u307F" || x.specialty == "\u30AA\u30FC\u30EB" ? 3 : 2) * 86400 / (x.help * 0.65 * (1 - (executor.lv - 1) * 2e-3)) / 0.45
      ).sort((a, b) => b - a).slice(0, 5).reduce((sum, num) => sum + num, 0);
      return {
        energyPerSkill: executor.base.berry.energy * 2 * 1.025 ** (executor.lv - 1) * top52 * 21 / 7 * effect.zone / 100 + effect.energy
      };
    }
    const dayRate = config.teamSimulation.day >= 0 ? (6 - config.teamSimulation.day) / 2 : 1.5;
    const top5 = boxPokemonList.filter((x) => pokemon_default.map[x.name]?.berry.name == executor.base.berry.name).map(
      (x) => (pokemon_default.map[x.name]?.specialty == "\u304D\u306E\u307F" || pokemon_default.map[x.name]?.specialty == "\u30AA\u30FC\u30EB" ? 3 : 2) * 86400 / (pokemon_default.map[x.name].help * 0.65 * (1 - (x.lv - 1) * 2e-3)) / 0.45
    ).sort((a, b) => b - a).slice(0, 5).reduce((sum, num) => sum + num, 0);
    return {
      energyPerSkill: executor.base.berry.energy * executor.berryRate / 100 * 1.025 ** (executor.lv - 1) * top5 * dayRate * effect.zone / 100 + effect.energy
    };
  }
};
PsychoBreakSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u30B5\u30A4\u30B3\u30D6\u30EC\u30A4\u30AF(\u304D\u306E\u307F\u30BE\u30FC\u30F3)",
    effect: [
      { energy: 1408, zone: 0.6 },
      { energy: 2002, zone: 0.8 },
      { energy: 2762, zone: 1 },
      { energy: 3813, zone: 1.2 },
      { energy: 5264, zone: 1.6 },
      { energy: 7274, zone: 2 }
    ],
    metronome: false,
    copyable: false,
    category: "energy",
    specification: (level) => specification13(PsychoBreakSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions22 = PsychoBreakSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/yume-no-kakera-get-skill.ts
var BaseShardGetSkill = class {
  evaluate({ effect, executor, weight }) {
    executor.shard += effect * executor.skillPerDay * weight;
    return { energyPerSkill: 0 };
  }
};
function specification14(effect) {
  return {
    inputs: [
      fixedSpecificationInput("effect", "\u30B9\u30AD\u30EB\u52B9\u679C\u91CF", effect, "\u304B\u3051\u3089"),
      specificationInput("skillPerDay", "1\u65E5\u306E\u767A\u52D5\u56DE\u6570", 8, "\u56DE"),
      specificationInput("weight", "\u62BD\u9078\u306E\u91CD\u307F", 1, "\u500D")
    ],
    modes: specificationModes("\u3086\u3081\u306E\u304B\u3051\u3089 = \u30B9\u30AD\u30EB\u52B9\u679C\u91CF \xD7 1\u65E5\u306E\u767A\u52D5\u56DE\u6570 \xD7 \u62BD\u9078\u306E\u91CD\u307F"),
    resultLabel: "\u7372\u5F97\u3086\u3081\u306E\u304B\u3051\u3089",
    resultUnit: "\u304B\u3051\u3089/\u65E5",
    calculate: (values) => values.effect * values.skillPerDay * values.weight
  };
}
var ShardGetSkill = class _ShardGetSkill extends BaseShardGetSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S",
      effect: [240, 340, 480, 670, 920, 1260, 1800, 2500],
      shard: true,
      category: "shard",
      specification: (level) => specification14(_ShardGetSkill.skillDefinitions[0].effect[level])
    })
  ];
};
var RandomShardGetSkill = class _RandomShardGetSkill extends BaseShardGetSkill {
  static skillDefinitions = [
    new SkillDefinition({
      name: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S(\u30E9\u30F3\u30C0\u30E0)",
      effect: [300, 425, 600, 837.5, 1150, 1575, 2250, 2875],
      shard: true,
      category: "shard",
      specification: (level) => specification14(_RandomShardGetSkill.skillDefinitions[0].effect[level])
    })
  ];
};
var skillDefinitions23 = [
  ...ShardGetSkill.skillDefinitions,
  ...RandomShardGetSkill.skillDefinitions
];

// ../../../../tmp/pkreimer/src/models/simulation/skills/takuwaeru-skill.ts
function specification15(effect) {
  return {
    inputs: [
      {
        key: "base",
        label: "\u57FA\u672C\u30A8\u30CA\u30B8\u30FC",
        defaultValue: effect.base,
        step: 0.1,
        unit: "\u30A8\u30CA\u30B8\u30FC",
        editable: false
      },
      {
        key: "expect",
        label: "\u901A\u5E38\u6642\u306E\u671F\u5F85\u30A8\u30CA\u30B8\u30FC",
        defaultValue: effect.expect,
        step: 0.1,
        unit: "\u30A8\u30CA\u30B8\u30FC",
        editable: false
      },
      {
        key: "copyOrMetronome",
        label: "\u30B3\u30D4\u30FC\u307E\u305F\u306F\u3086\u3073\u3092\u3075\u308B\u6642",
        defaultValue: 0,
        step: 0.1,
        unit: "\uFF081: \u306F\u3044\uFF09"
      },
      { key: "weight", label: "\u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F", defaultValue: 1, step: 0.1, unit: "\u500D" }
    ],
    modes: [3 /* SELECT */, 1 /* ABOUT */, 2 /* TEAM */].map(
      (id) => ({
        id,
        label: id === 3 /* SELECT */ ? "\u53B3\u9078\u8A08\u7B97\u6642" : id === 1 /* ABOUT */ ? "\u30DC\u30C3\u30AF\u30B9\u8A08\u7B97\u6642" : "\u30C1\u30FC\u30E0\u8A08\u7B97\u6642",
        formula: "\u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 = \u30B3\u30D4\u30FC\u4E2D \u307E\u305F\u306F \u5143\u30B9\u30AD\u30EB\u304C\u3086\u3073\u3092\u3075\u308B \u306A\u3089 \u57FA\u672C\u30A8\u30CA\u30B8\u30FC\u3001\u305D\u308C\u4EE5\u5916\u306F\u901A\u5E38\u6642\u306E\u671F\u5F85\u30A8\u30CA\u30B8\u30FC\n\u6700\u7D42\u8A55\u4FA1 = \u30B9\u30AD\u30EB\u306E\u57FA\u672C\u8A55\u4FA1 \xD7 \u6700\u7D42\u62BD\u9078\u306E\u91CD\u307F",
        description: "\u30B3\u30D4\u30FC\u30FB\u30E1\u30C8\u30ED\u30CE\u30FC\u30E0\u6642\u3060\u3051\u57FA\u672C\u5024\u3092\u4F7F\u7528\u3057\u307E\u3059\u3002"
      })
    ),
    resultLabel: "\u30B9\u30AD\u30EB\u8A55\u4FA1",
    resultUnit: "\u30A8\u30CA\u30B8\u30FC/\u56DE",
    calculate: (values) => (values.copyOrMetronome ? values.base : values.expect) * values.weight
  };
}
var StockpileSkill = class {
  static skillDefinitions;
  evaluate({ copy, effect, fromMetronome }) {
    return {
      energyPerSkill: copy || fromMetronome ? effect.base : effect.expect
    };
  }
};
StockpileSkill.skillDefinitions = [
  new SkillDefinition({
    name: "\u305F\u304F\u308F\u3048\u308B(\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S)",
    effect: [
      { base: 600, expect: 587 },
      { base: 853, expect: 834 },
      { base: 1177, expect: 1151 },
      { base: 1625, expect: 1590 },
      { base: 2243, expect: 2194 },
      { base: 3099, expect: 3031 },
      { base: 4502, expect: 4404 }
    ],
    metronome: false,
    energyOnly: true,
    category: "energy",
    specification: (level) => specification15(StockpileSkill.skillDefinitions[0].effect[level])
  })
];
var skillDefinitions24 = StockpileSkill.skillDefinitions;

// ../../../../tmp/pkreimer/src/models/simulation/skills/skill-list.ts
var skillCategoryList = [
  { id: "energy", name: "\u30A8\u30CA\u30B8\u30FC" },
  { id: "food", name: "\u98DF\u6750" },
  { id: "cooking", name: "\u6599\u7406" },
  { id: "support", name: "\u30B5\u30DD\u30FC\u30C8" },
  { id: "heal", name: "\u30D2\u30FC\u30E9\u30FC" },
  { id: "shard", name: "\u3086\u3081\u306E\u304B\u3051\u3089" },
  { id: "etc", name: "\u305D\u306E\u4ED6" }
];
var skillList = [
  ...skillDefinitions,
  ...skillDefinitions2,
  ...skillDefinitions3,
  ...skillDefinitions4,
  ...skillDefinitions5,
  ...skillDefinitions6,
  ...skillDefinitions7,
  ...skillDefinitions8,
  ...skillDefinitions9,
  ...skillDefinitions10,
  ...skillDefinitions11,
  ...skillDefinitions12,
  ...skillDefinitions13,
  ...skillDefinitions14,
  ...skillDefinitions15,
  ...skillDefinitions16,
  ...skillDefinitions17,
  ...skillDefinitions18,
  ...skillDefinitions19,
  ...skillDefinitions20,
  ...skillDefinitions21,
  ...skillDefinitions22,
  ...skillDefinitions23,
  ...skillDefinitions24
];

// ../../../../tmp/pkreimer/src/data/skill.ts
var Skill = class _Skill {
  static list = skillList;
  static map = _Skill.list.reduce(
    (a, x) => (a[x.name] = x, a),
    {}
  );
  static categoryList = skillCategoryList.map((category) => ({
    ...category,
    skillList: _Skill.list.filter((skill) => skill.category === category.id)
  })).filter((category) => category.skillList.length);
  static metronomeTarget = _Skill.list.filter(
    (x) => x.name != "\u3086\u3073\u3092\u3075\u308B" && x.metronome !== false
  );
  static metronomeWeightList = _Skill.metronomeTarget.map((x) => ({
    skill: x,
    weight: 1 / _Skill.metronomeTarget.length
  }));
  static metronomeNonTeamTarget = _Skill.metronomeTarget.filter((x) => !x.team);
  static metronomeTeamTarget = _Skill.metronomeTarget.filter((x) => x.team);
  static genkiSkillList = _Skill.list.filter((x) => x.genki);
};
Skill.map["\u3078\u3093\u3057\u3093(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)"].evaluateEnergy = Skill.map["\u3078\u3093\u3057\u3093(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)"].effect.map(
  (_, i) => Skill.map["\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M"].effect[i]
);
Skill.map["\u3082\u306E\u307E\u306D(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)"].evaluateEnergy = Skill.map["\u3082\u306E\u307E\u306D(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)"].effect.map(
  (_, i) => Skill.map["\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M"].effect[i]
);
Skill.map["\u307B\u3063\u307A\u3059\u308A\u3059\u308A(\u3052\u3093\u304D\u30A8\u30FC\u30EBS)"].evaluateEnergy = Skill.map["\u307B\u3063\u307A\u3059\u308A\u3059\u308A(\u3052\u3093\u304D\u30A8\u30FC\u30EBS)"].effect.map(
  (_, i) => Math.round(Skill.map["\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M"].effect.at(-1) * (1 - (1 - 0.15) ** (i + 2)))
);
var skill_default = Skill;

// ../../../../tmp/pkreimer/src/data/pokemon.ts
var Pokemon = class _Pokemon {
  static list = [
    { name: "\u30D5\u30B7\u30AE\u30C0\u30CD", no: 1, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 4400, bag: 11, foodRate: 0.257, skillRate: 0.019, legend: false, kaihou: false, exp: 1, candyName: "\u30D5\u30B7\u30AE\u30C0\u30CD", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D5\u30B7\u30AE\u30BD\u30A6", no: 2, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3300, bag: 19, foodRate: 0.255, skillRate: 0.019, legend: false, kaihou: false, exp: 1, candyName: "\u30D5\u30B7\u30AE\u30C0\u30CD", evolve: { before: "\u30D5\u30B7\u30AE\u30C0\u30CD", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30D5\u30B7\u30AE\u30D0\u30CA", no: 3, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2800, bag: 27, foodRate: 0.266, skillRate: 0.021, legend: false, kaihou: false, exp: 1, candyName: "\u30D5\u30B7\u30AE\u30C0\u30CD", evolve: { before: "\u30D5\u30B7\u30AE\u30BD\u30A6", lv: 24, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30D2\u30C8\u30AB\u30B2", no: 4, specialty: "\u98DF\u6750", berry: "\u30D2\u30E1\u30EA", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3500, bag: 12, foodRate: 0.201, skillRate: 0.011, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30C8\u30AB\u30B2", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30EA\u30B6\u30FC\u30C9", no: 5, specialty: "\u98DF\u6750", berry: "\u30D2\u30E1\u30EA", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3e3, bag: 20, foodRate: 0.227, skillRate: 0.016, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30C8\u30AB\u30B2", evolve: { before: "\u30D2\u30C8\u30AB\u30B2", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30EA\u30B6\u30FC\u30C9\u30F3", no: 6, specialty: "\u98DF\u6750", berry: "\u30D2\u30E1\u30EA", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2400, bag: 29, foodRate: 0.224, skillRate: 0.016, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30C8\u30AB\u30B2", evolve: { before: "\u30EA\u30B6\u30FC\u30C9", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30BC\u30CB\u30AC\u30E1", no: 7, specialty: "\u98DF\u6750", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 4500, bag: 10, foodRate: 0.271, skillRate: 0.02, legend: false, kaihou: false, exp: 1, candyName: "\u30BC\u30CB\u30AC\u30E1", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30AB\u30E1\u30FC\u30EB", no: 8, specialty: "\u98DF\u6750", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3400, bag: 19, foodRate: 0.271, skillRate: 0.02, legend: false, kaihou: false, exp: 1, candyName: "\u30BC\u30CB\u30AC\u30E1", evolve: { before: "\u30BC\u30CB\u30AC\u30E1", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30AB\u30E1\u30C3\u30AF\u30B9", no: 9, specialty: "\u98DF\u6750", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2800, bag: 27, foodRate: 0.275, skillRate: 0.021, legend: false, kaihou: false, exp: 1, candyName: "\u30BC\u30CB\u30AC\u30E1", evolve: { before: "\u30AB\u30E1\u30FC\u30EB", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30AD\u30E3\u30BF\u30D4\u30FC", no: 10, specialty: "\u304D\u306E\u307F", berry: "\u30E9\u30E0", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 4400, bag: 11, foodRate: 0.179, skillRate: 8e-3, legend: false, kaihou: false, exp: 1, candyName: "\u30AD\u30E3\u30BF\u30D4\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30C8\u30E9\u30F3\u30BB\u30EB", no: 11, specialty: "\u304D\u306E\u307F", berry: "\u30E9\u30E0", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 4200, bag: 18, foodRate: 0.208, skillRate: 0.018, legend: false, kaihou: false, exp: 1, candyName: "\u30AD\u30E3\u30BF\u30D4\u30FC", evolve: { before: "\u30AD\u30E3\u30BF\u30D4\u30FC", lv: 5, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 7 },
    { name: "\u30D0\u30BF\u30D5\u30EA\u30FC", no: 12, specialty: "\u304D\u306E\u307F", berry: "\u30E9\u30E0", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2500, bag: 31, foodRate: 0.197, skillRate: 0.014, legend: false, kaihou: false, exp: 1, candyName: "\u30AD\u30E3\u30BF\u30D4\u30FC", evolve: { before: "\u30C8\u30E9\u30F3\u30BB\u30EB", lv: 8, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 15 },
    { name: "\u30B3\u30E9\u30C3\u30BF", no: 19, specialty: "\u304D\u306E\u307F", berry: "\u30AD\u30FC", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4900, bag: 10, foodRate: 0.237, skillRate: 0.03, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30E9\u30C3\u30BF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30E9\u30C3\u30BF", no: 20, specialty: "\u304D\u306E\u307F", berry: "\u30AD\u30FC", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2950, bag: 21, foodRate: 0.237, skillRate: 0.03, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30E9\u30C3\u30BF", evolve: { before: "\u30B3\u30E9\u30C3\u30BF", lv: 15, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30A2\u30FC\u30DC", no: 23, specialty: "\u304D\u306E\u307F", berry: "\u30AB\u30B4", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 5e3, bag: 10, foodRate: 0.235, skillRate: 0.033, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30FC\u30DC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30A2\u30FC\u30DC\u30C3\u30AF", no: 24, specialty: "\u304D\u306E\u307F", berry: "\u30AB\u30B4", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3400, bag: 19, foodRate: 0.264, skillRate: 0.057, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30FC\u30DC", evolve: { before: "\u30A2\u30FC\u30DC", lv: 17, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30D4\u30AB\u30C1\u30E5\u30A6", no: 25, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 2700, bag: 22, foodRate: 0.207, skillRate: 0.021, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30AB\u30C1\u30E5\u30A6", evolve: { before: "\u30D4\u30C1\u30E5\u30FC", lv: null, candy: 20, itemList: "", sleep: 50 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 7 },
    { name: "\u30D4\u30AB\u30C1\u30E5\u30A6(\u30CF\u30ED\u30A6\u30A3\u30F3)", no: 25, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2500, bag: 18, foodRate: 0.218, skillRate: 0.028, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30AB\u30C1\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 7 },
    { name: "\u30D4\u30AB\u30C1\u30E5\u30A6(\u30DB\u30EA\u30C7\u30FC)", no: 25, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S", help: 2500, bag: 20, foodRate: 0.131, skillRate: 0.042, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30AB\u30C1\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 7 },
    { name: "\u30D4\u30AB\u30C1\u30E5\u30A6(\u30AD\u30E3\u30D7\u30C6\u30F3)", no: 25, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2500, bag: 21, foodRate: 0.175, skillRate: 0.018, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30AB\u30C1\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 7 },
    { name: "\u30E9\u30A4\u30C1\u30E5\u30A6", no: 26, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 2200, bag: 31, foodRate: 0.224, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30AB\u30C1\u30E5\u30A6", evolve: { before: "\u30D4\u30AB\u30C1\u30E5\u30A6", lv: null, candy: 80, itemList: "\u304B\u307F\u306A\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 18 },
    { name: "\u30B5\u30F3\u30C9", no: 27, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D5\u30A3\u30E9", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S", help: 5300, bag: 11, foodRate: 0.1, skillRate: 0.046, legend: false, kaihou: false, exp: 1, candyName: "\u30B5\u30F3\u30C9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30B5\u30F3\u30C9\u30D1\u30F3", no: 28, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D5\u30A3\u30E9", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S", help: 2800, bag: 17, foodRate: 0.108, skillRate: 0.043, legend: false, kaihou: false, exp: 1, candyName: "\u30B5\u30F3\u30C9\u30D1\u30F3", evolve: { before: "\u30B5\u30F3\u30C9", lv: 17, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30D4\u30C3\u30D4", no: 35, specialty: "\u304D\u306E\u307F", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u307E\u3044\u30DF\u30C4", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u3086\u3073\u3092\u3075\u308B", help: 4e3, bag: 21, foodRate: 0.168, skillRate: 0.036, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30C3\u30D4", evolve: { before: "\u30D4\u30A3", lv: null, candy: 20, itemList: "", sleep: 50 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 7 },
    { name: "\u30D4\u30AF\u30B7\u30FC", no: 36, specialty: "\u304D\u306E\u307F", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u307E\u3044\u30DF\u30C4", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u3086\u3073\u3092\u3075\u308B", help: 2800, bag: 34, foodRate: 0.168, skillRate: 0.04, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30C3\u30D4", evolve: { before: "\u30D4\u30C3\u30D4", lv: null, candy: 80, itemList: "\u3064\u304D\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30ED\u30B3\u30F3", no: 37, specialty: "\u304D\u306E\u307F", berry: "\u30D2\u30E1\u30EA", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 4700, bag: 13, foodRate: 0.168, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30ED\u30B3\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30ED\u30B3\u30F3(\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F)", no: 37, specialty: "\u304D\u306E\u307F", berry: "\u30C1\u30FC\u30B4", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 5600, bag: 10, foodRate: 0.23, skillRate: 0.028, legend: false, kaihou: false, exp: 1, candyName: "\u30ED\u30B3\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30AD\u30E5\u30A6\u30B3\u30F3", no: 38, specialty: "\u304D\u306E\u307F", berry: "\u30D2\u30E1\u30EA", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 2600, bag: 28, foodRate: 0.164, skillRate: 0.029, legend: false, kaihou: false, exp: 1, candyName: "\u30ED\u30B3\u30F3", evolve: { before: "\u30ED\u30B3\u30F3", lv: null, candy: 80, itemList: "\u307B\u306E\u304A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30AD\u30E5\u30A6\u30B3\u30F3(\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F)", no: 38, specialty: "\u304D\u306E\u307F", berry: "\u30C1\u30FC\u30B4", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 2900, bag: 25, foodRate: 0.232, skillRate: 0.028, legend: false, kaihou: false, exp: 1, candyName: "\u30ED\u30B3\u30F3", evolve: { before: "\u30ED\u30B3\u30F3(\u30A2\u30ED\u30FC\u30E9\u306E\u3059\u304C\u305F)", lv: null, candy: 80, itemList: "\u3053\u304A\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30D7\u30EA\u30F3", no: 39, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 3900, bag: 14, foodRate: 0.182, skillRate: 0.043, legend: false, kaihou: false, exp: 1, candyName: "\u30D7\u30EA\u30F3", evolve: { before: "\u30D7\u30D7\u30EA\u30F3", lv: null, candy: 20, itemList: "", sleep: 50 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 7 },
    { name: "\u30D7\u30AF\u30EA\u30F3", no: 40, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 2750, bag: 32, foodRate: 0.191, skillRate: 0.04, legend: false, kaihou: false, exp: 1, candyName: "\u30D7\u30EA\u30F3", evolve: { before: "\u30D7\u30EA\u30F3", lv: null, candy: 80, itemList: "\u3064\u304D\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 16 },
    { name: "\u30C7\u30A3\u30B0\u30C0", no: 50, specialty: "\u98DF\u6750", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 4300, bag: 10, foodRate: 0.192, skillRate: 0.021, legend: false, kaihou: false, exp: 1, candyName: "\u30C7\u30A3\u30B0\u30C0", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30C0\u30B0\u30C8\u30EA\u30AA", no: 51, specialty: "\u98DF\u6750", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 2650, bag: 21, foodRate: 0.19, skillRate: 0.02, legend: false, kaihou: false, exp: 1, candyName: "\u30C7\u30A3\u30B0\u30C0", evolve: { before: "\u30C7\u30A3\u30B0\u30C0", lv: 20, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30CB\u30E3\u30FC\u30B9", no: 52, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AD\u30FC", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S", help: 4400, bag: 9, foodRate: 0.163, skillRate: 0.042, legend: false, kaihou: false, exp: 1, candyName: "\u30CB\u30E3\u30FC\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30DA\u30EB\u30B7\u30A2\u30F3", no: 53, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AD\u30FC", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S", help: 2800, bag: 17, foodRate: 0.169, skillRate: 0.044, legend: false, kaihou: false, exp: 1, candyName: "\u30CB\u30E3\u30FC\u30B9", evolve: { before: "\u30CB\u30E3\u30FC\u30B9", lv: 21, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30B3\u30C0\u30C3\u30AF", no: 54, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 5400, bag: 8, foodRate: 0.136, skillRate: 0.126, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30C0\u30C3\u30AF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30B4\u30EB\u30C0\u30C3\u30AF", no: 55, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3400, bag: 19, foodRate: 0.162, skillRate: 0.125, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30C0\u30C3\u30AF", evolve: { before: "\u30B3\u30C0\u30C3\u30AF", lv: 25, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30DE\u30F3\u30AD\u30FC", no: 56, specialty: "\u304D\u306E\u307F", berry: "\u30AF\u30E9\u30DC", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 4200, bag: 12, foodRate: 0.197, skillRate: 0.022, legend: false, kaihou: false, exp: 1, candyName: "\u30DE\u30F3\u30AD\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30AA\u30B3\u30EA\u30B6\u30EB", no: 57, specialty: "\u304D\u306E\u307F", berry: "\u30AF\u30E9\u30DC", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2800, bag: 22, foodRate: 0.2, skillRate: 0.024, legend: false, kaihou: false, exp: 1, candyName: "\u30DE\u30F3\u30AD\u30FC", evolve: { before: "\u30DE\u30F3\u30AD\u30FC", lv: 21, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30AC\u30FC\u30C7\u30A3", no: 58, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 4300, bag: 8, foodRate: 0.138, skillRate: 0.05, legend: false, kaihou: false, exp: 1, candyName: "\u30AC\u30FC\u30C7\u30A3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30A6\u30A4\u30F3\u30C7\u30A3", no: 59, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 2500, bag: 21, foodRate: 0.136, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30AC\u30FC\u30C7\u30A3", evolve: { before: "\u30AC\u30FC\u30C7\u30A3", lv: null, candy: 80, itemList: "\u307B\u306E\u304A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30DE\u30C0\u30C4\u30DC\u30DF", no: 69, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 5200, bag: 8, foodRate: 0.233, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30DE\u30C0\u30C4\u30DC\u30DF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30A6\u30C4\u30C9\u30F3", no: 70, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3800, bag: 17, foodRate: 0.235, skillRate: 0.04, legend: false, kaihou: false, exp: 1, candyName: "\u30DE\u30C0\u30C4\u30DC\u30DF", evolve: { before: "\u30DE\u30C0\u30C4\u30DC\u30DF", lv: 16, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30A6\u30C4\u30DC\u30C3\u30C8", no: 71, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2800, bag: 27, foodRate: 0.233, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30DE\u30C0\u30C4\u30DC\u30DF", evolve: { before: "\u30A6\u30C4\u30C9\u30F3", lv: null, candy: 80, itemList: "\u30EA\u30FC\u30D5\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30A4\u30B7\u30C4\u30D6\u30C6", no: 74, specialty: "\u98DF\u6750", berry: "\u30AA\u30DC\u30F3", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 5700, bag: 9, foodRate: 0.281, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30B7\u30C4\u30D6\u30C6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30B4\u30ED\u30FC\u30F3", no: 75, specialty: "\u98DF\u6750", berry: "\u30AA\u30DC\u30F3", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 4e3, bag: 17, foodRate: 0.272, skillRate: 0.048, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30B7\u30C4\u30D6\u30C6", evolve: { before: "\u30A4\u30B7\u30C4\u30D6\u30C6", lv: 19, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30B4\u30ED\u30FC\u30CB\u30E3", no: 76, specialty: "\u98DF\u6750", berry: "\u30AA\u30DC\u30F3", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3100, bag: 26, foodRate: 0.28, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30B7\u30C4\u30D6\u30C6", evolve: { before: "\u30B4\u30ED\u30FC\u30F3", lv: null, candy: 80, itemList: "\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }], fp: 22 },
    { name: "\u30E4\u30C9\u30F3", no: 79, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 5700, bag: 9, foodRate: 0.151, skillRate: 0.078, legend: false, kaihou: false, exp: 1, candyName: "\u30E4\u30C9\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30E4\u30C9\u30E9\u30F3", no: 80, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 3800, bag: 21, foodRate: 0.197, skillRate: 0.08, legend: false, kaihou: false, exp: 1, candyName: "\u30E4\u30C9\u30F3", evolve: { before: "\u30E4\u30C9\u30F3", lv: 28, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30B3\u30A4\u30EB", no: 81, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 5800, bag: 8, foodRate: 0.182, skillRate: 0.064, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30A4\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30EC\u30A2\u30B3\u30A4\u30EB", no: 82, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 4e3, bag: 16, foodRate: 0.182, skillRate: 0.063, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30A4\u30EB", evolve: { before: "\u30B3\u30A4\u30EB", lv: 23, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30AB\u30E2\u30CD\u30AE", no: 83, specialty: "\u98DF\u6750", berry: "\u30B7\u30FC\u30E4", foodList: ["\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3e3, bag: 18, foodRate: 0.16, skillRate: 0.043, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30E2\u30CD\u30AE", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 16 },
    { name: "\u30C9\u30FC\u30C9\u30FC", no: 84, specialty: "\u304D\u306E\u307F", berry: "\u30B7\u30FC\u30E4", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3800, bag: 13, foodRate: 0.184, skillRate: 0.02, legend: false, kaihou: false, exp: 1, candyName: "\u30C9\u30FC\u30C9\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30C9\u30FC\u30C9\u30EA\u30AA", no: 85, specialty: "\u304D\u306E\u307F", berry: "\u30B7\u30FC\u30E4", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2300, bag: 26, foodRate: 0.184, skillRate: 0.02, legend: false, kaihou: false, exp: 1, candyName: "\u30C9\u30FC\u30C9\u30FC", evolve: { before: "\u30C9\u30FC\u30C9\u30FC", lv: 23, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30B4\u30FC\u30B9", no: 92, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3800, bag: 10, foodRate: 0.144, skillRate: 0.015, legend: false, kaihou: false, exp: 1, candyName: "\u30B4\u30FC\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30B4\u30FC\u30B9\u30C8", no: 93, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3e3, bag: 19, foodRate: 0.157, skillRate: 0.022, legend: false, kaihou: false, exp: 1, candyName: "\u30B4\u30FC\u30B9", evolve: { before: "\u30B4\u30FC\u30B9", lv: 19, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30B2\u30F3\u30AC\u30FC", no: 94, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2200, bag: 28, foodRate: 0.166, skillRate: 0.024, legend: false, kaihou: false, exp: 1, candyName: "\u30B4\u30FC\u30B9", evolve: { before: "\u30B4\u30FC\u30B9\u30C8", lv: null, candy: 80, itemList: "\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }], fp: 22 },
    { name: "\u30A4\u30EF\u30FC\u30AF", no: 95, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30DC\u30F3", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3100, bag: 22, foodRate: 0.132, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30EF\u30FC\u30AF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 16 },
    { name: "\u30AB\u30E9\u30AB\u30E9", no: 104, specialty: "\u304D\u306E\u307F", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4800, bag: 10, foodRate: 0.223, skillRate: 0.044, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30E9\u30AB\u30E9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30AC\u30E9\u30AC\u30E9", no: 105, specialty: "\u304D\u306E\u307F", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3300, bag: 20, foodRate: 0.225, skillRate: 0.045, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30E9\u30AB\u30E9", evolve: { before: "\u30AB\u30E9\u30AB\u30E9", lv: 21, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30E9\u30C3\u30AD\u30FC", no: 113, specialty: "\u98DF\u6750", berry: "\u30AD\u30FC", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 3300, bag: 20, foodRate: 0.236, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30E9\u30C3\u30AD\u30FC", evolve: { before: "\u30D4\u30F3\u30D7\u30AF", lv: null, candy: 80, itemList: "\u307E\u3093\u307E\u308B\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 16 },
    { name: "\u30AC\u30EB\u30FC\u30E9", no: 115, specialty: "\u98DF\u6750", berry: "\u30AD\u30FC", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2650, bag: 21, foodRate: 0.222, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30AC\u30EB\u30FC\u30E9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 16 },
    { name: "\u30D0\u30EA\u30E4\u30FC\u30C9", no: 122, specialty: "\u98DF\u6750", berry: "\u30DE\u30B4", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3082\u306E\u307E\u306D(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)", help: 2800, bag: 22, foodRate: 0.216, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30EA\u30E4\u30FC\u30C9", evolve: { before: "\u30DE\u30CD\u30CD", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30AB\u30A4\u30ED\u30B9", no: 127, specialty: "\u98DF\u6750", berry: "\u30E9\u30E0", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2400, bag: 24, foodRate: 0.216, skillRate: 0.031, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30A4\u30ED\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30E1\u30BF\u30E2\u30F3", no: 132, specialty: "\u98DF\u6750", berry: "\u30AD\u30FC", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u3078\u3093\u3057\u3093(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)", help: 3500, bag: 17, foodRate: 0.201, skillRate: 0.036, legend: false, kaihou: false, exp: 1, candyName: "\u30E1\u30BF\u30E2\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 16 },
    { name: "\u30A4\u30FC\u30D6\u30A4", no: 133, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AD\u30FC", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3700, bag: 12, foodRate: 0.192, skillRate: 0.055, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30A4\u30FC\u30D6\u30A4(\u30DB\u30EA\u30C7\u30FC)", no: 133, specialty: "\u304D\u306E\u307F", berry: "\u30AD\u30FC", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S", help: 3100, bag: 20, foodRate: 0.156, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 5 },
    { name: "\u30A4\u30FC\u30D6\u30A4(\u30CF\u30ED\u30A6\u30A3\u30F3)", no: 133, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AD\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3200, bag: 18, foodRate: 0.12, skillRate: 0.046, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 5 },
    { name: "\u30B7\u30E3\u30EF\u30FC\u30BA", no: 134, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3100, bag: 18, foodRate: 0.212, skillRate: 0.061, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "\u307F\u305A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30B5\u30F3\u30C0\u30FC\u30B9", no: 135, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 2200, bag: 22, foodRate: 0.151, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "\u304B\u307F\u306A\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30D6\u30FC\u30B9\u30BF\u30FC", no: 136, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D2\u30E1\u30EA", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 2700, bag: 19, foodRate: 0.185, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "\u307B\u306E\u304A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30DF\u30CB\u30EA\u30E5\u30A6", no: 147, specialty: "\u98DF\u6750", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 5e3, bag: 9, foodRate: 0.25, skillRate: 0.02, legend: false, kaihou: false, exp: 1.5, candyName: "\u30DF\u30CB\u30EA\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30CF\u30AF\u30EA\u30E5\u30FC", no: 148, specialty: "\u98DF\u6750", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3800, bag: 17, foodRate: 0.262, skillRate: 0.025, legend: false, kaihou: false, exp: 1.5, candyName: "\u30DF\u30CB\u30EA\u30E5\u30A6", evolve: { before: "\u30DF\u30CB\u30EA\u30E5\u30A6", lv: 23, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30AB\u30A4\u30EA\u30E5\u30FC", no: 149, specialty: "\u98DF\u6750", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2600, bag: 30, foodRate: 0.264, skillRate: 0.026, legend: false, kaihou: false, exp: 1.5, candyName: "\u30DF\u30CB\u30EA\u30E5\u30A6", evolve: { before: "\u30CF\u30AF\u30EA\u30E5\u30FC", lv: 41, candy: 100, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 25 },
    { name: "\u30DF\u30E5\u30A6\u30C4\u30FC", no: 150, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30B5\u30A4\u30B3\u30D6\u30EC\u30A4\u30AF(\u304D\u306E\u307F\u30BE\u30FC\u30F3)", help: 2300, bag: 24, foodRate: 0.16, skillRate: 0.029, legend: true, kaihou: false, exp: 2.2, candyName: "\u30DF\u30E5\u30A6\u30C4\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 30 },
    { name: "\u30DF\u30E5\u30A6(\u3086\u3073\u3092\u3075\u308B)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u3086\u3073\u3092\u3075\u308B", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.08, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u98DF\u6750\u30B2\u30C3\u30C8S)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u3052\u3093\u304D\u30A8\u30FC\u30EBS)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.08, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u3052\u3093\u304D\u30AA\u30FC\u30EBS)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.032, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u6599\u7406\u30C1\u30E3\u30F3\u30B9S)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.04, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30DF\u30E5\u30A6(\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8)", no: 151, specialty: "\u30AA\u30FC\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 2900, bag: 26, foodRate: 0.2, skillRate: 0.032, legend: true, kaihou: true, exp: 2.2, candyName: "\u30DF\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 25 },
    { name: "\u30C1\u30B3\u30EA\u30FC\u30BF", no: 152, specialty: "\u304D\u306E\u307F", berry: "\u30C9\u30EA", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3042\u307E\u3044\u30DF\u30C4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 4400, bag: 12, foodRate: 0.169, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30C1\u30B3\u30EA\u30FC\u30BF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D9\u30A4\u30EA\u30FC\u30D5", no: 153, specialty: "\u304D\u306E\u307F", berry: "\u30C9\u30EA", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3042\u307E\u3044\u30DF\u30C4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3300, bag: 22, foodRate: 0.168, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30C1\u30B3\u30EA\u30FC\u30BF", evolve: { before: "\u30C1\u30B3\u30EA\u30FC\u30BF", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30E1\u30AC\u30CB\u30A6\u30E0", no: 154, specialty: "\u304D\u306E\u307F", berry: "\u30C9\u30EA", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3042\u307E\u3044\u30DF\u30C4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2800, bag: 30, foodRate: 0.175, skillRate: 0.046, legend: false, kaihou: false, exp: 1, candyName: "\u30C1\u30B3\u30EA\u30FC\u30BF", evolve: { before: "\u30D9\u30A4\u30EA\u30FC\u30D5", lv: 24, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30D2\u30CE\u30A2\u30E9\u30B7", no: 155, specialty: "\u304D\u306E\u307F", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3500, bag: 14, foodRate: 0.186, skillRate: 0.021, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30CE\u30A2\u30E9\u30B7", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30DE\u30B0\u30DE\u30E9\u30B7", no: 156, specialty: "\u304D\u306E\u307F", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3e3, bag: 23, foodRate: 0.211, skillRate: 0.041, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30CE\u30A2\u30E9\u30B7", evolve: { before: "\u30D2\u30CE\u30A2\u30E9\u30B7", lv: 11, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30D0\u30AF\u30D5\u30FC\u30F3", no: 157, specialty: "\u304D\u306E\u307F", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2400, bag: 33, foodRate: 0.208, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30CE\u30A2\u30E9\u30B7", evolve: { before: "\u30DE\u30B0\u30DE\u30E9\u30B7", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30EF\u30CB\u30CE\u30B3", no: 158, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 4500, bag: 11, foodRate: 0.253, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30EF\u30CB\u30CE\u30B3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30A2\u30EA\u30B2\u30A4\u30C4", no: 159, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3400, bag: 20, foodRate: 0.253, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30EF\u30CB\u30CE\u30B3", evolve: { before: "\u30EF\u30CB\u30CE\u30B3", lv: 14, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30AA\u30FC\u30C0\u30A4\u30EB", no: 160, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2800, bag: 29, foodRate: 0.257, skillRate: 0.055, legend: false, kaihou: false, exp: 1, candyName: "\u30EF\u30CB\u30CE\u30B3", evolve: { before: "\u30A2\u30EA\u30B2\u30A4\u30C4", lv: 23, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30D4\u30C1\u30E5\u30FC", no: 172, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 4300, bag: 10, foodRate: 0.21, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30AB\u30C1\u30E5\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30D4\u30A3", no: 173, specialty: "\u304D\u306E\u307F", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u307E\u3044\u30DF\u30C4", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u3086\u3073\u3092\u3075\u308B", help: 5600, bag: 10, foodRate: 0.164, skillRate: 0.034, legend: false, kaihou: false, exp: 1, candyName: "\u30D4\u30C3\u30D4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30D7\u30D7\u30EA\u30F3", no: 174, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 5200, bag: 8, foodRate: 0.17, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30D7\u30EA\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30C8\u30B2\u30D4\u30FC", no: 175, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3086\u3073\u3092\u3075\u308B", help: 4800, bag: 8, foodRate: 0.151, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30C8\u30B2\u30D4\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30C8\u30B2\u30C1\u30C3\u30AF", no: 176, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3086\u3073\u3092\u3075\u308B", help: 3800, bag: 15, foodRate: 0.163, skillRate: 0.056, legend: false, kaihou: false, exp: 1, candyName: "\u30C8\u30B2\u30D4\u30FC", evolve: { before: "\u30C8\u30B2\u30D4\u30FC", lv: null, candy: 20, itemList: "", sleep: 50 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30CD\u30A4\u30C6\u30A3", no: 177, specialty: "\u304D\u306E\u307F", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 4500, bag: 11, foodRate: 0.185, skillRate: 0.016, legend: false, kaihou: false, exp: 1, candyName: "\u30CD\u30A4\u30C6\u30A3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30CD\u30A4\u30C6\u30A3\u30AA", no: 178, specialty: "\u304D\u306E\u307F", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 2500, bag: 24, foodRate: 0.191, skillRate: 0.025, legend: false, kaihou: false, exp: 1, candyName: "\u30CD\u30A4\u30C6\u30A3", evolve: { before: "\u30CD\u30A4\u30C6\u30A3", lv: 17, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30E1\u30EA\u30FC\u30D7", no: 179, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 4600, bag: 9, foodRate: 0.128, skillRate: 0.047, legend: false, kaihou: false, exp: 1, candyName: "\u30E1\u30EA\u30FC\u30D7", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30E2\u30B3\u30B3", no: 180, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 3300, bag: 16, foodRate: 0.127, skillRate: 0.046, legend: false, kaihou: false, exp: 1, candyName: "\u30E1\u30EA\u30FC\u30D7", evolve: { before: "\u30E1\u30EA\u30FC\u30D7", lv: 11, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30C7\u30F3\u30EA\u30E5\u30A6", no: 181, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2500, bag: 25, foodRate: 0.13, skillRate: 0.047, legend: false, kaihou: false, exp: 1, candyName: "\u30E1\u30EA\u30FC\u30D7", evolve: { before: "\u30E2\u30B3\u30B3", lv: 23, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30A6\u30BD\u30C3\u30AD\u30FC", no: 185, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30DC\u30F3", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 4e3, bag: 21, foodRate: 0.217, skillRate: 0.072, legend: false, kaihou: false, exp: 1, candyName: "\u30A6\u30BD\u30C3\u30AD\u30FC", evolve: { before: "\u30A6\u30BD\u30CF\u30C1", lv: 12, candy: 20, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 7 },
    { name: "\u30A6\u30D1\u30FC", no: 194, specialty: "\u98DF\u6750", berry: "\u30AA\u30EC\u30F3", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 5900, bag: 10, foodRate: 0.201, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30A6\u30D1\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30A6\u30D1\u30FC(\u30D1\u30EB\u30C7\u30A2\u306E\u3059\u304C\u305F)", no: 194, specialty: "\u98DF\u6750", berry: "\u30AB\u30B4", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 6400, bag: 9, foodRate: 0.209, skillRate: 0.056, legend: false, kaihou: false, exp: 1, candyName: "\u30A6\u30D1\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30CC\u30AA\u30FC", no: 195, specialty: "\u98DF\u6750", berry: "\u30AA\u30EC\u30F3", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3400, bag: 21, foodRate: 0.19, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30A6\u30D1\u30FC", evolve: { before: "\u30A6\u30D1\u30FC", lv: 15, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }], fp: 16 },
    { name: "\u30A8\u30FC\u30D5\u30A3", no: 196, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2400, bag: 21, foodRate: 0.164, skillRate: 0.044, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "", sleep: 150 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30D6\u30E9\u30C3\u30AD\u30FC", no: 197, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30A4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3064\u304D\u306E\u3072\u304B\u308A(\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S)", help: 3200, bag: 19, foodRate: 0.219, skillRate: 0.101, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "", sleep: 150 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30E4\u30DF\u30AB\u30E9\u30B9", no: 198, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30A4", foodList: ["\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u304D\u3087\u3046\u3046\u3093(\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S)", help: 3600, bag: 13, foodRate: 0.141, skillRate: 0.062, legend: false, kaihou: false, exp: 1, candyName: "\u30E4\u30DF\u30AB\u30E9\u30B9", evolve: { before: null, lv: null, candy: 80, itemList: "\u3084\u307F\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30E4\u30C9\u30AD\u30F3\u30B0", no: 199, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u304A\u3044\u3057\u3044\u30B7\u30C3\u30DD", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 3400, bag: 22, foodRate: 0.166, skillRate: 0.087, legend: false, kaihou: false, exp: 1, candyName: "\u30E4\u30C9\u30F3", evolve: { before: "\u30E4\u30C9\u30F3", lv: null, candy: 80, itemList: "\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2,\u304A\u3046\u3058\u3083\u306E\u3057\u308B\u3057", sleep: null }, fieldList: [{ name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30E0\u30A6\u30DE", no: 200, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D6\u30EA\u30FC", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 2800, bag: 13, foodRate: 0.15, skillRate: 0.047, legend: false, kaihou: false, exp: 1, candyName: "\u30E0\u30A6\u30DE", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30BD\u30FC\u30CA\u30F3\u30B9", no: 202, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 3500, bag: 21, foodRate: 0.211, skillRate: 0.082, legend: false, kaihou: false, exp: 1, candyName: "\u30BD\u30FC\u30CA\u30CE", evolve: { before: "\u30BD\u30FC\u30CA\u30CE", lv: 11, candy: 20, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }], fp: 7 },
    { name: "\u30CF\u30AC\u30CD\u30FC\u30EB", no: 208, specialty: "\u304D\u306E\u307F", berry: "\u30D9\u30EA\u30D6", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3e3, bag: 30, foodRate: 0.154, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30EF\u30FC\u30AF", evolve: { before: "\u30A4\u30EF\u30FC\u30AF", lv: null, candy: 80, itemList: "\u30E1\u30BF\u30EB\u30B3\u30FC\u30C8,\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30C4\u30DC\u30C4\u30DC", no: 213, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E9\u30E0", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u304D\u306E\u307F\u30B8\u30E5\u30FC\u30B9(\u3052\u3093\u304D\u30AA\u30FC\u30EBS)", help: 3600, bag: 16, foodRate: 0.205, skillRate: 0.059, legend: false, kaihou: false, exp: 1, candyName: "\u30C4\u30DC\u30C4\u30DC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30D8\u30E9\u30AF\u30ED\u30B9", no: 214, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E9\u30E0", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30D3\u30EB\u30C9\u30A2\u30C3\u30D7(\u6599\u7406\u30A2\u30B7\u30B9\u30C8S)", help: 2300, bag: 20, foodRate: 0.158, skillRate: 0.047, legend: false, kaihou: false, exp: 1, candyName: "\u30D8\u30E9\u30AF\u30ED\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30CB\u30E5\u30FC\u30E9", no: 215, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30A4", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 3200, bag: 17, foodRate: 0.255, skillRate: 0.019, legend: false, kaihou: false, exp: 1, candyName: "\u30CB\u30E5\u30FC\u30E9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30C7\u30EA\u30D0\u30FC\u30C9", no: 225, specialty: "\u98DF\u6750", berry: "\u30B7\u30FC\u30E4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u30D7\u30EC\u30BC\u30F3\u30C8(\u98DF\u6750\u30B2\u30C3\u30C8S)", help: 2500, bag: 20, foodRate: 0.188, skillRate: 0.03, legend: false, kaihou: false, exp: 1, candyName: "\u30C7\u30EA\u30D0\u30FC\u30C9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30C7\u30EB\u30D3\u30EB", no: 228, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30A4", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 4900, bag: 10, foodRate: 0.201, skillRate: 0.037, legend: false, kaihou: false, exp: 1, candyName: "\u30C7\u30EB\u30D3\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D8\u30EB\u30AC\u30FC", no: 229, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30A4", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 3300, bag: 21, foodRate: 0.203, skillRate: 0.04, legend: false, kaihou: false, exp: 1, candyName: "\u30C7\u30EB\u30D3\u30EB", evolve: { before: "\u30C7\u30EB\u30D3\u30EB", lv: 18, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30CF\u30D4\u30CA\u30B9", no: 242, specialty: "\u98DF\u6750", berry: "\u30AD\u30FC", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 3100, bag: 31, foodRate: 0.238, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30E9\u30C3\u30AD\u30FC", evolve: { before: "\u30E9\u30C3\u30AD\u30FC", lv: null, candy: 80, itemList: "", sleep: 150 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30E9\u30A4\u30B3\u30A6", no: 243, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u304A\u3066\u3064\u3060\u3044\u30D6\u30FC\u30B9\u30C8", help: 2100, bag: 22, foodRate: 0.192, skillRate: 0.019, legend: true, kaihou: false, exp: 1.8, candyName: "\u30E9\u30A4\u30B3\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 30 },
    { name: "\u30A8\u30F3\u30C6\u30A4", no: 244, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D2\u30E1\u30EA", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u304A\u3066\u3064\u3060\u3044\u30D6\u30FC\u30B9\u30C8", help: 2400, bag: 19, foodRate: 0.187, skillRate: 0.023, legend: true, kaihou: false, exp: 1.8, candyName: "\u30A8\u30F3\u30C6\u30A4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 30 },
    { name: "\u30B9\u30A4\u30AF\u30F3", no: 245, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30EC\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3"], skill: "\u304A\u3066\u3064\u3060\u3044\u30D6\u30FC\u30B9\u30C8", help: 2700, bag: 17, foodRate: 0.277, skillRate: 0.026, legend: true, kaihou: false, exp: 1.8, candyName: "\u30B9\u30A4\u30AF\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 30 },
    { name: "\u30E8\u30FC\u30AE\u30E9\u30B9", no: 246, specialty: "\u98DF\u6750", berry: "\u30AA\u30DC\u30F3", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4800, bag: 9, foodRate: 0.238, skillRate: 0.041, legend: false, kaihou: false, exp: 1.5, candyName: "\u30E8\u30FC\u30AE\u30E9\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30B5\u30CA\u30AE\u30E9\u30B9", no: 247, specialty: "\u98DF\u6750", berry: "\u30AA\u30DC\u30F3", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3600, bag: 18, foodRate: 0.247, skillRate: 0.045, legend: false, kaihou: false, exp: 1.5, candyName: "\u30E8\u30FC\u30AE\u30E9\u30B9", evolve: { before: "\u30E8\u30FC\u30AE\u30E9\u30B9", lv: 23, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30D0\u30F3\u30AE\u30E9\u30B9", no: 248, specialty: "\u98DF\u6750", berry: "\u30A6\u30A4", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2700, bag: 29, foodRate: 0.266, skillRate: 0.052, legend: false, kaihou: false, exp: 1.5, candyName: "\u30E8\u30FC\u30AE\u30E9\u30B9", evolve: { before: "\u30B5\u30CA\u30AE\u30E9\u30B9", lv: 41, candy: 100, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 25 },
    { name: "\u30AD\u30E2\u30EA", no: 252, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C9\u30EA", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 4500, bag: 8, foodRate: 0.172, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30AD\u30E2\u30EA", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30B8\u30E5\u30D7\u30C8\u30EB", no: 253, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C9\u30EA", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 3300, bag: 16, foodRate: 0.15, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30AD\u30E2\u30EA", evolve: { before: "\u30AD\u30E2\u30EA", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30B8\u30E5\u30AB\u30A4\u30F3", no: 254, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C9\u30EA", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 2300, bag: 27, foodRate: 0.107, skillRate: 0.03, legend: false, kaihou: false, exp: 1, candyName: "\u30AD\u30E2\u30EA", evolve: { before: "\u30B8\u30E5\u30D7\u30C8\u30EB", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30A2\u30C1\u30E3\u30E2", no: 255, specialty: "\u304D\u306E\u307F", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4300, bag: 12, foodRate: 0.16, skillRate: 0.044, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30C1\u30E3\u30E2", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30EF\u30AB\u30B7\u30E3\u30E2", no: 256, specialty: "\u304D\u306E\u307F", berry: "\u30AF\u30E9\u30DC", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3400, bag: 21, foodRate: 0.17, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30C1\u30E3\u30E2", evolve: { before: "\u30A2\u30C1\u30E3\u30E2", lv: null, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30D0\u30B7\u30E3\u30FC\u30E2", no: 257, specialty: "\u304D\u306E\u307F", berry: "\u30AF\u30E9\u30DC", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2600, bag: 32, foodRate: 0.153, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30C1\u30E3\u30E2", evolve: { before: "\u30EF\u30AB\u30B7\u30E3\u30E2", lv: null, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30DF\u30BA\u30B4\u30ED\u30A6", no: 258, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 4700, bag: 11, foodRate: 0.192, skillRate: 0.024, legend: false, kaihou: false, exp: 1, candyName: "\u30DF\u30BA\u30B4\u30ED\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30CC\u30DE\u30AF\u30ED\u30FC", no: 259, specialty: "\u304D\u306E\u307F", berry: "\u30D5\u30A3\u30E9", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 3500, bag: 21, foodRate: 0.168, skillRate: 0.028, legend: false, kaihou: false, exp: 1, candyName: "\u30DF\u30BA\u30B4\u30ED\u30A6", evolve: { before: "\u30DF\u30BA\u30B4\u30ED\u30A6", lv: null, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30E9\u30B0\u30E9\u30FC\u30B8", no: 260, specialty: "\u304D\u306E\u307F", berry: "\u30D5\u30A3\u30E9", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 2800, bag: 30, foodRate: 0.146, skillRate: 0.034, legend: false, kaihou: false, exp: 1, candyName: "\u30DF\u30BA\u30B4\u30ED\u30A6", evolve: { before: "\u30CC\u30DE\u30AF\u30ED\u30FC", lv: null, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30E9\u30EB\u30C8\u30B9", no: 280, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 4800, bag: 9, foodRate: 0.145, skillRate: 0.043, legend: false, kaihou: false, exp: 1, candyName: "\u30E9\u30EB\u30C8\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30AD\u30EB\u30EA\u30A2", no: 281, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 3500, bag: 18, foodRate: 0.146, skillRate: 0.043, legend: false, kaihou: false, exp: 1, candyName: "\u30E9\u30EB\u30C8\u30B9", evolve: { before: "\u30E9\u30EB\u30C8\u30B9", lv: 15, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30B5\u30FC\u30CA\u30A4\u30C8", no: 282, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 2400, bag: 28, foodRate: 0.144, skillRate: 0.042, legend: false, kaihou: false, exp: 1, candyName: "\u30E9\u30EB\u30C8\u30B9", evolve: { before: "\u30AD\u30EB\u30EA\u30A2", lv: 23, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30CA\u30DE\u30B1\u30ED", no: 287, specialty: "\u304D\u306E\u307F", berry: "\u30AD\u30FC", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3042\u307E\u3044\u30DF\u30C4", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 4900, bag: 7, foodRate: 0.216, skillRate: 0.019, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30DE\u30B1\u30ED", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30E4\u30EB\u30AD\u30E2\u30CE", no: 288, specialty: "\u304D\u306E\u307F", berry: "\u30AD\u30FC", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3042\u307E\u3044\u30DF\u30C4", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3200, bag: 14, foodRate: 0.204, skillRate: 0.015, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30DE\u30B1\u30ED", evolve: { before: "\u30CA\u30DE\u30B1\u30ED", lv: 14, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30B1\u30C3\u30AD\u30F3\u30B0", no: 289, specialty: "\u304D\u306E\u307F", berry: "\u30AD\u30FC", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3042\u307E\u3044\u30DF\u30C4", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3600, bag: 26, foodRate: 0.339, skillRate: 0.067, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30DE\u30B1\u30ED", evolve: { before: "\u30E4\u30EB\u30AD\u30E2\u30CE", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 22 },
    { name: "\u30E4\u30DF\u30E9\u30DF", no: 302, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30A4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S(\u30E9\u30F3\u30C0\u30E0)", help: 3600, bag: 16, foodRate: 0.188, skillRate: 0.068, legend: false, kaihou: false, exp: 1, candyName: "\u30E4\u30DF\u30E9\u30DF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30AF\u30C1\u30FC\u30C8", no: 303, specialty: "\u98DF\u6750", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u304B\u3044\u308A\u304D\u30D0\u30B5\u30DF(\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S)", help: 3200, bag: 17, foodRate: 0.204, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30AF\u30C1\u30FC\u30C8", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 16 },
    { name: "\u30B3\u30B3\u30C9\u30E9", no: 304, specialty: "\u98DF\u6750", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 5700, bag: 10, foodRate: 0.273, skillRate: 0.046, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30B3\u30C9\u30E9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30B3\u30C9\u30E9", no: 305, specialty: "\u98DF\u6750", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4200, bag: 18, foodRate: 0.277, skillRate: 0.048, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30B3\u30C9\u30E9", evolve: { before: "\u30B3\u30B3\u30C9\u30E9", lv: 24, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30DC\u30B9\u30B4\u30C9\u30E9", no: 306, specialty: "\u98DF\u6750", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3e3, bag: 28, foodRate: 0.285, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30B3\u30C9\u30E9", evolve: { before: "\u30B3\u30C9\u30E9", lv: 32, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30D7\u30E9\u30B9\u30EB", no: 311, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF"], skill: "\u30D7\u30E9\u30B9(\u98DF\u6750\u30B2\u30C3\u30C8S)", help: 2400, bag: 16, foodRate: 0.103, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D7\u30E9\u30B9\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 10 },
    { name: "\u30DE\u30A4\u30CA\u30F3", no: 312, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF"], skill: "\u30DE\u30A4\u30CA\u30B9(\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S)", help: 2400, bag: 16, foodRate: 0.174, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30DE\u30A4\u30CA\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 10 },
    { name: "\u30B4\u30AF\u30EA\u30F3", no: 316, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AB\u30B4", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S(\u30E9\u30F3\u30C0\u30E0)", help: 5900, bag: 8, foodRate: 0.214, skillRate: 0.063, legend: false, kaihou: false, exp: 1, candyName: "\u30B4\u30AF\u30EA\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30DE\u30EB\u30CE\u30FC\u30E0", no: 317, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AB\u30B4", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S(\u30E9\u30F3\u30C0\u30E0)", help: 3500, bag: 24, foodRate: 0.21, skillRate: 0.07, legend: false, kaihou: false, exp: 1, candyName: "\u30B4\u30AF\u30EA\u30F3", evolve: { before: "\u30B4\u30AF\u30EA\u30F3", lv: 20, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30CA\u30C3\u30AF\u30E9\u30FC", no: 328, specialty: "\u98DF\u6750", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 5e3, bag: 8, foodRate: 0.152, skillRate: 0.031, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30C3\u30AF\u30E9\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30D3\u30D6\u30E9\u30FC\u30D0", no: 329, specialty: "\u98DF\u6750", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3700, bag: 17, foodRate: 0.155, skillRate: 0.034, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30C3\u30AF\u30E9\u30FC", evolve: { before: "\u30CA\u30C3\u30AF\u30E9\u30FC", lv: 26, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30D5\u30E9\u30A4\u30B4\u30F3", no: 330, specialty: "\u98DF\u6750", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 2700, bag: 27, foodRate: 0.172, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30C3\u30AF\u30E9\u30FC", evolve: { before: "\u30D3\u30D6\u30E9\u30FC\u30D0", lv: 34, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30C1\u30EB\u30C3\u30C8", no: 333, specialty: "\u304D\u306E\u307F", berry: "\u30B7\u30FC\u30E4", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4200, bag: 12, foodRate: 0.177, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30C1\u30EB\u30C3\u30C8", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30C1\u30EB\u30BF\u30EA\u30B9", no: 334, specialty: "\u304D\u306E\u307F", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3500, bag: 19, foodRate: 0.258, skillRate: 0.061, legend: false, kaihou: false, exp: 1, candyName: "\u30C1\u30EB\u30C3\u30C8", evolve: { before: "\u30C1\u30EB\u30C3\u30C8", lv: 26, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30AB\u30B2\u30DC\u30A6\u30BA", no: 353, specialty: "\u304D\u306E\u307F", berry: "\u30D6\u30EA\u30FC", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3900, bag: 11, foodRate: 0.171, skillRate: 0.026, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30B2\u30DC\u30A6\u30BA", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30B8\u30E5\u30DA\u30C3\u30BF", no: 354, specialty: "\u304D\u306E\u307F", berry: "\u30D6\u30EA\u30FC", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2600, bag: 24, foodRate: 0.179, skillRate: 0.033, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30B2\u30DC\u30A6\u30BA", evolve: { before: "\u30AB\u30B2\u30DC\u30A6\u30BA", lv: 28, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30A2\u30D6\u30BD\u30EB", no: 359, specialty: "\u98DF\u6750", berry: "\u30A6\u30A4", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2950, bag: 18, foodRate: 0.178, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30D6\u30BD\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30BD\u30FC\u30CA\u30CE", no: 360, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 5800, bag: 7, foodRate: 0.213, skillRate: 0.069, legend: false, kaihou: false, exp: 1, candyName: "\u30BD\u30FC\u30CA\u30CE", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30BF\u30DE\u30B6\u30E9\u30B7", no: 363, specialty: "\u304D\u306E\u307F", berry: "\u30C1\u30FC\u30B4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 5600, bag: 9, foodRate: 0.224, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30BF\u30DE\u30B6\u30E9\u30B7", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30BF\u30DE\u30B6\u30E9\u30B7(\u30DB\u30EA\u30C7\u30FC)", no: 363, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C1\u30FC\u30B4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 3300, bag: 20, foodRate: 0.214, skillRate: 0.05, legend: false, kaihou: false, exp: 1, candyName: "\u30BF\u30DE\u30B6\u30E9\u30B7", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 5 },
    { name: "\u30C8\u30C9\u30B0\u30E9\u30FC", no: 364, specialty: "\u304D\u306E\u307F", berry: "\u30C1\u30FC\u30B4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 4e3, bag: 18, foodRate: 0.221, skillRate: 0.021, legend: false, kaihou: false, exp: 1, candyName: "\u30BF\u30DE\u30B6\u30E9\u30B7", evolve: { before: "\u30BF\u30DE\u30B6\u30E9\u30B7", lv: 24, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30C8\u30C9\u30BC\u30EB\u30AC", no: 365, specialty: "\u304D\u306E\u307F", berry: "\u30C1\u30FC\u30B4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 3e3, bag: 28, foodRate: 0.223, skillRate: 0.022, legend: false, kaihou: false, exp: 1, candyName: "\u30BF\u30DE\u30B6\u30E9\u30B7", evolve: { before: "\u30C8\u30C9\u30B0\u30E9\u30FC", lv: 33, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30BF\u30C4\u30D9\u30A4", no: 371, specialty: "\u304D\u306E\u307F", berry: "\u30E4\u30C1\u30A7", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 5300, bag: 9, foodRate: 0.209, skillRate: 0.027, legend: false, kaihou: false, exp: 1.5, candyName: "\u30BF\u30C4\u30D9\u30A4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30B3\u30E2\u30EB\u30FC", no: 372, specialty: "\u304D\u306E\u307F", berry: "\u30E4\u30C1\u30A7", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 3800, bag: 19, foodRate: 0.206, skillRate: 0.027, legend: false, kaihou: false, exp: 1.5, candyName: "\u30BF\u30C4\u30D9\u30A4", evolve: { before: "\u30BF\u30C4\u30D9\u30A4", lv: 23, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30DC\u30FC\u30DE\u30F3\u30C0", no: 373, specialty: "\u304D\u306E\u307F", berry: "\u30E4\u30C1\u30A7", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 2800, bag: 32, foodRate: 0.217, skillRate: 0.034, legend: false, kaihou: false, exp: 1.5, candyName: "\u30BF\u30C4\u30D9\u30A4", evolve: { before: "\u30B3\u30E2\u30EB\u30FC", lv: 38, candy: 100, itemList: "", sleep: null }, fieldList: [{ name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }], fp: 25 },
    { name: "\u30E9\u30C6\u30A3\u30A2\u30B9", no: 380, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u3044\u3084\u3057\u306E\u306F\u3069\u3046(\u3052\u3093\u304D\u30A8\u30FC\u30EBS)", help: 2800, bag: 19, foodRate: 0.114, skillRate: 0.049, legend: true, kaihou: false, exp: 1.8, candyName: "\u30E9\u30C6\u30A3\u30A2\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 30 },
    { name: "\u30E9\u30C6\u30A3\u30AA\u30B9", no: 381, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF"], skill: "\u308A\u3085\u3046\u305B\u3044\u3050\u3093(\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8)", help: 2800, bag: 19, foodRate: 0.198, skillRate: 0.03, legend: true, kaihou: false, exp: 1.8, candyName: "\u30E9\u30C6\u30A3\u30AA\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 30 },
    { name: "\u30CA\u30A8\u30C8\u30EB", no: 387, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C9\u30EA", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 4500, bag: 12, foodRate: 0.132, skillRate: 0.041, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30A8\u30C8\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30CF\u30E4\u30B7\u30AC\u30E1", no: 388, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C9\u30EA", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 3700, bag: 19, foodRate: 0.15, skillRate: 0.046, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30A8\u30C8\u30EB", evolve: { before: "\u30CA\u30A8\u30C8\u30EB", lv: 14, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30C9\u30C0\u30A4\u30C8\u30B9", no: 389, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D5\u30A3\u30E9", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 2900, bag: 27, foodRate: 0.156, skillRate: 0.048, legend: false, kaihou: false, exp: 1, candyName: "\u30CA\u30A8\u30C8\u30EB", evolve: { before: "\u30CF\u30E4\u30B7\u30AC\u30E1", lv: 24, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30D2\u30B3\u30B6\u30EB", no: 390, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 4100, bag: 10, foodRate: 0.114, skillRate: 0.033, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30B3\u30B6\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30E2\u30A6\u30AB\u30B6\u30EB", no: 391, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AF\u30E9\u30DC", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 3100, bag: 19, foodRate: 0.114, skillRate: 0.033, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30B3\u30B6\u30EB", evolve: { before: "\u30D2\u30B3\u30B6\u30EB", lv: 11, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30B4\u30A6\u30AB\u30B6\u30EB", no: 392, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AF\u30E9\u30DC", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 2400, bag: 28, foodRate: 0.106, skillRate: 0.033, legend: false, kaihou: false, exp: 1, candyName: "\u30D2\u30B3\u30B6\u30EB", evolve: { before: "\u30E2\u30A6\u30AB\u30B6\u30EB", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30DD\u30C3\u30C1\u30E3\u30DE", no: 393, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30EC\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 4500, bag: 11, foodRate: 0.159, skillRate: 0.026, legend: false, kaihou: false, exp: 1, candyName: "\u30DD\u30C3\u30C1\u30E3\u30DE", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30DD\u30C3\u30BF\u30A4\u30B7", no: 394, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30EC\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 3700, bag: 20, foodRate: 0.163, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30DD\u30C3\u30C1\u30E3\u30DE", evolve: { before: "\u30DD\u30C3\u30C1\u30E3\u30DE", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30A8\u30F3\u30DA\u30EB\u30C8", no: 395, specialty: "\u304D\u306E\u307F", berry: "\u30D9\u30EA\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 3200, bag: 28, foodRate: 0.168, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30DD\u30C3\u30C1\u30E3\u30DE", evolve: { before: "\u30DD\u30C3\u30BF\u30A4\u30B7", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30B3\u30EA\u30F3\u30AF", no: 403, specialty: "\u98DF\u6750", berry: "\u30A6\u30D6", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 4400, bag: 11, foodRate: 0.181, skillRate: 0.018, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30EA\u30F3\u30AF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30EB\u30AF\u30B7\u30AA", no: 404, specialty: "\u98DF\u6750", berry: "\u30A6\u30D6", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 3200, bag: 21, foodRate: 0.182, skillRate: 0.018, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30EA\u30F3\u30AF", evolve: { before: "\u30B3\u30EA\u30F3\u30AF", lv: 11, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30EC\u30F3\u30C8\u30E9\u30FC", no: 405, specialty: "\u98DF\u6750", berry: "\u30A6\u30D6", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 2400, bag: 31, foodRate: 0.2, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30EA\u30F3\u30AF", evolve: { before: "\u30EB\u30AF\u30B7\u30AA", lv: 23, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30D5\u30EF\u30F3\u30C6", no: 425, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D6\u30EA\u30FC", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u305F\u304F\u308F\u3048\u308B(\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S)", help: 4800, bag: 9, foodRate: 0.137, skillRate: 0.071, legend: false, kaihou: false, exp: 1, candyName: "\u30D5\u30EF\u30F3\u30C6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D5\u30EF\u30E9\u30A4\u30C9", no: 426, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D6\u30EA\u30FC", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u305F\u304F\u308F\u3048\u308B(\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S)", help: 2500, bag: 22, foodRate: 0.128, skillRate: 0.063, legend: false, kaihou: false, exp: 1, candyName: "\u30D5\u30EF\u30F3\u30C6", evolve: { before: "\u30D5\u30EF\u30F3\u30C6", lv: 21, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30E0\u30A6\u30DE\u30FC\u30B8", no: 429, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D6\u30EA\u30FC", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u30DE\u30B8\u30AB\u30EB\u30D5\u30EC\u30A4\u30E0(\u6599\u7406\u30A2\u30C9\u30D0\u30F3\u30B9S)", help: 2400, bag: 17, foodRate: 0.142, skillRate: 0.036, legend: false, kaihou: false, exp: 1, candyName: "\u30E0\u30A6\u30DE", evolve: { before: "\u30E0\u30A6\u30DE", lv: null, candy: 80, itemList: "\u3084\u307F\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30C9\u30F3\u30AB\u30E9\u30B9", no: 430, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30A4", foodList: ["\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u304D\u3087\u3046\u3046\u3093(\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S)", help: 3200, bag: 23, foodRate: 0.143, skillRate: 0.067, legend: false, kaihou: false, exp: 1, candyName: "\u30E4\u30DF\u30AB\u30E9\u30B9", evolve: { before: "\u30E4\u30DF\u30AB\u30E9\u30B9", lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30A6\u30BD\u30CF\u30C1", no: 438, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AA\u30DC\u30F3", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 6300, bag: 8, foodRate: 0.189, skillRate: 0.061, legend: false, kaihou: false, exp: 1, candyName: "\u30A6\u30BD\u30C3\u30AD\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30DE\u30CD\u30CD", no: 439, specialty: "\u98DF\u6750", berry: "\u30DE\u30B4", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u3082\u306E\u307E\u306D(\u30B9\u30AD\u30EB\u30B3\u30D4\u30FC)", help: 4300, bag: 10, foodRate: 0.201, skillRate: 0.032, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30EA\u30E4\u30FC\u30C9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30D4\u30F3\u30D7\u30AF", no: 440, specialty: "\u98DF\u6750", berry: "\u30AD\u30FC", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 4500, bag: 7, foodRate: 0.21, skillRate: 0.013, legend: false, kaihou: false, exp: 1, candyName: "\u30E9\u30C3\u30AD\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30DF\u30AB\u30EB\u30B2", no: 442, specialty: "\u98DF\u6750", berry: "\u30A6\u30A4", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 3500, bag: 27, foodRate: 0.198, skillRate: 0.036, legend: false, kaihou: false, exp: 1, candyName: "\u30DF\u30AB\u30EB\u30B2", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30EA\u30AA\u30EB", no: 447, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AF\u30E9\u30DC", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S", help: 4200, bag: 9, foodRate: 0.126, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30EB\u30AB\u30EA\u30AA", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30EB\u30AB\u30EA\u30AA", no: 448, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AF\u30E9\u30DC", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u306F\u3069\u3046\u3060\u3093(\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S)", help: 2600, bag: 19, foodRate: 0.15, skillRate: 0.051, legend: false, kaihou: false, exp: 1, candyName: "\u30EB\u30AB\u30EA\u30AA", evolve: { before: "\u30EA\u30AA\u30EB", lv: null, candy: 80, itemList: "", sleep: 150 }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30B0\u30EC\u30C3\u30B0\u30EB", no: 453, specialty: "\u98DF\u6750", berry: "\u30AB\u30B4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 5600, bag: 10, foodRate: 0.228, skillRate: 0.042, legend: false, kaihou: false, exp: 1, candyName: "\u30B0\u30EC\u30C3\u30B0\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30C9\u30AF\u30ED\u30C3\u30B0", no: 454, specialty: "\u98DF\u6750", berry: "\u30AB\u30B4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3400, bag: 19, foodRate: 0.229, skillRate: 0.043, legend: false, kaihou: false, exp: 1, candyName: "\u30B0\u30EC\u30C3\u30B0\u30EB", evolve: { before: "\u30B0\u30EC\u30C3\u30B0\u30EB", lv: 28, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30E6\u30AD\u30AB\u30D6\u30EA", no: 459, specialty: "\u98DF\u6750", berry: "\u30C1\u30FC\u30B4", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 5600, bag: 10, foodRate: 0.251, skillRate: 0.044, legend: false, kaihou: false, exp: 1, candyName: "\u30E6\u30AD\u30AB\u30D6\u30EA", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30E6\u30AD\u30CE\u30AA\u30FC", no: 460, specialty: "\u98DF\u6750", berry: "\u30C1\u30FC\u30B4", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 3e3, bag: 26, foodRate: 0.25, skillRate: 0.044, legend: false, kaihou: false, exp: 1, candyName: "\u30E6\u30AD\u30AB\u30D6\u30EA", evolve: { before: "\u30E6\u30AD\u30AB\u30D6\u30EA", lv: 30, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30DE\u30CB\u30E5\u30FC\u30E9", no: 461, specialty: "\u304D\u306E\u307F", berry: "\u30A6\u30A4", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 2700, bag: 26, foodRate: 0.251, skillRate: 0.018, legend: false, kaihou: false, exp: 1, candyName: "\u30CB\u30E5\u30FC\u30E9", evolve: { before: "\u30CB\u30E5\u30FC\u30E9", lv: null, candy: 80, itemList: "\u3059\u308B\u3069\u3044\u30C4\u30E1", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30B8\u30D0\u30B3\u30A4\u30EB", no: 462, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 3100, bag: 23, foodRate: 0.179, skillRate: 0.062, legend: false, kaihou: false, exp: 1, candyName: "\u30B3\u30A4\u30EB", evolve: { before: "\u30EC\u30A2\u30B3\u30A4\u30EB", lv: null, candy: 80, itemList: "\u304B\u307F\u306A\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 22 },
    { name: "\u30C8\u30B2\u30AD\u30C3\u30B9", no: 468, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3086\u3073\u3092\u3075\u308B", help: 2600, bag: 26, foodRate: 0.158, skillRate: 0.053, legend: false, kaihou: false, exp: 1, candyName: "\u30C8\u30B2\u30D4\u30FC", evolve: { before: "\u30C8\u30B2\u30C1\u30C3\u30AF", lv: null, candy: 80, itemList: "\u3072\u304B\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 22 },
    { name: "\u30EA\u30FC\u30D5\u30A3\u30A2", no: 470, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C9\u30EA", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 3e3, bag: 18, foodRate: 0.205, skillRate: 0.069, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "\u30EA\u30FC\u30D5\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30B0\u30EC\u30A4\u30B7\u30A2", no: 471, specialty: "\u30B9\u30AD\u30EB", berry: "\u30C1\u30FC\u30B4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 3200, bag: 17, foodRate: 0.219, skillRate: 0.063, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "\u3053\u304A\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30A8\u30EB\u30EC\u30A4\u30C9", no: 475, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AF\u30E9\u30DC", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u304A\u3066\u3064\u3060\u3044\u30B5\u30DD\u30FC\u30C8S", help: 2400, bag: 29, foodRate: 0.147, skillRate: 0.054, legend: false, kaihou: false, exp: 1, candyName: "\u30E9\u30EB\u30C8\u30B9", evolve: { before: "\u30AD\u30EB\u30EA\u30A2", lv: null, candy: 80, itemList: "\u3081\u3056\u3081\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30AF\u30EC\u30BB\u30EA\u30A2", no: 488, specialty: "\u30B9\u30AD\u30EB", berry: "\u30DE\u30B4", foodList: ["\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u307F\u304B\u3065\u304D\u306E\u3044\u306E\u308A(\u3052\u3093\u304D\u30AA\u30FC\u30EBS)", help: 2300, bag: 22, foodRate: 0.239, skillRate: 0.041, legend: true, kaihou: false, exp: 1.8, candyName: "\u30AF\u30EC\u30BB\u30EA\u30A2", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 30 },
    { name: "\u30C0\u30FC\u30AF\u30E9\u30A4", no: 491, specialty: "\u30AA\u30FC\u30EB", berry: "\u30A6\u30A4", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u307E\u3044\u30DF\u30C4", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30CA\u30A4\u30C8\u30E1\u30A2(\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M)", help: 2900, bag: 28, foodRate: 0.192, skillRate: 0.023, legend: true, kaihou: true, exp: 2.2, candyName: "\u30C0\u30FC\u30AF\u30E9\u30A4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 30 },
    { name: "\u30E0\u30F3\u30CA", no: 517, specialty: "\u304D\u306E\u307F", berry: "\u30DE\u30B4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u307E\u3044\u30DF\u30C4", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S(\u30E9\u30F3\u30C0\u30E0)", help: 5700, bag: 12, foodRate: 0.197, skillRate: 0.043, legend: false, kaihou: false, exp: 1, candyName: "\u30E0\u30F3\u30CA", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30E0\u30B7\u30E3\u30FC\u30CA", no: 518, specialty: "\u304D\u306E\u307F", berry: "\u30DE\u30B4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u307E\u3044\u30DF\u30C4", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u3086\u3081\u306E\u304B\u3051\u3089\u30B2\u30C3\u30C8S(\u30E9\u30F3\u30C0\u30E0)", help: 2800, bag: 29, foodRate: 0.188, skillRate: 0.041, legend: false, kaihou: false, exp: 1, candyName: "\u30E0\u30F3\u30CA", evolve: { before: "\u30E0\u30F3\u30CA", lv: null, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30E2\u30F3\u30E1\u30F3", no: 546, specialty: "\u98DF\u6750", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3072\u3068\u304F\u3061\u30CA\u30C3\u30C4", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4600, bag: 10, foodRate: 0.2, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30E2\u30F3\u30E1\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30A8\u30EB\u30D5\u30FC\u30F3", no: 547, specialty: "\u98DF\u6750", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3072\u3068\u304F\u3061\u30CA\u30C3\u30C4", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2400, bag: 22, foodRate: 0.199, skillRate: 0.038, legend: false, kaihou: false, exp: 1, candyName: "\u30E2\u30F3\u30E1\u30F3", evolve: { before: "\u30E2\u30F3\u30E1\u30F3", lv: null, candy: 80, itemList: "\u305F\u3044\u3088\u3046\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30A4\u30B7\u30BA\u30DE\u30A4", no: 557, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E9\u30E0", foodList: ["\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S", help: 4300, bag: 8, foodRate: 0.175, skillRate: 0.054, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30B7\u30BA\u30DE\u30A4", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30A4\u30EF\u30D1\u30EC\u30B9", no: 558, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E9\u30E0", foodList: ["\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S", help: 3200, bag: 22, foodRate: 0.239, skillRate: 0.064, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30B7\u30BA\u30DE\u30A4", evolve: { before: "\u30A4\u30B7\u30BA\u30DE\u30A4", lv: 26, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30BF\u30DE\u30B2\u30BF\u30B1", no: 590, specialty: "\u98DF\u6750", berry: "\u30AB\u30B4", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 5700, bag: 12, foodRate: 0.174, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30BF\u30DE\u30B2\u30BF\u30B1", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30E2\u30ED\u30D0\u30EC\u30EB", no: 591, specialty: "\u98DF\u6750", berry: "\u30AB\u30B4", foodList: ["\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0", "\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3500, bag: 19, foodRate: 0.204, skillRate: 0.047, legend: false, kaihou: false, exp: 1, candyName: "\u30BF\u30DE\u30B2\u30BF\u30B1", evolve: { before: "\u30BF\u30DE\u30B2\u30BF\u30B1", lv: 29, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30EF\u30B7\u30DC\u30F3", no: 627, specialty: "\u30B9\u30AD\u30EB", berry: "\u30B7\u30FC\u30E4", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 3800, bag: 10, foodRate: 0.125, skillRate: 0.031, legend: false, kaihou: false, exp: 1, candyName: "\u30EF\u30B7\u30DC\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30A6\u30A9\u30FC\u30B0\u30EB", no: 628, specialty: "\u30B9\u30AD\u30EB", berry: "\u30B7\u30FC\u30E4", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC"], skill: "\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8", help: 2400, bag: 23, foodRate: 0.121, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30EF\u30B7\u30DC\u30F3", evolve: { before: "\u30EF\u30B7\u30DC\u30F3", lv: 41, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30C1\u30B4\u30E9\u30B9", no: 696, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30DC\u30F3", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 5200, bag: 11, foodRate: 0.203, skillRate: 0.024, legend: false, kaihou: false, exp: 1, candyName: "\u30C1\u30B4\u30E9\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30AC\u30C1\u30B4\u30E9\u30B9", no: 697, specialty: "\u304D\u306E\u307F", berry: "\u30AA\u30DC\u30F3", foodList: ["\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 2800, bag: 28, foodRate: 0.178, skillRate: 0.029, legend: false, kaihou: false, exp: 1, candyName: "\u30C1\u30B4\u30E9\u30B9", evolve: { before: "\u30C1\u30B4\u30E9\u30B9", lv: 29, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30CB\u30F3\u30D5\u30A3\u30A2", no: 700, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E2\u30E2\u30F3", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 2600, bag: 20, foodRate: 0.178, skillRate: 0.04, legend: false, kaihou: false, exp: 1, candyName: "\u30A4\u30FC\u30D6\u30A4", evolve: { before: "\u30A4\u30FC\u30D6\u30A4", lv: null, candy: 80, itemList: "", sleep: 150 }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 20 },
    { name: "\u30EB\u30C1\u30E3\u30D6\u30EB", no: 701, specialty: "\u30B9\u30AD\u30EB", berry: "\u30B7\u30FC\u30E4", foodList: ["\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S", help: 2400, bag: 21, foodRate: 0.192, skillRate: 0.052, legend: false, kaihou: false, exp: 1, candyName: "\u30EB\u30C1\u30E3\u30D6\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 16 },
    { name: "\u30C7\u30C7\u30F3\u30CD", no: 702, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 2500, bag: 19, foodRate: 0.177, skillRate: 0.045, legend: false, kaihou: false, exp: 1, candyName: "\u30C7\u30C7\u30F3\u30CD", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 16 },
    { name: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u3053\u3060\u307E\u3057\u3085)", no: 710, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 5300, bag: 7, foodRate: 0.12, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u3061\u3085\u3046\u3060\u307E\u3057\u3085)", no: 710, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 5400, bag: 11, foodRate: 0.12, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u304A\u304A\u3060\u307E\u3057\u3085)", no: 710, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 5500, bag: 15, foodRate: 0.12, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u30AE\u30AC\u3060\u307E\u3057\u3085)", no: 710, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 5600, bag: 21, foodRate: 0.12, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30D1\u30F3\u30D7\u30B8\u30F3(\u3053\u3060\u307E\u3057\u3085)", no: 711, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3100, bag: 15, foodRate: 0.13, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u3053\u3060\u307E\u3057\u3085)", lv: null, candy: 80, itemList: "\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30D1\u30F3\u30D7\u30B8\u30F3(\u3061\u3085\u3046\u3060\u307E\u3057\u3085)", no: 711, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3200, bag: 19, foodRate: 0.13, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u3061\u3085\u3046\u3060\u307E\u3057\u3085)", lv: null, candy: 80, itemList: "\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30D1\u30F3\u30D7\u30B8\u30F3(\u304A\u304A\u3060\u307E\u3057\u3085)", no: 711, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3300, bag: 24, foodRate: 0.13, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u304A\u304A\u3060\u307E\u3057\u3085)", lv: null, candy: 80, itemList: "\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30D1\u30F3\u30D7\u30B8\u30F3(\u30AE\u30AC\u3060\u307E\u3057\u3085)", no: 711, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3", "\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3400, bag: 30, foodRate: 0.13, skillRate: 0.049, legend: false, kaihou: false, exp: 1, candyName: "\u30D0\u30B1\u30C3\u30C1\u30E3", evolve: { before: "\u30D0\u30B1\u30C3\u30C1\u30E3(\u30AE\u30AC\u3060\u307E\u3057\u3085)", lv: null, candy: 80, itemList: "\u3064\u306A\u304C\u308A\u306E\u30D2\u30E2", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30AA\u30F3\u30D0\u30C3\u30C8", no: 714, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 5100, bag: 7, foodRate: 0.198, skillRate: 0.048, legend: false, kaihou: false, exp: 1, candyName: "\u30AA\u30F3\u30D0\u30C3\u30C8", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30AA\u30F3\u30D0\u30FC\u30F3", no: 715, specialty: "\u30B9\u30AD\u30EB", berry: "\u30E4\u30C1\u30A7", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2700, bag: 23, foodRate: 0.195, skillRate: 0.048, legend: false, kaihou: false, exp: 1, candyName: "\u30AA\u30F3\u30D0\u30C3\u30C8", evolve: { before: "\u30AA\u30F3\u30D0\u30C3\u30C8", lv: 36, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30A2\u30B4\u30B8\u30E0\u30B7", no: 736, specialty: "\u98DF\u6750", berry: "\u30E9\u30E0", foodList: ["\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 4600, bag: 11, foodRate: 0.155, skillRate: 0.029, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30B4\u30B8\u30E0\u30B7", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30C7\u30F3\u30C2\u30E0\u30B7", no: 737, specialty: "\u98DF\u6750", berry: "\u30E9\u30E0", foodList: ["\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 3300, bag: 20, foodRate: 0.154, skillRate: 0.028, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30B4\u30B8\u30E0\u30B7", evolve: { before: "\u30A2\u30B4\u30B8\u30E0\u30B7", lv: 15, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30AF\u30EF\u30AC\u30CE\u30F3", no: 738, specialty: "\u98DF\u6750", berry: "\u30E9\u30E0", foodList: ["\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3", "\u3042\u307E\u3044\u30DF\u30C4"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S", help: 2800, bag: 29, foodRate: 0.194, skillRate: 0.051, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30B4\u30B8\u30E0\u30B7", evolve: { before: "\u30C7\u30F3\u30C2\u30E0\u30B7", lv: null, candy: 80, itemList: "\u304B\u307F\u306A\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 22 },
    { name: "\u30A2\u30D6\u30EA\u30FC", no: 742, specialty: "\u98DF\u6750", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3"], skill: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S", help: 4500, bag: 9, foodRate: 0.199, skillRate: 0.019, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30D6\u30EA\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30A2\u30D6\u30EA\u30DC\u30F3", no: 743, specialty: "\u98DF\u6750", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u307E\u3044\u30DF\u30C4", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3"], skill: "\u98DF\u6750\u30BB\u30EC\u30AF\u30C8S", help: 2300, bag: 24, foodRate: 0.194, skillRate: 0.025, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30D6\u30EA\u30FC", evolve: { before: "\u30A2\u30D6\u30EA\u30FC", lv: 19, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30CC\u30A4\u30B3\u30B0\u30DE", no: 759, specialty: "\u98DF\u6750", berry: "\u30AF\u30E9\u30DC", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 4100, bag: 13, foodRate: 0.225, skillRate: 0.011, legend: false, kaihou: false, exp: 1, candyName: "\u30CC\u30A4\u30B3\u30B0\u30DE", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30AD\u30C6\u30EB\u30B0\u30DE", no: 760, specialty: "\u98DF\u6750", berry: "\u30AF\u30E9\u30DC", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8S(\u30E9\u30F3\u30C0\u30E0)", help: 2800, bag: 25, foodRate: 0.229, skillRate: 0.013, legend: false, kaihou: false, exp: 1, candyName: "\u30CC\u30A4\u30B3\u30B0\u30DE", evolve: { before: "\u30CC\u30A4\u30B3\u30B0\u30DE", lv: 20, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30AD\u30E5\u30EF\u30EF\u30FC", no: 764, specialty: "\u98DF\u6750", berry: "\u30E2\u30E2\u30F3", foodList: ["\u30EF\u30AB\u30AF\u30B5\u30B3\u30FC\u30F3", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u3052\u3093\u304D\u30A8\u30FC\u30EBS", help: 2500, bag: 20, foodRate: 0.167, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30AD\u30E5\u30EF\u30EF\u30FC", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3059\u3084\u3059\u3084" }], fp: 16 },
    { name: "\u30C8\u30B2\u30C7\u30DE\u30EB", no: 777, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D9\u30EA\u30D6", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA"], skill: "\u307B\u3063\u307A\u3059\u308A\u3059\u308A(\u3052\u3093\u304D\u30A8\u30FC\u30EBS)", help: 2700, bag: 18, foodRate: 0.169, skillRate: 0.055, legend: false, kaihou: false, exp: 1, candyName: "\u30C8\u30B2\u30C7\u30DE\u30EB", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 16 },
    { name: "\u30DF\u30DF\u30C3\u30AD\u30E5", no: 778, specialty: "\u30B9\u30AD\u30EB", berry: "\u30D6\u30EA\u30FC", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u3042\u3058\u308F\u3044\u30AD\u30CE\u30B3"], skill: "\u3070\u3051\u306E\u304B\u308F(\u304D\u306E\u307F\u30D0\u30FC\u30B9\u30C8)", help: 2500, bag: 19, foodRate: 0.153, skillRate: 0.035, legend: false, kaihou: false, exp: 1, candyName: "\u30DF\u30DF\u30C3\u30AD\u30E5", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30B8\u30B8\u30FC\u30ED\u30F3", no: 780, specialty: "\u98DF\u6750", berry: "\u30E4\u30C1\u30A7", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3064\u3084\u3064\u3084\u30A2\u30DC\u30AB\u30C9", "\u30DE\u30E1\u30DF\u30FC\u30C8"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 3500, bag: 25, foodRate: 0.294, skillRate: 0.046, legend: false, kaihou: false, exp: 1, candyName: "\u30B8\u30B8\u30FC\u30ED\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3046\u3068\u3046\u3068" }], fp: 16 },
    { name: "\u30A6\u30C3\u30A6", no: 845, specialty: "\u98DF\u6750", berry: "\u30B7\u30FC\u30E4", foodList: ["\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u6599\u7406\u30C1\u30E3\u30F3\u30B9S", help: 2700, bag: 19, foodRate: 0.165, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30A6\u30C3\u30A6", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5CEX", type: "\u3050\u3063\u3059\u308A" }], fp: 16 },
    { name: "\u30A8\u30EC\u30BA\u30F3", no: 848, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AB\u30B4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u98DF\u6750\u30B2\u30C3\u30C8S", help: 5600, bag: 6, foodRate: 0.209, skillRate: 0.048, legend: false, kaihou: false, exp: 1, candyName: "\u30A8\u30EC\u30BA\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30B9\u30C8\u30EA\u30F3\u30C0\u30FC(\u30CF\u30A4\u306A\u3059\u304C\u305F)", no: 849, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AB\u30B4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u30D7\u30E9\u30B9(\u98DF\u6750\u30B2\u30C3\u30C8S)", help: 3100, bag: 23, foodRate: 0.239, skillRate: 0.064, legend: false, kaihou: false, exp: 1, candyName: "\u30A8\u30EC\u30BA\u30F3", evolve: { before: "\u30A8\u30EC\u30BA\u30F3", lv: 15, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30B9\u30C8\u30EA\u30F3\u30C0\u30FC(\u30ED\u30FC\u306A\u3059\u304C\u305F)", no: 849, specialty: "\u30B9\u30AD\u30EB", berry: "\u30AB\u30B4", foodList: ["\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E"], skill: "\u30DE\u30A4\u30CA\u30B9(\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S)", help: 3100, bag: 23, foodRate: 0.239, skillRate: 0.064, legend: false, kaihou: false, exp: 1, candyName: "\u30A8\u30EC\u30BA\u30F3", evolve: { before: "\u30A8\u30EC\u30BA\u30F3", lv: 15, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30A2\u30F3\u30D0\u30FC\u6E13\u8C37", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30CB\u30E3\u30AA\u30CF", no: 906, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 4600, bag: 10, foodRate: 0.208, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30CB\u30E3\u30AA\u30CF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 5 },
    { name: "\u30CB\u30E3\u30ED\u30FC\u30C6", no: 907, specialty: "\u98DF\u6750", berry: "\u30C9\u30EA", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 3500, bag: 19, foodRate: 0.209, skillRate: 0.023, legend: false, kaihou: false, exp: 1, candyName: "\u30CB\u30E3\u30AA\u30CF", evolve: { before: "\u30CB\u30E3\u30AA\u30CF", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 },
    { name: "\u30DE\u30B9\u30AB\u30FC\u30CB\u30E3", no: 908, specialty: "\u98DF\u6750", berry: "\u30A6\u30A4", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3042\u3063\u305F\u304B\u30B8\u30F3\u30B8\u30E3\u30FC"], skill: "\u6599\u7406\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7S", help: 2600, bag: 28, foodRate: 0.19, skillRate: 0.022, legend: false, kaihou: false, exp: 1, candyName: "\u30CB\u30E3\u30AA\u30CF", evolve: { before: "\u30CB\u30E3\u30ED\u30FC\u30C6", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30DB\u30B2\u30FC\u30BF", no: 909, specialty: "\u98DF\u6750", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 4200, bag: 11, foodRate: 0.254, skillRate: 0.053, legend: false, kaihou: false, exp: 1, candyName: "\u30DB\u30B2\u30FC\u30BF", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30A2\u30C1\u30B2\u30FC\u30BF", no: 910, specialty: "\u98DF\u6750", berry: "\u30D2\u30E1\u30EA", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3100, bag: 21, foodRate: 0.247, skillRate: 0.05, legend: false, kaihou: false, exp: 1, candyName: "\u30DB\u30B2\u30FC\u30BF", evolve: { before: "\u30DB\u30B2\u30FC\u30BF", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30E9\u30A6\u30C9\u30DC\u30FC\u30F3", no: 911, specialty: "\u98DF\u6750", berry: "\u30D6\u30EA\u30FC", foodList: ["\u3068\u304F\u305B\u3093\u30EA\u30F3\u30B4", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u3052\u304D\u304B\u3089\u30CF\u30FC\u30D6"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2700, bag: 29, foodRate: 0.268, skillRate: 0.062, legend: false, kaihou: false, exp: 1, candyName: "\u30DB\u30B2\u30FC\u30BF", evolve: { before: "\u30A2\u30C1\u30B2\u30FC\u30BF", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30B7\u30A2\u30F3\u306E\u7802\u6D5C", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 20 },
    { name: "\u30AF\u30EF\u30C3\u30B9", no: 912, specialty: "\u98DF\u6750", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 4800, bag: 10, foodRate: 0.261, skillRate: 0.028, legend: false, kaihou: false, exp: 1, candyName: "\u30AF\u30EF\u30C3\u30B9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30A6\u30A7\u30EB\u30AB\u30E2", no: 913, specialty: "\u98DF\u6750", berry: "\u30AA\u30EC\u30F3", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 3600, bag: 19, foodRate: 0.259, skillRate: 0.027, legend: false, kaihou: false, exp: 1, candyName: "\u30AF\u30EF\u30C3\u30B9", evolve: { before: "\u30AF\u30EF\u30C3\u30B9", lv: 12, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 12 },
    { name: "\u30A6\u30A7\u30FC\u30CB\u30D0\u30EB", no: 914, specialty: "\u98DF\u6750", berry: "\u30AF\u30E9\u30DC", foodList: ["\u30EF\u30AB\u30AF\u30B5\u5927\u8C46", "\u3075\u3068\u3044\u306A\u304C\u306D\u304E", "\u30D4\u30E5\u30A2\u306A\u30AA\u30A4\u30EB"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2600, bag: 29, foodRate: 0.232, skillRate: 0.024, legend: false, kaihou: false, exp: 1, candyName: "\u30AF\u30EF\u30C3\u30B9", evolve: { before: "\u30A6\u30A7\u30EB\u30AB\u30E2", lv: 27, candy: 80, itemList: "", sleep: null }, fieldList: [{ name: "\u30E9\u30D4\u30B9\u30E9\u30BA\u30EA\u6E56\u7554", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30D1\u30E2", no: 921, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 4600, bag: 9, foodRate: 0.111, skillRate: 0.036, legend: false, kaihou: false, exp: 1, candyName: "\u30D1\u30E2", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 5 },
    { name: "\u30D1\u30E2\u30C3\u30C8", no: 922, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 3300, bag: 17, foodRate: 0.109, skillRate: 0.036, legend: false, kaihou: false, exp: 1, candyName: "\u30D1\u30E2", evolve: { before: "\u30D1\u30E2", lv: 14, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 12 },
    { name: "\u30D1\u30FC\u30E2\u30C3\u30C8", no: 923, specialty: "\u30B9\u30AD\u30EB", berry: "\u30A6\u30D6", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u30E2\u30FC\u30E2\u30FC\u30DF\u30EB\u30AF", "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0"], skill: "\u3052\u3093\u304D\u30AA\u30FC\u30EBS", help: 2400, bag: 28, foodRate: 0.141, skillRate: 0.039, legend: false, kaihou: false, exp: 1, candyName: "\u30D1\u30E2", evolve: { before: "\u30D1\u30E2\u30C3\u30C8", lv: null, candy: 80, itemList: "", sleep: 150 }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30B4\u30FC\u30EB\u30C9\u65E7\u767A\u96FB\u6240", type: "\u3059\u3084\u3059\u3084" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3059\u3084\u3059\u3084" }], fp: 22 },
    { name: "\u30AB\u30CC\u30C1\u30E3\u30F3", no: 957, specialty: "\u304D\u306E\u307F", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 4500, bag: 12, foodRate: 0.202, skillRate: 0.016, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30CC\u30C1\u30E3\u30F3", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [], fp: 5 },
    { name: "\u30CA\u30AB\u30CC\u30C1\u30E3\u30F3", no: 958, specialty: "\u304D\u306E\u307F", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 3300, bag: 21, foodRate: 0.186, skillRate: 0.018, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30CC\u30C1\u30E3\u30F3", evolve: { before: "\u30AB\u30CC\u30C1\u30E3\u30F3", lv: 18, candy: 40, itemList: "", sleep: null }, fieldList: [], fp: 12 },
    { name: "\u30C7\u30AB\u30CC\u30C1\u30E3\u30F3", no: 959, specialty: "\u304D\u306E\u307F", berry: "\u30E2\u30E2\u30F3", foodList: ["\u3042\u3093\u307F\u3093\u30C8\u30DE\u30C8", "\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u30A8\u30CA\u30B8\u30FC\u30C1\u30E3\u30FC\u30B8M", help: 2400, bag: 30, foodRate: 0.185, skillRate: 0.02, legend: false, kaihou: false, exp: 1, candyName: "\u30AB\u30CC\u30C1\u30E3\u30F3", evolve: { before: "\u30CA\u30AB\u30CC\u30C1\u30E3\u30F3", lv: 29, candy: 80, itemList: "", sleep: null }, fieldList: [], fp: 20 },
    { name: "\u30A2\u30EB\u30AF\u30B8\u30E9", no: 974, specialty: "\u98DF\u6750", berry: "\u30C1\u30FC\u30B4", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 5100, bag: 12, foodRate: 0.223, skillRate: 0.042, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30EB\u30AF\u30B8\u30E9", evolve: { before: null, lv: null, candy: null, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 5 },
    { name: "\u30CF\u30EB\u30AF\u30B8\u30E9", no: 975, specialty: "\u98DF\u6750", berry: "\u30C1\u30FC\u30B4", foodList: ["\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8", "\u30DE\u30E1\u30DF\u30FC\u30C8", "\u305A\u3063\u3057\u308A\u30AB\u30DC\u30C1\u30E3"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 2800, bag: 30, foodRate: 0.209, skillRate: 0.042, legend: false, kaihou: false, exp: 1, candyName: "\u30A2\u30EB\u30AF\u30B8\u30E9", evolve: { before: "\u30A2\u30EB\u30AF\u30B8\u30E9", lv: null, candy: 80, itemList: "\u3053\u304A\u308A\u306E\u3044\u3057", sleep: null }, fieldList: [{ name: "\u30A6\u30CE\u30CF\u30CA\u96EA\u539F", type: "\u3050\u3063\u3059\u308A" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3050\u3063\u3059\u308A" }], fp: 20 },
    { name: "\u30C9\u30AA\u30FC", no: 980, specialty: "\u98DF\u6750", berry: "\u30AB\u30B4", foodList: ["\u30EA\u30E9\u30C3\u30AF\u30B9\u30AB\u30AB\u30AA", "\u3081\u3056\u307E\u3057\u30B3\u30FC\u30D2\u30FC", "\u307B\u3063\u3053\u308A\u30DD\u30C6\u30C8"], skill: "\u3052\u3093\u304D\u30C1\u30E3\u30FC\u30B8S", help: 3500, bag: 25, foodRate: 0.208, skillRate: 0.055, legend: false, kaihou: false, exp: 1, candyName: "\u30A6\u30D1\u30FC", evolve: { before: "\u30A6\u30D1\u30FC(\u30D1\u30EB\u30C7\u30A2\u306E\u3059\u304C\u305F)", lv: 15, candy: 40, itemList: "", sleep: null }, fieldList: [{ name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30C8\u30FC\u30D7\u6D1E\u7A9F", type: "\u3046\u3068\u3046\u3068" }, { name: "\u30EF\u30AB\u30AF\u30B5\u672C\u5CF6EX", type: "\u3046\u3068\u3046\u3068" }], fp: 12 }
  ].map((x, order) => {
    const foodNameList = x.foodList;
    const foodList = [];
    const firstFoodEnergy = Food.map[foodNameList[0]].energy * (x.specialty == "\u98DF\u6750" || x.specialty == "\u30AA\u30FC\u30EB" ? 2 : 1);
    for (let i = 0; i < foodNameList.length; i++) {
      const food = Food.map[foodNameList[i]];
      foodList.push({
        name: food.name,
        numList: [
          foodNameList.length > 3 || i <= 0 ? Math.round(firstFoodEnergy / food.energy) : null,
          foodNameList.length > 3 || i <= 1 ? Math.round(firstFoodEnergy * 2.25 / food.energy) : null,
          foodNameList.length > 3 || i <= 2 ? Math.round(firstFoodEnergy * 3.6 / food.energy) : null
        ]
      });
    }
    const pokemon = {
      ...x,
      order,
      skill: skill_default.map[x.skill],
      berry: berry_default.map[x.berry],
      type: berry_default.map[x.berry].type,
      foodList,
      foodNameList,
      foodNumListMap: foodList.filter((x2) => x2 != null).reduce((a, x2) => (a[x2.name] = x2.numList ?? [], a), {}),
      evolve: {
        ...x.evolve,
        itemList: x.evolve.itemList.split(",")
      },
      afterList: []
    };
    if (pokemon.skill == null) throw `${pokemon.name}\u306E\u30B9\u30AD\u30EB\u304C\u8AA4\u3063\u3066\u3044\u307E\u3059(${x.skill})`;
    return pokemon;
  });
  static nameSortList;
  static map = _Pokemon.list.reduce((a, x) => (a[x.name] = x, a), {});
};
Pokemon.list.filter((x) => x.evolve.before == null).forEach((x) => {
  x.evolveLv = 1;
  x.remainEvolveLv = 0;
  x.evolveCandyMap = { [x.name]: 0 };
  x.requireSleep = { [x.name]: false };
});
Pokemon.list.filter((x) => x.evolve.before != null && Pokemon.map[x.evolve.before].evolveLv && !x.evolveLv).forEach((x) => {
  x.evolveLv = Pokemon.map[x.evolve.before].evolveLv + 1;
  x.evolveCandyMap = { [x.name]: 0, [x.evolve.before]: x.evolve.candy };
  x.requireSleep = { [x.name]: false, [x.evolve.before]: !!x.evolve.sleep };
});
Pokemon.list.filter((x) => x.evolve.before != null && Pokemon.map[x.evolve.before].evolveLv && !x.evolveLv).forEach((x) => {
  const before = Pokemon.map[x.evolve.before];
  x.evolveLv = before.evolveLv + 1;
  x.evolveCandyMap = { [x.name]: 0, [before.name]: x.evolve.candy, [before.evolve.before]: x.evolve.candy + before.evolve.candy };
  x.requireSleep = { [x.name]: false, [before.name]: !!x.evolve.sleep, [before.evolve.before]: !!x.evolve.sleep || !!before.evolve.sleep };
});
for (let pokemon of Pokemon.list) {
  let targetList = [pokemon];
  if (pokemon.evolve.before == null) {
    pokemon.seed = pokemon.name;
  }
  let nestLv = 0;
  while (targetList.length) {
    let newTarget = [];
    for (let target of targetList) {
      let afterList = Pokemon.list.filter((x) => x.evolve.before == target.name);
      if (afterList.length) {
        if (pokemon.evolve.before == null) {
          for (const after of afterList) {
            after.seed = pokemon.name;
          }
        }
        newTarget.push(...afterList);
      } else {
        pokemon.afterList.push(target.name);
        pokemon.remainEvolveLv = nestLv;
      }
    }
    targetList = newTarget;
    nestLv++;
  }
  pokemon.isLast = pokemon.afterList[0] == pokemon.name;
}
Pokemon.nameSortList = [...Pokemon.list].sort((a, b) => a.name < b.name ? -1 : 1);
for (let skill of skill_default.list) {
  skill.skillSpecialtyOnly = Pokemon.list.some((x) => x.skill.name == skill.name && x.specialty == "\u30B9\u30AD\u30EB");
}
var pokemon_default = Pokemon;

// ../../../../tmp/pkreimer/src/data/sub-skill.ts
var list = [
  { id: 1, name: "\u304D\u306E\u307F\u306E\u6570S", rarity: 3, short: "\u304D\u306E\u307FS", katakana: "\u30AD\u30CE\u30DF\u30CE\u30AB\u30BAS", inputSort: 0, next: null },
  { id: 2, name: "\u3052\u3093\u304D\u56DE\u5FA9\u30DC\u30FC\u30CA\u30B9", rarity: 3, short: "\u3052\u3093\u30DC", katakana: "\u30B2\u30F3\u30AD\u30AB\u30A4\u30D5\u30AF\u30DC\u30FC\u30CA\u30B9", inputSort: 0, next: null },
  { id: 3, name: "\u3086\u3081\u306E\u304B\u3051\u3089\u30DC\u30FC\u30CA\u30B9", rarity: 3, short: "\u3086\u3081\u30DC", katakana: "\u30E6\u30E1\u30CE\u30AB\u30B1\u30E9\u30DC\u30FC\u30CA\u30B9", inputSort: 0, next: null },
  { id: 4, name: "\u30EA\u30B5\u30FC\u30C1EXP\u30DC\u30FC\u30CA\u30B9", rarity: 3, short: "\u30EA\u30B5\u30DC", katakana: "\u30EA\u30B5\u30FC\u30C1EXP\u30DC\u30FC\u30CA\u30B9", inputSort: 0, next: null },
  { id: 5, name: "\u7761\u7720EXP\u30DC\u30FC\u30CA\u30B9", rarity: 3, short: "\u7761\u7720\u30DC", katakana: "\u30B9\u30A4\u30DF\u30F3EXP\u30DC\u30FC\u30CA\u30B9", inputSort: 0, next: null },
  { id: 6, name: "\u304A\u3066\u3064\u3060\u3044\u30DC\u30FC\u30CA\u30B9", rarity: 3, short: "\u304A\u3066\u30DC", katakana: "\u30AA\u30C6\u30C4\u30C0\u30A4\u30DC\u30FC\u30CA\u30B9", inputSort: 0, next: null },
  { id: 7, name: "\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7M", rarity: 3, short: "\u30B9\u30ADLvM", katakana: "\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7M", inputSort: 2, next: null },
  { id: 8, name: "\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7M", rarity: 2, short: "\u30B9\u30AD\u78BAM", katakana: "\u30B9\u30AD\u30EB\u30AB\u30AF\u30EA\u30C4\u30A2\u30C3\u30D7M", inputSort: 1, next: null },
  { id: 9, name: "\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7M", rarity: 2, short: "\u98DF\u78BAM", katakana: "\u30B7\u30E7\u30AF\u30B6\u30A4\u30AB\u30AF\u30EA\u30C4\u30A2\u30C3\u30D7M", inputSort: 0, next: null },
  { id: 10, name: "\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7S", rarity: 2, short: "\u30B9\u30ADLvS", katakana: "\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7S", inputSort: 2, next: "\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7M" },
  { id: 11, name: "\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9M", rarity: 2, short: "\u304A\u3066\uFF7D\uFF8B\uFF9FM", katakana: "\u30AA\u30C6\u30C4\u30C0\u30A4\u30B9\u30D4\u30FC\u30C9M", inputSort: 0, next: null },
  { id: 12, name: "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L", rarity: 2, short: "\u6240\u6301L", katakana: "\u30B5\u30A4\u30C0\u30A4\u30B7\u30E7\u30B8\u30B9\u30A6\u30A2\u30C3\u30D7L", inputSort: 0, next: null },
  { id: 13, name: "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M", rarity: 2, short: "\u6240\u6301M", katakana: "\u30B5\u30A4\u30C0\u30A4\u30B7\u30E7\u30B8\u30B9\u30A6\u30A2\u30C3\u30D7M", inputSort: 0, next: "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L" },
  { id: 14, name: "\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7S", rarity: 1, short: "\u30B9\u30AD\u78BAS", katakana: "\u30B9\u30AD\u30EB\u30AB\u30AF\u30EA\u30C4\u30A2\u30C3\u30D7S", inputSort: 1, next: "\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7M" },
  { id: 15, name: "\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7S", rarity: 1, short: "\u98DF\u78BAS", katakana: "\u30B7\u30E7\u30AF\u30B6\u30A4\u30AB\u30AF\u30EA\u30C4\u30A2\u30C3\u30D7S", inputSort: 0, next: "\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7M" },
  { id: 16, name: "\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9S", rarity: 1, short: "\u304A\u3066\uFF7D\uFF8B\uFF9FS", katakana: "\u30AA\u30C6\u30C4\u30C0\u30A4\u30B9\u30D4\u30FC\u30C9S", inputSort: 0, next: "\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9M" },
  { id: 17, name: "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7S", rarity: 1, short: "\u6240\u6301S", katakana: "\u30B5\u30A4\u30C0\u30A4\u30B7\u30E7\u30B8\u30B9\u30A6\u30A2\u30C3\u30D7S", inputSort: 0, next: "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M" }
];
var SubSkill = class _SubSkill {
  static list = list;
  static hasNextList = list.filter((x) => x.next != null);
  static map = list.reduce((a, x) => (a[x.name] = x, a), {});
  static idMap = list.reduce((a, x) => (a[x.id] = x, a), {});
  static listForInput = _SubSkill.list.toSorted((a, b) => a.inputSort - b.inputSort);
  static useSilverSeed(subSkillList, setting) {
    let tmp = subSkillList.join("/");
    if (tmp.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M") && (setting == null || setting["\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M"]) && !tmp.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L")) {
      tmp = tmp.replace("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M", "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L");
    }
    ;
    if (tmp.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7S") && (setting == null || setting["\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7S"]) && !tmp.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M")) {
      tmp = tmp.replace("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7S", "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M");
    }
    ;
    if (tmp.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M") && (setting == null || setting["\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M"]) && !tmp.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L")) {
      tmp = tmp.replace("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M", "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L");
    }
    ;
    if (tmp.includes("\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7S") && (setting == null || setting["\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7S"]) && !tmp.includes("\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7M")) {
      tmp = tmp.replace("\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7S", "\u30B9\u30AD\u30EB\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7M");
    }
    ;
    if (tmp.includes("\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7S") && (setting == null || setting["\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7S"]) && !tmp.includes("\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7M")) {
      tmp = tmp.replace("\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7S", "\u30B9\u30AD\u30EB\u78BA\u7387\u30A2\u30C3\u30D7M");
    }
    ;
    if (tmp.includes("\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7S") && (setting == null || setting["\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7S"]) && !tmp.includes("\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7M")) {
      tmp = tmp.replace("\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7S", "\u98DF\u6750\u78BA\u7387\u30A2\u30C3\u30D7M");
    }
    ;
    if (tmp.includes("\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9S") && (setting == null || setting["\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9S"]) && !tmp.includes("\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9M")) {
      tmp = tmp.replace("\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9S", "\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9M");
    }
    ;
    return tmp.split("/");
  }
};
var sub_skill_default = SubSkill;

// src/reader.ts
var OCR_IMAGE_WIDTH = 1080;
var FOOD_SEARCH_WIDTH = 360;
function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
async function loadImage(source) {
  const objectUrl = typeof source == "string" ? null : URL.createObjectURL(source);
  const image = new Image();
  try {
    await new Promise((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F\u3002"));
      image.src = objectUrl ?? source;
    });
  } finally {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
  }
  return image;
}
function drawImageToCanvas(image, sourceWidth, sourceHeight) {
  const scale = OCR_IMAGE_WIDTH / sourceWidth;
  const canvas = createCanvas(Math.round(sourceWidth * scale), Math.round(sourceHeight * scale));
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas;
}
function createTextCanvas(sourceCanvas, removeGreen = false) {
  const canvas = createCanvas(sourceCanvas.width, sourceCanvas.height);
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(sourceCanvas, 0, 0);
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  for (let i = 0; i < data.length; i += 4) {
    const isGreenDecoration = removeGreen && data[i + 1] - data[i] >= 25 && data[i + 1] - data[i + 2] >= 10;
    const brightness = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    const value = !isGreenDecoration && brightness < 180 ? 0 : 255;
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;
    data[i + 3] = 255;
  }
  context.putImageData(imageData, 0, 0);
  return canvas;
}
function flattenLines(blocks) {
  if (!blocks) return [];
  return blocks.flatMap((block) => block.paragraphs).flatMap((paragraph) => paragraph.lines).map((line) => ({
    text: line.text.trim(),
    x0: line.bbox.x0,
    y0: line.bbox.y0,
    x1: line.bbox.x1,
    y1: line.bbox.y1
  })).filter((line) => line.text);
}
function setSubSkillRarity(lineList, sourceCanvas) {
  const context = sourceCanvas.getContext("2d", { willReadFrequently: true });
  const { data } = context.getImageData(0, 0, sourceCanvas.width, sourceCanvas.height);
  for (const line of lineList) {
    let goldCount = 0;
    let blueCount = 0;
    let sampleCount = 0;
    const padding = 8;
    const minX = Math.max(0, Math.floor(line.x0 - padding));
    const maxX = Math.min(sourceCanvas.width - 1, Math.ceil(line.x1 + padding));
    const minY = Math.max(0, Math.floor(line.y0 - padding));
    const maxY = Math.min(sourceCanvas.height - 1, Math.ceil(line.y1 + padding));
    for (let y = minY; y <= maxY; y += 3) {
      for (let x = minX; x <= maxX; x += 3) {
        const index = (y * sourceCanvas.width + x) * 4;
        const red = data[index];
        const green = data[index + 1];
        const blue = data[index + 2];
        sampleCount++;
        if (red >= 185 && green >= 155 && red - blue >= 20 && green - blue >= 5) goldCount++;
        if (green >= 205 && blue >= 215 && blue - red >= 8) blueCount++;
      }
    }
    if (goldCount >= sampleCount * 0.08) line.subSkillRarity = 3;
    else if (blueCount >= sampleCount * 0.08) line.subSkillRarity = 2;
    else line.subSkillRarity = 1;
  }
}
function normalizeText(text) {
  return text.normalize("NFKC").replace(/[\s|｜_]/g, "").replace(/[＄$]/g, "S").replace(/[．。]/g, ".").replace(/ボ[ポボ]+ー/g, "\u30DC\u30FC").replace(/おてつた?だ(?:た?だ)+い/g, "\u304A\u3066\u3064\u3060\u3044");
}
function levenshteinDistance(left, right) {
  const previous = Array.from({ length: right.length + 1 }, (_, i) => i);
  for (let leftIndex = 1; leftIndex <= left.length; leftIndex++) {
    const current = [leftIndex];
    for (let rightIndex = 1; rightIndex <= right.length; rightIndex++) {
      current[rightIndex] = Math.min(
        current[rightIndex - 1] + 1,
        previous[rightIndex] + 1,
        previous[rightIndex - 1] + (left[leftIndex - 1] == right[rightIndex - 1] ? 0 : 1)
      );
    }
    previous.splice(0, previous.length, ...current);
  }
  return previous[right.length];
}
function getTextSimilarity(expected, actual) {
  const normalizedExpected = normalizeText(expected);
  const normalizedActual = normalizeText(actual);
  if (!normalizedActual) return 0;
  if (normalizedActual.includes(normalizedExpected)) return 1;
  let minimumDistance = levenshteinDistance(normalizedExpected, normalizedActual);
  const minimumLength = Math.max(1, normalizedExpected.length - 2);
  const maximumLength = Math.min(normalizedActual.length, normalizedExpected.length + 2);
  for (let length = minimumLength; length <= maximumLength; length++) {
    for (let start = 0; start + length <= normalizedActual.length; start++) {
      minimumDistance = Math.min(
        minimumDistance,
        levenshteinDistance(normalizedExpected, normalizedActual.slice(start, start + length))
      );
    }
  }
  return 1 - minimumDistance / Math.max(normalizedExpected.length, 1);
}
function findBestLine(name, lineList) {
  return lineList.map((line) => ({ line, score: getTextSimilarity(name, line.text) })).toSorted((a, b) => b.score - a.score)[0];
}
function splitSubSkillLine(line) {
  const segmentList = [];
  const separatorPattern = /[|｜]|\s{2,}/g;
  let start = 0;
  for (const separator of line.text.matchAll(separatorPattern)) {
    const end = separator.index ?? start;
    const text2 = line.text.slice(start, end).trim();
    if (text2) {
      const textStart = line.text.indexOf(text2, start);
      const width = line.x1 - line.x0;
      segmentList.push({
        ...line,
        text: text2,
        x0: line.x0 + width * textStart / line.text.length,
        x1: line.x0 + width * (textStart + text2.length) / line.text.length
      });
    }
    start = end + separator[0].length;
  }
  const text = line.text.slice(start).trim();
  if (text) {
    const textStart = line.text.indexOf(text, start);
    const width = line.x1 - line.x0;
    segmentList.push({
      ...line,
      text,
      x0: line.x0 + width * textStart / line.text.length
    });
  }
  return segmentList.length ? segmentList : [line];
}
function getSkillAliasList(name) {
  return [.../* @__PURE__ */ new Set([name, name.replace(/\(.+\)$/, "")])];
}
function getSkillSimilarity(expected, actual) {
  return Math.max(...getSkillAliasList(expected).flatMap(
    (expectedAlias) => getSkillAliasList(actual).map((actualAlias) => getTextSimilarity(expectedAlias, actualAlias))
  ));
}
function getEnableSubSkillList(lv, subSkillList) {
  if (lv == null) return [];
  const enableLength = [10, 25, 50, 70, 80].filter((unlockLv) => lv >= unlockLv).length;
  return subSkillList.slice(0, enableLength);
}
function parseHelpTime(helpTime) {
  const match = helpTime?.match(/(?:(\d+)時間)?(\d+)分(\d+)秒/);
  return match ? Number(match[1] ?? 0) * 3600 + Number(match[2]) * 60 + Number(match[3]) : null;
}
function formatHelpTime(seconds) {
  const hour = Math.floor(seconds / 3600);
  const minute = Math.floor(seconds % 3600 / 60);
  return `${hour ? `${hour}\u6642\u9593` : ""}${minute}\u5206${seconds % 60}\u79D2`;
}
function parseBag(rawText) {
  const maximumBag = Math.max(...pokemon_default.list.map((pokemon) => pokemon.bag)) + 6 + 12 + 18 + 8;
  const bagList = [...normalizeText(rawText).matchAll(/([0-9]+)個/g)].map((match) => Number(match[1])).filter((bag) => bag >= 1 && bag <= maximumBag);
  if (!bagList.length) return null;
  const countMap = /* @__PURE__ */ new Map();
  for (const bag of bagList) countMap.set(bag, (countMap.get(bag) ?? 0) + 1);
  return bagList.toSorted((left, right) => (countMap.get(right) ?? 0) - (countMap.get(left) ?? 0))[0];
}
function getExpectedHelpTimeList(pokemon, lv, subSkillList, natureName) {
  if (lv == null) return [];
  const enableSubSkillList = getEnableSubSkillList(lv, subSkillList);
  let speedBonus = 0;
  if (enableSubSkillList.includes("\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9S")) speedBonus += 0.07;
  if (enableSubSkillList.includes("\u304A\u3066\u3064\u3060\u3044\u30B9\u30D4\u30FC\u30C9M")) speedBonus += 0.14;
  speedBonus = Math.min(speedBonus, 0.35);
  const nature = natureName ? nature_default.map[natureName] : null;
  const baseTime = Math.floor(
    pokemon.help * (1 - (lv - 1) * 2e-3) * (1 - speedBonus) * (nature?.good == "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9" ? 0.9 : nature?.weak == "\u624B\u4F1D\u3044\u30B9\u30D4\u30FC\u30C9" ? 1.075 : 1)
  );
  const ribbonRateList = pokemon.remainEvolveLv == 1 ? [1, 0.95, 0.95 * 0.88] : pokemon.remainEvolveLv == 2 ? [1, 0.89, 0.89 * 0.75] : [1];
  return [...new Set(ribbonRateList.map((rate) => Math.floor(baseTime * rate)))];
}
function getExpectedBagList(pokemon, lv, subSkillList) {
  const enableSubSkillList = getEnableSubSkillList(lv, subSkillList);
  const baseBag = pokemon.bag + (enableSubSkillList.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7S") ? 6 : 0) + (enableSubSkillList.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M") ? 12 : 0) + (enableSubSkillList.includes("\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L") ? 18 : 0);
  return [0, 1, 3, 6, 8].map((ribbonBag) => baseBag + ribbonBag);
}
function isAllowedFood(pokemon, foodName, slotIndex) {
  return pokemon.foodNumListMap[foodName]?.[slotIndex] != null;
}
function getAllowedFoodMatch(pokemon, recognition, slotIndex) {
  if (!recognition) return null;
  return recognition.matchList.filter((match) => isAllowedFood(pokemon, match.name, slotIndex)).toSorted((left, right) => {
    if (recognition.num == null) return right.score - left.score;
    const leftNumMatched = pokemon.foodNumListMap[left.name]?.[slotIndex] == recognition.num;
    const rightNumMatched = pokemon.foodNumListMap[right.name]?.[slotIndex] == recognition.num;
    return Number(rightNumMatched) - Number(leftNumMatched) || right.score - left.score;
  })[0] ?? null;
}
function getNearestNumber(value, candidateList) {
  if (value == null || !candidateList.length) return null;
  return candidateList.toSorted((left, right) => Math.abs(left - value) - Math.abs(right - value))[0];
}
function correctBagSubSkillList(pokemon, lv, bag, subSkillList) {
  if (bag == null) return subSkillList;
  const candidateList = subSkillList.reduce((list2, subSkill, index) => {
    if (subSkill != "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M" && subSkill != "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L") return list2;
    return list2.flatMap((candidate) => ["\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7M", "\u6700\u5927\u6240\u6301\u6570\u30A2\u30C3\u30D7L"].map((replacement) => {
      const next = [...candidate];
      next[index] = replacement;
      return next;
    }));
  }, [[...subSkillList]]).filter((candidate) => new Set(candidate).size == candidate.length);
  return candidateList.toSorted((left, right) => {
    const leftDifference = Math.min(...getExpectedBagList(pokemon, lv, left).map((value) => Math.abs(value - bag)));
    const rightDifference = Math.min(...getExpectedBagList(pokemon, lv, right).map((value) => Math.abs(value - bag)));
    const leftChangeCount = left.filter((value, index) => value != subSkillList[index]).length;
    const rightChangeCount = right.filter((value, index) => value != subSkillList[index]).length;
    return leftDifference - rightDifference || leftChangeCount - rightChangeCount;
  })[0] ?? subSkillList;
}
function correctLevel(pokemon, recognizedLv, actualHelpTime, subSkillList, nature) {
  if (recognizedLv == null || actualHelpTime == null) return recognizedLv;
  const getDifference = (lv) => Math.min(
    ...getExpectedHelpTimeList(pokemon, lv, subSkillList, nature).map((expected) => Math.abs(expected - actualHelpTime))
  );
  const recognizedDifference = getDifference(recognizedLv);
  const best = Array.from({ length: 100 }, (_, index) => index + 1).map((lv) => ({ lv, difference: getDifference(lv) })).toSorted((left, right) => left.difference - right.difference)[0];
  return best && best.difference <= 3 && best.difference + 3 < recognizedDifference ? best.lv : recognizedLv;
}
function estimatePokemon(result, foodRecognitionList) {
  const actualHelpTime = parseHelpTime(result.helpTime);
  const scoreList = pokemon_default.list.map((pokemon) => {
    const nameSimilarity = result.name ? getTextSimilarity(pokemon.name, result.name) : 0;
    const skillSimilarity = result.mainSkillName ? getSkillSimilarity(pokemon.skill.name, result.mainSkillName) : 0;
    const expectedHelpTimeList = getExpectedHelpTimeList(
      pokemon,
      result.lv,
      result.subSkillList,
      result.nature
    );
    const helpDifference = actualHelpTime == null || !expectedHelpTimeList.length ? null : Math.min(...expectedHelpTimeList.map((value) => Math.abs(value - actualHelpTime)));
    const expectedBagList = getExpectedBagList(pokemon, result.lv, result.subSkillList);
    const bagDifference = result.bag == null ? null : Math.min(...expectedBagList.map((value) => Math.abs(value - result.bag)));
    let score = 0;
    if (nameSimilarity >= 0.55) score += nameSimilarity * 8;
    if (result.mainSkillName) score += skillSimilarity * 8;
    if (helpDifference != null) score += 7 / (1 + helpDifference / 60);
    if (bagDifference != null) score += Math.max(0, 1 - bagDifference / 18) * 4;
    foodRecognitionList.forEach((recognition, slotIndex) => {
      const bestMatchScore = recognition.matchList[0]?.score ?? 0;
      const allowedMatch = getAllowedFoodMatch(pokemon, recognition, slotIndex);
      if (!allowedMatch || bestMatchScore <= 0) return;
      score += allowedMatch.score / bestMatchScore * 4;
      if (recognition.num != null) {
        score += pokemon.foodNumListMap[allowedMatch.name]?.[slotIndex] == recognition.num ? 4 : -2;
      }
    });
    return { pokemon, score, nameSimilarity };
  }).toSorted((left, right) => right.score - left.score);
  const [best, second] = scoreList;
  if (!best || best.score < 8) return null;
  const hasEnoughDifference = best.nameSimilarity >= 0.8 || best.score - (second?.score ?? 0) >= 0.75;
  return hasEnoughDifference ? best.pokemon : null;
}
function correctResult(result, foodRecognitionList, iconName) {
  const pokemon = pokemon_default.map[iconName ?? ""] ?? estimatePokemon(result, foodRecognitionList);
  if (!pokemon) return result;
  const actualHelpTime = parseHelpTime(result.helpTime);
  const correctedLv = correctLevel(pokemon, result.lv, actualHelpTime, result.subSkillList, result.nature);
  const correctedSubSkillList = correctBagSubSkillList(pokemon, correctedLv, result.bag, result.subSkillList);
  const correctedHelpTime = getNearestNumber(
    actualHelpTime,
    getExpectedHelpTimeList(pokemon, correctedLv, correctedSubSkillList, result.nature)
  );
  const correctedBag = getNearestNumber(
    result.bag,
    getExpectedBagList(pokemon, correctedLv, correctedSubSkillList)
  );
  const correctedMainSkillName = getSkillAliasList(pokemon.skill.name).toSorted(
    (left, right) => getTextSimilarity(right, result.mainSkillName ?? "") - getTextSimilarity(left, result.mainSkillName ?? "")
  )[0];
  const correctedFoodList = Array.from({ length: 3 }, (_, slotIndex) => {
    const recognizedFood = result.foodList[slotIndex];
    const recognition = foodRecognitionList[slotIndex];
    if (recognition?.empty) return null;
    if (slotIndex == 0 && pokemon.foodNameList.length > 3) return pokemon.foodNameList[0] ?? null;
    if (slotIndex == 0 && recognition?.region.occluded) return pokemon.foodNameList[0] ?? null;
    const recognizedNumMatched = recognition?.num == null || pokemon.foodNumListMap[recognizedFood ?? ""]?.[slotIndex] == recognition.num;
    if (recognizedFood && isAllowedFood(pokemon, recognizedFood, slotIndex) && recognizedNumMatched) {
      return recognizedFood;
    }
    const allowedMatch = getAllowedFoodMatch(pokemon, recognition, slotIndex);
    return allowedMatch?.name ?? (slotIndex == 0 ? pokemon.foodNameList[0] : null);
  });
  return {
    ...result,
    // 種族名に十分近い場合だけ表記揺れを直し、ニックネームはそのまま保持する。
    name: result.name && getTextSimilarity(pokemon.name, result.name) >= 0.65 ? pokemon.name : result.name,
    pokemonName: pokemon.name,
    lv: correctedLv,
    // 画面から時間を直接読めた場合は、睡眠リボン等の画像にない条件から逆算した値で上書きしない。
    helpTime: actualHelpTime != null ? result.helpTime : correctedHelpTime == null ? null : formatHelpTime(correctedHelpTime),
    bag: correctedBag ?? result.bag,
    foodList: correctedFoodList,
    subSkillList: correctedSubSkillList,
    // 「(ランダム)」等が画面で省略される場合は、認識した表示に近い別名を返す。
    mainSkillName: correctedMainSkillName
  };
}
function parseData(iconName, rawText, lineList, foodRecognitionList, primaryLineList = lineList, sourceCoordinateLineList = lineList, subSkillPillNameList = null) {
  const normalizedRawText = normalizeText(rawText);
  const levelLineList = primaryLineList.map((line) => ({ line, match: normalizeText(line.text).match(/Lv\.?([0-9]{1,3})(.*)/i) })).filter((item) => item.match != null).toSorted((a, b) => a.line.y0 - b.line.y0);
  const pokemonLevelLine = levelLineList[0];
  const lv = pokemonLevelLine ? Number(pokemonLevelLine.match[1]) : null;
  const parsedName = pokemonLevelLine?.match[2].replace(/^[.:・\-]+/, "").trim() ?? "";
  const helpTimeMatch = normalizedRawText.match(/(?:(\d+)時間)?(\d+)分(\d+)秒/);
  const parsedMinute = helpTimeMatch ? Number(helpTimeMatch[2]) >= 60 && !helpTimeMatch[1] ? Number(helpTimeMatch[2].slice(-2)) : Number(helpTimeMatch[2]) : null;
  const mainSkill = skill_default.list.flatMap((skill) => getSkillAliasList(skill.name).map((alias) => ({
    name: skill.name,
    match: findBestLine(alias, lineList)
  }))).toSorted((left, right) => right.match.score - left.match.score)[0];
  const primaryMainSkillLine = mainSkill ? getSkillAliasList(mainSkill.name).map((alias) => findBestLine(alias, primaryLineList)).toSorted((left, right) => right.score - left.score)[0] : null;
  const mainSkillLv = levelLineList.filter(
    (item) => item.line.y0 > (primaryMainSkillLine?.line?.y0 ?? pokemonLevelLine?.line.y0 ?? -1) && Number(item.match[1]) <= 7
  ).map((item) => Number(item.match[1]))[0] ?? null;
  const primaryDetailStatusLine = findBestLine("\u8A73\u7D30\u30B9\u30C6\u30FC\u30BF\u30B9", sourceCoordinateLineList);
  const subSkillLineList = sourceCoordinateLineList.filter(
    (line) => line.y0 > (primaryMainSkillLine?.line?.y0 ?? pokemonLevelLine?.line.y0 ?? -1) && (primaryDetailStatusLine?.score < 0.45 || line.y0 < primaryDetailStatusLine.line.y0)
  );
  const subSkillLineNameList = subSkillLineList.flatMap(splitSubSkillLine).map(
    (line) => sub_skill_default.list.map((subSkill) => {
      const textScore = getTextSimilarity(subSkill.name, line.text);
      const rarityScore = line.subSkillRarity == subSkill.rarity ? 0.16 : -0.08;
      return { name: subSkill.name, line, score: textScore + rarityScore };
    }).toSorted((a, b) => b.score - a.score)[0]
  ).filter((item) => item.score >= 0.72).toSorted((a, b) => b.score - a.score).filter((item, index, list2) => list2.findIndex((other) => other.name == item.name) == index).slice(0, 5).toSorted((a, b) => {
    const lineHeight = Math.max(a.line.y1 - a.line.y0, b.line.y1 - b.line.y0);
    return Math.abs(a.line.y0 - b.line.y0) <= lineHeight ? a.line.x0 - b.line.x0 : a.line.y0 - b.line.y0;
  }).map((item) => item.name);
  // ピル単位で読み取れたサブスキルは位置順に信頼できるので、行OCRの推定より優先する。
  // 3つ未満しか読めないとき（縮小された画像など）は従来の行OCRの結果を使う。
  const subSkillList = subSkillPillNameList && subSkillPillNameList.length >= 3 ? subSkillPillNameList : subSkillLineNameList;
  const nature = nature_default.list.map((item) => ({ name: item.name, match: findBestLine(item.name, lineList) })).toSorted((a, b) => b.match.score - a.match.score)[0];
  const result = {
    name: parsedName || null,
    pokemonName: null,
    lv,
    helpTime: helpTimeMatch ? `${helpTimeMatch[1] ? `${Number(helpTimeMatch[1])}\u6642\u9593` : ""}${parsedMinute}\u5206${Number(helpTimeMatch[3])}\u79D2` : null,
    bag: parseBag(rawText),
    foodList: foodRecognitionList.map((food) => food.name),
    mainSkillName: mainSkill?.match.score >= 0.65 ? mainSkill.name : null,
    mainSkillLv,
    subSkillList,
    nature: nature?.match && nature.match.score >= 0.65 ? nature.name : null,
    rawText
  };
  return correctResult(result, foodRecognitionList, iconName);
}
function isFoodCircleColor(red, green, blue) {
  return red >= 244 && green >= 238 && blue >= 190 && blue <= 244 && red - green <= 20 && green - blue >= 5;
}
function findFoodCircleRegions(sourceCanvas) {
  const scale = Math.min(1, FOOD_SEARCH_WIDTH / sourceCanvas.width);
  const canvas = createCanvas(Math.round(sourceCanvas.width * scale), Math.round(sourceCanvas.height * scale));
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);
  const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
  const mask = new Uint8Array(canvas.width * canvas.height);
  for (let index = 0; index < mask.length; index++) {
    const pixelIndex = index * 4;
    mask[index] = isFoodCircleColor(data[pixelIndex], data[pixelIndex + 1], data[pixelIndex + 2]) ? 1 : 0;
  }
  const regionList = [];
  const queue = [];
  for (let start = 0; start < mask.length; start++) {
    if (!mask[start]) continue;
    mask[start] = 0;
    queue.length = 0;
    queue.push(start);
    let queueIndex = 0;
    let area = 0;
    let minX = canvas.width;
    let minY = canvas.height;
    let maxX = 0;
    let maxY = 0;
    while (queueIndex < queue.length) {
      const index = queue[queueIndex++];
      const x = index % canvas.width;
      const y = Math.floor(index / canvas.width);
      area++;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      const neighborList = [index - 1, index + 1, index - canvas.width, index + canvas.width];
      for (const neighbor of neighborList) {
        if (neighbor < 0 || neighbor >= mask.length || !mask[neighbor]) continue;
        const neighborX = neighbor % canvas.width;
        if (Math.abs(neighborX - x) > 1) continue;
        mask[neighbor] = 0;
        queue.push(neighbor);
      }
    }
    const width = maxX - minX + 1;
    const height = maxY - minY + 1;
    const aspectRatio = width / height;
    const fillRate = area / (width * height);
    if (area >= 120 && width >= 20 && height >= 20 && width <= 75 && height <= 75 && aspectRatio >= 0.65 && aspectRatio <= 1.5 && fillRate >= 0.25) {
      regionList.push({
        x: minX / scale,
        y: minY / scale,
        width: width / scale,
        height: height / scale
      });
    }
  }
  return regionList;
}
function findGreenOutlineRegions(sourceCanvas) {
  const scale = Math.min(1, FOOD_SEARCH_WIDTH / sourceCanvas.width);
  const canvas = createCanvas(Math.round(sourceCanvas.width * scale), Math.round(sourceCanvas.height * scale));
  const context = canvas.getContext("2d", { willReadFrequently: true });
  context.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);
  const { data } = context.getImageData(0, 0, canvas.width, canvas.height);
  const greenCountByRow = new Array(canvas.height).fill(0);
  const minimumXByRow = new Array(canvas.height).fill(canvas.width);
  const maximumXByRow = new Array(canvas.height).fill(0);
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const pixelIndex = (y * canvas.width + x) * 4;
      const red = data[pixelIndex];
      const green = data[pixelIndex + 1];
      const blue = data[pixelIndex + 2];
      if (green >= 135 && green - red >= 25 && green - blue >= 10) {
        greenCountByRow[y]++;
        minimumXByRow[y] = Math.min(minimumXByRow[y], x);
        maximumXByRow[y] = Math.max(maximumXByRow[y], x);
      }
    }
  }
  const activeRowList = greenCountByRow.map((count) => count >= 3);
  const regionList = [];
  for (let startY = 0; startY < canvas.height; ) {
    if (!activeRowList[startY]) {
      startY++;
      continue;
    }
    let endY = startY;
    let lastActiveY = startY;
    while (endY + 1 < canvas.height && endY + 1 - lastActiveY <= 3) {
      endY++;
      if (activeRowList[endY]) lastActiveY = endY;
    }
    endY = lastActiveY;
    const minX = Math.min(...minimumXByRow.slice(startY, endY + 1));
    const maxX = Math.max(...maximumXByRow.slice(startY, endY + 1));
    const width = maxX - minX + 1;
    const height = endY - startY + 1;
    if (width >= canvas.width * 0.2 && height >= 8 && height <= 65) {
      const padding = 8;
      regionList.push({
        x: Math.max(0, minX - padding) / scale,
        y: Math.max(0, startY - padding) / scale,
        width: Math.min(canvas.width - Math.max(0, minX - padding), width + padding * 2) / scale,
        height: Math.min(canvas.height - Math.max(0, startY - padding), height + padding * 2) / scale
      });
    }
    startY = endY + 1;
  }
  return regionList;
}
function createSourceCoordinateRegionCanvas(sourceCanvas, regionList) {
  if (!regionList.length) return null;
  const canvas = createCanvas(sourceCanvas.width, sourceCanvas.height);
  const context = canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  for (const region of regionList) {
    context.drawImage(
      sourceCanvas,
      region.x,
      region.y,
      region.width,
      region.height,
      region.x,
      region.y,
      region.width,
      region.height
    );
  }
  return createTextCanvas(canvas, true);
}
function getFoodNumberRegionList(foodRecognitionList, sourceCanvas) {
  return foodRecognitionList.map(({ region }) => ({
    // 個数はアイコン右下へ重ねて表示されるため、その周囲だけを残してOCRの背景ノイズを減らす。
    x: Math.max(0, region.x + region.width * 0.5),
    y: Math.max(0, region.y + region.height * 0.5),
    width: Math.min(region.width * 0.7, sourceCanvas.width - region.x - region.width * 0.5),
    height: Math.min(region.height * 0.6, sourceCanvas.height - region.y - region.height * 0.5)
  }));
}
function createFoodNumberCanvas(sourceCanvas, foodRecognitionList) {
  if (!foodRecognitionList.length) return null;
  const scale = 5;
  const padding = 16;
  const regionList = getFoodNumberRegionList(foodRecognitionList, sourceCanvas);
  const width = Math.ceil(Math.max(...regionList.map((region) => region.width)) * scale);
  const sectionHeightList = regionList.map((region) => Math.ceil(region.height * scale) + padding);
  const canvas = createCanvas(width, sectionHeightList.reduce((sum, height) => sum + height, 0));
  const context = canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  const sectionList = [];
  let y = 0;
  for (const region of regionList) {
    const height = Math.ceil(region.height * scale);
    context.drawImage(
      sourceCanvas,
      region.x,
      region.y,
      region.width,
      region.height,
      0,
      y,
      region.width * scale,
      region.height * scale
    );
    sectionList.push({ startY: y, endY: y + height });
    y += height + padding;
  }
  return { canvas: createTextCanvas(canvas, true), sectionList };
}
function setFoodNumberListFromCropped(foodRecognitionList, lineList, sectionList) {
  for (const line of lineList) {
    const match = normalizeText(line.text).match(/([0-9]+)/);
    if (!match) continue;
    const centerY = (line.y0 + line.y1) / 2;
    const slotIndex = sectionList.findIndex((section) => centerY >= section.startY && centerY <= section.endY);
    if (slotIndex >= 0 && foodRecognitionList[slotIndex].num == null) {
      const recognizedNumber = Number(match[1]);
      foodRecognitionList[slotIndex].num = recognizedNumber > 20 ? Number(match[1].at(-1)) : recognizedNumber;
    }
  }
}
function selectFoodSlotRegions(regionList) {
  const rowList = [];
  for (const region of regionList.toSorted((a, b) => a.y - b.y)) {
    const centerY = region.y + region.height / 2;
    const row = rowList.find((row2) => {
      const reference = row2[0];
      const referenceCenterY = reference.y + reference.height / 2;
      return Math.abs(centerY - referenceCenterY) <= Math.max(region.height, reference.height) * 0.55;
    });
    if (row) row.push(region);
    else rowList.push([region]);
  }
  const foodRow = rowList.filter((row) => row.length >= 2).toSorted((a, b) => b.length - a.length || a[0].y - b[0].y)[0];
  if (!foodRow) return [];
  const sortedFoodRow = foodRow.toSorted((a, b) => a.x - b.x);
  let slotList = [];
  if (sortedFoodRow.length >= 3) {
    slotList = Array.from({ length: sortedFoodRow.length - 2 }, (_, index) => sortedFoodRow.slice(index, index + 3)).toSorted((left, right) => {
      const leftFirstInterval = left[1].x + left[1].width / 2 - (left[0].x + left[0].width / 2);
      const leftSecondInterval = left[2].x + left[2].width / 2 - (left[1].x + left[1].width / 2);
      const rightFirstInterval = right[1].x + right[1].width / 2 - (right[0].x + right[0].width / 2);
      const rightSecondInterval = right[2].x + right[2].width / 2 - (right[1].x + right[1].width / 2);
      return Math.abs(leftFirstInterval - leftSecondInterval) - Math.abs(rightFirstInterval - rightSecondInterval);
    })[0];
    const firstInterval = slotList[1].x + slotList[1].width / 2 - (slotList[0].x + slotList[0].width / 2);
    const secondInterval = slotList[2].x + slotList[2].width / 2 - (slotList[1].x + slotList[1].width / 2);
    if (Math.abs(firstInterval - secondInterval) > Math.min(firstInterval, secondInterval) * 0.35) slotList = [];
  }
  if (!slotList.length) {
    const averageSize = sortedFoodRow.reduce((sum, region) => sum + Math.max(region.width, region.height), 0) / sortedFoodRow.length;
    const pair = Array.from({ length: sortedFoodRow.length - 1 }, (_, index) => sortedFoodRow.slice(index, index + 2)).filter(([left, right]) => {
      const interval = right.x + right.width / 2 - (left.x + left.width / 2);
      return interval >= averageSize * 0.8 && interval <= averageSize * 1.8;
    }).at(-1);
    if (pair) slotList = pair;
  }
  if (slotList.length == 2) {
    const [second, third] = slotList;
    const interval = third.x + third.width / 2 - (second.x + second.width / 2);
    slotList = [{ ...second, x: second.x - interval, occluded: true }, second, third];
  }
  return slotList;
}
function setFoodNumberList(foodRecognitionList, lineList) {
  const numberLineList = lineList.flatMap((line) => {
    const match = normalizeText(line.text).match(/^[x×][^0-9]*([0-9]+)/i);
    return match ? [{ line, num: Number(match[1]) }] : [];
  });
  for (const recognition of foodRecognitionList) recognition.num = null;
  for (const item of numberLineList) {
    const lineCenterX = (item.line.x0 + item.line.x1) / 2;
    const recognition = foodRecognitionList.filter(
      (candidate) => item.line.y0 >= candidate.region.y + candidate.region.height * 0.35 && item.line.y0 <= candidate.region.y + candidate.region.height * 1.5 && Math.abs(lineCenterX - (candidate.region.x + candidate.region.width / 2)) <= candidate.region.width
    ).toSorted(
      (left, right) => Math.abs(lineCenterX - (left.region.x + left.region.width / 2)) - Math.abs(lineCenterX - (right.region.x + right.region.width / 2))
    )[0];
    if (recognition) recognition.num = item.num;
  }
}
function createColorHistogram(canvas, region, template = false) {
  const size = 48;
  const normalizedCanvas = createCanvas(size, size);
  const context = normalizedCanvas.getContext("2d", { willReadFrequently: true });
  context.clearRect(0, 0, size, size);
  if (region) {
    const side = Math.max(region.width, region.height) * 1.05;
    const centerX = region.x + region.width / 2;
    const centerY = region.y + region.height / 2;
    context.drawImage(canvas, centerX - side / 2, centerY - side / 2, side, side, 0, 0, size, size);
  } else {
    context.drawImage(canvas, 0, 0, size, size);
  }
  const { data } = context.getImageData(0, 0, size, size);
  const histogram = new Array(24).fill(0);
  for (let i = 0; i < data.length; i += 4) {
    const red = data[i] / 255;
    const green = data[i + 1] / 255;
    const blue = data[i + 2] / 255;
    const alpha = data[i + 3] / 255;
    const maximum = Math.max(red, green, blue);
    const minimum = Math.min(red, green, blue);
    const chroma = maximum - minimum;
    if (alpha < 0.2) continue;
    if (!template && red > 0.86 && green > 0.86 && blue > 0.72 && chroma < 0.2) continue;
    if (chroma < 0.08 && maximum > 0.65) continue;
    let hue = 0;
    if (chroma > 0) {
      if (maximum == red) hue = ((green - blue) / chroma + 6) % 6;
      else if (maximum == green) hue = (blue - red) / chroma + 2;
      else hue = (red - green) / chroma + 4;
      hue /= 6;
    }
    const saturation = maximum == 0 ? 0 : chroma / maximum;
    const weight = 0.25 + saturation;
    histogram[Math.min(11, Math.floor(hue * 12))] += weight;
    histogram[12 + Math.min(5, Math.floor(maximum * 6))] += weight;
    histogram[18 + Math.min(5, Math.floor(saturation * 6))] += weight;
  }
  const norm = Math.sqrt(histogram.reduce((sum, value) => sum + value * value, 0)) || 1;
  return histogram.map((value) => value / norm);
}
function createNormalizedPixels(canvas, region, template = false, minimumYRate = 0) {
  const size = 48;
  const normalizedCanvas = createCanvas(size, size);
  const context = normalizedCanvas.getContext("2d", { willReadFrequently: true });
  context.clearRect(0, 0, size, size);
  if (region) {
    const side = Math.max(region.width, region.height) * 1.05;
    const centerX = region.x + region.width / 2;
    const centerY = region.y + region.height / 2;
    context.drawImage(canvas, centerX - side / 2, centerY - side / 2, side, side, 0, 0, size, size);
  } else {
    context.drawImage(canvas, 0, 0, size, size);
  }
  const { data } = context.getImageData(0, 0, size, size);
  return Array.from({ length: size * size }, (_, index) => {
    const pixelIndex = index * 4;
    const red = data[pixelIndex] / 255;
    const green = data[pixelIndex + 1] / 255;
    const blue = data[pixelIndex + 2] / 255;
    const alpha = data[pixelIndex + 3] / 255;
    const maximum = Math.max(red, green, blue);
    const minimum = Math.min(red, green, blue);
    const chroma = maximum - minimum;
    const isBackground = Math.floor(index / size) / size < minimumYRate || alpha < 0.2 || !template && red > 0.86 && green > 0.86 && blue > 0.72 && chroma < 0.2 || chroma < 0.08 && maximum > 0.65;
    return { red, green, blue, foreground: !isBackground };
  });
}
function getPixelSimilarity(source, template) {
  const side = Math.sqrt(source.length);
  const sourceForeground = source.filter((pixel) => pixel.foreground).length;
  const templateForeground = template.filter((pixel) => pixel.foreground).length;
  const opacityScoreList = [1, 0.75, 0.5, 0.35, 0.25].map(
    (opacity) => Math.max(...[-3, 0, 3].flatMap((offsetY) => [-3, 0, 3].map((offsetX) => {
      let matched = 0;
      for (let sourceIndex = 0; sourceIndex < source.length; sourceIndex++) {
        if (!source[sourceIndex].foreground) continue;
        const sourceX = sourceIndex % side;
        const sourceY = Math.floor(sourceIndex / side);
        const templateX = sourceX + offsetX;
        const templateY = sourceY + offsetY;
        if (templateX < 0 || templateX >= side || templateY < 0 || templateY >= side) continue;
        const templatePixel = template[templateY * side + templateX];
        if (!templatePixel.foreground) continue;
        const templateRed = 1 - (1 - templatePixel.red) * opacity;
        const templateGreen = 1 - (1 - templatePixel.green) * opacity;
        const templateBlue = 1 - (1 - templatePixel.blue) * opacity;
        const colorDistance = (Math.abs(source[sourceIndex].red - templateRed) + Math.abs(source[sourceIndex].green - templateGreen) + Math.abs(source[sourceIndex].blue - templateBlue)) / 3;
        matched += Math.max(0, 1 - colorDistance * 2.5);
      }
      return matched / Math.sqrt(Math.max(1, sourceForeground * templateForeground));
    })))
  );
  return opacityScoreList[0] * 0.25 + Math.max(...opacityScoreList) * 0.75;
}
function cosineSimilarity(left, right) {
  return left.reduce((sum, value, index) => sum + value * right[index], 0);
}
async function recognizeFoodList(sourceCanvas) {
  const slotList = selectFoodSlotRegions(findFoodCircleRegions(sourceCanvas));
  if (!slotList.length) return [];
  const templateList = await Promise.all(Food.list.map(async (food) => {
    const image = await loadImage(food.img);
    const canvas = drawImageToCanvas(image, image.naturalWidth, image.naturalHeight);
    return {
      name: food.name,
      histogram: createColorHistogram(canvas, void 0, true),
      pixels: createNormalizedPixels(canvas, void 0, true),
      lowerPixels: createNormalizedPixels(canvas, void 0, true, 0.62)
    };
  }));
  return slotList.map((region) => {
    const histogram = createColorHistogram(sourceCanvas, region);
    const pixels = createNormalizedPixels(sourceCanvas, region, false, region.occluded ? 0.62 : 0);
    const foregroundPixels = pixels.filter((pixel) => pixel.foreground);
    const sourceChroma = foregroundPixels.reduce(
      (sum, pixel) => sum + Math.max(pixel.red, pixel.green, pixel.blue) - Math.min(pixel.red, pixel.green, pixel.blue),
      0
    ) / Math.max(1, foregroundPixels.length);
    const matchList = templateList.map((template) => {
      const histogramScore = cosineSimilarity(histogram, template.histogram);
      const pixelScore = getPixelSimilarity(pixels, region.occluded ? template.lowerPixels : template.pixels);
      return {
        name: template.name,
        score: region.occluded ? pixelScore : template.name == "\u3068\u304F\u305B\u3093\u30A8\u30C3\u30B0" ? Math.max(histogramScore * 0.35 + pixelScore * 0.65, histogramScore * 0.1 + pixelScore * 0.9) + 0.01 + (sourceChroma < 0.18 ? 0.08 : 0) : histogramScore * 0.35 + pixelScore * 0.65
      };
    }).toSorted((a, b) => b.score - a.score);
    const bestMatch = matchList[0];
    const normalizedSide = Math.sqrt(pixels.length);
    const centerPixels = pixels.filter((_, index) => {
      const x = index % normalizedSide;
      const y = Math.floor(index / normalizedSide);
      return x >= normalizedSide * 0.2 && x < normalizedSide * 0.8 && y >= normalizedSide * 0.2 && y < normalizedSide * 0.8;
    });
    const foregroundRate = centerPixels.filter((pixel) => pixel.foreground).length / centerPixels.length;
    const coloredForegroundRate = centerPixels.filter(
      (pixel) => pixel.foreground && Math.max(pixel.red, pixel.green, pixel.blue) - Math.min(pixel.red, pixel.green, pixel.blue) >= 0.1
    ).length / centerPixels.length;
    const empty = !region.occluded && (foregroundRate < 0.02 || coloredForegroundRate < 0.12);
    const minimumScore = region.occluded ? 0.15 : 0.3;
    return {
      name: !empty && bestMatch && bestMatch.score >= minimumScore ? bestMatch.name : null,
      num: null,
      region,
      matchList,
      empty
    };
  });
}
// --- サブスキルのピル読み取り -------------------------------------------------
// 画面のスクロール量や端末の機種で位置がずれても読めるように、緑の見出し帯
// （メインスキル・サブスキル / 詳細ステータス）を基準に帯を決め、その中の
// 角丸ピルを色と行の分布から探して、1枚ずつ拡大・二値化してからOCRする。
function subSkillRunList(flagList, minimumGap) {
  const runList = [];
  let start = -1;
  let last = -1;
  for (let index = 0; index < flagList.length; index++) {
    if (!flagList[index]) continue;
    if (start < 0) start = index;
    else if (index - last > minimumGap) {
      runList.push([start, last]);
      start = index;
    }
    last = index;
  }
  if (start >= 0) runList.push([start, last]);
  return runList;
}
function subSkillRegionGray(sourceCanvas, x, y, width, height) {
  const context = sourceCanvas.getContext("2d", { willReadFrequently: true });
  const { data } = context.getImageData(x, y, width, height);
  const gray = new Float32Array(width * height);
  const chroma = new Uint8Array(width * height);
  for (let index = 0; index < gray.length; index++) {
    const pixelIndex = index * 4;
    const red = data[pixelIndex];
    const green = data[pixelIndex + 1];
    const blue = data[pixelIndex + 2];
    gray[index] = red * 0.299 + green * 0.587 + blue * 0.114;
    chroma[index] = Math.max(red, green, blue) - Math.min(red, green, blue);
  }
  return { gray, chroma };
}
function findSubSkillBarList(sourceCanvas) {
  const width = sourceCanvas.width;
  const height = sourceCanvas.height;
  const context = sourceCanvas.getContext("2d", { willReadFrequently: true });
  const { data } = context.getImageData(0, 0, width, height);
  const greenCountByRow = new Array(height).fill(0);
  for (let y = 0; y < height; y++) {
    let count = 0;
    for (let x = 0; x < width; x++) {
      const pixelIndex = (y * width + x) * 4;
      const red = data[pixelIndex];
      const green = data[pixelIndex + 1];
      const blue = data[pixelIndex + 2];
      if (green >= 150 && green - red >= 45 && green - blue >= 40) count++;
    }
    greenCountByRow[y] = count;
  }
  // 見出し帯は横幅いっぱいの塗り、左側の緑ラベル（食材・おてつだい時間など）はずっと細い。
  const barList = [];
  for (const [start, end] of subSkillRunList(greenCountByRow.map((count) => count >= width * 0.6), 4)) {
    const barHeight = end - start + 1;
    if (barHeight >= 20 && barHeight <= 320) barList.push({ y: start, height: barHeight });
  }
  return barList;
}
function findSubSkillBand(sourceCanvas) {
  const barList = findSubSkillBarList(sourceCanvas);
  if (barList.length >= 2) {
    return { y0: barList[0].y + barList[0].height, y1: barList[1].y };
  }
  if (barList.length == 1) {
    return { y0: barList[0].y + barList[0].height, y1: Math.round(sourceCanvas.height * 0.98) };
  }
  return { y0: 0, y1: sourceCanvas.height };
}
function findSubSkillPillRegionList(sourceCanvas, band) {
  const width = sourceCanvas.width;
  const height = band.y1 - band.y0;
  if (width < 120 || height < 40) return [];
  const { gray, chroma } = subSkillRegionGray(sourceCanvas, 0, band.y0, width, height);
  const mask = new Uint8Array(width * height);
  for (let index = 0; index < mask.length; index++) {
    mask[index] = gray[index] < 246 || chroma[index] > 12 ? 1 : 0;
  }
  const rowCount = new Array(height).fill(0);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) rowCount[y] += mask[y * width + x];
  }
  const rowList = subSkillRunList(rowCount.map((count) => count > width * 0.02), 14).map(([start, end]) => [start + band.y0, end + band.y0]).filter(([start, end]) => end - start >= 40 && end - start <= 260);
  const regionList = [];
  for (const [rowStart, rowEnd] of rowList) {
    const columnCount = new Array(width).fill(0);
    for (let y = rowStart; y <= rowEnd; y++) {
      for (let x = 0; x < width; x++) columnCount[x] += mask[(y - band.y0) * width + x];
    }
    const columnList = subSkillRunList(columnCount.map((count) => count > 2), 16).filter(([start, end]) => end - start >= width * 0.18 && end - start <= width * 0.55);
    for (const [columnStart, columnEnd] of columnList) {
      regionList.push({ x: columnStart, y: rowStart, width: columnEnd - columnStart + 1, height: rowEnd - rowStart + 1 });
    }
  }
  return regionList;
}
// ピルの中の文字の行（Lv.50 のような鍵バッジは避ける）を切り出し、濃淡を伸ばして拡大する。
function createSubSkillLineCanvas(sourceCanvas, region, option) {
  const scale = option?.scale ?? 3;
  const padding = option?.padding ?? 0.05;
  const darkRate = option?.darkRate ?? 0.02;
  const lightRate = option?.lightRate ?? 0.9;
  const border = Math.max(3, Math.round(region.height * 0.12));
  const width = region.width - border * 2;
  const height = region.height - border * 2;
  if (width < 20 || height < 16) return null;
  const { gray } = subSkillRegionGray(sourceCanvas, region.x + border, region.y + border, width, height);
  const threshold = 190;
  const rowInk = new Array(height).fill(0);
  const columnInk = new Array(width).fill(0);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (gray[y * width + x] < threshold) {
        rowInk[y]++;
        columnInk[x]++;
      }
    }
  }
  // 端から端まで埋まった行・列は枠線なので文字の行から除く。
  const rowFlagList = rowInk.map((count) => count > width * 0.01 && count < width * 0.7);
  const columnIsText = columnInk.map((count) => count < height * 0.7);
  const lineList = subSkillRunList(rowFlagList, 3).map(([start, end]) => {
    const hitList = new Uint8Array(width);
    let ink = 0;
    for (let y = start; y <= end; y++) {
      for (let x = 0; x < width; x++) {
        if (columnIsText[x] && gray[y * width + x] < threshold) {
          hitList[x] = 1;
          ink++;
        }
      }
    }
    return { start, end, ink, coverage: hitList.reduce((sum, value) => sum + value, 0) };
  }).filter((line) => line.end - line.start >= 8);
  if (!lineList.length) return null;
  const line = lineList.toSorted((left, right) => right.coverage - left.coverage || right.ink - left.ink)[0];
  const lineY = Math.max(0, line.start - Math.round(height * padding));
  const lineHeight = Math.min(height - lineY, line.end - line.start + 1 + Math.round(height * padding * 2));
  const histogram = new Array(256).fill(0);
  let total = 0;
  for (let y = lineY; y < lineY + lineHeight; y++) {
    for (let x = 0; x < width; x++) {
      histogram[Math.min(255, Math.max(0, Math.round(gray[y * width + x])))]++;
      total++;
    }
  }
  let accumulated = 0;
  let dark = 0;
  let light = 255;
  for (let value = 0; value < 256; value++) {
    accumulated += histogram[value];
    if (accumulated >= total * darkRate) {
      dark = value;
      break;
    }
  }
  accumulated = 0;
  for (let value = 0; value < 256; value++) {
    accumulated += histogram[value];
    if (accumulated >= total * lightRate) {
      light = value;
      break;
    }
  }
  const span = Math.max(20, light - dark);
  const canvas = createCanvas(Math.round(width * scale), Math.round(lineHeight * scale));
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const imageData = context.createImageData(canvas.width, canvas.height);
  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const sourceX = Math.min(width - 1, Math.floor(x / scale));
      const sourceY = Math.min(lineHeight - 1, Math.floor(y / scale));
      const value = (gray[(lineY + sourceY) * width + sourceX] - dark) / span < 0.5 ? 0 : 255;
      const pixelIndex = (y * canvas.width + x) * 4;
      imageData.data[pixelIndex] = value;
      imageData.data[pixelIndex + 1] = value;
      imageData.data[pixelIndex + 2] = value;
      imageData.data[pixelIndex + 3] = 255;
    }
  }
  context.putImageData(imageData, 0, 0);
  return canvas;
}
function selectSubSkillName(recognizedText) {
  const cleaned = normalizeText(recognizedText).replace(/Lv\.?[0-9]+/gi, "");
  if (!cleaned) return null;
  // 「M」「L」の読み分けは最後の1文字に頼りやすいので、末尾の記号が読めている間はその大きさだけを候補にする。
  const sizeMatch = cleaned.match(/([SML])$/);
  const sizeFilteredList = sizeMatch ? sub_skill_default.list.filter((subSkill) => subSkill.name.endsWith(sizeMatch[1])) : [];
  const candidateList = sizeFilteredList.length ? sizeFilteredList : sub_skill_default.list;
  const best = candidateList.map((subSkill) => ({ name: subSkill.name, score: getTextSimilarity(subSkill.name, cleaned) })).toSorted((left, right) => right.score - left.score)[0];
  return best && best.score >= 0.62 ? best.name : null;
}
async function recognizeSubSkillNameList(sourceCanvas, worker) {
  const regionList = findSubSkillPillRegionList(sourceCanvas, findSubSkillBand(sourceCanvas));
  if (!regionList.length) return [];
  await worker.setParameters({
    tessedit_pageseg_mode: import_tesseract.default.PSM.SINGLE_LINE,
    preserve_interword_spaces: "0"
  });
  const nameList = [];
  try {
    // 時間がかかりすぎないよう、候補は上から順に最大8個まで見る（5つ読めたら終了）。
    for (const region of regionList.slice(0, 8)) {
      if (nameList.length >= 5) break;
      const optionList = [
        { scale: 3, padding: 0.05, darkRate: 0.02, lightRate: 0.9 },
        { scale: 4, padding: 0.08, darkRate: 0.01, lightRate: 0.8 }
      ];
      let name = null;
      for (const option of optionList) {
        const canvas = createSubSkillLineCanvas(sourceCanvas, region, option);
        if (!canvas) continue;
        const result = await worker.recognize(canvas, {}, { text: true });
        name = selectSubSkillName(result.data.text);
        if (name) break;
      }
      if (name && !nameList.includes(name)) nameList.push(name);
    }
  } finally {
    await worker.setParameters({
      tessedit_pageseg_mode: import_tesseract.default.PSM.SPARSE_TEXT,
      preserve_interword_spaces: "1"
    });
  }
  return nameList.slice(0, 5);
}

var PokemonStatusImageReader = class {
  #worker = null;
  async #getWorker(onProgress) {
    if (this.#worker) return this.#worker;
    const ocrAssetPath = new URL('./ocr', import.meta.url).href.replace(/\/$/, "");
    this.#worker = await import_tesseract.default.createWorker("jpn", import_tesseract.default.OEM.LSTM_ONLY, {
      workerPath: `${ocrAssetPath}/worker.min.js`,
      corePath: `${ocrAssetPath}/tesseract-core-lstm.wasm.js`,
      langPath: ocrAssetPath,
      gzip: false,
      logger: (message) => onProgress?.(message.status, message.progress)
    });
    await this.#worker.setParameters({
      tessedit_pageseg_mode: import_tesseract.default.PSM.SPARSE_TEXT,
      preserve_interword_spaces: "1"
    });
    return this.#worker;
  }
  async read(source, iconName, onProgress) {
    const image = await loadImage(source);
    const sourceCanvas = drawImageToCanvas(image, image.naturalWidth, image.naturalHeight);
    const textCanvas = createTextCanvas(sourceCanvas);
    const worker = await this.#getWorker(onProgress);
    const [rawResult, binaryResult, foodList] = await Promise.all([
      worker.recognize(sourceCanvas, {}, { text: true, blocks: true }),
      worker.recognize(textCanvas, {}, { text: true, blocks: true }),
      recognizeFoodList(sourceCanvas)
    ]);
    const greenOutlineRegionList = findGreenOutlineRegions(sourceCanvas);
    const sourceCoordinateRegionCanvas = createSourceCoordinateRegionCanvas(sourceCanvas, [
      ...greenOutlineRegionList,
      ...getFoodNumberRegionList(foodList, sourceCanvas)
    ]);
    const outlinedRegionResult = sourceCoordinateRegionCanvas ? await worker.recognize(sourceCoordinateRegionCanvas, {}, { text: true, blocks: true }) : null;
    const primaryLineList = flattenLines(rawResult.data.blocks);
    const binaryLineList = flattenLines(binaryResult.data.blocks);
    setSubSkillRarity(primaryLineList, sourceCanvas);
    setSubSkillRarity(binaryLineList, sourceCanvas);
    const outlinedLineList = flattenLines(outlinedRegionResult?.data.blocks ?? null);
    setSubSkillRarity(outlinedLineList, sourceCanvas);
    setFoodNumberList(foodList, [...primaryLineList, ...binaryLineList, ...outlinedLineList]);
    const foodNumberCanvas = createFoodNumberCanvas(sourceCanvas, foodList);
    if (foodNumberCanvas) {
      await worker.setParameters({
        tessedit_char_whitelist: "xX\xD70123456789",
        tessedit_pageseg_mode: import_tesseract.default.PSM.SPARSE_TEXT
      });
      const foodNumberResult = await worker.recognize(foodNumberCanvas.canvas, {}, { blocks: true });
      setFoodNumberListFromCropped(
        foodList,
        flattenLines(foodNumberResult.data.blocks),
        foodNumberCanvas.sectionList
      );
      await worker.setParameters({ tessedit_char_whitelist: "" });
    }
    const lineList = [
      ...primaryLineList,
      ...binaryLineList,
      ...outlinedLineList
    ];
    const rawText = `${rawResult.data.text}
${binaryResult.data.text}
${outlinedRegionResult?.data.text ?? ""}`;
    // サブスキルは小さく淡い文字が並び、全体OCRの行だけでは取りこぼす。
    // ピル単位で読み取った並び（Lv10→Lv80の位置順）を、Lvや最大所持数の補正より先に渡す。
    const subSkillPillNameList = await recognizeSubSkillNameList(sourceCanvas, worker);
    return parseData(iconName, rawText, lineList, foodList, primaryLineList, lineList, subSkillPillNameList);
  }
  async terminate() {
    await this.#worker?.terminate();
    this.#worker = null;
  }
};
export {
  PokemonStatusImageReader as default
};
