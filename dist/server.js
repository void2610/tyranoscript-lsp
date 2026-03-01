"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// node_modules/vscode-languageserver/lib/common/utils/is.js
var require_is = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.thenable = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function thenable(value) {
      return value && func(value.then);
    }
    exports2.thenable = thenable;
  }
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is2 = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Message = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType = exports2.RequestType0 = exports2.AbstractMessageSignature = exports2.ParameterStructures = exports2.ResponseError = exports2.ErrorCodes = void 0;
    var is = require_is2();
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes || (exports2.ErrorCodes = ErrorCodes = {}));
    var ResponseError = class _ResponseError extends Error {
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, _ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports2.ResponseError = ResponseError;
    var ParameterStructures = class _ParameterStructures {
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === _ParameterStructures.auto || value === _ParameterStructures.byName || value === _ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports2.ParameterStructures = ParameterStructures;
    ParameterStructures.auto = new ParameterStructures("auto");
    ParameterStructures.byPosition = new ParameterStructures("byPosition");
    ParameterStructures.byName = new ParameterStructures("byName");
    var AbstractMessageSignature = class {
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports2.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports2.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports2.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports2.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports2.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports2.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports2.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports2.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports2.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports2.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports2.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message || (exports2.Message = Message = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LRUCache = exports2.LinkedMap = exports2.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch || (exports2.Touch = Touch = {}));
    var LinkedMap = class {
      constructor() {
        this[_a] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports2.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports2.LRUCache = LRUCache;
  }
});

// node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Disposable = void 0;
    var Disposable;
    (function(Disposable2) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable2.create = create;
    })(Disposable || (exports2.Disposable = Disposable = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports2.default = RAL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/events.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Emitter = exports2.Event = void 0;
    var ral_1 = require_ral();
    var Event;
    (function(Event2) {
      const _disposable = { dispose() {
      } };
      Event2.None = function() {
        return _disposable;
      };
    })(Event || (exports2.Event = Event = {}));
    var CallbackList = class {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter = class _Emitter {
      constructor(_options) {
        this._options = _options;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = _Emitter._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports2.Emitter = Emitter;
    Emitter._noop = function() {
    };
  }
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CancellationTokenSource = exports2.CancellationToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var CancellationToken;
    (function(CancellationToken2) {
      CancellationToken2.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken2.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken2.None || candidate === CancellationToken2.Cancelled || Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken2.is = is;
    })(CancellationToken || (exports2.CancellationToken = CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource = class {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports2.CancellationTokenSource = CancellationTokenSource;
  }
});

// node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js
var require_sharedArrayCancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = void 0;
    var cancellation_1 = require_cancellation();
    var CancellationState;
    (function(CancellationState2) {
      CancellationState2.Continue = 0;
      CancellationState2.Cancelled = 1;
    })(CancellationState || (CancellationState = {}));
    var SharedArraySenderStrategy = class {
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(request) {
        if (request.id === null) {
          return;
        }
        const buffer = new SharedArrayBuffer(4);
        const data = new Int32Array(buffer, 0, 1);
        data[0] = CancellationState.Continue;
        this.buffers.set(request.id, buffer);
        request.$cancellationData = buffer;
      }
      async sendCancellation(_conn, id) {
        const buffer = this.buffers.get(id);
        if (buffer === void 0) {
          return;
        }
        const data = new Int32Array(buffer, 0, 1);
        Atomics.store(data, 0, CancellationState.Cancelled);
      }
      cleanup(id) {
        this.buffers.delete(id);
      }
      dispose() {
        this.buffers.clear();
      }
    };
    exports2.SharedArraySenderStrategy = SharedArraySenderStrategy;
    var SharedArrayBufferCancellationToken = class {
      constructor(buffer) {
        this.data = new Int32Array(buffer, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
      }
    };
    var SharedArrayBufferCancellationTokenSource = class {
      constructor(buffer) {
        this.token = new SharedArrayBufferCancellationToken(buffer);
      }
      cancel() {
      }
      dispose() {
      }
    };
    var SharedArrayReceiverStrategy = class {
      constructor() {
        this.kind = "request";
      }
      createCancellationTokenSource(request) {
        const buffer = request.$cancellationData;
        if (buffer === void 0) {
          return new cancellation_1.CancellationTokenSource();
        }
        return new SharedArrayBufferCancellationTokenSource(buffer);
      }
    };
    exports2.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
  }
});

// node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Semaphore = void 0;
    var ral_1 = require_ral();
    var Semaphore = class {
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve2, reject) => {
          this._waiting.push({ thunk, resolve: resolve2, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`To many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports2.Semaphore = Semaphore;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var events_1 = require_events();
    var semaphore_1 = require_semaphore();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) && Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader || (exports2.MessageReader = MessageReader = {}));
    var AbstractMessageReader = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.readSemaphore = new semaphore_1.Semaphore(1);
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        try {
          this.buffer.append(data);
          while (true) {
            if (this.nextMessageLength === -1) {
              const headers = this.buffer.tryReadHeaders(true);
              if (!headers) {
                return;
              }
              const contentLength = headers.get("content-length");
              if (!contentLength) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(headers))}`));
                return;
              }
              const length = parseInt(contentLength);
              if (isNaN(length)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
                return;
              }
              this.nextMessageLength = length;
            }
            const body = this.buffer.tryReadBody(this.nextMessageLength);
            if (body === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer();
            this.nextMessageLength = -1;
            this.readSemaphore.lock(async () => {
              const bytes = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(body) : body;
              const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
              this.callback(message);
            }).catch((error) => {
              this.fireError(error);
            });
          }
        } catch (error) {
          this.fireError(error);
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports2.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        let candidate = value;
        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) && Is.func(candidate.onError) && Is.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter || (exports2.MessageWriter = MessageWriter = {}));
    var AbstractMessageWriter = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports2.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports2.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders(lowerCaseKeys = false) {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row: while (chunkIndex < this._chunks.length) {
          const chunk = this._chunks[chunkIndex];
          offset = 0;
          column: while (offset < chunk.length) {
            const value = chunk[offset];
            switch (value) {
              case CR:
                switch (state) {
                  case 0:
                    state = 1;
                    break;
                  case 2:
                    state = 3;
                    break;
                  default:
                    state = 0;
                }
                break;
              case LF:
                switch (state) {
                  case 1:
                    state = 2;
                    break;
                  case 3:
                    state = 4;
                    offset++;
                    break row;
                  default:
                    state = 0;
                }
                break;
              default:
                state = 0;
            }
            offset++;
          }
          chunkBytesRead += chunk.byteLength;
          chunkIndex++;
        }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error(`Message header must separate key and value using ':'
${header}`);
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        let chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports2.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.ConnectionOptions = exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.RequestCancellationReceiverStrategy = exports2.IdCancellationReceiverStrategy = exports2.ConnectionStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = exports2.NullLogger = exports2.ProgressType = exports2.ProgressToken = void 0;
    var ral_1 = require_ral();
    var Is = require_is2();
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken || (exports2.ProgressToken = ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      constructor() {
      }
    };
    exports2.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports2.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace;
    (function(Trace2) {
      Trace2[Trace2["Off"] = 0] = "Off";
      Trace2[Trace2["Messages"] = 1] = "Messages";
      Trace2[Trace2["Compact"] = 2] = "Compact";
      Trace2[Trace2["Verbose"] = 3] = "Verbose";
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceValues;
    (function(TraceValues2) {
      TraceValues2.Off = "off";
      TraceValues2.Messages = "messages";
      TraceValues2.Compact = "compact";
      TraceValues2.Verbose = "verbose";
    })(TraceValues || (exports2.TraceValues = TraceValues = {}));
    (function(Trace2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return Trace2.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace2.Off;
          case "messages":
            return Trace2.Messages;
          case "compact":
            return Trace2.Compact;
          case "verbose":
            return Trace2.Verbose;
          default:
            return Trace2.Off;
        }
      }
      Trace2.fromString = fromString;
      function toString(value) {
        switch (value) {
          case Trace2.Off:
            return "off";
          case Trace2.Messages:
            return "messages";
          case Trace2.Compact:
            return "compact";
          case Trace2.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace2.toString = toString;
    })(Trace || (exports2.Trace = Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat || (exports2.TraceFormat = TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification || (exports2.SetTraceNotification = SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification || (exports2.LogTraceNotification = LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors || (exports2.ConnectionErrors = ConnectionErrors = {}));
    var ConnectionError = class _ConnectionError extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, _ConnectionError.prototype);
      }
    };
    exports2.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy || (exports2.ConnectionStrategy = ConnectionStrategy = {}));
    var IdCancellationReceiverStrategy;
    (function(IdCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.kind === void 0 || candidate.kind === "id") && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      IdCancellationReceiverStrategy2.is = is;
    })(IdCancellationReceiverStrategy || (exports2.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
    var RequestCancellationReceiverStrategy;
    (function(RequestCancellationReceiverStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && candidate.kind === "request" && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === void 0 || Is.func(candidate.dispose));
      }
      RequestCancellationReceiverStrategy2.is = is;
    })(RequestCancellationReceiverStrategy || (exports2.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy || (exports2.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy || (exports2.CancellationSenderStrategy = CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy || (exports2.CancellationStrategy = CancellationStrategy = {}));
    var MessageStrategy;
    (function(MessageStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.func(candidate.handleMessage);
      }
      MessageStrategy2.is = is;
    })(MessageStrategy || (exports2.MessageStrategy = MessageStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions || (exports2.ConnectionOptions = ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports2.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          queue.set(createResponseQueueKey(message.id), message);
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
          timer = void 0;
          processMessageQueue();
        });
      }
      function handleMessage(message) {
        if (messages_1.Message.isRequest(message)) {
          handleRequest(message);
        } else if (messages_1.Message.isNotification(message)) {
          handleNotification(message);
        } else if (messages_1.Message.isResponse(message)) {
          handleResponse(message);
        } else {
          handleInvalidMessage(message);
        }
      }
      function processMessageQueue() {
        if (messageQueue.size === 0) {
          return;
        }
        const message = messageQueue.shift();
        try {
          const messageStrategy = options?.messageStrategy;
          if (MessageStrategy.is(messageStrategy)) {
            messageStrategy.handleMessage(message, handleMessage);
          } else {
            handleMessage(message);
          }
        } finally {
          triggerMessageQueue();
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options?.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      function handleRequest(requestMessage) {
        if (isDisposed()) {
          return;
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime2) {
          if (result === void 0) {
            result = null;
          }
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            result
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver) ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey) : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const promise = handlerResult;
            if (!handlerResult) {
              requestTokens.delete(tokenKey);
              replySuccess(handlerResult, requestMessage.method, startTime);
            } else if (promise.then) {
              promise.then((resultOrError) => {
                requestTokens.delete(tokenKey);
                reply(resultOrError, requestMessage.method, startTime);
              }, (error) => {
                requestTokens.delete(tokenKey);
                if (error instanceof messages_1.ResponseError) {
                  replyError(error, requestMessage.method, startTime);
                } else if (error && Is.string(error.message)) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                } else {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
              });
            } else {
              requestTokens.delete(tokenKey);
              reply(handlerResult, requestMessage.method, startTime);
            }
          } catch (error) {
            requestTokens.delete(tokenKey);
            if (error instanceof messages_1.ResponseError) {
              reply(error, requestMessage.method, startTime);
            } else if (error && Is.string(error.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          }
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace.Verbose || trace === Trace.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection2 = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch((error) => {
            logger.error(`Sending notification failed.`);
            throw error;
          });
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                notificationHandlers.delete(method);
              } else {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              progressHandlers.delete(token);
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection2.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          let method;
          let messageParams;
          let token = void 0;
          if (Is.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          if (token) {
            disposable = token.onCancellationRequested(() => {
              const p = cancellationStrategy.sender.sendCancellation(connection2, id);
              if (p === void 0) {
                logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                return Promise.resolve();
              } else {
                return p.catch(() => {
                  logger.log(`Sending cancellation messages for id ${id} failed`);
                });
              }
            });
          }
          const requestMessage = {
            jsonrpc: version,
            id,
            method,
            params: messageParams
          };
          traceSendingRequest(requestMessage);
          if (typeof cancellationStrategy.sender.enableCancellation === "function") {
            cancellationStrategy.sender.enableCancellation(requestMessage);
          }
          return new Promise(async (resolve2, reject) => {
            const resolveWithCleanup = (r) => {
              resolve2(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable?.dispose();
            };
            const responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            try {
              await messageWriter.write(requestMessage);
              responsePromises.set(id, responsePromise);
            } catch (error) {
              logger.error(`Sending request failed.`);
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : "Unknown reason"));
              throw error;
            }
          });
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                requestHandlers.delete(method);
              } else {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection2.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection2.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection2.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection2;
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/api.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProgressType = exports2.ProgressToken = exports2.createMessageConnection = exports2.NullLogger = exports2.ConnectionOptions = exports2.ConnectionStrategy = exports2.AbstractMessageBuffer = exports2.WriteableStreamMessageWriter = exports2.AbstractMessageWriter = exports2.MessageWriter = exports2.ReadableStreamMessageReader = exports2.AbstractMessageReader = exports2.MessageReader = exports2.SharedArrayReceiverStrategy = exports2.SharedArraySenderStrategy = exports2.CancellationToken = exports2.CancellationTokenSource = exports2.Emitter = exports2.Event = exports2.Disposable = exports2.LRUCache = exports2.Touch = exports2.LinkedMap = exports2.ParameterStructures = exports2.NotificationType9 = exports2.NotificationType8 = exports2.NotificationType7 = exports2.NotificationType6 = exports2.NotificationType5 = exports2.NotificationType4 = exports2.NotificationType3 = exports2.NotificationType2 = exports2.NotificationType1 = exports2.NotificationType0 = exports2.NotificationType = exports2.ErrorCodes = exports2.ResponseError = exports2.RequestType9 = exports2.RequestType8 = exports2.RequestType7 = exports2.RequestType6 = exports2.RequestType5 = exports2.RequestType4 = exports2.RequestType3 = exports2.RequestType2 = exports2.RequestType1 = exports2.RequestType0 = exports2.RequestType = exports2.Message = exports2.RAL = void 0;
    exports2.MessageStrategy = exports2.CancellationStrategy = exports2.CancellationSenderStrategy = exports2.CancellationReceiverStrategy = exports2.ConnectionError = exports2.ConnectionErrors = exports2.LogTraceNotification = exports2.SetTraceNotification = exports2.TraceFormat = exports2.TraceValues = exports2.Trace = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports2, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports2, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports2, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports2, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports2, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports2, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports2, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports2, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports2, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports2, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports2, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports2, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports2, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports2, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports2, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports2, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports2, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports2, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports2, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports2, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports2, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports2, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports2, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports2, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports2, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports2, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports2, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports2, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports2, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports2, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports2, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports2, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports2, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports2, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var sharedArrayCancellation_1 = require_sharedArrayCancellation();
    Object.defineProperty(exports2, "SharedArraySenderStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArraySenderStrategy;
    } });
    Object.defineProperty(exports2, "SharedArrayReceiverStrategy", { enumerable: true, get: function() {
      return sharedArrayCancellation_1.SharedArrayReceiverStrategy;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports2, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports2, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports2, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports2, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports2, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports2, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var messageBuffer_1 = require_messageBuffer();
    Object.defineProperty(exports2, "AbstractMessageBuffer", { enumerable: true, get: function() {
      return messageBuffer_1.AbstractMessageBuffer;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports2, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports2, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports2, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports2, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports2, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports2, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports2, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports2, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    Object.defineProperty(exports2, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports2, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports2, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports2, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports2, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports2, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports2, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports2, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    Object.defineProperty(exports2, "MessageStrategy", { enumerable: true, get: function() {
      return connection_1.MessageStrategy;
    } });
    var ral_1 = require_ral();
    exports2.RAL = ral_1.default;
  }
});

// node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/ril.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var util_1 = require("util");
    var api_1 = require_api();
    var MessageBuffer = class _MessageBuffer extends api_1.AbstractMessageBuffer {
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return _MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
    var ReadableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return api_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return api_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return api_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return api_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve2, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve2();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        api_1.RAL.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports2.default = RIL;
  }
});

// node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createMessageConnection = exports2.createServerSocketTransport = exports2.createClientSocketTransport = exports2.createServerPipeTransport = exports2.createClientPipeTransport = exports2.generateRandomPipeName = exports2.StreamMessageWriter = exports2.StreamMessageReader = exports2.SocketMessageWriter = exports2.SocketMessageReader = exports2.PortMessageWriter = exports2.PortMessageReader = exports2.IPCMessageWriter = exports2.IPCMessageReader = void 0;
    var ril_1 = require_ril();
    ril_1.default.install();
    var path2 = require("path");
    var os = require("os");
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    var api_1 = require_api();
    __exportStar(require_api(), exports2);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      constructor(process2) {
        super();
        this.process = process2;
        let eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports2.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        const eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.IPCMessageWriter = IPCMessageWriter;
    var PortMessageReader = class extends api_1.AbstractMessageReader {
      constructor(port) {
        super();
        this.onData = new api_1.Emitter();
        port.on("close", () => this.fireClose);
        port.on("error", (error) => this.fireError(error));
        port.on("message", (message) => {
          this.onData.fire(message);
        });
      }
      listen(callback) {
        return this.onData.event(callback);
      }
    };
    exports2.PortMessageReader = PortMessageReader;
    var PortMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(port) {
        super();
        this.port = port;
        this.errorCount = 0;
        port.on("close", () => this.fireClose());
        port.on("error", (error) => this.fireError(error));
      }
      write(msg) {
        try {
          this.port.postMessage(msg);
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports2.PortMessageWriter = PortMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports2.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports2.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readable, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
      }
    };
    exports2.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports2.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 103]
    ]);
    function generateRandomPipeName() {
      const randomSuffix = (0, crypto_1.randomBytes)(21).toString("hex");
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
      }
      let result;
      if (XDG_RUNTIME_DIR) {
        result = path2.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
      } else {
        result = path2.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
      }
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0 && result.length > limit) {
        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
      }
      return result;
    }
    exports2.generateRandomPipeName = generateRandomPipeName;
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve2, _reject) => {
        connectResolve = resolve2;
      });
      return new Promise((resolve2, reject) => {
        let server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve2({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientPipeTransport = createClientPipeTransport;
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerPipeTransport = createServerPipeTransport;
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve2, _reject) => {
        connectResolve = resolve2;
      });
      return new Promise((resolve2, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve2({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports2.createClientSocketTransport = createClientSocketTransport;
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports2.createServerSocketTransport = createServerSocketTransport;
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
    exports2.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/node.js
var require_node = __commonJS({
  "node_modules/vscode-jsonrpc/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main();
  }
});

// node_modules/vscode-languageserver-types/lib/umd/main.js
var require_main2 = __commonJS({
  "node_modules/vscode-languageserver-types/lib/umd/main.js"(exports2, module2) {
    (function(factory) {
      if (typeof module2 === "object" && typeof module2.exports === "object") {
        var v = factory(require, exports2);
        if (v !== void 0) module2.exports = v;
      } else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
      }
    })(function(require2, exports3) {
      "use strict";
      Object.defineProperty(exports3, "__esModule", { value: true });
      exports3.TextDocument = exports3.EOL = exports3.WorkspaceFolder = exports3.InlineCompletionContext = exports3.SelectedCompletionInfo = exports3.InlineCompletionTriggerKind = exports3.InlineCompletionList = exports3.InlineCompletionItem = exports3.StringValue = exports3.InlayHint = exports3.InlayHintLabelPart = exports3.InlayHintKind = exports3.InlineValueContext = exports3.InlineValueEvaluatableExpression = exports3.InlineValueVariableLookup = exports3.InlineValueText = exports3.SemanticTokens = exports3.SemanticTokenModifiers = exports3.SemanticTokenTypes = exports3.SelectionRange = exports3.DocumentLink = exports3.FormattingOptions = exports3.CodeLens = exports3.CodeAction = exports3.CodeActionContext = exports3.CodeActionTriggerKind = exports3.CodeActionKind = exports3.DocumentSymbol = exports3.WorkspaceSymbol = exports3.SymbolInformation = exports3.SymbolTag = exports3.SymbolKind = exports3.DocumentHighlight = exports3.DocumentHighlightKind = exports3.SignatureInformation = exports3.ParameterInformation = exports3.Hover = exports3.MarkedString = exports3.CompletionList = exports3.CompletionItem = exports3.CompletionItemLabelDetails = exports3.InsertTextMode = exports3.InsertReplaceEdit = exports3.CompletionItemTag = exports3.InsertTextFormat = exports3.CompletionItemKind = exports3.MarkupContent = exports3.MarkupKind = exports3.TextDocumentItem = exports3.OptionalVersionedTextDocumentIdentifier = exports3.VersionedTextDocumentIdentifier = exports3.TextDocumentIdentifier = exports3.WorkspaceChange = exports3.WorkspaceEdit = exports3.DeleteFile = exports3.RenameFile = exports3.CreateFile = exports3.TextDocumentEdit = exports3.AnnotatedTextEdit = exports3.ChangeAnnotationIdentifier = exports3.ChangeAnnotation = exports3.TextEdit = exports3.Command = exports3.Diagnostic = exports3.CodeDescription = exports3.DiagnosticTag = exports3.DiagnosticSeverity = exports3.DiagnosticRelatedInformation = exports3.FoldingRange = exports3.FoldingRangeKind = exports3.ColorPresentation = exports3.ColorInformation = exports3.Color = exports3.LocationLink = exports3.Location = exports3.Range = exports3.Position = exports3.uinteger = exports3.integer = exports3.URI = exports3.DocumentUri = void 0;
      var DocumentUri;
      (function(DocumentUri2) {
        function is(value) {
          return typeof value === "string";
        }
        DocumentUri2.is = is;
      })(DocumentUri || (exports3.DocumentUri = DocumentUri = {}));
      var URI;
      (function(URI2) {
        function is(value) {
          return typeof value === "string";
        }
        URI2.is = is;
      })(URI || (exports3.URI = URI = {}));
      var integer;
      (function(integer2) {
        integer2.MIN_VALUE = -2147483648;
        integer2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
        }
        integer2.is = is;
      })(integer || (exports3.integer = integer = {}));
      var uinteger;
      (function(uinteger2) {
        uinteger2.MIN_VALUE = 0;
        uinteger2.MAX_VALUE = 2147483647;
        function is(value) {
          return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
        }
        uinteger2.is = is;
      })(uinteger || (exports3.uinteger = uinteger = {}));
      var Position2;
      (function(Position3) {
        function create(line, character) {
          if (line === Number.MAX_VALUE) {
            line = uinteger.MAX_VALUE;
          }
          if (character === Number.MAX_VALUE) {
            character = uinteger.MAX_VALUE;
          }
          return { line, character };
        }
        Position3.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
        }
        Position3.is = is;
      })(Position2 || (exports3.Position = Position2 = {}));
      var Range2;
      (function(Range3) {
        function create(one, two, three, four) {
          if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
            return { start: Position2.create(one, two), end: Position2.create(three, four) };
          } else if (Position2.is(one) && Position2.is(two)) {
            return { start: one, end: two };
          } else {
            throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
          }
        }
        Range3.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position2.is(candidate.start) && Position2.is(candidate.end);
        }
        Range3.is = is;
      })(Range2 || (exports3.Range = Range2 = {}));
      var Location2;
      (function(Location3) {
        function create(uri, range) {
          return { uri, range };
        }
        Location3.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
        }
        Location3.is = is;
      })(Location2 || (exports3.Location = Location2 = {}));
      var LocationLink;
      (function(LocationLink2) {
        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
          return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
        }
        LocationLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range2.is(candidate.targetSelectionRange) && (Range2.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
        }
        LocationLink2.is = is;
      })(LocationLink || (exports3.LocationLink = LocationLink = {}));
      var Color;
      (function(Color2) {
        function create(red, green, blue, alpha) {
          return {
            red,
            green,
            blue,
            alpha
          };
        }
        Color2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
        }
        Color2.is = is;
      })(Color || (exports3.Color = Color = {}));
      var ColorInformation;
      (function(ColorInformation2) {
        function create(range, color) {
          return {
            range,
            color
          };
        }
        ColorInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.range) && Color.is(candidate.color);
        }
        ColorInformation2.is = is;
      })(ColorInformation || (exports3.ColorInformation = ColorInformation = {}));
      var ColorPresentation;
      (function(ColorPresentation2) {
        function create(label, textEdit, additionalTextEdits) {
          return {
            label,
            textEdit,
            additionalTextEdits
          };
        }
        ColorPresentation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
        }
        ColorPresentation2.is = is;
      })(ColorPresentation || (exports3.ColorPresentation = ColorPresentation = {}));
      var FoldingRangeKind;
      (function(FoldingRangeKind2) {
        FoldingRangeKind2.Comment = "comment";
        FoldingRangeKind2.Imports = "imports";
        FoldingRangeKind2.Region = "region";
      })(FoldingRangeKind || (exports3.FoldingRangeKind = FoldingRangeKind = {}));
      var FoldingRange;
      (function(FoldingRange2) {
        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
          var result = {
            startLine,
            endLine
          };
          if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
          }
          if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
          }
          if (Is.defined(kind)) {
            result.kind = kind;
          }
          if (Is.defined(collapsedText)) {
            result.collapsedText = collapsedText;
          }
          return result;
        }
        FoldingRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
        }
        FoldingRange2.is = is;
      })(FoldingRange || (exports3.FoldingRange = FoldingRange = {}));
      var DiagnosticRelatedInformation;
      (function(DiagnosticRelatedInformation2) {
        function create(location, message) {
          return {
            location,
            message
          };
        }
        DiagnosticRelatedInformation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Location2.is(candidate.location) && Is.string(candidate.message);
        }
        DiagnosticRelatedInformation2.is = is;
      })(DiagnosticRelatedInformation || (exports3.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
      var DiagnosticSeverity2;
      (function(DiagnosticSeverity3) {
        DiagnosticSeverity3.Error = 1;
        DiagnosticSeverity3.Warning = 2;
        DiagnosticSeverity3.Information = 3;
        DiagnosticSeverity3.Hint = 4;
      })(DiagnosticSeverity2 || (exports3.DiagnosticSeverity = DiagnosticSeverity2 = {}));
      var DiagnosticTag;
      (function(DiagnosticTag2) {
        DiagnosticTag2.Unnecessary = 1;
        DiagnosticTag2.Deprecated = 2;
      })(DiagnosticTag || (exports3.DiagnosticTag = DiagnosticTag = {}));
      var CodeDescription;
      (function(CodeDescription2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.href);
        }
        CodeDescription2.is = is;
      })(CodeDescription || (exports3.CodeDescription = CodeDescription = {}));
      var Diagnostic2;
      (function(Diagnostic3) {
        function create(range, message, severity, code, source, relatedInformation) {
          var result = { range, message };
          if (Is.defined(severity)) {
            result.severity = severity;
          }
          if (Is.defined(code)) {
            result.code = code;
          }
          if (Is.defined(source)) {
            result.source = source;
          }
          if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
          }
          return result;
        }
        Diagnostic3.create = create;
        function is(value) {
          var _a;
          var candidate = value;
          return Is.defined(candidate) && Range2.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
        }
        Diagnostic3.is = is;
      })(Diagnostic2 || (exports3.Diagnostic = Diagnostic2 = {}));
      var Command;
      (function(Command2) {
        function create(title, command) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }
          var result = { title, command };
          if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
          }
          return result;
        }
        Command2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
        }
        Command2.is = is;
      })(Command || (exports3.Command = Command = {}));
      var TextEdit;
      (function(TextEdit2) {
        function replace(range, newText) {
          return { range, newText };
        }
        TextEdit2.replace = replace;
        function insert(position, newText) {
          return { range: { start: position, end: position }, newText };
        }
        TextEdit2.insert = insert;
        function del(range) {
          return { range, newText: "" };
        }
        TextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range2.is(candidate.range);
        }
        TextEdit2.is = is;
      })(TextEdit || (exports3.TextEdit = TextEdit = {}));
      var ChangeAnnotation;
      (function(ChangeAnnotation2) {
        function create(label, needsConfirmation, description) {
          var result = { label };
          if (needsConfirmation !== void 0) {
            result.needsConfirmation = needsConfirmation;
          }
          if (description !== void 0) {
            result.description = description;
          }
          return result;
        }
        ChangeAnnotation2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        ChangeAnnotation2.is = is;
      })(ChangeAnnotation || (exports3.ChangeAnnotation = ChangeAnnotation = {}));
      var ChangeAnnotationIdentifier;
      (function(ChangeAnnotationIdentifier2) {
        function is(value) {
          var candidate = value;
          return Is.string(candidate);
        }
        ChangeAnnotationIdentifier2.is = is;
      })(ChangeAnnotationIdentifier || (exports3.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
      var AnnotatedTextEdit;
      (function(AnnotatedTextEdit2) {
        function replace(range, newText, annotation) {
          return { range, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.replace = replace;
        function insert(position, newText, annotation) {
          return { range: { start: position, end: position }, newText, annotationId: annotation };
        }
        AnnotatedTextEdit2.insert = insert;
        function del(range, annotation) {
          return { range, newText: "", annotationId: annotation };
        }
        AnnotatedTextEdit2.del = del;
        function is(value) {
          var candidate = value;
          return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        AnnotatedTextEdit2.is = is;
      })(AnnotatedTextEdit || (exports3.AnnotatedTextEdit = AnnotatedTextEdit = {}));
      var TextDocumentEdit;
      (function(TextDocumentEdit2) {
        function create(textDocument, edits) {
          return { textDocument, edits };
        }
        TextDocumentEdit2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
        }
        TextDocumentEdit2.is = is;
      })(TextDocumentEdit || (exports3.TextDocumentEdit = TextDocumentEdit = {}));
      var CreateFile;
      (function(CreateFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "create",
            uri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        CreateFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        CreateFile2.is = is;
      })(CreateFile || (exports3.CreateFile = CreateFile = {}));
      var RenameFile;
      (function(RenameFile2) {
        function create(oldUri, newUri, options, annotation) {
          var result = {
            kind: "rename",
            oldUri,
            newUri
          };
          if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        RenameFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        RenameFile2.is = is;
      })(RenameFile || (exports3.RenameFile = RenameFile = {}));
      var DeleteFile;
      (function(DeleteFile2) {
        function create(uri, options, annotation) {
          var result = {
            kind: "delete",
            uri
          };
          if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
          }
          if (annotation !== void 0) {
            result.annotationId = annotation;
          }
          return result;
        }
        DeleteFile2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
        }
        DeleteFile2.is = is;
      })(DeleteFile || (exports3.DeleteFile = DeleteFile = {}));
      var WorkspaceEdit;
      (function(WorkspaceEdit2) {
        function is(value) {
          var candidate = value;
          return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if (Is.string(change.kind)) {
              return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
            } else {
              return TextDocumentEdit.is(change);
            }
          }));
        }
        WorkspaceEdit2.is = is;
      })(WorkspaceEdit || (exports3.WorkspaceEdit = WorkspaceEdit = {}));
      var TextEditChangeImpl = (
        /** @class */
        (function() {
          function TextEditChangeImpl2(edits, changeAnnotations) {
            this.edits = edits;
            this.changeAnnotations = changeAnnotations;
          }
          TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.insert(position, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.insert(position, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.insert(position, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.replace(range, newText);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.replace(range, newText, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.replace(range, newText, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.delete = function(range, annotation) {
            var edit;
            var id;
            if (annotation === void 0) {
              edit = TextEdit.del(range);
            } else if (ChangeAnnotationIdentifier.is(annotation)) {
              id = annotation;
              edit = AnnotatedTextEdit.del(range, annotation);
            } else {
              this.assertChangeAnnotations(this.changeAnnotations);
              id = this.changeAnnotations.manage(annotation);
              edit = AnnotatedTextEdit.del(range, id);
            }
            this.edits.push(edit);
            if (id !== void 0) {
              return id;
            }
          };
          TextEditChangeImpl2.prototype.add = function(edit) {
            this.edits.push(edit);
          };
          TextEditChangeImpl2.prototype.all = function() {
            return this.edits;
          };
          TextEditChangeImpl2.prototype.clear = function() {
            this.edits.splice(0, this.edits.length);
          };
          TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
            if (value === void 0) {
              throw new Error("Text edit change is not configured to manage change annotations.");
            }
          };
          return TextEditChangeImpl2;
        })()
      );
      var ChangeAnnotations = (
        /** @class */
        (function() {
          function ChangeAnnotations2(annotations) {
            this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
            this._counter = 0;
            this._size = 0;
          }
          ChangeAnnotations2.prototype.all = function() {
            return this._annotations;
          };
          Object.defineProperty(ChangeAnnotations2.prototype, "size", {
            get: function() {
              return this._size;
            },
            enumerable: false,
            configurable: true
          });
          ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
            var id;
            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
              id = idOrAnnotation;
            } else {
              id = this.nextId();
              annotation = idOrAnnotation;
            }
            if (this._annotations[id] !== void 0) {
              throw new Error("Id ".concat(id, " is already in use."));
            }
            if (annotation === void 0) {
              throw new Error("No annotation provided for id ".concat(id));
            }
            this._annotations[id] = annotation;
            this._size++;
            return id;
          };
          ChangeAnnotations2.prototype.nextId = function() {
            this._counter++;
            return this._counter.toString();
          };
          return ChangeAnnotations2;
        })()
      );
      var WorkspaceChange = (
        /** @class */
        (function() {
          function WorkspaceChange2(workspaceEdit) {
            var _this = this;
            this._textEditChanges = /* @__PURE__ */ Object.create(null);
            if (workspaceEdit !== void 0) {
              this._workspaceEdit = workspaceEdit;
              if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                  if (TextDocumentEdit.is(change)) {
                    var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                    _this._textEditChanges[change.textDocument.uri] = textEditChange;
                  }
                });
              } else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function(key) {
                  var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                  _this._textEditChanges[key] = textEditChange;
                });
              }
            } else {
              this._workspaceEdit = {};
            }
          }
          Object.defineProperty(WorkspaceChange2.prototype, "edit", {
            /**
             * Returns the underlying {@link WorkspaceEdit} literal
             * use to be returned from a workspace edit operation like rename.
             */
            get: function() {
              this.initDocumentChanges();
              if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) {
                  this._workspaceEdit.changeAnnotations = void 0;
                } else {
                  this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                }
              }
              return this._workspaceEdit;
            },
            enumerable: false,
            configurable: true
          });
          WorkspaceChange2.prototype.getTextEditChange = function(key) {
            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
              this.initDocumentChanges();
              if (this._workspaceEdit.documentChanges === void 0) {
                throw new Error("Workspace edit is not configured for document changes.");
              }
              var textDocument = { uri: key.uri, version: key.version };
              var result = this._textEditChanges[textDocument.uri];
              if (!result) {
                var edits = [];
                var textDocumentEdit = {
                  textDocument,
                  edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
              }
              return result;
            } else {
              this.initChanges();
              if (this._workspaceEdit.changes === void 0) {
                throw new Error("Workspace edit is not configured for normal text edit changes.");
              }
              var result = this._textEditChanges[key];
              if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
              }
              return result;
            }
          };
          WorkspaceChange2.prototype.initDocumentChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._changeAnnotations = new ChangeAnnotations();
              this._workspaceEdit.documentChanges = [];
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          };
          WorkspaceChange2.prototype.initChanges = function() {
            if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
              this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
            }
          };
          WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = CreateFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = CreateFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = RenameFile.create(oldUri, newUri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = RenameFile.create(oldUri, newUri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) {
              throw new Error("Workspace edit is not configured for document changes.");
            }
            var annotation;
            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
              annotation = optionsOrAnnotation;
            } else {
              options = optionsOrAnnotation;
            }
            var operation;
            var id;
            if (annotation === void 0) {
              operation = DeleteFile.create(uri, options);
            } else {
              id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
              operation = DeleteFile.create(uri, options, id);
            }
            this._workspaceEdit.documentChanges.push(operation);
            if (id !== void 0) {
              return id;
            }
          };
          return WorkspaceChange2;
        })()
      );
      exports3.WorkspaceChange = WorkspaceChange;
      var TextDocumentIdentifier;
      (function(TextDocumentIdentifier2) {
        function create(uri) {
          return { uri };
        }
        TextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri);
        }
        TextDocumentIdentifier2.is = is;
      })(TextDocumentIdentifier || (exports3.TextDocumentIdentifier = TextDocumentIdentifier = {}));
      var VersionedTextDocumentIdentifier;
      (function(VersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        VersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
        }
        VersionedTextDocumentIdentifier2.is = is;
      })(VersionedTextDocumentIdentifier || (exports3.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
      var OptionalVersionedTextDocumentIdentifier;
      (function(OptionalVersionedTextDocumentIdentifier2) {
        function create(uri, version) {
          return { uri, version };
        }
        OptionalVersionedTextDocumentIdentifier2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
        }
        OptionalVersionedTextDocumentIdentifier2.is = is;
      })(OptionalVersionedTextDocumentIdentifier || (exports3.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
      var TextDocumentItem;
      (function(TextDocumentItem2) {
        function create(uri, languageId, version, text) {
          return { uri, languageId, version, text };
        }
        TextDocumentItem2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
        }
        TextDocumentItem2.is = is;
      })(TextDocumentItem || (exports3.TextDocumentItem = TextDocumentItem = {}));
      var MarkupKind2;
      (function(MarkupKind3) {
        MarkupKind3.PlainText = "plaintext";
        MarkupKind3.Markdown = "markdown";
        function is(value) {
          var candidate = value;
          return candidate === MarkupKind3.PlainText || candidate === MarkupKind3.Markdown;
        }
        MarkupKind3.is = is;
      })(MarkupKind2 || (exports3.MarkupKind = MarkupKind2 = {}));
      var MarkupContent;
      (function(MarkupContent2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(value) && MarkupKind2.is(candidate.kind) && Is.string(candidate.value);
        }
        MarkupContent2.is = is;
      })(MarkupContent || (exports3.MarkupContent = MarkupContent = {}));
      var CompletionItemKind2;
      (function(CompletionItemKind3) {
        CompletionItemKind3.Text = 1;
        CompletionItemKind3.Method = 2;
        CompletionItemKind3.Function = 3;
        CompletionItemKind3.Constructor = 4;
        CompletionItemKind3.Field = 5;
        CompletionItemKind3.Variable = 6;
        CompletionItemKind3.Class = 7;
        CompletionItemKind3.Interface = 8;
        CompletionItemKind3.Module = 9;
        CompletionItemKind3.Property = 10;
        CompletionItemKind3.Unit = 11;
        CompletionItemKind3.Value = 12;
        CompletionItemKind3.Enum = 13;
        CompletionItemKind3.Keyword = 14;
        CompletionItemKind3.Snippet = 15;
        CompletionItemKind3.Color = 16;
        CompletionItemKind3.File = 17;
        CompletionItemKind3.Reference = 18;
        CompletionItemKind3.Folder = 19;
        CompletionItemKind3.EnumMember = 20;
        CompletionItemKind3.Constant = 21;
        CompletionItemKind3.Struct = 22;
        CompletionItemKind3.Event = 23;
        CompletionItemKind3.Operator = 24;
        CompletionItemKind3.TypeParameter = 25;
      })(CompletionItemKind2 || (exports3.CompletionItemKind = CompletionItemKind2 = {}));
      var InsertTextFormat2;
      (function(InsertTextFormat3) {
        InsertTextFormat3.PlainText = 1;
        InsertTextFormat3.Snippet = 2;
      })(InsertTextFormat2 || (exports3.InsertTextFormat = InsertTextFormat2 = {}));
      var CompletionItemTag;
      (function(CompletionItemTag2) {
        CompletionItemTag2.Deprecated = 1;
      })(CompletionItemTag || (exports3.CompletionItemTag = CompletionItemTag = {}));
      var InsertReplaceEdit;
      (function(InsertReplaceEdit2) {
        function create(newText, insert, replace) {
          return { newText, insert, replace };
        }
        InsertReplaceEdit2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.newText) && Range2.is(candidate.insert) && Range2.is(candidate.replace);
        }
        InsertReplaceEdit2.is = is;
      })(InsertReplaceEdit || (exports3.InsertReplaceEdit = InsertReplaceEdit = {}));
      var InsertTextMode;
      (function(InsertTextMode2) {
        InsertTextMode2.asIs = 1;
        InsertTextMode2.adjustIndentation = 2;
      })(InsertTextMode || (exports3.InsertTextMode = InsertTextMode = {}));
      var CompletionItemLabelDetails;
      (function(CompletionItemLabelDetails2) {
        function is(value) {
          var candidate = value;
          return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
        }
        CompletionItemLabelDetails2.is = is;
      })(CompletionItemLabelDetails || (exports3.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
      var CompletionItem2;
      (function(CompletionItem3) {
        function create(label) {
          return { label };
        }
        CompletionItem3.create = create;
      })(CompletionItem2 || (exports3.CompletionItem = CompletionItem2 = {}));
      var CompletionList;
      (function(CompletionList2) {
        function create(items, isIncomplete) {
          return { items: items ? items : [], isIncomplete: !!isIncomplete };
        }
        CompletionList2.create = create;
      })(CompletionList || (exports3.CompletionList = CompletionList = {}));
      var MarkedString;
      (function(MarkedString2) {
        function fromPlainText(plainText) {
          return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }
        MarkedString2.fromPlainText = fromPlainText;
        function is(value) {
          var candidate = value;
          return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
        }
        MarkedString2.is = is;
      })(MarkedString || (exports3.MarkedString = MarkedString = {}));
      var Hover2;
      (function(Hover3) {
        function is(value) {
          var candidate = value;
          return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range2.is(value.range));
        }
        Hover3.is = is;
      })(Hover2 || (exports3.Hover = Hover2 = {}));
      var ParameterInformation;
      (function(ParameterInformation2) {
        function create(label, documentation) {
          return documentation ? { label, documentation } : { label };
        }
        ParameterInformation2.create = create;
      })(ParameterInformation || (exports3.ParameterInformation = ParameterInformation = {}));
      var SignatureInformation;
      (function(SignatureInformation2) {
        function create(label, documentation) {
          var parameters = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
          }
          var result = { label };
          if (Is.defined(documentation)) {
            result.documentation = documentation;
          }
          if (Is.defined(parameters)) {
            result.parameters = parameters;
          } else {
            result.parameters = [];
          }
          return result;
        }
        SignatureInformation2.create = create;
      })(SignatureInformation || (exports3.SignatureInformation = SignatureInformation = {}));
      var DocumentHighlightKind;
      (function(DocumentHighlightKind2) {
        DocumentHighlightKind2.Text = 1;
        DocumentHighlightKind2.Read = 2;
        DocumentHighlightKind2.Write = 3;
      })(DocumentHighlightKind || (exports3.DocumentHighlightKind = DocumentHighlightKind = {}));
      var DocumentHighlight;
      (function(DocumentHighlight2) {
        function create(range, kind) {
          var result = { range };
          if (Is.number(kind)) {
            result.kind = kind;
          }
          return result;
        }
        DocumentHighlight2.create = create;
      })(DocumentHighlight || (exports3.DocumentHighlight = DocumentHighlight = {}));
      var SymbolKind;
      (function(SymbolKind2) {
        SymbolKind2.File = 1;
        SymbolKind2.Module = 2;
        SymbolKind2.Namespace = 3;
        SymbolKind2.Package = 4;
        SymbolKind2.Class = 5;
        SymbolKind2.Method = 6;
        SymbolKind2.Property = 7;
        SymbolKind2.Field = 8;
        SymbolKind2.Constructor = 9;
        SymbolKind2.Enum = 10;
        SymbolKind2.Interface = 11;
        SymbolKind2.Function = 12;
        SymbolKind2.Variable = 13;
        SymbolKind2.Constant = 14;
        SymbolKind2.String = 15;
        SymbolKind2.Number = 16;
        SymbolKind2.Boolean = 17;
        SymbolKind2.Array = 18;
        SymbolKind2.Object = 19;
        SymbolKind2.Key = 20;
        SymbolKind2.Null = 21;
        SymbolKind2.EnumMember = 22;
        SymbolKind2.Struct = 23;
        SymbolKind2.Event = 24;
        SymbolKind2.Operator = 25;
        SymbolKind2.TypeParameter = 26;
      })(SymbolKind || (exports3.SymbolKind = SymbolKind = {}));
      var SymbolTag;
      (function(SymbolTag2) {
        SymbolTag2.Deprecated = 1;
      })(SymbolTag || (exports3.SymbolTag = SymbolTag = {}));
      var SymbolInformation;
      (function(SymbolInformation2) {
        function create(name, kind, range, uri, containerName) {
          var result = {
            name,
            kind,
            location: { uri, range }
          };
          if (containerName) {
            result.containerName = containerName;
          }
          return result;
        }
        SymbolInformation2.create = create;
      })(SymbolInformation || (exports3.SymbolInformation = SymbolInformation = {}));
      var WorkspaceSymbol;
      (function(WorkspaceSymbol2) {
        function create(name, kind, uri, range) {
          return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
        }
        WorkspaceSymbol2.create = create;
      })(WorkspaceSymbol || (exports3.WorkspaceSymbol = WorkspaceSymbol = {}));
      var DocumentSymbol;
      (function(DocumentSymbol2) {
        function create(name, detail, kind, range, selectionRange, children) {
          var result = {
            name,
            detail,
            kind,
            range,
            selectionRange
          };
          if (children !== void 0) {
            result.children = children;
          }
          return result;
        }
        DocumentSymbol2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range2.is(candidate.range) && Range2.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
        }
        DocumentSymbol2.is = is;
      })(DocumentSymbol || (exports3.DocumentSymbol = DocumentSymbol = {}));
      var CodeActionKind;
      (function(CodeActionKind2) {
        CodeActionKind2.Empty = "";
        CodeActionKind2.QuickFix = "quickfix";
        CodeActionKind2.Refactor = "refactor";
        CodeActionKind2.RefactorExtract = "refactor.extract";
        CodeActionKind2.RefactorInline = "refactor.inline";
        CodeActionKind2.RefactorRewrite = "refactor.rewrite";
        CodeActionKind2.Source = "source";
        CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
        CodeActionKind2.SourceFixAll = "source.fixAll";
      })(CodeActionKind || (exports3.CodeActionKind = CodeActionKind = {}));
      var CodeActionTriggerKind;
      (function(CodeActionTriggerKind2) {
        CodeActionTriggerKind2.Invoked = 1;
        CodeActionTriggerKind2.Automatic = 2;
      })(CodeActionTriggerKind || (exports3.CodeActionTriggerKind = CodeActionTriggerKind = {}));
      var CodeActionContext;
      (function(CodeActionContext2) {
        function create(diagnostics, only, triggerKind) {
          var result = { diagnostics };
          if (only !== void 0 && only !== null) {
            result.only = only;
          }
          if (triggerKind !== void 0 && triggerKind !== null) {
            result.triggerKind = triggerKind;
          }
          return result;
        }
        CodeActionContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic2.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
        }
        CodeActionContext2.is = is;
      })(CodeActionContext || (exports3.CodeActionContext = CodeActionContext = {}));
      var CodeAction;
      (function(CodeAction2) {
        function create(title, kindOrCommandOrEdit, kind) {
          var result = { title };
          var checkKind = true;
          if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
          } else if (Command.is(kindOrCommandOrEdit)) {
            result.command = kindOrCommandOrEdit;
          } else {
            result.edit = kindOrCommandOrEdit;
          }
          if (checkKind && kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        CodeAction2.create = create;
        function is(value) {
          var candidate = value;
          return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic2.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
        }
        CodeAction2.is = is;
      })(CodeAction || (exports3.CodeAction = CodeAction = {}));
      var CodeLens;
      (function(CodeLens2) {
        function create(range, data) {
          var result = { range };
          if (Is.defined(data)) {
            result.data = data;
          }
          return result;
        }
        CodeLens2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range2.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
        }
        CodeLens2.is = is;
      })(CodeLens || (exports3.CodeLens = CodeLens = {}));
      var FormattingOptions;
      (function(FormattingOptions2) {
        function create(tabSize, insertSpaces) {
          return { tabSize, insertSpaces };
        }
        FormattingOptions2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
        }
        FormattingOptions2.is = is;
      })(FormattingOptions || (exports3.FormattingOptions = FormattingOptions = {}));
      var DocumentLink;
      (function(DocumentLink2) {
        function create(range, target, data) {
          return { range, target, data };
        }
        DocumentLink2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range2.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
        }
        DocumentLink2.is = is;
      })(DocumentLink || (exports3.DocumentLink = DocumentLink = {}));
      var SelectionRange;
      (function(SelectionRange2) {
        function create(range, parent) {
          return { range, parent };
        }
        SelectionRange2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Range2.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
        }
        SelectionRange2.is = is;
      })(SelectionRange || (exports3.SelectionRange = SelectionRange = {}));
      var SemanticTokenTypes;
      (function(SemanticTokenTypes2) {
        SemanticTokenTypes2["namespace"] = "namespace";
        SemanticTokenTypes2["type"] = "type";
        SemanticTokenTypes2["class"] = "class";
        SemanticTokenTypes2["enum"] = "enum";
        SemanticTokenTypes2["interface"] = "interface";
        SemanticTokenTypes2["struct"] = "struct";
        SemanticTokenTypes2["typeParameter"] = "typeParameter";
        SemanticTokenTypes2["parameter"] = "parameter";
        SemanticTokenTypes2["variable"] = "variable";
        SemanticTokenTypes2["property"] = "property";
        SemanticTokenTypes2["enumMember"] = "enumMember";
        SemanticTokenTypes2["event"] = "event";
        SemanticTokenTypes2["function"] = "function";
        SemanticTokenTypes2["method"] = "method";
        SemanticTokenTypes2["macro"] = "macro";
        SemanticTokenTypes2["keyword"] = "keyword";
        SemanticTokenTypes2["modifier"] = "modifier";
        SemanticTokenTypes2["comment"] = "comment";
        SemanticTokenTypes2["string"] = "string";
        SemanticTokenTypes2["number"] = "number";
        SemanticTokenTypes2["regexp"] = "regexp";
        SemanticTokenTypes2["operator"] = "operator";
        SemanticTokenTypes2["decorator"] = "decorator";
      })(SemanticTokenTypes || (exports3.SemanticTokenTypes = SemanticTokenTypes = {}));
      var SemanticTokenModifiers;
      (function(SemanticTokenModifiers2) {
        SemanticTokenModifiers2["declaration"] = "declaration";
        SemanticTokenModifiers2["definition"] = "definition";
        SemanticTokenModifiers2["readonly"] = "readonly";
        SemanticTokenModifiers2["static"] = "static";
        SemanticTokenModifiers2["deprecated"] = "deprecated";
        SemanticTokenModifiers2["abstract"] = "abstract";
        SemanticTokenModifiers2["async"] = "async";
        SemanticTokenModifiers2["modification"] = "modification";
        SemanticTokenModifiers2["documentation"] = "documentation";
        SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
      })(SemanticTokenModifiers || (exports3.SemanticTokenModifiers = SemanticTokenModifiers = {}));
      var SemanticTokens;
      (function(SemanticTokens2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
        }
        SemanticTokens2.is = is;
      })(SemanticTokens || (exports3.SemanticTokens = SemanticTokens = {}));
      var InlineValueText;
      (function(InlineValueText2) {
        function create(range, text) {
          return { range, text };
        }
        InlineValueText2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range2.is(candidate.range) && Is.string(candidate.text);
        }
        InlineValueText2.is = is;
      })(InlineValueText || (exports3.InlineValueText = InlineValueText = {}));
      var InlineValueVariableLookup;
      (function(InlineValueVariableLookup2) {
        function create(range, variableName, caseSensitiveLookup) {
          return { range, variableName, caseSensitiveLookup };
        }
        InlineValueVariableLookup2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range2.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
        }
        InlineValueVariableLookup2.is = is;
      })(InlineValueVariableLookup || (exports3.InlineValueVariableLookup = InlineValueVariableLookup = {}));
      var InlineValueEvaluatableExpression;
      (function(InlineValueEvaluatableExpression2) {
        function create(range, expression) {
          return { range, expression };
        }
        InlineValueEvaluatableExpression2.create = create;
        function is(value) {
          var candidate = value;
          return candidate !== void 0 && candidate !== null && Range2.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
        }
        InlineValueEvaluatableExpression2.is = is;
      })(InlineValueEvaluatableExpression || (exports3.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
      var InlineValueContext;
      (function(InlineValueContext2) {
        function create(frameId, stoppedLocation) {
          return { frameId, stoppedLocation };
        }
        InlineValueContext2.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Range2.is(value.stoppedLocation);
        }
        InlineValueContext2.is = is;
      })(InlineValueContext || (exports3.InlineValueContext = InlineValueContext = {}));
      var InlayHintKind;
      (function(InlayHintKind2) {
        InlayHintKind2.Type = 1;
        InlayHintKind2.Parameter = 2;
        function is(value) {
          return value === 1 || value === 2;
        }
        InlayHintKind2.is = is;
      })(InlayHintKind || (exports3.InlayHintKind = InlayHintKind = {}));
      var InlayHintLabelPart;
      (function(InlayHintLabelPart2) {
        function create(value) {
          return { value };
        }
        InlayHintLabelPart2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location2.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
        }
        InlayHintLabelPart2.is = is;
      })(InlayHintLabelPart || (exports3.InlayHintLabelPart = InlayHintLabelPart = {}));
      var InlayHint;
      (function(InlayHint2) {
        function create(position, label, kind) {
          var result = { position, label };
          if (kind !== void 0) {
            result.kind = kind;
          }
          return result;
        }
        InlayHint2.create = create;
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && Position2.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
        }
        InlayHint2.is = is;
      })(InlayHint || (exports3.InlayHint = InlayHint = {}));
      var StringValue;
      (function(StringValue2) {
        function createSnippet(value) {
          return { kind: "snippet", value };
        }
        StringValue2.createSnippet = createSnippet;
      })(StringValue || (exports3.StringValue = StringValue = {}));
      var InlineCompletionItem;
      (function(InlineCompletionItem2) {
        function create(insertText, filterText, range, command) {
          return { insertText, filterText, range, command };
        }
        InlineCompletionItem2.create = create;
      })(InlineCompletionItem || (exports3.InlineCompletionItem = InlineCompletionItem = {}));
      var InlineCompletionList;
      (function(InlineCompletionList2) {
        function create(items) {
          return { items };
        }
        InlineCompletionList2.create = create;
      })(InlineCompletionList || (exports3.InlineCompletionList = InlineCompletionList = {}));
      var InlineCompletionTriggerKind;
      (function(InlineCompletionTriggerKind2) {
        InlineCompletionTriggerKind2.Invoked = 0;
        InlineCompletionTriggerKind2.Automatic = 1;
      })(InlineCompletionTriggerKind || (exports3.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
      var SelectedCompletionInfo;
      (function(SelectedCompletionInfo2) {
        function create(range, text) {
          return { range, text };
        }
        SelectedCompletionInfo2.create = create;
      })(SelectedCompletionInfo || (exports3.SelectedCompletionInfo = SelectedCompletionInfo = {}));
      var InlineCompletionContext;
      (function(InlineCompletionContext2) {
        function create(triggerKind, selectedCompletionInfo) {
          return { triggerKind, selectedCompletionInfo };
        }
        InlineCompletionContext2.create = create;
      })(InlineCompletionContext || (exports3.InlineCompletionContext = InlineCompletionContext = {}));
      var WorkspaceFolder;
      (function(WorkspaceFolder2) {
        function is(value) {
          var candidate = value;
          return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
        }
        WorkspaceFolder2.is = is;
      })(WorkspaceFolder || (exports3.WorkspaceFolder = WorkspaceFolder = {}));
      exports3.EOL = ["\n", "\r\n", "\r"];
      var TextDocument2;
      (function(TextDocument3) {
        function create(uri, languageId, version, content) {
          return new FullTextDocument2(uri, languageId, version, content);
        }
        TextDocument3.create = create;
        function is(value) {
          var candidate = value;
          return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
        }
        TextDocument3.is = is;
        function applyEdits(document, edits) {
          var text = document.getText();
          var sortedEdits = mergeSort2(edits, function(a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
              return a.range.start.character - b.range.start.character;
            }
            return diff;
          });
          var lastModifiedOffset = text.length;
          for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
              text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            } else {
              throw new Error("Overlapping edit");
            }
            lastModifiedOffset = startOffset;
          }
          return text;
        }
        TextDocument3.applyEdits = applyEdits;
        function mergeSort2(data, compare) {
          if (data.length <= 1) {
            return data;
          }
          var p = data.length / 2 | 0;
          var left = data.slice(0, p);
          var right = data.slice(p);
          mergeSort2(left, compare);
          mergeSort2(right, compare);
          var leftIdx = 0;
          var rightIdx = 0;
          var i = 0;
          while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
              data[i++] = left[leftIdx++];
            } else {
              data[i++] = right[rightIdx++];
            }
          }
          while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
          }
          while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
          }
          return data;
        }
      })(TextDocument2 || (exports3.TextDocument = TextDocument2 = {}));
      var FullTextDocument2 = (
        /** @class */
        (function() {
          function FullTextDocument3(uri, languageId, version, content) {
            this._uri = uri;
            this._languageId = languageId;
            this._version = version;
            this._content = content;
            this._lineOffsets = void 0;
          }
          Object.defineProperty(FullTextDocument3.prototype, "uri", {
            get: function() {
              return this._uri;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "languageId", {
            get: function() {
              return this._languageId;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(FullTextDocument3.prototype, "version", {
            get: function() {
              return this._version;
            },
            enumerable: false,
            configurable: true
          });
          FullTextDocument3.prototype.getText = function(range) {
            if (range) {
              var start = this.offsetAt(range.start);
              var end = this.offsetAt(range.end);
              return this._content.substring(start, end);
            }
            return this._content;
          };
          FullTextDocument3.prototype.update = function(event, version) {
            this._content = event.text;
            this._version = version;
            this._lineOffsets = void 0;
          };
          FullTextDocument3.prototype.getLineOffsets = function() {
            if (this._lineOffsets === void 0) {
              var lineOffsets = [];
              var text = this._content;
              var isLineStart = true;
              for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                  lineOffsets.push(i);
                  isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
                  i++;
                }
              }
              if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
              }
              this._lineOffsets = lineOffsets;
            }
            return this._lineOffsets;
          };
          FullTextDocument3.prototype.positionAt = function(offset) {
            offset = Math.max(Math.min(offset, this._content.length), 0);
            var lineOffsets = this.getLineOffsets();
            var low = 0, high = lineOffsets.length;
            if (high === 0) {
              return Position2.create(0, offset);
            }
            while (low < high) {
              var mid = Math.floor((low + high) / 2);
              if (lineOffsets[mid] > offset) {
                high = mid;
              } else {
                low = mid + 1;
              }
            }
            var line = low - 1;
            return Position2.create(line, offset - lineOffsets[line]);
          };
          FullTextDocument3.prototype.offsetAt = function(position) {
            var lineOffsets = this.getLineOffsets();
            if (position.line >= lineOffsets.length) {
              return this._content.length;
            } else if (position.line < 0) {
              return 0;
            }
            var lineOffset = lineOffsets[position.line];
            var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
          };
          Object.defineProperty(FullTextDocument3.prototype, "lineCount", {
            get: function() {
              return this.getLineOffsets().length;
            },
            enumerable: false,
            configurable: true
          });
          return FullTextDocument3;
        })()
      );
      var Is;
      (function(Is2) {
        var toString = Object.prototype.toString;
        function defined(value) {
          return typeof value !== "undefined";
        }
        Is2.defined = defined;
        function undefined2(value) {
          return typeof value === "undefined";
        }
        Is2.undefined = undefined2;
        function boolean(value) {
          return value === true || value === false;
        }
        Is2.boolean = boolean;
        function string(value) {
          return toString.call(value) === "[object String]";
        }
        Is2.string = string;
        function number(value) {
          return toString.call(value) === "[object Number]";
        }
        Is2.number = number;
        function numberRange(value, min, max) {
          return toString.call(value) === "[object Number]" && min <= value && value <= max;
        }
        Is2.numberRange = numberRange;
        function integer2(value) {
          return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
        }
        Is2.integer = integer2;
        function uinteger2(value) {
          return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
        }
        Is2.uinteger = uinteger2;
        function func(value) {
          return toString.call(value) === "[object Function]";
        }
        Is2.func = func;
        function objectLiteral(value) {
          return value !== null && typeof value === "object";
        }
        Is2.objectLiteral = objectLiteral;
        function typedArray(value, check) {
          return Array.isArray(value) && value.every(check);
        }
        Is2.typedArray = typedArray;
      })(Is || (Is = {}));
    });
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProtocolNotificationType = exports2.ProtocolNotificationType0 = exports2.ProtocolRequestType = exports2.ProtocolRequestType0 = exports2.RegistrationType = exports2.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_main();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection || (exports2.MessageDirection = MessageDirection = {}));
    var RegistrationType = class {
      constructor(method) {
        this.method = method;
      }
    };
    exports2.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      constructor(method) {
        super(method);
      }
    };
    exports2.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports2.ProtocolNotificationType = ProtocolNotificationType;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.objectLiteral = exports2.typedArray = exports2.stringArray = exports2.array = exports2.func = exports2.error = exports2.number = exports2.string = exports2.boolean = void 0;
    function boolean(value) {
      return value === true || value === false;
    }
    exports2.boolean = boolean;
    function string(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports2.string = string;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports2.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports2.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports2.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports2.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string(elem));
    }
    exports2.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports2.typedArray = typedArray;
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
    exports2.objectLiteral = objectLiteral;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
    })(ImplementationRequest || (exports2.ImplementationRequest = ImplementationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
    })(TypeDefinitionRequest || (exports2.TypeDefinitionRequest = TypeDefinitionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
    })(WorkspaceFoldersRequest || (exports2.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
    })(DidChangeWorkspaceFoldersNotification || (exports2.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
    })(ConfigurationRequest || (exports2.ConfigurationRequest = ConfigurationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ColorPresentationRequest = exports2.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
    })(DocumentColorRequest || (exports2.DocumentColorRequest = DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
    })(ColorPresentationRequest || (exports2.ColorPresentationRequest = ColorPresentationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
    })(FoldingRangeRequest || (exports2.FoldingRangeRequest = FoldingRangeRequest = {}));
    var FoldingRangeRefreshRequest;
    (function(FoldingRangeRefreshRequest2) {
      FoldingRangeRefreshRequest2.method = `workspace/foldingRange/refresh`;
      FoldingRangeRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      FoldingRangeRefreshRequest2.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest2.method);
    })(FoldingRangeRefreshRequest || (exports2.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
    })(DeclarationRequest || (exports2.DeclarationRequest = DeclarationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
    })(SelectionRangeRequest || (exports2.SelectionRangeRequest = SelectionRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_main();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress || (exports2.WorkDoneProgress = WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
    })(WorkDoneProgressCreateRequest || (exports2.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification || (exports2.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
    })(CallHierarchyPrepareRequest || (exports2.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
    })(CallHierarchyIncomingCallsRequest || (exports2.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
    })(CallHierarchyOutgoingCallsRequest || (exports2.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.SemanticTokensRegistrationType = exports2.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat || (exports2.TokenFormat = TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType || (exports2.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRequest || (exports2.SemanticTokensRequest = SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensDeltaRequest || (exports2.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRangeRequest || (exports2.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
    })(SemanticTokensRefreshRequest || (exports2.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
    })(ShowDocumentRequest || (exports2.ShowDocumentRequest = ShowDocumentRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
    })(LinkedEditingRangeRequest || (exports2.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.DidRenameFilesNotification = exports2.WillRenameFilesRequest = exports2.DidCreateFilesNotification = exports2.WillCreateFilesRequest = exports2.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind || (exports2.FileOperationPatternKind = FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
    })(WillCreateFilesRequest || (exports2.WillCreateFilesRequest = WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
    })(DidCreateFilesNotification || (exports2.DidCreateFilesNotification = DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
    })(WillRenameFilesRequest || (exports2.WillRenameFilesRequest = WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
    })(DidRenameFilesNotification || (exports2.DidRenameFilesNotification = DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
    })(DidDeleteFilesNotification || (exports2.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
    })(WillDeleteFilesRequest || (exports2.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel || (exports2.UniquenessLevel = UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind || (exports2.MonikerKind = MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
    })(MonikerRequest || (exports2.MonikerRequest = MonikerRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
    })(TypeHierarchyPrepareRequest || (exports2.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest || (exports2.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest || (exports2.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
    })(InlineValueRequest || (exports2.InlineValueRequest = InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
    })(InlineValueRefreshRequest || (exports2.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
    })(InlayHintRequest || (exports2.InlayHintRequest = InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
    })(InlayHintResolveRequest || (exports2.InlayHintResolveRequest = InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
    })(InlayHintRefreshRequest || (exports2.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_main();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData || (exports2.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind || (exports2.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(DocumentDiagnosticRequest || (exports2.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(WorkspaceDiagnosticRequest || (exports2.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
    })(DiagnosticRefreshRequest || (exports2.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind || (exports2.NotebookCellKind = NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals;
    })(ExecutionSummary || (exports2.ExecutionSummary = ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell || (exports2.NotebookCell = NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument || (exports2.NotebookDocument = NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType || (exports2.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification || (exports2.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange || (exports2.NotebookCellArrayChange = NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification || (exports2.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification || (exports2.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification || (exports2.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js
var require_protocol_inlineCompletion = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionRequest = void 0;
    var messages_1 = require_messages2();
    var InlineCompletionRequest;
    (function(InlineCompletionRequest2) {
      InlineCompletionRequest2.method = "textDocument/inlineCompletion";
      InlineCompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineCompletionRequest2.type = new messages_1.ProtocolRequestType(InlineCompletionRequest2.method);
    })(InlineCompletionRequest || (exports2.InlineCompletionRequest = InlineCompletionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceSymbolRequest = exports2.CodeActionResolveRequest = exports2.CodeActionRequest = exports2.DocumentSymbolRequest = exports2.DocumentHighlightRequest = exports2.ReferencesRequest = exports2.DefinitionRequest = exports2.SignatureHelpRequest = exports2.SignatureHelpTriggerKind = exports2.HoverRequest = exports2.CompletionResolveRequest = exports2.CompletionRequest = exports2.CompletionTriggerKind = exports2.PublishDiagnosticsNotification = exports2.WatchKind = exports2.RelativePattern = exports2.FileChangeType = exports2.DidChangeWatchedFilesNotification = exports2.WillSaveTextDocumentWaitUntilRequest = exports2.WillSaveTextDocumentNotification = exports2.TextDocumentSaveReason = exports2.DidSaveTextDocumentNotification = exports2.DidCloseTextDocumentNotification = exports2.DidChangeTextDocumentNotification = exports2.TextDocumentContentChangeEvent = exports2.DidOpenTextDocumentNotification = exports2.TextDocumentSyncKind = exports2.TelemetryEventNotification = exports2.LogMessageNotification = exports2.ShowMessageRequest = exports2.ShowMessageNotification = exports2.MessageType = exports2.DidChangeConfigurationNotification = exports2.ExitNotification = exports2.ShutdownRequest = exports2.InitializedNotification = exports2.InitializeErrorCodes = exports2.InitializeRequest = exports2.WorkDoneProgressOptions = exports2.TextDocumentRegistrationOptions = exports2.StaticRegistrationOptions = exports2.PositionEncodingKind = exports2.FailureHandlingKind = exports2.ResourceOperationKind = exports2.UnregistrationRequest = exports2.RegistrationRequest = exports2.DocumentSelector = exports2.NotebookCellTextDocumentFilter = exports2.NotebookDocumentFilter = exports2.TextDocumentFilter = void 0;
    exports2.MonikerRequest = exports2.MonikerKind = exports2.UniquenessLevel = exports2.WillDeleteFilesRequest = exports2.DidDeleteFilesNotification = exports2.WillRenameFilesRequest = exports2.DidRenameFilesNotification = exports2.WillCreateFilesRequest = exports2.DidCreateFilesNotification = exports2.FileOperationPatternKind = exports2.LinkedEditingRangeRequest = exports2.ShowDocumentRequest = exports2.SemanticTokensRegistrationType = exports2.SemanticTokensRefreshRequest = exports2.SemanticTokensRangeRequest = exports2.SemanticTokensDeltaRequest = exports2.SemanticTokensRequest = exports2.TokenFormat = exports2.CallHierarchyPrepareRequest = exports2.CallHierarchyOutgoingCallsRequest = exports2.CallHierarchyIncomingCallsRequest = exports2.WorkDoneProgressCancelNotification = exports2.WorkDoneProgressCreateRequest = exports2.WorkDoneProgress = exports2.SelectionRangeRequest = exports2.DeclarationRequest = exports2.FoldingRangeRefreshRequest = exports2.FoldingRangeRequest = exports2.ColorPresentationRequest = exports2.DocumentColorRequest = exports2.ConfigurationRequest = exports2.DidChangeWorkspaceFoldersNotification = exports2.WorkspaceFoldersRequest = exports2.TypeDefinitionRequest = exports2.ImplementationRequest = exports2.ApplyWorkspaceEditRequest = exports2.ExecuteCommandRequest = exports2.PrepareRenameRequest = exports2.RenameRequest = exports2.PrepareSupportDefaultBehavior = exports2.DocumentOnTypeFormattingRequest = exports2.DocumentRangesFormattingRequest = exports2.DocumentRangeFormattingRequest = exports2.DocumentFormattingRequest = exports2.DocumentLinkResolveRequest = exports2.DocumentLinkRequest = exports2.CodeLensRefreshRequest = exports2.CodeLensResolveRequest = exports2.CodeLensRequest = exports2.WorkspaceSymbolResolveRequest = void 0;
    exports2.InlineCompletionRequest = exports2.DidCloseNotebookDocumentNotification = exports2.DidSaveNotebookDocumentNotification = exports2.DidChangeNotebookDocumentNotification = exports2.NotebookCellArrayChange = exports2.DidOpenNotebookDocumentNotification = exports2.NotebookDocumentSyncRegistrationType = exports2.NotebookDocument = exports2.NotebookCell = exports2.ExecutionSummary = exports2.NotebookCellKind = exports2.DiagnosticRefreshRequest = exports2.WorkspaceDiagnosticRequest = exports2.DocumentDiagnosticRequest = exports2.DocumentDiagnosticReportKind = exports2.DiagnosticServerCancellationData = exports2.InlayHintRefreshRequest = exports2.InlayHintResolveRequest = exports2.InlayHintRequest = exports2.InlineValueRefreshRequest = exports2.InlineValueRequest = exports2.TypeHierarchySupertypesRequest = exports2.TypeHierarchySubtypesRequest = exports2.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = require_main2();
    var Is = require_is3();
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports2, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports2, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports2, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports2, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports2, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports2, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports2, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports2, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    Object.defineProperty(exports2, "FoldingRangeRefreshRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRefreshRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports2, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports2, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports2, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports2, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports2, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports2, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports2, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports2, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports2, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports2, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports2, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports2, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports2, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports2, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports2, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports2, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports2, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports2, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports2, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports2, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports2, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports2, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports2, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports2, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports2, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports2, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports2, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports2, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports2, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports2, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports2, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports2, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports2, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports2, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports2, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports2, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports2, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports2, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports2, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var protocol_inlineCompletion_1 = require_protocol_inlineCompletion();
    Object.defineProperty(exports2, "InlineCompletionRequest", { enumerable: true, get: function() {
      return protocol_inlineCompletion_1.InlineCompletionRequest;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter || (exports2.TextDocumentFilter = TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter || (exports2.NotebookDocumentFilter = NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter || (exports2.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
    var DocumentSelector;
    (function(DocumentSelector2) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (let elem of value) {
          if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector2.is = is;
    })(DocumentSelector || (exports2.DocumentSelector = DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest || (exports2.RegistrationRequest = RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest || (exports2.UnregistrationRequest = UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind || (exports2.ResourceOperationKind = ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind || (exports2.FailureHandlingKind = FailureHandlingKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind || (exports2.PositionEncodingKind = PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions || (exports2.StaticRegistrationOptions = StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions || (exports2.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions || (exports2.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest || (exports2.InitializeRequest = InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes || (exports2.InitializeErrorCodes = InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification || (exports2.InitializedNotification = InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest || (exports2.ShutdownRequest = ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification || (exports2.ExitNotification = ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
    })(DidChangeConfigurationNotification || (exports2.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
      MessageType2.Debug = 5;
    })(MessageType || (exports2.MessageType = MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
    })(ShowMessageNotification || (exports2.ShowMessageNotification = ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
    })(ShowMessageRequest || (exports2.ShowMessageRequest = ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification || (exports2.LogMessageNotification = LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification || (exports2.TelemetryEventNotification = TelemetryEventNotification = {}));
    var TextDocumentSyncKind2;
    (function(TextDocumentSyncKind3) {
      TextDocumentSyncKind3.None = 0;
      TextDocumentSyncKind3.Full = 1;
      TextDocumentSyncKind3.Incremental = 2;
    })(TextDocumentSyncKind2 || (exports2.TextDocumentSyncKind = TextDocumentSyncKind2 = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
    })(DidOpenTextDocumentNotification || (exports2.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent;
    (function(TextDocumentContentChangeEvent2) {
      function isIncremental(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent2.isIncremental = isIncremental;
      function isFull(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent2.isFull = isFull;
    })(TextDocumentContentChangeEvent || (exports2.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
    })(DidChangeTextDocumentNotification || (exports2.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
    })(DidCloseTextDocumentNotification || (exports2.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
    })(DidSaveTextDocumentNotification || (exports2.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason || (exports2.TextDocumentSaveReason = TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
    })(WillSaveTextDocumentNotification || (exports2.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
    })(WillSaveTextDocumentWaitUntilRequest || (exports2.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
    })(DidChangeWatchedFilesNotification || (exports2.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType || (exports2.FileChangeType = FileChangeType = {}));
    var RelativePattern;
    (function(RelativePattern2) {
      function is(value) {
        const candidate = value;
        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
      }
      RelativePattern2.is = is;
    })(RelativePattern || (exports2.RelativePattern = RelativePattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind || (exports2.WatchKind = WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
    })(PublishDiagnosticsNotification || (exports2.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind || (exports2.CompletionTriggerKind = CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
    })(CompletionRequest || (exports2.CompletionRequest = CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
    })(CompletionResolveRequest || (exports2.CompletionResolveRequest = CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
    })(HoverRequest || (exports2.HoverRequest = HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind || (exports2.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
    })(SignatureHelpRequest || (exports2.SignatureHelpRequest = SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
    })(DefinitionRequest || (exports2.DefinitionRequest = DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
    })(ReferencesRequest || (exports2.ReferencesRequest = ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
    })(DocumentHighlightRequest || (exports2.DocumentHighlightRequest = DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
    })(DocumentSymbolRequest || (exports2.DocumentSymbolRequest = DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
    })(CodeActionRequest || (exports2.CodeActionRequest = CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
    })(CodeActionResolveRequest || (exports2.CodeActionResolveRequest = CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
    })(WorkspaceSymbolRequest || (exports2.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
    })(WorkspaceSymbolResolveRequest || (exports2.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
    })(CodeLensRequest || (exports2.CodeLensRequest = CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
    })(CodeLensResolveRequest || (exports2.CodeLensResolveRequest = CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
    })(CodeLensRefreshRequest || (exports2.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
    })(DocumentLinkRequest || (exports2.DocumentLinkRequest = DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
    })(DocumentLinkResolveRequest || (exports2.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
    })(DocumentFormattingRequest || (exports2.DocumentFormattingRequest = DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
    })(DocumentRangeFormattingRequest || (exports2.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
    var DocumentRangesFormattingRequest;
    (function(DocumentRangesFormattingRequest2) {
      DocumentRangesFormattingRequest2.method = "textDocument/rangesFormatting";
      DocumentRangesFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangesFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest2.method);
    })(DocumentRangesFormattingRequest || (exports2.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
    })(DocumentOnTypeFormattingRequest || (exports2.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior || (exports2.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
    })(RenameRequest || (exports2.RenameRequest = RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
    })(PrepareRenameRequest || (exports2.PrepareRenameRequest = PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
    })(ExecuteCommandRequest || (exports2.ExecuteCommandRequest = ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
    })(ApplyWorkspaceEditRequest || (exports2.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var vscode_jsonrpc_1 = require_main();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LSPErrorCodes = exports2.createProtocolConnection = void 0;
    __exportStar(require_main(), exports2);
    __exportStar(require_main2(), exports2);
    __exportStar(require_messages2(), exports2);
    __exportStar(require_protocol(), exports2);
    var connection_1 = require_connection2();
    Object.defineProperty(exports2, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes || (exports2.LSPErrorCodes = LSPErrorCodes = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main3 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createProtocolConnection = void 0;
    var node_1 = require_node();
    __exportStar(require_node(), exports2);
    __exportStar(require_api2(), exports2);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_1.createMessageConnection)(input, output, logger, options);
    }
    exports2.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver/lib/common/utils/uuid.js
var require_uuid = __commonJS({
  "node_modules/vscode-languageserver/lib/common/utils/uuid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generateUuid = exports2.parse = exports2.isUUID = exports2.v4 = exports2.empty = void 0;
    var ValueUUID = class {
      constructor(_value) {
        this._value = _value;
      }
      asHex() {
        return this._value;
      }
      equals(other) {
        return this.asHex() === other.asHex();
      }
    };
    var V4UUID = class _V4UUID extends ValueUUID {
      static _oneOf(array) {
        return array[Math.floor(array.length * Math.random())];
      }
      static _randomHex() {
        return _V4UUID._oneOf(_V4UUID._chars);
      }
      constructor() {
        super([
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          "4",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._oneOf(_V4UUID._timeHighBits),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          "-",
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex(),
          _V4UUID._randomHex()
        ].join(""));
      }
    };
    V4UUID._chars = ["0", "1", "2", "3", "4", "5", "6", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    V4UUID._timeHighBits = ["8", "9", "a", "b"];
    exports2.empty = new ValueUUID("00000000-0000-0000-0000-000000000000");
    function v4() {
      return new V4UUID();
    }
    exports2.v4 = v4;
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
      return _UUIDPattern.test(value);
    }
    exports2.isUUID = isUUID;
    function parse(value) {
      if (!isUUID(value)) {
        throw new Error("invalid uuid");
      }
      return new ValueUUID(value);
    }
    exports2.parse = parse;
    function generateUuid() {
      return v4().asHex();
    }
    exports2.generateUuid = generateUuid;
  }
});

// node_modules/vscode-languageserver/lib/common/progress.js
var require_progress = __commonJS({
  "node_modules/vscode-languageserver/lib/common/progress.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attachPartialResult = exports2.ProgressFeature = exports2.attachWorkDone = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var uuid_1 = require_uuid();
    var WorkDoneProgressReporterImpl = class _WorkDoneProgressReporterImpl {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
        _WorkDoneProgressReporterImpl.Instances.set(this._token, this);
      }
      begin(title, percentage, message, cancellable) {
        let param = {
          kind: "begin",
          title,
          percentage,
          message,
          cancellable
        };
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      report(arg0, arg1) {
        let param = {
          kind: "report"
        };
        if (typeof arg0 === "number") {
          param.percentage = arg0;
          if (arg1 !== void 0) {
            param.message = arg1;
          }
        } else {
          param.message = arg0;
        }
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, param);
      }
      done() {
        _WorkDoneProgressReporterImpl.Instances.delete(this._token);
        this._connection.sendProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, { kind: "end" });
      }
    };
    WorkDoneProgressReporterImpl.Instances = /* @__PURE__ */ new Map();
    var WorkDoneProgressServerReporterImpl = class extends WorkDoneProgressReporterImpl {
      constructor(connection2, token) {
        super(connection2, token);
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
        super.done();
      }
      cancel() {
        this._source.cancel();
      }
    };
    var NullProgressReporter = class {
      constructor() {
      }
      begin() {
      }
      report() {
      }
      done() {
      }
    };
    var NullProgressServerReporter = class extends NullProgressReporter {
      constructor() {
        super();
        this._source = new vscode_languageserver_protocol_1.CancellationTokenSource();
      }
      get token() {
        return this._source.token;
      }
      done() {
        this._source.dispose();
      }
      cancel() {
        this._source.cancel();
      }
    };
    function attachWorkDone(connection2, params) {
      if (params === void 0 || params.workDoneToken === void 0) {
        return new NullProgressReporter();
      }
      const token = params.workDoneToken;
      delete params.workDoneToken;
      return new WorkDoneProgressReporterImpl(connection2, token);
    }
    exports2.attachWorkDone = attachWorkDone;
    var ProgressFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._progressSupported = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          if (capabilities?.window?.workDoneProgress === true) {
            this._progressSupported = true;
            this.connection.onNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, (params) => {
              let progress = WorkDoneProgressReporterImpl.Instances.get(params.token);
              if (progress instanceof WorkDoneProgressServerReporterImpl || progress instanceof NullProgressServerReporter) {
                progress.cancel();
              }
            });
          }
        }
        attachWorkDoneProgress(token) {
          if (token === void 0) {
            return new NullProgressReporter();
          } else {
            return new WorkDoneProgressReporterImpl(this.connection, token);
          }
        }
        createWorkDoneProgress() {
          if (this._progressSupported) {
            const token = (0, uuid_1.generateUuid)();
            return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, { token }).then(() => {
              const result = new WorkDoneProgressServerReporterImpl(this.connection, token);
              return result;
            });
          } else {
            return Promise.resolve(new NullProgressServerReporter());
          }
        }
      };
    };
    exports2.ProgressFeature = ProgressFeature;
    var ResultProgress;
    (function(ResultProgress2) {
      ResultProgress2.type = new vscode_languageserver_protocol_1.ProgressType();
    })(ResultProgress || (ResultProgress = {}));
    var ResultProgressReporterImpl = class {
      constructor(_connection, _token) {
        this._connection = _connection;
        this._token = _token;
      }
      report(data) {
        this._connection.sendProgress(ResultProgress.type, this._token, data);
      }
    };
    function attachPartialResult(connection2, params) {
      if (params === void 0 || params.partialResultToken === void 0) {
        return void 0;
      }
      const token = params.partialResultToken;
      delete params.partialResultToken;
      return new ResultProgressReporterImpl(connection2, token);
    }
    exports2.attachPartialResult = attachPartialResult;
  }
});

// node_modules/vscode-languageserver/lib/common/configuration.js
var require_configuration = __commonJS({
  "node_modules/vscode-languageserver/lib/common/configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConfigurationFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var ConfigurationFeature = (Base) => {
      return class extends Base {
        getConfiguration(arg) {
          if (!arg) {
            return this._getConfiguration({});
          } else if (Is.string(arg)) {
            return this._getConfiguration({ section: arg });
          } else {
            return this._getConfiguration(arg);
          }
        }
        _getConfiguration(arg) {
          let params = {
            items: Array.isArray(arg) ? arg : [arg]
          };
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, params).then((result) => {
            if (Array.isArray(result)) {
              return Array.isArray(arg) ? result : result[0];
            } else {
              return Array.isArray(arg) ? [] : null;
            }
          });
        }
      };
    };
    exports2.ConfigurationFeature = ConfigurationFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/workspaceFolder.js
var require_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver/lib/common/workspaceFolder.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.WorkspaceFoldersFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var WorkspaceFoldersFeature = (Base) => {
      return class extends Base {
        constructor() {
          super();
          this._notificationIsAutoRegistered = false;
        }
        initialize(capabilities) {
          super.initialize(capabilities);
          let workspaceCapabilities = capabilities.workspace;
          if (workspaceCapabilities && workspaceCapabilities.workspaceFolders) {
            this._onDidChangeWorkspaceFolders = new vscode_languageserver_protocol_1.Emitter();
            this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, (params) => {
              this._onDidChangeWorkspaceFolders.fire(params.event);
            });
          }
        }
        fillServerCapabilities(capabilities) {
          super.fillServerCapabilities(capabilities);
          const changeNotifications = capabilities.workspace?.workspaceFolders?.changeNotifications;
          this._notificationIsAutoRegistered = changeNotifications === true || typeof changeNotifications === "string";
        }
        getWorkspaceFolders() {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type);
        }
        get onDidChangeWorkspaceFolders() {
          if (!this._onDidChangeWorkspaceFolders) {
            throw new Error("Client doesn't support sending workspace folder change events.");
          }
          if (!this._notificationIsAutoRegistered && !this._unregistration) {
            this._unregistration = this.connection.client.register(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type);
          }
          return this._onDidChangeWorkspaceFolders.event;
        }
      };
    };
    exports2.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/callHierarchy.js
var require_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/callHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.CallHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var CallHierarchyFeature = (Base) => {
      return class extends Base {
        get callHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onIncomingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onOutgoingCalls: (handler) => {
              const type = vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.CallHierarchyFeature = CallHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/semanticTokens.js
var require_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver/lib/common/semanticTokens.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SemanticTokensBuilder = exports2.SemanticTokensDiff = exports2.SemanticTokensFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var SemanticTokensFeature = (Base) => {
      return class extends Base {
        get semanticTokens() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onDelta: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onRange: (handler) => {
              const type = vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.SemanticTokensFeature = SemanticTokensFeature;
    var SemanticTokensDiff = class {
      constructor(originalSequence, modifiedSequence) {
        this.originalSequence = originalSequence;
        this.modifiedSequence = modifiedSequence;
      }
      computeDiff() {
        const originalLength = this.originalSequence.length;
        const modifiedLength = this.modifiedSequence.length;
        let startIndex = 0;
        while (startIndex < modifiedLength && startIndex < originalLength && this.originalSequence[startIndex] === this.modifiedSequence[startIndex]) {
          startIndex++;
        }
        if (startIndex < modifiedLength && startIndex < originalLength) {
          let originalEndIndex = originalLength - 1;
          let modifiedEndIndex = modifiedLength - 1;
          while (originalEndIndex >= startIndex && modifiedEndIndex >= startIndex && this.originalSequence[originalEndIndex] === this.modifiedSequence[modifiedEndIndex]) {
            originalEndIndex--;
            modifiedEndIndex--;
          }
          if (originalEndIndex < startIndex || modifiedEndIndex < startIndex) {
            originalEndIndex++;
            modifiedEndIndex++;
          }
          const deleteCount = originalEndIndex - startIndex + 1;
          const newData = this.modifiedSequence.slice(startIndex, modifiedEndIndex + 1);
          if (newData.length === 1 && newData[0] === this.originalSequence[originalEndIndex]) {
            return [
              { start: startIndex, deleteCount: deleteCount - 1 }
            ];
          } else {
            return [
              { start: startIndex, deleteCount, data: newData }
            ];
          }
        } else if (startIndex < modifiedLength) {
          return [
            { start: startIndex, deleteCount: 0, data: this.modifiedSequence.slice(startIndex) }
          ];
        } else if (startIndex < originalLength) {
          return [
            { start: startIndex, deleteCount: originalLength - startIndex }
          ];
        } else {
          return [];
        }
      }
    };
    exports2.SemanticTokensDiff = SemanticTokensDiff;
    var SemanticTokensBuilder = class {
      constructor() {
        this._prevData = void 0;
        this.initialize();
      }
      initialize() {
        this._id = Date.now();
        this._prevLine = 0;
        this._prevChar = 0;
        this._data = [];
        this._dataLen = 0;
      }
      push(line, char, length, tokenType, tokenModifiers) {
        let pushLine = line;
        let pushChar = char;
        if (this._dataLen > 0) {
          pushLine -= this._prevLine;
          if (pushLine === 0) {
            pushChar -= this._prevChar;
          }
        }
        this._data[this._dataLen++] = pushLine;
        this._data[this._dataLen++] = pushChar;
        this._data[this._dataLen++] = length;
        this._data[this._dataLen++] = tokenType;
        this._data[this._dataLen++] = tokenModifiers;
        this._prevLine = line;
        this._prevChar = char;
      }
      get id() {
        return this._id.toString();
      }
      previousResult(id) {
        if (this.id === id) {
          this._prevData = this._data;
        }
        this.initialize();
      }
      build() {
        this._prevData = void 0;
        return {
          resultId: this.id,
          data: this._data
        };
      }
      canBuildEdits() {
        return this._prevData !== void 0;
      }
      buildEdits() {
        if (this._prevData !== void 0) {
          return {
            resultId: this.id,
            edits: new SemanticTokensDiff(this._prevData, this._data).computeDiff()
          };
        } else {
          return this.build();
        }
      }
    };
    exports2.SemanticTokensBuilder = SemanticTokensBuilder;
  }
});

// node_modules/vscode-languageserver/lib/common/showDocument.js
var require_showDocument = __commonJS({
  "node_modules/vscode-languageserver/lib/common/showDocument.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ShowDocumentFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var ShowDocumentFeature = (Base) => {
      return class extends Base {
        showDocument(params) {
          return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, params);
        }
      };
    };
    exports2.ShowDocumentFeature = ShowDocumentFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/fileOperations.js
var require_fileOperations = __commonJS({
  "node_modules/vscode-languageserver/lib/common/fileOperations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FileOperationsFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FileOperationsFeature = (Base) => {
      return class extends Base {
        onDidCreateFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidCreateFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidRenameFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidRenameFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onDidDeleteFiles(handler) {
          return this.connection.onNotification(vscode_languageserver_protocol_1.DidDeleteFilesNotification.type, (params) => {
            handler(params);
          });
        }
        onWillCreateFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillCreateFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillRenameFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillRenameFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
        onWillDeleteFiles(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.WillDeleteFilesRequest.type, (params, cancel) => {
            return handler(params, cancel);
          });
        }
      };
    };
    exports2.FileOperationsFeature = FileOperationsFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/linkedEditingRange.js
var require_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/linkedEditingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.LinkedEditingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var LinkedEditingRangeFeature = (Base) => {
      return class extends Base {
        onLinkedEditingRange(handler) {
          return this.connection.onRequest(vscode_languageserver_protocol_1.LinkedEditingRangeRequest.type, (params, cancel) => {
            return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
          });
        }
      };
    };
    exports2.LinkedEditingRangeFeature = LinkedEditingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/typeHierarchy.js
var require_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver/lib/common/typeHierarchy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TypeHierarchyFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TypeHierarchyFeature = (Base) => {
      return class extends Base {
        get typeHierarchy() {
          return {
            onPrepare: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), void 0);
              });
            },
            onSupertypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            },
            onSubtypes: (handler) => {
              const type = vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.TypeHierarchyFeature = TypeHierarchyFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlineValue.js
var require_inlineValue = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineValue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineValueFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineValueFeature = (Base) => {
      return class extends Base {
        get inlineValue() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineValueFeature = InlineValueFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/foldingRange.js
var require_foldingRange = __commonJS({
  "node_modules/vscode-languageserver/lib/common/foldingRange.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FoldingRangeFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var FoldingRangeFeature = (Base) => {
      return class extends Base {
        get foldingRange() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type);
            },
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.FoldingRangeRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.FoldingRangeFeature = FoldingRangeFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/inlayHint.js
var require_inlayHint = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlayHint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlayHintFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlayHintFeature = (Base) => {
      return class extends Base {
        get inlayHint() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            },
            resolve: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, (params, cancel) => {
                return handler(params, cancel);
              });
            }
          };
        }
      };
    };
    exports2.InlayHintFeature = InlayHintFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/diagnostic.js
var require_diagnostic = __commonJS({
  "node_modules/vscode-languageserver/lib/common/diagnostic.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DiagnosticFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var DiagnosticFeature = (Base) => {
      return class extends Base {
        get diagnostics() {
          return {
            refresh: () => {
              return this.connection.sendRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type);
            },
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.partialResult, params));
              });
            },
            onWorkspace: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, params));
              });
            }
          };
        }
      };
    };
    exports2.DiagnosticFeature = DiagnosticFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/textDocuments.js
var require_textDocuments = __commonJS({
  "node_modules/vscode-languageserver/lib/common/textDocuments.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TextDocuments = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var TextDocuments2 = class {
      /**
       * Create a new text document manager.
       */
      constructor(configuration) {
        this._configuration = configuration;
        this._syncedDocuments = /* @__PURE__ */ new Map();
        this._onDidChangeContent = new vscode_languageserver_protocol_1.Emitter();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onWillSave = new vscode_languageserver_protocol_1.Emitter();
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened.
       */
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been opened or the content changes.
       */
      get onDidChangeContent() {
        return this._onDidChangeContent.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * will be saved.
       */
      get onWillSave() {
        return this._onWillSave.event;
      }
      /**
       * Sets a handler that will be called if a participant wants to provide
       * edits during a text document save.
       */
      onWillSaveWaitUntil(handler) {
        this._willSaveWaitUntil = handler;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been saved.
       */
      get onDidSave() {
        return this._onDidSave.event;
      }
      /**
       * An event that fires when a text document managed by this manager
       * has been closed.
       */
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Returns the document for the given URI. Returns undefined if
       * the document is not managed by this instance.
       *
       * @param uri The text document's URI to retrieve.
       * @return the text document or `undefined`.
       */
      get(uri) {
        return this._syncedDocuments.get(uri);
      }
      /**
       * Returns all text documents managed by this instance.
       *
       * @return all text documents.
       */
      all() {
        return Array.from(this._syncedDocuments.values());
      }
      /**
       * Returns the URIs of all text documents managed by this instance.
       *
       * @return the URI's of all text documents.
       */
      keys() {
        return Array.from(this._syncedDocuments.keys());
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the text documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenTextDocument`, `onDidChangeTextDocument`, `onDidCloseTextDocument`,
       * `onWillSaveTextDocument`, `onWillSaveTextDocumentWaitUntil` and `onDidSaveTextDocument`.
       *
       * Use the corresponding events on the TextDocuments instance instead.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        connection2.__textDocumentSync = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
        const disposables = [];
        disposables.push(connection2.onDidOpenTextDocument((event) => {
          const td = event.textDocument;
          const document = this._configuration.create(td.uri, td.languageId, td.version, td.text);
          this._syncedDocuments.set(td.uri, document);
          const toFire = Object.freeze({ document });
          this._onDidOpen.fire(toFire);
          this._onDidChangeContent.fire(toFire);
        }));
        disposables.push(connection2.onDidChangeTextDocument((event) => {
          const td = event.textDocument;
          const changes = event.contentChanges;
          if (changes.length === 0) {
            return;
          }
          const { version } = td;
          if (version === null || version === void 0) {
            throw new Error(`Received document change event for ${td.uri} without valid version identifier`);
          }
          let syncedDocument = this._syncedDocuments.get(td.uri);
          if (syncedDocument !== void 0) {
            syncedDocument = this._configuration.update(syncedDocument, changes, version);
            this._syncedDocuments.set(td.uri, syncedDocument);
            this._onDidChangeContent.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onDidCloseTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._syncedDocuments.delete(event.textDocument.uri);
            this._onDidClose.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onWillSave.fire(Object.freeze({ document: syncedDocument, reason: event.reason }));
          }
        }));
        disposables.push(connection2.onWillSaveTextDocumentWaitUntil((event, token) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0 && this._willSaveWaitUntil) {
            return this._willSaveWaitUntil(Object.freeze({ document: syncedDocument, reason: event.reason }), token);
          } else {
            return [];
          }
        }));
        disposables.push(connection2.onDidSaveTextDocument((event) => {
          let syncedDocument = this._syncedDocuments.get(event.textDocument.uri);
          if (syncedDocument !== void 0) {
            this._onDidSave.fire(Object.freeze({ document: syncedDocument }));
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
    };
    exports2.TextDocuments = TextDocuments2;
  }
});

// node_modules/vscode-languageserver/lib/common/notebook.js
var require_notebook = __commonJS({
  "node_modules/vscode-languageserver/lib/common/notebook.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotebookDocuments = exports2.NotebookSyncFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var textDocuments_1 = require_textDocuments();
    var NotebookSyncFeature = (Base) => {
      return class extends Base {
        get synchronization() {
          return {
            onDidOpenNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidOpenNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidChangeNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidChangeNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidSaveNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidSaveNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            },
            onDidCloseNotebookDocument: (handler) => {
              return this.connection.onNotification(vscode_languageserver_protocol_1.DidCloseNotebookDocumentNotification.type, (params) => {
                handler(params);
              });
            }
          };
        }
      };
    };
    exports2.NotebookSyncFeature = NotebookSyncFeature;
    var CellTextDocumentConnection = class _CellTextDocumentConnection {
      onDidOpenTextDocument(handler) {
        this.openHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.openHandler = void 0;
        });
      }
      openTextDocument(params) {
        this.openHandler && this.openHandler(params);
      }
      onDidChangeTextDocument(handler) {
        this.changeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.changeHandler = handler;
        });
      }
      changeTextDocument(params) {
        this.changeHandler && this.changeHandler(params);
      }
      onDidCloseTextDocument(handler) {
        this.closeHandler = handler;
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          this.closeHandler = void 0;
        });
      }
      closeTextDocument(params) {
        this.closeHandler && this.closeHandler(params);
      }
      onWillSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onWillSaveTextDocumentWaitUntil() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
      onDidSaveTextDocument() {
        return _CellTextDocumentConnection.NULL_DISPOSE;
      }
    };
    CellTextDocumentConnection.NULL_DISPOSE = Object.freeze({ dispose: () => {
    } });
    var NotebookDocuments = class {
      constructor(configurationOrTextDocuments) {
        if (configurationOrTextDocuments instanceof textDocuments_1.TextDocuments) {
          this._cellTextDocuments = configurationOrTextDocuments;
        } else {
          this._cellTextDocuments = new textDocuments_1.TextDocuments(configurationOrTextDocuments);
        }
        this.notebookDocuments = /* @__PURE__ */ new Map();
        this.notebookCellMap = /* @__PURE__ */ new Map();
        this._onDidOpen = new vscode_languageserver_protocol_1.Emitter();
        this._onDidChange = new vscode_languageserver_protocol_1.Emitter();
        this._onDidSave = new vscode_languageserver_protocol_1.Emitter();
        this._onDidClose = new vscode_languageserver_protocol_1.Emitter();
      }
      get cellTextDocuments() {
        return this._cellTextDocuments;
      }
      getCellTextDocument(cell) {
        return this._cellTextDocuments.get(cell.document);
      }
      getNotebookDocument(uri) {
        return this.notebookDocuments.get(uri);
      }
      getNotebookCell(uri) {
        const value = this.notebookCellMap.get(uri);
        return value && value[0];
      }
      findNotebookDocumentForCell(cell) {
        const key = typeof cell === "string" ? cell : cell.document;
        const value = this.notebookCellMap.get(key);
        return value && value[1];
      }
      get onDidOpen() {
        return this._onDidOpen.event;
      }
      get onDidSave() {
        return this._onDidSave.event;
      }
      get onDidChange() {
        return this._onDidChange.event;
      }
      get onDidClose() {
        return this._onDidClose.event;
      }
      /**
       * Listens for `low level` notification on the given connection to
       * update the notebook documents managed by this instance.
       *
       * Please note that the connection only provides handlers not an event model. Therefore
       * listening on a connection will overwrite the following handlers on a connection:
       * `onDidOpenNotebookDocument`, `onDidChangeNotebookDocument`, `onDidSaveNotebookDocument`,
       *  and `onDidCloseNotebookDocument`.
       *
       * @param connection The connection to listen on.
       */
      listen(connection2) {
        const cellTextDocumentConnection = new CellTextDocumentConnection();
        const disposables = [];
        disposables.push(this.cellTextDocuments.listen(cellTextDocumentConnection));
        disposables.push(connection2.notebooks.synchronization.onDidOpenNotebookDocument((params) => {
          this.notebookDocuments.set(params.notebookDocument.uri, params.notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.openTextDocument({ textDocument: cellTextDocument });
          }
          this.updateCellMap(params.notebookDocument);
          this._onDidOpen.fire(params.notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidChangeNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          notebookDocument.version = params.notebookDocument.version;
          const oldMetadata = notebookDocument.metadata;
          let metadataChanged = false;
          const change = params.change;
          if (change.metadata !== void 0) {
            metadataChanged = true;
            notebookDocument.metadata = change.metadata;
          }
          const opened = [];
          const closed = [];
          const data = [];
          const text = [];
          if (change.cells !== void 0) {
            const changedCells = change.cells;
            if (changedCells.structure !== void 0) {
              const array = changedCells.structure.array;
              notebookDocument.cells.splice(array.start, array.deleteCount, ...array.cells !== void 0 ? array.cells : []);
              if (changedCells.structure.didOpen !== void 0) {
                for (const open of changedCells.structure.didOpen) {
                  cellTextDocumentConnection.openTextDocument({ textDocument: open });
                  opened.push(open.uri);
                }
              }
              if (changedCells.structure.didClose) {
                for (const close of changedCells.structure.didClose) {
                  cellTextDocumentConnection.closeTextDocument({ textDocument: close });
                  closed.push(close.uri);
                }
              }
            }
            if (changedCells.data !== void 0) {
              const cellUpdates = new Map(changedCells.data.map((cell) => [cell.document, cell]));
              for (let i = 0; i <= notebookDocument.cells.length; i++) {
                const change2 = cellUpdates.get(notebookDocument.cells[i].document);
                if (change2 !== void 0) {
                  const old = notebookDocument.cells.splice(i, 1, change2);
                  data.push({ old: old[0], new: change2 });
                  cellUpdates.delete(change2.document);
                  if (cellUpdates.size === 0) {
                    break;
                  }
                }
              }
            }
            if (changedCells.textContent !== void 0) {
              for (const cellTextDocument of changedCells.textContent) {
                cellTextDocumentConnection.changeTextDocument({ textDocument: cellTextDocument.document, contentChanges: cellTextDocument.changes });
                text.push(cellTextDocument.document.uri);
              }
            }
          }
          this.updateCellMap(notebookDocument);
          const changeEvent = { notebookDocument };
          if (metadataChanged) {
            changeEvent.metadata = { old: oldMetadata, new: notebookDocument.metadata };
          }
          const added = [];
          for (const open of opened) {
            added.push(this.getNotebookCell(open));
          }
          const removed = [];
          for (const close of closed) {
            removed.push(this.getNotebookCell(close));
          }
          const textContent = [];
          for (const change2 of text) {
            textContent.push(this.getNotebookCell(change2));
          }
          if (added.length > 0 || removed.length > 0 || data.length > 0 || textContent.length > 0) {
            changeEvent.cells = { added, removed, changed: { data, textContent } };
          }
          if (changeEvent.metadata !== void 0 || changeEvent.cells !== void 0) {
            this._onDidChange.fire(changeEvent);
          }
        }));
        disposables.push(connection2.notebooks.synchronization.onDidSaveNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidSave.fire(notebookDocument);
        }));
        disposables.push(connection2.notebooks.synchronization.onDidCloseNotebookDocument((params) => {
          const notebookDocument = this.notebookDocuments.get(params.notebookDocument.uri);
          if (notebookDocument === void 0) {
            return;
          }
          this._onDidClose.fire(notebookDocument);
          for (const cellTextDocument of params.cellTextDocuments) {
            cellTextDocumentConnection.closeTextDocument({ textDocument: cellTextDocument });
          }
          this.notebookDocuments.delete(params.notebookDocument.uri);
          for (const cell of notebookDocument.cells) {
            this.notebookCellMap.delete(cell.document);
          }
        }));
        return vscode_languageserver_protocol_1.Disposable.create(() => {
          disposables.forEach((disposable) => disposable.dispose());
        });
      }
      updateCellMap(notebookDocument) {
        for (const cell of notebookDocument.cells) {
          this.notebookCellMap.set(cell.document, [cell, notebookDocument]);
        }
      }
    };
    exports2.NotebookDocuments = NotebookDocuments;
  }
});

// node_modules/vscode-languageserver/lib/common/moniker.js
var require_moniker = __commonJS({
  "node_modules/vscode-languageserver/lib/common/moniker.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.MonikerFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var MonikerFeature = (Base) => {
      return class extends Base {
        get moniker() {
          return {
            on: (handler) => {
              const type = vscode_languageserver_protocol_1.MonikerRequest.type;
              return this.connection.onRequest(type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params), this.attachPartialResultProgress(type, params));
              });
            }
          };
        }
      };
    };
    exports2.MonikerFeature = MonikerFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/server.js
var require_server = __commonJS({
  "node_modules/vscode-languageserver/lib/common/server.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.combineFeatures = exports2.combineNotebooksFeatures = exports2.combineLanguagesFeatures = exports2.combineWorkspaceFeatures = exports2.combineWindowFeatures = exports2.combineClientFeatures = exports2.combineTracerFeatures = exports2.combineTelemetryFeatures = exports2.combineConsoleFeatures = exports2._NotebooksImpl = exports2._LanguagesImpl = exports2.BulkUnregistration = exports2.BulkRegistration = exports2.ErrorMessageTracker = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var Is = require_is();
    var UUID = require_uuid();
    var progress_1 = require_progress();
    var configuration_1 = require_configuration();
    var workspaceFolder_1 = require_workspaceFolder();
    var callHierarchy_1 = require_callHierarchy();
    var semanticTokens_1 = require_semanticTokens();
    var showDocument_1 = require_showDocument();
    var fileOperations_1 = require_fileOperations();
    var linkedEditingRange_1 = require_linkedEditingRange();
    var typeHierarchy_1 = require_typeHierarchy();
    var inlineValue_1 = require_inlineValue();
    var foldingRange_1 = require_foldingRange();
    var inlayHint_1 = require_inlayHint();
    var diagnostic_1 = require_diagnostic();
    var notebook_1 = require_notebook();
    var moniker_1 = require_moniker();
    function null2Undefined(value) {
      if (value === null) {
        return void 0;
      }
      return value;
    }
    var ErrorMessageTracker = class {
      constructor() {
        this._messages = /* @__PURE__ */ Object.create(null);
      }
      /**
       * Add a message to the tracker.
       *
       * @param message The message to add.
       */
      add(message) {
        let count = this._messages[message];
        if (!count) {
          count = 0;
        }
        count++;
        this._messages[message] = count;
      }
      /**
       * Send all tracked messages to the connection's window.
       *
       * @param connection The connection established between client and server.
       */
      sendErrors(connection2) {
        Object.keys(this._messages).forEach((message) => {
          connection2.window.showErrorMessage(message);
        });
      }
    };
    exports2.ErrorMessageTracker = ErrorMessageTracker;
    var RemoteConsoleImpl = class {
      constructor() {
      }
      rawAttach(connection2) {
        this._rawConnection = connection2;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      fillServerCapabilities(_capabilities) {
      }
      initialize(_capabilities) {
      }
      error(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Error, message);
      }
      warn(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Warning, message);
      }
      info(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Info, message);
      }
      log(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Log, message);
      }
      debug(message) {
        this.send(vscode_languageserver_protocol_1.MessageType.Debug, message);
      }
      send(type, message) {
        if (this._rawConnection) {
          this._rawConnection.sendNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, { type, message }).catch(() => {
            (0, vscode_languageserver_protocol_1.RAL)().console.error(`Sending log message failed`);
          });
        }
      }
    };
    var _RemoteWindowImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      showErrorMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Error, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showWarningMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Warning, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
      showInformationMessage(message, ...actions) {
        let params = { type: vscode_languageserver_protocol_1.MessageType.Info, message, actions };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, params).then(null2Undefined);
      }
    };
    var RemoteWindowImpl = (0, showDocument_1.ShowDocumentFeature)((0, progress_1.ProgressFeature)(_RemoteWindowImpl));
    var BulkRegistration;
    (function(BulkRegistration2) {
      function create() {
        return new BulkRegistrationImpl();
      }
      BulkRegistration2.create = create;
    })(BulkRegistration || (exports2.BulkRegistration = BulkRegistration = {}));
    var BulkRegistrationImpl = class {
      constructor() {
        this._registrations = [];
        this._registered = /* @__PURE__ */ new Set();
      }
      add(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        if (this._registered.has(method)) {
          throw new Error(`${method} is already added to this registration`);
        }
        const id = UUID.generateUuid();
        this._registrations.push({
          id,
          method,
          registerOptions: registerOptions || {}
        });
        this._registered.add(method);
      }
      asRegistrationParams() {
        return {
          registrations: this._registrations
        };
      }
    };
    var BulkUnregistration;
    (function(BulkUnregistration2) {
      function create() {
        return new BulkUnregistrationImpl(void 0, []);
      }
      BulkUnregistration2.create = create;
    })(BulkUnregistration || (exports2.BulkUnregistration = BulkUnregistration = {}));
    var BulkUnregistrationImpl = class {
      constructor(_connection, unregistrations) {
        this._connection = _connection;
        this._unregistrations = /* @__PURE__ */ new Map();
        unregistrations.forEach((unregistration) => {
          this._unregistrations.set(unregistration.method, unregistration);
        });
      }
      get isAttached() {
        return !!this._connection;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      add(unregistration) {
        this._unregistrations.set(unregistration.method, unregistration);
      }
      dispose() {
        let unregistrations = [];
        for (let unregistration of this._unregistrations.values()) {
          unregistrations.push(unregistration);
        }
        let params = {
          unregisterations: unregistrations
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this._connection.console.info(`Bulk unregistration failed.`);
        });
      }
      disposeSingle(arg) {
        const method = Is.string(arg) ? arg : arg.method;
        const unregistration = this._unregistrations.get(method);
        if (!unregistration) {
          return false;
        }
        let params = {
          unregisterations: [unregistration]
        };
        this._connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).then(() => {
          this._unregistrations.delete(method);
        }, (_error) => {
          this._connection.console.info(`Un-registering request handler for ${unregistration.id} failed.`);
        });
        return true;
      }
    };
    var RemoteClientImpl = class {
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      register(typeOrRegistrations, registerOptionsOrType, registerOptions) {
        if (typeOrRegistrations instanceof BulkRegistrationImpl) {
          return this.registerMany(typeOrRegistrations);
        } else if (typeOrRegistrations instanceof BulkUnregistrationImpl) {
          return this.registerSingle1(typeOrRegistrations, registerOptionsOrType, registerOptions);
        } else {
          return this.registerSingle2(typeOrRegistrations, registerOptionsOrType);
        }
      }
      registerSingle1(unregistration, type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        if (!unregistration.isAttached) {
          unregistration.attach(this.connection);
        }
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          unregistration.add({ id, method });
          return unregistration;
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      registerSingle2(type, registerOptions) {
        const method = Is.string(type) ? type : type.method;
        const id = UUID.generateUuid();
        let params = {
          registrations: [{ id, method, registerOptions: registerOptions || {} }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then((_result) => {
          return vscode_languageserver_protocol_1.Disposable.create(() => {
            this.unregisterSingle(id, method).catch(() => {
              this.connection.console.info(`Un-registering capability with id ${id} failed.`);
            });
          });
        }, (_error) => {
          this.connection.console.info(`Registering request handler for ${method} failed.`);
          return Promise.reject(_error);
        });
      }
      unregisterSingle(id, method) {
        let params = {
          unregisterations: [{ id, method }]
        };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params).catch(() => {
          this.connection.console.info(`Un-registering request handler for ${id} failed.`);
        });
      }
      registerMany(registrations) {
        let params = registrations.asRegistrationParams();
        return this.connection.sendRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params).then(() => {
          return new BulkUnregistrationImpl(this._connection, params.registrations.map((registration) => {
            return { id: registration.id, method: registration.method };
          }));
        }, (_error) => {
          this.connection.console.info(`Bulk registration failed.`);
          return Promise.reject(_error);
        });
      }
    };
    var _RemoteWorkspaceImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      applyEdit(paramOrEdit) {
        function isApplyWorkspaceEditParams(value) {
          return value && !!value.edit;
        }
        let params = isApplyWorkspaceEditParams(paramOrEdit) ? paramOrEdit : { edit: paramOrEdit };
        return this.connection.sendRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params);
      }
    };
    var RemoteWorkspaceImpl = (0, fileOperations_1.FileOperationsFeature)((0, workspaceFolder_1.WorkspaceFoldersFeature)((0, configuration_1.ConfigurationFeature)(_RemoteWorkspaceImpl)));
    var TracerImpl = class {
      constructor() {
        this._trace = vscode_languageserver_protocol_1.Trace.Off;
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      set trace(value) {
        this._trace = value;
      }
      log(message, verbose) {
        if (this._trace === vscode_languageserver_protocol_1.Trace.Off) {
          return;
        }
        this.connection.sendNotification(vscode_languageserver_protocol_1.LogTraceNotification.type, {
          message,
          verbose: this._trace === vscode_languageserver_protocol_1.Trace.Verbose ? verbose : void 0
        }).catch(() => {
        });
      }
    };
    var TelemetryImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      logEvent(data) {
        this.connection.sendNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, data).catch(() => {
          this.connection.console.log(`Sending TelemetryEventNotification failed`);
        });
      }
    };
    var _LanguagesImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._LanguagesImpl = _LanguagesImpl;
    var LanguagesImpl = (0, foldingRange_1.FoldingRangeFeature)((0, moniker_1.MonikerFeature)((0, diagnostic_1.DiagnosticFeature)((0, inlayHint_1.InlayHintFeature)((0, inlineValue_1.InlineValueFeature)((0, typeHierarchy_1.TypeHierarchyFeature)((0, linkedEditingRange_1.LinkedEditingRangeFeature)((0, semanticTokens_1.SemanticTokensFeature)((0, callHierarchy_1.CallHierarchyFeature)(_LanguagesImpl)))))))));
    var _NotebooksImpl = class {
      constructor() {
      }
      attach(connection2) {
        this._connection = connection2;
      }
      get connection() {
        if (!this._connection) {
          throw new Error("Remote is not attached to a connection yet.");
        }
        return this._connection;
      }
      initialize(_capabilities) {
      }
      fillServerCapabilities(_capabilities) {
      }
      attachWorkDoneProgress(params) {
        return (0, progress_1.attachWorkDone)(this.connection, params);
      }
      attachPartialResultProgress(_type, params) {
        return (0, progress_1.attachPartialResult)(this.connection, params);
      }
    };
    exports2._NotebooksImpl = _NotebooksImpl;
    var NotebooksImpl = (0, notebook_1.NotebookSyncFeature)(_NotebooksImpl);
    function combineConsoleFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineConsoleFeatures = combineConsoleFeatures;
    function combineTelemetryFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTelemetryFeatures = combineTelemetryFeatures;
    function combineTracerFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineTracerFeatures = combineTracerFeatures;
    function combineClientFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineClientFeatures = combineClientFeatures;
    function combineWindowFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWindowFeatures = combineWindowFeatures;
    function combineWorkspaceFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineWorkspaceFeatures = combineWorkspaceFeatures;
    function combineLanguagesFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineLanguagesFeatures = combineLanguagesFeatures;
    function combineNotebooksFeatures(one, two) {
      return function(Base) {
        return two(one(Base));
      };
    }
    exports2.combineNotebooksFeatures = combineNotebooksFeatures;
    function combineFeatures(one, two) {
      function combine(one2, two2, func) {
        if (one2 && two2) {
          return func(one2, two2);
        } else if (one2) {
          return one2;
        } else {
          return two2;
        }
      }
      let result = {
        __brand: "features",
        console: combine(one.console, two.console, combineConsoleFeatures),
        tracer: combine(one.tracer, two.tracer, combineTracerFeatures),
        telemetry: combine(one.telemetry, two.telemetry, combineTelemetryFeatures),
        client: combine(one.client, two.client, combineClientFeatures),
        window: combine(one.window, two.window, combineWindowFeatures),
        workspace: combine(one.workspace, two.workspace, combineWorkspaceFeatures),
        languages: combine(one.languages, two.languages, combineLanguagesFeatures),
        notebooks: combine(one.notebooks, two.notebooks, combineNotebooksFeatures)
      };
      return result;
    }
    exports2.combineFeatures = combineFeatures;
    function createConnection2(connectionFactory, watchDog, factories) {
      const logger = factories && factories.console ? new (factories.console(RemoteConsoleImpl))() : new RemoteConsoleImpl();
      const connection2 = connectionFactory(logger);
      logger.rawAttach(connection2);
      const tracer = factories && factories.tracer ? new (factories.tracer(TracerImpl))() : new TracerImpl();
      const telemetry = factories && factories.telemetry ? new (factories.telemetry(TelemetryImpl))() : new TelemetryImpl();
      const client = factories && factories.client ? new (factories.client(RemoteClientImpl))() : new RemoteClientImpl();
      const remoteWindow = factories && factories.window ? new (factories.window(RemoteWindowImpl))() : new RemoteWindowImpl();
      const workspace = factories && factories.workspace ? new (factories.workspace(RemoteWorkspaceImpl))() : new RemoteWorkspaceImpl();
      const languages = factories && factories.languages ? new (factories.languages(LanguagesImpl))() : new LanguagesImpl();
      const notebooks = factories && factories.notebooks ? new (factories.notebooks(NotebooksImpl))() : new NotebooksImpl();
      const allRemotes = [logger, tracer, telemetry, client, remoteWindow, workspace, languages, notebooks];
      function asPromise(value) {
        if (value instanceof Promise) {
          return value;
        } else if (Is.thenable(value)) {
          return new Promise((resolve2, reject) => {
            value.then((resolved) => resolve2(resolved), (error) => reject(error));
          });
        } else {
          return Promise.resolve(value);
        }
      }
      let shutdownHandler = void 0;
      let initializeHandler = void 0;
      let exitHandler = void 0;
      let protocolConnection = {
        listen: () => connection2.listen(),
        sendRequest: (type, ...params) => connection2.sendRequest(Is.string(type) ? type : type.method, ...params),
        onRequest: (type, handler) => connection2.onRequest(type, handler),
        sendNotification: (type, param) => {
          const method = Is.string(type) ? type : type.method;
          return connection2.sendNotification(method, param);
        },
        onNotification: (type, handler) => connection2.onNotification(type, handler),
        onProgress: connection2.onProgress,
        sendProgress: connection2.sendProgress,
        onInitialize: (handler) => {
          initializeHandler = handler;
          return {
            dispose: () => {
              initializeHandler = void 0;
            }
          };
        },
        onInitialized: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.InitializedNotification.type, handler),
        onShutdown: (handler) => {
          shutdownHandler = handler;
          return {
            dispose: () => {
              shutdownHandler = void 0;
            }
          };
        },
        onExit: (handler) => {
          exitHandler = handler;
          return {
            dispose: () => {
              exitHandler = void 0;
            }
          };
        },
        get console() {
          return logger;
        },
        get telemetry() {
          return telemetry;
        },
        get tracer() {
          return tracer;
        },
        get client() {
          return client;
        },
        get window() {
          return remoteWindow;
        },
        get workspace() {
          return workspace;
        },
        get languages() {
          return languages;
        },
        get notebooks() {
          return notebooks;
        },
        onDidChangeConfiguration: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, handler),
        onDidChangeWatchedFiles: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, handler),
        __textDocumentSync: void 0,
        onDidOpenTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, handler),
        onDidChangeTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, handler),
        onDidCloseTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, handler),
        onWillSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, handler),
        onWillSaveTextDocumentWaitUntil: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, handler),
        onDidSaveTextDocument: (handler) => connection2.onNotification(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, handler),
        sendDiagnostics: (params) => connection2.sendNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params),
        onHover: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.HoverRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onCompletion: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCompletionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, handler),
        onSignatureHelp: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDeclaration: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onTypeDefinition: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onImplementation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onReferences: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentHighlight: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbol: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onWorkspaceSymbolResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, handler),
        onCodeAction: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeActionResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onCodeLens: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onCodeLensResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentRangeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onDocumentOnTypeFormatting: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onRenameRequest: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.RenameRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        onPrepareRename: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentLinks: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onDocumentLinkResolve: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, (params, cancel) => {
          return handler(params, cancel);
        }),
        onDocumentColor: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onColorPresentation: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onFoldingRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onSelectionRanges: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), (0, progress_1.attachPartialResult)(connection2, params));
        }),
        onExecuteCommand: (handler) => connection2.onRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, (params, cancel) => {
          return handler(params, cancel, (0, progress_1.attachWorkDone)(connection2, params), void 0);
        }),
        dispose: () => connection2.dispose()
      };
      for (let remote of allRemotes) {
        remote.attach(protocolConnection);
      }
      connection2.onRequest(vscode_languageserver_protocol_1.InitializeRequest.type, (params) => {
        watchDog.initialize(params);
        if (Is.string(params.trace)) {
          tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.trace);
        }
        for (let remote of allRemotes) {
          remote.initialize(params.capabilities);
        }
        if (initializeHandler) {
          let result = initializeHandler(params, new vscode_languageserver_protocol_1.CancellationTokenSource().token, (0, progress_1.attachWorkDone)(connection2, params), void 0);
          return asPromise(result).then((value) => {
            if (value instanceof vscode_languageserver_protocol_1.ResponseError) {
              return value;
            }
            let result2 = value;
            if (!result2) {
              result2 = { capabilities: {} };
            }
            let capabilities = result2.capabilities;
            if (!capabilities) {
              capabilities = {};
              result2.capabilities = capabilities;
            }
            if (capabilities.textDocumentSync === void 0 || capabilities.textDocumentSync === null) {
              capabilities.textDocumentSync = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            } else if (!Is.number(capabilities.textDocumentSync) && !Is.number(capabilities.textDocumentSync.change)) {
              capabilities.textDocumentSync.change = Is.number(protocolConnection.__textDocumentSync) ? protocolConnection.__textDocumentSync : vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
            }
            for (let remote of allRemotes) {
              remote.fillServerCapabilities(capabilities);
            }
            return result2;
          });
        } else {
          let result = { capabilities: { textDocumentSync: vscode_languageserver_protocol_1.TextDocumentSyncKind.None } };
          for (let remote of allRemotes) {
            remote.fillServerCapabilities(result.capabilities);
          }
          return result;
        }
      });
      connection2.onRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, () => {
        watchDog.shutdownReceived = true;
        if (shutdownHandler) {
          return shutdownHandler(new vscode_languageserver_protocol_1.CancellationTokenSource().token);
        } else {
          return void 0;
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.ExitNotification.type, () => {
        try {
          if (exitHandler) {
            exitHandler();
          }
        } finally {
          if (watchDog.shutdownReceived) {
            watchDog.exit(0);
          } else {
            watchDog.exit(1);
          }
        }
      });
      connection2.onNotification(vscode_languageserver_protocol_1.SetTraceNotification.type, (params) => {
        tracer.trace = vscode_languageserver_protocol_1.Trace.fromString(params.value);
      });
      return protocolConnection;
    }
    exports2.createConnection = createConnection2;
  }
});

// node_modules/vscode-languageserver/lib/node/files.js
var require_files = __commonJS({
  "node_modules/vscode-languageserver/lib/node/files.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.resolveModulePath = exports2.FileSystem = exports2.resolveGlobalYarnPath = exports2.resolveGlobalNodePath = exports2.resolve = exports2.uriToFilePath = void 0;
    var url = require("url");
    var path2 = require("path");
    var fs2 = require("fs");
    var child_process_1 = require("child_process");
    function uriToFilePath(uri) {
      let parsed = url.parse(uri);
      if (parsed.protocol !== "file:" || !parsed.path) {
        return void 0;
      }
      let segments = parsed.path.split("/");
      for (var i = 0, len = segments.length; i < len; i++) {
        segments[i] = decodeURIComponent(segments[i]);
      }
      if (process.platform === "win32" && segments.length > 1) {
        let first = segments[0];
        let second = segments[1];
        if (first.length === 0 && second.length > 1 && second[1] === ":") {
          segments.shift();
        }
      }
      return path2.normalize(segments.join("/"));
    }
    exports2.uriToFilePath = uriToFilePath;
    function isWindows() {
      return process.platform === "win32";
    }
    function resolve2(moduleName, nodePath, cwd, tracer) {
      const nodePathKey = "NODE_PATH";
      const app = [
        "var p = process;",
        "p.on('message',function(m){",
        "if(m.c==='e'){",
        "p.exit(0);",
        "}",
        "else if(m.c==='rs'){",
        "try{",
        "var r=require.resolve(m.a);",
        "p.send({c:'r',s:true,r:r});",
        "}",
        "catch(err){",
        "p.send({c:'r',s:false});",
        "}",
        "}",
        "});"
      ].join("");
      return new Promise((resolve3, reject) => {
        let env = process.env;
        let newEnv = /* @__PURE__ */ Object.create(null);
        Object.keys(env).forEach((key) => newEnv[key] = env[key]);
        if (nodePath && fs2.existsSync(nodePath)) {
          if (newEnv[nodePathKey]) {
            newEnv[nodePathKey] = nodePath + path2.delimiter + newEnv[nodePathKey];
          } else {
            newEnv[nodePathKey] = nodePath;
          }
          if (tracer) {
            tracer(`NODE_PATH value is: ${newEnv[nodePathKey]}`);
          }
        }
        newEnv["ELECTRON_RUN_AS_NODE"] = "1";
        try {
          let cp = (0, child_process_1.fork)("", [], {
            cwd,
            env: newEnv,
            execArgv: ["-e", app]
          });
          if (cp.pid === void 0) {
            reject(new Error(`Starting process to resolve node module  ${moduleName} failed`));
            return;
          }
          cp.on("error", (error) => {
            reject(error);
          });
          cp.on("message", (message2) => {
            if (message2.c === "r") {
              cp.send({ c: "e" });
              if (message2.s) {
                resolve3(message2.r);
              } else {
                reject(new Error(`Failed to resolve module: ${moduleName}`));
              }
            }
          });
          let message = {
            c: "rs",
            a: moduleName
          };
          cp.send(message);
        } catch (error) {
          reject(error);
        }
      });
    }
    exports2.resolve = resolve2;
    function resolveGlobalNodePath(tracer) {
      let npmCommand = "npm";
      const env = /* @__PURE__ */ Object.create(null);
      Object.keys(process.env).forEach((key) => env[key] = process.env[key]);
      env["NO_UPDATE_NOTIFIER"] = "true";
      const options = {
        encoding: "utf8",
        env
      };
      if (isWindows()) {
        npmCommand = "npm.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let stdout = (0, child_process_1.spawnSync)(npmCommand, ["config", "get", "prefix"], options).stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'npm config get prefix' didn't return a value.`);
          }
          return void 0;
        }
        let prefix = stdout.trim();
        if (tracer) {
          tracer(`'npm config get prefix' value is: ${prefix}`);
        }
        if (prefix.length > 0) {
          if (isWindows()) {
            return path2.join(prefix, "node_modules");
          } else {
            return path2.join(prefix, "lib", "node_modules");
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalNodePath = resolveGlobalNodePath;
    function resolveGlobalYarnPath(tracer) {
      let yarnCommand = "yarn";
      let options = {
        encoding: "utf8"
      };
      if (isWindows()) {
        yarnCommand = "yarn.cmd";
        options.shell = true;
      }
      let handler = () => {
      };
      try {
        process.on("SIGPIPE", handler);
        let results = (0, child_process_1.spawnSync)(yarnCommand, ["global", "dir", "--json"], options);
        let stdout = results.stdout;
        if (!stdout) {
          if (tracer) {
            tracer(`'yarn global dir' didn't return a value.`);
            if (results.stderr) {
              tracer(results.stderr);
            }
          }
          return void 0;
        }
        let lines = stdout.trim().split(/\r?\n/);
        for (let line of lines) {
          try {
            let yarn = JSON.parse(line);
            if (yarn.type === "log") {
              return path2.join(yarn.data, "node_modules");
            }
          } catch (e) {
          }
        }
        return void 0;
      } catch (err) {
        return void 0;
      } finally {
        process.removeListener("SIGPIPE", handler);
      }
    }
    exports2.resolveGlobalYarnPath = resolveGlobalYarnPath;
    var FileSystem;
    (function(FileSystem2) {
      let _isCaseSensitive = void 0;
      function isCaseSensitive() {
        if (_isCaseSensitive !== void 0) {
          return _isCaseSensitive;
        }
        if (process.platform === "win32") {
          _isCaseSensitive = false;
        } else {
          _isCaseSensitive = !fs2.existsSync(__filename.toUpperCase()) || !fs2.existsSync(__filename.toLowerCase());
        }
        return _isCaseSensitive;
      }
      FileSystem2.isCaseSensitive = isCaseSensitive;
      function isParent(parent, child) {
        if (isCaseSensitive()) {
          return path2.normalize(child).indexOf(path2.normalize(parent)) === 0;
        } else {
          return path2.normalize(child).toLowerCase().indexOf(path2.normalize(parent).toLowerCase()) === 0;
        }
      }
      FileSystem2.isParent = isParent;
    })(FileSystem || (exports2.FileSystem = FileSystem = {}));
    function resolveModulePath(workspaceRoot, moduleName, nodePath, tracer) {
      if (nodePath) {
        if (!path2.isAbsolute(nodePath)) {
          nodePath = path2.join(workspaceRoot, nodePath);
        }
        return resolve2(moduleName, nodePath, nodePath, tracer).then((value) => {
          if (FileSystem.isParent(nodePath, value)) {
            return value;
          } else {
            return Promise.reject(new Error(`Failed to load ${moduleName} from node path location.`));
          }
        }).then(void 0, (_error) => {
          return resolve2(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
        });
      } else {
        return resolve2(moduleName, resolveGlobalNodePath(tracer), workspaceRoot, tracer);
      }
    }
    exports2.resolveModulePath = resolveModulePath;
  }
});

// node_modules/vscode-languageserver-protocol/node.js
var require_node2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main3();
  }
});

// node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js
var require_inlineCompletion_proposed = __commonJS({
  "node_modules/vscode-languageserver/lib/common/inlineCompletion.proposed.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InlineCompletionFeature = void 0;
    var vscode_languageserver_protocol_1 = require_main3();
    var InlineCompletionFeature = (Base) => {
      return class extends Base {
        get inlineCompletion() {
          return {
            on: (handler) => {
              return this.connection.onRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, (params, cancel) => {
                return handler(params, cancel, this.attachWorkDoneProgress(params));
              });
            }
          };
        }
      };
    };
    exports2.InlineCompletionFeature = InlineCompletionFeature;
  }
});

// node_modules/vscode-languageserver/lib/common/api.js
var require_api3 = __commonJS({
  "node_modules/vscode-languageserver/lib/common/api.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ProposedFeatures = exports2.NotebookDocuments = exports2.TextDocuments = exports2.SemanticTokensBuilder = void 0;
    var semanticTokens_1 = require_semanticTokens();
    Object.defineProperty(exports2, "SemanticTokensBuilder", { enumerable: true, get: function() {
      return semanticTokens_1.SemanticTokensBuilder;
    } });
    var ic = require_inlineCompletion_proposed();
    __exportStar(require_main3(), exports2);
    var textDocuments_1 = require_textDocuments();
    Object.defineProperty(exports2, "TextDocuments", { enumerable: true, get: function() {
      return textDocuments_1.TextDocuments;
    } });
    var notebook_1 = require_notebook();
    Object.defineProperty(exports2, "NotebookDocuments", { enumerable: true, get: function() {
      return notebook_1.NotebookDocuments;
    } });
    __exportStar(require_server(), exports2);
    var ProposedFeatures2;
    (function(ProposedFeatures3) {
      ProposedFeatures3.all = {
        __brand: "features",
        languages: ic.InlineCompletionFeature
      };
    })(ProposedFeatures2 || (exports2.ProposedFeatures = ProposedFeatures2 = {}));
  }
});

// node_modules/vscode-languageserver/lib/node/main.js
var require_main4 = __commonJS({
  "node_modules/vscode-languageserver/lib/node/main.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createConnection = exports2.Files = void 0;
    var node_util_1 = require("node:util");
    var Is = require_is();
    var server_1 = require_server();
    var fm = require_files();
    var node_1 = require_node2();
    __exportStar(require_node2(), exports2);
    __exportStar(require_api3(), exports2);
    var Files;
    (function(Files2) {
      Files2.uriToFilePath = fm.uriToFilePath;
      Files2.resolveGlobalNodePath = fm.resolveGlobalNodePath;
      Files2.resolveGlobalYarnPath = fm.resolveGlobalYarnPath;
      Files2.resolve = fm.resolve;
      Files2.resolveModulePath = fm.resolveModulePath;
    })(Files || (exports2.Files = Files = {}));
    var _protocolConnection;
    function endProtocolConnection() {
      if (_protocolConnection === void 0) {
        return;
      }
      try {
        _protocolConnection.end();
      } catch (_err) {
      }
    }
    var _shutdownReceived = false;
    var exitTimer = void 0;
    function setupExitTimer() {
      const argName = "--clientProcessId";
      function runTimer(value) {
        try {
          let processId = parseInt(value);
          if (!isNaN(processId)) {
            exitTimer = setInterval(() => {
              try {
                process.kill(processId, 0);
              } catch (ex) {
                endProtocolConnection();
                process.exit(_shutdownReceived ? 0 : 1);
              }
            }, 3e3);
          }
        } catch (e) {
        }
      }
      for (let i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i];
        if (arg === argName && i + 1 < process.argv.length) {
          runTimer(process.argv[i + 1]);
          return;
        } else {
          let args = arg.split("=");
          if (args[0] === argName) {
            runTimer(args[1]);
          }
        }
      }
    }
    setupExitTimer();
    var watchDog = {
      initialize: (params) => {
        const processId = params.processId;
        if (Is.number(processId) && exitTimer === void 0) {
          setInterval(() => {
            try {
              process.kill(processId, 0);
            } catch (ex) {
              process.exit(_shutdownReceived ? 0 : 1);
            }
          }, 3e3);
        }
      },
      get shutdownReceived() {
        return _shutdownReceived;
      },
      set shutdownReceived(value) {
        _shutdownReceived = value;
      },
      exit: (code) => {
        endProtocolConnection();
        process.exit(code);
      }
    };
    function createConnection2(arg1, arg2, arg3, arg4) {
      let factories;
      let input;
      let output;
      let options;
      if (arg1 !== void 0 && arg1.__brand === "features") {
        factories = arg1;
        arg1 = arg2;
        arg2 = arg3;
        arg3 = arg4;
      }
      if (node_1.ConnectionStrategy.is(arg1) || node_1.ConnectionOptions.is(arg1)) {
        options = arg1;
      } else {
        input = arg1;
        output = arg2;
        options = arg3;
      }
      return _createConnection(input, output, options, factories);
    }
    exports2.createConnection = createConnection2;
    function _createConnection(input, output, options, factories) {
      let stdio = false;
      if (!input && !output && process.argv.length > 2) {
        let port = void 0;
        let pipeName = void 0;
        let argv = process.argv.slice(2);
        for (let i = 0; i < argv.length; i++) {
          let arg = argv[i];
          if (arg === "--node-ipc") {
            input = new node_1.IPCMessageReader(process);
            output = new node_1.IPCMessageWriter(process);
            break;
          } else if (arg === "--stdio") {
            stdio = true;
            input = process.stdin;
            output = process.stdout;
            break;
          } else if (arg === "--socket") {
            port = parseInt(argv[i + 1]);
            break;
          } else if (arg === "--pipe") {
            pipeName = argv[i + 1];
            break;
          } else {
            var args = arg.split("=");
            if (args[0] === "--socket") {
              port = parseInt(args[1]);
              break;
            } else if (args[0] === "--pipe") {
              pipeName = args[1];
              break;
            }
          }
        }
        if (port) {
          let transport = (0, node_1.createServerSocketTransport)(port);
          input = transport[0];
          output = transport[1];
        } else if (pipeName) {
          let transport = (0, node_1.createServerPipeTransport)(pipeName);
          input = transport[0];
          output = transport[1];
        }
      }
      var commandLineMessage = "Use arguments of createConnection or set command line parameters: '--node-ipc', '--stdio' or '--socket={number}'";
      if (!input) {
        throw new Error("Connection input stream is not set. " + commandLineMessage);
      }
      if (!output) {
        throw new Error("Connection output stream is not set. " + commandLineMessage);
      }
      if (Is.func(input.read) && Is.func(input.on)) {
        let inputStream = input;
        inputStream.on("end", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
        inputStream.on("close", () => {
          endProtocolConnection();
          process.exit(_shutdownReceived ? 0 : 1);
        });
      }
      const connectionFactory = (logger) => {
        const result = (0, node_1.createProtocolConnection)(input, output, logger, options);
        if (stdio) {
          patchConsole(logger);
        }
        return result;
      };
      return (0, server_1.createConnection)(connectionFactory, watchDog, factories);
    }
    function patchConsole(logger) {
      function serialize(args) {
        return args.map((arg) => typeof arg === "string" ? arg : (0, node_util_1.inspect)(arg)).join(" ");
      }
      const counters = /* @__PURE__ */ new Map();
      console.assert = function assert(assertion, ...args) {
        if (assertion) {
          return;
        }
        if (args.length === 0) {
          logger.error("Assertion failed");
        } else {
          const [message, ...rest] = args;
          logger.error(`Assertion failed: ${message} ${serialize(rest)}`);
        }
      };
      console.count = function count(label = "default") {
        const message = String(label);
        let counter = counters.get(message) ?? 0;
        counter += 1;
        counters.set(message, counter);
        logger.log(`${message}: ${message}`);
      };
      console.countReset = function countReset(label) {
        if (label === void 0) {
          counters.clear();
        } else {
          counters.delete(String(label));
        }
      };
      console.debug = function debug(...args) {
        logger.log(serialize(args));
      };
      console.dir = function dir(arg, options) {
        logger.log((0, node_util_1.inspect)(arg, options));
      };
      console.log = function log(...args) {
        logger.log(serialize(args));
      };
      console.error = function error(...args) {
        logger.error(serialize(args));
      };
      console.trace = function trace(...args) {
        const stack = new Error().stack.replace(/(.+\n){2}/, "");
        let message = "Trace";
        if (args.length !== 0) {
          message += `: ${serialize(args)}`;
        }
        logger.log(`${message}
${stack}`);
      };
      console.warn = function warn(...args) {
        logger.warn(serialize(args));
      };
    }
  }
});

// node_modules/vscode-languageserver/node.js
var require_node3 = __commonJS({
  "node_modules/vscode-languageserver/node.js"(exports2, module2) {
    "use strict";
    module2.exports = require_main4();
  }
});

// src/server.ts
var import_node = __toESM(require_node3());

// node_modules/vscode-languageserver-textdocument/lib/esm/main.js
var FullTextDocument = class _FullTextDocument {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      const start = this.offsetAt(range.start);
      const end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(changes, version) {
    for (const change of changes) {
      if (_FullTextDocument.isIncremental(change)) {
        const range = getWellformedRange(change.range);
        const startOffset = this.offsetAt(range.start);
        const endOffset = this.offsetAt(range.end);
        this._content = this._content.substring(0, startOffset) + change.text + this._content.substring(endOffset, this._content.length);
        const startLine = Math.max(range.start.line, 0);
        const endLine = Math.max(range.end.line, 0);
        let lineOffsets = this._lineOffsets;
        const addedLineOffsets = computeLineOffsets(change.text, false, startOffset);
        if (endLine - startLine === addedLineOffsets.length) {
          for (let i = 0, len = addedLineOffsets.length; i < len; i++) {
            lineOffsets[i + startLine + 1] = addedLineOffsets[i];
          }
        } else {
          if (addedLineOffsets.length < 1e4) {
            lineOffsets.splice(startLine + 1, endLine - startLine, ...addedLineOffsets);
          } else {
            this._lineOffsets = lineOffsets = lineOffsets.slice(0, startLine + 1).concat(addedLineOffsets, lineOffsets.slice(endLine + 1));
          }
        }
        const diff = change.text.length - (endOffset - startOffset);
        if (diff !== 0) {
          for (let i = startLine + 1 + addedLineOffsets.length, len = lineOffsets.length; i < len; i++) {
            lineOffsets[i] = lineOffsets[i] + diff;
          }
        }
      } else if (_FullTextDocument.isFull(change)) {
        this._content = change.text;
        this._lineOffsets = void 0;
      } else {
        throw new Error("Unknown change event received");
      }
    }
    this._version = version;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      this._lineOffsets = computeLineOffsets(this._content, true);
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    const lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return { line: 0, character: offset };
    }
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    const line = low - 1;
    offset = this.ensureBeforeEOL(offset, lineOffsets[line]);
    return { line, character: offset - lineOffsets[line] };
  }
  offsetAt(position) {
    const lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    const lineOffset = lineOffsets[position.line];
    if (position.character <= 0) {
      return lineOffset;
    }
    const nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    const offset = Math.min(lineOffset + position.character, nextLineOffset);
    return this.ensureBeforeEOL(offset, lineOffset);
  }
  ensureBeforeEOL(offset, lineOffset) {
    while (offset > lineOffset && isEOL(this._content.charCodeAt(offset - 1))) {
      offset--;
    }
    return offset;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
  }
  static isFull(event) {
    const candidate = event;
    return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
  }
};
var TextDocument;
(function(TextDocument2) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument2.create = create;
  function update(document, changes, version) {
    if (document instanceof FullTextDocument) {
      document.update(changes, version);
      return document;
    } else {
      throw new Error("TextDocument.update: document must be created by TextDocument.create");
    }
  }
  TextDocument2.update = update;
  function applyEdits(document, edits) {
    const text = document.getText();
    const sortedEdits = mergeSort(edits.map(getWellformedEdit), (a, b) => {
      const diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = 0;
    const spans = [];
    for (const e of sortedEdits) {
      const startOffset = document.offsetAt(e.range.start);
      if (startOffset < lastModifiedOffset) {
        throw new Error("Overlapping edit");
      } else if (startOffset > lastModifiedOffset) {
        spans.push(text.substring(lastModifiedOffset, startOffset));
      }
      if (e.newText.length) {
        spans.push(e.newText);
      }
      lastModifiedOffset = document.offsetAt(e.range.end);
    }
    spans.push(text.substr(lastModifiedOffset));
    return spans.join("");
  }
  TextDocument2.applyEdits = applyEdits;
})(TextDocument || (TextDocument = {}));
function mergeSort(data, compare) {
  if (data.length <= 1) {
    return data;
  }
  const p = data.length / 2 | 0;
  const left = data.slice(0, p);
  const right = data.slice(p);
  mergeSort(left, compare);
  mergeSort(right, compare);
  let leftIdx = 0;
  let rightIdx = 0;
  let i = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    const ret = compare(left[leftIdx], right[rightIdx]);
    if (ret <= 0) {
      data[i++] = left[leftIdx++];
    } else {
      data[i++] = right[rightIdx++];
    }
  }
  while (leftIdx < left.length) {
    data[i++] = left[leftIdx++];
  }
  while (rightIdx < right.length) {
    data[i++] = right[rightIdx++];
  }
  return data;
}
function computeLineOffsets(text, isAtLineStart, textOffset = 0) {
  const result = isAtLineStart ? [textOffset] : [];
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    if (isEOL(ch)) {
      if (ch === 13 && i + 1 < text.length && text.charCodeAt(i + 1) === 10) {
        i++;
      }
      result.push(textOffset + i + 1);
    }
  }
  return result;
}
function isEOL(char) {
  return char === 13 || char === 10;
}
function getWellformedRange(range) {
  const start = range.start;
  const end = range.end;
  if (start.line > end.line || start.line === end.line && start.character > end.character) {
    return { start: end, end: start };
  }
  return range;
}
function getWellformedEdit(textEdit) {
  const range = getWellformedRange(textEdit.range);
  if (range !== textEdit.range) {
    return { newText: textEdit.newText, range };
  }
  return textEdit;
}

// src/tagDatabase.ts
var TAG_DATABASE = /* @__PURE__ */ new Map([
  [`3d_add_group`, {
    name: `3d_add_group`,
    description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30B0\u30EB\u30FC\u30D7\u306B\u8FFD\u52A0\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u8FFD\u52A0\u3059\u308B3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `new_name`, required: false, description: `\u3053\u3053\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001name\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30B3\u30D4\u30FC\u3057\u3066\u65B0\u3057\u3044\u540D\u524D\u3067\u767B\u9332\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_add_group name="" new_name="" cond=""]`
  }],
  [`3d_anim`, {
    name: `3d_anim`,
    description: `\u30B7\u30FC\u30F3\u4E0A\u306E3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u306E3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u307E\u3059\u3002\u30AB\u30E1\u30E9\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u5834\u5408\u306F\u300Ccamera\u300D\u3068\u3044\u3046\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pos`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5F8C\u30013D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5F8C\u30013D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5F8C\u30013D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u304B\u3051\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1000\u3067\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u5426\u304B\u3002true or false \u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3067\u3059\u3002` },
      { name: `relative`, required: false, description: `true or false \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002true\u306B\u3059\u308B\u3068\u76F8\u5BFE\u5EA7\u6A19\u6307\u5B9A\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30EB\u30FC\u30D7\u56DE\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u6C38\u4E45\u306B\u30EB\u30FC\u30D7\u3057\u307E\u3059\u3002` },
      { name: `direction`, required: false, description: `\u300Calternate\u300D\u300Cinifinite\u300D\u300Creverse\u300D \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u300Calternate\u300D\u30EB\u30FC\u30D7\u306E\u4ED5\u65B9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `lookat`, required: false, description: `camera\u306E\u3068\u304D\u3060\u3051\u6709\u52B9\u3002\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u304Bpos\u5EA7\u6A19\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u30AB\u30E1\u30E9\u3092\u7279\u5B9A\u306E\u65B9\u5411\u306B\u5411\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u5909\u5316\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u6587\u5B57\u5217\u306F\u4EE5\u4E0B\u306E\u7A2E\u985E\u3067\u3059 swing\uFF5Clinear\uFF5CeaseInQuad\uFF5CeaseOutQuad\uFF5CeaseInOutQuad\uFF5CeaseInCubic\uFF5CeaseOutCubic\uFF5CeaseInOutCubic\uFF5CeaseInQuart\uFF5CeaseOutQuart\uFF5CeaseInOutQuart\uFF5CeaseInQuint\uFF5CeaseOutQuint\uFF5CeaseInOutQuint\uFF5CeaseInSine\uFF5CeaseOutSine\uFF5CeaseInOutSine\uFF5CeaseInExpo\uFF5CeaseOutExpo\uFF5CeaseInOutExpo\uFF5CeaseInCirc\uFF5CeaseOutCirc\uFF5CeaseInOutCirc\uFF5CeaseInElastic\uFF5CeaseOutElastic\uFF5CeaseInOutElastic\uFF5CeaseInBack\uFF5CeaseOutBack\uFF5CeaseInOutBack\uFF5CeaseInBounce\uFF5CeaseOutBounce\uFF5CeaseInOutBounce` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_anim name="" pos="" rot="" scale="" time="" wait="" relative="" loop="" direction="" lookat="" effect="" cond=""]`
  }],
  [`3d_anim_stop`, {
    name: `3d_anim_stop`,
    description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u4E2D\u306E3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u505C\u6B62\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3059\u308B3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `finish`, required: false, description: `true or false \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u505C\u6B62\u306E\u4F4D\u7F6E\u3067\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u505C\u6B62\u3057\u307E\u3059\u3002true\u3060\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3059\u308B\u4E88\u5B9A\u306E\u4F4D\u7F6E\u307E\u3067\u79FB\u52D5\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_anim_stop name="" finish="" cond=""]`
  }],
  [`3d_box_new`, {
    name: `3d_box_new`,
    description: `\u7ACB\u65B9\u4F53\u306E3D\u30E2\u30C7\u30EB\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `texture`, required: false, description: `\u8868\u793A\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306F\u300Cothres/3d/texture\u300D\u30D5\u30A9\u30EB\u30C0\u4EE5\u4E0B\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\uFF11\u3064\u306E\u30C6\u30AF\u30B9\u30C1\u30E3\u306E\u5834\u5408\u306F\u3059\u3079\u3066\u306E\u9762\u304C\u540C\u3058\u753B\u50CF\u306B\u306A\u308A\u307E\u3059\u304C\u3001\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066\uFF16\u3064\u6307\u5B9A\u3059\u308B\u3068\u3059\u3079\u3066\u306E\u9762\u306B\u7570\u306A\u308B\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059` },
      { name: `color`, required: false, description: `\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020xRRGGBB \u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1\u3067\u3059` },
      { name: `height`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1\u3067\u3059` },
      { name: `depth`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6DF1\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1\u3067\u3059` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u304C\u6709\u52B9\u306A\u5834\u5408\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F71\u97FF\u3092\u53D7\u3051\u308B\u304B\u5426\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002\u6709\u52B9\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_box_new name="" texture="" color="" width="" height="" depth="" pos="" rot="" scale="" tonemap="" cond=""]`
  }],
  [`3d_camera`, {
    name: `3d_camera`,
    description: `3D\u30B7\u30FC\u30F3\u306E\u30AB\u30E1\u30E9\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002
\u30AB\u30E1\u30E9\u306E\u5EA7\u6A19\u3092\u78BA\u8A8D\u3057\u305F\u3044\u5834\u5408\u306F[camera_debug]\u3092\u3064\u304B\u3063\u3066\u3001\u5EA7\u6A19\u3084\u50BE\u304D\u3092\u30C6\u30B9\u30C8\u3059\u308B\u306E\u304C\u304A\u3059\u3059\u3081\u3067\u3059\u3002`,
    params: [
      { name: `pos`, required: false, description: `\u30AB\u30E1\u30E9\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u30B7\u30FC\u30F3\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u7A2E\u985E\u306FNo/Linear/Reinhard/Uncharted2/Cineon/ACESFilmic\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306FNo\uFF08\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u306A\u3057\uFF09\u3002` },
      { name: `lookat`, required: false, description: `\u30B7\u30FC\u30F3\u4E0A\u306E3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u3001\u305D\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u65B9\u306B\u30AB\u30E1\u30E9\u3092\u5411\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 \u3082\u3057\u304F\u306Fpos\u3092\u76F4\u63A5\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u5EA7\u6A19\u306B\u30AB\u30E1\u30E9\u3092\u5411\u3051\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_camera pos="" rot="" tonemap="" lookat="" cond=""]`
  }],
  [`3d_canvas_hide`, {
    name: `3d_canvas_hide`,
    description: `3D\u30AD\u30E3\u30F3\u30D0\u30B9\u3092\u975E\u8868\u793A\u306B\u3057\u307E\u3059\u3002
3D\u30B7\u30FC\u30F3\u81EA\u4F53\u306F\u7DAD\u6301\u3055\u308C\u307E\u3059\u3002
\u4F8B\u3048\u3070\u30013D\u30B7\u30FC\u30F3\u304B\u3089\u30CE\u30D9\u30EB\u30D1\u30FC\u30C8\u3078\u306E\u79FB\u52D5\u3092\u983B\u7E41\u306B\u3059\u308B\u5834\u5408\u306A\u3069\u306F\u4FBF\u5229\u3067\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_canvas_hide cond=""]`
  }],
  [`3d_canvas_show`, {
    name: `3d_canvas_show`,
    description: `3D\u30AD\u30E3\u30F3\u30D0\u30B9\u3092\u8868\u793A\u306B\u3057\u307E\u3059\u3002
\u4F8B\u3048\u3070\u30013D\u30B7\u30FC\u30F3\u304B\u3089\u30CE\u30D9\u30EB\u30D1\u30FC\u30C8\u3078\u306E\u79FB\u52D5\u3092\u983B\u7E41\u306B\u3059\u308B\u5834\u5408\u306A\u3069\u306F\u4FBF\u5229\u3067\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_canvas_show cond=""]`
  }],
  [`3d_close`, {
    name: `3d_close`,
    description: `3D\u30B7\u30FC\u30F3\u3092\u3059\u3079\u3066\u524A\u9664\u3057\u307E\u3059\u3002
\u3053\u306E\u30BF\u30B0\u3092\u4F7F\u7528\u3059\u308B\u30683D\u7CFB\u306E\u6A5F\u80FD\u306F\u5168\u3066\u4F7F\u3048\u306A\u304F\u306A\u308A\u307E\u3059\u3002
\u3082\u3046\u4E00\u5EA6\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F[3d_init]\u30BF\u30B0\u3092\u901A\u904E\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_close cond=""]`
  }],
  [`3d_cylinder_new`, {
    name: `3d_cylinder_new`,
    description: `\u5186\u67F1\u306E3D\u30E2\u30C7\u30EB\u3092\u5B9A\u7FA9\u3057\u307E\u3059`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `texture`, required: false, description: `\u7403\u4F53\u306B\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u8CBC\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u306F\u300Cothers/3d/texture\u300D\u4EE5\u4E0B\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30B5\u30A4\u30BA\u306F256x256 \u3084 512x512 \u3068\u3044\u3063\u305F\u30B5\u30A4\u30BA\u3092\u63A8\u5968\u3057\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020xRRGGBB \u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `segment`, required: false, description: `\u5186\u306E\u7D30\u304B\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u6570\u5024\u304C\u5897\u3048\u308B\u307B\u3069\u5186\u306B\u8FD1\u304F\u306A\u308A\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F10` },
      { name: `width`, required: false, description: `\u5186\u67F1\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F10` },
      { name: `height`, required: false, description: `\u5186\u67F1\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F20` },
      { name: `side`, required: false, description: `\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u3069\u306E\u9762\u306B\u9069\u7528\u3059\u308B\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002front(\u524D\u9762) back\uFF08\u80CC\u9762\uFF09double\uFF08\u4E21\u9762\uFF09\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffront` },
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u304C\u6709\u52B9\u306A\u5834\u5408\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F71\u97FF\u3092\u53D7\u3051\u308B\u304B\u5426\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002\u7121\u52B9\u306B\u3059\u308B\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_cylinder_new name="" texture="" color="" pos="" rot="" scale="" segment="" width="" height="" side="" tonemap="" cond=""]`
  }],
  [`3d_debug`, {
    name: `3d_debug`,
    description: `3D\u30B7\u30FC\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30DE\u30A6\u30B9\u3067\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u3057\u306A\u304C\u3089\u3001\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30C7\u30D0\u30C3\u30B0\u3092\u7D42\u4E86\u3059\u308B\u5834\u5408\u306F\u753B\u9762\u5DE6\u4E0A\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002
\u30DE\u30A6\u30B9\u64CD\u4F5C
\u5DE6\u30AF\u30EA\u30C3\u30AF\uFF1A\u30AB\u30E1\u30E9\u306E\u5411\u304D(rot)
\u53F3\u30AF\u30EA\u30C3\u30AF\uFF1A\u30AB\u30E1\u30E9\u306E\u4F4D\u7F6E(pos)
\u4E2D\u592E\u30AF\u30EA\u30C3\u30AF\uFF1A\u30DD\u30B8\u30B7\u30E7\u30F3\u306Ez\u8EF8
\u30B9\u30AF\u30ED\u30FC\u30EB\uFF1A\u62E1\u5927\u7E2E\u5C0F\uFF08scale\uFF09`,
    params: [
      { name: `name`, required: true, description: `\u30C7\u30D0\u30C3\u30B0\u3059\u308B3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `button_text`, required: false, description: `\u30C7\u30D0\u30C3\u30B0\u3092\u7D42\u4E86\u3059\u308B\u30DC\u30BF\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u81EA\u7531\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u300C3D\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u3092\u9589\u3058\u308B\u300D` },
      { name: `menu`, required: false, description: `\u30C7\u30D0\u30C3\u30B0\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3059\u308B\u304B\u5426\u304B\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u7D42\u4E86\u3055\u305B\u308B\u30DC\u30BF\u30F3\u306E\u307F\u306B\u306A\u308A\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue(\u8868\u793A)` },
      { name: `overlap`, required: false, description: `true or false\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u6700\u524D\u9762\u306B\u30E2\u30C7\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30E1\u30CB\u30E5\u30FC\u306B\u96A0\u308C\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3053\u3053\u3092true\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Fflase` },
      { name: `reset`, required: false, description: `true or false\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30C7\u30D0\u30C3\u30B0\u304C\u7D42\u308F\u3063\u305F\u5F8C\u3001\u30E2\u30C7\u30EB\u304C\u30C7\u30D0\u30C3\u30B0\u524D\u306E\u4F4D\u7F6E\u306B\u623B\u308A\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_debug name="" button_text="" menu="" overlap="" reset="" cond=""]`
  }],
  [`3d_debug_bk`, {
    name: `3d_debug_bk`,
    description: `3D\u30B7\u30FC\u30F3\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30DE\u30A6\u30B9\u3067\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u3057\u306A\u304C\u3089\u3001\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30C7\u30D0\u30C3\u30B0\u3092\u7D42\u4E86\u3059\u308B\u5834\u5408\u306F\u753B\u9762\u5DE6\u4E0A\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002
\u30DE\u30A6\u30B9\u64CD\u4F5C
\u5DE6\u30AF\u30EA\u30C3\u30AF\uFF1A\u30AB\u30E1\u30E9\u306E\u5411\u304D(rot)
\u53F3\u30AF\u30EA\u30C3\u30AF\uFF1A\u30AB\u30E1\u30E9\u306E\u4F4D\u7F6E(pos)
\u4E2D\u592E\u30AF\u30EA\u30C3\u30AF\uFF1A\u30DD\u30B8\u30B7\u30E7\u30F3\u306Ez\u8EF8
\u30B9\u30AF\u30ED\u30FC\u30EB\uFF1A\u62E1\u5927\u7E2E\u5C0F\uFF08scale\uFF09`,
    params: [
      { name: `name`, required: true, description: `\u30C7\u30D0\u30C3\u30B0\u3059\u308B3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `button_text`, required: false, description: `\u30C7\u30D0\u30C3\u30B0\u3092\u7D42\u4E86\u3059\u308B\u30DC\u30BF\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u81EA\u7531\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u300C3D\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u3092\u9589\u3058\u308B\u300D` },
      { name: `menu`, required: false, description: `\u30C7\u30D0\u30C3\u30B0\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3059\u308B\u304B\u5426\u304B\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u7D42\u4E86\u3055\u305B\u308B\u30DC\u30BF\u30F3\u306E\u307F\u306B\u306A\u308A\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue(\u8868\u793A)` },
      { name: `overlap`, required: false, description: `true or false\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u6700\u524D\u9762\u306B\u30E2\u30C7\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u30E1\u30CB\u30E5\u30FC\u306B\u96A0\u308C\u305F\u304F\u306A\u3044\u5834\u5408\u306F\u3053\u3053\u3092true\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Fflase` },
      { name: `reset`, required: false, description: `true or false\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30C7\u30D0\u30C3\u30B0\u304C\u7D42\u308F\u3063\u305F\u5F8C\u3001\u30E2\u30C7\u30EB\u304C\u30C7\u30D0\u30C3\u30B0\u524D\u306E\u4F4D\u7F6E\u306B\u623B\u308A\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_debug_bk name="" button_text="" menu="" overlap="" reset="" cond=""]`
  }],
  [`3d_debug_camera`, {
    name: `3d_debug_camera`,
    description: `3D\u30B7\u30FC\u30F3\u306E\u30AB\u30E1\u30E9\u5EA7\u6A19\u3092\u30DE\u30A6\u30B9\u3067\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u3057\u306A\u304C\u3089\u3001\u8ABF\u6574\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30C7\u30D0\u30C3\u30B0\u3092\u7D42\u4E86\u3059\u308B\u5834\u5408\u306F\u753B\u9762\u5DE6\u4E0A\u306E\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u307E\u3059\u3002
\u30DE\u30A6\u30B9\u64CD\u4F5C
\u5DE6\u30AF\u30EA\u30C3\u30AF\uFF1A\u30AB\u30E1\u30E9\u306E\u5411\u304D(rot)
\u53F3\u30AF\u30EA\u30C3\u30AF\uFF1A\u30AB\u30E1\u30E9\u306E\u4F4D\u7F6E(pos)
\u4E2D\u592E\u30AF\u30EA\u30C3\u30AF\uFF1A\u30DD\u30B8\u30B7\u30E7\u30F3\u306Ez\u8EF8`,
    params: [
      { name: `button_text`, required: false, description: `\u30C7\u30D0\u30C3\u30B0\u3092\u7D42\u4E86\u3059\u308B\u30DC\u30BF\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u81EA\u7531\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u300C\u30AB\u30E1\u30E9\u30A4\u30F3\u30B9\u30DA\u30AF\u30BF\u3092\u9589\u3058\u308B\u300D` },
      { name: `menu`, required: false, description: `\u30C7\u30D0\u30C3\u30B0\u306E\u30E1\u30CB\u30E5\u30FC\u3092\u8868\u793A\u3059\u308B\u304B\u5426\u304B\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u7D42\u4E86\u3055\u305B\u308B\u30DC\u30BF\u30F3\u306E\u307F\u306B\u306A\u308A\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue(\u8868\u793A)` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_debug_camera button_text="" menu="" cond=""]`
  }],
  [`3d_delete`, {
    name: `3d_delete`,
    description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u3002
\u3053\u306E\u30BF\u30B0\u306F\u5B9A\u7FA9\u304B\u3089\u3082\u524A\u9664\u3055\u308C\u308B\u306E\u3067\u3001\u518D\u5EA6\u4F7F\u7528\u3059\u308B\u5834\u5408\u306F
\u3082\u3046\u4E00\u5EA6 new \u30BF\u30B0\u3067\u5B9A\u7FA9\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002
\u4F7F\u7528\u3057\u306A\u304F\u306A\u3063\u305F3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u3053\u307E\u3081\u306B\u524A\u9664\u3059\u308B\u3053\u3068\u3067\u8EFD\u91CF\u306A\u52D5\u4F5C\u304C\u671F\u5F85\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u524A\u9664\u3057\u3066\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_delete name="" cond=""]`
  }],
  [`3d_delete_all`, {
    name: `3d_delete_all`,
    description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3059\u3079\u3066\u524A\u9664\u3057\u307E\u3059\u3002
3D\u30B7\u30FC\u30F3\u3092\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u3068\u304D\u306B\u5229\u7528\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_delete_all cond=""]`
  }],
  [`3d_event`, {
    name: `3d_event`,
    description: `3D\u30B7\u30FC\u30F3\u4E0A\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u3001\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u706B\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30A4\u30D9\u30F3\u30C8\u306F[s]\u30BF\u30B0\u306B\u5230\u9054\u3057\u3066\u3044\u306A\u3044\u3068\u767A\u706B\u3057\u307E\u305B\u3093\u3002
\u307E\u305F\u3001\u4E00\u5EA6\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u706B\u3059\u308B\u3068\u81EA\u52D5\u7684\u306B\u5168\u30A4\u30D9\u30F3\u30C8\u304C\u7121\u52B9\u5316\u3055\u308C\u307E\u3059\uFF08\u30A4\u30D9\u30F3\u30C8\u5B9A\u7FA9\u81EA\u4F53\u306F\u6B8B\u3063\u3066\u3044\u308B\uFF09
\u518D\u5EA6\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u751F\u3055\u305B\u305F\u3044\u5834\u5408\u306F[3d_event_start]\u3092\u901A\u904E\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u30A4\u30D9\u30F3\u30C8\u3092\u767A\u751F\u3055\u305B\u308B3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `storage`, required: false, description: `\u79FB\u52D5\u3059\u308B\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3055\u308C\u305F\u5834\u5408\u306F\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u898B\u306A\u3055\u308C\u307E\u3059` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u5148\u982D\u304B\u3089\u5B9F\u884C\u3055\u308C\u307E\u3059` },
      { name: `type`, required: false, description: `jump or eval \u3092\u6307\u5B9A\u3059\u308B\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Fjump\u3002eval\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u306Fexp\u30D1\u30E9\u30E1\u30FC\u30BF\u30FC\u306B\u6307\u5B9A\u3057\u305Fjs\u304C\u5B9F\u884C\u3055\u308C\u308B\u3002` },
      { name: `exp`, required: false, description: `type\u306Beval\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u306B\u5B9F\u884C\u3055\u308C\u308Bjs\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002` },
      { name: `distance`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u6642\u306B\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u751F\u3059\u308B\u8DDD\u96E2\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u6307\u5B9A\u3088\u308A\u9060\u304F\u306B\u3042\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u53CD\u5FDC\u3057\u307E\u305B\u3093` },
      { name: `ground`, required: false, description: `FPS\u30E2\u30FC\u30C9\u306E\u969B\u306B\u81EA\u5206\u304C\u7279\u5B9A\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u4E0A\u306B\u3044\u308B\u3068\u304D\u3060\u3051\u767A\u706B\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u3053\u3067\u6307\u5B9A\u3057\u305Fname\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u4E0A\u306B\u3044\u308B\u3068\u304D\u3060\u3051\u30A4\u30D9\u30F3\u30C8\u304C\u767A\u706B\u3002` },
      { name: `mode`, required: false, description: `click or collision \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002fps\u306E\u5834\u5408\u306B\u30AF\u30EA\u30C3\u30AF\u3067\u767A\u706B\u3059\u308B\u304B\u3001collision\u3067\u767A\u706B\u3059\u308B\u304B\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Fclick\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_event name="" storage="" target="" type="" exp="" distance="" ground="" mode="" cond=""]`
  }],
  [`3d_event_delete`, {
    name: `3d_event_delete`,
    description: `\u767B\u9332\u3057\u305F3D\u30A4\u30D9\u30F3\u30C8\u3092\u7121\u52B9\u5316\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u30A4\u30D9\u30F3\u30C8\u3092\u524A\u9664\u3059\u308B3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_event_delete name="" cond=""]`
  }],
  [`3d_event_start`, {
    name: `3d_event_start`,
    description: `\u767B\u9332\u3057\u305F3D\u30A4\u30D9\u30F3\u30C8\u3092\u958B\u59CB\u3057\u307E\u3059\u3002
\u30A4\u30D9\u30F3\u30C8\u304C\u5B9F\u884C\u3055\u308C\u305F\u5F8C\u306F\u5FC5\u305A\u5168\u30A4\u30D9\u30F3\u30C8\u304C\u7121\u52B9\u5316\u3055\u308C\u308B\u305F\u3081\u3001\u3053\u306E\u30BF\u30B0\u3067\u518D\u5EA6\u53D7\u4ED8\u3092\u958B\u59CB\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_event_start cond=""]`
  }],
  [`3d_event_stop`, {
    name: `3d_event_stop`,
    description: `\u767B\u9332\u3057\u305F3D\u30A4\u30D9\u30F3\u30C8\u3092\u505C\u6B62\u3057\u307E\u3059\u3002
[3d_event_start]\u3067\u518D\u958B\u3067\u304D\u307E\u3059\u3002
\u767B\u9332\u3057\u305F\u30A4\u30D9\u30F3\u30C8\u81EA\u4F53\u306F\u6D88\u3048\u307E\u305B\u3093\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_event_stop cond=""]`
  }],
  [`3d_fps_control`, {
    name: `3d_fps_control`,
    description: `FPS\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u304C\u53EF\u80FD\u306B\u306A\u308B\u3002
[s]\u306B\u5230\u9054\u3057\u3066\u3044\u306A\u3044\u3068\u5B9F\u884C\u3055\u308C\u307E\u305B\u3093\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_fps_control cond=""]`
  }],
  [`3d_gyro`, {
    name: `3d_gyro`,
    description: `\u30B9\u30DE\u30DB\u306E\u50BE\u304D\u3067\u30AB\u30E1\u30E9\u3092\u5236\u5FA1\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
PC\u30B2\u30FC\u30E0\u306E\u5834\u5408\u306F\u30DE\u30A6\u30B9\u306E\u4F4D\u7F6E\u3067\u30B8\u30E3\u30A4\u30ED\u3092\u518D\u73FE\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `max_x`, required: false, description: `X\u8EF8\u65B9\u5411\u306E\u50BE\u304D\u4E0A\u9650\u3092\u89D2\u5EA6\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F30` },
      { name: `max_y`, required: false, description: `Y\u8EF8\u65B9\u5411\u306E\u50BE\u304D\u4E0A\u9650\u3092\u89D2\u5EA6\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F30` },
      { name: `mode`, required: false, description: `position \u304B rotation \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u50BE\u304D\u306B\u5BFE\u3057\u3066\u30AB\u30E1\u30E9\u306B\u56DE\u8EE2\u306E\u5F71\u97FF\u3092\u4E0E\u3048\u308B\u306E\u304B\u3001\u5EA7\u6A19\u79FB\u52D5\u3092\u4E0E\u3048\u308B\u306E\u304B\u306E\u9055\u3044\u304C\u3042\u308A\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Frotation\uFF08\u56DE\u8EE2\uFF09\u3067\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_gyro max_x="" max_y="" mode="" cond=""]`
  }],
  [`3d_gyro_stop`, {
    name: `3d_gyro_stop`,
    description: `\u30B9\u30DE\u30DB\u9650\u5B9A
\u30B8\u30E3\u30A4\u30ED\u306E\u52D5\u304D\u3092\u505C\u6B62\u3057\u307E\u3059\u3002
\u30AB\u30E1\u30E9\u306E\u4F4D\u7F6E\u3082\u623B\u3057\u305F\u3044\u5834\u5408\u306F\u3053\u306E\u30BF\u30B0\u306E\u76F4\u5F8C\u306B3d_camera\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002
\u518D\u5EA6\u30B8\u30E3\u30A4\u30ED\u3092\u6709\u52B9\u306B\u3057\u305F\u3044\u5834\u5408\u306F [3d_gyro] \u30BF\u30B0\u3067\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_gyro_stop cond=""]`
  }],
  [`3d_helper`, {
    name: `3d_helper`,
    description: `3D\u7A7A\u9593\u306B\u64CD\u4F5C\u88DC\u52A9\u7528\u306E\u30E9\u30A4\u30F3\u3092\u63CF\u753B\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u308B`,
    params: [
      { name: `name`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `text`, required: false, description: `\u8868\u793A\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_helper name="" text="" cond=""]`
  }],
  [`3d_hide`, {
    name: `3d_hide`,
    description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30B2\u30FC\u30E0\u753B\u9762\u304B\u3089\u9000\u5834\u3055\u305B\u307E\u3059\u3002
\u3053\u306E\u30BF\u30B0\u3092\u5B9F\u884C\u3057\u3066\u3082\u5B9A\u7FA9\u81EA\u4F53\u306F\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002
\u3082\u3046\u4E00\u5EA6\u8868\u793A\u3059\u308B\u5834\u5408\u306F[3d_show]\u30BF\u30B0\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u9000\u5834\u3055\u305B\u305F\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `time`, required: false, description: `\u9000\u5834\u3055\u305B\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F500` },
      { name: `wait`, required: false, description: `\u9000\u5834\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u5426\u304B\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_hide name="" time="" wait="" cond=""]`
  }],
  [`3d_hide_all`, {
    name: `3d_hide_all`,
    description: `\u3059\u3079\u3066\u306E3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30B2\u30FC\u30E0\u753B\u9762\u304B\u3089\u9000\u5834\u3055\u305B\u307E\u3059\u3002
\u3053\u306E\u30BF\u30B0\u3092\u5B9F\u884C\u3057\u3066\u3082\u5B9A\u7FA9\u81EA\u4F53\u306F\u524A\u9664\u3055\u308C\u307E\u305B\u3093\u3002
\u3082\u3046\u4E00\u5EA6\u8868\u793A\u3059\u308B\u5834\u5408\u306F[3d_show]\u30BF\u30B0\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044\u3002`,
    params: [
      { name: `time`, required: false, description: `\u9000\u5834\u3055\u305B\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F500` },
      { name: `wait`, required: false, description: `\u9000\u5834\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u5426\u304B\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_hide_all time="" wait="" cond=""]`
  }],
  [`3d_image_new`, {
    name: `3d_image_new`,
    description: `\u30A4\u30E1\u30FC\u30B8\u306E3D\u30E2\u30C7\u30EB\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002
\u5E73\u9762\u306E\u677F\u304C3D\u30B7\u30FC\u30F3\u306B\u8FFD\u52A0\u3055\u308C\u308B\u30A4\u30E1\u30FC\u30B8\u3067\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `texture`, required: false, description: `\u8868\u793A\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306F\u300Cothres/3d/texture\u300D\u30D5\u30A9\u30EB\u30C0\u4EE5\u4E0B\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `width`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1\u3067\u3059` },
      { name: `height`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u753B\u50CF\u30B5\u30A4\u30BA\u306E\u6BD4\u7387\u3092\u4FDD\u3063\u305F\u5F62\u3067\u8868\u793A\u3067\u304D\u307E\u3059\u3002` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `doubleside`, required: false, description: `\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u4E21\u9762\u306B\u8868\u793A\u3055\u305B\u308B\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u88CF\u9762\u306B\u3082\u30C6\u30AF\u30B9\u30C1\u30E3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u304C\u6709\u52B9\u306A\u5834\u5408\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F71\u97FF\u3092\u53D7\u3051\u308B\u304B\u5426\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002\u6709\u52B9\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_image_new name="" texture="" width="" height="" pos="" rot="" scale="" doubleside="" tonemap="" cond=""]`
  }],
  [`3d_init`, {
    name: `3d_init`,
    description: `3D\u95A2\u9023\u306E\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u5BA3\u8A00\u3067\u3059\u3002
\u3053\u306E\u30BF\u30B0\u3092\u901A\u904E\u6642\u3001\u30B2\u30FC\u30E0\u5185\u306B3D\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306E\u30B7\u30FC\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002
\u307E\u305F\u3001\u30BF\u30B0\u3092\u914D\u7F6E\u3057\u3066\u3044\u306A\u3044\u30683d_xxx \u3067\u59CB\u307E\u308B\u30BF\u30B0\u3092\u4F7F\u7528\u3067\u304D\u307E\u305B\u3093\u3002`,
    params: [
      { name: `layer`, required: false, description: `3D\u30E2\u30C7\u30EB\u3092\u914D\u7F6E\u3059\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `camera`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u30E2\u30FC\u30C9\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u300CPerspective\u300D\uFF08\u9060\u8FD1\u611F\u3042\u308A\uFF09\u300COrthographic\u300D\uFF08\u9060\u8FD1\u611F\u306A\u3057\u306E\u5E73\u884C\u6295\u5F71\uFF09\u30C7\u30D5\u30A9\u30EB\u30C8\u306FPerspective` },
      { name: `near`, required: false, description: `\u30AB\u30E1\u30E9\u306B\u8FD1\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u3069\u306E\u8DDD\u96E2\u307E\u3067\u63CF\u753B\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\uFF11` },
      { name: `far`, required: false, description: `\u30AB\u30E1\u30E9\u304B\u3089\u9060\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u8868\u793A\u3059\u308B\u8DDD\u96E2\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u5927\u304D\u3059\u304E\u308B\u3068\u4E0D\u5FC5\u8981\u306B\u9060\u304F\u307E\u3067\u63CF\u753B\u3059\u308B\u305F\u3081\u51E6\u7406\u304C\u91CD\u304F\u306A\u308A\u307E\u3059\u3002\u53EF\u80FD\u306A\u9650\u308A\u5C0F\u3055\u3044\u5024\u306B\u8ABF\u6574\u3057\u307E\u3057\u3087\u3046\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F5000` },
      { name: `material_type`, required: false, description: `\u30B7\u30FC\u30F3\u3067\u5229\u7528\u3059\u308B\u30DE\u30C6\u30EA\u30A2\u30EB\u306E\u6027\u8CEA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Fbasic\u3002basic\uFF08\u8EFD\u91CF\u3060\u304C\u5149\u306E\u8868\u73FE\u7121\u52B9\uFF09lambert\uFF08\u5149\u306E\u8868\u73FE\u53EF\u80FD\uFF09standard\uFF08\u5149\u306E\u8868\u73FE\u306B\u52A0\u3048\u3066\u53CD\u5C04\u3084\u30E1\u30BF\u30EA\u30C3\u30AF\u306B\u3082\u5BFE\u5FDC\uFF09` },
      { name: `ambient_light`, required: false, description: `\u74B0\u5883\u5149\u306E\u5F37\u3055\u3092\u6570\u5B57\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u9762\u306B\u5747\u7B49\u306B\u5F53\u305F\u308B\u5149\u3067\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1` },
      { name: `directional_light`, required: false, description: `\u7279\u5B9A\u306E\u65B9\u5411\u304B\u3089\u653E\u5C04\u3055\u308C\u308B\u5149\u306E\u5F37\u3055\u3002\u592A\u967D\u306E\u5149\u3092\u30A4\u30E1\u30FC\u30B8\u3059\u308B\u3068\u308F\u304B\u308A\u3084\u3059\u3044\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F0` },
      { name: `antialias`, required: false, description: `\u30A2\u30F3\u30C1\u30A8\u30A4\u30EA\u30A2\u30B9\u306E\u8A2D\u5B9A\u3002true or false \u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue` },
      { name: `debug_option`, required: false, description: `\u81EA\u5206\u306E\u3044\u308B\u30DD\u30B8\u30B7\u30E7\u30F3\u5EA7\u6A19\u3092\u753B\u9762\u306B\u8868\u793A\u3059\u308B\u304B\u5426\u304B` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_init layer="" camera="" near="" far="" material_type="" ambient_light="" directional_light="" antialias="" debug_option="" cond=""]`
  }],
  [`3d_model_new`, {
    name: `3d_model_new`,
    description: `\u5916\u90E8\u30D5\u30A1\u30A4\u30EB\u5F62\u5F0F\u306E3D\u30E2\u30C7\u30EB\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u5B9A\u7FA9\u3057\u307E\u3059\u3002
\u5B9F\u884C\u6642\u306F\u30B2\u30FC\u30E0\u753B\u9762\u306B\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002\u8868\u793A\u3059\u308B\u306B\u306F[3d_show ]\u304C\u5FC5\u8981\u3067\u3059\u3002
3D\u30E2\u30C7\u30EB\u30D5\u30A1\u30A4\u30EB\u306F data/others/3d/model\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `storage`, required: true, description: `3D\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002gltf obj json \u5F62\u5F0F\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fothers/3d/model\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u304C\u6709\u52B9\u306A\u5834\u5408\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F71\u97FF\u3092\u53D7\u3051\u308B\u304B\u5426\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002\u7121\u52B9\u306B\u3059\u308B\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `motion`, required: false, description: `\u30D5\u30A1\u30A4\u30EB\u306B\u30E2\u30FC\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3059\u308B\u5834\u5408\u3001\u30E2\u30FC\u30B7\u30E7\u30F3\u540D\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u304C\u306A\u3044\u5834\u5408\u306F\uFF11\u3064\u3081\u306E\u30E2\u30FC\u30B7\u30E7\u30F3\u30D5\u30A1\u30A4\u30EB\u304C\u81EA\u52D5\u7684\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093` },
      { name: `folder`, required: false, description: `\u30D5\u30A1\u30A4\u30EB\u306E\u914D\u7F6E\u30D5\u30A9\u30EB\u30C0\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_model_new name="" storage="" pos="" rot="" scale="" tonemap="" motion="" folder="" cond=""]`
  }],
  [`3d_motion`, {
    name: `3d_motion`,
    description: `3D\u30E2\u30C7\u30EB\u306E\u30E2\u30FC\u30B7\u30E7\u30F3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `motion`, required: true, description: `\u30E2\u30FC\u30B7\u30E7\u30F3\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_motion name="" motion="" cond=""]`
  }],
  [`3d_new_group`, {
    name: `3d_new_group`,
    description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u30B0\u30EB\u30FC\u30D7\u3067\u7BA1\u7406\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u3002`,
    params: [
      { name: `name`, required: true, description: `\u65B0\u898F\u4F5C\u6210\u3059\u308B\u30B0\u30EB\u30FC\u30D7\u540D\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_new_group name="" cond=""]`
  }],
  [`3d_scene`, {
    name: `3d_scene`,
    description: `3D\u306E\u30B7\u30FC\u30F3\u5168\u4F53\u306B\u5F71\u97FF\u3059\u308B\u8A2D\u5B9A\u3092\u884C\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u3092\u30B7\u30FC\u30F3\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u7A2E\u985E\u306FNo/Linear/Reinhard/Uncharted2/Cineon/ACESFilmic\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306FNo\uFF08\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u306A\u3057\uFF09\u3002` },
      { name: `tonemap_value`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u306E\u5F37\u3055\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F0.8\u3067\u3059\u3002` },
      { name: `light_amb`, required: false, description: `\u74B0\u5883\u5149\u306E\u5F37\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1\u3002\u4F8B\u3048\u3070 0.5 \u3060\u3068\u6697\u3081\u30022\u3060\u3068\u304B\u306A\u308A\u660E\u308B\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_scene tonemap="" tonemap_value="" light_amb="" cond=""]`
  }],
  [`3d_show`, {
    name: `3d_show`,
    description: `\u5B9A\u7FA9\u3057\u305F3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u5B9F\u969B\u306B\u30B2\u30FC\u30E0\u753B\u9762\u306B\u767B\u5834\u3055\u305B\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u8868\u793A\u3055\u305B\u305F\u3044\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `time`, required: false, description: `\u8868\u793A\u3055\u305B\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F500` },
      { name: `wait`, required: false, description: `\u8868\u793A\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u5426\u304B\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `group`, required: false, description: `\u30B0\u30EB\u30FC\u30D7\u306B\u6240\u5C5E\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30B0\u30EB\u30FC\u30D7\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `group_uuid`, required: false, description: `\u30B7\u30FC\u30F3\u4E2D\u3067uuid\u3092\u6307\u5B9A\u3057\u3066\u30B0\u30EB\u30FC\u30D7\u306E\u76F4\u4E0B\u306B\u8FFD\u52A0\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059` },
      { name: `force_sprite`, required: false, description: `\u8A72\u5F53\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306F\u5F37\u5236\u7684\u306B\u30B9\u30D7\u30E9\u30A4\u30C8\u30B0\u30EB\u30FC\u30D7\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002` },
      { name: `scene_add`, required: false, description: `\u30C7\u30D5\u30A9\u30EB\u30C8false \u3053\u3053\u304Ctrue\u306E\u5834\u5408\u306Fscene\u306B\u76F4\u63A5\u8FFD\u52A0\u3055\u308C\u308B` },
      { name: `visible`, required: false, description: `true or false \u3092\u6307\u5B9A\u3002\u521D\u671F\u72B6\u614B\u3067\u975E\u8868\u793A\u72B6\u614B\u3067\u30B7\u30FC\u30F3\u306B\u8FFD\u52A0\u3057\u305F\u3044\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_show name="" time="" wait="" pos="" rot="" scale="" group="" group_uuid="" force_sprite="" scene_add="" visible="" cond=""]`
  }],
  [`3d_sound`, {
    name: `3d_sound`,
    description: `3D\u7A7A\u9593\u306B\u97F3\u3092\u914D\u7F6E\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u540D\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `target_name`, required: false, description: `\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u3042\u308B\u5834\u6240\u3067\u9CF4\u3089\u3057\u307E\u3059\u3002` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u7E70\u308A\u8FD4\u3057\u9CF4\u3089\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue` },
      { name: `volume`, required: false, description: `\u97F3\u91CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020\u301C1` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_sound name="" target_name="" pos="" loop="" volume="" cond=""]`
  }],
  [`3d_sphere_new`, {
    name: `3d_sphere_new`,
    description: `\u7403\u4F53\u306E3D\u30E2\u30C7\u30EB\u3092\u5B9A\u7FA9\u3057\u307E\u3059`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `texture`, required: false, description: `\u7403\u4F53\u306B\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u8CBC\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u306F\u300Cothers/3d/texture\u300D\u4EE5\u4E0B\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30B5\u30A4\u30BA\u306F256x256 \u3084 512x512 \u3068\u3044\u3063\u305F\u30B5\u30A4\u30BA\u3092\u63A8\u5968\u3057\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020xRRGGBB \u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `radius`, required: false, description: `\u7403\u4F53\u306E\u534A\u5F84\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F300` },
      { name: `width`, required: false, description: `\u7403\u4F53\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F30` },
      { name: `height`, required: false, description: `\u7403\u4F53\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F30` },
      { name: `side`, required: false, description: `\u30C6\u30AF\u30B9\u30C1\u30E3\u3092\u3069\u306E\u9762\u306B\u9069\u7528\u3059\u308B\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002front(\u524D\u9762) back\uFF08\u80CC\u9762\uFF09double\uFF08\u4E21\u9762\uFF09\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffront` },
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u304C\u6709\u52B9\u306A\u5834\u5408\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F71\u97FF\u3092\u53D7\u3051\u308B\u304B\u5426\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002\u7121\u52B9\u306B\u3059\u308B\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_sphere_new name="" texture="" color="" pos="" rot="" scale="" radius="" width="" height="" side="" tonemap="" cond=""]`
  }],
  [`3d_sprite_new`, {
    name: `3d_sprite_new`,
    description: `\u30B9\u30D7\u30E9\u30A4\u30C8\u306E3D\u30E2\u30C7\u30EB\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002
\u30A4\u30E1\u30FC\u30B8\u3068\u306E\u9055\u3044\u306F\u30B9\u30D7\u30E9\u30A4\u30C8\u306E\u5834\u5408\u3001\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5E38\u306B\u30AB\u30E1\u30E9\u306E\u65B9\u3092\u5411\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `storage`, required: true, description: `\u8868\u793A\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306F\u300Cothres/3d/sprite\u300D\u30D5\u30A9\u30EB\u30C0\u4EE5\u4E0B\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `tonemap`, required: false, description: `\u30C8\u30FC\u30F3\u30DE\u30C3\u30D4\u30F3\u30B0\u304C\u6709\u52B9\u306A\u5834\u5408\u3001\u3053\u306E\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u5F71\u97FF\u3092\u53D7\u3051\u308B\u304B\u5426\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002\u6709\u52B9\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `folder`, required: false, description: `\u30D5\u30A1\u30A4\u30EB\u306E\u914D\u7F6E\u30D5\u30A9\u30EB\u30C0\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_sprite_new name="" storage="" pos="" rot="" scale="" tonemap="" folder="" cond=""]`
  }],
  [`3d_text_new`, {
    name: `3d_text_new`,
    description: `3D\u7A7A\u9593\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u540D\u524D\u3067\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u3064\u304B\u3063\u3066\u8868\u793A\u30FB\u975E\u8868\u793A\u306A\u3069\u306E\u5236\u5FA1\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `text`, required: true, description: `\u8868\u793A\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `pos`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u914D\u7F6E\u3059\u308B\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u306E\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u5EA7\u6A19\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `rot`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u56DE\u8EE2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `3D\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u534A\u89D2\u30AB\u30F3\u30DE\u3067\u533A\u5207\u3063\u3066xyz\u8EF8\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `size`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F42` },
      { name: `color`, required: false, description: `\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020xRRGGBB \u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059` },
      { name: `sprite`, required: false, description: `true or false\u3092\u6307\u5B9A\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u5E38\u306B\u6B63\u9762\u3092\u3080\u304F\u30C6\u30AD\u30B9\u30C8\u3092\u4F5C\u6210\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[3d_text_new name="" text="" pos="" rot="" scale="" size="" color="" face="" sprite="" cond=""]`
  }],
  [`anim`, {
    name: `anim`,
    description: `\u753B\u50CF\u3084\u30DC\u30BF\u30F3\u3001\u30EC\u30A4\u30E4\u306A\u3069\u306E\u4E2D\u8EAB\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u3053\u3053\u3067\u6307\u5B9A\u3057\u305F\u5024\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u8981\u7D20\u306B\u5BFE\u3057\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3057\u307E\u3059\u3002name\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u3067\u3059\u3002` },
      { name: `layer`, required: false, description: `name\u5C5E\u6027\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u524D\u666F\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u5FC5\u305Afore\u30DA\u30FC\u30B8\u306B\u5BFE\u3057\u3066\u5B9F\u65BD\u3055\u308C\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u6307\u5B9A\u3057\u305F\u6A2A\u4F4D\u7F6E\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u79FB\u52D5\u3057\u307E\u3059\u3002` },
      { name: `top`, required: false, description: `\u6307\u5B9A\u3057\u305F\u7E26\u4F4D\u7F6E\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3067\u79FB\u52D5\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `height`, required: false, description: `\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `opacity`, required: false, description: `0\uFF5E255\u306E\u5024\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u900F\u660E\u5EA6\u3078\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3057\u307E\u3059` },
      { name: `color`, required: false, description: `\u8272\u6307\u5B9A` },
      { name: `time`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u304B\u3051\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F2000\u30DF\u30EA\u79D2\u3067\u3059` },
      { name: `effect`, required: false, description: `\u5909\u5316\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002jswingdefeaseInQuadeaseOutQuadeaseInOutQuadeaseInCubiceaseOutCubiceaseInOutCubiceaseInQuarteaseOutQuarteaseInOutQuarteaseInQuinteaseOutQuinteaseInOutQuinteaseInSineeaseOutSineeaseInOutSineeaseInExpoeaseOutExpoeaseInOutExpoeaseInCirceaseOutCirceaseInOutCirceaseInElasticeaseOutElasticeaseInOutElasticeaseInBackeaseOutBackeaseInOutBackeaseInBounceeaseOutBounceeaseInOutBounce` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[anim name="" layer="" left="" top="" width="" height="" opacity="" color="" time="" effect="" cond=""]`
  }],
  [`apply_local_patch`, {
    name: `apply_local_patch`,
    description: `V470\u4EE5\u964D\u3067\u4F7F\u7528\u53EF\u3002PC\u30A2\u30D7\u30EA\u3068\u3057\u3066\u914D\u5E03\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u3067\u3059\u3002`,
    params: [
      { name: `file`, required: true, description: `\u30D1\u30C3\u30C1\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002exe\u30D5\u30A1\u30A4\u30EB\u306E\u968E\u5C64\u3092\u8D77\u70B9\u3068\u3057\u3066\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `reload`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D1\u30C3\u30C1\u53CD\u6620\u5F8C\u306B\u30B2\u30FC\u30E0\u304C\u81EA\u52D5\u7684\u306B\u518D\u8D77\u52D5\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[apply_local_patch file="" reload="" cond=""]`
  }],
  [`autoconfig`, {
    name: `autoconfig`,
    description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u306B\u95A2\u3059\u308B\u8A2D\u5B9A\u3092\u884C\u3044\u307E\u3059\u3002`,
    params: [
      { name: `speed`, required: false, description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u6642\u306E\u30B9\u30D4\u30FC\u30C9\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `clickstop`, required: false, description: `\u753B\u9762\u30AF\u30EA\u30C3\u30AF\u6642\u306B\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u3092\u505C\u6B62\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u9762\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3082\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u304C\u6B62\u307E\u3089\u306A\u3044\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[autoconfig speed="" clickstop="" cond=""]`
  }],
  [`autoload`, {
    name: `autoload`,
    description: `[autosave]\u30BF\u30B0\u3067\u4FDD\u5B58\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[autoload cond=""]`
  }],
  [`autosave`, {
    name: `autosave`,
    description: `\u3053\u306E\u30BF\u30B0\u306B\u5230\u9054\u3057\u305F\u969B\u3001\u81EA\u52D5\u7684\u306B\u30D7\u30EC\u30A4\u72B6\u6CC1\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002`,
    params: [
      { name: `title`, required: false, description: `\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[autosave title="" cond=""]`
  }],
  [`autostart`, {
    name: `autostart`,
    description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u306E\u6587\u5B57\u6570\u306B\u5FDC\u3058\u305F\u6642\u9593\u7D4C\u904E\u306B\u3088\u3063\u3066\u30AF\u30EA\u30C3\u30AF\u5F85\u3061\u3092\u81EA\u52D5\u7684\u3067\u901A\u904E\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[autostart cond=""]`
  }],
  [`autostop`, {
    name: `autostop`,
    description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[autostop cond=""]`
  }],
  [`awakegame`, {
    name: `awakegame`,
    description: `[sleepgame]\u30BF\u30B0\u3067\u4FDD\u5B58\u3055\u308C\u305F\u30B2\u30FC\u30E0\u306E\u72B6\u614B\u306B\u5FA9\u5E30\u3057\u307E\u3059\u3002`,
    params: [
      { name: `variable_over`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001[sleepgame]\u4E2D\u306E\u30B2\u30FC\u30E0\u5909\u6570\u306E\u5909\u66F4\u3092\u5FA9\u5E30\u5F8C\u306B\u5F15\u304D\u7D99\u304E\u307E\u3059\u3002` },
      { name: `bgm_over`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001[sleepgame]\u4E2D\u306EBGM\u3092\u5FA9\u5E30\u5F8C\u306B\u5F15\u304D\u7D99\u304E\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[awakegame variable_over="" bgm_over="" cond=""]`
  }],
  [`backlay`, {
    name: `backlay`,
    description: `\u6307\u5B9A\u3057\u305F\u30EC\u30A4\u30E4\uFF08\u3042\u308B\u3044\u306F\u3059\u3079\u3066\u306E\u30EC\u30A4\u30E4\uFF09\u306E\u60C5\u5831\u3092\u3001\u8868\u30DA\u30FC\u30B8\u304B\u3089\u88CF\u30DA\u30FC\u30B8\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u5BFE\u8C61\u3068\u306A\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002base\u3092\u6307\u5B9A\u3059\u308B\u3068\u80CC\u666F\u30EC\u30A4\u30E4\u306B\u30010\u4EE5\u4E0A\u306E\u6574\u6570\u3092\u6307\u5B9A\u3059\u308B\u3068\u524D\u666F\u30EC\u30A4\u30E4\u306B\u3001message0\u3084message1\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u306B\u306A\u308A\u307E\u3059\u3002message\u3068\u306E\u307F\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F[current]\u30BF\u30B0\u3067\u6307\u5B9A\u3057\u3066\u3042\u308B\u73FE\u5728\u306E\u64CD\u4F5C\u5BFE\u8C61\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u304C\u5BFE\u8C61\u306B\u306A\u308A\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u30EC\u30A4\u30E4\u306E\u60C5\u5831\u304C\u88CF\u30DA\u30FC\u30B8\u306B\u30B3\u30D4\u30FC\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[backlay layer="" cond=""]`
  }],
  [`bg`, {
    name: `bg`,
    description: `\u80CC\u666F\u306E\u5207\u308A\u66FF\u3048\u3092\u7C21\u6613\u7684\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002
\u5E38\u306Bfore\u306E\u30EC\u30A4\u30E4\u306B\u5BFE\u3057\u3066\u5207\u308A\u66FF\u3048\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fdata/bgimage\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `time`, required: false, description: `\u80CC\u666F\u306E\u5207\u308A\u66FF\u3048\u306B\u304B\u3051\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u80CC\u666F\u306E\u5207\u308A\u66FF\u3048\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u5207\u308A\u66FF\u3048\u306E\u5B8C\u4E86\u3092\u5F85\u305F\u305A\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u307F\u307E\u3059\u3002` },
      { name: `cross`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30012\u3064\u306E\u753B\u50CF\u304C\u540C\u3058\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u900F\u660E\u306B\u306A\u308A\u306A\u304C\u3089\u5165\u308C\u66FF\u308F\u308A\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u53E4\u3044\u80CC\u666F\u3092\u6B8B\u3057\u306A\u304C\u3089\u4E0A\u306B\u91CD\u306D\u308B\u5F62\u3067\u65B0\u3057\u3044\u80CC\u666F\u3092\u8868\u793A\u3057\u307E\u3059\u3002CG\u5DEE\u5206\u306A\u3069\u3067\u4F7F\u7528\u3059\u308B\u5834\u5408\u306Ffalse\u304C\u826F\u3044\u3067\u3057\u3087\u3046\u3002` },
      { name: `position`, required: false, description: `\u7701\u7565\u3059\u308B\u3068\u3001\u753B\u50CF\u304C\u30B2\u30FC\u30E0\u753B\u9762\u3044\u3063\u3071\u3044\u306B\u5F15\u304D\u4F38\u3070\u3055\u308C\u307E\u3059\uFF08\u6BD4\u7387\u306F\u5D29\u308C\u308B\uFF09\u3002\u3053\u306E\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u80CC\u666F\u753B\u50CF\u3068\u753B\u9762\u30B5\u30A4\u30BA\u306E\u6BD4\u7387\u304C\u7570\u306A\u308B\u5834\u5408\u306B\u3001\u6BD4\u7387\u3092\u5D29\u3055\u305A\u306B\u80CC\u666F\u3092\u914D\u7F6E\u3067\u304D\u307E\u3059\u3002\u914D\u7F6E\u4F4D\u7F6E\u3092\u6B21\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304B\u3089\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002left(\u5DE6\u5BC4\u305B)\u3001center(\u4E2D\u592E\u5BC4\u305B)\u3001right(\u53F3\u5BC4\u305B)\u3001top(\u4E0A\u5BC4\u305B)\u3001bottom(\u4E0B\u5BC4\u305B)` },
      { name: `method`, required: false, description: `\u5207\u308A\u66FF\u3048\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306FfadeIn\u3067\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u6F14\u51FA\u306F\u6B21\u306E\u901A\u308A\u3067\u3059\u3002 \u3010V450\u4EE5\u964D\u3011fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn \u3010V450\u4EE5\u524D\u3011crossfadeexplodeslideblindbounceclipdropfoldpuffscaleshakesize` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[bg storage="" time="" wait="" cross="" position="" method="" cond=""]`
  }],
  [`bg2`, {
    name: `bg2`,
    description: `\u80CC\u666F\u306E\u5207\u308A\u66FF\u3048\u3092\u7C21\u6613\u7684\u306B\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002
\u5E38\u306Bfore\u306E\u30EC\u30A4\u30E4\u306B\u5BFE\u3057\u3066\u5207\u308A\u66FF\u3048\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `[anim]\u30BF\u30B0\u306A\u3069\u304B\u3089\u3053\u306E\u540D\u524D\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u3089\u308C\u307E\u3059\u3002\u30AB\u30F3\u30DE\u3067\u533A\u5207\u308B\u3053\u3068\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1Aname\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u306FHTML\u306E\u30AF\u30E9\u30B9\u5C5E\u6027\u306B\u306A\u308A\u307E\u3059\uFF09` },
      { name: `storage`, required: true, description: `\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fdata/bgimage\u4EE5\u4E0B\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u753B\u50CF\u5DE6\u7AEF\u306E\u4F4D\u7F6E\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u30B2\u30FC\u30E0\u753B\u9762\u306E\u4E0A\u7AEF\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `top`, required: false, description: `\u753B\u50CF\u4E0A\u7AEF\u306E\u4F4D\u7F6E\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u30B2\u30FC\u30E0\u753B\u9762\u306E\u4E0A\u7AEF\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u753B\u50CF\u306E\u6A2A\u5E45\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B2\u30FC\u30E0\u753B\u9762\u3044\u3063\u3071\u3044\u306B\u5F15\u304D\u4F38\u3070\u3055\u308C\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u753B\u50CF\u306E\u9AD8\u3055\u4F4D\u7F6E\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B2\u30FC\u30E0\u753B\u9762\u3044\u3063\u3071\u3044\u306B\u5F15\u304D\u4F38\u3070\u3055\u308C\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u80CC\u666F\u306E\u5207\u308A\u66FF\u3048\u306B\u304B\u3051\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u80CC\u666F\u306E\u5207\u308A\u66FF\u3048\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u5207\u308A\u66FF\u3048\u306E\u5B8C\u4E86\u3092\u5F85\u305F\u305A\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u307F\u307E\u3059\u3002` },
      { name: `cross`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30012\u3064\u306E\u753B\u50CF\u304C\u540C\u3058\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u900F\u660E\u306B\u306A\u308A\u306A\u304C\u3089\u5165\u308C\u66FF\u308F\u308A\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u53E4\u3044\u80CC\u666F\u3092\u6B8B\u3057\u306A\u304C\u3089\u4E0A\u306B\u91CD\u306D\u308B\u5F62\u3067\u65B0\u3057\u3044\u80CC\u666F\u3092\u8868\u793A\u3057\u307E\u3059\u3002CG\u5DEE\u5206\u306A\u3069\u3067\u4F7F\u7528\u3059\u308B\u5834\u5408\u306Ffalse\u304C\u826F\u3044\u3067\u3057\u3087\u3046\u3002` },
      { name: `method`, required: false, description: `\u5207\u308A\u66FF\u3048\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306FfadeIn\u3067\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u6F14\u51FA\u306F\u6B21\u306E\u901A\u308A\u3067\u3059\u3002 \u3010V450\u4EE5\u964D\u3011fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn \u3010V450\u4EE5\u524D\u3011crossfadeexplodeslideblindbounceclipdropfoldpuffscaleshakesize` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[bg2 name="" storage="" left="" top="" width="" height="" time="" wait="" cross="" method="" cond=""]`
  }],
  [`bgcamera`, {
    name: `bgcamera`,
    description: `\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u4F7F\u7528\u30C7\u30D0\u30A4\u30B9\u306E\u30AB\u30E1\u30E9\u3092\u30B2\u30FC\u30E0\u304B\u3089\u8D77\u52D5\u3055\u305B\u3066\u3001\u30AB\u30E1\u30E9\u3067\u64AE\u5F71\u3057\u3066\u3044\u308B\u6620\u50CF\u3092\u30B2\u30FC\u30E0\u753B\u9762\u306E\u80CC\u666F\u3068\u3057\u3066\u6620\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u73FE\u5B9F\u306E\u98A8\u666F\u3084\u81EA\u5206\u306B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u91CD\u306D\u3066\u8A18\u5FF5\u64AE\u5F71\u3067\u304D\u308B\u30A2\u30D7\u30EA\u304C\u7C21\u5358\u306B\u3064\u304F\u308C\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `[anim]\u30BF\u30B0\u306A\u3069\u304B\u3089\u3053\u306E\u540D\u524D\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u3089\u308C\u307E\u3059\u3002\u30AB\u30F3\u30DE\u3067\u533A\u5207\u308B\u3053\u3068\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1Aname\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u306FHTML\u306E\u30AF\u30E9\u30B9\u5C5E\u6027\u306B\u306A\u308A\u307E\u3059\uFF09` },
      { name: `wait`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30AB\u30E1\u30E9\u5165\u529B\u306E\u8868\u793A\u3092\u5F85\u3061\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30AB\u30E1\u30E9\u5165\u529B\u9818\u57DF\u304C\u8868\u793A\u3055\u308C\u308B\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fit`, required: false, description: `\u6BD4\u7387\u3092\u5D29\u3057\u3066\u3082\u5168\u753B\u9762\u306B\u914D\u7F6E\u3059\u308B\u306A\u3089true\u3002\u6BD4\u7387\u3092\u4FDD\u6301\u3057\u3066\u914D\u7F6E\u3059\u308B\u306A\u3089false\u3002\u30AB\u30E1\u30E9\u306E\u89E3\u50CF\u5EA6\u306B\u3088\u3063\u3066\u306F\u9ED2\u5857\u308A\u306E\u90E8\u5206\u304C\u3067\u304D\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u30AB\u30E1\u30E9\u3092\u914D\u7F6E\u3059\u308B\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `top`, required: false, description: `\u30AB\u30E1\u30E9\u3092\u914D\u7F6E\u3059\u308B\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `width`, required: false, description: `\u30AB\u30E1\u30E9\u3092\u914D\u7F6E\u3059\u308B\u30A8\u30EA\u30A2\u306E\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `height`, required: false, description: `\u30AB\u30E1\u30E9\u3092\u914D\u7F6E\u3059\u308B\u30A8\u30EA\u30A2\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `mode`, required: false, description: `front(\u524D\u9762\u30AB\u30E1\u30E9)\u3001back(\u80CC\u9762\u30AB\u30E1\u30E9)\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F55\u3082\u6307\u5B9A\u3057\u306A\u3044\u3068\u6A19\u6E96\u306E\u30AB\u30E1\u30E9\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002` },
      { name: `qrcode`, required: false, description: `QR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u3068\u304D\u306E\u52D5\u4F5C\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 jump(\u30B2\u30FC\u30E0\u5185\u79FB\u52D5\u306EQR\u306E\u307F\u53CD\u5FDC) web(\u4ED6\u30B5\u30A4\u30C8\u3078\u306E\u30EA\u30F3\u30AF\u3060\u3051\u53CD\u5FDC) define([qr_define]\u3067\u5B9A\u7FA9\u3057\u305F\u3082\u306E\u3060\u3051\u306B\u53CD\u5FDC) all(\u3059\u3079\u3066\u306B\u53CD\u5FDC) off(QR\u30B3\u30FC\u30C9\u306B\u53CD\u5FDC\u3057\u306A\u3044)` },
      { name: `debug`, required: false, description: `QR\u30B3\u30FC\u30C9\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u3068\u304D\u306BURL\u3092\u8868\u793A\u3059\u308B\u304B\u5426\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002true\u3067URL\u3092\u30A2\u30E9\u30FC\u30C8\u8868\u793A\u3067\u304D\u307E\u3059\u3002` },
      { name: `audio`, required: false, description: `\u97F3\u58F0\u5165\u529B\u3082\u53CD\u6620\u3059\u308B\u304B\u5426\u304B\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u97F3\u58F0\u3082\u30B2\u30FC\u30E0\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[bgcamera name="" wait="" time="" fit="" left="" top="" width="" height="" mode="" qrcode="" debug="" audio="" cond=""]`
  }],
  [`bgmopt`, {
    name: `bgmopt`,
    description: `BGM\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `volume`, required: false, description: `BGM\u306E\u30B3\u30F3\u30D5\u30A3\u30B0\u97F3\u91CF\u30920\u301C100\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `buf`, required: false, description: `\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u30B9\u30ED\u30C3\u30C8\u5171\u901A\u306E\u97F3\u91CF\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u30B3\u30F3\u30D5\u30A3\u30B0\u97F3\u91CF\u306E\u5909\u66F4\u3092\u73FE\u5728\u518D\u751F\u4E2D\u306EBGM\u306B\u5373\u53CD\u6620\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u97F3\u91CF\u306E\u5909\u66F4\u3092\u5373\u53CD\u6620\u3059\u308B\u5834\u5408\u306E\u30D5\u30A7\u30FC\u30C9\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `tag_volume`, required: false, description: `0\u301C100\u3092\u6307\u5B9A\u3057\u3066\u3001\u73FE\u5728\u518D\u751F\u4E2D\u306EBGM\u306E\u30BF\u30B0\u97F3\u91CF\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u30BF\u30B0\u97F3\u91CF\u3068\u306F[playbgm]\u30BF\u30B0\u306B\u6307\u5B9A\u3055\u308C\u3066\u3044\u305F\u97F3\u91CF\u306E\u3053\u3068\u3067\u3059\u3002\u3053\u306E\u6A5F\u80FD\u306F\u305F\u3068\u3048\u3070\u3001\u3082\u3068\u3082\u3068[playbgm volume="50"]\u3067\u518D\u751F\u3055\u308C\u59CB\u3081\u305FBGM\u306E\u97F3\u91CF\u3092\u3001[playbgm volume="100"]\u3067\u518D\u751F\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306E\u97F3\u91CF\u306B\u4FEE\u6B63\u3057\u305F\u3044\u3001\u3068\u3044\u3046\u30B1\u30FC\u30B9\u3067\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3057\u305F\u3060\u3051\u3067\u306F\u30B3\u30F3\u30D5\u30A3\u30B0\u97F3\u91CF\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001effect\u304C\u5F37\u5236\u7684\u306Btrue\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `samebgm_restart`, required: false, description: `[playbgm]\u30BF\u30B0\u3067\u518D\u751F\u3057\u3088\u3046\u3068\u3057\u305FBGM\u304C\u3059\u3067\u306B\u518D\u751F\u4E2D\u3060\u3063\u305F\u5834\u5408\u306E\u51E6\u7406\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002true\u306A\u3089\u6700\u521D\u304B\u3089\u518D\u751F\u3057\u76F4\u3057\u3001false\u306A\u3089\u30B9\u30EB\u30FC\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[bgmopt volume="" buf="" effect="" time="" tag_volume="" samebgm_restart="" cond=""]`
  }],
  [`bgmovie`, {
    name: `bgmovie`,
    description: `\u30B2\u30FC\u30E0\u753B\u9762\u306E\u80CC\u666F\u306B\u52D5\u753B\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u306Fdata/video\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u518D\u751F\u3059\u308B\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `mute`, required: false, description: `\u52D5\u753B\u306E\u97F3\u3092\u30DF\u30E5\u30FC\u30C8\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u306F\u52D5\u753B\u3092\u518D\u751F\u3059\u308B\u524D\u306B\u30E6\u30FC\u30B6\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30BF\u30C3\u30D7\u306A\u3069\uFF09\u304C\u5FC5\u8981\u3068\u3044\u3046\u5236\u9650\u304C\u3042\u308A\u307E\u3059\u304C\u3001true\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3053\u306E\u5236\u9650\u3092\u7121\u8996\u3067\u304D\u307E\u3059\u3002` },
      { name: `volume`, required: false, description: `\u52D5\u753B\u306E\u97F3\u91CF\u30920\u301C100\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u80CC\u666F\u52D5\u753B\u3092\u30EB\u30FC\u30D7\u3055\u305B\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u52D5\u753B\u306E\u6700\u5F8C\u306E\u72B6\u614B\u3067\u505C\u6B62\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[bgmovie storage="" time="" mute="" volume="" loop="" cond=""]`
  }],
  [`body`, {
    name: `body`,
    description: `\u30B2\u30FC\u30E0\u753B\u9762\u30B5\u30A4\u30BA\u3084\u30B2\u30FC\u30E0\u753B\u9762\u5916\u5074\u306E\u9ED2\u5E2F\u90E8\u5206\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3067\u304D\u307E\u3059\u3002\u9ED2\u5E2F\u90E8\u5206\u306E\u8272\u3092\u5909\u66F4\u3057\u305F\u308A\u3001\u9ED2\u5E2F\u90E8\u5206\u306B\u753B\u50CF\u3092\u8A2D\u5B9A\u3057\u305F\u308A\u3001\u30B2\u30FC\u30E0\u753B\u9762\u30B5\u30A4\u30BA\u3092\u30B2\u30FC\u30E0\u4E2D\u306B\u5909\u66F4\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `bgimage`, required: false, description: `\u30B2\u30FC\u30E0\u753B\u9762\u5916\u306E\u80CC\u666F\u306B\u8A2D\u5B9A\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002bgimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `bgrepeat`, required: false, description: `\u80CC\u666F\u306B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u305F\u969B\u306E\u8868\u793A\u30D1\u30BF\u30FC\u30F3\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u7E26\u6A2A\u306B\u7E70\u308A\u8FD4\u3057\u8868\u793A\u3055\u308C\u307E\u3059\u3002 repeat-x(\u6C34\u5E73\u65B9\u5411\u306E\u307F\u7E70\u308A\u8FD4\u3057) repeat-y(\u5782\u76F4\u65B9\u5411\u306E\u307F\u7E70\u308A\u8FD4\u3057) round(\u6BD4\u7387\u3092\u5D29\u3057\u3066\u8986\u3046\u3088\u3046\u306B\u5168\u753B\u9762\u7E70\u308A\u8FD4\u3057) no-repeat(\u7E70\u308A\u8FD4\u3057\u306A\u3057)` },
      { name: `bgcolor`, required: false, description: `\u80CC\u666F\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002bgimage\u304C\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002` },
      { name: `bgcover`, required: false, description: `\u80CC\u666F\u753B\u50CF\u3092\u753B\u9762\u5168\u4F53\u306B\u5F15\u304D\u4F38\u3070\u3059\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scWidth`, required: false, description: `\u30B2\u30FC\u30E0\u753B\u9762\u306E\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u6A2A\u5E45\u3092\u30B2\u30FC\u30E0\u4E2D\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u5BFE\u5FDC\u3092\u60F3\u5B9A\u3057\u305F\u30BF\u30B0\u3067\u3059\u3002Config.tjs\u306EscWidth\u306B\u76F8\u5F53\u3057\u307E\u3059\u3002 \u203B\u300C\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u300D\u306F\u300C\u30A6\u30A3\u30F3\u30C9\u30A6\u30B5\u30A4\u30BA\u306B\u30D5\u30A3\u30C3\u30C8\u3055\u305B\u308B\u305F\u3081\u306B\u30B2\u30FC\u30E0\u753B\u9762\u306E\u62E1\u7E2E\u3092\u884C\u3046\u524D\u306E\u300D\u3068\u3044\u3046\u610F\u5473\u3067\u7528\u3044\u3089\u308C\u3066\u3044\u307E\u3059\u3002` },
      { name: `scHeight`, required: false, description: `\u30B2\u30FC\u30E0\u753B\u9762\u306E\u30AA\u30EA\u30B8\u30CA\u30EB\u306E\u9AD8\u3055\u3092\u30B2\u30FC\u30E0\u4E2D\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u5BFE\u5FDC\u3092\u60F3\u5B9A\u3057\u305F\u30BF\u30B0\u3067\u3059\u3002Config.tjs\u306EscHeight\u306B\u76F8\u5F53\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[body bgimage="" bgrepeat="" bgcolor="" bgcover="" scWidth="" scHeight="" cond=""]`
  }],
  [`breakgame`, {
    name: `breakgame`,
    description: `[sleepgame]\u30BF\u30B0\u3067\u4FDD\u5B58\u3057\u305F\u4F11\u6B62\u72B6\u614B\u3092\u7834\u68C4\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[breakgame cond=""]`
  }],
  [`button`, {
    name: `button`,
    description: `\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\u30DC\u30BF\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002[link]\u30BF\u30B0\u306E\u753B\u50CF\u7248\u3068\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `graphic`, required: false, description: `\u30DC\u30BF\u30F3\u306B\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fdata/image\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `folder`, required: false, description: `\u753B\u50CF\u304C\u5165\u3063\u3066\u3044\u308B\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u524D\u666F\u30EC\u30A4\u30E4\u7528\u306E\u753B\u50CF\u306Ffgimage\u30D5\u30A9\u30EB\u30C0\u3001\u80CC\u666F\u30EC\u30A4\u30E4\u7528\u306E\u753B\u50CF\u306Fbgimage\u30D5\u30A9\u30EB\u30C0\u3068\u6C7A\u307E\u3063\u3066\u3044\u307E\u3059\u304C\u3001\u3053\u308C\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `[anim]\u30BF\u30B0\u306A\u3069\u304B\u3089\u3053\u306E\u540D\u524D\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u3089\u308C\u307E\u3059\u3002\u30AB\u30F3\u30DE\u3067\u533A\u5207\u308B\u3053\u3068\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1Aname\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u306FHTML\u306E\u30AF\u30E9\u30B9\u5C5E\u6027\u306B\u306A\u308A\u307E\u3059\uFF09` },
      { name: `x`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6A2A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `y`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u7E26\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6A2A\u5E45\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059` },
      { name: `height`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u9AD8\u3055\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059` },
      { name: `fix`, required: false, description: `\u56FA\u5B9A\u30DC\u30BF\u30F3\uFF08\u30BB\u30FC\u30D6\u30DC\u30BF\u30F3\u306A\u3069\u306E\u5E38\u306B\u8868\u793A\u3057\u3066\u304A\u304F\u30DC\u30BF\u30F3\uFF09\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u901A\u5E38\u306E\u9078\u629E\u80A2\u30DC\u30BF\u30F3\u306Ffalse(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3002\u9078\u629E\u80A2\u30DC\u30BF\u30F3\u3068\u306F\u7570\u306A\u308A\u3001\u56FA\u5B9A\u30DC\u30BF\u30F3\u306F\u305D\u308C\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u9593\u3082\u753B\u9762\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3075\u3064\u3046\u306B\u30B7\u30CA\u30EA\u30AA\u3092\u8AAD\u307F\u9032\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002 true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001fix\u30EC\u30A4\u30E4\u3068\u3044\u3046\u7279\u6B8A\u306A\u30EC\u30A4\u30E4\u306B\u30DC\u30BF\u30F3\u304C\u914D\u7F6E\u3055\u308C\u307E\u3059\u3002fix\u30EC\u30A4\u30E4\u306B\u8FFD\u52A0\u3057\u305F\u8981\u7D20\u3092\u6D88\u3059\u5834\u5408\u306F[clearfix]\u30BF\u30B0\u3092\u4F7F\u3044\u307E\u3059\u3002 fix\u306Btrue\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u5225\u306Estorage\u306Etarget\u3092\u6307\u5B9A\u3057\u3066\u3001\u305D\u3053\u306B\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306E\u51E6\u7406\u3092\u8A18\u8FF0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002 fix\u306Btrue\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u30B3\u30FC\u30EB\u30B9\u30BF\u30C3\u30AF\u304C\u6B8B\u308A\u307E\u3059\u3002\u30B3\u30FC\u30EB\u30B9\u30BF\u30C3\u30AF\u304C\u6D88\u5316\u3055\u308C\u308B\u307E\u3067\u306F\u30DC\u30BF\u30F3\u304C\u6709\u52B9\u306B\u306A\u3089\u306A\u3044\u306E\u3067\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002` },
      { name: `role`, required: false, description: `\u30DC\u30BF\u30F3\u306B\u7279\u5225\u306A\u6A5F\u80FD\u3092\u5272\u308A\u5F53\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001storage\u3084target\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002\u307E\u305F\u3001\u5F37\u5236\u7684\u306Bfix\u5C5E\u6027\u304Ctrue\u306B\u306A\u308A\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002 save(\u30BB\u30FC\u30D6\u753B\u9762\u3092\u8868\u793A) load(\u30ED\u30FC\u30C9\u753B\u9762\u3092\u8868\u793A) title(\u30BF\u30A4\u30C8\u30EB\u753B\u9762\u306B\u623B\u308B) menu(\u30E1\u30CB\u30E5\u30FC\u753B\u9762\u3092\u8868\u793A) window(\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u975E\u8868\u793A) skip(\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u3092\u958B\u59CB) backlog\uFF08\u30D0\u30C3\u30AF\u30ED\u30B0\u3092\u8868\u793A\uFF09 fullscreen(\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u5207\u308A\u66FF\u3048) quicksave(\u30AF\u30A4\u30C3\u30AF\u30BB\u30FC\u30D6\u5B9F\u884C) quickload(\u30AF\u30A4\u30C3\u30AF\u30ED\u30FC\u30C9\u5B9F\u884C) auto(\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u958B\u59CB) sleepgame(\u30B2\u30FC\u30E0\u306E\u72B6\u614B\u3092\u4FDD\u5B58\u3057\u3066\u30B8\u30E3\u30F3\u30D7)` },
      { name: `exp`, required: false, description: `\u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u6642\u306B\u5B9F\u884C\u3055\u308C\u308BJS\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `preexp`, required: false, description: `\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u305F\u6642\u70B9\u3067\u3001\u3053\u306E\u5C5E\u6027\u306B\u6307\u5B9A\u3057\u305F\u5024\u304C\u5909\u6570preexp\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002\u305D\u3057\u3066\u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u6642\u306Bexp\u5185\u3067preexp\u3068\u3044\u3046\u5909\u6570\u304C\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `hint`, required: false, description: `\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u3092\u30DC\u30BF\u30F3\u306E\u4E0A\u3067\u9759\u6B62\u3055\u305B\u305F\u3068\u304D\u306B\u8868\u793A\u3055\u308C\u308B\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7\u306E\u6587\u5B57\u5217\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `clickse`, required: false, description: `\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u6642\u306B\u518D\u751F\u3055\u308C\u308B\u52B9\u679C\u97F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u52B9\u679C\u97F3\u30D5\u30A1\u30A4\u30EB\u306Fsound\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `enterse`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u4E0A\u306B\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u304C\u4E57\u3063\u305F\u6642\u306B\u518D\u751F\u3059\u308B\u52B9\u679C\u97F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u52B9\u679C\u97F3\u30D5\u30A1\u30A4\u30EB\u306Fsound\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `leavese`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u4E0A\u304B\u3089\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u304C\u5916\u308C\u305F\u6642\u306B\u518D\u751F\u3059\u308B\u52B9\u679C\u97F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u52B9\u679C\u97F3\u30D5\u30A1\u30A4\u30EB\u306Fsound\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `activeimg`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u4E0A\u3067\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u3044\u308B\u9593\u306B\u5207\u308A\u66FF\u3048\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `clickimg`, required: false, description: `\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u3042\u3068\u306B\u5207\u308A\u66FF\u3048\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `enterimg`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u4E0A\u306B\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u304C\u4E57\u3063\u305F\u6642\u306B\u5207\u308A\u66FF\u3048\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `autoimg`, required: false, description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u304C\u958B\u59CB\u3055\u308C\u305F\u3068\u304D\u306B\u5207\u308A\u66FF\u3048\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `skipimg`, required: false, description: `\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u304C\u958B\u59CB\u3055\u308C\u305F\u3068\u304D\u306B\u5207\u308A\u66FF\u3048\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `visible`, required: false, description: `\u6700\u521D\u304B\u3089\u30DC\u30BF\u30F3\u3092\u8868\u793A\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u3067\u8868\u793A\u3001false\u3067\u975E\u8868\u793A\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `auto_next`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u306Bfalse\u304C\u6307\u5B9A\u3057\u3066\u3042\u308A\u3001\u304B\u3064fix=true\u306E\u5834\u5408\u3001[return]\u3067\u623B\u3063\u305F\u3068\u304D\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u307E\u306A\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `savesnap`, required: false, description: `true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u306B\u3059\u308B\u3068\u3001\u3053\u306E\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u6642\u70B9\u3067\u306E\u30BB\u30FC\u30D6\u30B9\u30CA\u30C3\u30D7\u3092\u78BA\u4FDD\u3057\u307E\u3059\u3002\u30BB\u30FC\u30D6\u753B\u9762\u3078\u79FB\u52D5\u3059\u308B\u5834\u5408\u306F\u3053\u3053\u3092true\u306B\u3057\u3066\u3001\u4FDD\u5B58\u3057\u3066\u304B\u3089\u30BB\u30FC\u30D6\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002` },
      { name: `keyfocus`, required: false, description: `false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u3084\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\u3067\u9078\u629E\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u307E\u305F1\u30842\u306A\u3069\u306E\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u306Efocus_next\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u3066\u3044\u304F\u3068\u304D\u306E\u9806\u5E8F\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[button graphic="" folder="" storage="" target="" name="" x="" y="" width="" height="" fix="" role="" exp="" preexp="" hint="" clickse="" enterse="" leavese="" activeimg="" clickimg="" enterimg="" autoimg="" skipimg="" visible="" auto_next="" savesnap="" keyfocus="" cond=""]`
  }],
  [`call`, {
    name: `call`,
    description: `\u6307\u5B9A\u3057\u305F\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u30FB\u30E9\u30D9\u30EB\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u547C\u3073\u51FA\u3057\u305F\u3044\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u306E\u3042\u308B\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3092 \u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728 \u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u3042\u308B\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u547C\u3073\u51FA\u3059\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u306E\u30E9\u30D9\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u304B\u3089\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[call storage="" target="" cond=""]`
  }],
  [`camera`, {
    name: `camera`,
    description: `\u30AB\u30E1\u30E9\u306E\u30BA\u30FC\u30E0\u3084\u30D1\u30F3\u306E\u3088\u3046\u306A\u6F14\u51FA\u304C\u3067\u304D\u307E\u3059\u3002
\u30AB\u30E1\u30E9\u6A5F\u80FD\u3092\u4F7F\u3046\u3053\u3068\u3067\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7ACB\u3061\u7D75\u306E\u8868\u60C5\u306B\u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u3042\u3066\u305F\u308A\u3001\u4E00\u679A\u7D75\u306E\u3044\u308D\u3093\u306A\u500B\u6240\u3092\u30BA\u30FC\u30E0\u3057\u3066\u307F\u305F\u308A\u3068\u591A\u5F69\u306A\u6F14\u51FA\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u30AB\u30E1\u30E9\u304C\u5EA7\u6A19\u3078\u79FB\u52D5\u3059\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `x`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u3059\u308BX\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `y`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u3059\u308BY\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `zoom`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF12\u3068\u6307\u5B9A\u3059\u308B\u30682\u500D\u30BA\u30FC\u30E0\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `rotate`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3057\u307E\u3059\u300220\u3068\u6307\u5B9A\u3059\u308B\u3068\u30AB\u30E1\u30E9\u304C20\u5EA6\u50BE\u304D\u307E\u3059\u3002` },
      { name: `from_x`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u958B\u59CB\u6642\u306EX\u5EA7\u6A19\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `from_y`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u958B\u59CB\u6642\u306EY\u5EA7\u6A19\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `from_zoom`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u958B\u59CB\u6642\u306E\u500D\u7387\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `from_rotate`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u958B\u59CB\u6642\u306E\u50BE\u304D\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30AB\u30E1\u30E9\u79FB\u52D5\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3092true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u30AB\u30E1\u30E9\u79FB\u52D5\u4E2D\u3082\u30B2\u30FC\u30E0\u3092\u9032\u884C\u3067\u304D\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u52B9\u679C\u3092\u4E0E\u3048\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u80CC\u666F\u306A\u3089base\u3001\u524D\u666F\u30EC\u30A4\u30E4\u306A\u30890\u4EE5\u4E0A\u306E\u6570\u5B57\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AB\u30E1\u30E9\u306E\u5F71\u97FF\u3092\u7279\u5B9A\u30EC\u30A4\u30E4\u306B\u9650\u5B9A\u3067\u304D\u307E\u3059\u3002\u901A\u5E38\u306F\u3059\u3079\u3066\u306E\u30EC\u30A4\u30E4\u306B\u5BFE\u3057\u3066\u5F71\u97FF\u3092\u53CA\u307C\u3057\u307E\u3059\u3002` },
      { name: `ease_type`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u6F14\u51FA\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 ease(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u6ED1\u3089\u304B\u306B\u518D\u751F\u3059\u308B) linear(\u4E00\u5B9A\u306E\u901F\u5EA6\u3067\u518D\u751F\u3059\u308B) ease-in(\u958B\u59CB\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-out(\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-in-out(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B)` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[camera time="" x="" y="" zoom="" rotate="" from_x="" from_y="" from_zoom="" from_rotate="" wait="" layer="" ease_type="" cond=""]`
  }],
  [`cancelskip`, {
    name: `cancelskip`,
    description: `\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u3092\u89E3\u9664\u3057\u307E\u3059\u3002[skipstop]\u3068\u540C\u3058\u52D5\u4F5C\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[cancelskip cond=""]`
  }],
  [`changevol`, {
    name: `changevol`,
    description: `\u73FE\u5728\u518D\u751F\u4E2D\u306E\u30AA\u30FC\u30C7\u30A3\u30AA\u306E\u97F3\u91CF\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `target`, required: false, description: `BGM\u306E\u97F3\u91CF\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306F"bgm"\u3001SE\u306E\u97F3\u91CF\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306F"se"\u3068\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `volume`, required: false, description: `\u97F3\u91CF\u30920\u301C100\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `buf`, required: false, description: `\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u30B9\u30ED\u30C3\u30C8\u306E\u97F3\u58F0\u306B\u5BFE\u3057\u3066\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[changevol target="" volume="" buf="" time="" cond=""]`
  }],
  [`chara_config`, {
    name: `chara_config`,
    description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u64CD\u4F5C\u30BF\u30B0\u306E\u57FA\u672C\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u307E\u3059`,
    params: [
      { name: `pos_mode`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3067\u3059\u3002true\u306E\u5834\u5408\u3001[chara_show]\u30BF\u30B0\u3067\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u8868\u793A\u3057\u305F\u3068\u304D\u306E\u7ACB\u3061\u4F4D\u7F6E\u3092\u81EA\u52D5\u7684\u306B\u8A08\u7B97\u3057\u3066\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `ptext`, required: false, description: `[ptext]\u3067\u4F5C\u3063\u3066\u304A\u3044\u305F\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u540D\u524D\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306E\u30C6\u30AD\u30B9\u30C8\u9818\u57DF\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u8A73\u3057\u304F\u306F[chara_ptext]\u306E\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `time`, required: false, description: `[chara_mod]\u30BF\u30B0\u3067\u8868\u60C5\u3092\u5909\u3048\u308B\u969B\u306E\u30AF\u30ED\u30B9\u30D5\u30A7\u30FC\u30C9\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u77AC\u9593\u7684\u306B\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002` },
      { name: `memory`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u9000\u5834\u3055\u305B\u305F\u3068\u304D\u306E\u8868\u60C5\u3092\u8A18\u61B6\u3057\u3066\u304A\u304F\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u518D\u767B\u5834\u3055\u305B\u305F\u3068\u304D\u306B\u3001\u524D\u56DE\u9000\u5834\u6642\u306E\u8868\u60C5\u306E\u307E\u307E\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `anim`, required: false, description: `pos_mode=true\u306B\u3088\u3063\u3066\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u81EA\u52D5\u914D\u7F6E\u304C\u6709\u52B9\u306B\u306A\u3063\u3066\u3044\u308B\u5834\u5408\u306B\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7ACB\u3061\u4F4D\u7F6E\u5909\u5316\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u884C\u3046\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pos_change_time`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u4F4D\u7F6E\u3092\u81EA\u52D5\u3067\u8ABF\u6574\u3059\u308B\u969B\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `talk_focus`, required: false, description: `\u73FE\u5728\u8A71\u3057\u3066\u3044\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7ACB\u3061\u7D75\u3092\u76EE\u7ACB\u305F\u305B\u308B\u6F14\u51FA\u3092\u6709\u52B9\u306B\u3059\u308B\u305F\u3081\u306E\u8A2D\u5B9A\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002brightness(\u660E\u5EA6)\u3001blur(\u307C\u304B\u3057)\u3001none(\u7121\u52B9) \u73FE\u5728\u8AB0\u304C\u8A71\u3057\u3066\u3044\u308B\u304B\u306E\u6307\u5B9A\u306F[chara_ptext]\u30BF\u30B0\u3082\u3057\u304F\u306F\u305D\u306E\u7701\u7565\u8868\u8A18\u3067\u3042\u308B#akane\u306E\u3088\u3046\u306A\u8A18\u8FF0\u3067\u884C\u3044\u307E\u3059\u3002` },
      { name: `brightness_value`, required: false, description: `talk_focus=brightness\u306E\u5834\u5408\u306E\u3001\u8A71\u3057\u3066\u3044\u306A\u3044\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u660E\u5EA6\u30920\u301C100\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F60\u3002\u3064\u307E\u308A\u3001\u8A71\u3057\u3066\u3044\u306A\u3044\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u3061\u3087\u3063\u3068\u6697\u304F\u3057\u307E\u3059\u3002` },
      { name: `blur_value`, required: false, description: `talk_focus=blur\u306E\u5834\u5408\u306E\u3001\u8A71\u3057\u3066\u3044\u306A\u3044\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u307C\u304B\u3057\u5EA6\u5408\u3092\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F2\u3002\u6570\u5024\u304C\u5927\u304D\u304F\u306A\u308B\u307B\u3069\u5F37\u304F\u307C\u3051\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `talk_anim`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u8A71\u3057\u59CB\u3081\u308B\u3068\u304D\u306B\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7ACB\u3061\u7D75\u306B\u30D4\u30E7\u30F3\u3068\u8DF3\u306D\u308B\u3088\u3046\u306A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6F14\u51FA\u3092\u81EA\u52D5\u3067\u52A0\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u8A2D\u5B9A\u3067\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002up\uFF08\u4E0A\u306B\u8DF3\u306D\u308B\uFF09\u3001down(\u4E0B\u306B\u6C88\u3080)\u3001zoom\uFF08\u62E1\u5927\uFF09\u3001none(\u7121\u52B9)` },
      { name: `talk_anim_time`, required: false, description: `talk_anim\u304C\u6709\u52B9\u306A\u5834\u5408\u306E\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `talk_anim_value`, required: false, description: `talk_anim\u304C\u6709\u52B9\u306A\u5834\u5408\u306E\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u79FB\u52D5\u91CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `talk_anim_zoom_rate`, required: false, description: `talk_anim\u3067zoom\u3092\u4F7F\u7528\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u62E1\u5927\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F1.2` },
      { name: `effect`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u4F4D\u7F6E\u3092\u5165\u308C\u66FF\u308F\u308B\u969B\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\uFF08\u52D5\u304D\u65B9\uFF09\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\u3002jswingdefeaseInQuadeaseOutQuadeaseInOutQuadeaseInCubiceaseOutCubiceaseInOutCubiceaseInQuarteaseOutQuarteaseInOutQuarteaseInQuinteaseOutQuinteaseInOutQuinteaseInSineeaseOutSineeaseInOutSineeaseInExpoeaseOutExpoeaseInOutExpoeaseInCirceaseOutCirceaseInOutCirceaseInElasticeaseOutElasticeaseInOutElasticeaseInBackeaseOutBackeaseInOutBackeaseInBounceeaseOutBounceeaseInOutBounce` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_config pos_mode="" ptext="" time="" memory="" anim="" pos_change_time="" talk_focus="" brightness_value="" blur_value="" talk_anim="" talk_anim_time="" talk_anim_value="" talk_anim_zoom_rate="" effect="" cond=""]`
  }],
  [`chara_delete`, {
    name: `chara_delete`,
    description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u5B9A\u7FA9\u60C5\u5831\u3092\u524A\u9664\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_delete name="" cond=""]`
  }],
  [`chara_face`, {
    name: `chara_face`,
    description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u8868\u60C5\u753B\u50CF\u3092\u767B\u9332\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u8868\u60C5\u3092\u767B\u9332\u3059\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u540D\u524D\u3002[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `face`, required: true, description: `\u767B\u9332\u3059\u308B\u8868\u60C5\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002happyangry\u306A\u3069\u3001\u81EA\u5206\u304C\u308F\u304B\u308A\u3084\u3059\u3044\u3082\u306E\u3092\u81EA\u7531\u306B\u3064\u3051\u307E\u3057\u3087\u3046\u3002` },
      { name: `storage`, required: true, description: `\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306Fdata/fgimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_face name="" face="" storage="" cond=""]`
  }],
  [`chara_hide`, {
    name: `chara_hide`,
    description: `[chara_show]\u30BF\u30B0\u3067\u8868\u793A\u3057\u305F\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u9000\u5834\u3055\u305B\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `\u524A\u9664\u5BFE\u8C61\u306E\u30EC\u30A4\u30E4\u3002[chara_show]\u3067\u306B\u30EC\u30A4\u30E4\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u3053\u3053\u3067\u3082\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pos_mode`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7ACB\u3061\u4F4D\u7F6E\u81EA\u52D5\u8ABF\u6574\u304C\u6709\u52B9\u306A\u5834\u5408\u306B\u3001\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306Bfalse\u3092\u6307\u5B9A\u3059\u308B\u3068\u9000\u5834\u5F8C\u306B\u7ACB\u3061\u4F4D\u7F6E\u306E\u8ABF\u6574\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_hide name="" time="" wait="" layer="" pos_mode="" cond=""]`
  }],
  [`chara_hide_all`, {
    name: `chara_hide_all`,
    description: `[chara_show]\u30BF\u30B0\u3067\u8868\u793A\u3057\u305F\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u5168\u54E1\u9000\u5834\u3055\u305B\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `\u524A\u9664\u5BFE\u8C61\u306E\u30EC\u30A4\u30E4\u3002[chara_show]\u3067\u306B\u30EC\u30A4\u30E4\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u3053\u3053\u3067\u3082\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_hide_all time="" wait="" layer="" cond=""]`
  }],
  [`chara_layer`, {
    name: `chara_layer`,
    description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u8868\u60C5\u3092\u5DEE\u5206\u30D1\u30FC\u30C4\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002
\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30D1\u30FC\u30C4\u306F\u4E00\u756A\u6700\u521D\u306B\u767B\u9332\u3057\u305F\u3082\u306E\u306B\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30D1\u30FC\u30C4\u3092\u767B\u9332\u3059\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u540D\u524D\u3002[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `part`, required: true, description: `\u30D1\u30FC\u30C4\u3068\u3057\u3066\u767B\u9332\u3059\u308B\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u76EE\u3068\u3044\u3046\u30D1\u30FC\u30C4\u3092part\u3092\u767B\u9332\u3057\u3066\u304A\u304D\u3001\u3053\u306Epart\u306E\u4E2D\u3067\u4ED6\u306E\u5DEE\u5206\u3092\u3044\u304F\u3064\u3067\u3082\u767B\u9332\u3067\u304D\u307E\u3059\u3002` },
      { name: `id`, required: true, description: `\u30D1\u30FC\u30C4\u306E\u4E2D\u306E\u5DEE\u5206\u3092\u8B58\u5225\u3059\u308B\u305F\u3081\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F8B\u3048\u3070\u76EE\u3068\u3044\u3046part\u306E\u4E2D\u3067\u7B11\u9854\u306E\u76EE\u6CE3\u3044\u3066\u308B\u76EE\u306E\u3088\u3046\u306Bid\u3092\u5206\u3051\u3066\u767B\u9332\u3067\u304D\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `\u5DEE\u5206\u3068\u3057\u3066\u767B\u9332\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u753B\u50CF\u306Fdata/fgimage\u30D5\u30A9\u30EB\u30C0\u306E\u4E2D\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u305D\u306E\u30D1\u30FC\u30C4\u304C\u306A\u3044\u72B6\u614B\u3092\u8868\u73FE\u3067\u304D\u307E\u3059\u3002` },
      { name: `zindex`, required: false, description: `\u3053\u306E\u30D1\u30FC\u30C4\u304C\u4ED6\u306E\u30D1\u30FC\u30C4\u3068\u91CD\u306A\u3063\u305F\u6642\u306B\u3069\u3061\u3089\u304C\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u308B\u304B\u3092\u6C7A\u5B9A\u3059\u308B\u305F\u3081\u306E\u512A\u5148\u5EA6\u3092\u6570\u5B57\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u6570\u5B57\u304C\u5927\u304D\u3044\u307B\u3069\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u4E00\u5EA6\u767B\u9332\u3057\u3066\u304A\u3051\u3070\u3001\u540C\u30D1\u30FC\u30C4\u306E\u4ED6\u306E\u5DEE\u5206\u306B\u3082\u9069\u7528\u3055\u308C\u307E\u3059\u3002` },
      { name: `frame_image`, required: false, description: `\u30D1\u30FC\u30C4\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\uFF08\u76EE\u30D1\u30C1\u7B49\uFF09\u306E\u5DEE\u5206\u753B\u50CF\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002storage\u306B\u6307\u5B9A\u3057\u305F\u753B\u50CF\u3068\u62E1\u5F35\u5B50\u304C\u540C\u3058\u3067\u3042\u308B\u5834\u5408\u3001\u62E1\u5F35\u5B50\u3092\u7701\u7565\u3057\u3066\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\uFF08\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u306F\u3001storage\u306B\u6307\u5B9A\u3057\u305F\u753B\u50CF\u3068\u540C\u3058\u5834\u6240\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u306E\u30D5\u30A1\u30A4\u30EB\u540D\u304C\u7A7A\u767D\u8A18\u53F7\u304B\u3089\u59CB\u307E\u3063\u3066\u3044\u3066\u306F\u3044\u3051\u307E\u305B\u3093\uFF09` },
      { name: `frame_time`, required: false, description: `\u30D1\u30FC\u30C4\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5404\u30B3\u30DE\u306E\u6642\u9593\u3002\u30DF\u30EA\u79D2\u5358\u4F4D\u306E\u6570\u5024\u3092\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002storage\u306B\u6307\u5B9A\u3057\u305F\u753B\u50CF\u306E\u5206\u3082\u542B\u3081\u3066\u6307\u5B9A\u3057\u307E\u3059\u3002\u30CF\u30A4\u30D5\u30F3\u3067\u533A\u5207\u3063\u305F2\u500B1\u7D44\u306E\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u7BC4\u56F2\u304B\u3089\u30E9\u30F3\u30C0\u30E0\u3067\u6C7A\u5B9A\u3055\u308C\u308B\u3088\u3046\u306B\u3067\u304D\u307E\u3059\u3002\u76EE\u30D1\u30C1\u306E\u6642\u9593\u306B\u30D0\u30E9\u3064\u304D\u3092\u3082\u305F\u305B\u305F\u3044\u5834\u5408\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3057\u305F\u5834\u5408\u3001\u6A19\u6E96\u7684\u306A\u76EE\u30D1\u30C1\u306E\u983B\u5EA6\u30FB\u901F\u5EA6\u3092\u60F3\u5B9A\u3057\u30014000-8000,50,50,50...\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002` },
      { name: `frame_direction`, required: false, description: `\u6700\u5F8C\u306E\u30B3\u30DE\u3092\u8868\u793A\u3057\u305F\u3042\u3068\u3059\u3050\u6700\u521D\u306E\u30B3\u30DE\u306B\u623B\u308B\u306E\u3067\u306F\u306A\u304F\u9006\u9806\u306B\u30B3\u30DE\u3092\u8868\u793A\u3057\u3066\u3044\u304F\uFF080\u21921\u21922\u21921\u21920\uFF09\u3088\u3046\u306B\u3057\u305F\u3044\u5834\u5408\u3001alternate\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `frame_loop`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u30EB\u30FC\u30D7\u3055\u305B\u305A\u306B\u6700\u5F8C\u306E\u30B3\u30DE\u3067\u6B62\u3081\u305F\u3044\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `lip_image`, required: false, description: `\u53E3\u30D1\u30AF\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3002frame_image\u3068\u540C\u3058\u3088\u3046\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002\u306A\u304A\u3001frame_image\u3068lip_image\u3092\u4F75\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u306B\u3088\u308B\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u3092\u884C\u3046\u5834\u5408\u306B\u306F\u3001\u3088\u308A\u53E3\u304C\u9589\u3058\u3066\u3044\u308B\u753B\u50CF\u304B\u3089\u9806\u306B\u66F8\u304D\u307E\u3059\u3002` },
      { name: `lip_time`, required: false, description: `\u53E3\u30D1\u30AF\u306E\u753B\u50CF\u3092\u5207\u308A\u66FF\u3048\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3057\u305F\u5834\u5408\u306F50\u30DF\u30EA\u79D2\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `lip_type`, required: false, description: `\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\uFF08\u30DC\u30A4\u30B9\uFF09\u306B\u3088\u308B\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u3092\u884C\u3044\u305F\u3044\u5834\u5408\u306Fvoice\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u30C6\u30AD\u30B9\u30C8\u30D9\u30FC\u30B9\u306E\u53E3\u30D1\u30AF\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `lip_volume`, required: false, description: `\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u306B\u3088\u308B\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u3092\u884C\u3046\u5834\u5408\u306B\u3001\u753B\u50CF\u3092\u5207\u308A\u66FF\u3048\u308B\u97F3\u91CF\u306E\u533A\u5207\u308A\u3092\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u97F3\u91CF\u306F\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u518D\u751F\u4E2D\u306B\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306B\u89E3\u6790\u3055\u308C\u30010\uFF5E100\u3067\u8868\u3055\u308C\u307E\u3059\u3002\u6570\u5024\u306Flip_image\u3067\u6307\u5B9A\u3057\u305F\u753B\u50CF\u306E\u6570\u3060\u3051\u5FC5\u8981\u3067\u3059\u3002\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u7701\u7565\u3057\u3066\u3082\u304B\u307E\u3044\u307E\u305B\u3093\u304C\u3001\u9055\u548C\u611F\u304C\u3042\u308B\u5834\u5408\u306F\u5FAE\u8ABF\u6574\u3092\u63A8\u5968\u3057\u307E\u3059\u3002` },
      { name: `lip_se_buf`, required: false, description: `\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u306E\u5BFE\u8C61\u3068\u3059\u308B[playse]\u306Ebuf\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u6307\u5B9A\u3057\u305Fbuf\u3067[playse]\u304C\u5B9F\u884C\u3055\u308C\u305F\u3068\u304D\u3001chara_ptext\u306B\u3053\u306E\u30AD\u30E3\u30E9\u306E\u540D\u524D\u304C\u5165\u3063\u3066\u3044\u308B\u306A\u3089\u3001\u3053\u306E\u30AD\u30E3\u30E9\u306E\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u3092\u958B\u59CB\u3057\u307E\u3059\u3002` },
      { name: `lip_se_buf_all`, required: false, description: `\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u306E\u5BFE\u8C61\u3068\u3059\u308B[playse]\u306Ebuf\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u6307\u5B9A\u3055\u308C\u305Fbuf\u3067\u5B9F\u884C\u3055\u308C\u305F\u3059\u3079\u3066\u306E[playse]\u306B\u3064\u3044\u3066\u3001\u3053\u306E\u30AD\u30E3\u30E9\u306E\u30EA\u30C3\u30D7\u30B7\u30F3\u30AF\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\uFF08chara_ptext\u306B\u95A2\u4FC2\u306A\u304F\uFF09` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_layer name="" part="" id="" storage="" zindex="" frame_image="" frame_time="" frame_direction="" frame_loop="" lip_image="" lip_time="" lip_type="" lip_volume="" lip_se_buf="" lip_se_buf_all="" cond=""]`
  }],
  [`chara_layer_mod`, {
    name: `chara_layer_mod`,
    description: `[chara_layer]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305F\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30D1\u30FC\u30C4\u5B9A\u7FA9\u306E\u5909\u66F4\u5BFE\u8C61\u3068\u306A\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u540D\u524D\u3002[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `part`, required: true, description: `\u5909\u66F4\u3057\u305F\u3044\u30D1\u30FC\u30C4\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `zindex`, required: false, description: `\u3053\u306E\u30D1\u30FC\u30C4\u304C\u4ED6\u306E\u30D1\u30FC\u30C4\u3068\u91CD\u306A\u3063\u305F\u6642\u306B\u3069\u3061\u3089\u304C\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u308B\u304B\u3092\u6C7A\u5B9A\u3059\u308B\u305F\u3081\u306E\u512A\u5148\u5EA6\u3092\u6570\u5B57\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u6570\u5B57\u304C\u5927\u304D\u3044\u307B\u3069\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u3053\u306E\u8A2D\u5B9A\u306F\u5373\u6642\u53CD\u6620\u3055\u308C\u307E\u305B\u3093\u3002\u6B21\u56DE\u8868\u793A\u6642\u306B\u53CD\u6620\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_layer_mod name="" part="" zindex="" cond=""]`
  }],
  [`chara_mod`, {
    name: `chara_mod`,
    description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u753B\u50CF\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u8868\u60C5\u5909\u66F4\u306B\u6D3B\u7528\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `[chara_face]\u3067\u5B9A\u7FA9\u3057\u305Fface\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `[chara_mod]\u30BF\u30B0\u3067\u8868\u60C5\u3092\u5909\u3048\u308B\u969B\u306E\u30AF\u30ED\u30B9\u30D5\u30A7\u30FC\u30C9\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u77AC\u9593\u7684\u306B\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `\u5909\u66F4\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306Fdata/fgimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `reflect`, required: false, description: `\u753B\u50CF\u3092\u5DE6\u53F3\u53CD\u8EE2\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u3092\u5DE6\u53F3\u53CD\u8EE2\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u8868\u60C5\u5909\u66F4\u306E\u30AF\u30ED\u30B9\u30D5\u30A7\u30FC\u30C9\u304C\u7D42\u308F\u308B\u306E\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cross`, required: false, description: `\u30AF\u30ED\u30B9\u30D5\u30A7\u30FC\u30C9\u306E\u65B9\u5F0F\u3092true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u65E7\u753B\u50CF\u304C\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u3055\u305B\u308B\u306E\u3068\u540C\u6642\u306B\u65B0\u753B\u50CF\u3092\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u3055\u305B\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u65E7\u753B\u50CF\u3092\u6B8B\u3057\u305F\u307E\u307E\u305D\u306E\u4E0A\u306B\u65B0\u753B\u50CF\u3092\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u3055\u305B\u307E\u3059\u3002 true\u306E\u5834\u5408\u3001\u30AF\u30ED\u30B9\u30D5\u30A7\u30FC\u30C9\u306E\u77AC\u9593\u306B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u82E5\u5E72\u900F\u3051\u3066\u80CC\u666F\u304C\u898B\u3048\u3066\u3057\u307E\u3046\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u305D\u306E\u3088\u3046\u306A\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u900F\u3051\u3055\u305B\u305A\u306B\u8868\u60C5\u5909\u66F4\u304C\u3067\u304D\u307E\u3059\u3002\u305F\u3060\u3057\u900F\u3051\u306A\u304F\u306F\u306A\u308A\u307E\u3059\u304C\u3001\u30B7\u30EB\u30A8\u30C3\u30C8\u304C\u5909\u308F\u308B\u3088\u3046\u306A\u8868\u60C5\u5909\u66F4\u306E\u5834\u5408\u306F\u9055\u548C\u611F\u304C\u51FA\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_mod name="" face="" time="" storage="" reflect="" wait="" cross="" cond=""]`
  }],
  [`chara_move`, {
    name: `chara_move`,
    description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7ACB\u3061\u4F4D\u7F6E\u3084\u5927\u304D\u3055\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u6307\u5B9A\u6642\u9593\u3092\u304B\u3051\u3066\u30A2\u30CB\u30E1\u2015\u30B7\u30E7\u30F3\u3055\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u5909\u66F4\u5F8C\u306E\u6A2A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002left="+=200"left="-=200"\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u300C\u3044\u307E\u306E\u5834\u6240\u304B\u3089\u3069\u308C\u3060\u3051\u52D5\u304F\u304B\u300D\u3068\u3044\u3046\u76F8\u5BFE\u6307\u5B9A\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `top`, required: false, description: `\u5909\u66F4\u5F8C\u306E\u7E26\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002top="+=100"top="-=100"\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u300C\u3044\u307E\u306E\u5834\u6240\u304B\u3089\u3069\u308C\u3060\u3051\u52D5\u304F\u304B\u300D\u3068\u3044\u3046\u76F8\u5BFE\u6307\u5B9A\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u5909\u66F4\u5F8C\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u5909\u66F4\u5F8C\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `anim`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u304B\u3069\u3046\u304B\u3002true\u304Bfalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u4F4D\u7F6E\u3092\u5909\u66F4\u3059\u308B\u3068\u304D\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u5834\u5408\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u52B9\u679C\u306F[chara_config]\u306Eeffect\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u53C2\u7167\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u304Bfalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u5909\u5316\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002jswingdefeaseInQuadeaseOutQuadeaseInOutQuadeaseInCubiceaseOutCubiceaseInOutCubiceaseInQuarteaseOutQuarteaseInOutQuarteaseInQuinteaseOutQuinteaseInOutQuinteaseInSineeaseOutSineeaseInOutSineeaseInExpoeaseOutExpoeaseInOutExpoeaseInCirceaseOutCirceaseInOutCirceaseInElasticeaseOutElasticeaseInOutElasticeaseInBackeaseOutBackeaseInOutBackeaseInBounceeaseOutBounceeaseInOutBounce` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_move name="" left="" top="" width="" height="" anim="" time="" wait="" effect="" cond=""]`
  }],
  [`chara_new`, {
    name: `chara_new`,
    description: `\u767B\u5834\u3059\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u60C5\u5831\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u7BA1\u7406\u3059\u308B\u305F\u3081\u306E\u540D\u524D\u3092\u534A\u89D2\u82F1\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u306Ename\u306F\u5FC5\u305A\u30E6\u30CB\u30FC\u30AF\uFF08\u4E00\u610F\u3001\u56FA\u6709\uFF09\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\u3059\u306A\u308F\u3061\u3001\u4ED6\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3068name\u304C\u91CD\u8907\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002\u307E\u305F[ptext][image]\u306A\u3069\u306E\u30BF\u30B0\u306B\u6307\u5B9A\u3059\u308Bname\u3068\u3082\u91CD\u8907\u3057\u3066\u306F\u3044\u3051\u307E\u305B\u3093\u3002` },
      { name: `storage`, required: true, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306Fdata/fgimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u753B\u50CF\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u753B\u50CF\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `reflect`, required: false, description: `\u753B\u50CF\u3092\u5DE6\u53F3\u53CD\u8EE2\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u3092\u5DE6\u53F3\u53CD\u8EE2\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u540D\u524D\u3092\u8868\u793A\u3059\u308B\u3068\u304D\u306E\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `jname`, required: false, description: `\u3053\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u30CD\u30FC\u30E0\u30B9\u30DA\u30FC\u30B9\u306B\u8868\u793A\u3059\u308B\u5834\u5408\u3001\u9069\u7528\u3059\u308B\u540D\u79F0\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001#yuko \u3068\u6307\u5B9A\u3059\u308B\u3068\u3000\u30E1\u30C3\u30BB\u30FC\u30B8\u30A8\u30EA\u30A2\u306B\u3000\u3086\u3046\u3053\u3000\u3068\u8868\u793A\u3067\u304D\u307E\u3059` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_new name="" storage="" width="" height="" reflect="" color="" jname="" cond=""]`
  }],
  [`chara_part`, {
    name: `chara_part`,
    description: `[chara_layer]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305F\u30D1\u30FC\u30C4\u5DEE\u5206\u306E\u5B9F\u969B\u306E\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `[chara_new]\u3067\u6307\u5B9A\u3057\u305F\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D1\u30FC\u30C4\u304C\u8868\u793A\u3055\u308C\u308B\u307E\u3067\u306E\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `allow_storage`, required: false, description: `true\u307E\u305F\u306Ffalse\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001part\u306E\u6307\u5B9A\u306Bid\u3067\u306F\u306A\u304F\u76F4\u63A5\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u306Ffgimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_part name="" time="" wait="" allow_storage="" cond=""]`
  }],
  [`chara_part_reset`, {
    name: `chara_part_reset`,
    description: `[chara_part]\u3067\u5DEE\u5206\u3092\u5909\u66F4\u3057\u305F\u969B\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u8868\u60C5\u306B\u623B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u8868\u793A\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u306F\u5373\u6642\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u623B\u308A\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `[chara_new]\u3067\u6307\u5B9A\u3057\u305F\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `part`, required: false, description: `\u7279\u5B9A\u306Epart\u306B\u7D5E\u3063\u3066\u30EA\u30BB\u30C3\u30C8\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u6307\u5B9A\u304C\u53EF\u80FD\u3067\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u30D1\u30FC\u30C4\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u306B\u623B\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_part_reset name="" part="" cond=""]`
  }],
  [`chara_ptext`, {
    name: `chara_ptext`,
    description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u540D\u524D\u3092\u8868\u793A\u3059\u308B\u305F\u3081\u306E\u30BF\u30B0\u3067\u3059\u3002\u3044\u307E\u3057\u3083\u3079\u3063\u3066\u3044\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u540D\u524D\u3092\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0A\u90E8\u306B\u51FA\u3059\u306E\u304C\u4E3B\u306A\u4F7F\u3044\u65B9\u306B\u306A\u308B\u3067\u3057\u3087\u3046\u3002face\u5C5E\u6027\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u540D\u524D\u3092\u51FA\u3059\u3068\u540C\u6642\u306B\u305D\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u8868\u60C5\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `[chara_new]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305Fname\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u305D\u308C\u3092\u3072\u3082\u3064\u3044\u305Fjname\u304C\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u305D\u306Ename\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u5B9A\u7FA9\u304C\u5B58\u5728\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u3001name\u306B\u6307\u5B9A\u3055\u308C\u305F\u5185\u5BB9\u304C\u305D\u306E\u307E\u307E\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `[chara_face]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305Fface\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_ptext name="" face="" cond=""]`
  }],
  [`chara_show`, {
    name: `chara_show`,
    description: `\u5B9A\u7FA9\u3057\u3066\u304A\u3044\u305F\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u753B\u9762\u306B\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `[chara_new]\u3067\u5B9A\u7FA9\u3057\u305Fname\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u6642\u9593\u3092\u304B\u3051\u3066\u767B\u5834\u3057\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3092\u914D\u7F6E\u3059\u308B\u30EC\u30A4\u30E4\u30920\u4EE5\u4E0A\u306E\u6574\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `zindex`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u91CD\u306A\u308A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u3053\u3067\u6307\u5B9A\u3057\u305F\u5024\u304C\u5927\u304D\u3044\u307B\u3046\u304C\u524D\u306B\u8868\u793A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5F8C\u306B\u767B\u5834\u3059\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u524D\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002"` },
      { name: `depth`, required: false, description: `zindex\u304C\u540C\u4E00\u306A\u5834\u5408\u306E\u91CD\u306A\u308A\u3092front(\u6700\u524D\u9762)\u3001back(\u6700\u5F8C\u9762) \u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `fore\u304Bback\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u767B\u5834\u5B8C\u4E86\u3092\u5F85\u3061\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `[chara_face]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305Fface\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `\u5909\u66F4\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306Fdata/fgimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `reflect`, required: false, description: `\u753B\u50CF\u3092\u5DE6\u53F3\u53CD\u8EE2\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u3092\u5DE6\u53F3\u53CD\u8EE2\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7E26\u5E45\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u6A2A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u81EA\u52D5\u914D\u7F6E\u304C\u6709\u52B9\u3067\u3042\u3063\u3066\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `top`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u306E\u7E26\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u81EA\u52D5\u914D\u7F6E\u304C\u6709\u52B9\u3067\u3042\u3063\u3066\u3082\u7121\u52B9\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[chara_show name="" time="" layer="" zindex="" depth="" page="" wait="" face="" storage="" reflect="" width="" height="" left="" top="" cond=""]`
  }],
  [`check_web_patch`, {
    name: `check_web_patch`,
    description: `V470\u4EE5\u964D\u3067\u4F7F\u7528\u53EF\u3002PC\u30A2\u30D7\u30EA\u3068\u3057\u3066\u914D\u5E03\u3057\u3066\u3044\u308B\u5834\u5408\u306E\u307F\u6709\u52B9\u3067\u3059\u3002`,
    params: [
      { name: `url`, required: true, description: `\u30D1\u30C3\u30C1\u306Ejson\u30D5\u30A1\u30A4\u30EB\u306EURL\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[check_web_patch url="" cond=""]`
  }],
  [`checkpoint`, {
    name: `checkpoint`,
    description: `[rollback]\u30BF\u30B0\u3067\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u306E\u5730\u70B9\u3078\u623B\u3063\u3066\u304F\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u3092\u4F5C\u308A\u3059\u304E\u308B\u3068\u30B2\u30FC\u30E0\u306E\u52D5\u4F5C\u304C\u91CD\u304F\u306A\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002
\u5FC5\u8981\u6700\u4F4E\u9650\u306B\u7559\u3081\u3066\u304A\u304D\u3001\u4E0D\u8981\u306B\u306A\u3063\u305F\u3089[clear_checkpoint]\u30BF\u30B0\u3067\u524A\u9664\u3057\u307E\u3057\u3087\u3046\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[checkpoint name="" cond=""]`
  }],
  [`clear_checkpoint`, {
    name: `clear_checkpoint`,
    description: `[checkpoint]\u30BF\u30B0\u3092\u30AF\u30EA\u30A2\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u306F\u4FBF\u5229\u3067\u3059\u304C\u4E0D\u7528\u610F\u306B\u5897\u3084\u3057\u3059\u304E\u308B\u3068\u30B2\u30FC\u30E0\u306E\u52D5\u4F5C\u306B\u5F71\u97FF\u3057\u307E\u3059\u3002
\u4E0D\u8981\u306B\u306A\u3063\u305F\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u306F\u3053\u307E\u3081\u306B\u524A\u9664\u3057\u3066\u304A\u304D\u307E\u3057\u3087\u3046\u3002`,
    params: [
      { name: `name`, required: false, description: `\u524A\u9664\u3059\u308B\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u3057\u306A\u3044\u5834\u5408\u306F\u3059\u3079\u3066\u306E\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u304C\u524A\u9664\u3055\u308C\u307E\u3059` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[clear_checkpoint name="" cond=""]`
  }],
  [`clearfix`, {
    name: `clearfix`,
    description: `fix\u30EC\u30A4\u30E4\u30FC\u306E\u8981\u7D20\u3092\u6D88\u53BB\u3057\u307E\u3059\u3002name\u5C5E\u6027\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u7279\u5B9A\u306E\u8981\u7D20\u306E\u307F\u3092\u6D88\u53BB\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u8A72\u5F53\u3059\u308B\u8981\u7D20\u3060\u3051\u3092\u6D88\u53BB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[clearfix name="" cond=""]`
  }],
  [`clearstack`, {
    name: `clearstack`,
    description: `\u30B7\u30B9\u30C6\u30E0\u304C\u7BA1\u7406\u3059\u308B\u30B9\u30BF\u30C3\u30AF\u3092\u6D88\u53BB\u3057\u307E\u3059\u3002\u5E30\u308B\u3079\u304D\u30B9\u30BF\u30C3\u30AF\u304C\u306A\u3044\u5834\u9762\uFF08\u30BF\u30A4\u30C8\u30EB\u3084\u7AE0\u306E\u59CB\u307E\u308A\u306A\u3069\u3001\u304D\u308A\u306E\u826F\u3044\u5834\u9762\uFF09\u3067\u3053\u306E\u30BF\u30B0\u3092\u914D\u7F6E\u3057\u3066\u304A\u304F\u3053\u3068\u3092\u30AA\u30B9\u30B9\u30E1\u3057\u307E\u3059\u3002`,
    params: [
      { name: `stack`, required: false, description: `call\u3001if\u3001macro\u306E\u3044\u305A\u308C\u304B\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7279\u5B9A\u306E\u30B9\u30BF\u30C3\u30AF\u306E\u307F\u524A\u9664\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u3066\u306E\u30B9\u30BF\u30C3\u30AF\u3092\u524A\u9664\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1Aanim\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002anim\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u73FE\u5728\u5B9F\u884C\u4E2D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6570\u3092\u5F37\u5236\u7684\u306B\u30BC\u30ED\u306B\u3057\u3066\u3001[wa]\u3067\u78BA\u5B9F\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u3080\u3088\u3046\u306B\u3067\u304D\u307E\u3059\u3002\u306A\u304A\u3001stack\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u306F\u3053\u306E\u64CD\u4F5C\u306F\u884C\u308F\u308C\u307E\u305B\u3093\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[clearstack stack="" cond=""]`
  }],
  [`clearsysvar`, {
    name: `clearsysvar`,
    description: `\u30B7\u30B9\u30C6\u30E0\u5909\u6570\u3092\u5168\u6D88\u53BB\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[clearsysvar cond=""]`
  }],
  [`clearvar`, {
    name: `clearvar`,
    description: `\u5909\u6570\u3092\u6D88\u53BB\u3057\u307E\u3059\u3002\u7279\u5B9A\u306E\u5909\u6570\u3060\u3051\u3092\u6D88\u53BB\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `exp`, required: false, description: `\u6D88\u53BB\u3059\u308B\u5909\u6570\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002f.name\u3084sf.flag\u306E\u3088\u3046\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002nameflag\u3067\u306F\u52D5\u4F5C\u3057\u307E\u305B\u3093\u3002 \u7701\u7565\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u5909\u6570\u304C\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[clearvar exp="" cond=""]`
  }],
  [`clickable`, {
    name: `clickable`,
    description: `\u900F\u660E\u306A\u30AF\u30EA\u30C3\u30AF\u53EF\u80FD\u9818\u57DF\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `width`, required: true, description: `\u9818\u57DF\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `height`, required: true, description: `\u9818\u57DF\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `x`, required: false, description: `\u9818\u57DF\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u306EX\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `y`, required: false, description: `\u9818\u57DF\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u306EY\u5EA7\u6A19\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `borderstyle`, required: false, description: `\u9818\u57DF\u306B\u8868\u793A\u3059\u308B\u7DDA\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7DDA\u306E\u592A\u3055:\u7DDA\u306E\u7A2E\u985E:\u7DDA\u306E\u8272\u306E\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u3067\u8A18\u8FF0\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u5404\u9805\u76EE\u306FCSS\u306E\u8A18\u6CD5\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002\u7DDA\u306E\u7A2E\u985E\u306Fsoliddoublegroovedashed dotted\u306A\u3069\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u8868\u793A\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `opacity`, required: false, description: `\u9818\u57DF\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u3067\u3059\u3002` },
      { name: `mouseopacity`, required: false, description: `\u9818\u57DF\u306B\u30DE\u30A6\u30B9\u304C\u4E57\u3063\u305F\u3068\u304D\u306E\u4E0D\u900F\u660E\u5EA6\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[clickable width="" height="" x="" y="" borderstyle="" color="" opacity="" mouseopacity="" storage="" target="" cond=""]`
  }],
  [`close`, {
    name: `close`,
    description: `PC\u30A2\u30D7\u30EA\u306E\u5834\u5408\u3001\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u9589\u3058\u307E\u3059\u3002
\u30D6\u30E9\u30A6\u30B6\u30B2\u30FC\u30E0\u306E\u5834\u5408\u3001\u30BF\u30D6\u3092\u9589\u3058\u307E\u3059\u3002`,
    params: [
      { name: `ask`, required: false, description: `\u7D42\u4E86\u306E\u78BA\u8A8D\u3092\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[close ask="" cond=""]`
  }],
  [`closeconfirm_off`, {
    name: `closeconfirm_off`,
    description: `\u3053\u306E\u30BF\u30B0\u3092\u901A\u904E\u3059\u308B\u3068\u3001\u30B2\u30FC\u30E0\u304C\u300C\u672A\u4FDD\u5B58\u72B6\u614B\u300D\u306E\u3068\u304D\u306B\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u30B2\u30FC\u30E0\u3092\u9589\u3058\u3088\u3046\u3068\u3057\u3066\u3082\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u51FA\u306A\u304F\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[closeconfirm_off cond=""]`
  }],
  [`closeconfirm_on`, {
    name: `closeconfirm_on`,
    description: `\u3053\u306E\u30BF\u30B0\u3092\u901A\u904E\u3057\u3066\u304B\u3089\u306F\u3001\u30BF\u30B0\u304C\u9032\u884C\u3059\u308B\u5EA6\u306B\u30B2\u30FC\u30E0\u304C\u300C\u672A\u4FDD\u5B58\u72B6\u614B\u300D\u306B\u306A\u308A\u307E\u3059\u3002\u30B2\u30FC\u30E0\u304C\u300C\u672A\u4FDD\u5B58\u72B6\u614B\u300D\u306E\u3068\u304D\u306B\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u30B2\u30FC\u30E0\u3092\u9589\u3058\u3088\u3046\u3068\u3059\u308B\u3068\u3001\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u304C\u51FA\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[closeconfirm_on cond=""]`
  }],
  [`cm`, {
    name: `cm`,
    description: `\u3059\u3079\u3066\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u306E\u6587\u5B57\u3092\u6D88\u53BB\u3057\u307E\u3059\u3002[button][glink][html]\u30BF\u30B0\u306A\u3069\u3067\u8868\u793A\u3057\u305F\u8981\u7D20\u3082\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[cm cond=""]`
  }],
  [`commit`, {
    name: `commit`,
    description: `[edit]\u3067\u8868\u793A\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u5165\u529B\u5185\u5BB9\u3092\u78BA\u5B9A\u3057\u3001name\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5909\u6570\u306B\u5024\u3092\u30BB\u30C3\u30C8\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[commit cond=""]`
  }],
  [`config_record_label`, {
    name: `config_record_label`,
    description: `\u65E2\u8AAD\u7BA1\u7406\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `color`, required: false, description: `\u65E2\u8AAD\u30C6\u30AD\u30B9\u30C8\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `skip`, required: false, description: `\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u672A\u8AAD\u30C6\u30AD\u30B9\u30C8\u3092\u30B9\u30AD\u30C3\u30D7\u3067\u304D\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u672A\u8AAD\u30C6\u30AD\u30B9\u30C8\u306B\u5230\u9054\u3057\u305F\u3068\u304D\u306B\u30B9\u30AD\u30C3\u30D7\u304C\u89E3\u9664\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[config_record_label color="" skip="" cond=""]`
  }],
  [`configdelay`, {
    name: `configdelay`,
    description: `\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u6587\u5B57\u306E\u8868\u793A\u901F\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002
\u3064\u307E\u308A\u3001[resetdelay]\u30BF\u30B0\u3092\u4F7F\u7528\u3057\u305F\u3068\u304D\u306B\u3053\u306E\u901F\u5EA6\u306B\u623B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002
\u30B3\u30F3\u30D5\u30A3\u30B0\u753B\u9762\u306A\u3069\u3067\u30B2\u30FC\u30E0\u5168\u4F53\u306E\u6587\u5B57\u901F\u5EA6\u3092\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u306B\u3053\u306E\u30BF\u30B0\u3092\u4F7F\u3044\u307E\u3059\u3002`,
    params: [
      { name: `speed`, required: false, description: `\u6587\u5B57\u306E\u8868\u793A\u901F\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u5C0F\u3055\u3044\u307B\u3069\u65E9\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u3053\u3067\u6307\u5B9A\u3057\u305F\u5024\u306F\u3001\u6B21\u306E1\u6587\u5B57\u3092\u8868\u793A\u3059\u308B\u307E\u3067\u306E\u6642\u9593\uFF08\u30DF\u30EA\u79D2\u5358\u4F4D\uFF09\u3068\u3057\u3066\u89E3\u91C8\u3055\u308C\u307E\u3059\u3002\u305F\u3068\u3048\u30701000\u3068\u6307\u5B9A\u3059\u308B\u30681\u79D2\u3054\u3068\u306B1\u6587\u5B57\u8868\u793A\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[configdelay speed="" cond=""]`
  }],
  [`ct`, {
    name: `ct`,
    description: `\u3059\u3079\u3066\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u306E\u6587\u5B57\u304C\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[ct cond=""]`
  }],
  [`current`, {
    name: `current`,
    description: `\u64CD\u4F5C\u5BFE\u8C61\u3068\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4EE5\u5F8C\u3001\u30C6\u30AD\u30B9\u30C8\u3084[font]\u30BF\u30B0\u3067\u306E\u6587\u5B57\u5C5E\u6027\u306E\u6307\u5B9A\u3001[l]\u30BF\u30B0\u7B49\u306E\u30AF\u30EA\u30C3\u30AF\u5F85\u3061\u306A\u3069\u306F\u3053\u306E\u30EC\u30A4\u30E4\u306B\u5BFE\u3057\u3066\u884C\u308F\u308C\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u64CD\u4F5C\u5BFE\u8C61\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u3001\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u307E\u305F\u306Fback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u30DA\u30FC\u30B8\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[current layer="" page="" cond=""]`
  }],
  [`cursor`, {
    name: `cursor`,
    description: `\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u306B\u753B\u50CF\u3092\u8A2D\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u306Fdata/image\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u4F7F\u7528\u53EF\u80FD\u306A\u753B\u50CF\u5F62\u5F0F\u306Fgifpngjpg\u3067\u3059\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u306B\u8A2D\u5B9A\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u753B\u50CF\u306Fdata/image\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002default\u3068\u6307\u5B9A\u3059\u308B\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30AB\u30FC\u30BD\u30EB\u306B\u623B\u305B\u307E\u3059\u3002` },
      { name: `x`, required: false, description: `\u6307\u5B9A\u3057\u305F\u6570\u5024\u306E\u5206\u3060\u3051\u3001\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u306B\u8A2D\u5B9A\u3059\u308B\u753B\u50CF\u3092\u5DE6\u5074\u306B\u305A\u3089\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `y`, required: false, description: `\u6307\u5B9A\u3057\u305F\u6570\u5024\u306E\u5206\u3060\u3051\u3001\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u306B\u8A2D\u5B9A\u3059\u308B\u753B\u50CF\u3092\u4E0A\u5074\u306B\u305A\u3089\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `type`, required: false, description: `\u30DC\u30BF\u30F3\u985E\u306B\u30DE\u30A6\u30B9\u3092\u8F09\u305B\u305F\u3068\u304D\u306E\u30AB\u30FC\u30BD\u30EB\u3092\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u3001\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306Bpointer\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `auto_hide`, required: false, description: `\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u4E00\u5B9A\u6642\u9593\u30DE\u30A6\u30B9\u64CD\u4F5C\u3092\u3057\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u3092\u81EA\u52D5\u3067\u975E\u8868\u793A\u306B\u3059\u308B\u305F\u3081\u306E\u8A2D\u5B9A\u3067\u3059\u3002true\u3067\u81EA\u52D5\u975E\u8868\u793A\u304C\u6709\u52B9\u3001false\u3067\u81EA\u52D5\u975E\u8868\u793A\u304C\u7121\u52B9\uFF08\u5E38\u306B\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u8868\u793A\uFF09\u306B\u306A\u308A\u307E\u3059\u3002\u307E\u305F\u30012000\u306E\u3088\u3046\u306B\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u306E\u81EA\u52D5\u975E\u8868\u793A\u3092\u6709\u52B9\u306B\u3057\u305F\u4E0A\u3067\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u3092\u975E\u8868\u793A\u306B\u3059\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `click_effect`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `e_width`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `e_opacity`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u6700\u521D\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `e_time`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u8868\u793A\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `e_color`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `e_blend`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u5408\u6210\u30E2\u30FC\u30C9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002[layermode]\u30BF\u30B0\u306Emode\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u540C\u3058\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u53EF\u80FD\u3067\u3059\u3002normal\u3084overlay\u306A\u3069\u3002` },
      { name: `e_scale`, required: false, description: `\u30AF\u30EA\u30C3\u30AF\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u62E1\u5927\u7387\u3092\u30D1\u30FC\u30BB\u30F3\u30C8\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u3070200\u3068\u6307\u5B9A\u3059\u308B\u3068\u3001\u30A8\u30D5\u30A7\u30AF\u30C8\u30B5\u30A4\u30BA\u304C\u6700\u7D42\u7684\u306B200%\u306B\u306A\u308B\u3088\u3046\u306B\u62E1\u5927\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[cursor storage="" x="" y="" type="" auto_hide="" click_effect="" e_width="" e_opacity="" e_time="" e_color="" e_blend="" e_scale="" cond=""]`
  }],
  [`deffont`, {
    name: `deffont`,
    description: `\u73FE\u5728\u64CD\u4F5C\u5BFE\u8C61\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u306B\u5BFE\u3059\u308B\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u30B9\u30BF\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `size`, required: false, description: `\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `color`, required: false, description: `\u6587\u5B57\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `bold`, required: false, description: `\u592A\u5B57\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `italic`, required: false, description: `\u30A4\u30BF\u30EA\u30C3\u30AF\u4F53\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002Web\u30D5\u30A9\u30F3\u30C8\u3082\u5229\u7528\u53EF\u80FD\u3002Web\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u30D5\u30A9\u30F3\u30C8\u30D5\u30A1\u30A4\u30EB\u3092data/others\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3001tyrano.css\u3067@font-face\u3092\u8A2D\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002` },
      { name: `edge`, required: false, description: `\u6587\u5B57\u306E\u7E01\u53D6\u308A\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002\u7E01\u53D6\u308A\u8272\u30920xRRGGBB\u5F62\u5F0F\u7B49\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7E01\u53D6\u308A\u3092\u89E3\u9664\u3059\u308B\u5834\u5408\u306Fnone\u3068\u6307\u5B9A\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A\u7E01\u53D6\u308A\u306E\u592A\u3055\u3082\u3042\u308F\u305B\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u30024px 0xFF0000\u306E\u3088\u3046\u306B\u3001\u8272\u306E\u524D\u306B\u7E01\u53D6\u308A\u306E\u592A\u3055\u3092px\u4ED8\u304D\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002\u592A\u3055\u3068\u8272\u306F\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3067\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3055\u3089\u306B4px 0xFF0000, 2px 0xFFFFFF\u306E\u3088\u3046\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u306E\u7E01\u53D6\u308A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `edge_method`, required: false, description: `\u7E01\u53D6\u308A\u306E\u5B9F\u88C5\u65B9\u5F0F\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306Fshadow\u307E\u305F\u306Ffilter\u3002` },
      { name: `shadow`, required: false, description: `\u6587\u5B57\u306B\u5F71\u3092\u3064\u3051\u307E\u3059\u3002\u5F71\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5F71\u3092\u89E3\u9664\u3059\u308B\u5834\u5408\u306Fnone\u3068\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u8868\u793A\u6F14\u51FA\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u7121\u52B9\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F\u4EE5\u4E0B\u3002fadeInfadeInDownfadeInLeftfadeInRightfadeInUprotateInzoomInslideInbounceInvanishInpuffInrollInnone` },
      { name: `effect_speed`, required: false, description: `effect\u30D1\u30E9\u30E1\u30FC\u30BF\u304Cnone\u4EE5\u5916\u306E\u5834\u5408\u306B\u3001\u8868\u793A\u3055\u308C\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F0.2s\u3067\u3059\u3002s\u306F\u79D2\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `gradient`, required: false, description: `V515\u4EE5\u964D\uFF1A\u6587\u5B57\u306B\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002CSS\u306E\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u95A2\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u95A2\u6570\u3068\u306Flinear-gradient(45deg, red 0%, yellow 100%)\u306E\u3088\u3046\u306A\u6587\u5B57\u5217\u3067\u3059\u3002 \u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u95A2\u6570\u3092\u7C21\u5358\u306B\u4F5C\u308C\u308B\u30B5\u30A4\u30C8\u304CWeb\u4E0A\u306B\u3044\u304F\u3064\u304B\u5B58\u5728\u3057\u307E\u3059\u306E\u3067\u3001\u300CCSS \u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3 \u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC\u300D\u3067\u691C\u7D22\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[deffont size="" color="" bold="" italic="" face="" edge="" edge_method="" shadow="" effect="" effect_speed="" gradient="" cond=""]`
  }],
  [`delay`, {
    name: `delay`,
    description: `\u6587\u5B57\u306E\u8868\u793A\u901F\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002
\u6587\u5B57\u8868\u793A\u3092\u30CE\u30FC\u30A6\u30A7\u30A4\u30C8\u306B\u3059\u308B\u306B\u306F[nowait]\u30BF\u30B0\u3092\u4F7F\u3046\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `speed`, required: false, description: `\u6587\u5B57\u306E\u8868\u793A\u901F\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u5C0F\u3055\u3044\u307B\u3069\u65E9\u304F\u306A\u308A\u307E\u3059\u3002 \u3053\u3053\u3067\u6307\u5B9A\u3057\u305F\u5024\u306F\u3001\u6B21\u306E1\u6587\u5B57\u3092\u8868\u793A\u3059\u308B\u307E\u3067\u306E\u6642\u9593\uFF08\u30DF\u30EA\u79D2\uFF09\u3068\u3057\u3066\u89E3\u91C8\u3055\u308C\u307E\u3059\u3002\u305F\u3068\u3048\u30701000\u3068\u6307\u5B9A\u3059\u308B\u30681\u79D2\u3054\u3068\u306B1\u6587\u5B57\u305A\u3064\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[delay speed="" cond=""]`
  }],
  [`dialog`, {
    name: `dialog`,
    description: `\u78BA\u8A8D\u7528\u306E\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `type`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u7A2E\u985E\u3092\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u306E\u3044\u305A\u308C\u304B\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002 alert(\u8B66\u544A) confirm(\u78BA\u8A8D) input(\u5165\u529B)` },
      { name: `name`, required: false, description: `\u5165\u529B\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u5834\u5408\u306B\u3001\u5165\u529B\u5185\u5BB9\u3092\u4FDD\u5B58\u3059\u308B\u5909\u6570\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002f.name\u306A\u3069\u3002` },
      { name: `text`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u306B\u8868\u793A\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u8A18\u8FF0\u3057\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `OK\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306E\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `OK\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306E\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002 \u306A\u304A\u3001storage\u3068target\u304C\u4E21\u65B9\u7701\u7565\u3055\u308C\u3066\u3044\u308B\u5834\u5408\u3001\u5358\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u307F\u307E\u3059\u3002` },
      { name: `storage_cancel`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306E\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target_cancel`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u304C\u62BC\u3055\u308C\u305F\u3068\u304D\u306E\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `label_ok`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `label_cancel`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[dialog type="" name="" text="" storage="" target="" storage_cancel="" target_cancel="" label_ok="" label_cancel="" cond=""]`
  }],
  [`dialog_config`, {
    name: `dialog_config`,
    description: `\u30BF\u30A4\u30C8\u30EB\u306B\u623B\u3063\u3066\u3044\u3044\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3059\u308B\u3068\u304D\u306A\u3069\u306B\u8868\u793A\u3055\u308C\u308B\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u30BF\u30B0\u306B\u306F\u4EE5\u4E0B\u306E4\u7A2E\u985E\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `btntype`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u30BF\u30A4\u30D7\u3092\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F[glink]\u306Ecolor\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u6E96\u3058\u307E\u3059\u3002` },
      { name: `btnwidth`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `btnmargin`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u5916\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306B\u5BFE\u5FDC\u300210,20\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u7E26\u4F59\u767D\u304C10\u3001\u6A2A\u4F59\u767D\u304C20\u3068\u6307\u5B9A\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `btnpadding`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u5185\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306B\u5BFE\u5FDC\u300210,20\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u7E26\u4F59\u767D\u304C10\u3001\u6A2A\u4F59\u767D\u304C20\u3068\u6307\u5B9A\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `fontsize`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontbold`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u592A\u5B57\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontface`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontcolor`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u6587\u5B57\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `btnfontsize`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `btnfontbold`, required: false, description: `\u30DC\u30BF\u30F3\u3092\u6587\u5B57\u3092\u592A\u5B57\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `btnfontface`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `btnfontcolor`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6587\u5B57\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `boxcolor`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u80CC\u666F\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `boxopacity`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002255\u3067\u5B8C\u5168\u306B\u4E0D\u900F\u660E\u3067\u3059\u3002` },
      { name: `boxradius`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u89D2\u306B\u4E38\u307F\u3092\u4ED8\u3051\u305F\u3044\u3068\u304D\u306B\u305D\u306E\u4E38\u307F\u306E\u534A\u5F84\u3092\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `boxwidth`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `boxheight`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u9AD8\u3055px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `boxpadding`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u5185\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u300210,20,10\u306E\u3088\u3046\u306A\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306E\u6307\u5B9A\u306B\u5BFE\u5FDC\u3057\u307E\u3059\u3002` },
      { name: `boximg`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u80CC\u666F\u753B\u50CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u306Fimage\u304C\u57FA\u6E96\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `boximgpos`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u80CC\u666F\u753B\u50CF\u306E\u8868\u793A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u305F\u3068\u3048\u3070center\u3068\u6307\u5B9A\u3059\u308B\u3068\u753B\u9762\u4E2D\u592E\u3001left top\u3067\u5DE6\u4E0A\u3001right top\u3067\u53F3\u4E0A\u3001right bottom\u3067\u53F3\u4E0B\u3001left bottom\u3067\u5DE6\u4E0B\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `boximgrepeat`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u80CC\u666F\u753B\u50CF\u306E\u7E70\u308A\u8FD4\u3057\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u3092\u7E70\u308A\u8FD4\u3057\u3066\u6577\u304D\u8A70\u3081\u308B\u5834\u5408\u306Frepeat\u3001\u7E70\u308A\u8FD4\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306Fno-repeat\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `boximgsize`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30DC\u30C3\u30AF\u30B9\u306E\u80CC\u666F\u753B\u50CF\u306E\u30B5\u30A4\u30BA\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `bgcolor`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u5916\u5074\u306E\u80CC\u666F\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `bgopacity`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u5916\u5074\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002255\u3067\u5B8C\u5168\u306B\u4E0D\u900F\u660E\u3067\u3059\u3002` },
      { name: `bgimg`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u5916\u5074\u306E\u80CC\u666F\u753B\u50CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u306Fimage\u304C\u57FA\u6E96\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `bgimgpos`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u5916\u5074\u306E\u80CC\u666F\u753B\u50CF\u306E\u8868\u793A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u305F\u3068\u3048\u3070center\u3068\u6307\u5B9A\u3059\u308B\u3068\u753B\u9762\u4E2D\u592E\u3001left top\u3067\u5DE6\u4E0A\u3001right top\u3067\u53F3\u4E0A\u3001right bottom\u3067\u53F3\u4E0B\u3001left bottom\u3067\u5DE6\u4E0B\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `bgimgrepeat`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u5916\u5074\u306E\u80CC\u666F\u753B\u50CF\u306E\u7E70\u308A\u8FD4\u3057\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u3092\u7E70\u308A\u8FD4\u3057\u3066\u6577\u304D\u8A70\u3081\u308B\u5834\u5408\u306Frepeat\u3001\u7E70\u308A\u8FD4\u3057\u305F\u304F\u306A\u3044\u5834\u5408\u306Fno-repeat\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `bgimgsize`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u5916\u5074\u306E\u80CC\u666F\u753B\u50CF\u306E\u30B5\u30A4\u30BA\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `openeffect`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u958B\u3044\u305F\u3068\u304D\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F[mask]\u306B\u6E96\u3058\u307E\u3059\u3002` },
      { name: `opentime`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u958B\u3044\u305F\u3068\u304D\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `closeeffect`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u958B\u3044\u305F\u3068\u304D\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F[mask_off]\u306B\u6E96\u3058\u307E\u3059\u3002` },
      { name: `closetime`, required: false, description: `\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u958B\u3044\u305F\u3068\u304D\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `gotitle`, required: false, description: `\u30BF\u30A4\u30C8\u30EB\u306B\u623B\u3063\u3066\u3044\u3044\u304B\u3092\u78BA\u8A8D\u3059\u308B\u3068\u304D\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `okpos`, required: false, description: `\u300COK\u300D\u30DC\u30BF\u30F3\u306E\u4F4D\u7F6E\u3092\u5DE6\u306B\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u306Fleft\u3001\u53F3\u306B\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u306Fright\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `ingame`, required: false, description: `\u30C7\u30A3\u30B9\u30D7\u30EC\u30A4\u5168\u4F53\u3067\u306F\u306A\u304F\u30B2\u30FC\u30E0\u753B\u9762\u306E\u7BC4\u56F2\u5185\u306B\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u53CE\u3081\u305F\u3044\u5834\u5408\u306B\u306Ftrue\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3067\u3082\u3068\u306B\u623B\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[dialog_config btntype="" btnwidth="" btnmargin="" btnpadding="" fontsize="" fontbold="" fontface="" fontcolor="" btnfontsize="" btnfontbold="" btnfontface="" btnfontcolor="" boxcolor="" boxopacity="" boxradius="" boxwidth="" boxheight="" boxpadding="" boximg="" boximgpos="" boximgrepeat="" boximgsize="" bgcolor="" bgopacity="" bgimg="" bgimgpos="" bgimgrepeat="" bgimgsize="" openeffect="" opentime="" closeeffect="" closetime="" gotitle="" okpos="" ingame="" cond=""]`
  }],
  [`dialog_config_filter`, {
    name: `dialog_config_filter`,
    description: `\u30BF\u30A4\u30C8\u30EB\u306B\u623B\u3063\u3066\u3044\u3044\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3059\u308B\u3068\u304D\u306A\u3069\u306B\u8868\u793A\u3055\u308C\u308B\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u30BF\u30B0\u306B\u306F\u4EE5\u4E0B\u306E4\u7A2E\u985E\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u30D5\u30A3\u30EB\u30BF\u3092\u304B\u3051\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u3082\u3057\u304F\u306Fall\u3068\u6307\u5B9A\u3059\u308B\u3068\u30B2\u30FC\u30E0\u753B\u9762\u5168\u3066\u306B\u52B9\u679C\u304C\u304B\u304B\u308A\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `\u7279\u5B9A\u306E\u8981\u7D20\u306B\u30D5\u30A3\u30EB\u30BF\u3092\u304B\u3051\u305F\u3044\u5834\u5408\u306B\u3001\u305D\u306E\u8981\u7D20\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `grayscale`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u3002` },
      { name: `sepia`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u30BB\u30D4\u30A2\u8ABF\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u3002` },
      { name: `saturate`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3057\u3066\u3042\u3052\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u5F69\u5EA6\uFF08\u8272\u306E\u9BAE\u3084\u304B\u3055\uFF09\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `hue`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E360\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u8272\u76F8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `invert`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u968E\u8ABF\u3092\u53CD\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `opacity`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u900F\u904E\u5EA6\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `brightness`, required: false, description: `100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u57FA\u6E96\u3068\u3059\u308B\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u660E\u5EA6\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u30020\u3067\u771F\u3063\u6697\u306B\u3001100\u4EE5\u4E0A\u306E\u6570\u5024\u3067\u3088\u308A\u660E\u308B\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `contrast`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `blur`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E\u4EFB\u610F\u306E\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u307C\u304B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[dialog_config_filter layer="" name="" grayscale="" sepia="" saturate="" hue="" invert="" opacity="" brightness="" contrast="" blur="" cond=""]`
  }],
  [`dialog_config_ng`, {
    name: `dialog_config_ng`,
    description: `\u30BF\u30A4\u30C8\u30EB\u306B\u623B\u3063\u3066\u3044\u3044\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3059\u308B\u3068\u304D\u306A\u3069\u306B\u8868\u793A\u3055\u308C\u308B\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u30BF\u30B0\u306B\u306F\u4EE5\u4E0B\u306E4\u7A2E\u985E\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `text`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `type`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F[glink]\u306Ecolor\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u6E96\u3058\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `margin`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u5916\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306B\u5BFE\u5FDC\u300210,20\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u7E26\u4F59\u767D\u304C10\u3001\u6A2A\u4F59\u767D\u304C20\u3068\u6307\u5B9A\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `padding`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u5185\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306B\u5BFE\u5FDC\u300210,20\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u7E26\u4F59\u767D\u304C10\u3001\u6A2A\u4F59\u767D\u304C20\u3068\u6307\u5B9A\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `fontsize`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontbold`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u3092\u6587\u5B57\u3092\u592A\u5B57\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontface`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontcolor`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u6587\u5B57\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `img`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306B\u753B\u50CF\u3092\u4F7F\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002image\u30D5\u30A9\u30EB\u30C0\u3092\u57FA\u6E96\u3068\u3057\u305F\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `imgwidth`, required: false, description: `\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u753B\u50CF\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `enterimg`, required: false, description: `\u30DE\u30A6\u30B9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u4E0A\u306B\u4E57\u3063\u305F\u3068\u304D\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3002image\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `activeimg`, required: false, description: `\u30DE\u30A6\u30B9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u8FBC\u3093\u3067\u304B\u3089\u653E\u3055\u308C\u308B\u307E\u3067\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3002image\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `clickimg`, required: false, description: `\u30DE\u30A6\u30B9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u5F8C\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3002image\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `enterse`, required: false, description: `\u30DE\u30A6\u30B9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u4E0A\u306B\u4E57\u3063\u305F\u3068\u304D\u306B\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3002sound\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `leavese`, required: false, description: `\u30DE\u30A6\u30B9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306E\u4E0A\u304B\u3089\u96E2\u308C\u305F\u3068\u304D\u306B\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3002sound\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `clickse`, required: false, description: `\u30DE\u30A6\u30B9\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u8FBC\u3093\u3060\u3068\u304D\u306B\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3002sound\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `btnimgtype`, required: false, description: `\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306Bbg\u3092\u6307\u5B9A\u3057\u3066\u304A\u304F\u3068\u3001img\u3084enterimg\u306A\u3069\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u6307\u5B9A\u3057\u305F\u753B\u50CF\u304C\u30DC\u30BF\u30F3\u306E\u300C\u80CC\u666F\u300D\u3068\u3057\u3066\u4F7F\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\uFF08\u901A\u5E38\u3001img\u306B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u305F\u3068\u304D\u306F\u30C6\u30AD\u30B9\u30C8\u304C\u6D88\u3048\u3001\u753B\u50CF\u304C\u305D\u306E\u307E\u307E\u30DC\u30BF\u30F3\u5316\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u753B\u50CF\u5185\u306B\u300COK\u300D\u306A\u3069\u306E\u30C7\u30B6\u30A4\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\uFF09` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[dialog_config_ng text="" type="" width="" margin="" padding="" fontsize="" fontbold="" fontface="" fontcolor="" img="" imgwidth="" enterimg="" activeimg="" clickimg="" enterse="" leavese="" clickse="" btnimgtype="" cond=""]`
  }],
  [`dialog_config_ok`, {
    name: `dialog_config_ok`,
    description: `\u30BF\u30A4\u30C8\u30EB\u306B\u623B\u3063\u3066\u3044\u3044\u304B\u3069\u3046\u304B\u3092\u78BA\u8A8D\u3059\u308B\u3068\u304D\u306A\u3069\u306B\u8868\u793A\u3055\u308C\u308B\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u5909\u66F4\u3059\u308B\u30BF\u30B0\u306B\u306F\u4EE5\u4E0B\u306E4\u7A2E\u985E\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `text`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `type`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F[glink]\u306Ecolor\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u6E96\u3058\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `margin`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u5916\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306B\u5BFE\u5FDC\u300210,20\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u7E26\u4F59\u767D\u304C10\u3001\u6A2A\u4F59\u767D\u304C20\u3068\u6307\u5B9A\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `padding`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u5185\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u306B\u5BFE\u5FDC\u300210,20\u306E\u3088\u3046\u306B\u6307\u5B9A\u3059\u308B\u3068\u3001\u7E26\u4F59\u767D\u304C10\u3001\u6A2A\u4F59\u767D\u304C20\u3068\u6307\u5B9A\u3057\u305F\u3053\u3068\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `fontsize`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontbold`, required: false, description: `OK\u30DC\u30BF\u30F3\u3092\u6587\u5B57\u3092\u592A\u5B57\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontface`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u30D5\u30A9\u30F3\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `fontcolor`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u6587\u5B57\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `img`, required: false, description: `OK\u30DC\u30BF\u30F3\u306B\u753B\u50CF\u3092\u4F7F\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002image\u30D5\u30A9\u30EB\u30C0\u3092\u57FA\u6E96\u3068\u3057\u305F\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `imgwidth`, required: false, description: `OK\u30DC\u30BF\u30F3\u306E\u753B\u50CF\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `enterimg`, required: false, description: `\u30DE\u30A6\u30B9\u304COK\u30DC\u30BF\u30F3\u306E\u4E0A\u306B\u4E57\u3063\u305F\u3068\u304D\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3002image\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `activeimg`, required: false, description: `\u30DE\u30A6\u30B9\u304COK\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u8FBC\u3093\u3067\u304B\u3089\u653E\u3055\u308C\u308B\u307E\u3067\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3002image\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `clickimg`, required: false, description: `\u30DE\u30A6\u30B9\u304COK\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u5F8C\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3002image\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `enterse`, required: false, description: `\u30DE\u30A6\u30B9\u304COK\u30DC\u30BF\u30F3\u306E\u4E0A\u306B\u4E57\u3063\u305F\u3068\u304D\u306B\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3002sound\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `leavese`, required: false, description: `\u30DE\u30A6\u30B9\u304COK\u30DC\u30BF\u30F3\u306E\u4E0A\u304B\u3089\u96E2\u308C\u305F\u3068\u304D\u306B\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3002sound\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `clickse`, required: false, description: `\u30DE\u30A6\u30B9\u304COK\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u8FBC\u3093\u3060\u3068\u304D\u306B\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3002sound\u30D5\u30A9\u30EB\u30C0\u304B\u3089\u63A2\u3057\u307E\u3059\u3002` },
      { name: `btnimgtype`, required: false, description: `\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306Bbg\u3092\u6307\u5B9A\u3057\u3066\u304A\u304F\u3068\u3001img\u3084enterimg\u306A\u3069\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u6307\u5B9A\u3057\u305F\u753B\u50CF\u304C\u30DC\u30BF\u30F3\u306E\u300C\u80CC\u666F\u300D\u3068\u3057\u3066\u4F7F\u308F\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\uFF08\u901A\u5E38\u3001img\u306B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u305F\u3068\u304D\u306F\u30C6\u30AD\u30B9\u30C8\u304C\u6D88\u3048\u3001\u753B\u50CF\u304C\u305D\u306E\u307E\u307E\u30DC\u30BF\u30F3\u5316\u3055\u308C\u307E\u3059\u3002\u3064\u307E\u308A\u3001\u753B\u50CF\u5185\u306B\u300COK\u300D\u306A\u3069\u306E\u30C7\u30B6\u30A4\u30F3\u304C\u542B\u307E\u308C\u3066\u3044\u308B\u3053\u3068\u3092\u60F3\u5B9A\u3057\u3066\u3044\u308B\u3068\u3044\u3046\u3053\u3068\u3067\u3059\uFF09` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[dialog_config_ok text="" type="" width="" margin="" padding="" fontsize="" fontbold="" fontface="" fontcolor="" img="" imgwidth="" enterimg="" activeimg="" clickimg="" enterse="" leavese="" clickse="" btnimgtype="" cond=""]`
  }],
  [`edit`, {
    name: `edit`,
    description: `\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u5165\u529B\u53EF\u80FD\u306A\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u3092\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u5165\u529B\u30C6\u30AD\u30B9\u30C8\u3092\u4FDD\u5B58\u3059\u308B\u5909\u6570\u540D\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `initial`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u521D\u671F\u5024\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u6587\u5B57\u306E\u8272\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u6A2A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `top`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u7E26\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `autocomplete`, required: false, description: `\u5165\u529B\u306E\u5C65\u6B74\u3092\u8868\u793A\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `size`, required: false, description: `\u6587\u5B57\u306E\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u30DC\u30C3\u30AF\u30B9\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `maxchars`, required: false, description: `\u6700\u5927\u5165\u529B\u6587\u5B57\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[edit name="" initial="" color="" left="" top="" autocomplete="" size="" width="" height="" maxchars="" cond=""]`
  }],
  [`else`, {
    name: `else`,
    description: `[if]\u3082\u3057\u304F\u306F[elsif]\u30BF\u30B0\u3068[endif]\u30BF\u30B0\u306E\u9593\u3067\u7528\u3044\u3089\u308C\u307E\u3059\u3002 \u3053\u306E\u30BF\u30B0\u307E\u3067\u306B\u8A18\u8FF0\u3055\u308C\u305F[if][elsif]\u30BF\u30B0\u306E\u6761\u4EF6\u3092\u307E\u3060\u6E80\u305F\u3057\u3066\u3044\u306A\u3044\u5834\u5408\u306B\u3001\u3053\u306E\u30BF\u30B0\u304B\u3089[endif]\u307E\u3067\u306E\u8A18\u8FF0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[else cond=""]`
  }],
  [`elsif`, {
    name: `elsif`,
    description: `[if]\u30BF\u30B0\u3068[endif]\u30BF\u30B0\u306E\u9593\u3067\u4F7F\u3044\u307E\u3059\u3002\u5206\u5C90\u306E\u6761\u4EF6\u3092\u5897\u3084\u3057\u3066\u3001\u8907\u96D1\u306A\u5206\u5C90\u3092\u884C\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `exp`, required: true, description: `\u8A55\u4FA1\u3059\u308B JS \u5F0F\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[elsif exp="" cond=""]`
  }],
  [`emb`, {
    name: `emb`,
    description: `exp\u3067\u6307\u5B9A\u3055\u308C\u305FJavaScript\u306E\u6587\u3092\u8A55\u4FA1\u3057\u3001\u305D\u306E\u7D50\u679C\u3092\u30C6\u30AD\u30B9\u30C8\u3068\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `exp`, required: true, description: `\u8A55\u4FA1\u3059\u308BJavaScript\u306E\u5F0F\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u57FA\u672C\u7684\u306B\u306F\u5909\u6570\u306E\u540D\u524D\u3092\u6307\u5B9A\u3059\u308C\u3070\u3088\u3044\u3067\u3057\u3087\u3046\u3002f.namesf.text\u306A\u3069\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[emb exp="" cond=""]`
  }],
  [`endhtml`, {
    name: `endhtml`,
    description: `HTML\u306E\u8A18\u8FF0\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endhtml cond=""]`
  }],
  [`endif`, {
    name: `endif`,
    description: `[if]\u6587\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002[if]\u6587\u306E\u7D42\u308F\u308A\u306B\u5FC5\u305A\u8A18\u8FF0\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endif cond=""]`
  }],
  [`endignore`, {
    name: `endignore`,
    description: `[ignore]\u306E\u8A18\u8FF0\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endignore cond=""]`
  }],
  [`endkeyframe`, {
    name: `endkeyframe`,
    description: `\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5B9A\u7FA9\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endkeyframe cond=""]`
  }],
  [`endlink`, {
    name: `endlink`,
    description: `[link]\u30BF\u30B0\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u3044\u307E\u3059\u3002\u30EA\u30F3\u30AF\u5316\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endlink cond=""]`
  }],
  [`endmacro`, {
    name: `endmacro`,
    description: `\u30DE\u30AF\u30ED\u306E\u8A18\u8FF0\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endmacro cond=""]`
  }],
  [`endmark`, {
    name: `endmark`,
    description: `[mark]\u30BF\u30B0\u3067\u958B\u59CB\u3057\u305F\u30C6\u30AD\u30B9\u30C8\u30DE\u30FC\u30AB\u30FC\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endmark cond=""]`
  }],
  [`endnolog`, {
    name: `endnolog`,
    description: `[nolog]\u30BF\u30B0\u3067\u4E00\u6642\u505C\u6B62\u3057\u305F\u30D0\u30C3\u30AF\u30ED\u30B0\u3078\u306E\u8A18\u9332\u3092\u518D\u958B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endnolog cond=""]`
  }],
  [`endnowait`, {
    name: `endnowait`,
    description: `[nowait]\u306B\u3088\u308B\u30C6\u30AD\u30B9\u30C8\u77AC\u9593\u8868\u793A\u30E2\u30FC\u30C9\u3092\u505C\u6B62\u3057\u307E\u3059\u3002
\u30C6\u30AD\u30B9\u30C8\u306E\u8868\u793A\u901F\u5EA6\u306F[nowait]\u30BF\u30B0\u3092\u6307\u5B9A\u3059\u308B\u524D\u306E\u72B6\u614B\u306B\u623B\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endnowait cond=""]`
  }],
  [`endscript`, {
    name: `endscript`,
    description: `JavaScript\u306E\u8A18\u8FF0\u3092\u7D42\u4E86\u3057\u307E\u3059\u3002`,
    params: [
      { name: `stop`, required: false, description: `\u3010\u9AD8\u5EA6\u3011true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001[endscript]\u306B\u5230\u9054\u3057\u305F\u3068\u304D\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u307E\u306A\u304F\u306A\u308A\u307E\u3059\u3002JavaScript\u306E\u8A18\u8FF0\u306B\u3088\u3063\u3066\u30B7\u30CA\u30EA\u30AA\u3092\u30B8\u30E3\u30F3\u30D7\u3055\u305B\u305F\u3044\u5834\u5408\u306Btrue\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[endscript stop="" cond=""]`
  }],
  [`er`, {
    name: `er`,
    description: `\u73FE\u5728\u306E\u64CD\u4F5C\u5BFE\u8C61\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u306E\u6587\u5B57\u3092\u6D88\u53BB\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[er cond=""]`
  }],
  [`erasemacro`, {
    name: `erasemacro`,
    description: `\u767B\u9332\u3057\u305F\u30DE\u30AF\u30ED\u3092\u524A\u9664\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u524A\u9664\u3059\u308B\u30DE\u30AF\u30ED\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[erasemacro name="" cond=""]`
  }],
  [`eval`, {
    name: `eval`,
    description: `exp\u306B\u6307\u5B9A\u3055\u308C\u305FJavaScript\u306E\u6587\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u4E3B\u306B\u5909\u6570\u306B\u5024\u3092\u30BB\u30C3\u30C8\u3059\u308B\u969B\u306B\u6D3B\u7528\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `exp`, required: true, description: `\u5B9F\u884C\u3059\u308BJavaScript\u6587\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[eval exp="" cond=""]`
  }],
  [`fadeinbgm`, {
    name: `fadeinbgm`,
    description: `BGM\u3092\u5F90\u3005\u306B\u518D\u751F\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u518D\u751F\u3059\u308B\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u30EB\u30FC\u30D7\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `sprite_time`, required: false, description: `\u518D\u751F\u3059\u308B\u533A\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u958B\u59CB\u6642\u523B\u3068\u7D42\u4E86\u6642\u523B\u3092\u30CF\u30A4\u30D5\u30F3\u7E4B\u304E\u3067\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u30706000-10000\u3068\u6307\u5B9A\u3059\u308B\u306800:06\uFF5E00:10\u306E4\u79D2\u9593\u3092\u518D\u751F\u3057\u307E\u3059\u3002loop\u5C5E\u6027\u304Ctrue\u306E\u5834\u5408\u3001\u3053\u306E\u9593\u3092\u30EB\u30FC\u30D7\u518D\u751F\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A00:06-00:10\u306E\u3088\u3046\u306A\u5206:\u79D2\u533A\u5207\u308A\u3067\u3082\u6307\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u5FC5\u305A:\u3092\u542B\u3081\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `volume`, required: false, description: `\u518D\u751F\u3059\u308B\u97F3\u91CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020\u301C100\u306E\u7BC4\u56F2\u3067\u6307\u5B9A\u3057\u3066\u4E0B\u3055\u3044\u3002` },
      { name: `html5`, required: false, description: `\u901A\u5E38\u306F\u6307\u5B9A\u3057\u306A\u304F\u3066OK\u3067\u3059\u3002HTML5 Audio\u3092\u4F7F\u3046\u5834\u5408\u306Ftrue\u3001Web Audio API\u3092\u4F7F\u3046\u5834\u5408\u306Ffalse(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pause`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30BF\u30B0\u5B9F\u884C\u6642\u306BBGM\u3092\u518D\u751F\u3057\u307E\u305B\u3093\u3002[resumebgm]\u3067\u518D\u751F\u3067\u304D\u307E\u3059` },
      { name: `seek`, required: false, description: `\u518D\u751F\u958B\u59CB\u6642\u9593\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u30704.5\u3068\u6307\u5B9A\u3059\u308B\u30684.5\u79D2\u9032\u3093\u3060\u4F4D\u7F6E\u304B\u3089BGM\u304C\u518D\u751F\u3055\u308C\u307E\u3059` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[fadeinbgm storage="" loop="" sprite_time="" time="" volume="" html5="" pause="" seek="" cond=""]`
  }],
  [`fadeinse`, {
    name: `fadeinse`,
    description: `\u52B9\u679C\u97F3\u3092\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u3057\u306A\u304C\u3089\u518D\u751F\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u518D\u751F\u3059\u308B\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u30EB\u30FC\u30D7\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `sprite_time`, required: false, description: `\u518D\u751F\u3059\u308B\u533A\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u958B\u59CB\u6642\u523B\u3068\u7D42\u4E86\u6642\u523B\u3092\u30CF\u30A4\u30D5\u30F3\u7E4B\u304E\u3067\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u30706000-10000\u3068\u6307\u5B9A\u3059\u308B\u306800:06\uFF5E00:10\u306E4\u79D2\u9593\u3092\u518D\u751F\u3057\u307E\u3059\u3002loop\u5C5E\u6027\u304Ctrue\u306E\u5834\u5408\u3001\u3053\u306E\u9593\u3092\u30EB\u30FC\u30D7\u518D\u751F\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A00:06-00:10\u306E\u3088\u3046\u306A\u5206:\u79D2\u533A\u5207\u308A\u3067\u3082\u6307\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u5FC5\u305A:\u3092\u542B\u3081\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `buf`, required: false, description: `\u52B9\u679C\u97F3\u3092\u505C\u6B62\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `time`, required: true, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `html5`, required: false, description: `\u901A\u5E38\u306F\u6307\u5B9A\u3057\u306A\u304F\u3066OK\u3067\u3059\u3002HTML5 Audio\u3092\u4F7F\u3046\u5834\u5408\u306Ftrue\u3001Web Audio API\u3092\u4F7F\u3046\u5834\u5408\u306Ffalse(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[fadeinse storage="" loop="" sprite_time="" buf="" time="" html5="" cond=""]`
  }],
  [`fadeoutbgm`, {
    name: `fadeoutbgm`,
    description: `\u518D\u751F\u4E2D\u306EBGM\u3092\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u3057\u306A\u304C\u3089\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[fadeoutbgm time="" cond=""]`
  }],
  [`fadeoutse`, {
    name: `fadeoutse`,
    description: `\u52B9\u679C\u97F3\u3092\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u3057\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `buf`, required: false, description: `\u52B9\u679C\u97F3\u3092\u505C\u6B62\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[fadeoutse time="" buf="" cond=""]`
  }],
  [`filter`, {
    name: `filter`,
    description: `\u30EC\u30A4\u30E4\u3084\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u3001\u69D8\u3005\u306A\u30D5\u30A3\u30EB\u30BF\u30FC\u52B9\u679C\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u30D5\u30A3\u30EB\u30BF\u3092\u304B\u3051\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u3082\u3057\u304F\u306Fall\u3068\u6307\u5B9A\u3059\u308B\u3068\u30B2\u30FC\u30E0\u753B\u9762\u5168\u3066\u306B\u52B9\u679C\u304C\u304B\u304B\u308A\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `\u7279\u5B9A\u306E\u8981\u7D20\u306B\u30D5\u30A3\u30EB\u30BF\u3092\u304B\u3051\u305F\u3044\u5834\u5408\u306B\u3001\u305D\u306E\u8981\u7D20\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `grayscale`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u3002` },
      { name: `sepia`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u30BB\u30D4\u30A2\u8ABF\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u3002` },
      { name: `saturate`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3057\u3066\u3042\u3052\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u5F69\u5EA6\uFF08\u8272\u306E\u9BAE\u3084\u304B\u3055\uFF09\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `hue`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E360\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u8272\u76F8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `invert`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u968E\u8ABF\u3092\u53CD\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `opacity`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u900F\u904E\u5EA6\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `brightness`, required: false, description: `100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u57FA\u6E96\u3068\u3059\u308B\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u660E\u5EA6\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u30020\u3067\u771F\u3063\u6697\u306B\u3001100\u4EE5\u4E0A\u306E\u6570\u5024\u3067\u3088\u308A\u660E\u308B\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `contrast`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `blur`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E\u4EFB\u610F\u306E\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u307C\u304B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[filter layer="" name="" grayscale="" sepia="" saturate="" hue="" invert="" opacity="" brightness="" contrast="" blur="" cond=""]`
  }],
  [`font`, {
    name: `font`,
    description: `\u30C6\u30AD\u30B9\u30C8\u306E\u30B9\u30BF\u30A4\u30EB\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u30B9\u30BF\u30A4\u30EB\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3054\u3068\u306B\u500B\u5225\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `size`, required: false, description: `\u6587\u5B57\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `color`, required: false, description: `\u6587\u5B57\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `bold`, required: false, description: `\u592A\u5B57\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `italic`, required: false, description: `\u30A4\u30BF\u30EA\u30C3\u30AF\u4F53\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002Web\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306Ftyrano/css/font.css\u306B\u5B9A\u7FA9\u3092\u8A18\u8FF0\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `edge`, required: false, description: `\u6587\u5B57\u306E\u7E01\u53D6\u308A\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002\u7E01\u53D6\u308A\u8272\u30920xRRGGBB\u5F62\u5F0F\u7B49\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7E01\u53D6\u308A\u3092\u89E3\u9664\u3059\u308B\u5834\u5408\u306Fnone\u3068\u6307\u5B9A\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A\u7E01\u53D6\u308A\u306E\u592A\u3055\u3082\u3042\u308F\u305B\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u30024px 0xFF0000\u306E\u3088\u3046\u306B\u3001\u8272\u306E\u524D\u306B\u7E01\u53D6\u308A\u306E\u592A\u3055\u3092px\u4ED8\u304D\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002\u592A\u3055\u3068\u8272\u306F\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3067\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3055\u3089\u306B4px 0xFF0000, 2px 0xFFFFFF\u306E\u3088\u3046\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u306E\u7E01\u53D6\u308A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `edge_method`, required: false, description: `\u7E01\u53D6\u308A\u306E\u5B9F\u88C5\u65B9\u5F0F\u3092\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306Fshadow\u307E\u305F\u306Ffilter\u3002` },
      { name: `shadow`, required: false, description: `\u6587\u5B57\u306B\u5F71\u3092\u3064\u3051\u307E\u3059\u3002\u5F71\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u5F71\u3092\u89E3\u9664\u3059\u308B\u5834\u5408\u306Fnone\u3068\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u8868\u793A\u6F14\u51FA\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u7121\u52B9\u3002\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3002fadeInfadeInDownfadeInLeftfadeInRightfadeInUprotateInzoomInslideInbounceInvanishInpuffInrollInnone` },
      { name: `effect_speed`, required: false, description: `effect\u30D1\u30E9\u30E1\u30FC\u30BF\u304Cnone\u4EE5\u5916\u306E\u5834\u5408\u306B\u3001\u8868\u793A\u3055\u308C\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F0.2s\u3067\u3059\u3002s\u306F\u79D2\u3092\u8868\u3057\u307E\u3059\u3002` },
      { name: `gradient`, required: false, description: `V515\u4EE5\u964D\uFF1A\u6587\u5B57\u306B\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002CSS\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002CSS\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3068\u306F\u3001\u305F\u3068\u3048\u3070linear-gradient(45deg, red 0%, yellow 100%)\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u3059\u3002 CSS\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u7C21\u5358\u306B\u4F5C\u308C\u308B\u30B5\u30A4\u30C8\u304CWeb\u4E0A\u306B\u3044\u304F\u3064\u304B\u5B58\u5728\u3057\u307E\u3059\u306E\u3067\u3001\u300CCSS \u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3 \u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC\u300D\u3067\u691C\u7D22\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[font size="" color="" bold="" italic="" face="" edge="" edge_method="" shadow="" effect="" effect_speed="" gradient="" cond=""]`
  }],
  [`frame`, {
    name: `frame`,
    description: `\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u3092\u3072\u3068\u3064\u5B9A\u7FA9\u3057\u307E\u3059\u3002[keyframe]\u3068[endkeyframe]\u306E\u9593\u306B\u8A18\u8FF0\u3057\u307E\u3059\u3002`,
    params: [
      { name: `p`, required: true, description: `\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u306E\u4F4D\u7F6E\u3092\u30D1\u30FC\u30BB\u30F3\u30C6\u30FC\u30B8\uFF080%\u301C100%\uFF09\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u307050%\u3068\u6307\u5B9A\u3059\u308C\u3070\u3001\u5168\u4F53\u306E\u9577\u3055\u304C4\u79D2\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u306A\u304B\u306E2\u79D2\u76EE\u3001\u3068\u306A\u308A\u307E\u3059\u30020%\u306E\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u3092\u7701\u7565\u3059\u308B\u3053\u3068\u3067\u524D\u56DE\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u72B6\u614B\u3092\u7D99\u627F\u3067\u304D\u307E\u3059\u3002` },
      { name: `x`, required: false, description: `X\u8EF8\u65B9\u5411\u3078\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u91CF\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002*(\u30A2\u30B9\u30BF\u30EA\u30B9\u30AF)\u3067\u59CB\u3081\u308B\u3053\u3068\u3067\u3001\u7D76\u5BFE\u4F4D\u7F6E\u3068\u3057\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u4F8B\uFF09 x\uFF1D"100"(\u524D\u3078100px\u79FB\u52D5\u3059\u308B)\u3001x="*100"(\u753B\u9762\u5DE6\u7AEF\u304B\u3089100px\u306E\u4F4D\u7F6E\u3078\u79FB\u52D5\u3059\u308B)` },
      { name: `y`, required: false, description: `Y\u8EF8\u65B9\u5411\u3078\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u91CF\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002*(\u30A2\u30B9\u30BF\u30EA\u30B9\u30AF)\u3067\u59CB\u3081\u308B\u3053\u3068\u3067\u3001\u7D76\u5BFE\u4F4D\u7F6E\u3068\u3057\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `z`, required: false, description: `Z\u8EF8\u65B9\u5411\u3078\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u91CF\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002*(\u30A2\u30B9\u30BF\u30EA\u30B9\u30AF)\u3067\u59CB\u3081\u308B\u3053\u3068\u3067\u3001\u7D76\u5BFE\u4F4D\u7F6E\u3068\u3057\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 \u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u4E09\u6B21\u5143\u7684\u306A\u8868\u73FE\u304C\u53EF\u80FD\u3067\u3059\u304C\u3001\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u306E\u306F\u4E00\u90E8\u306E\u30D6\u30E9\u30A6\u30B6\u306E\u307F\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `rotate`, required: false, description: `\u5BFE\u8C61\u3092\u56DE\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u305F\u3068\u3048\u3070180\u5EA6\u56DE\u8EE2\u3055\u305B\u305F\u3044\u5834\u5408\u3001180deg\u306E\u3088\u3046\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `rotateX`, required: false, description: `\u5BFE\u8C61\u3092X\u8EF8\u3092\u8EF8\u3068\u3057\u3066\u56DE\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `rotateY`, required: false, description: `\u5BFE\u8C61\u3092Y\u8EF8\u3092\u8EF8\u3068\u3057\u3066\u56DE\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `rotateZ`, required: false, description: `\u5BFE\u8C61\u3092Z\u8EF8\u3092\u8EF8\u3068\u3057\u3066\u56DE\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `scale`, required: false, description: `\u5BFE\u8C61\u3092\u62E1\u5927\u307E\u305F\u306F\u7E2E\u5C0F\u3067\u304D\u307E\u3059\u30022\u500D\u306B\u62E1\u5927\u3059\u308B\u306B\u306F2\u3092\u3001\u534A\u5206\u306B\u7E2E\u5C0F\u3059\u308B\u306B\u306F0.5\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `scaleX`, required: false, description: `X\u65B9\u5411\u306B\u62E1\u5927\u307E\u305F\u306F\u7E2E\u5C0F\u3067\u304D\u307E\u3059\u3002` },
      { name: `scaleY`, required: false, description: `Y\u65B9\u5411\u306B\u62E1\u5927\u307E\u305F\u306F\u7E2E\u5C0F\u3067\u304D\u307E\u3059\u3002` },
      { name: `scaleZ`, required: false, description: `Z\u65B9\u5411\u306B\u62E1\u5927\u307E\u305F\u306F\u7E2E\u5C0F\u3067\u304D\u307E\u3059\u3002` },
      { name: `skew`, required: false, description: `\u50BE\u659C\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `skewX`, required: false, description: `X\u50BE\u659C\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `skewY`, required: false, description: `Y\u50BE\u659C\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `perspective`, required: false, description: `\u9060\u8FD1\u52B9\u679C\u3092\u4ED8\u4E0E\u3067\u304D\u307E\u3059\u3002\u4E00\u90E8\u30D6\u30E9\u30A6\u30B6\u306E\u307F\u5BFE\u5FDC\u3002` },
      { name: `opacity`, required: false, description: `\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u306B\u306A\u308A\u307E\u3059\u3002 \u305D\u306E\u4ED6: CSS\u306E\u30B9\u30BF\u30A4\u30EB\u3092\u5404\u7A2E\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[frame p="" x="" y="" z="" rotate="" rotateX="" rotateY="" rotateZ="" scale="" scaleX="" scaleY="" scaleZ="" skew="" skewX="" skewY="" perspective="" opacity="" \u305D\u306E\u4ED6="" cond=""]`
  }],
  [`free`, {
    name: `free`,
    description: `\u30EC\u30A4\u30E4\u306B\u8FFD\u52A0\u3055\u308C\u305Fname\u3067\u6307\u5B9A\u3055\u308C\u305F\u8981\u7D20\u3092\u3059\u3079\u3066\u524A\u9664\u3057\u307E\u3059\u3002name\u6307\u5B9A\u306F\u5FC5\u9808\u3067\u3059\u3002`,
    params: [
      { name: `layer`, required: true, description: `\u5BFE\u8C61\u306E\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `name`, required: true, description: `\u524A\u9664\u3059\u308B\u8981\u7D20\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30EC\u30A4\u30E4\u5185\u306E\u3042\u3089\u3086\u308B\u8981\u7D20\u306B\u9069\u5FDC\u3067\u304D\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u304C\u5F90\u3005\u306B\u900F\u660E\u306B\u306A\u3063\u3066\u3044\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u4E00\u77AC\u3067\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[free layer="" name="" time="" wait="" cond=""]`
  }],
  [`free_filter`, {
    name: `free_filter`,
    description: `\u30EC\u30A4\u30E4\u3084\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6307\u5B9A\u3057\u3066\u3001[filter]\u52B9\u679C\u3092\u7121\u52B9\u306B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u6D88\u53BB\u3059\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u304C\u306A\u3044\u5834\u5408\u3001\u3059\u3079\u3066\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u304C\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `\u7279\u5B9A\u306E\u8981\u7D20\u306E\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u6D88\u53BB\u3057\u305F\u3044\u5834\u5408\u306B\u3001\u305D\u306E\u8981\u7D20\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[free_filter layer="" name="" cond=""]`
  }],
  [`free_layermode`, {
    name: `free_layermode`,
    description: `\u5408\u6210\u30EC\u30A4\u30E4\u3092\u6D88\u53BB\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u6D88\u53BB\u3059\u308B\u5408\u6210\u30EC\u30A4\u30E4\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u5408\u6210\u30EC\u30A4\u30E4\u304C\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[free_layermode name="" time="" wait="" cond=""]`
  }],
  [`freeimage`, {
    name: `freeimage`,
    description: `\u6307\u5B9A\u3057\u305F\u30EC\u30A4\u30E4\u306B\u5B58\u5728\u3059\u308B\u753B\u50CF\u306A\u3069\u3092\u3059\u3079\u3066\u524A\u9664\u3057\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: true, description: `\u5BFE\u8C61\u306E\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u3001\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u307E\u305F\u306Fback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u30DA\u30FC\u30B8\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u304C\u5F90\u3005\u306B\u900F\u660E\u306B\u306A\u3063\u3066\u3044\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u4E00\u77AC\u3067\u6D88\u53BB\u3055\u308C\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[freeimage layer="" page="" time="" wait="" cond=""]`
  }],
  [`fuki_chara`, {
    name: `fuki_chara`,
    description: `\u3075\u304D\u3060\u3057\u306E\u30C7\u30B6\u30A4\u30F3\u3092\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u3054\u3068\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u3044\u306A\u3044\u3068\u304D\u30C7\u30B6\u30A4\u30F3\u3092\u8A2D\u5B9A\u3059\u308B\u306B\u306Fothers\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u3069\u306E\u4F4D\u7F6E\u306B\u3075\u304D\u3060\u3057\u3092\u8868\u793A\u3059\u308B\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u753B\u50CF\u5DE6\u7AEF\u304B\u3089\u306E\u76F8\u5BFE\u4F4D\u7F6E\uFF09` },
      { name: `top`, required: false, description: `\u3069\u306E\u4F4D\u7F6E\u306B\u3075\u304D\u3060\u3057\u3092\u8868\u793A\u3059\u308B\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u753B\u50CF\u4E0A\u7AEF\u304B\u3089\u306E\u76F8\u5BFE\u4F4D\u7F6E\uFF09` },
      { name: `sippo`, required: false, description: `\u3057\u3063\u307D\u3092\u3069\u306E\u65B9\u5411\u306B\u8868\u793A\u3059\u308B\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002top(\u4E0A)\u3001 bottom(\u4E0B)\u3001left(\u5DE6)\u3001right(\u53F3)` },
      { name: `sippo_left`, required: false, description: `\u3075\u304D\u3060\u3057\u306E\u4F4D\u7F6E\u304Ctop\u304Bbottom\u306E\u5834\u5408\u3001\u3057\u3063\u307D\u3092\u8868\u793A\u3059\u308B\u5DE6\u7AEF\u304B\u3089\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `sippo_top`, required: false, description: `\u3075\u304D\u3060\u3057\u306E\u4F4D\u7F6E\u304Cleft\u304Bright\u306E\u5834\u5408\u3001\u3057\u3063\u307D\u3092\u8868\u793A\u3059\u308B\u4E0A\u7AEF\u304B\u3089\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `sippo_width`, required: false, description: `\u3057\u3063\u307D\u306E\u5E45\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `sippo_height`, required: false, description: `\u3057\u3063\u307D\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `max_width`, required: false, description: `\u3075\u304D\u3060\u3057\u306E\u30B5\u30A4\u30BA\u306F\u81EA\u52D5\u7684\u306B\u8ABF\u6574\u3055\u308C\u307E\u3059\u304C\u3001\u305D\u306E\u969B\u306E\u6A2A\u5E45\u306E\u4E0A\u9650\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `fix_width`, required: false, description: `\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u3075\u304D\u3060\u3057\u306E\u6A2A\u5E45\u306E\u81EA\u52D5\u8ABF\u7BC0\u6A5F\u80FD\u3092\u505C\u6B62\u3057\u3001\u6307\u5B9A\u3057\u305F\u6A2A\u5E45\u3067\u56FA\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u3075\u304D\u3060\u3057\u306E\u8868\u793A\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `border_color`, required: false, description: `\u5916\u67A0\u306E\u7DDA\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002border_size\u306E\u6307\u5B9A\u304C\u540C\u6642\u306B\u5FC5\u8981\u3067\u3059\u3002` },
      { name: `border_size`, required: false, description: `\u5916\u67A0\u306E\u7DDA\u306E\u592A\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u5916\u67A0\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002\u521D\u671F\u5024\u306F0\u3002` },
      { name: `opacity`, required: false, description: `\u3075\u304D\u3060\u3057\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u3002\uFF08\u6587\u5B57\u306E\u4E0D\u900F\u660E\u5EA6\u3084\u3001\u30EC\u30A4\u30E4\u81EA\u4F53\u306E\u4E0D\u900F\u660E\u5EA6\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09` },
      { name: `radius`, required: false, description: `\u3075\u304D\u3060\u3057\u306E\u89D2\u306E\u4E38\u307F\u3092\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F8B\uFF1A10(\u63A7\u3048\u3081\u306A\u89D2\u4E38)\u300130(\u666E\u901A\u306E\u89D2\u4E38)\u3001100(\u5DE8\u5927\u306A\u89D2\u4E38)` },
      { name: `font_color`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `font_size`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[fuki_chara name="" left="" top="" sippo="" sippo_left="" sippo_top="" sippo_width="" sippo_height="" max_width="" fix_width="" color="" border_color="" border_size="" opacity="" radius="" font_color="" font_size="" cond=""]`
  }],
  [`fuki_start`, {
    name: `fuki_start`,
    description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6F2B\u753B\u306E\u3075\u304D\u3060\u3057\u98A8\u306B\u8868\u73FE\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u5BFE\u8C61\u3068\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[fuki_start layer="" cond=""]`
  }],
  [`fuki_stop`, {
    name: `fuki_stop`,
    description: `\u3075\u304D\u3060\u3057\u8868\u793A\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[fuki_stop cond=""]`
  }],
  [`glink`, {
    name: `glink`,
    description: `\u30B0\u30E9\u30D5\u30A3\u30AB\u30EB\u30EA\u30F3\u30AF(\u30C6\u30AD\u30B9\u30C8\u30DC\u30BF\u30F3)\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u306F\u5FC5\u8981\u3042\u308A\u307E\u305B\u3093\u3002`,
    params: [
      { name: `color`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u8272\u3092\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Fblack\u3067\u3059\u3002blackgraywhiteorangeredbluerosygreenpink\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 V501c\u4EE5\u964D\u3067\u306F200\u30D1\u30BF\u30FC\u30F3\u4EE5\u4E0A\u306E\u30C7\u30B6\u30A4\u30F3\u304C\u8FFD\u52A0\u3055\u308C\u307E\u3057\u305F\u3002\u8A73\u3057\u304F\u306F https://tyrano.jp/sample2/code/siryou/1 \u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002` },
      { name: `font_color`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `[anim]\u30BF\u30B0\u306A\u3069\u304B\u3089\u3053\u306E\u540D\u524D\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u3089\u308C\u307E\u3059\u3002\u30AB\u30F3\u30DE\u3067\u533A\u5207\u308B\u3053\u3068\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1Aname\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u306FHTML\u306E\u30AF\u30E9\u30B9\u5C5E\u6027\u306B\u306A\u308A\u307E\u3059\uFF09` },
      { name: `text`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u306E\u5185\u5BB9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `x`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6A2A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `y`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u7E26\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6A2A\u5E45\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u9AD8\u3055\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `size`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002Web\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306Ftyrano/css/font.css\u306B\u5B9A\u7FA9\u3092\u8A18\u8FF0\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `graphic`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u80CC\u666F\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fdata/image\u30D5\u30A9\u30EB\u30C0\u306B\u5165\u308C\u3066\u304F\u3060\u3055\u3044\u3002\u753B\u50CF\u304C\u6307\u5B9A\u3055\u308C\u305F\u5834\u5408\u306Fcolor\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002` },
      { name: `enterimg`, required: false, description: `graphic\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B\u6642\u306B\u6709\u52B9\u3002\u30AB\u30FC\u30BD\u30EB\u304C\u91CD\u306A\u3063\u305F\u6642\u306E\u753B\u50CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059` },
      { name: `clickse`, required: false, description: `\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u305F\u6642\u306B\u518D\u751F\u3055\u308C\u308B\u52B9\u679C\u97F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u52B9\u679C\u97F3\u30D5\u30A1\u30A4\u30EB\u306Fdata/sound\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `enterse`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u4E0A\u306B\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u304C\u4E57\u3063\u305F\u6642\u306B\u518D\u751F\u3059\u308B\u52B9\u679C\u97F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u52B9\u679C\u97F3\u30D5\u30A1\u30A4\u30EB\u306Fsound\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044` },
      { name: `leavese`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u4E0A\u304B\u3089\u30DE\u30A6\u30B9\u30AB\u30FC\u30BD\u30EB\u304C\u5916\u308C\u305F\u6642\u306B\u518D\u751F\u3059\u308B\u52B9\u679C\u97F3\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u52B9\u679C\u97F3\u30D5\u30A1\u30A4\u30EB\u306Fsound\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cm`, required: false, description: `\u30DC\u30BF\u30F3\u30AF\u30EA\u30C3\u30AF\u5F8C\u306B[cm]\u3092\u5B9F\u884C\u3059\u308B\u304B\u3069\u3046\u304B\u3002[glink]\u306F\u901A\u5E38\u3001\u30DC\u30BF\u30F3\u30AF\u30EA\u30C3\u30AF\u5F8C\u306B\u81EA\u52D5\u7684\u306B[cm]\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u304C\u3001false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3053\u306E[cm]\u3092\u5B9F\u884C\u3057\u307E\u305B\u3093\u3002 \u30D7\u30EC\u30A4\u30E4\u30FC\u5165\u529B\u306A\u3069\u306E\u6C7A\u5B9A\u3092[glink]\u3067\u884C\u3044\u305F\u3044\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3057\u3066\u304A\u304D\u3001[commit]\u5F8C\u306B\u624B\u52D5\u3067[cm]\u3092\u5B9F\u884C\u3057\u3066\u30DC\u30BF\u30F3\u3084\u5165\u529B\u30DC\u30C3\u30AF\u30B9\u3092\u6D88\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `exp`, required: false, description: `\u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u6642\u306B\u5B9F\u884C\u3055\u308C\u308BJS\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `preexp`, required: false, description: `\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u305F\u6642\u70B9\u3067\u3001\u3053\u306E\u5C5E\u6027\u306B\u6307\u5B9A\u3057\u305F\u5024\u304C\u5909\u6570preexp\u306B\u683C\u7D0D\u3055\u308C\u307E\u3059\u3002\u305D\u3057\u3066\u30DC\u30BF\u30F3\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u6642\u306Bexp\u5185\u3067preexp\u3068\u3044\u3046\u5909\u6570\u304C\u5229\u7528\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `bold`, required: false, description: `\u592A\u5B57\u306B\u3059\u308B\u5834\u5408\u306Ftrue\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `opacity`, required: false, description: `\u9818\u57DF\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u3067\u3059\u3002` },
      { name: `edge`, required: false, description: `\u6587\u5B57\u306E\u7E01\u53D6\u308A\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002\u7E01\u53D6\u308A\u8272\u30920xRRGGBB\u5F62\u5F0F\u7B49\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A\u7E01\u53D6\u308A\u306E\u592A\u3055\u3082\u3042\u308F\u305B\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u30024px 0xFF0000\u306E\u3088\u3046\u306B\u3001\u8272\u306E\u524D\u306B\u7E01\u53D6\u308A\u306E\u592A\u3055\u3092px\u4ED8\u304D\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002\u592A\u3055\u3068\u8272\u306F\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3067\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3055\u3089\u306B4px 0xFF0000, 2px 0xFFFFFF\u306E\u3088\u3046\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u306E\u7E01\u53D6\u308A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `shadow`, required: false, description: `\u6587\u5B57\u306B\u5F71\u3092\u3064\u3051\u307E\u3059\u3002\u5F71\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `keyfocus`, required: false, description: `false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u3084\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\u3067\u9078\u629E\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u307E\u305F1\u30842\u306A\u3069\u306E\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u306Efocus_next\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u3066\u3044\u304F\u3068\u304D\u306E\u9806\u5E8F\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `autopos`, required: false, description: `true\u304Bfalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30DC\u30BF\u30F3\u306E\u4F4D\u7F6E\u3092\u81EA\u52D5\u7684\u306B\u8ABF\u6574\u3057\u307E\u3059\u3002\u3064\u307E\u308Ax\u3068y\u306B\u4F55\u3082\u6307\u5B9A\u3057\u306A\u304B\u3063\u305F\u3068\u540C\u3058\u52D5\u4F5C\u306B\u306A\u308A\u307E\u3059` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[glink color="" font_color="" storage="" target="" name="" text="" x="" y="" width="" height="" size="" face="" graphic="" enterimg="" clickse="" enterse="" leavese="" cm="" exp="" preexp="" bold="" opacity="" edge="" shadow="" keyfocus="" autopos="" cond=""]`
  }],
  [`glink_config`, {
    name: `glink_config`,
    description: `V515\u4EE5\u964D\u3067\u4F7F\u7528\u53EF\u80FD\u3002`,
    params: [
      { name: `auto_place`, required: false, description: `[glink]\u306E\u81EA\u52D5\u914D\u7F6E\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001x\u3068y\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u306A\u3044[glink]\u3092\u5BFE\u8C61\u3068\u3059\u308B\u81EA\u52D5\u914D\u7F6E\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002false\u3067\u7121\u52B9\u3002` },
      { name: `auto_place_force`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001x\u3068y\u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u308B[glink]\u3082\u5F37\u5236\u7684\u306B\u81EA\u52D5\u914D\u7F6E\u306E\u5BFE\u8C61\u306B\u3057\u307E\u3059\u3002` },
      { name: `margin_x`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u5916\u5074\u306B\u4ED8\u3051\u308B\u6A2A\u4F59\u767D\u3092\u6570\u5024(px)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `margin_y`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u5916\u5074\u306B\u4ED8\u3051\u308B\u7E26\u4F59\u767D\u3092\u6570\u5024(px)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `padding_x`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u5185\u5074\u306B\u4ED8\u3051\u308B\u6A2A\u4F59\u767D\u3092\u6570\u5024(px)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002default\u3092\u6307\u5B9A\u3059\u308B\u3068\u8ABF\u6574\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `padding_y`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u5185\u5074\u306B\u4ED8\u3051\u308B\u7E26\u4F59\u767D\u3092\u6570\u5024(px)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002default\u3092\u6307\u5B9A\u3059\u308B\u3068\u8ABF\u6574\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `width`, required: false, description: `max\u3068\u6307\u5B9A\u3059\u308B\u3068\u3001\u30DC\u30BF\u30F3\u306E\u6A2A\u5E45\u3092\u300E\u4E00\u756A\u6A2A\u5E45\u306E\u5927\u304D\u3044\u30DC\u30BF\u30F3\u306E\u6A2A\u5E45\u300F\u306B\u63C3\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6570\u5024\u3092\u76F4\u63A5\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u5171\u901A\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002default\u3092\u6307\u5B9A\u3059\u308B\u3068\u8ABF\u6574\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `height`, required: false, description: `max\u3068\u6307\u5B9A\u3059\u308B\u3068\u3001\u30DC\u30BF\u30F3\u306E\u9AD8\u3055\u3092\u300E\u4E00\u756A\u6A2A\u5E45\u306E\u5927\u304D\u3044\u30DC\u30BF\u30F3\u306E\u9AD8\u3055\u300F\u306B\u63C3\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6570\u5024\u3092\u76F4\u63A5\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u5171\u901A\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002default\u3092\u6307\u5B9A\u3059\u308B\u3068\u8ABF\u6574\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `vertical`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u7E26\u65B9\u5411\u306E\u63C3\u3048\u65B9\u3092top(\u4E0A\u63C3\u3048)\u3001center(\u4E2D\u592E\u63C3\u3048)\u3001bottom(\u4E0B\u63C3\u3048)\u306E\u3044\u305A\u308C\u304B\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `horizontal`, required: false, description: `\u30DC\u30BF\u30F3\u306E\u6A2A\u65B9\u5411\u306E\u63C3\u3048\u65B9\u3092left(\u5DE6\u63C3\u3048)\u3001center(\u4E2D\u592E\u63C3\u3048)\u3001right(\u53F3\u63C3\u3048)\u306E\u3044\u305A\u308C\u304B\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wrap`, required: false, description: `wrap\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30DC\u30BF\u30F3\u304C\u53CE\u307E\u308A\u304D\u3089\u306A\u3044\u3068\u304D\u306E\u6298\u308A\u8FD4\u3057\u304C\u6709\u52B9\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `place_area`, required: false, description: `\u63C3\u3048\u65B9\u306E\u57FA\u6E96\u3068\u306A\u308B\u9818\u57DF\u306E\u4F4D\u7F6E\u3084\u5927\u304D\u3055\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002auto(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u8003\u616E\u3057\u3066\u81EA\u52D5\u3067\u9818\u57DF\u3092\u8ABF\u6574\u3057\u307E\u3059\u3002cover\u3060\u3068\u753B\u9762\u5168\u4F53\u3092\u57FA\u6E96\u306B\u3057\u307E\u3059\u3002\u9818\u57DF\u306E\u4F4D\u7F6E\u3068\u30B5\u30A4\u30BA\u3092\u76F4\u63A5\u6307\u5B9A\u3057\u305F\u3044\u5834\u5408\u306F100,100,1000,1000\u306E\u3088\u3046\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u6570\u5024\u30924\u3064\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u3046\u3059\u308B\u3068\u3001\u9806\u306Bleft, top, width, height\u3068\u3057\u3066\u89E3\u91C8\u3055\u308C\u307E\u3059\u3002` },
      { name: `show_time`, required: false, description: `\u8868\u793A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u304B\u3051\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u884C\u3044\u307E\u305B\u3093\u3002\u306A\u304A\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u4E2D\u306F\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u305B\u3093\u3002` },
      { name: `show_effect`, required: false, description: `\u8868\u793A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304B\u3089\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpbounceInbounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn` },
      { name: `show_keyframe`, required: false, description: `\u8868\u793A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3068\u3057\u3066[keyframe]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305F\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306Ename\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001show_effect\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002` },
      { name: `show_delay`, required: false, description: `\u5404\u30DC\u30BF\u30F3\u3092\u8868\u793A\u3057\u3066\u3044\u304F\u969B\u306E\u9045\u5EF6\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020\u3060\u3068\u3059\u3079\u3066\u306E\u30DC\u30BF\u30F3\u304C\u540C\u6642\u306B\u8868\u793A\u3055\u308C\u3001\u305F\u3068\u3048\u3070100\u3068\u6307\u5B9A\u3059\u308B\u3068100\u30DF\u30EA\u79D2\u3054\u3068\u306B1\u500B\u305A\u3064\u30DC\u30BF\u30F3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `show_easing`, required: false, description: `\u8868\u793A\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5909\u5316\u30D1\u30BF\u30FC\u30F3\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Flinear\u3002 ease(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u6ED1\u3089\u304B\u306B\u518D\u751F\u3059\u308B) linear(\u4E00\u5B9A\u306E\u9593\u9694\u3067\u518D\u751F\u3059\u308B) ease-in(\u958B\u59CB\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-out(\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-in-out(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) \u3053\u306E\u4ED6\u306Bcubic-bezier\u95A2\u6570\u3092\u4F7F\u3063\u3066\u72EC\u81EA\u306E\u30A4\u30FC\u30B8\u30F3\u30B0\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002` },
      { name: `select_time`, required: false, description: `\u30DC\u30BF\u30F3\u304C\u9078\u629E\u3055\u308C\u305F\u3068\u304D\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u304B\u3051\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `select_effect`, required: false, description: `\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 fadeOutfadeOutDownBigfadeOutLeftBigfadeOutRightBigfadeOutUpBigflipOutXflipOutYlightSpeedOutrotateOutrotateOutDownLeftrotateOutDownRightrotateOutUpLeftrotateOutUpRightzoomOutzoomOutDownzoomOutLeftzoomOutRightzoomOutUpslideOutDownslideOutLeftslideOutRightslideOutUpbounceOut bounceOutDownbounceOutLeftbounceOutRightbounceOutUp` },
      { name: `select_keyframe`, required: false, description: `\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3068\u3057\u3066[keyframe]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305F\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306Ename\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001select_effect\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002` },
      { name: `select_delay`, required: false, description: `\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3059\u308B\u307E\u3067\u306E\u9045\u5EF6\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `select_easing`, required: false, description: `\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u2015\u30B7\u30E7\u30F3\u306E\u30A4\u30FC\u30B8\u30F3\u30B0\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `reject_time`, required: false, description: `\u30DC\u30BF\u30F3\u304C\u9078\u629E\u3055\u308C\u306A\u304B\u3063\u305F\u3068\u304D\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306B\u304B\u3051\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `reject_effect`, required: false, description: `\u975E\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 fadeOutfadeOutDownBigfadeOutLeftBigfadeOutRightBigfadeOutUpBigflipOutXflipOutYlightSpeedOutrotateOutrotateOutDownLeftrotateOutDownRightrotateOutUpLeftrotateOutUpRightzoomOutzoomOutDownzoomOutLeftzoomOutRightzoomOutUpslideOutDownslideOutLeftslideOutRightslideOutUpbounceOut bounceOutDownbounceOutLeftbounceOutRightbounceOutUp` },
      { name: `reject_keyframe`, required: false, description: `\u975E\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3068\u3057\u3066[keyframe]\u30BF\u30B0\u3067\u5B9A\u7FA9\u3057\u305F\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306Ename\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001reject_effect\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002` },
      { name: `reject_delay`, required: false, description: `\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3059\u308B\u307E\u3067\u306E\u9045\u5EF6\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `reject_easing`, required: false, description: `\u9078\u629E\u6642\u306E\u9000\u5834\u30A2\u30CB\u30E1\u2015\u30B7\u30E7\u30F3\u306E\u30A4\u30FC\u30B8\u30F3\u30B0\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[glink_config auto_place="" auto_place_force="" margin_x="" margin_y="" padding_x="" padding_y="" width="" height="" vertical="" horizontal="" wrap="" place_area="" show_time="" show_effect="" show_keyframe="" show_delay="" show_easing="" select_time="" select_effect="" select_keyframe="" select_delay="" select_easing="" reject_time="" reject_effect="" reject_keyframe="" reject_delay="" reject_easing="" cond=""]`
  }],
  [`glyph`, {
    name: `glyph`,
    description: `\u30AF\u30EA\u30C3\u30AF\u5F85\u3061\u30B0\u30EA\u30D5\uFF08[l]\u3084[p]\u3067\u30AF\u30EA\u30C3\u30AF\u3092\u5F85\u3064\u72B6\u614B\u306E\u3068\u304D\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u672B\u5C3E\u306B\u8868\u793A\u3055\u308C\u308B\u753B\u50CF\uFF09\u306E\u8A2D\u5B9A\u304C\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3092\u5909\u66F4\u3057\u305F\u308A\u3001\u4F4D\u7F6E\u3092\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u6700\u5F8C\u3067\u306F\u306A\u304F\u753B\u9762\u4E0A\u306E\u56FA\u5B9A\u4F4D\u7F6E\u306B\u51FA\u3059\u3088\u3046\u306B\u3057\u305F\u308A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `line`, required: false, description: `\u30B0\u30EA\u30D5\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306F\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306Ftyrano/images/system\u30D5\u30A9\u30EB\u30C0\uFF08nextpage.gif\u304C\u3042\u308B\u30D5\u30A9\u30EB\u30C0\uFF09\u304B\u3089\u63A2\u3055\u308C\u307E\u3059\u3002folder\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u5909\u66F4\u53EF\u3002` },
      { name: `fix`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30B0\u30EA\u30D5\u304C\u30E1\u30C3\u30BB\u30FC\u30B8\u306E\u672B\u5C3E\u3067\u306F\u306A\u304F\u30B2\u30FC\u30E0\u753B\u9762\u4E0A\u306E\u56FA\u5B9A\u4F4D\u7F6E\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u30B0\u30EA\u30D5\u3092\u8868\u793A\u3059\u308B\u6A2A\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08fix\u5C5E\u6027\u3092true\u306B\u3057\u305F\u5834\u5408\u306B\u6709\u52B9\uFF09` },
      { name: `top`, required: false, description: `\u30B0\u30EA\u30D5\u3092\u8868\u793A\u3059\u308B\u7E26\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08fix\u5C5E\u6027\u3092true\u306B\u3057\u305F\u5834\u5408\u306B\u6709\u52B9\uFF09` },
      { name: `folder`, required: false, description: `\u30B0\u30EA\u30D5\u306E\u753B\u50CF\u3092\u63A2\u3059\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30B0\u30EA\u30D5\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u30B0\u30EA\u30D5\u306E\u9AD8\u3055\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `marginl`, required: false, description: `\u30B0\u30EA\u30D5\u306E\u5DE6\u5074\u306E\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `marginb`, required: false, description: `\u30B0\u30EA\u30D5\u306E\u4E0B\u5074\u306E\u4F59\u767D\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `anim`, required: false, description: `\u30B0\u30EA\u30D5\u306B\u9069\u7528\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304B\u3089\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 flash_momentary(\u77AC\u9593\u7684\u306A\u70B9\u6EC5) flash(\u6ED1\u3089\u304B\u306A\u70B9\u6EC5) spin_x(X\u8EF8\u3092\u4E2D\u5FC3\u306B\u56DE\u8EE2) spin_y(Y\u8EF8\u3092\u4E2D\u5FC3\u306B\u56DE\u8EE2) spin_z(Z\u8EF8\u3092\u4E2D\u5FC3\u306B\u56DE\u8EE2) bounce(\u30D0\u30A6\u30F3\u30C9) rotate_bounce(\u56DE\u8EE2\u3057\u306A\u304C\u3089\u30D0\u30A6\u30F3\u30C9) soft_bounce(\u307D\u3088\u3093\u3068\u5F3E\u3080\u30D0\u30A6\u30F3\u30C9) zoom(\u62E1\u7E2E)` },
      { name: `time`, required: false, description: `\u30B0\u30EA\u30D5\u306B\u9069\u7528\u3059\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `figure`, required: false, description: `\u30B0\u30EA\u30D5\u306B\u4F7F\u7528\u3059\u308B\u56F3\u5F62\u3092\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304B\u3089\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 circle(\u5186) triangle(\u4E09\u89D2\u5F62) v_triangle(\u4E0B\u5411\u304D\u4E09\u89D2\u5F62) rectangle(\u56DB\u89D2\u5F62) diamond(\u3072\u3057\u5F62) start(\u661F)` },
      { name: `color`, required: false, description: `\u30B0\u30EA\u30D5\u306B\u56F3\u5F62\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u3001\u56F3\u5F62\u306E\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `\u30B0\u30EA\u30D5\u306B\u4ED8\u3051\u308B\u30AF\u30E9\u30B9\u540D\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u4E0A\u7D1A\u8005\u5411\u3051\uFF09` },
      { name: `html`, required: false, description: `\u30B0\u30EA\u30D5\u306E\u30B3\u30F3\u30C6\u30F3\u30C4\u3068\u3057\u3066HTML\u3092\u76F4\u63A5\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u4E0A\u7D1A\u8005\u5411\u3051\uFF09` },
      { name: `keyframe`, required: false, description: `\u9069\u7528\u3059\u308B\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002anim\u3068\u4F75\u7528\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002` },
      { name: `easing`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5909\u5316\u30D1\u30BF\u30FC\u30F3\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 ease(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u6ED1\u3089\u304B\u306B\u518D\u751F\u3059\u308B) linear(\u4E00\u5B9A\u306E\u9593\u9694\u3067\u518D\u751F\u3059\u308B) ease-in(\u958B\u59CB\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-out(\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-in-out(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) \u3053\u306E\u4ED6\u306Bcubic-bezier\u95A2\u6570\u3092\u4F7F\u3063\u3066\u72EC\u81EA\u306E\u30A4\u30FC\u30B8\u30F3\u30B0\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002` },
      { name: `count`, required: false, description: `\u518D\u751F\u56DE\u6570\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002infinite\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u7121\u9650\u30EB\u30FC\u30D7\u3055\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002` },
      { name: `delay`, required: false, description: `\u958B\u59CB\u307E\u3067\u306E\u6642\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u521D\u671F\u5024\u306F0\u3001\u3064\u307E\u308A\u9045\u5EF6\u306A\u3057\u3067\u3059\u3002` },
      { name: `direction`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8907\u6570\u56DE\u30EB\u30FC\u30D7\u3055\u305B\u308B\u5834\u5408\u306B\u3001\u5076\u6570\u56DE\u76EE\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u9006\u518D\u751F\u306B\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u5076\u6570\u56DE\u76EE\u3092\u9006\u518D\u751F\u306B\u3059\u308B\u5834\u5408\u306Falternate\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `mode`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u72B6\u614B\uFF08\u4F4D\u7F6E\u3001\u56DE\u8EE2\u306A\u3069\uFF09\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u7D42\u4E86\u5F8C\u3082\u7DAD\u6301\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002forwards(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u7DAD\u6301\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u518D\u751F\u524D\u306E\u72B6\u614B\u306B\u623B\u308A\u307E\u3059\u3002` },
      { name: `koma_anim`, required: false, description: `\u30B0\u30EA\u30D5\u306B\u4F7F\u7528\u3059\u308B\u30B3\u30DE\u30A2\u30CB\u30E1\u306E\u753B\u50CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30B3\u30DE\u30A2\u30CB\u30E1\u306B\u4F7F\u7528\u3059\u308B\u753B\u50CF\u306F\u300C\u3059\u3079\u3066\u306E\u30B3\u30DE\u304C\u6A2A\u4E26\u3073\u3067\u9023\u7D50\u3055\u308C\u305F\u3072\u3068\u3064\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u300D\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002` },
      { name: `koma_count`, required: false, description: `\u30B3\u30DE\u30A2\u30CB\u30E1\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u3001\u753B\u50CF\u306B\u542B\u307E\u308C\u308B\u30B3\u30DE\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001koma_width\u3092\u7701\u7565\u3067\u304D\u307E\u3059\u3002` },
      { name: `koma_width`, required: false, description: `\u30B3\u30DE\u30A2\u30CB\u30E1\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u30011\u30B3\u30DE\u3042\u305F\u308A\u306E\u6A2A\u5E45\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001koma_count\u3092\u7701\u7565\u3067\u304D\u307E\u3059\u3002` },
      { name: `koma_anim_time`, required: false, description: `\u30B3\u30DE\u30A2\u30CB\u30E1\u304C1\u5468\u3059\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[glyph line="" fix="" left="" top="" folder="" width="" height="" marginl="" marginb="" anim="" time="" figure="" color="" name="" html="" keyframe="" easing="" count="" delay="" direction="" mode="" koma_anim="" koma_count="" koma_width="" koma_anim_time="" cond=""]`
  }],
  [`glyph_auto`, {
    name: `glyph_auto`,
    description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u4E2D\u306B\u8868\u793A\u3055\u308C\u308B\u30B0\u30EA\u30D5\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `fix`, required: false, description: `\u753B\u9762\u56FA\u5B9A\u30B0\u30EA\u30D5\u306E\u8A2D\u5B9A\u3092\u3059\u308B\u306A\u3089true\u3001\u30E1\u30C3\u30BB\u30FC\u30B8\u672B\u5C3E\u306E\u30B0\u30EA\u30D5\u306E\u8A2D\u5B9A\u3092\u3059\u308B\u306A\u3089false\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u30B0\u30EA\u30D5\u306B\u9650\u308A\u3001\u56FA\u5B9A\u30B0\u30EA\u30D5\u3068\u975E\u56FA\u5B9A\u30B0\u30EA\u30D5\u3092\u4E21\u65B9\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `use`, required: false, description: `\u3059\u3067\u306B\u753B\u9762\u4E0A\u306B\u51FA\u3066\u3044\u308B\u8981\u7D20\u3092\u753B\u9762\u56FA\u5B9A\u30B0\u30EA\u30D5\u3068\u3057\u3066\u6271\u3046\u3088\u3046\u306B\u3067\u304D\u307E\u3059\u3002[ptext]\u3084[image]\u306B\u8A2D\u5B9A\u3057\u305Fname\u3092\u3053\u3053\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `delete`, required: false, description: `true\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u30B0\u30EA\u30D5\u306E\u5B9A\u7FA9\u3092\u524A\u9664\u3059\u308B\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u305D\u306E\u4ED6: [glyph]\u3068\u540C\u3058\u30D1\u30E9\u30E1\u30FC\u30BF\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[glyph_auto fix="" use="" delete="" \u305D\u306E\u4ED6="" cond=""]`
  }],
  [`glyph_skip`, {
    name: `glyph_skip`,
    description: `\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u4E2D\u306B\u8868\u793A\u3055\u308C\u308B\u30B0\u30EA\u30D5\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `use`, required: false, description: `\u3059\u3067\u306B\u753B\u9762\u4E0A\u306B\u51FA\u3066\u3044\u308B\u8981\u7D20\u3092\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u4E2D\u306E\u30B0\u30EA\u30D5\u3068\u3057\u3066\u6271\u3046\u3088\u3046\u306B\u3067\u304D\u307E\u3059\u3002[ptext]\u3084[image]\u306B\u8A2D\u5B9A\u3057\u305Fname\u3092\u3053\u3053\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `delete`, required: false, description: `true\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u30B0\u30EA\u30D5\u306E\u5B9A\u7FA9\u3092\u524A\u9664\u3059\u308B\u51E6\u7406\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002 \u305D\u306E\u4ED6: [glyph]\u3068\u540C\u3058\u30D1\u30E9\u30E1\u30FC\u30BF\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u305F\u3060\u3057fix\u30D1\u30E9\u30E1\u30FC\u30BF\u306Ftrue\u3067\u56FA\u5B9A\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[glyph_skip use="" delete="" \u305D\u306E\u4ED6="" cond=""]`
  }],
  [`graph`, {
    name: `graph`,
    description: `\u4EFB\u610F\u306E\u753B\u50CF\u3092\u30E1\u30C3\u30BB\u30FC\u30B8\u4E2D\u306B\u8868\u793A\u3057\u307E\u3059\u3002\u7D75\u6587\u5B57\u3084\u7279\u6B8A\u6587\u5B57\u306A\u3069\u306B\u6D3B\u7528\u3067\u304D\u307E\u3059\u3002
\u8868\u793A\u3059\u308B\u753B\u50CF\u306Fdata/image\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002
\u3088\u304F\u4F7F\u3046\u8A18\u53F7\u306B\u3064\u3044\u3066\u306F\u30DE\u30AF\u30ED\u3092\u7D44\u3093\u3067\u304A\u304F\u3068\u697D\u3067\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u8868\u793A\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[graph storage="" cond=""]`
  }],
  [`hidemenubutton`, {
    name: `hidemenubutton`,
    description: `\u30E1\u30CB\u30E5\u30FC\u30DC\u30BF\u30F3\u3092\u975E\u8868\u793A\u306B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[hidemenubutton cond=""]`
  }],
  [`hidemessage`, {
    name: `hidemessage`,
    description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u4E00\u6642\u7684\u306B\u96A0\u3057\u3066\u30AF\u30EA\u30C3\u30AF\u3092\u5F85\u3061\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u306F\u6D88\u53BB\u3055\u308C\u307E\u305B\u3093\u3002\u30E1\u30CB\u30E5\u30FC\u304B\u3089\u300C\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u6D88\u3059\u300D\u3092\u9078\u3093\u3060\u306E\u3068\u540C\u3058\u52D5\u4F5C\u3092\u884C\u3044\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[hidemessage cond=""]`
  }],
  [`html`, {
    name: `html`,
    description: `[html]\u3068[endhtml]\u306E\u9593\u306B\u8A18\u8FF0\u3057\u305FHTML\u3092\u8868\u793A\u3067\u304D\u307E\u3059\u3002\u3053\u306EHTML\u306F\u6700\u524D\u9762\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `left`, required: false, description: `HTML\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `top`, required: false, description: `HTML\u306E\u4E0A\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `name`, required: false, description: `HTML\u9818\u57DF\u306B\u540D\u524D\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u540D\u524D\u3092\u4F7F\u3063\u3066\u3001HTML\u9818\u57DF\u306B\u5BFE\u3057\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[html left="" top="" name="" cond=""]`
  }],
  [`if`, {
    name: `if`,
    description: `\u6761\u4EF6\u5206\u5C90\u3092\u884C\u3044\u307E\u3059\u3002`,
    params: [
      { name: `exp`, required: true, description: `\u8A55\u4FA1\u3059\u308BJavaScript\u306E\u5F0F\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[if exp="" cond=""]`
  }],
  [`ignore`, {
    name: `ignore`,
    description: `exp\u306B\u6307\u5B9A\u3055\u308C\u305FJavaScript\u306E\u5F0F\u3092\u8A55\u4FA1\u3057\u307E\u3059\u3002\u305D\u306E\u7D50\u679C\u304Ctrue(\u771F)\u306A\u3089\u3070\u3001[ignore]\u3068[endignore]\u3067\u56F2\u307E\u308C\u305F\u6587\u7AE0\u3084\u30BF\u30B0\u304C\u7121\u8996\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `exp`, required: true, description: `\u8A55\u4FA1\u3059\u308BJavaScript\u306E\u5F0F\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[ignore exp="" cond=""]`
  }],
  [`image`, {
    name: `image`,
    description: `\u6307\u5B9A\u3057\u305F\u30EC\u30A4\u30E4\u306B\u753B\u50CF\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u8868\u793A\u3084\u80CC\u666F\u5207\u308A\u66FF\u3048\u306A\u3069\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306F\u80CC\u666F\u30EC\u30A4\u30E4\u306A\u3089data/bgimage\u3001\u524D\u666F\u30EC\u30A4\u30E4\u306A\u3089data/fgimage\u306B\u5165\u308C\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `layer`, required: false, description: `\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 base\u3092\u6307\u5B9A\u3059\u308B\u3068\u80CC\u666F\u30EC\u30A4\u30E4\u30020\u4EE5\u4E0A\u306E\u6574\u6570\u3092\u6307\u5B9A\u3059\u308B\u3068\u5BFE\u5FDC\u3059\u308B\u524D\u666F\u30EC\u30A4\u30E4\u306B\u753B\u50CF\u3092\u8868\u793A\u3057\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u3001\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u307E\u305F\u306Fback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u30DA\u30FC\u30B8\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `visible`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u3092\u8FFD\u52A0\u3059\u308B\u3068\u540C\u6642\u306B\u5BFE\u8C61\u30EC\u30A4\u30E4\u3092\u8868\u793A\u72B6\u614B\u306B\u3057\u307E\u3059\u3002\u3064\u307E\u308A\u3001[layopt visible="true"]\u3092\u7701\u7565\u3067\u304D\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u753B\u50CF\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `top`, required: false, description: `\u753B\u50CF\u306E\u4E0A\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `x`, required: false, description: `\u753B\u50CF\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002left\u3068\u540C\u69D8\u3002\u3053\u3061\u3089\u304C\u512A\u5148\u5EA6\u9AD8\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `y`, required: false, description: `\u753B\u50CF\u306E\u4E0A\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002top\u3068\u540C\u69D8\u3002\u3053\u3061\u3089\u304C\u512A\u5148\u5EA6\u9AD8\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `width`, required: false, description: `\u753B\u50CF\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `height`, required: false, description: `\u753B\u50CF\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `folder`, required: false, description: `\u753B\u50CF\u304C\u5165\u3063\u3066\u3044\u308B\u30D5\u30A9\u30EB\u30C0\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u524D\u666F\u30EC\u30A4\u30E4\u7528\u306E\u753B\u50CF\u306Ffgimage\u30D5\u30A9\u30EB\u30C0\u3001\u80CC\u666F\u30EC\u30A4\u30E4\u7528\u306E\u753B\u50CF\u306Fbgimage\u30D5\u30A9\u30EB\u30C0\u3068\u6C7A\u307E\u3063\u3066\u3044\u307E\u3059\u304C\u3001\u3053\u308C\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `[anim]\u30BF\u30B0\u306A\u3069\u304B\u3089\u3053\u306E\u540D\u524D\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u3089\u308C\u307E\u3059\u3002\u30AB\u30F3\u30DE\u3067\u533A\u5207\u308B\u3053\u3068\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1Aname\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u306FHTML\u306E\u30AF\u30E9\u30B9\u5C5E\u6027\u306B\u306A\u308A\u307E\u3059\uFF09` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u304C\u900F\u660E\u306A\u72B6\u614B\u304B\u3089\u5F90\u3005\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u4E00\u77AC\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `zindex`, required: false, description: `\u753B\u50CF\u540C\u58EB\u306E\u91CD\u306A\u308A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u6570\u5024\u304C\u5927\u304D\u3044\u65B9\u304C\u524D\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `depth`, required: false, description: `zindex\u304C\u540C\u4E00\u306A\u5834\u5408\u306E\u91CD\u306A\u308A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002front(\u6700\u524D\u9762)\u307E\u305F\u306Fback(\u6700\u5F8C\u9762)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffront\u3002` },
      { name: `reflect`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u5DE6\u53F3\u53CD\u8EE2\u3057\u307E\u3059\u3002` },
      { name: `pos`, required: false, description: `\u753B\u50CF\u306E\u4F4D\u7F6E\u3092\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u6C7A\u5B9A\u3057\u307E\u3059\u3002 \u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u306Fleft(\u5DE6\u7AEF)\u3001left_center(\u5DE6\u5BC4\u308A)\u3001center(\u4E2D\u592E)\u3001right_center(\u53F3\u5BC4\u308A)\u3001right(\u53F3\u7AEF)\u3002\u5404\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u5BFE\u5FDC\u3059\u308B\u5B9F\u969B\u306E\u5EA7\u6A19\u306FConfig.tjs\u3067\u8A2D\u5B9A\u3055\u308C\u3066\u304A\u308A\u3001\u81EA\u7531\u306B\u7DE8\u96C6\u3067\u304D\u307E\u3059\u3002 \u5404\u30AD\u30FC\u30EF\u30FC\u30C9\u306B\u306F\u305D\u308C\u305E\u308C\u7701\u7565\u5F62\u304C\u3042\u308A\u3001l\u3001lc\u3001c\u3001rc\u3001r\u3068\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u52D5\u4F5C\u306F\u540C\u3058\u3067\u3059\u3002 \u3053\u306E\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u306Fleft\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u7121\u8996\u3055\u308C\u307E\u3059\u3002 layer\u3092base\u3068\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u3053\u306E\u5C5E\u6027\u306F\u6307\u5B9A\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002` },
      { name: `animimg`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001GIF\u307E\u305F\u306FAPNG\u5F62\u5F0F\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u753B\u50CF\u3092\u6700\u521D\u304B\u3089\u518D\u751F\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[image storage="" layer="" page="" visible="" left="" top="" x="" y="" width="" height="" folder="" name="" time="" wait="" zindex="" depth="" reflect="" pos="" animimg="" cond=""]`
  }],
  [`iscript`, {
    name: `iscript`,
    description: `[iscript]\u3068[endscript]\u306B\u56F2\u307E\u308C\u305F\u7B87\u6240\u306BJavaScript\u306E\u6587\u3092\u8A18\u8FF0\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[iscript cond=""]`
  }],
  [`jump`, {
    name: `jump`,
    description: `\u6307\u5B9A\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u6307\u5B9A\u30E9\u30D9\u30EB\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[jump storage="" target="" cond=""]`
  }],
  [`kanim`, {
    name: `kanim`,
    description: `\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9F\u884C\u3057\u307E\u3059\u3002\u4E8B\u524D\u306B[keyframe]\u30BF\u30B0\u3067\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5B9A\u7FA9\u3057\u3066\u304A\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u753B\u50CF\u3084\u30C6\u30AD\u30B9\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `name\u3092\u6307\u5B9A\u305B\u305A\u306Blayer\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u30EC\u30A4\u30E4\u306B\u5B58\u5728\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `keyframe`, required: true, description: `\u9069\u7528\u3059\u308B\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `easing`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5909\u5316\u30D1\u30BF\u30FC\u30F3\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 ease(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u6ED1\u3089\u304B\u306B\u518D\u751F\u3059\u308B) linear(\u4E00\u5B9A\u306E\u9593\u9694\u3067\u518D\u751F\u3059\u308B) ease-in(\u958B\u59CB\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-out(\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-in-out(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) \u3053\u306E\u4ED6\u306Bcubic-bezier\u95A2\u6570\u3092\u4F7F\u3063\u3066\u72EC\u81EA\u306E\u30A4\u30FC\u30B8\u30F3\u30B0\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002` },
      { name: `count`, required: false, description: `\u518D\u751F\u56DE\u6570\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002infinite\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u7121\u9650\u30EB\u30FC\u30D7\u3055\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002` },
      { name: `delay`, required: false, description: `\u958B\u59CB\u307E\u3067\u306E\u6642\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u521D\u671F\u5024\u306F0\u3001\u3064\u307E\u308A\u9045\u5EF6\u306A\u3057\u3067\u3059\u3002` },
      { name: `direction`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8907\u6570\u56DE\u30EB\u30FC\u30D7\u3055\u305B\u308B\u5834\u5408\u306B\u3001\u5076\u6570\u56DE\u76EE\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u9006\u518D\u751F\u306B\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u5076\u6570\u56DE\u76EE\u3092\u9006\u518D\u751F\u306B\u3059\u308B\u5834\u5408\u306Falternate\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `mode`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u72B6\u614B\uFF08\u4F4D\u7F6E\u3001\u56DE\u8EE2\u306A\u3069\uFF09\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u7D42\u4E86\u5F8C\u3082\u7DAD\u6301\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002forwards(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u7DAD\u6301\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u518D\u751F\u524D\u306E\u72B6\u614B\u306B\u623B\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[kanim name="" layer="" keyframe="" time="" easing="" count="" delay="" direction="" mode="" cond=""]`
  }],
  [`keyframe`, {
    name: `keyframe`,
    description: `\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B9A\u7FA9\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30AD\u30FC\u30D6\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002[kanim]\u30BF\u30B0\u3067\u4F7F\u7528\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[keyframe name="" cond=""]`
  }],
  [`l`, {
    name: `l`,
    description: `\u3053\u306E\u30BF\u30B0\u306E\u4F4D\u7F6E\u3067\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AF\u30EA\u30C3\u30AF\u3092\u5F85\u3061\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[l cond=""]`
  }],
  [`lang_set`, {
    name: `lang_set`,
    description: `\u30B2\u30FC\u30E0\u3067\u4F7F\u7528\u3059\u308B\u8A00\u8A9E\u3092\u5909\u66F4\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u4F8B\u3048\u3070[lang_set name="en"] \u3092\u6307\u5B9A\u3059\u308B\u3068 data/others/lang/en.json \u306E\u7FFB\u8A33\u8A2D\u5B9A\u304C\u63A1\u7528\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `default\u3092\u6307\u5B9A\u3059\u308B\u3068\u30ED\u30FC\u30AB\u30E9\u30A4\u30BA\u3092\u884C\u3044\u307E\u305B\u3093\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[lang_set name="" cond=""]`
  }],
  [`layermode`, {
    name: `layermode`,
    description: `\u30B2\u30FC\u30E0\u753B\u9762\u4E0A\u306B\u753B\u50CF\u3092\u5408\u6210\u3067\u304D\u307E\u3059\u3002\u4E57\u7B97\u3001\u30B9\u30AF\u30EA\u30FC\u30F3\u3001\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u306A\u3069\u306E\u5408\u6210\u65B9\u6CD5\u3092\u9078\u3079\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u5408\u6210\u3059\u308B\u753B\u50CF\u306B\u3064\u3051\u308B\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u3053\u3067\u6307\u5B9A\u3057\u305F\u540D\u524D\u306F[free_layremovde]\u3067\u7279\u5B9A\u306E\u5408\u6210\u306E\u307F\u3092\u6D88\u3057\u305F\u3044\u969B\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002` },
      { name: `graphic`, required: false, description: `\u5408\u6210\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u753B\u50CF\u3092\u4F7F\u308F\u305A\u5358\u8272\u3092\u5408\u6210\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u305D\u306E\u5834\u5408\u3001\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u5408\u6210\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `mode`, required: false, description: `\u5408\u6210\u65B9\u6CD5\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 multiply(\u4E57\u7B97) screen(\u30B9\u30AF\u30EA\u30FC\u30F3) overlay(\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4) darken(\u6697\u304F) lighten(\u660E\u308B\u304F) color-dodge(\u8986\u3044\u713C\u304D\u30AB\u30E9\u30FC) color-burn(\u713C\u304D\u8FBC\u307F\u30AB\u30E9\u30FC) hard-light(\u30CF\u30FC\u30C9\u30E9\u30A4\u30C8) soft-light(\u30BD\u30D5\u30C8\u30E9\u30A4\u30C8) difference(\u5DEE\u306E\u7D76\u5BFE\u5024) exclusion(\u9664\u5916) hue(\u8272\u76F8) saturation(\u5F69\u5EA6) color(\u30AB\u30E9\u30FC) luminosity(\u8F1D\u5EA6)` },
      { name: `folder`, required: false, description: `graphic\u3067\u6307\u5B9A\u3059\u308B\u753B\u50CF\u306E\u30D5\u30A9\u30EB\u30C0\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u305F\u3068\u3048\u3070bgimage\u3068\u6307\u5B9A\u3059\u308B\u3068bgimage\u304B\u3089\u753B\u50CF\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002` },
      { name: `opacity`, required: false, description: `\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u304C\u900F\u660E\u306A\u72B6\u614B\u304B\u3089\u5F90\u3005\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u4E00\u77AC\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[layermode name="" graphic="" color="" mode="" folder="" opacity="" time="" wait="" cond=""]`
  }],
  [`layermode_movie`, {
    name: `layermode_movie`,
    description: `\u30B2\u30FC\u30E0\u753B\u9762\u4E0A\u306B\u52D5\u753B\u30EC\u30A4\u30E4\u3092\u5408\u6210\u3067\u304D\u307E\u3059\u3002IE\u306A\u3069\u4E00\u90E8\u306E\u53E4\u3044\u30D6\u30E9\u30A6\u30B6\u3067\u306F\u52D5\u4F5C\u3057\u306A\u3044\u305F\u3081\u3001\u30D6\u30E9\u30A6\u30B6\u30B2\u30FC\u30E0\u3068\u3057\u3066\u516C\u958B\u3059\u308B\u5834\u5408\u306F\u6CE8\u610F\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,
    params: [
      { name: `name`, required: false, description: `\u5408\u6210\u3059\u308B\u30EC\u30A4\u30E4\u306B\u540D\u524D\u3092\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u540D\u524D\u306F[free_layremovde]\u30BF\u30B0\u3067\u7279\u5B9A\u306E\u5408\u6210\u30EC\u30A4\u30E4\u306E\u307F\u3092\u6D88\u3057\u305F\u3044\u5834\u5408\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002` },
      { name: `video`, required: true, description: `\u5408\u6210\u3059\u308B\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A1\u30A4\u30EB\u306Fdata/video\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `volume`, required: false, description: `\u5408\u6210\u3059\u308B\u52D5\u753B\u306E\u97F3\u91CF\u30920\u301C100\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `mute`, required: false, description: `\u52D5\u753B\u306E\u97F3\u3092\u30DF\u30E5\u30FC\u30C8\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u306F\u52D5\u753B\u3092\u518D\u751F\u3059\u308B\u524D\u306B\u30E6\u30FC\u30B6\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30BF\u30C3\u30D7\u306A\u3069\uFF09\u304C\u5FC5\u8981\u3068\u3044\u3046\u5236\u9650\u304C\u3042\u308A\u307E\u3059\u304C\u3001true\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3053\u306E\u5236\u9650\u3092\u7121\u8996\u3067\u304D\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u52D5\u753B\u3092\u30EB\u30FC\u30D7\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue\u3002\u30EB\u30FC\u30D7\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001[free_layermode]\u3092\u884C\u3046\u307E\u3067\u6F14\u51FA\u304C\u6B8B\u308A\u307E\u3059\u3002` },
      { name: `speed`, required: false, description: `\u52D5\u753B\u306E\u518D\u751F\u30B9\u30D4\u30FC\u30C9\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30022\u3092\u6307\u5B9A\u3059\u308B\u30682\u500D\u901F\u30010.5\u3092\u6307\u5B9A\u3059\u308B\u3068\u534A\u5206\u306E\u901F\u5EA6\u3067\u518D\u751F\u3055\u308C\u307E\u3059\u3002` },
      { name: `mode`, required: false, description: `\u5408\u6210\u65B9\u6CD5\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u300Cmultiply\u300D \u6B21\u306E\u52B9\u679C\u304C\u4F7F\u3048\u307E\u3059\u2192 multiply\uFF08\u4E57\u7B97\uFF09screen\uFF08\u30B9\u30AF\u30EA\u30FC\u30F3\uFF09overlay\uFF08\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\uFF09darken\uFF08\u6697\u304F\uFF09lighten\uFF08\u660E\u308B\u304F\uFF09color-dodge\uFF08\u8986\u3044\u713C\u304D\u30AB\u30E9\u30FC\uFF09color-burn\uFF08\u713C\u304D\u8FBC\u307F\u30AB\u30E9\u30FC\uFF09hard-light\uFF08\u30CF\u30FC\u30C9\u30E9\u30A4\u30C8\uFF09soft-light\uFF08\u30BD\u30D5\u30C8\u30E9\u30A4\u30C8\uFF09difference\uFF08\u5DEE\u306E\u7D76\u5BFE\u5024\uFF09exclusion\uFF08\u9664\u5916\uFF09hue\uFF08\u8272\u76F8\uFF09saturation\uFF08\u5F69\u5EA6\uFF09color\uFF08\u30AB\u30E9\u30FC\uFF09luminosity\uFF08\u8F1D\u5EA6\uFF09` },
      { name: `opacity`, required: false, description: `\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u5408\u6210\u30EC\u30A4\u30E4\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `top`, required: false, description: `\u5408\u6210\u30EC\u30A4\u30E4\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `width`, required: false, description: `\u5408\u6210\u30EC\u30A4\u30E4\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `height`, required: false, description: `\u5408\u6210\u30EC\u30A4\u30E4\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `fit`, required: false, description: `\u5408\u6210\u30EC\u30A4\u30E4\u3092\u30B2\u30FC\u30E0\u753B\u9762\u3044\u3063\u3071\u3044\u306B\u5F15\u304D\u4F38\u3070\u3059\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u5408\u6210\u3057\u305F\u52D5\u753B\u306E\u518D\u751F\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[layermode_movie name="" video="" volume="" mute="" loop="" speed="" mode="" opacity="" time="" left="" top="" width="" height="" fit="" wait="" cond=""]`
  }],
  [`layopt`, {
    name: `layopt`,
    description: `\u30EC\u30A4\u30E4\u306E\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: true, description: `\u5BFE\u8C61\u3068\u306A\u308B\u524D\u666F\u30EC\u30A4\u30E4\u307E\u305F\u306F\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002message\u3068\u306E\u307F\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u3001[current]\u30BF\u30B0\u3067\u6307\u5B9A\u3057\u305F\u73FE\u5728\u306E\u64CD\u4F5C\u5BFE\u8C61\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u304C\u5BFE\u8C61\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u5BFE\u8C61\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u306E\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u304Bback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3060\u3057layer\u5C5E\u6027\u306Bmessage\u3068\u306E\u307F\u6307\u5B9A\u3057\u3001\u3055\u3089\u306B\u3053\u306E\u5C5E\u6027\u3092\u7701\u7565\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u73FE\u5728\u64CD\u4F5C\u5BFE\u8C61\u306E\u30DA\u30FC\u30B8\u304C\u9078\u629E\u3055\u308C\u307E\u3059\u3002` },
      { name: `visible`, required: false, description: `layer\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u30EC\u30A4\u30E4\u3092\u8868\u793A\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30EC\u30A4\u30E4\u306F\u8868\u793A\u72B6\u614B\u306B\u3001false\u3092\u6307\u5B9A\u3059\u308B\u3068\u975E\u8868\u793A\u72B6\u614B\u306B\u306A\u308A\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u793A\u72B6\u614B\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002` },
      { name: `left`, required: false, description: `layer\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u30EC\u30A4\u30E4\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u4F4D\u7F6E\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\uFF08\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4F4D\u7F6E\u3084\u30C7\u30B6\u30A4\u30F3\u3092\u8ABF\u6574\u3057\u305F\u3044\u5834\u5408\u306F\u3053\u306E\u30BF\u30B0\u306E\u4EE3\u308F\u308A\u306B[position]\u30BF\u30B0\u3092\u4F7F\u7528\u3057\u307E\u3059\uFF09` },
      { name: `top`, required: false, description: `layer\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u30EC\u30A4\u30E4\u306E\u4E0A\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u4F4D\u7F6E\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\uFF08\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4F4D\u7F6E\u3084\u30C7\u30B6\u30A4\u30F3\u3092\u8ABF\u6574\u3057\u305F\u3044\u5834\u5408\u306F\u3053\u306E\u30BF\u30B0\u306E\u4EE3\u308F\u308A\u306B[position]\u30BF\u30B0\u3092\u4F7F\u7528\u3057\u307E\u3059\uFF09` },
      { name: `opacity`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u7BC4\u56F2\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u3001255\u3067\u5B8C\u5168\u306B\u4E0D\u900F\u660E\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[layopt layer="" page="" visible="" left="" top="" opacity="" cond=""]`
  }],
  [`link`, {
    name: `link`,
    description: `[link]\u30BF\u30B0\u3068[endlink]\u30BF\u30B0\u3067\u56F2\u307E\u308C\u305F\u90E8\u5206\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u30EA\u30F3\u30AF\u5316\u3057\u307E\u3059\u3002\u9078\u629E\u80A2\u306E\u8868\u793A\u3068\u3057\u3066\u4F7F\u7528\u53EF\u80FD\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002` },
      { name: `keyfocus`, required: false, description: `false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u3084\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\u3067\u9078\u629E\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002\u307E\u305F1\u30842\u306A\u3069\u306E\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u306Efocus_next\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u3066\u3044\u304F\u3068\u304D\u306E\u9806\u5E8F\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[link storage="" target="" keyfocus="" cond=""]`
  }],
  [`loadcss`, {
    name: `loadcss`,
    description: `\u30B2\u30FC\u30E0\u306E\u9014\u4E2D\u3067CSS\u3092\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `file`, required: true, description: `\u8AAD\u307F\u8FBC\u3080CSS\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D1\u30B9\u306Fdata/\u304B\u3089\u8A18\u8FF0\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[loadcss file="" cond=""]`
  }],
  [`loading_log`, {
    name: `loading_log`,
    description: `\u7D20\u6750\u306E\u8AAD\u307F\u8FBC\u307F\u3092\u884C\u3063\u3066\u3044\u308B\u3068\u304D\u3084\u30BB\u30FC\u30D6\u51E6\u7406\u304C\u8D70\u3063\u3066\u3044\u308B\u3068\u304D\u306A\u3069\u3001\u30B2\u30FC\u30E0\u304C\u4E00\u6642\u7684\u306B\u6B62\u307E\u3063\u3066\u3044\u308B\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u753B\u9762\u7AEF\u306B\u300CLoading...\u300D\u306E\u3088\u3046\u306A\u30ED\u30B0\u3092\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `preload`, required: false, description: `\u7D20\u6750\u306E\u8AAD\u307F\u8FBC\u307F\u4E2D\u306B\u8868\u793A\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u81EA\u7531\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u30ED\u30B0\u3092\u7121\u52B9\u306B\u3067\u304D\u307E\u3059\u3002default\u3092\u6307\u5B9A\u3059\u308B\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30ED\u30B0\u306B\u306A\u308A\u307E\u3059\u3002notext\u3092\u6307\u5B9A\u3059\u308B\u3068\u30C6\u30AD\u30B9\u30C8\u306A\u3057\u3067\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A2\u30A4\u30B3\u30F3\u3060\u3051\u3092\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `save`, required: false, description: `\u30BB\u30FC\u30D6\u51E6\u7406\u4E2D\u306B\u8868\u793A\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u81EA\u7531\u306B\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002preload \u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u540C\u69D8\u306B\u3001none\u3001default\u3001notext\u3068\u3044\u3046\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u53EF\u80FD\u3002` },
      { name: `all`, required: false, description: `preload\u3001save \u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001all="default"\u3068\u3059\u308C\u3070\u3059\u3079\u3066\u306E\u30ED\u30B0\u306B\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `dottime`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u306E\u5F8C\u308D\u306B\u300C...\u300D\u3068\u3044\u3046\u30C9\u30C3\u30C8\u304C\u5897\u3048\u3066\u3044\u304F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6240\u8981\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u30C9\u30C3\u30C8\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u7121\u304F\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `icon`, required: false, description: `\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A2\u30A4\u30B3\u30F3\u3092\u8868\u793A\u3059\u308B\u304B\u3069\u3046\u304B\u3092true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A2\u30A4\u30B3\u30F3\u3092\u975E\u8868\u793A\u306B\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u306E\u307F\u306B\u3057\u305F\u3044\u5834\u5408\u306B\u306Ffalse\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[loading_log preload="" save="" all="" dottime="" icon="" cond=""]`
  }],
  [`loadjs`, {
    name: `loadjs`,
    description: `\u5916\u90E8JavaScript\u30D5\u30A1\u30A4\u30EB\u3092\u30ED\u30FC\u30C9\u3057\u307E\u3059\u3002\u7121\u5236\u9650\u306A\u6A5F\u80FD\u62E1\u5F35\u304C\u53EF\u80FD\u3067\u3059\u3002
JavaScript\u30D5\u30A1\u30A4\u30EB\u306Fdata/others\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u30ED\u30FC\u30C9\u3059\u308BJavaScript\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `type`, required: false, description: `\u8AAD\u307F\u8FBC\u307F\u65B9\u5F0F\u3002module\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[loadjs storage="" type="" cond=""]`
  }],
  [`locate`, {
    name: `locate`,
    description: `\u30B0\u30E9\u30D5\u30A3\u30C3\u30AF\u30DC\u30BF\u30F3\u306E\u8868\u793A\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002
\u30C6\u30AD\u30B9\u30C8\u306B\u306F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\u3002`,
    params: [
      { name: `x`, required: false, description: `\u6A2A\u65B9\u5411\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `y`, required: false, description: `\u7E26\u65B9\u5411\u306E\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[locate x="" y="" cond=""]`
  }],
  [`macro`, {
    name: `macro`,
    description: `\u30DE\u30AF\u30ED\u8A18\u8FF0\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u81EA\u5206\u3067\u65B0\u3057\u3044\u30BF\u30B0\u3092\u5B9A\u7FA9\u3059\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30DE\u30AF\u30ED\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4EE5\u5F8C\u3001\u3053\u306E\u540D\u524D\u3092\u30BF\u30B0\u306E\u3088\u3046\u306B\u8A18\u8FF0\u3059\u308B\u3053\u3068\u3067\u3001\u30DE\u30AF\u30ED\u3092\u547C\u3073\u51FA\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002 \u2605\u91CD\u8981 \u30C6\u30A3\u30E9\u30CE\u30B9\u30AF\u30EA\u30D7\u30C8\u306B\u3059\u3067\u306B\u4F7F\u7528\u3055\u308C\u3066\u3044\u308B\u30BF\u30B0\u540D\u306F\u4F7F\u308F\u306A\u3044\u3067\u304F\u3060\u3055\u3044\u3002\u307E\u305Ftext\u3084label\u3082\u4F7F\u3048\u307E\u305B\u3093\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[macro name="" cond=""]`
  }],
  [`mark`, {
    name: `mark`,
    description: `\u30C6\u30AD\u30B9\u30C8\u306B\u86CD\u5149\u30DA\u30F3\u3067\u30DE\u30FC\u30AB\u30FC\u3092\u5F15\u3044\u305F\u3088\u3046\u306A\u52B9\u679C\u3092\u3064\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u8272\u3084\u30B5\u30A4\u30BA\u3082\u6307\u5B9A\u53EF\u80FD\u3002`,
    params: [
      { name: `color`, required: false, description: `\u30DE\u30FC\u30AB\u30FC\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u9EC4\u8272\u3002` },
      { name: `font_color`, required: false, description: `\u30DE\u30FC\u30AB\u30FC\u3092\u5F15\u3044\u305F\u3068\u304D\u306E\u30D5\u30A9\u30F3\u30C8\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B2\u30FC\u30E0\u4E2D\u306E\u30D5\u30A9\u30F3\u30C8\u8272\u3092\u7D99\u627F\u3057\u307E\u3059\u3002` },
      { name: `size`, required: false, description: `\u30DE\u30FC\u30AB\u30FC\u306E\u30B5\u30A4\u30BA\u30920\u301C100\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u307050\u3060\u3068\u30C6\u30AD\u30B9\u30C8\u306E\u4E0B\u534A\u5206\u306B\u30DE\u30FC\u30AB\u30FC\u304C\u5F15\u304B\u308C\u307E\u3059\u300210\u3060\u3068\u305F\u3060\u306E\u4E0B\u7DDA\u306B\u8FD1\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[mark color="" font_color="" size="" cond=""]`
  }],
  [`mask`, {
    name: `mask`,
    description: `\u30B2\u30FC\u30E0\u753B\u9762\u5168\u4F53\u3092\u8C4A\u5BCC\u306A\u52B9\u679C\u3068\u3068\u3082\u306B\u6697\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u6697\u8EE2\u4E2D\u306B\u30B2\u30FC\u30E0\u753B\u9762\u3092\u518D\u69CB\u7BC9\u3057\u3066[mask_off]\u30BF\u30B0\u3067\u30B2\u30FC\u30E0\u3092\u518D\u958B\u3059\u308B\u4F7F\u3044\u65B9\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u6697\u8EE2\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u6697\u8EE2\u306E\u52B9\u679C\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 fadeInfadeInDownBigfadeInLeftBigfadeInRightBigfadeInUpBigflipInXflipInYlightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollIn` },
      { name: `color`, required: false, description: `\u6697\u8EE2\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u9ED2\u3002` },
      { name: `graphic`, required: false, description: `\u6307\u5B9A\u3059\u308B\u3068\u3001\u6697\u8EE2\u90E8\u5206\u306B\u753B\u50CF\u3092\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002\u753B\u50CF\u306Fdata/image\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `folder`, required: false, description: `graphic\u3067\u6307\u5B9A\u3059\u308B\u30D5\u30A9\u30EB\u30C0\u3092image\u4EE5\u5916\u306B\u5909\u66F4\u3057\u305F\u3044\u5834\u5408\u306F\u3053\u3061\u3089\u306B\u8A18\u8FF0\u3057\u307E\u3059\u3002bgimagefgimage\u306A\u3069\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[mask time="" effect="" color="" graphic="" folder="" cond=""]`
  }],
  [`mask_off`, {
    name: `mask_off`,
    description: `\u30B9\u30AF\u30EA\u30FC\u30F3\u30DE\u30B9\u30AF\u3092\u6D88\u53BB\u3057\u3066\u30B2\u30FC\u30E0\u3092\u518D\u958B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u6697\u8EE2\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u6697\u8EE2\u306E\u52B9\u679C\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u4EE5\u4E0B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 fadeOutfadeOutDownBigfadeOutLeftBigfadeOutRightBigfadeOutUpBigflipOutXflipOutYlightSpeedOutrotateOutrotateOutDownLeftrotateOutDownRightrotateOutUpLeftrotateOutUpRightzoomOutzoomOutDownzoomOutLeftzoomOutRightzoomOutUpslideOutDownslideOutLeftslideOutRightslideOutUpbounceOut bounceOutDownbounceOutLeftbounceOutRightbounceOutUp` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[mask_off time="" effect="" cond=""]`
  }],
  [`message_config`, {
    name: `message_config`,
    description: `\u30C6\u30A3\u30E9\u30CE\u30B9\u30AF\u30EA\u30D7\u30C8V515\u4EE5\u964D\u3002
\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u95A2\u9023\u3059\u308B\u8A73\u7D30\u306A\u8A2D\u5B9A\u3092\u884C\u3048\u307E\u3059\u3002
\u7701\u7565\u3057\u305F\u5C5E\u6027\u306E\u8A2D\u5B9A\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002`,
    params: [
      { name: `ch_speed_in_click`, required: false, description: `\u6587\u5B57\u8868\u793A\u306E\u9014\u4E2D\u3067\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3042\u3068\u306E\u6587\u5B57\u8868\u793A\u901F\u5EA6\u30021\u6587\u5B57\u3042\u305F\u308A\u306E\u8868\u793A\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002 default\u3068\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u30AF\u30EA\u30C3\u30AF\u524D\u306E\u6587\u5B57\u8868\u793A\u901F\u5EA6\u3092\u5F15\u304D\u7D99\u3050\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `effect_speed_in_click`, required: false, description: `\u6587\u5B57\u8868\u793A\u306E\u9014\u4E2D\u3067\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3042\u3068\u306E\u6587\u5B57\u30A8\u30D5\u30A7\u30AF\u30C8\u901F\u5EA6\u30020.2s\u3001200ms\u3001\u3042\u308B\u3044\u306F\u5358\u306B200\u306A\u3069\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F8B\u306F\u3044\u305A\u308C\u3082200\u30DF\u30EA\u79D2\u3068\u306A\u308A\u307E\u3059\u3002 default\u3068\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u30AF\u30EA\u30C3\u30AF\u524D\u306E\u6587\u5B57\u8868\u793A\u901F\u5EA6\u3092\u5F15\u304D\u7D99\u3050\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `edge_overlap_text`, required: false, description: `\u7E01\u53D6\u308A\u30C6\u30AD\u30B9\u30C8\u306E\u7E01\u3092\u3072\u3068\u3064\u524D\u306E\u6587\u5B57\u306B\u91CD\u306D\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u73FE\u72B6\u306Fedge_method\u304Cstroke\u306E\u5834\u5408\u306B\u306E\u307F\u6709\u52B9\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u3059\u3002` },
      { name: `speech_bracket_float`, required: false, description: `\u30AD\u30E3\u30E9\u306E\u30BB\u30EA\u30D5\u306E\u6700\u521D\u306E\u30AB\u30AE\u30AB\u30C3\u30B3\u3092\u5DE6\u5074\u306B\u6D6E\u304B\u3057\u3066\u3001\u958B\u59CB\u30AB\u30AE\u30AB\u30C3\u30B3\u306E\u4E0B\u306B\u6587\u5B57\u304C\u5468\u308A\u3053\u307E\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u305F\u3081\u306E\u8A2D\u5B9A\u3067\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u958B\u59CB\u30AB\u30AE\u30AB\u30C3\u30B3\u3060\u3051\u304C\u5DE6\u5074\u306B\u305A\u308C\u307E\u3059\u3002false\u3067\u7121\u52B9\u3002true\u306E\u304B\u308F\u308A\u306B20\u306E\u3088\u3046\u306A\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u958B\u59CB\u30AB\u30AE\u30AB\u30C3\u30B3\u3092\u5DE6\u5074\u306B\u305A\u3089\u3059\u91CF\u3092\u76F4\u63A5\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `speech_margin_left`, required: false, description: `speech_bracket_float\u304C\u6709\u52B9\u306E\u3068\u304D\u306B\u3001\u3055\u3089\u306B\u30C6\u30AD\u30B9\u30C8\u5168\u4F53\u3092\u53F3\u5074\u306B\u52D5\u304B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002true\u3067\u6709\u52B9\u3001false\u3067\u7121\u52B9\u300220\u306E\u3088\u3046\u306B\u6570\u5024\u3067\u76F4\u63A5\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u5168\u4F53\u3092\u53F3\u5074\u306B\u305A\u3089\u3059\u91CF\u3092\u76F4\u63A5\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `kerning`, required: false, description: `\u5B57\u8A70\u3081\u3092\u6709\u52B9\u306B\u3059\u308B\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D5\u30A9\u30F3\u30C8\u3001\u3082\u3068\u3082\u3068\u306E\u5B57\u9593\u8A2D\u5B9A\u3001\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u4F7F\u7528\u30D6\u30E9\u30A6\u30B6\u306B\u3088\u3063\u3066\u306F\u52B9\u679C\u304C\u898B\u3089\u308C\u306A\u3044\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1ACSS\u306Efont-feature-settings\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u8A2D\u5B9A\u3059\u308B\u6A5F\u80FD\u3067\u3059\uFF09` },
      { name: `add_word_nobreak`, required: false, description: `\u30EF\u30FC\u30C9\u30D6\u30EC\u30A4\u30AF(\u5358\u8A9E\u306E\u9014\u4E2D\u3067\u81EA\u7136\u6539\u884C\u3055\u308C\u308B\u73FE\u8C61)\u3092\u7981\u6B62\u3059\u308B\u5358\u8A9E\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u6307\u5B9A\u53EF\u80FD\u3002` },
      { name: `remove_word_nobreak`, required: false, description: `\u4E00\u5EA6\u8FFD\u52A0\u3057\u305F\u30EF\u30FC\u30C9\u30D6\u30EC\u30A4\u30AF\u7981\u6B62\u5358\u8A9E\u3092\u9664\u5916\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u6307\u5B9A\u53EF\u80FD\u3002` },
      { name: `line_spacing`, required: false, description: `\u884C\u9593\u306E\u30B5\u30A4\u30BA\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `letter_spacing`, required: false, description: `\u5B57\u9593\u306E\u30B5\u30A4\u30BA\u3092px\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `control_line_break`, required: false, description: `\u7981\u5247\u51E6\u7406\u3092\u624B\u52D5\u3067\u884C\u306A\u3046\u304B\u3069\u3046\u304B\u3092true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3002\u3084\u3001\u306A\u3069\u306E\u7279\u5B9A\u306E\u6587\u5B57\u304C\u884C\u982D\u306B\u6765\u3066\u3044\u305F\u3068\u304D\u3001\u305D\u306E\u3072\u3068\u3064\u524D\u306E\u6587\u5B57\u3067\u6539\u884C\u3059\u308B\u3088\u3046\u306B\u3057\u307E\u3059\u3002\u57FA\u672C\u7684\u306B\u306F\u3053\u308C\u3092\u6307\u5B9A\u3057\u306A\u304F\u3066\u3082\u81EA\u52D5\u3067\u7981\u5247\u51E6\u7406\u304C\u884C\u308F\u308C\u307E\u3059\u304C\u3001\u30D5\u30A9\u30F3\u30C8\u306E\u8A2D\u5B9A\uFF08\u30A8\u30D5\u30A7\u30AF\u30C8\u3084\u7E01\u53D6\u308A\u306A\u3069\uFF09\u306B\u3088\u3063\u3066\u306F\u7981\u5247\u51E6\u7406\u304C\u81EA\u52D5\u3067\u884C\u308F\u308C\u306A\u304F\u306A\u308B\u3053\u3068\u304C\u3042\u308B\u306E\u3067\u3001\u305D\u306E\u5834\u5408\u306F\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306Btrue\u3092\u6307\u5B9A\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `control_line_break_chars`, required: false, description: `\u884C\u982D\u306B\u6765\u3066\u3044\u305F\u3068\u304D\u306B\u7981\u5247\u51E6\u7406\u3092\u884C\u306A\u3046\u6587\u5B57\u3092\u307E\u3068\u3081\u3066\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u306F\u3001\u3002\uFF09\u300D\u300F\u3011,.)]\u304C\u7981\u5247\u51E6\u7406\u306E\u5BFE\u8C61\u3067\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[message_config ch_speed_in_click="" effect_speed_in_click="" edge_overlap_text="" speech_bracket_float="" speech_margin_left="" kerning="" add_word_nobreak="" remove_word_nobreak="" line_spacing="" letter_spacing="" control_line_break="" control_line_break_chars="" cond=""]`
  }],
  [`mode_effect`, {
    name: `mode_effect`,
    description: `\u6B21\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u753B\u9762\u4E2D\u592E\u306B\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `skip`, required: false, description: `\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u958B\u59CB\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u3002none\u3001default\u3001\u307E\u305F\u306Fimage\u30D5\u30A9\u30EB\u30C0\u3092\u57FA\u6E96\u3068\u3059\u308B\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002none\u3060\u3068\u30A8\u30D5\u30A7\u30AF\u30C8\u306A\u3057\u3001default\u3060\u3068\u30C7\u30D5\u30A9\u30EB\u30C8\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3001\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3059\u308B\u3068\u305D\u306E\u753B\u50CF\u3092\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `auto`, required: false, description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u958B\u59CB\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u3002skip\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u540C\u69D8\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `stop`, required: false, description: `\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u307E\u305F\u306F\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u505C\u6B62\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u3002skip\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u540C\u69D8\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `holdskip`, required: false, description: `\u30DB\u30FC\u30EB\u30C9\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u958B\u59CB\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u3002skip\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u540C\u69D8\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `holdstop`, required: false, description: `\u30DB\u30FC\u30EB\u30C9\u30B9\u30C8\u30C3\u30D7\u30E2\u30FC\u30C9\u505C\u6B62\u6642\u306B\u8868\u793A\u3055\u308C\u308B\u30A8\u30D5\u30A7\u30AF\u30C8\u3002skip\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u540C\u69D8\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `all`, required: false, description: `5\u7A2E\u985E\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002skip\u30D1\u30E9\u30E1\u30FC\u30BF\u3068\u540C\u69D8\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `env`, required: false, description: `allpcphone\u306E\u3044\u305A\u308C\u304B\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002pc\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D7\u30EC\u30A4\u30E4\u30FC\u304CPC\u3067\u30B2\u30FC\u30E0\u3092\u904A\u3093\u3067\u3044\u308B\u3068\u304D\u9650\u5B9A\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002phone\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u30B9\u30DE\u30DB\u30FB\u30BF\u30D6\u30EC\u30C3\u30C8\u3067\u30B2\u30FC\u30E0\u3092\u904A\u3093\u3067\u3044\u308B\u3068\u304D\u9650\u5B9A\u306E\u30A8\u30D5\u30A7\u30AF\u30C8\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002all(\u30C7\u30D5\u30A9\u30EB\u30C8)\u306E\u5834\u5408\u306F2\u3064\u306E\u74B0\u5883\u306E\u8A2D\u5B9A\u3092\u307E\u3068\u3081\u3066\u884C\u3044\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u305F\u3044\u5834\u5408\u3001\u6570\u5024(px\u5358\u4F4D)\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `height`, required: false, description: `\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u305F\u3044\u5834\u5408\u3001\u6570\u5024(px\u5358\u4F4D)\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u30A8\u30D5\u30A7\u30AF\u30C8\u306Bdefault\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u3001\u56F3\u5F62\u90E8\u5206\u306E\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `bgcolor`, required: false, description: `\u30A8\u30D5\u30A7\u30AF\u30C8\u306Bdefault\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306B\u3001\u56F3\u5F62\u3092\u56F2\u3080\u4E38\u90E8\u5206\u306E\u8272\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[mode_effect skip="" auto="" stop="" holdskip="" holdstop="" all="" env="" width="" height="" color="" bgcolor="" cond=""]`
  }],
  [`movie`, {
    name: `movie`,
    description: `\u30B2\u30FC\u30E0\u753B\u9762\u4E0A\u3067\u52D5\u753B\u3092\u518D\u751F\u3057\u307E\u3059\u3002\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u306Fdata/video\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u518D\u751F\u3059\u308B\u52D5\u753B\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `skip`, required: false, description: `\u52D5\u753B\u3092\u9014\u4E2D\u3067\u30B9\u30AD\u30C3\u30D7\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u753B\u9762\u30AF\u30EA\u30C3\u30AF\u3067\u52D5\u753B\u3092\u98DB\u3070\u305B\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `mute`, required: false, description: `\u52D5\u753B\u306E\u97F3\u3092\u30DF\u30E5\u30FC\u30C8\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D6\u30E9\u30A6\u30B6\u4E0A\u3067\u306F\u52D5\u753B\u3092\u518D\u751F\u3059\u308B\u524D\u306B\u30E6\u30FC\u30B6\u30A2\u30AF\u30B7\u30E7\u30F3\uFF08\u30BF\u30C3\u30D7\u306A\u3069\uFF09\u304C\u5FC5\u8981\u3068\u3044\u3046\u5236\u9650\u304C\u3042\u308A\u307E\u3059\u304C\u3001true\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3053\u306E\u5236\u9650\u3092\u7121\u8996\u3067\u304D\u307E\u3059\u3002` },
      { name: `volume`, required: false, description: `\u52D5\u753B\u306E\u97F3\u91CF\u30920\u301C100\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[movie storage="" skip="" mute="" volume="" cond=""]`
  }],
  [`mtext`, {
    name: `mtext`,
    description: `\u591A\u5F69\u306A\u6F14\u51FA\u52B9\u679C\u3092\u3082\u3063\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u753B\u9762\u4E0A\u306B\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u5BFE\u8C61\u3068\u3059\u308B\u524D\u666F\u30EC\u30A4\u30E4\u30920\u4EE5\u4E0A\u306E\u6574\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u3001\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u307E\u305F\u306Fback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u30DA\u30FC\u30B8\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `text`, required: false, description: `\u8868\u793A\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u5185\u5BB9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `x`, required: true, description: `\u30C6\u30AD\u30B9\u30C8\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `y`, required: true, description: `\u30C6\u30AD\u30B9\u30C8\u306E\u4E0A\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `vertical`, required: false, description: `\u7E26\u66F8\u304D\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `size`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002Web\u30D5\u30A9\u30F3\u30C8\u3092\u4F7F\u7528\u3059\u308B\u5834\u5408\u306Ftyrano/css/font.css\u306B\u5B9A\u7FA9\u3092\u8A18\u8FF0\u3057\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `color`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `width`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u8868\u793A\u90E8\u5206\u306E\u6A2A\u5E45\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `align`, required: false, description: `\u6587\u5B57\u306E\u6A2A\u65B9\u5411\u306B\u95A2\u3059\u308B\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u540C\u6642\u306Bwidth\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002left(\u5DE6\u5BC4\u305B)\u3001center(\u4E2D\u592E\u5BC4\u305B)\u3001right(\u53F3\u5BC4\u305B)` },
      { name: `name`, required: false, description: `[anim]\u30BF\u30B0\u306A\u3069\u304B\u3089\u3053\u306E\u540D\u524D\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u3089\u308C\u307E\u3059\u3002\u30AB\u30F3\u30DE\u3067\u533A\u5207\u308B\u3053\u3068\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1Aname\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u306FHTML\u306E\u30AF\u30E9\u30B9\u5C5E\u6027\u306B\u306A\u308A\u307E\u3059\uFF09` },
      { name: `bold`, required: false, description: `\u592A\u5B57\u306B\u3059\u308B\u5834\u5408\u306Fbold\u3068\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `edge`, required: false, description: `\u6587\u5B57\u306E\u7E01\u53D6\u308A\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002\u7E01\u53D6\u308A\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `shadow`, required: false, description: `\u6587\u5B57\u306B\u5F71\u3092\u3064\u3051\u307E\u3059\u3002\u5F71\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7E01\u53D6\u308A\u3092\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u7121\u52B9\u5316\u3055\u308C\u307E\u3059\u3002` },
      { name: `fadeout`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u8868\u793A\u5F8C\u306B\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u3092\u5B9F\u884C\u3059\u308B\u304B\u5426\u304B\u3092true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u6B8B\u3063\u305F\u6587\u5B57\u3092\u6D88\u3059\u5834\u5408\u306F[freeimage]\u30BF\u30B0\u3084[free]\u30BF\u30B0\u3092\u4F7F\u3044\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u304C\u9759\u6B62\u3057\u3066\u3044\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30C6\u30AD\u30B9\u30C8\u306E\u6F14\u51FA\u5B8C\u4E86\u3092\u5F85\u305F\u305A\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u307F\u307E\u3059\u3002` },
      { name: `in_effect`, required: false, description: `\u6587\u5B57\u304C\u8868\u793A\u3055\u308C\u308B\u969B\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6F14\u51FA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `in_delay`, required: false, description: `\u6587\u5B57\u304C\u8868\u793A\u3055\u308C\u308B\u969B\u306E\u901F\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F55\u79D2\u9045\u308C\u30661\u6587\u5B57\u304C\u8868\u793A\u3055\u308C\u308B\u304B\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `in_delay_scale`, required: false, description: `\uFF11\u6587\u5B57\u306B\u304B\u304B\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6BD4\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `in_sync`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u6587\u5B57\u304C\u540C\u6642\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3057\u307E\u3059\u3002` },
      { name: `in_shuffle`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u6587\u5B57\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u304C\u30E9\u30F3\u30C0\u30E0\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `in_reverse`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u6587\u5B57\u304C\u5F8C\u308D\u304B\u3089\u8868\u793A\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002"` },
      { name: `out_effect`, required: false, description: `\u6587\u5B57\u304C\u6D88\u3048\u308B\u969B\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6F14\u51FA\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306F http://tyrano.jp/mtext/ \u3092\u53C2\u7167\u3002` },
      { name: `out_delay`, required: false, description: `\u6587\u5B57\u304C\u6D88\u3048\u308B\u969B\u306E\u901F\u5EA6\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F55\u79D2\u9045\u308C\u30661\u6587\u5B57\u304C\u6D88\u3048\u308B\u304B\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `out_delay_scale`, required: false, description: `\uFF11\u6587\u5B57\u306B\u304B\u304B\u308B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6BD4\u7387\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `out_sync`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u6587\u5B57\u304C\u540C\u6642\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3057\u307E\u3059\u3002` },
      { name: `out_shuffle`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u6587\u5B57\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u30BF\u30A4\u30DF\u30F3\u30B0\u304C\u30E9\u30F3\u30C0\u30E0\u306B\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `out_reverse`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u6587\u5B57\u304C\u5F8C\u308D\u304B\u3089\u6D88\u3048\u3066\u3044\u304D\u307E\u3059\u3002"` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[mtext layer="" page="" text="" x="" y="" vertical="" size="" face="" color="" width="" align="" name="" bold="" edge="" shadow="" fadeout="" time="" wait="" in_effect="" in_delay="" in_delay_scale="" in_sync="" in_shuffle="" in_reverse="" out_effect="" out_delay="" out_delay_scale="" out_sync="" out_shuffle="" out_reverse="" cond=""]`
  }],
  [`nolog`, {
    name: `nolog`,
    description: `\u3053\u306E\u30BF\u30B0\u306B\u5230\u9054\u3059\u308B\u3068\u3001\u30C6\u30AD\u30B9\u30C8\u304C\u30D0\u30C3\u30AF\u30ED\u30B0\u306B\u8A18\u9332\u3055\u308C\u306A\u304F\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[nolog cond=""]`
  }],
  [`nowait`, {
    name: `nowait`,
    description: `\u30C6\u30AD\u30B9\u30C8\u77AC\u9593\u8868\u793A\u30E2\u30FC\u30C9\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u3053\u306E\u30E2\u30FC\u30C9\u4E2D\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u5168\u4F53\u304C\u4E00\u77AC\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u6587\u5B57\u304C1\u6587\u5B57\u305A\u3064\u8FFD\u52A0\u3055\u308C\u3066\u3044\u304F\u51E6\u7406\uFF08\u901A\u5E38\u306E\u51E6\u7406\uFF09\u306F\u884C\u308F\u308C\u307E\u305B\u3093\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[nowait cond=""]`
  }],
  [`p`, {
    name: `p`,
    description: `\u30D7\u30EC\u30A4\u30E4\u30FC\u306E\u30AF\u30EA\u30C3\u30AF\u3092\u5F85\u3061\u307E\u3059\u3002
\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3068\u6539\u30DA\u30FC\u30B8\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[p cond=""]`
  }],
  [`pausebgm`, {
    name: `pausebgm`,
    description: `\u73FE\u5728\u518D\u751F\u4E2D\u306EBGM\u3092\u4E00\u6642\u505C\u6B62\u3067\u304D\u307E\u3059\u3002
\u5C11\u3057\u3042\u3068\u306B\u540C\u3058BGM\u306E\u518D\u751F\u3092\u518D\u958B\u3059\u308B\u5834\u5408\u306E\u307F\u4F7F\u7528\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u305D\u308C\u4EE5\u5916\u306E\u5834\u5408\u306F[stopbgm]\u3067\u306E\u505C\u6B62\u304C\u9069\u5207\u3067\u3059\u3002`,
    params: [
      { name: `buf`, required: false, description: `\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u30B9\u30ED\u30C3\u30C8\u306E\u97F3\u58F0\u306B\u5BFE\u3057\u3066\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[pausebgm buf="" cond=""]`
  }],
  [`pausese`, {
    name: `pausese`,
    description: `\u73FE\u5728\u518D\u751F\u4E2D\u306ESE\u3092\u4E00\u6642\u505C\u6B62\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `buf`, required: false, description: `\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u30B9\u30ED\u30C3\u30C8\u306E\u97F3\u58F0\u306B\u5BFE\u3057\u3066\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[pausese buf="" cond=""]`
  }],
  [`playbgm`, {
    name: `playbgm`,
    description: `BGM\u3092\u518D\u751F\u3057\u307E\u3059\u3002\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u306Fdata/bgm\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u518D\u751F\u3059\u308B\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u30EB\u30FC\u30D7\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `sprite_time`, required: false, description: `\u518D\u751F\u3059\u308B\u533A\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u958B\u59CB\u6642\u523B\u3068\u7D42\u4E86\u6642\u523B\u3092\u30CF\u30A4\u30D5\u30F3\u7E4B\u304E\u3067\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u30706000-10000\u3068\u6307\u5B9A\u3059\u308B\u306800:06\uFF5E00:10\u306E4\u79D2\u9593\u3092\u518D\u751F\u3057\u307E\u3059\u3002loop\u5C5E\u6027\u304Ctrue\u306E\u5834\u5408\u3001\u3053\u306E\u9593\u3092\u30EB\u30FC\u30D7\u518D\u751F\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A00:06-00:10\u306E\u3088\u3046\u306A\u5206:\u79D2\u533A\u5207\u308A\u3067\u3082\u6307\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u5FC5\u305A:\u3092\u542B\u3081\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `volume`, required: false, description: `\u518D\u751F\u3059\u308B\u97F3\u91CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020\u301C100\u306E\u7BC4\u56F2\u3067\u6307\u5B9A\u3057\u3066\u4E0B\u3055\u3044\u3002` },
      { name: `html5`, required: false, description: `\u901A\u5E38\u306F\u6307\u5B9A\u3057\u306A\u304F\u3066OK\u3067\u3059\u3002HTML5 Audio\u3092\u4F7F\u3046\u5834\u5408\u306Ftrue\u3001Web Audio API\u3092\u4F7F\u3046\u5834\u5408\u306Ffalse(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pause`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u30BF\u30B0\u5B9F\u884C\u6642\u306BBGM\u3092\u518D\u751F\u3057\u307E\u305B\u3093\u3002[resumebgm]\u3067\u518D\u751F\u3067\u304D\u307E\u3059` },
      { name: `seek`, required: false, description: `\u518D\u751F\u958B\u59CB\u6642\u9593\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u30704.5\u3068\u6307\u5B9A\u3059\u308B\u30684.5\u79D2\u9032\u3093\u3060\u4F4D\u7F6E\u304B\u3089BGM\u304C\u518D\u751F\u3055\u308C\u307E\u3059` },
      { name: `restart`, required: false, description: `\u3053\u306E[playbgm]\u3067\u518D\u751F\u3057\u3088\u3046\u3068\u3057\u305FBGM\u304C\u3059\u3067\u306B\u518D\u751F\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306E\u51E6\u7406\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002true\u306A\u3089\u6700\u521D\u304B\u3089\u518D\u751F\u3057\u76F4\u3057\u3001false\u306A\u3089\u7121\u8996\u3068\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[playbgm storage="" loop="" sprite_time="" volume="" html5="" pause="" seek="" restart="" cond=""]`
  }],
  [`playse`, {
    name: `playse`,
    description: `\u52B9\u679C\u97F3\u3092\u518D\u751F\u3057\u307E\u3059\u3002\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u306Fdata/sound\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u518D\u751F\u3059\u308B\u97F3\u697D\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `buf`, required: false, description: `\u52B9\u679C\u97F3\u3092\u518D\u751F\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3059\u3067\u306B\u6307\u5B9A\u30B9\u30ED\u30C3\u30C8\u3067\u518D\u751F\u4E2D\u306E\u52B9\u679C\u97F3\u304C\u3042\u308B\u5834\u5408\u3001\u305D\u306E\u52B9\u679C\u97F3\u306F\u505C\u6B62\u3055\u308C\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u30EB\u30FC\u30D7\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `sprite_time`, required: false, description: `\u518D\u751F\u3059\u308B\u533A\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u958B\u59CB\u6642\u523B\u3068\u7D42\u4E86\u6642\u523B\u3092\u30CF\u30A4\u30D5\u30F3\u7E4B\u304E\u3067\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u30706000-10000\u3068\u6307\u5B9A\u3059\u308B\u306800:06\uFF5E00:10\u306E4\u79D2\u9593\u3092\u518D\u751F\u3057\u307E\u3059\u3002loop\u5C5E\u6027\u304Ctrue\u306E\u5834\u5408\u3001\u3053\u306E\u9593\u3092\u30EB\u30FC\u30D7\u518D\u751F\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A00:06-00:10\u306E\u3088\u3046\u306A\u5206:\u79D2\u533A\u5207\u308A\u3067\u3082\u6307\u5B9A\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3057\u305F\u3002\u5FC5\u305A:\u3092\u542B\u3081\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `clear`, required: false, description: `true\u307E\u305F\u306Ffalse\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u4ED6\u306E\u30B9\u30ED\u30C3\u30C8\u3067\u518D\u751F\u4E2D\u306E\u52B9\u679C\u97F3\u304C\u3042\u308B\u5834\u5408\u3001\u305D\u3061\u3089\u3082\u3059\u3079\u3066\u505C\u6B62\u3057\u307E\u3059\u3002\u97F3\u58F0\u306A\u3069\u306Ftrue\u304C\u4FBF\u5229\u3067\u3057\u3087\u3046\u3002` },
      { name: `volume`, required: false, description: `\u518D\u751F\u3059\u308B\u97F3\u91CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u30020\u301C100\u306E\u7BC4\u56F2\u3067\u6307\u5B9A\u3057\u3066\u4E0B\u3055\u3044\u3002` },
      { name: `html5`, required: false, description: `\u901A\u5E38\u306F\u6307\u5B9A\u3057\u306A\u304F\u3066OK\u3067\u3059\u3002HTML5 Audio\u3092\u4F7F\u3046\u5834\u5408\u306Ftrue\u3001Web Audio API\u3092\u4F7F\u3046\u5834\u5408\u306Ffalse(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[playse storage="" buf="" loop="" sprite_time="" clear="" volume="" html5="" cond=""]`
  }],
  [`plugin`, {
    name: `plugin`,
    description: `\u5916\u90E8\u30D7\u30E9\u30B0\u30A4\u30F3\u3092\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u30D7\u30E9\u30B0\u30A4\u30F3\u306Fdata/others/plugin\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u8AAD\u307F\u8FBC\u3080\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u540D\u524D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30D7\u30E9\u30B0\u30A4\u30F3\u306Fdata/others/plugin\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `\u6700\u521D\u306B\u8AAD\u307F\u8FBC\u3080\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[plugin name="" storage="" cond=""]`
  }],
  [`popopo`, {
    name: `popopo`,
    description: `\u30C6\u30AD\u30B9\u30C8\u306B\u5408\u308F\u305B\u3066\u30DD\u30DD\u30DD\u3068\u3044\u3046\u96FB\u5B50\u97F3\u3092\u6D41\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `type`, required: false, description: `7\u3064\u306E\u30AD\u30FC\u30EF\u30FC\u30C9sine/square/sawtooth/triangle/noise/file/none\u306E\u3044\u305A\u308C\u304B\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u9806\u306B\u3001\u6B63\u5F26\u6CE2/\u77E9\u5F62\u6CE2/\u306E\u3053\u304E\u308A\u6CE2/\u4E09\u89D2\u6CE2/\u30DB\u30EF\u30A4\u30C8\u30CE\u30A4\u30BA/\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u518D\u751F/\u518D\u751F\u3057\u306A\u3044\u3001\u3092\u610F\u5473\u3057\u307E\u3059\u3002` },
      { name: `volume`, required: false, description: `\u97F3\u306E\u5927\u304D\u3055\u30020\uFF5E100\u306E\u6570\u5024\u307E\u305F\u306F\u30AD\u30FC\u30EF\u30FC\u30C9default\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002default\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30B3\u30F3\u30D5\u30A3\u30B0\u306ESE\u52B9\u679C\u97F3\u91CF\u3092\u53C2\u7167\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30DD\u30DD\u30DD\u97F3\u306E\u9577\u3055\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002type\u304Cfile\u306E\u5834\u5408\u306F\u7121\u610F\u5473\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F20\u3002` },
      { name: `tailtime`, required: false, description: `\u30DD\u30DD\u30DD\u97F3\u306E\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002type\u304Cfile\u306E\u5834\u5408\u306F\u7121\u610F\u5473\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F30\u3002` },
      { name: `frequency`, required: false, description: `\u30DD\u30DD\u30DD\u97F3\u306E\u97F3\u7A0B\u3002A/A+/B/B+/C/C+/D/D+/E/E+/F/F+/G/G+\u306E\u3044\u305A\u308C\u304B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305D\u308C\u305E\u308C\u30E9/\u30E9\u266F/\u2026\u2026/\u30BD/\u30BD\u266F\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u306A\u304A\u3001type\u304Cfile\u3042\u308B\u3044\u306Ftype\u304Cnoise\u306E\u5834\u5408\u306F\u7121\u610F\u5473\u3002` },
      { name: `octave`, required: false, description: `\u97F3(\u30AA\u30AF\u30BF\u30FC\u30D6)\u306E\u9AD8\u3055\u3092\u6574\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F0\u30021\u5897\u6E1B\u3055\u305B\u308B\u3054\u3068\u306B\u96A3\u306E\u30AA\u30AF\u30BF\u30FC\u30D6\u306B\u79FB\u52D5\u3057\u307E\u3059\u3002type\u304Cfile\u3042\u308B\u3044\u306Ftype\u304Cnoise\u306E\u5834\u5408\u306F\u7121\u610F\u5473\u3002` },
      { name: `samplerate`, required: false, description: `\u30DD\u30DD\u30DD\u97F3\u306E\u30B5\u30F3\u30D7\u30EB\u30EC\u30FC\u30C8\u3002type\u304Cnoise\u306E\u5834\u5408\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002\u521D\u671F\u5024\u306F44000\u30023000\u4EE5\u4E0A\u3001192000\u4EE5\u4E0B\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002` },
      { name: `buf`, required: false, description: `type\u304Cfile\u306E\u5834\u5408\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002\u518D\u751F\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6574\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `type=file\u306E\u5834\u5408\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002\u518D\u751F\u3059\u308B\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `mode`, required: false, description: `everyone/interval\u306E\u3069\u3061\u3089\u304B\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u9806\u306B\u3001\u30DD\u30DD\u30DD\u97F3\u3092\u6587\u5B57\u6BCE\u306B\u9CF4\u3089\u3059/\u6587\u5B57\u306B\u95A2\u4FC2\u306A\u304F\u4E00\u5B9A\u306E\u9593\u9694\u3067\u9CF4\u3089\u3059\u3001\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Feveryone\u3002` },
      { name: `noplaychars`, required: false, description: `mode\u304Ceveryone\u306E\u5834\u5408\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002\u30DD\u30DD\u30DD\u97F3\u3092\u9CF4\u3089\u3055\u306A\u3044\u6587\u5B57\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F"\u2026\u30FB\u3001\u3002\u300C\u300D\uFF08\uFF09\u3000 "\u3002` },
      { name: `interval`, required: false, description: `mode\u304Cinterval\u306E\u5834\u5408\u306E\u307F\u6A5F\u80FD\u3057\u307E\u3059\u3002\u30DD\u30DD\u30DD\u97F3\u3092\u9CF4\u3089\u3059\u9593\u9694\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306F80\u3002` },
      { name: `chara`, required: false, description: `\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u540D\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u3053\u306E\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u304C\u8A71\u3057\u3066\u3044\u308B\u3068\u304D\u3060\u3051\u3001\u30DD\u30DD\u30DD\u97F3\u3092\u9069\u7528\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[popopo type="" volume="" time="" tailtime="" frequency="" octave="" samplerate="" buf="" storage="" mode="" noplaychars="" interval="" chara="" cond=""]`
  }],
  [`position`, {
    name: `position`,
    description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u5BFE\u3059\u308B\u69D8\u3005\u306A\u5C5E\u6027\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002
\u3044\u305A\u308C\u306E\u5C5E\u6027\u3082\u3001\u7701\u7565\u3059\u308C\u3070\u8A2D\u5B9A\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u5BFE\u8C61\u3068\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u3001\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u307E\u305F\u306Fback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u30DA\u30FC\u30B8\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `left`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `top`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0A\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `width`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u6A2A\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `height`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u9AD8\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `frame`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30D5\u30EC\u30FC\u30E0\u753B\u50CF\u3068\u3057\u3066\u8868\u793A\u3055\u305B\u308B\u753B\u50CF\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002 \u753B\u50CF\u30B5\u30A4\u30BA\u306Fwidth\u3068height\u5C5E\u6027\u306B\u6E96\u3058\u3066\u8ABF\u6574\u3057\u3066\u304F\u3060\u3055\u3044\u3002margin\u5C5E\u6027\u3067\u5B9F\u969B\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u304C\u8868\u793A\u3055\u308C\u308B\u7B87\u6240\u306E\u8ABF\u6574\u3082\u884C\u3044\u307E\u3057\u3087\u3046\u3002 none\u3068\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u6A19\u6E96\u67A0\u306B\u623B\u3059\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u8868\u793A\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `border_color`, required: false, description: `\u5916\u67A0\u306E\u7DDA\u304C\u6709\u52B9\u306A\u5834\u5408\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002border_size\u5C5E\u6027\u306E\u6307\u5B9A\u304C\u540C\u6642\u306B\u5FC5\u8981\u3067\u3059` },
      { name: `border_size`, required: false, description: `\u5916\u67A0\u306E\u7DDA\u304C\u6709\u52B9\u306A\u5834\u5408\u306E\u592A\u3055\u3092\u6307\u5B9A\u3057\u307E\u3059\u30020\u3092\u6307\u5B9A\u3059\u308B\u3068\u5916\u67A0\u306F\u8868\u793A\u3055\u308C\u307E\u305B\u3093\u3002\u521D\u671F\u5024\u306F0\u3067\u3059\u3002` },
      { name: `opacity`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0D\u900F\u660E\u5EA6\u30920\uFF5E255\u306E\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u30020\u3067\u5B8C\u5168\u306B\u900F\u660E\u3002\uFF08\u6587\u5B57\u306E\u4E0D\u900F\u660E\u5EA6\u3084\u3001\u30EC\u30A4\u30E4\u81EA\u4F53\u306E\u4E0D\u900F\u660E\u5EA6\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF09` },
      { name: `marginl`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u5DE6\u4F59\u767D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `margint`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0A\u4F59\u767D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `marginr`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u53F3\u4F59\u767D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `marginb`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4E0B\u4F59\u767D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `margin`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u4F59\u767D\u3092\u4E00\u62EC\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u307030\u3068\u6307\u5B9A\u3059\u308B\u3068\u4E0A\u4E0B\u5DE6\u53F3\u3059\u3079\u3066\u306B30px\u306E\u4F59\u767D\u304C\u3067\u304D\u307E\u3059\u3002 \u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u65B9\u5411\u3054\u3068\u306E\u4F59\u767D\u3092\u4E00\u62EC\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002\u4E0A\u4E0B,\u5DE6\u53F3\u3001\u4E0A,\u5DE6\u53F3,\u4E0B\u3001\u4E0A,\u53F3,\u4E0B,\u5DE6\u306E\u3088\u3046\u306B\u6307\u5B9A\u3067\u304D\u307E\u3059\uFF08\u65B9\u5411\u306E\u90E8\u5206\u306F\u6570\u5024\u306B\u5909\u3048\u3066\u304F\u3060\u3055\u3044\uFF09\u3002` },
      { name: `radius`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u89D2\u306E\u4E38\u307F\u3092\u6570\u5024\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u4F8B\uFF1A10(\u63A7\u3048\u3081\u306A\u89D2\u4E38)\u300130(\u666E\u901A\u306E\u89D2\u4E38)\u3001100(\u5DE8\u5927\u306A\u89D2\u4E38)` },
      { name: `vertical`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u7E26\u66F8\u304D\u30E2\u30FC\u30C9\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3067\u7E26\u66F8\u304D\u3001false\u3067\u6A2A\u66F8\u304D\u3002` },
      { name: `visible`, required: false, description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u8868\u793A\u72B6\u614B\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u540C\u6642\u306B\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u306E\u8868\u793A\u72B6\u614B\u3092\u64CD\u4F5C\u3067\u304D\u307E\u3059\u3002` },
      { name: `gradient`, required: false, description: `\u80CC\u666F\u306B\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002CSS\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002CSS\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3068\u306F\u3001\u305F\u3068\u3048\u3070linear-gradient(45deg, red 0%, yellow 100%)\u306E\u3088\u3046\u306A\u5F62\u5F0F\u3067\u3059\u3002 CSS\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u7C21\u5358\u306B\u4F5C\u308C\u308B\u30B5\u30A4\u30C8\u304CWeb\u4E0A\u306B\u3044\u304F\u3064\u304B\u5B58\u5728\u3057\u307E\u3059\u306E\u3067\u3001\u300CCSS \u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3 \u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC\u300D\u3067\u691C\u7D22\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[position layer="" page="" left="" top="" width="" height="" frame="" color="" border_color="" border_size="" opacity="" marginl="" margint="" marginr="" marginb="" margin="" radius="" vertical="" visible="" gradient="" cond=""]`
  }],
  [`position_filter`, {
    name: `position_filter`,
    description: `\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u88CF\u5074\u306B\u30D5\u30A3\u30EB\u30BF\u30FC\u52B9\u679C\u3092\u304B\u3051\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u3053\u308C\u306B\u3088\u3063\u3066\u3001\u305F\u3068\u3048\u3070\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u3092\u3059\u308A\u30AC\u30E9\u30B9\u306E\u3088\u3046\u306B\u898B\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: false, description: `\u5BFE\u8C61\u3068\u3059\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u3001\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u307E\u305F\u306Fback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u30DA\u30FC\u30B8\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `remove`, required: false, description: `true\u307E\u305F\u306Ffalse\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30D5\u30A3\u30EB\u30BF\u30FC\u3092\u9664\u53BB\u3059\u308B\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `grayscale`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u30B0\u30EC\u30FC\u30B9\u30B1\u30FC\u30EB\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u3002` },
      { name: `sepia`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u30BB\u30D4\u30A2\u8ABF\u306B\u5909\u63DB\u3067\u304D\u307E\u3059\u3002` },
      { name: `saturate`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3057\u3066\u3042\u3052\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u5F69\u5EA6\uFF08\u8272\u306E\u9BAE\u3084\u304B\u3055\uFF09\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `hue`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E360\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u8272\u76F8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `invert`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E100\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u968E\u8ABF\u3092\u53CD\u8EE2\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `opacity`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u900F\u904E\u5EA6\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `brightness`, required: false, description: `100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u57FA\u6E96\u3068\u3059\u308B\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u660E\u5EA6\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u30020\u3067\u771F\u3063\u6697\u306B\u3001100\u4EE5\u4E0A\u306E\u6570\u5024\u3067\u3088\u308A\u660E\u308B\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `contrast`, required: false, description: `0\uFF5E100(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u306E\u30B3\u30F3\u30C8\u30E9\u30B9\u30C8\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002` },
      { name: `blur`, required: false, description: `0(\u30C7\u30D5\u30A9\u30EB\u30C8)\uFF5E\u4EFB\u610F\u306E\u5024\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u753B\u50CF\u306E\u8868\u793A\u3092\u307C\u304B\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[position_filter layer="" page="" remove="" grayscale="" sepia="" saturate="" hue="" invert="" opacity="" brightness="" contrast="" blur="" cond=""]`
  }],
  [`preload`, {
    name: `preload`,
    description: `[preload]\u30BF\u30B0\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3067\u3001\u7D20\u6750\u30D5\u30A1\u30A4\u30EB\uFF08\u753B\u50CF\u3084\u97F3\u697D\uFF09\u3092\u4E8B\u524D\u306B\u8AAD\u307F\u8FBC\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u5B9F\u969B\u306B\u7D20\u6750\u3092\u4F7F\u7528\u3059\u308B\u969B\u306B\u8868\u793A\u304C\u30B9\u30E0\u30FC\u30BA\u306B\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u30D7\u30EA\u30ED\u30FC\u30C9\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u3092\u30D5\u30EB\u30D1\u30B9\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002JavaScript\u306E\u914D\u5217\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u30B2\u30FC\u30E0\u3092\u505C\u6B62\u3057\u307E\u3059\u3002true\u306B\u3059\u308B\u5834\u5408\u306F\u753B\u9762\u306B\u300CNow Loading\u300D\u306A\u3069\u3068\u8868\u793A\u3057\u3066\u304A\u304D\u3001\u7D20\u6750\u306E\u30ED\u30FC\u30C9\u4E2D\u3067\u3042\u308B\u3053\u3068\u3092\u30D7\u30EC\u30A4\u30E4\u30FC\u306B\u77E5\u3089\u305B\u308B\u3079\u304D\u3067\u3057\u3087\u3046\u3002` },
      { name: `single_use`, required: false, description: `\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3080\u5834\u5408\u306B\u306E\u307F\u610F\u5473\u3092\u6301\u3064\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u3059\u3002true(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3092\u6307\u5B9A\u3059\u308B\u3068\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u304C\u4F7F\u3044\u6368\u3066\u3068\u306A\u308A\u3001[playbgm]\u306A\u3069\u3067\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u3092\u4E00\u5EA6\u4F7F\u7528\u3057\u305F\u6642\u70B9\u3067\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u304C\u7834\u68C4\u3055\u308C\u307E\u3059\uFF08\u30E1\u30E2\u30EA\u3092\u5727\u8FEB\u3057\u306A\u3044\u3088\u3046\u306B\u3059\u308B\u305F\u3081\uFF09\u3002\u4E00\u5EA6\u4F7F\u3063\u305F\u3042\u3068\u3082\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u3092\u4FDD\u6301\u3057\u305F\u3044\u5834\u5408\u306Ffalse\u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002false\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3067\u3042\u3063\u3066\u3082[unload]\u30BF\u30B0\u3092\u4F7F\u3046\u3053\u3068\u3067\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u3092\u660E\u793A\u7684\u306B\u7834\u68C4\u3067\u304D\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u3080\u5834\u5408\u306B\u306E\u307F\u610F\u5473\u3092\u6301\u3064\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u3059\u3002\u305F\u3068\u3048\u3070"bgm"\u3001"se"\u3001"section1"\u306A\u3069\u306E\u30B0\u30EB\u30FC\u30D7\u540D\u3092\u4ED8\u3051\u3066\u304A\u304F\u3053\u3068\u3067\u3001\u3042\u3068\u3067[unload]\u30BF\u30B0\u3067\u30C7\u30FC\u30BF\u3092\u7834\u68C4\u3059\u308B\u969B\u306B\u5BFE\u8C61\u3092\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u6307\u5B9A\u53EF\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[preload storage="" wait="" single_use="" name="" cond=""]`
  }],
  [`ptext`, {
    name: `ptext`,
    description: `\u524D\u666F\u30EC\u30A4\u30E4\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u8868\u793A\u3057\u307E\u3059\u3002\u30E1\u30C3\u30BB\u30FC\u30B8\u30A6\u30A3\u30F3\u30C9\u30A6\u306E\u30C6\u30AD\u30B9\u30C8\u3068\u306F\u5225\u306B\u753B\u9762\u4E0A\u306B\u30C6\u30AD\u30B9\u30C8\u3092\u51FA\u3057\u305F\u3044\u3068\u304D\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: true, description: `\u5BFE\u8C61\u3068\u3059\u308B\u524D\u666F\u30EC\u30A4\u30E4\u30920\u4EE5\u4E0A\u306E\u6574\u6570\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `page`, required: false, description: `\u30EC\u30A4\u30E4\u306E\u8868\u30DA\u30FC\u30B8\u3068\u88CF\u30DA\u30FC\u30B8\u3001\u3069\u3061\u3089\u3092\u5BFE\u8C61\u3068\u3059\u308B\u304B\u3002fore\u307E\u305F\u306Fback\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u8868\u30DA\u30FC\u30B8\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `text`, required: false, description: `\u8868\u793A\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u306E\u5185\u5BB9\u3002` },
      { name: `x`, required: true, description: `\u30C6\u30AD\u30B9\u30C8\u306E\u5DE6\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `y`, required: true, description: `\u30C6\u30AD\u30B9\u30C8\u306E\u4E0A\u7AEF\u4F4D\u7F6E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u30D4\u30AF\u30BB\u30EB\uFF09` },
      { name: `vertical`, required: false, description: `\u7E26\u66F8\u304D\u306B\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `size`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u30B5\u30A4\u30BA\u3092\u30D4\u30AF\u30BB\u30EB\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `face`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u7A2E\u985E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u975EKAG\u4E92\u63DB\u3067\u3059\u304C\u3001\u30A6\u30A7\u30D6\u30D5\u30A9\u30F3\u30C8\u3082\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002` },
      { name: `color`, required: false, description: `\u30D5\u30A9\u30F3\u30C8\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `bold`, required: false, description: `\u592A\u5B57\u306B\u3059\u308B\u5834\u5408\u306Fbold\u3068\u6307\u5B9A\u3057\u307E\u3059\u3002\uFF08\u3053\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u3092CSS\u306Efont-style\u306B\u30BB\u30C3\u30C8\u3057\u307E\u3059\uFF09 V515\u4EE5\u964D\uFF1Atrue\u3067\u3082\u592A\u5B57\u306B\u3067\u304D\u308B\u3088\u3046\u306B\u3057\u307E\u3057\u305F\u3002` },
      { name: `edge`, required: false, description: `\u6587\u5B57\u306E\u7E01\u53D6\u308A\u3092\u6709\u52B9\u306B\u3067\u304D\u307E\u3059\u3002\u7E01\u53D6\u308A\u3059\u308B\u6587\u5B57\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002 V515\u4EE5\u964D\uFF1A\u7E01\u53D6\u308A\u306E\u592A\u3055\u3082\u3042\u308F\u305B\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u30024px 0xFF0000\u306E\u3088\u3046\u306B\u3001\u8272\u306E\u524D\u306B\u7E01\u53D6\u308A\u306E\u592A\u3055\u3092px\u4ED8\u304D\u3067\u8A18\u8FF0\u3057\u307E\u3059\u3002\u592A\u3055\u3068\u8272\u306F\u534A\u89D2\u30B9\u30DA\u30FC\u30B9\u3067\u533A\u5207\u3063\u3066\u304F\u3060\u3055\u3044\u3002\u3055\u3089\u306B4px 0xFF0000, 2px 0xFFFFFF\u306E\u3088\u3046\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u306E\u7E01\u53D6\u308A\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `shadow`, required: false, description: `\u6587\u5B57\u306B\u5F71\u3092\u3064\u3051\u307E\u3059\u3002\u5F71\u306E\u8272\u30920xRRGGBB\u5F62\u5F0F\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u7E01\u53D6\u308A\u3092\u3057\u3066\u3044\u308B\u5834\u5408\u306F\u7121\u52B9\u5316\u3055\u308C\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `[anim]\u30BF\u30B0\u306A\u3069\u304B\u3089\u3053\u306E\u540D\u524D\u3067\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u3089\u308C\u307E\u3059\u3002\u30AB\u30F3\u30DE\u3067\u533A\u5207\u308B\u3053\u3068\u3067\u8907\u6570\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\uFF08\u9AD8\u5EA6\u306A\u77E5\u8B58\uFF1Aname\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u5024\u306FHTML\u306E\u30AF\u30E9\u30B9\u5C5E\u6027\u306B\u306A\u308A\u307E\u3059\uFF09` },
      { name: `width`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u8868\u793A\u90E8\u5206\u306E\u6A2A\u5E45\u3092\u30D4\u30AF\u30BB\u30EB\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `align`, required: false, description: `\u6587\u5B57\u306E\u6A2A\u65B9\u5411\u306B\u95A2\u3059\u308B\u4F4D\u7F6E\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002width\u30D1\u30E9\u30E1\u30FC\u30BF\u3092\u540C\u6642\u306B\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002left(\u5DE6\u5BC4\u305B)\u3001center(\u4E2D\u592E\u5BC4\u305B)\u3001right\uFF08\u53F3\u5BC4\u305B)` },
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A4\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u753B\u50CF\u304C\u900F\u660E\u306A\u72B6\u614B\u304B\u3089\u5F90\u3005\u306B\u8868\u793A\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u4E00\u77AC\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002` },
      { name: `overwrite`, required: false, description: `\u4E0A\u66F8\u304D\u3059\u308B\u304B\u3069\u3046\u304B\u3092true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u540C\u3058name\u304C\u6307\u5B9A\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u304C\u3059\u3067\u306B\u5B58\u5728\u3057\u3066\u3044\u308B\u5834\u5408\u306B\u3001\u65B0\u898F\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0\u3059\u308B\u306E\u3067\u306F\u306A\u304F\u65E2\u5B58\u306E\u30C6\u30AD\u30B9\u30C8\u306E\u5185\u5BB9\u3092\u66F8\u304D\u5909\u3048\u308B\u51E6\u7406\u3092\u884C\u3044\u307E\u3059\u3002` },
      { name: `gradient`, required: false, description: `V515\u4EE5\u964D\uFF1A\u6587\u5B57\u306B\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u3092\u9069\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002CSS\u306E\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u95A2\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u95A2\u6570\u3068\u306Flinear-gradient(45deg, red 0%, yellow 100%)\u306E\u3088\u3046\u306A\u6587\u5B57\u5217\u3067\u3059\u3002 \u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3\u95A2\u6570\u3092\u7C21\u5358\u306B\u4F5C\u308C\u308B\u30B5\u30A4\u30C8\u304CWeb\u4E0A\u306B\u3044\u304F\u3064\u304B\u5B58\u5728\u3057\u307E\u3059\u306E\u3067\u3001\u300CCSS \u30B0\u30E9\u30C7\u30FC\u30B7\u30E7\u30F3 \u30B8\u30A7\u30CD\u30EC\u30FC\u30BF\u30FC\u300D\u3067\u691C\u7D22\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[ptext layer="" page="" text="" x="" y="" vertical="" size="" face="" color="" bold="" edge="" shadow="" name="" width="" align="" time="" overwrite="" gradient="" cond=""]`
  }],
  [`pushlog`, {
    name: `pushlog`,
    description: `\u30D0\u30C3\u30AF\u30ED\u30B0\u306B\u4EFB\u610F\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u8FFD\u52A0\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `text`, required: true, description: `\u30D0\u30C3\u30AF\u30ED\u30B0\u306B\u8FFD\u52A0\u3059\u308B\u30C6\u30AD\u30B9\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `join`, required: false, description: `\u30D0\u30C3\u30AF\u30ED\u30B0\u3092\u524D\u306E\u30C6\u30AD\u30B9\u30C8\u306B\u9023\u7D50\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[pushlog text="" join="" cond=""]`
  }],
  [`qr_config`, {
    name: `qr_config`,
    description: `QR\u30B3\u30FC\u30C9\u306E\u5404\u7A2E\u52D5\u4F5C\u8A2D\u5B9A\u304C\u53EF\u80FD\u3067\u3059\u3002`,
    params: [
      { name: `qrcode`, required: false, description: `QR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u8FBC\u3093\u3060\u3068\u304D\u306E\u52D5\u4F5C\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002 jump(\u30B2\u30FC\u30E0\u5185\u79FB\u52D5\u306EQR\u306E\u307F\u53CD\u5FDC) web(\u4ED6\u30B5\u30A4\u30C8\u3078\u306E\u30EA\u30F3\u30AF\u3060\u3051\u53CD\u5FDC) define([qr_define]\u3067\u5B9A\u7FA9\u3057\u305F\u3082\u306E\u3060\u3051\u306B\u53CD\u5FDC) all(\u3059\u3079\u3066\u306B\u53CD\u5FDC) off(QR\u30B3\u30FC\u30C9\u306B\u53CD\u5FDC\u3057\u306A\u3044)` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[qr_config qrcode="" cond=""]`
  }],
  [`qr_define`, {
    name: `qr_define`,
    description: `QR\u30B3\u30FC\u30C9\u306E\u7279\u5B9A\u306EURL\u3092[jump]\u306B\u7F6E\u304D\u63DB\u3048\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002
\u4F8B\u3048\u3070\u3001\u30E2\u30CB\u30E5\u30E1\u30F3\u30C8\u3084\u5546\u54C1\u306B\u3064\u3044\u3066\u3044\u308BQR\u30B3\u30FC\u30C9\u3092\u30B2\u30FC\u30E0\u5185\u306E\u30A4\u30D9\u30F3\u30C8\u306B\u7F6E\u304D\u63DB\u3048\u308B\u4E8B\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `url`, required: true, description: `\u30AB\u30E1\u30E9\u3092\u5199\u3057\u305F\u3068\u304D\u306B\u53CD\u5FDC\u3055\u305B\u308BURL\u3092\u5B9A\u7FA9\u3057\u307E\u3059\u3002` },
      { name: `storage`, required: false, description: `URL\u304C\u8AAD\u307F\u8FBC\u307E\u308C\u305F\u3068\u304D\u306B\u767A\u52D5\u3059\u308B\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `clear`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u5B9A\u7FA9\u3092\u524A\u9664\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[qr_define url="" storage="" target="" clear="" cond=""]`
  }],
  [`quake`, {
    name: `quake`,
    description: `\u6307\u5B9A\u3057\u305F\u30DF\u30EA\u79D2\u3060\u3051\u3001\u753B\u9762\u3092\u63FA\u3089\u3057\u307E\u3059\u3002
vmax\u5C5E\u6027\u30920\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u6A2A\u63FA\u308C\u306B\u3001hmax\u5C5E\u6027\u30920\u306B\u8A2D\u5B9A\u3059\u308B\u3068\u7E26\u63FA\u308C\u306B\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `count`, required: false, description: `\u63FA\u3089\u3059\u56DE\u6570\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u63FA\u308C\u306E\u7D42\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: true, description: `\uFF11\u56DE\u63FA\u308C\u308B\u306E\u306B\u304B\u304B\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `hmax`, required: false, description: `\u63FA\u308C\u306E\u6A2A\u65B9\u5411\u3078\u306E\u6700\u5927\u632F\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `vmax`, required: false, description: `\u63FA\u308C\u306E\u7E26\u65B9\u5411\u3078\u306E\u6700\u5927\u632F\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[quake count="" wait="" time="" hmax="" vmax="" cond=""]`
  }],
  [`quake2`, {
    name: `quake2`,
    description: `\u6307\u5B9A\u3057\u305F\u30DF\u30EA\u79D2\u3060\u3051\u753B\u9762\u3092\u63FA\u3089\u3057\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u63FA\u308C\u5168\u4F53\u306E\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `hmax`, required: false, description: `\u63FA\u308C\u306E\u6A2A\u65B9\u5411\u3078\u306E\u6700\u5927\u632F\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `vmax`, required: false, description: `\u63FA\u308C\u306E\u7E26\u65B9\u5411\u3078\u306E\u6700\u5927\u632F\u5E45\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u63FA\u308C\u306E\u7D42\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `copybase`, required: false, description: `true\u3092\u6307\u5B9A\u3057\u305F\u5834\u5408\u3001\u753B\u9762\u304C\u63FA\u308C\u3066\u3044\u308B\u9593\u3001\u30D9\u30FC\u30B9\u30EC\u30A4\u30E4\u306E\u80CC\u666F\u306E\u30B3\u30D4\u30FC\u304C\u6700\u5F8C\u9762\u306B\u56FA\u5B9A\u3055\u308C\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u3063\u3066\u3001\u305F\u3068\u3048\u3070\u753B\u9762\u304C\u4E0A\u306B\u63FA\u308C\u305F\u77AC\u9593\u306B\u4E0B\u5074\u306B\u3067\u304D\u308B\u9699\u9593\u304B\u3089\u9ED2\u8272\u304C\u306E\u305E\u304F\u3053\u3068\u304C\u306A\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[quake2 time="" hmax="" vmax="" wait="" copybase="" cond=""]`
  }],
  [`r`, {
    name: `r`,
    description: `\u6539\u884C\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[r cond=""]`
  }],
  [`reset_camera`, {
    name: `reset_camera`,
    description: `\u30AB\u30E1\u30E9\u306E\u4F4D\u7F6E\u3092\u521D\u671F\u5024\u306B\u623B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30AB\u30E1\u30E9\u79FB\u52D5\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3092true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u30AB\u30E1\u30E9\u79FB\u52D5\u4E2D\u3082\u30B2\u30FC\u30E0\u3092\u9032\u884C\u3067\u304D\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u52B9\u679C\u3092\u4E0E\u3048\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u80CC\u666F\u306A\u3089base\u3001\u524D\u666F\u30EC\u30A4\u30E4\u306A\u30890\u4EE5\u4E0A\u306E\u6570\u5B57\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AB\u30E1\u30E9\u306E\u5F71\u97FF\u3092\u7279\u5B9A\u30EC\u30A4\u30E4\u306B\u9650\u5B9A\u3067\u304D\u307E\u3059\u3002\u901A\u5E38\u306F\u3059\u3079\u3066\u306E\u30EC\u30A4\u30E4\u306B\u5BFE\u3057\u3066\u5F71\u97FF\u3092\u53CA\u307C\u3057\u307E\u3059\u3002` },
      { name: `ease_type`, required: false, description: `\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u6F14\u51FA\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002 ease(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u6ED1\u3089\u304B\u306B\u518D\u751F\u3059\u308B) linear(\u4E00\u5B9A\u306E\u901F\u5EA6\u3067\u518D\u751F\u3059\u308B) ease-in(\u958B\u59CB\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-out(\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B) ease-in-out(\u958B\u59CB\u6642\u70B9\u3068\u7D42\u4E86\u6642\u70B9\u3092\u3086\u3063\u304F\u308A\u518D\u751F\u3059\u308B)` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[reset_camera time="" wait="" layer="" ease_type="" cond=""]`
  }],
  [`resetdelay`, {
    name: `resetdelay`,
    description: `\u6587\u5B57\u306E\u8868\u793A\u901F\u5EA6\u3092\u30C7\u30D5\u30A9\u30EB\u30C8\u901F\u5EA6\u306B\u623B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[resetdelay cond=""]`
  }],
  [`resetfont`, {
    name: `resetfont`,
    description: `\u30C6\u30AD\u30B9\u30C8\u30B9\u30BF\u30A4\u30EB\u3092\u3082\u3068\u306B\u623B\u3057\u307E\u3059\u3002\u3059\u306A\u308F\u3061[deffont]\u3067\u6307\u5B9A\u3055\u308C\u305F\u30B9\u30BF\u30A4\u30EB\u306B\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[resetfont cond=""]`
  }],
  [`resumebgm`, {
    name: `resumebgm`,
    description: `[pausebgm]\u3067\u505C\u6B62\u3057\u3066\u3044\u305FBGM\u518D\u751F\u3092\u518D\u958B\u3067\u304D\u307E\u3059\u3002
\u4E00\u6642\u505C\u6B62\u4E2D\u306E\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u518D\u958B\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `buf`, required: false, description: `\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u30B9\u30ED\u30C3\u30C8\u306E\u97F3\u58F0\u306B\u5BFE\u3057\u3066\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[resumebgm buf="" cond=""]`
  }],
  [`resumese`, {
    name: `resumese`,
    description: `\u4E00\u6642\u505C\u6B62\u4E2D\u306ESE\u3092\u518D\u958B\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `buf`, required: false, description: `\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u30B9\u30ED\u30C3\u30C8\u306E\u97F3\u58F0\u306B\u5BFE\u3057\u3066\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[resumese buf="" cond=""]`
  }],
  [`return`, {
    name: `return`,
    description: `\u30B5\u30D6\u30EB\u30FC\u30C1\u30F3\u304B\u3089\u547C\u3073\u51FA\u3057\u5143\u306B\u623B\u308A\u307E\u3059\u3002\u8A73\u7D30\u306F[call]\u306E\u9805\u76EE\u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[return cond=""]`
  }],
  [`rollback`, {
    name: `rollback`,
    description: `[checkpoint]\u30BF\u30B0\u3092\u901A\u904E\u3057\u305F\u5834\u6240\u306B\u3069\u3053\u304B\u3089\u3067\u3082\u623B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `checkpoint`, required: true, description: `\u30C1\u30A7\u30C3\u30AF\u30DD\u30A4\u30F3\u30C8\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `variable_over`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u5F8C\u306B\u73FE\u5728\u306E\u30B2\u30FC\u30E0\u5909\u6570\u3092\u5F15\u304D\u7D99\u304E\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ftrue` },
      { name: `bgm_over`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u5F8C\u306BBGM\u3092\u5F15\u304D\u7D99\u304E\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[rollback checkpoint="" variable_over="" bgm_over="" cond=""]`
  }],
  [`ruby`, {
    name: `ruby`,
    description: `\u6B21\u306E\u4E00\u6587\u5B57\u306B\u5BFE\u3059\u308B\u30EB\u30D3\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002
\u30EB\u30D3\u3092\u8868\u793A\u3055\u305B\u305F\u3044\u5834\u5408\u306F\u6BCE\u56DE\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002
\u8907\u6570\u306E\u6587\u5B57\u306B\u30EB\u30D3\u3092\u632F\u308B\u5834\u5408\u306F\u3001\u4E00\u6587\u5B57\u6BCE\u306B\u30EB\u30D3\u3092\u6307\u5B9A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `text`, required: true, description: `\u30EB\u30D3\u3068\u3057\u3066\u8868\u793A\u3055\u305B\u308B\u6587\u5B57\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[ruby text="" cond=""]`
  }],
  [`s`, {
    name: `s`,
    description: `\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5B9F\u884C\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[s cond=""]`
  }],
  [`save_img`, {
    name: `save_img`,
    description: `\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u30B5\u30E0\u30CD\u30A4\u30EB\u306B\u597D\u304D\u306A\u753B\u50CF\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u30B5\u30E0\u30CD\u30A4\u30EB\u306B\u8A2D\u5B9A\u3057\u305F\u3044\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002bgimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u3066\u304F\u3060\u3055\u3044\u3002default\u3092\u6307\u5B9A\u3059\u308B\u3068\u753B\u9762\u30AD\u30E3\u30D7\u30C1\u30E3\u306B\u623B\u308A\u307E\u3059\u3002` },
      { name: `folder`, required: false, description: `\u753B\u50CF\u3092bgimage\u30D5\u30A9\u30EB\u30C0\u4EE5\u5916\u304B\u3089\u53D6\u5F97\u3057\u305F\u3044\u5834\u5408\u306F\u3001\u3053\u3053\u306B\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u3070othersfgimageimage\u306A\u3069\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[save_img storage="" folder="" cond=""]`
  }],
  [`savesnap`, {
    name: `savesnap`,
    description: `\u73FE\u5728\u306E\u30D7\u30EC\u30A4\u72B6\u6CC1\u3092\u4E00\u6642\u4FDD\u5B58\u3057\u307E\u3059\u3002\u305D\u306E\u5F8C\u3001tyrano.ks\u62E1\u5F35\u306E[setsave]\u3092\u884C\u3046\u3053\u3068\u3067\u3001\u3053\u3053\u3067\u8A18\u9332\u3057\u305F\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u304C\u4FDD\u5B58\u3055\u308C\u307E\u3059\u3002`,
    params: [
      { name: `title`, required: true, description: `\u30BB\u30FC\u30D6\u30C7\u30FC\u30BF\u306E\u30BF\u30A4\u30C8\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[savesnap title="" cond=""]`
  }],
  [`screen_full`, {
    name: `screen_full`,
    description: `\u30B2\u30FC\u30E0\u753B\u9762\u3092\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u3057\u307E\u3059\u3002\u518D\u5EA6\u547C\u3073\u51FA\u3059\u3053\u3068\u3067\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3\u304B\u3089\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u623B\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[screen_full cond=""]`
  }],
  [`seopt`, {
    name: `seopt`,
    description: `SE\u306E\u8A2D\u5B9A\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `volume`, required: false, description: `SE\u306E\u30B3\u30F3\u30D5\u30A3\u30B0\u97F3\u91CF\u30920\u301C100\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `buf`, required: false, description: `\u8A2D\u5B9A\u3092\u5909\u66F4\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u5168\u30B9\u30ED\u30C3\u30C8\u5171\u901A\u306E\u97F3\u91CF\u304C\u8A2D\u5B9A\u3055\u308C\u307E\u3059\u3002` },
      { name: `effect`, required: false, description: `\u30B3\u30F3\u30D5\u30A3\u30B0\u97F3\u91CF\u306E\u5909\u66F4\u3092\u73FE\u5728\u518D\u751F\u4E2D\u306ESE\u306B\u5373\u53CD\u6620\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u97F3\u91CF\u306E\u5909\u66F4\u3092\u5373\u53CD\u6620\u3059\u308B\u5834\u5408\u306E\u30D5\u30A7\u30FC\u30C9\u6642\u9593\u3092\u30DF\u30EA\u79D2\u5358\u4F4D\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `tag_volume`, required: false, description: `0\u301C100\u3092\u6307\u5B9A\u3057\u3066\u3001\u73FE\u5728\u518D\u751F\u4E2D\u306ESE\u306E\u30BF\u30B0\u97F3\u91CF\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002\u30BF\u30B0\u97F3\u91CF\u3068\u306F[playse]\u30BF\u30B0\u306B\u6307\u5B9A\u3055\u308C\u3066\u3044\u305F\u97F3\u91CF\u306E\u3053\u3068\u3067\u3059\u3002\u3053\u306E\u6A5F\u80FD\u306F\u305F\u3068\u3048\u3070\u3001\u3082\u3068\u3082\u3068[playse volume="50"]\u3067\u518D\u751F\u3055\u308C\u59CB\u3081\u305FSE\u306E\u97F3\u91CF\u3092\u3001[playse volume="100"]\u3067\u518D\u751F\u3055\u308C\u3066\u3044\u305F\u5834\u5408\u306E\u97F3\u91CF\u306B\u4FEE\u6B63\u3057\u305F\u3044\u3001\u3068\u3044\u3046\u30B1\u30FC\u30B9\u3067\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3057\u305F\u3060\u3051\u3067\u306F\u30B3\u30F3\u30D5\u30A3\u30B0\u97F3\u91CF\u306F\u5909\u66F4\u3055\u308C\u307E\u305B\u3093\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001effect\u304C\u5F37\u5236\u7684\u306Btrue\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[seopt volume="" buf="" effect="" time="" tag_volume="" cond=""]`
  }],
  [`set_resizecall`, {
    name: `set_resizecall`,
    description: `\u30D7\u30EC\u30A4\u7AEF\u672B\u306E\u753B\u9762\u6BD4\u7387\u304C\u5165\u308C\u66FF\u308F\u3063\u305F\u30BF\u30A4\u30DF\u30F3\u30B0\u3067\u30B7\u30CA\u30EA\u30AA\u3092\u547C\u3073\u51FA\u3059\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[set_resizecall storage="" target="" cond=""]`
  }],
  [`showload`, {
    name: `showload`,
    description: `\u30ED\u30FC\u30C9\u753B\u9762\u3092\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[showload cond=""]`
  }],
  [`showlog`, {
    name: `showlog`,
    description: `\u30D0\u30C3\u30AF\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[showlog cond=""]`
  }],
  [`showmenu`, {
    name: `showmenu`,
    description: `\u30E1\u30CB\u30E5\u30FC\u753B\u9762\u3092\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[showmenu cond=""]`
  }],
  [`showmenubutton`, {
    name: `showmenubutton`,
    description: `\u30E1\u30CB\u30E5\u30FC\u30DC\u30BF\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `keyfocus`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u3084\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\u3067\u9078\u629E\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002\u307E\u305F1\u30842\u306A\u3069\u306E\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u306Efocus_next\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u30DC\u30BF\u30F3\u3092\u9078\u629E\u3057\u3066\u3044\u304F\u3068\u304D\u306E\u9806\u5E8F\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[showmenubutton keyfocus="" cond=""]`
  }],
  [`showsave`, {
    name: `showsave`,
    description: `\u30BB\u30FC\u30D6\u753B\u9762\u3092\u8868\u793A\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[showsave cond=""]`
  }],
  [`skipstart`, {
    name: `skipstart`,
    description: `\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u30C6\u30AD\u30B9\u30C8\u304C\u4E00\u77AC\u3067\u8868\u793A\u3055\u308C\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[skipstart cond=""]`
  }],
  [`skipstop`, {
    name: `skipstop`,
    description: `\u30B9\u30AD\u30C3\u30D7\u30E2\u30FC\u30C9\u3092\u89E3\u9664\u3057\u307E\u3059\u3002[cancelskip]\u3068\u540C\u3058\u52D5\u4F5C\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[skipstop cond=""]`
  }],
  [`sleepgame`, {
    name: `sleepgame`,
    description: `\u3053\u306E\u30BF\u30B0\u306B\u5230\u9054\u3057\u305F\u6642\u70B9\u3067\u30B2\u30FC\u30E0\u306E\u72B6\u614B\u3092\u4FDD\u5B58\u3057\u305F\u4E0A\u3067\u3001\u4ED6\u306E\u30B7\u30CA\u30EA\u30AA\u306B\u30B8\u30E3\u30F3\u30D7\u3067\u304D\u307E\u3059\u3002\u30B8\u30E3\u30F3\u30D7\u5148\u3067[awakegame]\u306B\u5230\u9054\u3059\u308B\u3068\u30B2\u30FC\u30E0\u306E\u72B6\u614B\u304C[sleepgame]\u6642\u70B9\u306B\u5FA9\u5E30\u3057\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u73FE\u5728\u306E\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u3068\u307F\u306A\u3055\u308C\u307E\u3059\u3002` },
      { name: `target`, required: false, description: `\u30B8\u30E3\u30F3\u30D7\u5148\u306E\u30E9\u30D9\u30EB\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u7701\u7565\u3059\u308B\u3068\u3001\u30B7\u30CA\u30EA\u30AA\u30D5\u30A1\u30A4\u30EB\u306E\u5148\u982D\u306B\u30B8\u30E3\u30F3\u30D7\u3057\u307E\u3059\u3002` },
      { name: `next`, required: false, description: `true\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068[awakegame]\u3067\u623B\u3063\u3066\u304D\u305F\u3068\u304D\u306B\u6B21\u306E\u30BF\u30B0\u306B\u9032\u307E\u306A\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[sleepgame storage="" target="" next="" cond=""]`
  }],
  [`speak_off`, {
    name: `speak_off`,
    description: `\u30B7\u30CA\u30EA\u30AA\u306E\u8AAD\u307F\u4E0A\u3052\u3092\u30AA\u30D5\u306B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[speak_off cond=""]`
  }],
  [`speak_on`, {
    name: `speak_on`,
    description: `\u30B9\u30C8\u30FC\u30EA\u30FC\u306E\u30B7\u30CA\u30EA\u30AA\u3092\u97F3\u58F0\u3067\u8AAD\u307F\u4E0A\u3052\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `volume`, required: false, description: `\u97F3\u91CF\u30920\uFF5E100\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `pitch`, required: false, description: `\u58F0\u306E\u9AD8\u3055\u3092100\u3092\u57FA\u6E96\u3068\u3059\u308B\u6BD4\u7387\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u6570\u5024\u304C\u5927\u304D\u3044\u307B\u3069\u58F0\u304C\u9AD8\u304F\u306A\u308A\u307E\u3059\u3002` },
      { name: `rate`, required: false, description: `\u58F0\u306E\u901F\u5EA6\u3092100\u3092\u57FA\u6E96\u3068\u3059\u308B\u6BD4\u7387\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002\u6307\u5B9A\u3057\u305F\u6570\u5024\u304C\u5927\u304D\u3044\u307B\u3069\u65E9\u53E3\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `cancel`, required: false, description: `\u30C6\u30AD\u30B9\u30C8\u8AAD\u307F\u4E0A\u3052\u4E2D\u306B\u6B21\u306E\u30C6\u30AD\u30B9\u30C8\u8AAD\u307F\u4E0A\u3052\u304C\u5DEE\u3057\u8FBC\u307E\u308C\u305F\u5834\u5408\u306E\u52D5\u4F5C\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002true\u3092\u6307\u5B9A\u3059\u308B\u3068\u8AAD\u307F\u4E0A\u3052\u3092\u4E2D\u65AD\u3057\u3066\u65B0\u3057\u3044\u30C6\u30AD\u30B9\u30C8\u3092\u8AAD\u307F\u4E0A\u3052\u307E\u3059\u3002false\u3092\u6307\u5B9A\u3059\u308B\u3068\u4E2D\u65AD\u306F\u884C\u308F\u305A\u3001\u8AAD\u307F\u4E0A\u3052\u304C\u5B8C\u4E86\u6B21\u7B2C\u6B21\u306E\u30C6\u30AD\u30B9\u30C8\u3092\u8AAD\u307F\u4E0A\u3052\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[speak_on volume="" pitch="" rate="" cancel="" cond=""]`
  }],
  [`start_keyconfig`, {
    name: `start_keyconfig`,
    description: `[stop_keyconfig]\u3067\u7121\u52B9\u5316\u3057\u305F\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u3092\u6709\u52B9\u5316\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[start_keyconfig cond=""]`
  }],
  [`stop_bgcamera`, {
    name: `stop_bgcamera`,
    description: `[bgcamera]\u3092\u975E\u8868\u793A\u306B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3002\u52D5\u753B\u3092\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u3057\u3066\u524A\u9664\u3059\u308B\u3053\u3068\u304C\u53EF\u80FD\u3067\u3059\u3002` },
      { name: `wait`, required: false, description: `\u52D5\u753B\u306E\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u3092\u5F85\u3064\u304B\u3069\u3046\u304Btrue\u307E\u305F\u306Ffalse\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stop_bgcamera time="" wait="" cond=""]`
  }],
  [`stop_bgmovie`, {
    name: `stop_bgmovie`,
    description: `bgmovie\u3067\u518D\u751F\u3057\u305F\u80CC\u666F\u52D5\u753B\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30D5\u30A7\u30FC\u30C9\u30A2\u30A6\u30C8\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3092true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stop_bgmovie time="" wait="" cond=""]`
  }],
  [`stop_kanim`, {
    name: `stop_kanim`,
    description: `\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3059\u308B\u753B\u50CF\u3084\u30C6\u30AD\u30B9\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `name\u3092\u6307\u5B9A\u305B\u305A\u306Blayer\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u30EC\u30A4\u30E4\u306B\u5B58\u5728\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stop_kanim name="" layer="" cond=""]`
  }],
  [`stop_keyconfig`, {
    name: `stop_keyconfig`,
    description: `\u30AD\u30FC\u30B3\u30F3\u30D5\u30A3\u30B0\u3092\u4E00\u6642\u7684\u306B\u7121\u52B9\u5316\u3057\u307E\u3059\u3002[start_keyconfig]\u3067\u518D\u3073\u6709\u52B9\u5316\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stop_keyconfig cond=""]`
  }],
  [`stop_xanim`, {
    name: `stop_xanim`,
    description: `V515\u4EE5\u964D\u3067\u4F7F\u7528\u53EF\u80FD\u3002
[xanim]\u3067\u958B\u59CB\u3057\u305F\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3059\u308B\u753B\u50CF\u3084\u30C6\u30AD\u30B9\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `name\u3092\u6307\u5B9A\u305B\u305A\u306Blayer\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u30EC\u30A4\u30E4\u306B\u5B58\u5728\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u505C\u6B62\u3067\u304D\u307E\u3059\u3002` },
      { name: `complete`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u5F53\u521D\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3059\u308B\u306F\u305A\u3060\u3063\u305F\u5730\u70B9\u307E\u3067\u4E00\u77AC\u3067\u79FB\u52D5\u3055\u305B\u307E\u3059\u3002false\u306E\u5834\u5408\u306F\u305D\u306E\u5834\u3067\u6B62\u307E\u308A\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stop_xanim name="" layer="" complete="" cond=""]`
  }],
  [`stopanim`, {
    name: `stopanim`,
    description: `\u5B9F\u884C\u4E2D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5F37\u5236\u7684\u306B\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u5F37\u5236\u505C\u6B62\u3059\u308B\u8981\u7D20\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stopanim name="" cond=""]`
  }],
  [`stopbgm`, {
    name: `stopbgm`,
    description: `\u518D\u751F\u3057\u3066\u3044\u308BBGM\u306E\u518D\u751F\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stopbgm cond=""]`
  }],
  [`stopse`, {
    name: `stopse`,
    description: `\u52B9\u679C\u97F3\u3092\u518D\u751F\u3092\u505C\u6B62\u3057\u307E\u3059\u3002`,
    params: [
      { name: `buf`, required: false, description: `\u52B9\u679C\u97F3\u3092\u505C\u6B62\u3059\u308B\u30B9\u30ED\u30C3\u30C8\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[stopse buf="" cond=""]`
  }],
  [`sysview`, {
    name: `sysview`,
    description: `\u30B7\u30B9\u30C6\u30E0\u7CFB\u6A5F\u80FD\u3067\u4F7F\u7528\u3059\u308BHTML\u30D5\u30A1\u30A4\u30EB\u3092\u5909\u66F4\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `type`, required: true, description: `saveloadbacklogmenu\u304C\u6307\u5B9A\u53EF\u80FD\u3067\u3059\u3002` },
      { name: `storage`, required: true, description: `HTML\u30D5\u30A1\u30A4\u30EB\u306E\u30D1\u30B9\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[sysview type="" storage="" cond=""]`
  }],
  [`title`, {
    name: `title`,
    description: `\u30B2\u30FC\u30E0\u30BF\u30A4\u30C8\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u305F\u3068\u3048\u3070\u3001\u7AE0\u3054\u3068\u306B\u30BF\u30A4\u30C8\u30EB\u3092\u5909\u3048\u308B\u3068\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u308F\u304B\u308A\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `name`, required: true, description: `\u8868\u793A\u3057\u305F\u3044\u30BF\u30A4\u30C8\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[title name="" cond=""]`
  }],
  [`trace`, {
    name: `trace`,
    description: `exp\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u6307\u5B9A\u3055\u308C\u305F\u5F0F\u3092\u8A55\u4FA1\u3057\u3001\u7D50\u679C\u3092\u30B3\u30F3\u30BD\u30FC\u30EB\u306B\u51FA\u529B\u3057\u307E\u3059\u3002`,
    params: [
      { name: `exp`, required: false, description: `\u8A55\u4FA1\u3059\u308BJS\u5F0F\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[trace exp="" cond=""]`
  }],
  [`trans`, {
    name: `trans`,
    description: `\u6307\u5B9A\u3057\u305F\u30EC\u30A4\u30E4\u3067\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u3092\u884C\u3044\u307E\u3059\u3002`,
    params: [
      { name: `layer`, required: true, description: `\u5BFE\u8C61\u3068\u306A\u308B\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002base\u3092\u6307\u5B9A\u3059\u308B\u3068\u80CC\u666F\u30EC\u30A4\u30E4\u30010\u4EE5\u4E0A\u306E\u6574\u6570\u3092\u6307\u5B9A\u3059\u308B\u3068\u524D\u666F\u30EC\u30A4\u30E4\u3001message0\u3084message1\u3092\u6307\u5B9A\u3059\u308B\u3068\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002message\u3068\u306E\u307F\u6307\u5B9A\u3057\u305F\u5834\u5408\u306F\u3001[current]\u30BF\u30B0\u3067\u6307\u5B9A\u3057\u305F\u73FE\u5728\u306E\u64CD\u4F5C\u5BFE\u8C61\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u30EC\u30A4\u30E4\u304C\u5BFE\u8C61\u306B\u306A\u308A\u307E\u3059\u3002\uFF08\u901A\u5E38\u306F\u80CC\u666F\u306E\u5909\u66F4\u306A\u3069\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\uFF09` },
      { name: `time`, required: true, description: `\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `method`, required: false, description: `\u5207\u308A\u66FF\u3048\u306E\u30BF\u30A4\u30D7\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306FfadeIn\u3067\u3059\u3002\u6307\u5B9A\u3067\u304D\u308B\u6F14\u51FA\u306F\u6B21\u306E\u901A\u308A\u3067\u3059\u3002 \u3010V450\u4EE5\u964D\u3011fadeInfadeInDownfadeInLeftfadeInRightfadeInUplightSpeedInrotateInrotateInDownLeftrotateInDownRightrotateInUpLeftrotateInUpRightzoomInzoomInDownzoomInLeftzoomInRightzoomInUpslideInDownslideInLeftslideInRightslideInUpbounceIn bounceInDownbounceInLeftbounceInRightbounceInUprollInvanishInpuffIn \u3010V450\u4EE5\u524D\u3011crossfadeexplodeslideblindbounceclipdropfoldpuffscaleshakesize` },
      { name: `children`, required: false, description: `\u3010\u5EC3\u6B62\u3011false\u306E\u5834\u5408\u3001layer\u3067\u6307\u5B9A\u3057\u305F\u5834\u6240\u3060\u3051\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u3057\u307E\u3059\u3002\u30C7\u30D5\u30A9\u30EB\u30C8\u306Ffalse\u3067\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[trans layer="" time="" method="" children="" cond=""]`
  }],
  [`unload`, {
    name: `unload`,
    description: `[preload]\u30BF\u30B0\u306Bsingle_use="false"\u3092\u6307\u5B9A\u3057\u305F\u3046\u3048\u3067\u591A\u6570\u306E\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3092\u30D7\u30EA\u30ED\u30FC\u30C9\u3057\u3066\u3044\u308B\u3068\u3001\u97F3\u58F0\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u304C\u30E1\u30E2\u30EA\u3092\u5727\u8FEB\u3057\u3066\u52D5\u4F5C\u306B\u60AA\u5F71\u97FF\u3092\u53CA\u307C\u3059\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: false, description: `\u7834\u68C4\u3059\u308B\u97F3\u58F0\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u306E\u5834\u6240\u3002[preload]\u306B\u6307\u5B9A\u3057\u3066\u3044\u305F\u3082\u306E\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `[preload]\u306B\u6307\u5B9A\u3057\u305Fname\u3092\u4F7F\u3063\u3066\u5BFE\u8C61\u3092\u307E\u3068\u3081\u3066\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002` },
      { name: `all_sound`, required: false, description: `true\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u97F3\u58F0\u30D7\u30EA\u30ED\u30FC\u30C9\u30C7\u30FC\u30BF\u3092\u7834\u68C4\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[unload storage="" name="" all_sound="" cond=""]`
  }],
  [`vibrate`, {
    name: `vibrate`,
    description: `\u30D7\u30EC\u30A4\u30E4\u30FC\u304C\u4F7F\u7528\u3057\u3066\u3044\u308B\u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u3084\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\u3092\u632F\u52D5\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: false, description: `\u632F\u52D5\u3055\u305B\u308B\u6642\u9593(\u30DF\u30EA\u79D2)\u3002600,200,1000,200,600\u306E\u3088\u3046\u306B\u30AB\u30F3\u30DE\u533A\u5207\u308A\u3067\u8907\u6570\u306E\u6570\u5024\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001600\u30DF\u30EA\u79D2\u632F\u52D5\u2192200\u30DF\u30EA\u79D2\u9759\u6B62\u21921000\u30DF\u30EA\u79D2\u9759\u6B62\u2192\u2026\u3068\u3044\u3046\u30D1\u30BF\u30FC\u30F3\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `power`, required: false, description: `\u632F\u52D5\u3055\u305B\u308B\u5F37\u3055(0\uFF5E100)\u3002\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\u3092\u632F\u52D5\u3055\u305B\u308B\u3068\u304D\u306E\u307F\u6709\u52B9\u306A\u30D1\u30E9\u30E1\u30FC\u30BF\u3067\u3059\u3002` },
      { name: `count`, required: false, description: `\u632F\u52D5\u3092\u7E70\u308A\u8FD4\u3059\u56DE\u6570\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[vibrate time="" power="" count="" cond=""]`
  }],
  [`vibrate_stop`, {
    name: `vibrate_stop`,
    description: `[vibrate]\u3067\u958B\u59CB\u3057\u305F\u30E2\u30D0\u30A4\u30EB\u7AEF\u672B\u3084\u30B2\u30FC\u30E0\u30D1\u30C3\u30C9\u306E\u632F\u52D5\u3092\u9014\u4E2D\u3067\u505C\u6B62\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[vibrate_stop cond=""]`
  }],
  [`voconfig`, {
    name: `voconfig`,
    description: `\u30DC\u30A4\u30B9\u3092\u52B9\u7387\u7684\u306B\u518D\u751F\u3059\u308B\u305F\u3081\u306E\u8A2D\u5B9A\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `sebuf`, required: false, description: `\u30DC\u30A4\u30B9\u3067\u4F7F\u7528\u3059\u308B[playse]\u306Ebuf\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `name`, required: false, description: `\u30DC\u30A4\u30B9\u3092\u518D\u751F\u3059\u308B\u30AD\u30E3\u30E9\u30AF\u30BF\u30FC\u540D\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002[chara_new]\u30BF\u30B0\u306Ename\u3002` },
      { name: `vostorage`, required: false, description: `\u97F3\u58F0\u30D5\u30A1\u30A4\u30EB\u3068\u3057\u3066\u4F7F\u7528\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u540D\u306E\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002{number}\u306E\u90E8\u5206\u306B\u306F\u3001\u518D\u751F\u3055\u308C\u308B\u3053\u3068\u306B+1\u3055\u308C\u305F\u6570\u5024\u304C\u5165\u3063\u3066\u3044\u304D\u307E\u3059\u3002` },
      { name: `number`, required: false, description: `vostorage\u306E{number}\u306B\u5F53\u3066\u306F\u3081\u308B\u6570\u5024\u306E\u521D\u671F\u5024\u3002` },
      { name: `waittime`, required: false, description: `\u30AA\u30FC\u30C8\u30E2\u30FC\u30C9\u306B\u304A\u3044\u3066\u3001\u30DC\u30A4\u30B9\u3092\u518D\u751F\u3057\u7D42\u308F\u3063\u3066\u304B\u3089\u6B21\u306E\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u9032\u3080\u307E\u3067\u306B\u4F55\u30DF\u30EA\u79D2\u5F85\u3064\u304B\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[voconfig sebuf="" name="" vostorage="" number="" waittime="" cond=""]`
  }],
  [`vostart`, {
    name: `vostart`,
    description: `[voconfig]\u3067\u6307\u5B9A\u3057\u305F\u30DC\u30A4\u30B9\u306E\u81EA\u52D5\u518D\u751F\u3092\u958B\u59CB\u3057\u307E\u3059\u3002
\u3053\u308C\u4EE5\u964D\u3001#\u3067\u540D\u524D\u3092\u6307\u5B9A\u3057\u305F\u3068\u304D\u306B\u7D10\u4ED8\u3044\u305F\u30DC\u30A4\u30B9\u304C\u518D\u751F\u3055\u308C\u3066\u3044\u304D\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[vostart cond=""]`
  }],
  [`vostop`, {
    name: `vostop`,
    description: `[voconfig]\u3067\u6307\u5B9A\u3057\u305F\u30DC\u30A4\u30B9\u306E\u81EA\u52D5\u518D\u751F\u3092\u505C\u6B62\u3057\u307E\u3059\u3002
\u3053\u308C\u4EE5\u964D\u3001#\u3067\u540D\u524D\u3092\u6307\u5B9A\u3057\u3066\u3082\u30DC\u30A4\u30B9\u306F\u518D\u751F\u3055\u308C\u307E\u305B\u3093\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[vostop cond=""]`
  }],
  [`wa`, {
    name: `wa`,
    description: `\u5B9F\u884C\u4E2D\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3059\u3079\u3066\u7D42\u4E86\u3059\u308B\u307E\u3067\u51E6\u7406\u3092\u5F85\u3061\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wa cond=""]`
  }],
  [`wait`, {
    name: `wait`,
    description: `\u30A6\u30A7\u30A4\u30C8\u3092\u5165\u308C\u307E\u3059\u3002time\u5C5E\u6027\u3067\u6307\u5B9A\u3057\u305F\u6642\u9593\u3001\u64CD\u4F5C\u3067\u304D\u306A\u304F\u306A\u308A\u307E\u3059\u3002`,
    params: [
      { name: `time`, required: true, description: `\u30A6\u30A7\u30A4\u30C8\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wait time="" cond=""]`
  }],
  [`wait_bgmovie`, {
    name: `wait_bgmovie`,
    description: `\u518D\u751F\u4E2D\u306E\u80CC\u666F\u30E0\u30FC\u30D3\u30FC\u306E\u5B8C\u4E86\u3092\u5F85\u3061\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wait_bgmovie cond=""]`
  }],
  [`wait_camera`, {
    name: `wait_camera`,
    description: `\u30AB\u30E1\u30E9\u304C\u6F14\u51FA\u4E2D\u3067\u3042\u308B\u5834\u5408\u3001\u305D\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002wait=false\u3092\u6307\u5B9A\u3057\u305F[camera]\u30BF\u30B0\u3068\u7D44\u307F\u5408\u308F\u305B\u3066\u4F7F\u3044\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wait_camera cond=""]`
  }],
  [`wait_cancel`, {
    name: `wait_cancel`,
    description: `[wait]\u30BF\u30B0\u306B\u3088\u308B\u30A6\u30A7\u30A4\u30C8\u72B6\u614B\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wait_cancel cond=""]`
  }],
  [`wait_preload`, {
    name: `wait_preload`,
    description: `[preload]\u30BF\u30B0\u3092wait=false\u3067\u5229\u7528\u3057\u305F\u5F8C\u3001\u4F55\u304B\u306E\u6F14\u51FA\u3092\u631F\u3093\u3060\u5F8C\u3001\u5168\u3066\u306Epreload\u304C\u7D42\u308F\u308B\u306E\u3092\u5F85\u6A5F\u3057\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wait_preload cond=""]`
  }],
  [`wbgm`, {
    name: `wbgm`,
    description: `BGM\u306E\u518D\u751F\u5B8C\u4E86\u3092\u5F85\u3061\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wbgm cond=""]`
  }],
  [`web`, {
    name: `web`,
    description: `\u6307\u5B9A\u3057\u305FWeb\u30B5\u30A4\u30C8\u3092\u30D6\u30E9\u30A6\u30B6\u3067\u958B\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `url`, required: true, description: `\u958B\u304D\u305F\u3044Web\u30B5\u30A4\u30C8\u306EURL\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002\u30B2\u30FC\u30E0\u5185\u306E\u753B\u50CF\u30D5\u30A1\u30A4\u30EB\u306A\u3069\u3092\u958B\u304D\u305F\u3044\u5834\u5408\u3001\u30D5\u30A1\u30A4\u30EB\u306E\u5834\u6240\u3092data\u304B\u3089\u521D\u3081\u3066\u8A18\u8FF0\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[web url="" cond=""]`
  }],
  [`wse`, {
    name: `wse`,
    description: `\u52B9\u679C\u97F3\u306E\u518D\u751F\u5B8C\u4E86\u3092\u5F85\u3061\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wse cond=""]`
  }],
  [`wt`, {
    name: `wt`,
    description: `\u30C8\u30E9\u30F3\u30B8\u30B7\u30E7\u30F3\u304C\u7D42\u4E86\u3059\u308B\u307E\u3067\u3001\u5F85\u3061\u307E\u3059\u3002`,
    params: [
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[wt cond=""]`
  }],
  [`xanim`, {
    name: `xanim`,
    description: `V515\u4EE5\u964D\u3067\u4F7F\u7528\u53EF\u80FD\u3002`,
    params: [
      { name: `name`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u753B\u50CF\u3084\u30C6\u30AD\u30B9\u30C8\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `layer`, required: false, description: `name\u3092\u6307\u5B9A\u305B\u305A\u306Blayer\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u3001\u305D\u306E\u30EC\u30A4\u30E4\u306B\u5B58\u5728\u3059\u308B\u3059\u3079\u3066\u306E\u8981\u7D20\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `keyframe`, required: false, description: `\u9069\u7528\u3059\u308B\u30AD\u30FC\u30D5\u30EC\u30FC\u30E0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306Ename\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `easing`, required: false, description: `[anim]\u30BF\u30B0\u306B\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u3068[kanim]\u306B\u6307\u5B9A\u3067\u304D\u308B\u30AD\u30FC\u30EF\u30FC\u30C9\u304C\u3059\u3079\u3066\u4F7F\u7528\u53EF\u80FD\u3067\u3059\u3002` },
      { name: `count`, required: false, description: `\u518D\u751F\u56DE\u6570\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002infinite\u3092\u6307\u5B9A\u3059\u308B\u3053\u3068\u3067\u7121\u9650\u30EB\u30FC\u30D7\u3055\u305B\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002` },
      { name: `delay`, required: false, description: `\u958B\u59CB\u307E\u3067\u306E\u6642\u9593\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002\u521D\u671F\u5024\u306F0\u3001\u3064\u307E\u308A\u9045\u5EF6\u306A\u3057\u3067\u3059\u3002` },
      { name: `direction`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8907\u6570\u56DE\u30EB\u30FC\u30D7\u3055\u305B\u308B\u5834\u5408\u306B\u3001\u5076\u6570\u56DE\u76EE\u306E\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u9006\u518D\u751F\u306B\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002\u5076\u6570\u56DE\u76EE\u3092\u9006\u518D\u751F\u306B\u3059\u308B\u5834\u5408\u306Falternate\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `mode`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u6700\u5F8C\u306E\u30D5\u30EC\u30FC\u30E0\u306E\u72B6\u614B\uFF08\u4F4D\u7F6E\u3001\u56DE\u8EE2\u306A\u3069\uFF09\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u7D42\u4E86\u5F8C\u3082\u7DAD\u6301\u3059\u308B\u304B\u3092\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002forwards(\u30C7\u30D5\u30A9\u30EB\u30C8)\u3067\u7DAD\u6301\u3002none\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u518D\u751F\u524D\u306E\u72B6\u614B\u306B\u623B\u308A\u307E\u3059\u3002` },
      { name: `svg`, required: false, description: `svg\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3067\u304D\u307E\u3059\u3002svg\u30D5\u30A1\u30A4\u30EB\u306Fimage\u30D5\u30A9\u30EB\u30C0\u306B\u914D\u7F6E\u3057\u307E\u3059\u3002\u3053\u308C\u3092\u6307\u5B9A\u3059\u308B\u3068\u3001svg\u30D5\u30A1\u30A4\u30EB\u5185\u3067\u5B9A\u7FA9\u3055\u308C\u305F\u306B\u6CBF\u3063\u3066\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3055\u305B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `svg_x`, required: false, description: `svg\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u305F\u3068\u304D\u3001X\u5EA7\u6A19\u3092\u306B\u6CBF\u308F\u305B\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `svg_y`, required: false, description: `svg\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u305F\u3068\u304D\u3001Y\u5EA7\u6A19\u3092\u306B\u6CBF\u308F\u305B\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `svg_rotate`, required: false, description: `svg\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u305F\u3068\u304D\u3001\u89D2\u5EA6\u3092\u306B\u6CBF\u308F\u305B\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `wait`, required: false, description: `\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u306E\u5B8C\u4E86\u3092\u5F85\u3064\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002 \u4ED6: \u3053\u306E\u4ED6\u3001[anim]\u30BF\u30B0\u306B\u6307\u5B9A\u3067\u304D\u308B\u30D1\u30E9\u30E1\u30FC\u30BF\u3084\u3001\u5404\u7A2ECSS\u30D7\u30ED\u30D1\u30C6\u30A3\u3092\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u5BFE\u8C61\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[xanim name="" layer="" keyframe="" time="" easing="" count="" delay="" direction="" mode="" svg="" svg_x="" svg_y="" svg_rotate="" wait="" \u4ED6="" cond=""]`
  }],
  [`xchgbgm`, {
    name: `xchgbgm`,
    description: `\u3010\u975E\u63A8\u5968\u3011BGM\u3092\u5165\u308C\u66FF\u3048\u307E\u3059\u3002\u97F3\u697D\u304C\u4EA4\u5DEE\u3057\u3066\u5207\u308A\u66FF\u308F\u308B\u6F14\u51FA\u306B\u4F7F\u7528\u3067\u304D\u307E\u3059\u3002`,
    params: [
      { name: `storage`, required: true, description: `\u6B21\u306B\u518D\u751F\u3059\u308B\u30D5\u30A1\u30A4\u30EB\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `loop`, required: false, description: `\u30EB\u30FC\u30D7\u3059\u308B\u304B\u3069\u3046\u304B\u3002true\u307E\u305F\u306Ffalse\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `time`, required: false, description: `\u30AF\u30ED\u30B9\u30D5\u30A7\u30FC\u30C9\u3092\u884C\u306A\u3063\u3066\u3044\u308B\u6642\u9593\u3092\u30DF\u30EA\u79D2\u3067\u6307\u5B9A\u3057\u307E\u3059\u3002` },
      { name: `cond`, required: false, description: `JS\u5F0F\u3092\u8A18\u8FF0\u3057\u3066\u3001\u305D\u306E\u7D50\u679C\u304C\u771F\u306E\u5834\u5408\u306E\u307F\u30BF\u30B0\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002` }
    ],
    body: `[xchgbgm storage="" loop="" time="" cond=""]`
  }]
]);
var TAG_NAMES = Array.from(TAG_DATABASE.keys());

// src/workspaceScanner.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var TAG_STORAGE_MAPPING = /* @__PURE__ */ new Map([
  ["bg", "bgimage"],
  ["bg2", "bgimage"],
  ["chara_new", "fgimage"],
  ["chara_face", "fgimage"],
  ["chara_mod", "fgimage"],
  ["chara_show", "fgimage"],
  ["chara_layer", "fgimage"],
  ["image", "fgimage"],
  // [image]タグはdata/fgimage/を参照する
  ["cursor", "image"],
  ["graph", "image"],
  ["mask", "image"],
  ["playbgm", "bgm"],
  ["fadeinbgm", "bgm"],
  ["xchgbgm", "bgm"],
  ["playse", "sound"],
  ["fadeinse", "sound"],
  ["movie", "video"],
  ["bgmovie", "video"],
  ["layer_video", "video"],
  ["jump", "scenario"],
  ["call", "scenario"],
  ["link", "scenario"],
  ["glink", "scenario"],
  ["clickable", "scenario"],
  ["button", "scenario"]
]);
var CACHE_TTL = 3e4;
var WorkspaceScanner = class {
  constructor() {
    this.rootPath = "";
    this.dataPath = "";
    this.initialized = false;
    // アセットファイルキャッシュ（カテゴリ別）
    this.assetCache = /* @__PURE__ */ new Map();
    // KSファイルインデックス（ファイルパスをキーに）
    this.ksFileIndices = /* @__PURE__ */ new Map();
  }
  /**
   * ワークスペースルートを設定しdataディレクトリの存在を確認する
   */
  initialize(rootUri) {
    try {
      const url = new URL(rootUri);
      this.rootPath = decodeURIComponent(url.pathname);
      this.dataPath = path.join(this.rootPath, "data");
      if (fs.existsSync(this.dataPath)) {
        this.initialized = true;
        return true;
      }
    } catch {
    }
    this.initialized = false;
    return false;
  }
  /**
   * アセットスキャンとKSファイルスキャンを並行実行する
   */
  async scanAll() {
    if (!this.initialized) return;
    await Promise.all([this.scanAssets(), this.scanKsFiles()]);
  }
  /**
   * 全アセットカテゴリのディレクトリを走査する
   */
  async scanAssets() {
    const categories = [
      "bgimage",
      "fgimage",
      "image",
      "bgm",
      "sound",
      "video",
      "scenario",
      "others"
    ];
    for (const category of categories) {
      this.scanAssetCategory(category);
    }
  }
  /**
   * 指定カテゴリのアセットディレクトリを走査しキャッシュに格納する
   */
  scanAssetCategory(category) {
    const dirPath = path.join(this.dataPath, category);
    try {
      if (!fs.existsSync(dirPath)) {
        this.assetCache.set(category, { files: [], timestamp: Date.now() });
        return;
      }
      const files = this.readDirRecursive(dirPath, dirPath);
      this.assetCache.set(category, { files, timestamp: Date.now() });
    } catch {
      this.assetCache.set(category, { files: [], timestamp: Date.now() });
    }
  }
  /**
   * ディレクトリを再帰的に走査しファイルの相対パスリストを返す
   */
  readDirRecursive(dirPath, basePath) {
    const results = [];
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          results.push(...this.readDirRecursive(fullPath, basePath));
        } else {
          results.push(path.relative(basePath, fullPath));
        }
      }
    } catch {
    }
    return results;
  }
  /**
   * data/scenario/ 配下の .ks ファイルを全件読み込み、ラベルとマクロを抽出する
   */
  async scanKsFiles() {
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return;
    const ksFiles = this.findKsFiles(scenarioPath);
    this.ksFileIndices.clear();
    for (const filePath of ksFiles) {
      try {
        const content = fs.readFileSync(filePath, "utf-8");
        const relativePath = path.relative(this.dataPath, filePath);
        this.indexKsContent(relativePath, content);
      } catch {
      }
    }
  }
  /**
   * 指定ディレクトリ配下の .ks ファイルを再帰的に検索する
   */
  findKsFiles(dirPath) {
    const results = [];
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
          results.push(...this.findKsFiles(fullPath));
        } else if (entry.name.endsWith(".ks")) {
          results.push(fullPath);
        }
      }
    } catch {
    }
    return results;
  }
  /**
   * KSファイルの内容からラベルとマクロを正規表現で抽出しインデックスに格納する
   */
  indexKsContent(relativePath, content) {
    const labels = [];
    const macros = [];
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const labelMatch = line.match(/^\*(\w+)/);
      if (labelMatch) {
        labels.push({
          name: labelMatch[1],
          file: relativePath,
          line: i
        });
      }
      const macroMatch = line.match(/\[macro\s+name\s*=\s*"(\w+)"\s*\]/i);
      if (macroMatch) {
        const commentLines = [];
        for (let j = i - 1; j >= 0; j--) {
          const commentMatch = lines[j].match(/^;\s?(.*)/);
          if (commentMatch) {
            commentLines.unshift(commentMatch[1]);
          } else {
            break;
          }
        }
        macros.push({
          name: macroMatch[1],
          file: relativePath,
          line: i,
          description: commentLines.join("\n")
        });
      }
    }
    this.ksFileIndices.set(relativePath, { labels, macros });
  }
  /**
   * 単一ファイルのインクリメンタル更新（編集中ファイルのインデックスを差し替え）
   */
  updateFile(uri, content) {
    if (!this.initialized) return;
    try {
      const url = new URL(uri);
      const filePath = decodeURIComponent(url.pathname);
      const relativePath = path.relative(this.dataPath, filePath);
      if (relativePath.startsWith("scenario") && filePath.endsWith(".ks")) {
        this.indexKsContent(relativePath, content);
      }
    } catch {
    }
  }
  /**
   * 指定ファイルに動的ターゲット参照（target=&var / target=%var）が含まれるか判定する
   * 含まれる場合、そのファイルのラベルは動的に参照される可能性があるため未使用警告をスキップする
   */
  hasDynamicTargetReference(fileUri) {
    if (!this.initialized) return false;
    try {
      const url = new URL(fileUri);
      const filePath = decodeURIComponent(url.pathname);
      const content = fs.readFileSync(filePath, "utf-8");
      return content.split("\n").some((line) => {
        if (line.trimStart().startsWith(";")) return false;
        return /target\s*=\s*[&%]/.test(line);
      });
    } catch {
      return false;
    }
  }
  /**
   * ワークスペース内の全 .ks ファイルを {uri, content} のリストで返す
   * スキャン未完了時は空配列を返す
   */
  getAllKsFiles() {
    if (!this.initialized) return [];
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return [];
    const results = [];
    const ksFiles = this.findKsFiles(scenarioPath);
    for (const filePath of ksFiles) {
      try {
        const content = fs.readFileSync(filePath, "utf-8");
        const relativePath = path.relative(this.dataPath, filePath);
        results.push({ uri: this.resolveFilePath(relativePath), content });
      } catch {
      }
    }
    return results;
  }
  /**
   * カテゴリディレクトリを基準にしたファイルパスを解決し、実在するか確認する
   * キャッシュ外のパス（../を含む相対パスなど）に対して直接 fs.existsSync で確認する
   */
  assetFileExists(category, value) {
    if (!this.initialized) return true;
    const categoryDir = path.join(this.dataPath, category);
    const resolved = path.resolve(categoryDir, value);
    return fs.existsSync(resolved);
  }
  /**
   * 指定カテゴリのアセットファイル一覧を返す
   * キャッシュTTL超過時は自動再スキャンする
   */
  getAssetsForCategory(category) {
    if (!this.initialized) return [];
    const cached = this.assetCache.get(category);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.files;
    }
    this.scanAssetCategory(category);
    return this.assetCache.get(category)?.files ?? [];
  }
  /**
   * 全ラベル定義を返す
   */
  getLabels() {
    const labels = [];
    for (const index of this.ksFileIndices.values()) {
      labels.push(...index.labels);
    }
    return labels;
  }
  /**
   * 全マクロ定義を返す
   */
  getMacros() {
    const macros = [];
    for (const index of this.ksFileIndices.values()) {
      macros.push(...index.macros);
    }
    return macros;
  }
  /**
   * シナリオファイル一覧を返す（.ks拡張子）
   */
  getScenarioFiles() {
    return this.getAssetsForCategory("scenario");
  }
  /**
   * 初期化済みかどうかを返す
   */
  isInitialized() {
    return this.initialized;
  }
  /**
   * 全 .ks ファイルからラベル参照箇所を検索する
   * 以下の記法をすべてカバーする:
   *   target="*labelName"  ← クォートあり・アスタリスクあり
   *   target=*labelName    ← クォートなし・アスタリスクあり
   *   target="labelName"   ← クォートあり・アスタリスクなし
   *   target=labelName     ← クォートなし・アスタリスクなし
   */
  findLabelReferences(labelName) {
    if (!this.initialized) return [];
    const results = [];
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return results;
    const ksFiles = this.findKsFiles(scenarioPath);
    const escaped = this.escapeRegExp(labelName);
    const regex = new RegExp(
      `target\\s*=\\s*["']?\\*?(${escaped})(?=["'\\s\\]\\r\\n]|$)`,
      "g"
    );
    for (const filePath of ksFiles) {
      try {
        const content = fs.readFileSync(filePath, "utf-8");
        const lines = content.split("\n");
        const relativePath = path.relative(this.dataPath, filePath);
        for (let i = 0; i < lines.length; i++) {
          let match;
          regex.lastIndex = 0;
          while ((match = regex.exec(lines[i])) !== null) {
            const nameStart = match.index + match[0].length - match[1].length;
            const hasStar = lines[i][nameStart - 1] === "*";
            const startChar = hasStar ? nameStart - 1 : nameStart;
            results.push({
              file: relativePath,
              line: i,
              startChar,
              endChar: startChar + labelName.length + (hasStar ? 1 : 0)
            });
          }
        }
      } catch {
      }
    }
    return results;
  }
  /**
   * 全 .ks ファイルからマクロの使用箇所を検索する
   * [macroName ...] または @macroName 形式にマッチし、定義行 [macro name="..."] は除外する
   */
  findMacroReferences(macroName) {
    if (!this.initialized) return [];
    const results = [];
    const scenarioPath = path.join(this.dataPath, "scenario");
    if (!fs.existsSync(scenarioPath)) return results;
    const ksFiles = this.findKsFiles(scenarioPath);
    const bracketRegex = new RegExp(
      `\\[${this.escapeRegExp(macroName)}(?=[\\s\\]]|$)`,
      "g"
    );
    const atRegex = new RegExp(
      `^@${this.escapeRegExp(macroName)}(?=[\\s]|$)`,
      "g"
    );
    const defRegex = new RegExp(
      `\\[macro\\s+name\\s*=\\s*"${this.escapeRegExp(macroName)}"\\s*\\]`,
      "i"
    );
    for (const filePath of ksFiles) {
      try {
        const content = fs.readFileSync(filePath, "utf-8");
        const lines = content.split("\n");
        const relativePath = path.relative(this.dataPath, filePath);
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (defRegex.test(line)) continue;
          bracketRegex.lastIndex = 0;
          let match;
          while ((match = bracketRegex.exec(line)) !== null) {
            const start = match.index + 1;
            results.push({
              file: relativePath,
              line: i,
              startChar: start,
              endChar: start + macroName.length
            });
          }
          atRegex.lastIndex = 0;
          while ((match = atRegex.exec(line)) !== null) {
            const start = match.index + 1;
            results.push({
              file: relativePath,
              line: i,
              startChar: start,
              endChar: start + macroName.length
            });
          }
        }
      } catch {
      }
    }
    return results;
  }
  /**
   * data/ からの相対パスを file:// URI に変換する
   */
  resolveFilePath(relativePath) {
    const absPath = path.join(this.dataPath, relativePath);
    return `file://${encodeURI(absPath)}`;
  }
  /**
   * 正規表現の特殊文字をエスケープする
   */
  escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
};

// src/server.ts
var PARAM_FILE_MAPPING = [
  ["graphic", "image"],
  ["enterimg", "image"],
  ["leaveimg", "image"],
  ["clickimg", "image"]
];
var connection = (0, import_node.createConnection)(import_node.ProposedFeatures.all);
var documents = new import_node.TextDocuments(TextDocument);
var scanner = new WorkspaceScanner();
connection.onInitialize((params) => {
  const rootUri = params.rootUri ?? params.workspaceFolders?.[0]?.uri;
  if (rootUri && scanner.initialize(rootUri)) {
    scanner.scanAll().then(() => validateAllKsFiles()).catch(() => {
    });
  }
  return {
    capabilities: {
      textDocumentSync: import_node.TextDocumentSyncKind.Incremental,
      completionProvider: {
        // "[", "@", スペース, '"' で補完をトリガー
        triggerCharacters: ["[", "@", " ", '"'],
        resolveProvider: false
      },
      hoverProvider: true,
      definitionProvider: true,
      referencesProvider: true
    }
  };
});
function getTagContext(lineText, character) {
  const textUpToCursor = lineText.substring(0, character);
  const bracketMatch = textUpToCursor.match(/\[(\w+)((\s+.*)?)$/);
  if (bracketMatch) {
    const tagName = bracketMatch[1];
    const afterTag = bracketMatch[2];
    const isInParams = afterTag.length > 0;
    const usedParams = extractUsedParams(afterTag);
    return { tagName, isInParams, usedParams };
  }
  const atMatch = textUpToCursor.match(/^@(\w+)((\s+.*)?)$/);
  if (atMatch) {
    const tagName = atMatch[1];
    const afterTag = atMatch[2];
    const isInParams = afterTag.length > 0;
    const usedParams = extractUsedParams(afterTag);
    return { tagName, isInParams, usedParams };
  }
  return null;
}
function extractUsedParams(text) {
  const params = [];
  const regex = /(\w+)\s*=/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    params.push(match[1]);
  }
  return params;
}
function isTagNameTrigger(lineText, character) {
  const textUpToCursor = lineText.substring(0, character);
  if (/\[\w*$/.test(textUpToCursor)) {
    return "bracket";
  }
  if (/^@\w*$/.test(textUpToCursor)) {
    return "at";
  }
  return null;
}
function getParamValueContext(lineText, character) {
  const tagCtx = getTagContext(lineText, character);
  if (!tagCtx) return null;
  const textUpToCursor = lineText.substring(0, character);
  const valueMatch = textUpToCursor.match(/(\w+)\s*=\s*"([^"]*)$/);
  if (!valueMatch) return null;
  return {
    tagName: tagCtx.tagName,
    paramName: valueMatch[1],
    currentValue: valueMatch[2]
  };
}
function createTagCompletions(trigger) {
  return TAG_NAMES.map((name, index) => {
    const tag = TAG_DATABASE.get(name);
    const requiredParams = tag.params.filter((p) => p.required);
    let insertText;
    let insertTextFormat;
    if (requiredParams.length > 0) {
      const paramSnippets = requiredParams.map((p, i) => `${p.name}="\${${i + 1}}"`).join(" ");
      if (trigger === "bracket") {
        insertText = `${name} ${paramSnippets}]`;
      } else {
        insertText = `${name} ${paramSnippets}`;
      }
      insertTextFormat = import_node.InsertTextFormat.Snippet;
    } else {
      if (trigger === "bracket") {
        insertText = `${name}]`;
      } else {
        insertText = name;
      }
      insertTextFormat = import_node.InsertTextFormat.PlainText;
    }
    return {
      label: name,
      kind: import_node.CompletionItemKind.Function,
      detail: tag.description.split("\n")[0],
      documentation: {
        kind: import_node.MarkupKind.Markdown,
        value: createTagDocumentation(tag)
      },
      insertText,
      insertTextFormat,
      sortText: String(index).padStart(4, "0")
    };
  });
}
function createParamCompletions(tagName, usedParams) {
  const tag = TAG_DATABASE.get(tagName);
  if (!tag) return [];
  const availableParams = tag.params.filter(
    (p) => !usedParams.includes(p.name)
  );
  return availableParams.map((param, index) => {
    const requiredLabel = param.required ? " (\u5FC5\u9808)" : "";
    return {
      label: param.name,
      kind: import_node.CompletionItemKind.Property,
      detail: `${param.name}${requiredLabel}`,
      documentation: {
        kind: import_node.MarkupKind.Markdown,
        value: param.description
      },
      // スニペット: param="" の形式で挿入
      insertText: `${param.name}="\${1}"`,
      insertTextFormat: import_node.InsertTextFormat.Snippet,
      // 必須パラメータを優先的に表示
      sortText: (param.required ? "0" : "1") + String(index).padStart(4, "0")
    };
  });
}
function createTagDocumentation(tag) {
  let doc = `**[${tag.name}]**

`;
  doc += `${tag.description}

`;
  if (tag.params.length > 0) {
    doc += "**\u30D1\u30E9\u30E1\u30FC\u30BF:**\n\n";
    for (const param of tag.params) {
      const requiredMark = param.required ? " `\u5FC5\u9808`" : "";
      doc += `- **${param.name}**${requiredMark}: ${param.description}
`;
    }
  }
  return doc;
}
function createMacroCompletions(trigger) {
  const macros = scanner.getMacros();
  return macros.map((macro, index) => {
    const insertText = trigger === "bracket" ? `${macro.name}]` : macro.name;
    return {
      label: macro.name,
      kind: import_node.CompletionItemKind.Function,
      detail: macro.description ? macro.description.split("\n")[0] : `\u30DE\u30AF\u30ED (${macro.file})`,
      documentation: {
        kind: import_node.MarkupKind.Markdown,
        value: `**[${macro.name}]** \u2014 \u30E6\u30FC\u30B6\u30FC\u5B9A\u7FA9\u30DE\u30AF\u30ED

${macro.description ? macro.description + "\n\n" : ""}\u5B9A\u7FA9\u5143: \`${macro.file}\` (\u884C ${macro.line + 1})`
      },
      insertText,
      insertTextFormat: import_node.InsertTextFormat.PlainText,
      // タグ補完の後に表示（5000番台）
      sortText: String(5e3 + index).padStart(6, "0")
    };
  });
}
function createStorageCompletions(tagName) {
  const category = TAG_STORAGE_MAPPING.get(tagName);
  if (!category) return [];
  const files = scanner.getAssetsForCategory(category);
  return files.map((file, index) => ({
    label: file,
    kind: import_node.CompletionItemKind.File,
    detail: `${category}/`,
    sortText: String(index).padStart(4, "0")
  }));
}
function createTargetCompletions() {
  const labels = scanner.getLabels();
  return labels.map((label, index) => ({
    label: `*${label.name}`,
    kind: import_node.CompletionItemKind.Reference,
    detail: label.file,
    documentation: {
      kind: import_node.MarkupKind.Markdown,
      value: `\u30E9\u30D9\u30EB ***${label.name}**

\u5B9A\u7FA9\u5143: \`${label.file}\` (\u884C ${label.line + 1})`
    },
    sortText: String(index).padStart(4, "0")
  }));
}
connection.onCompletion(
  (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return [];
    const line = document.getText({
      start: { line: params.position.line, character: 0 },
      end: { line: params.position.line, character: params.position.character }
    });
    const trigger = isTagNameTrigger(line, params.position.character);
    if (trigger) {
      const tagItems = createTagCompletions(trigger);
      const macroItems = createMacroCompletions(trigger);
      return [...tagItems, ...macroItems];
    }
    const valueCtx = getParamValueContext(line, params.position.character);
    if (valueCtx) {
      if (valueCtx.paramName === "storage") {
        return createStorageCompletions(valueCtx.tagName);
      }
      if (valueCtx.paramName === "target") {
        return createTargetCompletions();
      }
      return [];
    }
    const context = getTagContext(line, params.position.character);
    if (context && context.isInParams) {
      return createParamCompletions(context.tagName, context.usedParams);
    }
    return [];
  }
);
function getDefinitionContext(lineText, character) {
  const valueCtx = getParamValueContext(lineText, character);
  if (valueCtx) {
    const afterCursor = lineText.substring(character);
    const closingQuoteIdx = afterCursor.indexOf('"');
    const fullValue = closingQuoteIdx >= 0 ? valueCtx.currentValue + afterCursor.substring(0, closingQuoteIdx) : valueCtx.currentValue;
    if (valueCtx.paramName === "target" && fullValue.startsWith("*")) {
      return { kind: "label", name: fullValue.substring(1) };
    }
    if (valueCtx.paramName === "storage" && fullValue.length > 0) {
      return { kind: "file", name: fullValue };
    }
    return null;
  }
  const tagCtx = getTagContext(lineText, character);
  if (tagCtx && !tagCtx.isInParams) {
    const afterCursor = lineText.substring(character);
    const remainingWord = afterCursor.match(/^(\w*)/)?.[1] ?? "";
    const fullTagName = tagCtx.tagName + remainingWord;
    if (!TAG_DATABASE.has(fullTagName)) {
      return { kind: "macro", name: fullTagName };
    }
  }
  return null;
}
function refToLocation(ref) {
  return {
    uri: scanner.resolveFilePath(ref.file),
    range: import_node.Range.create(
      import_node.Position.create(ref.line, ref.startChar),
      import_node.Position.create(ref.line, ref.endChar)
    )
  };
}
connection.onDefinition(
  (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;
    const lineText = document.getText({
      start: { line: params.position.line, character: 0 },
      end: { line: params.position.line + 1, character: 0 }
    }).replace(/\n$/, "");
    const ctx = getDefinitionContext(lineText, params.position.character);
    if (!ctx) return null;
    switch (ctx.kind) {
      case "label": {
        const label = scanner.getLabels().find((l) => l.name === ctx.name);
        if (!label) return null;
        return {
          uri: scanner.resolveFilePath(label.file),
          range: import_node.Range.create(
            import_node.Position.create(label.line, 0),
            import_node.Position.create(label.line, label.name.length + 1)
            // +1 は "*" の分
          )
        };
      }
      case "file": {
        const tagCtx = getTagContext(lineText, params.position.character);
        if (!tagCtx) return null;
        const category = TAG_STORAGE_MAPPING.get(tagCtx.tagName);
        if (!category) return null;
        const filePath = `${category}/${ctx.name}`;
        return {
          uri: scanner.resolveFilePath(filePath),
          range: import_node.Range.create(import_node.Position.create(0, 0), import_node.Position.create(0, 0))
        };
      }
      case "macro": {
        const macro = scanner.getMacros().find((m) => m.name === ctx.name);
        if (!macro) return null;
        return {
          uri: scanner.resolveFilePath(macro.file),
          range: import_node.Range.create(
            import_node.Position.create(macro.line, 0),
            import_node.Position.create(macro.line, 0)
          )
        };
      }
    }
  }
);
function getLabelDefinitionAtCursor(lineText, character) {
  const match = lineText.match(/^\*(\w+)/);
  if (match && character <= match[0].length) {
    return match[1];
  }
  return null;
}
function getMacroDefinitionAtCursor(lineText) {
  const match = lineText.match(/\[macro\s+name\s*=\s*"(\w+)"\s*\]/i);
  if (match) {
    return match[1];
  }
  return null;
}
connection.onReferences(
  (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return [];
    const lineText = document.getText({
      start: { line: params.position.line, character: 0 },
      end: { line: params.position.line + 1, character: 0 }
    }).replace(/\n$/, "");
    const character = params.position.character;
    const results = [];
    const labelDef = getLabelDefinitionAtCursor(lineText, character);
    if (labelDef) {
      const refs = scanner.findLabelReferences(labelDef);
      return refs.map(refToLocation);
    }
    const macroDef = getMacroDefinitionAtCursor(lineText);
    if (macroDef) {
      const refs = scanner.findMacroReferences(macroDef);
      return refs.map(refToLocation);
    }
    const defCtx = getDefinitionContext(lineText, character);
    if (defCtx) {
      if (defCtx.kind === "label") {
        const label = scanner.getLabels().find((l) => l.name === defCtx.name);
        if (label) {
          results.push({
            uri: scanner.resolveFilePath(label.file),
            range: import_node.Range.create(
              import_node.Position.create(label.line, 0),
              import_node.Position.create(label.line, label.name.length + 1)
            )
          });
        }
        const refs = scanner.findLabelReferences(defCtx.name);
        results.push(...refs.map(refToLocation));
        return results;
      }
      if (defCtx.kind === "macro") {
        const macro = scanner.getMacros().find((m) => m.name === defCtx.name);
        if (macro) {
          results.push({
            uri: scanner.resolveFilePath(macro.file),
            range: import_node.Range.create(
              import_node.Position.create(macro.line, 0),
              import_node.Position.create(macro.line, 0)
            )
          });
        }
        const refs = scanner.findMacroReferences(defCtx.name);
        results.push(...refs.map(refToLocation));
        return results;
      }
    }
    return results;
  }
);
connection.onHover(
  (params) => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return null;
    const lineText = document.getText({
      start: { line: params.position.line, character: 0 },
      end: { line: params.position.line + 1, character: 0 }
    }).replace(/\n$/, "");
    const character = params.position.character;
    const wordRange = getWordRangeAtPosition(lineText, character);
    if (!wordRange) return null;
    const word = lineText.substring(wordRange.start, wordRange.end);
    const tagHover = getTagHover(lineText, character, word);
    if (tagHover) return tagHover;
    const paramHover = getParamHover(lineText, character, word);
    if (paramHover) return paramHover;
    return null;
  }
);
function getWordRangeAtPosition(lineText, character) {
  if (character >= lineText.length) return null;
  const wordRegex = /\w+/g;
  let match;
  while ((match = wordRegex.exec(lineText)) !== null) {
    const start = match.index;
    const end = start + match[0].length;
    if (character >= start && character < end) {
      return { start, end };
    }
  }
  return null;
}
function getTagHover(lineText, character, word) {
  const bracketRegex = /\[(\w+)/g;
  let match;
  while ((match = bracketRegex.exec(lineText)) !== null) {
    const tagStart = match.index + 1;
    const tagEnd = tagStart + match[1].length;
    if (character >= tagStart && character < tagEnd) {
      const tag = TAG_DATABASE.get(match[1]);
      if (tag) {
        return {
          contents: {
            kind: import_node.MarkupKind.Markdown,
            value: createTagDocumentation(tag)
          }
        };
      }
    }
  }
  const atRegex = /^@(\w+)/;
  const atMatch = lineText.match(atRegex);
  if (atMatch) {
    const tagStart = 1;
    const tagEnd = tagStart + atMatch[1].length;
    if (character >= tagStart && character < tagEnd) {
      const tag = TAG_DATABASE.get(atMatch[1]);
      if (tag) {
        return {
          contents: {
            kind: import_node.MarkupKind.Markdown,
            value: createTagDocumentation(tag)
          }
        };
      }
    }
  }
  if (TAG_DATABASE.has(word)) {
    const beforeWord = lineText.substring(0, character);
    if (!/=\s*"?[^"]*$/.test(beforeWord)) {
      const tag = TAG_DATABASE.get(word);
      return {
        contents: {
          kind: import_node.MarkupKind.Markdown,
          value: createTagDocumentation(tag)
        }
      };
    }
  }
  return null;
}
function getParamHover(lineText, character, word) {
  let bracketStart = -1;
  for (let i = character; i >= 0; i--) {
    if (lineText[i] === "[") {
      bracketStart = i;
      break;
    }
    if (lineText[i] === "]") break;
  }
  let tagName = null;
  if (bracketStart >= 0) {
    const afterBracket = lineText.substring(bracketStart + 1);
    const tagMatch = afterBracket.match(/^(\w+)/);
    if (tagMatch) {
      tagName = tagMatch[1];
    }
  } else {
    const atMatch = lineText.match(/^@(\w+)/);
    if (atMatch) {
      tagName = atMatch[1];
    }
  }
  if (!tagName) return null;
  const tag = TAG_DATABASE.get(tagName);
  if (!tag) return null;
  const afterWord = lineText.substring(character);
  const wordEnd = afterWord.match(/^\w*/);
  const charAfterWord = wordEnd && character + wordEnd[0].length < lineText.length ? lineText[character + wordEnd[0].length] : "";
  if (charAfterWord === "=") {
    const param = tag.params.find((p) => p.name === word);
    if (param) {
      const requiredMark = param.required ? " `\u5FC5\u9808`" : "";
      return {
        contents: {
          kind: import_node.MarkupKind.Markdown,
          value: `**${param.name}**${requiredMark}

${param.description}`
        }
      };
    }
  }
  return null;
}
function parseParams(text) {
  const map = /* @__PURE__ */ new Map();
  const regex = /(\w+)\s*=\s*"([^"]*)"|(\w+)\s*=\s*([^\s\]]+)/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    if (m[1]) map.set(m[1], m[2]);
    else if (m[3]) map.set(m[3], m[4]);
  }
  return map;
}
function parseLine(lineText) {
  const trimmed = lineText.trimStart();
  if (trimmed.startsWith(";")) return null;
  const bracketMatch = lineText.match(/\[([a-zA-Z_]\w*)([^\]]*)\]?/);
  if (bracketMatch) {
    const tagName = bracketMatch[1];
    const tagStart = lineText.indexOf("[") + 1;
    return {
      tagName,
      params: parseParams(bracketMatch[2] ?? ""),
      tagStart,
      tagEnd: tagStart + tagName.length
    };
  }
  const atMatch = lineText.match(/^@(\w+)(.*)/);
  if (atMatch) {
    const tagName = atMatch[1];
    return {
      tagName,
      params: parseParams(atMatch[2] ?? ""),
      tagStart: 1,
      tagEnd: 1 + tagName.length
    };
  }
  return null;
}
function getParamValueRangeInLine(lineText, lineIndex, paramName, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const quotedPattern = new RegExp(`${paramName}\\s*=\\s*"(${escaped})"`);
  const qm = lineText.match(quotedPattern);
  if (qm && qm.index !== void 0) {
    const quotePos = lineText.indexOf('"', qm.index + paramName.length);
    const start = quotePos + 1;
    return import_node.Range.create(
      import_node.Position.create(lineIndex, start),
      import_node.Position.create(lineIndex, start + value.length)
    );
  }
  const unquotedPattern = new RegExp(`${paramName}\\s*=\\s*(${escaped})`);
  const um = lineText.match(unquotedPattern);
  if (um && um.index !== void 0) {
    const start = um.index + um[0].length - um[1].length;
    return import_node.Range.create(
      import_node.Position.create(lineIndex, start),
      import_node.Position.create(lineIndex, start + value.length)
    );
  }
  return import_node.Range.create(
    import_node.Position.create(lineIndex, 0),
    import_node.Position.create(lineIndex, lineText.length)
  );
}
function validateDocument(document) {
  if (!scanner.isInitialized()) return [];
  const diagnostics = [];
  const lines = document.getText().split("\n");
  const knownLabels = new Set(scanner.getLabels().map((l) => l.name));
  const knownMacros = new Set(scanner.getMacros().map((m) => m.name));
  let inMacroBlock = false;
  let inScriptBlock = false;
  const definedLabels = [];
  for (let i = 0; i < lines.length; i++) {
    const labelMatch = lines[i].match(/^\*(\w+)/);
    if (labelMatch) {
      definedLabels.push({ name: labelMatch[1], line: i });
    }
    const parsed = parseLine(lines[i]);
    if (!parsed) continue;
    const { tagName, params, tagStart, tagEnd } = parsed;
    if (tagName === "iscript") {
      inScriptBlock = true;
      continue;
    }
    if (tagName === "endscript") {
      inScriptBlock = false;
      continue;
    }
    if (inScriptBlock) continue;
    if (tagName === "macro") {
      inMacroBlock = true;
      continue;
    }
    if (tagName === "endmacro") {
      inMacroBlock = false;
      continue;
    }
    if (inMacroBlock) continue;
    if (!TAG_DATABASE.has(tagName) && !knownMacros.has(tagName)) {
      diagnostics.push(import_node.Diagnostic.create(
        import_node.Range.create(import_node.Position.create(i, tagStart), import_node.Position.create(i, tagEnd)),
        `\u672A\u5B9A\u7FA9\u306E\u30BF\u30B0\u307E\u305F\u306F\u30DE\u30AF\u30ED: "${tagName}"`,
        import_node.DiagnosticSeverity.Warning,
        "tyrano-undefined-macro",
        "tyranoscript"
      ));
      continue;
    }
    const tagDef = TAG_DATABASE.get(tagName);
    if (!tagDef) continue;
    for (const paramDef of tagDef.params) {
      if (paramDef.required && !params.has(paramDef.name)) {
        diagnostics.push(import_node.Diagnostic.create(
          import_node.Range.create(import_node.Position.create(i, tagStart), import_node.Position.create(i, tagEnd)),
          `[${tagName}] \u306E\u5FC5\u9808\u30D1\u30E9\u30E1\u30FC\u30BF "${paramDef.name}" \u304C\u6307\u5B9A\u3055\u308C\u3066\u3044\u307E\u305B\u3093`,
          import_node.DiagnosticSeverity.Error,
          "tyrano-missing-param",
          "tyranoscript"
        ));
      }
    }
    const storageValue = params.get("storage");
    if (storageValue && !storageValue.startsWith("[") && !storageValue.startsWith("%") && !storageValue.startsWith("&")) {
      const folderOverride = params.get("folder");
      const category = folderOverride ?? TAG_STORAGE_MAPPING.get(tagName);
      if (category) {
        const exists = storageValue.includes("../") ? scanner.assetFileExists(category, storageValue) : scanner.getAssetsForCategory(category).includes(storageValue);
        if (!exists) {
          diagnostics.push(import_node.Diagnostic.create(
            getParamValueRangeInLine(lines[i], i, "storage", storageValue),
            `\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093: "${storageValue}" (${category}/)`,
            import_node.DiagnosticSeverity.Warning,
            "tyrano-missing-file",
            "tyranoscript"
          ));
        }
      }
    }
    if (TAG_DATABASE.has(tagName)) {
      for (const [paramName, category] of PARAM_FILE_MAPPING) {
        const paramValue = params.get(paramName);
        if (!paramValue || paramValue.startsWith("[") || paramValue.startsWith("%") || paramValue.startsWith("&")) continue;
        let fileExists;
        if (paramValue.includes("../")) {
          fileExists = scanner.assetFileExists(category, paramValue);
        } else {
          const available = scanner.getAssetsForCategory(category);
          if (available.length === 0) continue;
          fileExists = available.includes(paramValue);
        }
        if (!fileExists) {
          diagnostics.push(import_node.Diagnostic.create(
            getParamValueRangeInLine(lines[i], i, paramName, paramValue),
            `\u30D5\u30A1\u30A4\u30EB\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093: "${paramValue}" (${category}/)`,
            import_node.DiagnosticSeverity.Warning,
            "tyrano-missing-file",
            "tyranoscript"
          ));
        }
      }
    }
    const targetValue = params.get("target");
    if (targetValue && targetValue.startsWith("*")) {
      const labelName = targetValue.substring(1);
      if (labelName.length > 0 && !knownLabels.has(labelName)) {
        diagnostics.push(import_node.Diagnostic.create(
          getParamValueRangeInLine(lines[i], i, "target", targetValue),
          `\u672A\u5B9A\u7FA9\u306E\u30E9\u30D9\u30EB: "${targetValue}" \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093`,
          import_node.DiagnosticSeverity.Warning,
          "tyrano-undefined-label",
          "tyranoscript"
        ));
      }
    }
  }
  const ENTRY_LABELS = /* @__PURE__ */ new Set(["start"]);
  for (const { name, line } of definedLabels) {
    if (ENTRY_LABELS.has(name)) continue;
    const refs = scanner.findLabelReferences(name);
    if (refs.length === 0 && !scanner.hasDynamicTargetReference(document.uri)) {
      diagnostics.push(import_node.Diagnostic.create(
        import_node.Range.create(import_node.Position.create(line, 0), import_node.Position.create(line, name.length + 1)),
        // +1 は "*" の分
        `\u30E9\u30D9\u30EB "*${name}" \u306F\u3069\u3053\u304B\u3089\u3082\u53C2\u7167\u3055\u308C\u3066\u3044\u307E\u305B\u3093`,
        import_node.DiagnosticSeverity.Warning,
        "tyrano-unused-label",
        "tyranoscript"
      ));
    }
  }
  return applySuppressionComments(diagnostics, lines);
}
function applySuppressionComments(diagnostics, lines) {
  const disabledRanges = [];
  const openDisables = /* @__PURE__ */ new Map();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const disableM = line.match(/;\s*tyranoscript-disable(?!-next-line|-line)(?:\s+(\S+))?/);
    const enableM = line.match(/;\s*tyranoscript-enable(?:\s+(\S+))?/);
    if (disableM) {
      const code = disableM[1];
      if (!openDisables.has(code)) openDisables.set(code, i);
    }
    if (enableM) {
      const code = enableM[1];
      const start = openDisables.get(code);
      if (start !== void 0) {
        disabledRanges.push({ start, end: i, code });
        openDisables.delete(code);
      }
    }
  }
  for (const [code, start] of openDisables) {
    disabledRanges.push({ start, end: lines.length - 1, code });
  }
  return diagnostics.filter((diag) => {
    const lineIdx = diag.range.start.line;
    const diagCode = diag.code;
    const matches = (suppressCode) => suppressCode === void 0 || suppressCode === diagCode;
    if (lineIdx > 0) {
      const m = lines[lineIdx - 1].match(/;\s*tyranoscript-disable-next-line(?:\s+(\S+))?/);
      if (m && matches(m[1])) return false;
    }
    const m2 = lines[lineIdx]?.match(/;\s*tyranoscript-disable-line(?:\s+(\S+))?/);
    if (m2 && matches(m2[1])) return false;
    for (const range of disabledRanges) {
      if (lineIdx >= range.start && lineIdx <= range.end && matches(range.code)) return false;
    }
    return true;
  });
}
function validateAndPublish(uri, document) {
  const diagnostics = validateDocument(document);
  connection.sendDiagnostics({ uri, diagnostics });
}
function validateAllKsFiles() {
  for (const { uri, content } of scanner.getAllKsFiles()) {
    const openDoc = documents.get(uri);
    const doc = openDoc ?? TextDocument.create(uri, "tyranoscript", 0, content);
    validateAndPublish(uri, doc);
  }
}
var updateTimers = /* @__PURE__ */ new Map();
documents.onDidChangeContent((change) => {
  const uri = change.document.uri;
  if (!uri.endsWith(".ks")) return;
  const existing = updateTimers.get(uri);
  if (existing) clearTimeout(existing);
  updateTimers.set(
    uri,
    setTimeout(() => {
      scanner.updateFile(uri, change.document.getText());
      validateAndPublish(uri, change.document);
      updateTimers.delete(uri);
    }, 500)
  );
});
documents.onDidClose((event) => {
  if (!event.document.uri.endsWith(".ks")) return;
  const uri = event.document.uri;
  const ksFile = scanner.getAllKsFiles().find((f) => f.uri === uri);
  if (!ksFile) return;
  const doc = TextDocument.create(uri, "tyranoscript", 0, ksFile.content);
  connection.sendDiagnostics({ uri, diagnostics: validateDocument(doc) });
});
documents.listen(connection);
connection.listen();
