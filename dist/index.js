webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(1);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(82);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(221);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(275);

	__webpack_require__(279);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var numberOfTabs = 8; /**
	                       * @file index.jsx
	                       * @author houyl@jingoal.com
	                       *
	                       * 标签页示例
	                       */

	var tabs = [].concat((0, _toConsumableArray3.default)(new Array(numberOfTabs))).map(function (_, i) {
	    return 'tab' + i;
	});

	var Panels = [].concat((0, _toConsumableArray3.default)(new Array(numberOfTabs))).map(function (_, i) {
	    return _react2.default.createElement(
	        'div',
	        { key: i },
	        _react2.default.createElement(
	            'div',
	            { className: 'myItem' },
	            i
	        )
	    );
	});

	var tabPanelStyle = {
	    container: {
	        overflow: 'hidden',
	        visibility: 'hidden',
	        position: 'relative'
	    },
	    wrapper: {
	        overflow: 'hidden',
	        position: 'relative'
	    },
	    child: {
	        float: 'left',
	        width: '100%',
	        position: 'relative',
	        transitionProperty: 'transform',
	        height: '250px'
	    }
	};

	/* eslint-disable no-console*/
	var onChange = function onChange(index) {
	    return console.log('onChange:' + index);
	};

	var transitionEnd = function transitionEnd(index) {
	    return console.log('transitionEnd:' + index);
	};
	/* eslint-enable no-console*/

	var TabsExample = function TabsExample() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            _index2.default,
	            {
	                defaultIndex: 2,
	                onChange: onChange,
	                transitionEnd: transitionEnd,
	                tabs: tabs,
	                tabPanelStyle: tabPanelStyle,
	                className: 'myTabs'
	            },
	            Panels
	        )
	    );
	};

	if (document.getElementById('root')) {
	    _reactDom2.default.render(_react2.default.createElement(TabsExample, null), document.getElementById('root'));
	}

	exports.default = TabsExample;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(2);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(48);
	module.exports = __webpack_require__(12).Array.from;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(5)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(8)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6)
	  , defined   = __webpack_require__(7);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(9)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(25)
	  , hide           = __webpack_require__(15)
	  , has            = __webpack_require__(26)
	  , Iterators      = __webpack_require__(27)
	  , $iterCreate    = __webpack_require__(28)
	  , setToStringTag = __webpack_require__(44)
	  , getPrototypeOf = __webpack_require__(46)
	  , ITERATOR       = __webpack_require__(45)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(11)
	  , core      = __webpack_require__(12)
	  , ctx       = __webpack_require__(13)
	  , hide      = __webpack_require__(15)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(14);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(16)
	  , createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(20) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(23)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(21)(function(){
	  return Object.defineProperty(__webpack_require__(22)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(21)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(11).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);

/***/ },
/* 26 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(29)
	  , descriptor     = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(44)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(15)(IteratorPrototype, __webpack_require__(45)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(17)
	  , dPs         = __webpack_require__(30)
	  , enumBugKeys = __webpack_require__(42)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(22)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(43).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(16)
	  , anObject = __webpack_require__(17)
	  , getKeys  = __webpack_require__(31);

	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(32)
	  , enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(26)
	  , toIObject    = __webpack_require__(33)
	  , arrayIndexOf = __webpack_require__(36)(false)
	  , IE_PROTO     = __webpack_require__(39)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34)
	  , defined = __webpack_require__(7);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33)
	  , toLength  = __webpack_require__(37)
	  , toIndex   = __webpack_require__(38);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(6)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys')
	  , uid    = __webpack_require__(41);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11).document && document.documentElement;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(16).f
	  , has = __webpack_require__(26)
	  , TAG = __webpack_require__(45)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(40)('wks')
	  , uid        = __webpack_require__(41)
	  , Symbol     = __webpack_require__(11).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(26)
	  , toObject    = __webpack_require__(47)
	  , IE_PROTO    = __webpack_require__(39)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(13)
	  , $export        = __webpack_require__(10)
	  , toObject       = __webpack_require__(47)
	  , call           = __webpack_require__(49)
	  , isArrayIter    = __webpack_require__(50)
	  , toLength       = __webpack_require__(37)
	  , createProperty = __webpack_require__(51)
	  , getIterFn      = __webpack_require__(52);

	$export($export.S + $export.F * !__webpack_require__(54)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(17);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(27)
	  , ITERATOR   = __webpack_require__(45)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(16)
	  , createDesc      = __webpack_require__(24);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(53)
	  , ITERATOR  = __webpack_require__(45)('iterator')
	  , Iterators = __webpack_require__(27);
	module.exports = __webpack_require__(12).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35)
	  , TAG = __webpack_require__(45)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(45)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(222);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(226);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(227);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(231);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(256);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file index.jsx
	                    * @author houyl@jingoal.com
	                    *
	                    * 标签页
	                    */


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _TabList = __webpack_require__(264);

	var _TabList2 = _interopRequireDefault(_TabList);

	var _TabPanels = __webpack_require__(268);

	var _TabPanels2 = _interopRequireDefault(_TabPanels);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tabs = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(Tabs, _PureComponent);

	    function Tabs(props) {
	        (0, _classCallCheck3.default)(this, Tabs);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

	        _this.state = { index: _this.props.defaultIndex };
	        _this.changeTabTo = _this.changeTabTo.bind(_this);
	        _this.onChange = _this.onChange.bind(_this);
	        _this.transitionEnd = _this.transitionEnd.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Tabs, [{
	        key: 'onChange',
	        value: function onChange(index) {
	            this.setState({
	                index: index
	            });
	            if (this.props.onChange) {
	                this.props.onChange(index);
	            }
	        }
	    }, {
	        key: 'transitionEnd',
	        value: function transitionEnd(index) {
	            if (this.props.transitionEnd) {
	                this.props.transitionEnd(index);
	            }
	        }
	    }, {
	        key: 'changeTabTo',
	        value: function changeTabTo(value) {
	            this.reactSwipe.getInstance().slide(value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                className = _props.className,
	                tabs = _props.tabs,
	                defaultIndex = _props.defaultIndex,
	                tabStyle = _props.tabStyle,
	                tabPanelStyle = _props.tabPanelStyle,
	                children = _props.children,
	                containerStyle = _props.containerStyle;

	            return _react2.default.createElement(
	                'div',
	                { style: containerStyle, className: className },
	                _react2.default.createElement(_TabList2.default, {
	                    tabs: tabs,
	                    index: this.state.index,
	                    onChange: this.changeTabTo,
	                    style: tabStyle
	                }),
	                _react2.default.createElement(
	                    _TabPanels2.default,
	                    {
	                        ref: function ref(_ref) {
	                            _this2.reactSwipe = _ref;
	                        },
	                        onChange: this.onChange,
	                        transitionEnd: this.transitionEnd,
	                        startSlide: defaultIndex,
	                        style: tabPanelStyle
	                    },
	                    children
	                )
	            );
	        }
	    }]);
	    return Tabs;
	}(_react.PureComponent), _class.propTypes = {
	    className: _react.PropTypes.string,
	    tabs: _react.PropTypes.arrayOf(_react.PropTypes.node),
	    defaultIndex: _react.PropTypes.number,
	    onChange: _react.PropTypes.func,
	    transitionEnd: _react.PropTypes.func,
	    containerStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	    tabStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	    tabPanelStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	    children: _react.PropTypes.node
	}, _class.defaultProps = {
	    defaultIndex: 0
	}, _temp);
	exports.default = Tabs;

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(223), __esModule: true };

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(224);
	module.exports = __webpack_require__(12).Object.getPrototypeOf;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(47)
	  , $getPrototypeOf = __webpack_require__(46);

	__webpack_require__(225)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10)
	  , core    = __webpack_require__(12)
	  , fails   = __webpack_require__(21);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(228);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(229), __esModule: true };

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(230);
	var $Object = __webpack_require__(12).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', {defineProperty: __webpack_require__(16).f});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(232);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(233);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(240);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(234), __esModule: true };

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(235);
	module.exports = __webpack_require__(239).f('iterator');

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(236);
	var global        = __webpack_require__(11)
	  , hide          = __webpack_require__(15)
	  , Iterators     = __webpack_require__(27)
	  , TO_STRING_TAG = __webpack_require__(45)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(237)
	  , step             = __webpack_require__(238)
	  , Iterators        = __webpack_require__(27)
	  , toIObject        = __webpack_require__(33);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(8)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(45);

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(241), __esModule: true };

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(242);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	module.exports = __webpack_require__(12).Symbol;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(11)
	  , has            = __webpack_require__(26)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(25)
	  , META           = __webpack_require__(243).KEY
	  , $fails         = __webpack_require__(21)
	  , shared         = __webpack_require__(40)
	  , setToStringTag = __webpack_require__(44)
	  , uid            = __webpack_require__(41)
	  , wks            = __webpack_require__(45)
	  , wksExt         = __webpack_require__(239)
	  , wksDefine      = __webpack_require__(244)
	  , keyOf          = __webpack_require__(245)
	  , enumKeys       = __webpack_require__(246)
	  , isArray        = __webpack_require__(249)
	  , anObject       = __webpack_require__(17)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(23)
	  , createDesc     = __webpack_require__(24)
	  , _create        = __webpack_require__(29)
	  , gOPNExt        = __webpack_require__(250)
	  , $GOPD          = __webpack_require__(252)
	  , $DP            = __webpack_require__(16)
	  , $keys          = __webpack_require__(31)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(251).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(248).f  = $propertyIsEnumerable;
	  __webpack_require__(247).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(9)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(41)('meta')
	  , isObject = __webpack_require__(18)
	  , has      = __webpack_require__(26)
	  , setDesc  = __webpack_require__(16).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(21)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(11)
	  , core           = __webpack_require__(12)
	  , LIBRARY        = __webpack_require__(9)
	  , wksExt         = __webpack_require__(239)
	  , defineProperty = __webpack_require__(16).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(31)
	  , toIObject = __webpack_require__(33);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(31)
	  , gOPS    = __webpack_require__(247)
	  , pIE     = __webpack_require__(248);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 247 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 248 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33)
	  , gOPN      = __webpack_require__(251).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(32)
	  , hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(248)
	  , createDesc     = __webpack_require__(24)
	  , toIObject      = __webpack_require__(33)
	  , toPrimitive    = __webpack_require__(23)
	  , has            = __webpack_require__(26)
	  , IE8_DOM_DEFINE = __webpack_require__(19)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 253 */
/***/ function(module, exports) {

	

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(244)('asyncIterator');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(244)('observable');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(257);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(261);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(232);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(258), __esModule: true };

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(259);
	module.exports = __webpack_require__(12).Object.setPrototypeOf;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(260).set});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(17);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(13)(Function.call, __webpack_require__(252).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(262), __esModule: true };

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(263);
	var $Object = __webpack_require__(12).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(29)});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(222);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(226);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(227);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(231);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(256);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file TabList.jsx
	                    * @author houyl@jingoal.com
	                    *
	                    * tabs组件
	                    */


	// import Scroller from '../../scroller';


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(265);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Tab = __webpack_require__(266);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _utils = __webpack_require__(267);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var docWidth = document.documentElement.clientWidth;

	var TabList = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(TabList, _PureComponent);

	    function TabList(props) {
	        (0, _classCallCheck3.default)(this, TabList);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (TabList.__proto__ || (0, _getPrototypeOf2.default)(TabList)).call(this, props));

	        _this.totalWidth = 0;
	        _this.tabWidths = []; // 记录每个tab的宽度
	        _this.handleTabClick = _this.handleTabClick.bind(_this);
	        _this.updateTabWidth = _this.updateTabWidth.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(TabList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.scrollTo(this.props.index);
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	            var index = nextProps.index;
	            if (this.scroller) {
	                this.scrollTo(index, 400);
	            }
	        }
	    }, {
	        key: 'scrollTo',
	        value: function scrollTo(index) {
	            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	            var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils2.default.ease.circular;

	            var start = 0;
	            for (var i = 0; i < index; i++) {
	                start += this.tabWidths[i];
	            }
	            this.inkBar.style.cssText = '-webkit-transform: translate3d(' + (start + 6) + 'px, 0px, 0px);transform: translate3d(' + (start + 6) + 'px, 0px, 0px);width:' + (this.tabWidths[index] - 12) + 'px';
	            if (this.totalWidth > docWidth) {
	                var scrollTo = start - this.tabWidths[index];
	                this.animate(this.scroller.scrollLeft, scrollTo, duration, easing.fn);
	            }
	        }
	    }, {
	        key: 'animate',
	        value: function animate(start, dest, duration, easingFn) {
	            var _this2 = this;

	            var startTime = _utils2.default.getTime();
	            var destTime = startTime + duration;

	            var step = function step() {
	                var now = _utils2.default.getTime();

	                // 如果当前时间大于持续时间，则结束动画
	                if (now >= destTime) {
	                    _this2.isAnimating = false;
	                    _this2.scroller.scrollLeft = dest;
	                    return;
	                }

	                now = (now - startTime) / duration;
	                var easing = easingFn(now);
	                var newX = (dest - start) * easing + start;

	                _this2.scroller.scrollLeft = newX;

	                if (_this2.isAnimating) {
	                    _utils2.default.requestAnimationFrame.call(window, step);
	                }
	            };

	            this.isAnimating = true;
	            step();
	        }
	    }, {
	        key: 'handleTabClick',
	        value: function handleTabClick(index) {
	            this.props.onChange(index);
	        }
	    }, {
	        key: 'updateTabWidth',
	        value: function updateTabWidth(index, width) {
	            this.totalWidth = this.tabWidths[index] ? this.totalWidth - this.tabWidths[index] + width : this.totalWidth + width;
	            this.tabWidths[index] = width;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props = this.props,
	                tabs = _props.tabs,
	                style = _props.style;

	            return _react2.default.createElement(
	                'div',
	                {
	                    style: style,
	                    className: 'silk-tabs-nav-wrapper',
	                    ref: function ref(_ref2) {
	                        _this3.scroller = _ref2;
	                    }
	                },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'silk-tabs-nav-scroller silk-tabs-border-line' },
	                    _react2.default.createElement('div', { className: 'silk-tabs-ink-bar silk-tabs-ink-bar-animated', ref: function ref(_ref) {
	                            _this3.inkBar = _ref;
	                        } }),
	                    tabs.map(function (item, index) {
	                        var tabClass = (0, _classnames2.default)('silk-tabs-tab', {
	                            'silk-tabs-active': index === _this3.props.index
	                        });
	                        return _react2.default.createElement(_Tab2.default, {
	                            key: index,
	                            index: index,
	                            className: tabClass,
	                            onClick: _this3.handleTabClick,
	                            content: item,
	                            updateTabWidth: _this3.updateTabWidth
	                        });
	                    })
	                )
	            );
	        }
	    }]);
	    return TabList;
	}(_react.PureComponent), _class.propTypes = {
	    onChange: _react.PropTypes.func,
	    tabs: _react.PropTypes.arrayOf(_react.PropTypes.node),
	    index: _react.PropTypes.number,
	    style: _react.PropTypes.object // eslint-disable-line react/forbid-prop-types
	}, _class.defaultProps = {
	    index: 0,
	    style: {}
	}, _temp);
	exports.default = TabList;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(222);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(226);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(227);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(231);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(256);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file TabList.jsx
	                    * @author houyl@jingoal.com
	                    *
	                    * Tab组件
	                    */


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tab = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(Tab, _PureComponent);

	    function Tab() {
	        (0, _classCallCheck3.default)(this, Tab);
	        return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Tab, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.updateTabWidth(this.props.index, this.el.offsetWidth);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                index = _props.index,
	                _onClick = _props.onClick,
	                className = _props.className,
	                content = _props.content;


	            return _react2.default.createElement(
	                'div',
	                {
	                    onClick: function onClick() {
	                        return _onClick(index);
	                    },
	                    ref: function ref(_ref) {
	                        _this2.el = _ref;
	                    },
	                    className: className
	                },
	                content
	            );
	        }
	    }]);
	    return Tab;
	}(_react.PureComponent), _class.propTypes = {
	    onClick: _react.PropTypes.func,
	    updateTabWidth: _react.PropTypes.func,
	    content: _react.PropTypes.node,
	    index: _react.PropTypes.number,
	    className: _react.PropTypes.string
	}, _temp);
	exports.default = Tab;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(232);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file utils.js
	 * @author liyang@jingoal.com
	 * @desc
	 *
	 *      工具函数
	 * */

	/**
	 * 针对不同内核的浏览器对requestAnimationFrane做兼容处理
	 * */
	var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	    return window.setTimeout(callback, 1000 / 60);
	};

	/**
	 * 缓存DIV元素的默认样式，为之后的兼容处理做准备
	 * */
	var elementStyle = document.createElement('div').style;

	/**
	 * 获取厂商前缀
	 * */
	var vendor = function () {
	    var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'];
	    var len = vendors.length;

	    var transform = void 0;
	    var i = 0;

	    for (; i < len; i++) {
	        transform = vendors[i] + 'ransform';

	        if (transform in elementStyle) {
	            return vendors[i].substr(0, vendors[i].length - 1);
	        }
	    }

	    return false;
	}();

	/**
	 * 判断是否为坏的安卓手机
	 * */
	var isBadAndroid = function () {
	    var appVersion = window.navigator.appVersion;

	    if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
	        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
	        if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : (0, _typeof3.default)(safariVersion)) === 'object' && safariVersion.length >= 2) {
	            return parseFloat(safariVersion[1]) < 535.19;
	        }
	        return true;
	    }
	    return false;
	}();

	/**
	 * 对transition、translate等属性做兼容处理
	 * */
	function prefixStyle(style) {
	    if (vendor === false) return false;
	    if (vendor === '') return style;
	    return vendor + style.charAt(0).toUpperCase() + style.substr(1);
	}

	var transform = prefixStyle('transform');

	/**
	 * 绑定事件的函数
	 *
	 * @param
	 *      el - DOM元素
	 *      type - 事件类型
	 *      fn - 事件处理器
	 *      capture - 捕获开关
	 */
	function addEvent(el, type, fn, capture) {
	    el.addEventListener(type, fn, !!capture);
	}

	/**
	 * 删除事件的函数
	 *
	 * @param
	 *      el - DOM元素
	 *      type - 事件类型
	 *      fn - 事件处理器
	 *      capture - 捕获开关
	 * */
	function removeEvent(el, type, fn, capture) {
	    el.removeEventListener(type, fn, !!capture);
	}

	/**
	 * 动量函数
	 *
	 * @param
	 *      current - 当前位置
	 *      start -  起始位置
	 *      time - 持续事件
	 *      lowerMargin - 滑块长度
	 *      wrapperSize - 容器长度
	 *      deceleration - 阻尼系数
	 *
	 * @return
	 *      destination - 终点位置
	 *      duration - 持续时间
	 * */
	function momentum(current, start, time, lowerMargin, wrapperSize) {
	    var deceleration = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0.0006;

	    var distance = current - start;
	    var destination = void 0;
	    var duration = void 0;

	    var speed = Math.abs(distance) / time;

	    destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
	    duration = speed / deceleration;

	    if (destination < lowerMargin) {
	        destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
	        distance = Math.abs(destination - current);
	        duration = distance / speed;
	    } else if (destination > 0) {
	        destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
	        distance = Math.abs(current) + destination;
	        duration = distance / speed;
	    }

	    return {
	        destination: Math.round(destination),
	        duration: duration
	    };
	}

	var getTime = Date.now || function () {
	    return new Date().getTime();
	};

	/**
	 * 计算偏移
	 * */
	function offset(el) {
	    var left = -el.offsetLeft;
	    var top = -el.offsetTop;

	    while (el = el.offsetParent) {
	        // eslint-disable-line no-cond-assign, no-param-reassign
	        left -= el.offsetLeft;
	        top -= el.offsetTop;
	    }

	    return { left: left, top: top };
	}

	function preventDefaultException(el, exceptions) {
	    for (var i in exceptions) {
	        // eslint-disable-line no-restricted-syntax
	        if (exceptions[i].test(el[i])) {
	            return true;
	        }
	    }

	    return false;
	}

	var style = {
	    transform: transform,
	    transitionTimingFunction: prefixStyle('transitionTimingFunction'),
	    transitionDuration: prefixStyle('transitionDuration'),
	    transitionDelay: prefixStyle('transitionDelay'),
	    transformOrigin: prefixStyle('transformOrigin')
	};

	var eventType = {
	    touchstart: 1,
	    touchmove: 1,
	    touchend: 1
	};

	/**
	 * 动画
	 * */
	/* eslint-disable */
	var ease = {
	    quadratic: {
	        style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	        fn: function fn(k) {
	            return k * (2 - k);
	        }
	    },
	    circular: {
	        style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
	        fn: function fn(k) {
	            return Math.sqrt(1 - --k * k);
	        }
	    },
	    back: {
	        style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	        fn: function fn(k) {
	            var b = 4;
	            return (k = k - 1) * k * ((b + 1) * k + b) + 1;
	        }
	    },
	    bounce: {
	        style: '',
	        fn: function fn(k) {
	            if ((k /= 1) < 1 / 2.75) {
	                return 7.5625 * k * k;
	            } else if (k < 2 / 2.75) {
	                return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
	            } else if (k < 2.5 / 2.75) {
	                return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
	            } else {
	                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
	            }
	        }
	    },
	    elastic: {
	        style: '',
	        fn: function fn(k) {
	            var f = 0.22,
	                e = 0.4;

	            if (k === 0) {
	                return 0;
	            }
	            if (k == 1) {
	                return 1;
	            }

	            return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
	        }
	    }
	};
	/* eslint-enable */

	var utils = {
	    hasTransform: transform !== false,
	    hasPerspective: prefixStyle('perspective') in elementStyle,
	    hasTouch: 'ontouchstart' in window,
	    hasTransition: prefixStyle('transition') in elementStyle,
	    prefixStyle: prefixStyle,
	    addEvent: addEvent,
	    removeEvent: removeEvent,
	    getTime: getTime,
	    style: style,
	    isBadAndroid: isBadAndroid,
	    offset: offset,
	    momentum: momentum,
	    preventDefaultException: preventDefaultException,
	    eventType: eventType,
	    ease: ease,
	    requestAnimationFrame: requestAnimationFrame
	};

	exports.default = utils;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(222);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(226);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(227);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(231);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(256);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file SwipeableTabContent.jsx
	                    * @author houyl@jingoal.com
	                    *
	                    * tab滑动内容区
	                    */


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _silkReactSwipe = __webpack_require__(269);

	var _silkReactSwipe2 = _interopRequireDefault(_silkReactSwipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TabPanels = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(TabPanels, _PureComponent);

	    function TabPanels(props) {
	        (0, _classCallCheck3.default)(this, TabPanels);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (TabPanels.__proto__ || (0, _getPrototypeOf2.default)(TabPanels)).call(this, props));

	        _this.swipeOptions = {
	            continuous: false,
	            callback: _this.onChange.bind(_this),
	            transitionEnd: _this.transitionEnd.bind(_this),
	            startSlide: _this.props.startSlide
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(TabPanels, [{
	        key: 'onChange',
	        value: function onChange(index) {
	            this.props.onChange(index);
	        }
	    }, {
	        key: 'getInstance',
	        value: function getInstance() {
	            return this.reactSwipe;
	        }
	    }, {
	        key: 'transitionEnd',
	        value: function transitionEnd(index) {
	            this.props.transitionEnd(index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _silkReactSwipe2.default,
	                {
	                    ref: function ref(_ref) {
	                        _this2.reactSwipe = _ref;
	                    },
	                    style: this.props.style,
	                    swipeOptions: this.swipeOptions,
	                    className: 'silk-tabs-swipe-container'
	                },
	                this.props.children
	            );
	        }
	    }]);
	    return TabPanels;
	}(_react.PureComponent), _class.propTypes = {
	    onChange: _react.PropTypes.func,
	    transitionEnd: _react.PropTypes.func,
	    children: _react.PropTypes.node,
	    style: _react.PropTypes.shape({
	        wrapper: _react.PropTypes.object,
	        child: _react.PropTypes.object
	    }),
	    startSlide: _react.PropTypes.number
	}, _class.defaultProps = {
	    style: {
	        container: {
	            overflow: 'hidden',
	            visibility: 'hidden',
	            position: 'relative'
	        },
	        wrapper: {
	            overflow: 'hidden',
	            position: 'relative'
	        },
	        child: {
	            float: 'left',
	            width: '100%',
	            position: 'relative',
	            transitionProperty: 'transform'
	        }
	    },
	    startSlide: 0
	}, _temp);
	exports.default = TabPanels;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(270);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(222);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(226);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(227);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(231);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(256);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _silkSwipe = __webpack_require__(274);

	var _silkSwipe2 = _interopRequireDefault(_silkSwipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactSwipe = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(ReactSwipe, _Component);

	    function ReactSwipe() {
	        (0, _classCallCheck3.default)(this, ReactSwipe);
	        return (0, _possibleConstructorReturn3.default)(this, (ReactSwipe.__proto__ || (0, _getPrototypeOf2.default)(ReactSwipe)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ReactSwipe, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var swipeOptions = this.props.swipeOptions;


	            this.swipe = (0, _silkSwipe2.default)(this.container, swipeOptions);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.swipe.kill();
	            delete this.swipe;
	        }
	    }, {
	        key: 'getPos',
	        value: function getPos() {
	            return this.swipe.getPos();
	        }
	    }, {
	        key: 'getNumSlides',
	        value: function getNumSlides() {
	            return this.swipe.getNumSlides();
	        }
	    }, {
	        key: 'slide',
	        value: function slide() {
	            var _swipe;

	            (_swipe = this.swipe).slide.apply(_swipe, arguments);
	        }
	    }, {
	        key: 'prev',
	        value: function prev() {
	            this.swipe.prev();
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            this.swipe.next();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                id = _props.id,
	                className = _props.className,
	                style = _props.style,
	                children = _props.children; // eslint-disable-line react/prop-types

	            return _react2.default.createElement(
	                'div',
	                {
	                    ref: function ref(_ref) {
	                        _this2.container = _ref;
	                    },
	                    id: id, className: 'react-swipe-container ' + className,
	                    style: style.container
	                },
	                _react2.default.createElement(
	                    'div',
	                    { style: style.wrapper },
	                    _react2.default.Children.map(children, function (child) {
	                        if (child instanceof Object) {
	                            return _react2.default.cloneElement(child, {
	                                style: child.props.style ? (0, _assign2.default)(child.props.style, style.child) : style.child
	                            });
	                        }
	                        return child;
	                    })
	                )
	            );
	        }
	    }]);
	    return ReactSwipe;
	}(_react.Component), _class.propTypes = {
	    swipeOptions: _react.PropTypes.shape({
	        startSlide: _react.PropTypes.number,
	        speed: _react.PropTypes.number,
	        auto: _react.PropTypes.number,
	        continuous: _react.PropTypes.bool,
	        disableScroll: _react.PropTypes.bool,
	        stopPropagation: _react.PropTypes.bool,
	        swiping: _react.PropTypes.func,
	        callback: _react.PropTypes.func,
	        transitionEnd: _react.PropTypes.func
	    }),
	    style: _react.PropTypes.shape({
	        container: _react.PropTypes.object,
	        wrapper: _react.PropTypes.object,
	        child: _react.PropTypes.object
	    }),
	    id: _react.PropTypes.string,
	    className: _react.PropTypes.string
	}, _class.defaultProps = {
	    swipeOptions: {},
	    style: {
	        container: {
	            overflow: 'hidden',
	            visibility: 'hidden',
	            position: 'relative'
	        },

	        wrapper: {
	            overflow: 'hidden',
	            position: 'relative'
	        },

	        child: {
	            float: 'left',
	            width: '100%',
	            position: 'relative',
	            transitionProperty: 'transform',
	            minHeight: '1px'
	        }
	    },
	    className: ''
	}, _temp);
	exports.default = ReactSwipe;

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(271), __esModule: true };

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(272);
	module.exports = __webpack_require__(12).Object.assign;

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(273)});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(31)
	  , gOPS     = __webpack_require__(247)
	  , pIE      = __webpack_require__(248)
	  , toObject = __webpack_require__(47)
	  , IObject  = __webpack_require__(34)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(21)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 274 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Swipe 2.0.0
	 * Brad Birdsall
	 * https://github.com/thebird/Swipe
	 * Copyright 2013-2015, MIT License
	 *
	 */

	function Swipe(container, options) {

	  // utilities
	  var noop = function noop() {}; // simple no operation function
	  var offloadFn = function offloadFn(fn) {
	    setTimeout(fn || noop, 0);
	  }; // offload a functions execution

	  // check browser capabilities
	  var browser = {
	    addEventListener: !!window.addEventListener,
	    touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,
	    transitions: function (temp) {
	      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
	      for (var i in props) {
	        if (temp.style[props[i]] !== undefined) return true;
	      }return false;
	    }(document.createElement('swipe'))
	  };

	  // quit if no root element
	  if (!container) return;
	  var element = container.children[0];
	  var slides, slidePos, width, length;
	  options = options || {};
	  var index = parseInt(options.startSlide, 10) || 0;
	  var speed = options.speed || 300;
	  var scrollHold = options.scrollHold || 10; // 当滑动距离大于scrollHold时,才进入scrolling滚动.避免轻微接触时造成的页面震动.
	  options.continuous = options.continuous !== undefined ? options.continuous : true;

	  function _setup() {

	    // cache slides
	    slides = element.children;
	    length = slides.length;

	    // set continuous to false if only one slide
	    if (slides.length < 2) options.continuous = false;

	    //special case if two slides
	    if (browser.transitions && options.continuous && slides.length < 3) {
	      element.appendChild(slides[0].cloneNode(true));
	      element.appendChild(element.children[1].cloneNode(true));
	      slides = element.children;
	    }

	    // create an array to store current positions of each slide
	    slidePos = new Array(slides.length);

	    // determine width of each slide
	    width = container.getBoundingClientRect().width || container.offsetWidth;

	    element.style.width = slides.length * width + 'px';

	    // stack elements
	    var pos = slides.length;
	    while (pos--) {

	      var slide = slides[pos];

	      slide.style.width = width + 'px';
	      slide.setAttribute('data-index', pos);

	      if (browser.transitions) {
	        slide.style.left = pos * -width + 'px';
	        move(pos, index > pos ? -width : index < pos ? width : 0, 0);
	      }
	    }

	    // reposition elements before and after index
	    if (options.continuous && browser.transitions) {
	      move(circle(index - 1), -width, 0);
	      move(circle(index + 1), width, 0);
	    }

	    if (!browser.transitions) element.style.left = index * -width + 'px';

	    container.style.visibility = 'visible';
	  }

	  function _prev() {

	    if (options.continuous) _slide(index - 1);else if (index) _slide(index - 1);
	  }

	  function _next() {

	    if (options.continuous) _slide(index + 1);else if (index < slides.length - 1) _slide(index + 1);
	  }

	  function circle(index) {

	    // a simple positive modulo using slides.length
	    return (slides.length + index % slides.length) % slides.length;
	  }

	  function _slide(to, slideSpeed) {

	    // do nothing if already on requested slide
	    if (index == to) return;

	    if (browser.transitions) {

	      var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward

	      // get the actual position of the slide
	      if (options.continuous) {
	        var natural_direction = direction;
	        direction = -slidePos[circle(to)] / width;

	        // if going forward but to < index, use to = slides.length + to
	        // if going backward but to > index, use to = -slides.length + to
	        if (direction !== natural_direction) to = -direction * slides.length + to;
	      }

	      var diff = Math.abs(index - to) - 1;

	      // move all the slides between index and to in the right direction
	      while (diff--) {
	        move(circle((to > index ? to : index) - diff - 1), width * direction, 0);
	      }to = circle(to);

	      move(index, width * direction, slideSpeed || speed);
	      move(to, 0, slideSpeed || speed);

	      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
	    } else {

	      to = circle(to);
	      animate(index * -width, to * -width, slideSpeed || speed);
	      //no fallback for a circular continuous if the browser does not accept transitions
	    }

	    index = to;
	    offloadFn(options.callback && options.callback(index, slides[index]));
	  }

	  function move(index, dist, speed) {

	    translate(index, dist, speed);
	    slidePos[index] = dist;
	  }

	  function translate(index, dist, speed) {

	    var slide = slides[index];
	    var style = slide && slide.style;

	    if (!style) return;

	    style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = speed + 'ms';

	    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
	    style.msTransform = style.MozTransform = style.OTransform = 'translateX(' + dist + 'px)';
	  }

	  function animate(from, to, speed) {

	    // if not an animation, just reposition
	    if (!speed) {

	      element.style.left = to + 'px';
	      return;
	    }

	    var start = +new Date();

	    var timer = setInterval(function () {

	      var timeElap = +new Date() - start;

	      if (timeElap > speed) {

	        element.style.left = to + 'px';

	        if (delay) begin();

	        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

	        clearInterval(timer);
	        return;
	      }

	      element.style.left = (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px';
	    }, 4);
	  }

	  // setup auto slideshow
	  var delay = options.auto || 0;
	  var interval;

	  function begin() {

	    interval = setTimeout(_next, delay);
	  }

	  function _stop() {

	    delay = 0;
	    clearTimeout(interval);
	  }

	  // setup initial vars
	  var _start = {};
	  var delta = {};
	  var isScrolling;

	  // setup event capturing
	  var events = {

	    handleEvent: function handleEvent(event) {

	      switch (event.type) {
	        case 'touchstart':
	          this.start(event);break;
	        case 'touchmove':
	          this.move(event);break;
	        case 'touchend':
	          offloadFn(this.end(event));break;
	        case 'webkitTransitionEnd':
	        case 'msTransitionEnd':
	        case 'oTransitionEnd':
	        case 'otransitionend':
	        case 'transitionend':
	          offloadFn(this.transitionEnd(event));break;
	        case 'resize':
	          offloadFn(_setup);break;
	      }

	      if (options.stopPropagation) event.stopPropagation();
	    },
	    start: function start(event) {

	      var touches = event.touches[0];

	      // measure start values
	      _start = {

	        // get initial touch coords
	        x: touches.pageX,
	        y: touches.pageY,

	        // store time to determine touch duration
	        time: +new Date()

	      };

	      // used for testing first move event
	      isScrolling = undefined;

	      // reset delta and end measurements
	      delta = {};

	      // attach touchmove and touchend listeners
	      element.addEventListener('touchmove', this, false);
	      element.addEventListener('touchend', this, false);
	    },
	    move: function move(event) {

	      // ensure swiping with one touch and not pinching
	      if (event.touches.length > 1 || event.scale && event.scale !== 1) return;

	      if (options.disableScroll) event.preventDefault();

	      var touches = event.touches[0];

	      // measure change in x and y
	      delta = {
	        x: touches.pageX - _start.x,
	        y: touches.pageY - _start.y
	      };

	      // determine if scrolling test has run - one time test
	      if (typeof isScrolling == 'undefined' && (Math.abs(delta.x) > scrollHold || Math.abs(delta.y) > scrollHold)) {
	        isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
	      }

	      // if user is not trying to scroll vertically
	      if (!isScrolling) {

	        // prevent native scrolling
	        event.preventDefault();

	        // stop slideshow
	        _stop();

	        // increase resistance if first or last slide
	        if (options.continuous) {
	          // we don't add resistance at the end

	          translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
	          translate(index, delta.x + slidePos[index], 0);
	          translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);
	        } else {

	          delta.x = delta.x / (!index && delta.x > 0 // if first slide and sliding left
	          || index == slides.length - 1 // or if last slide and sliding right
	          && delta.x < 0 // and if sliding at all
	          ? Math.abs(delta.x) / width + 1 : // determine resistance level
	          1); // no resistance if false

	          // translate 1:1
	          translate(index - 1, delta.x + slidePos[index - 1], 0);
	          translate(index, delta.x + slidePos[index], 0);
	          translate(index + 1, delta.x + slidePos[index + 1], 0);
	        }
	      }
	    },
	    end: function end(event) {

	      // measure duration
	      var duration = +new Date() - _start.time;

	      // determine if slide attempt triggers next/prev slide
	      var isValidSlide = Number(duration) < 250 // if slide duration is less than 250ms
	      && Math.abs(delta.x) > 20 // and if slide amt is greater than 20px
	      || Math.abs(delta.x) > width / 2; // or if slide amt is greater than half the width

	      // determine if slide attempt is past start and end
	      var isPastBounds = !index && delta.x > 0 // if first slide and slide amt is greater than 0
	      || index == slides.length - 1 && delta.x < 0; // or if last slide and slide amt is less than 0

	      if (options.continuous) isPastBounds = false;

	      // determine direction of swipe (true:right, false:left)
	      var direction = delta.x < 0;

	      // if not scrolling vertically
	      if (!isScrolling) {

	        if (isValidSlide && !isPastBounds) {

	          if (direction) {

	            if (options.continuous) {
	              // we need to get the next in this direction in place

	              move(circle(index - 1), -width, 0);
	              move(circle(index + 2), width, 0);
	            } else {
	              move(index - 1, -width, 0);
	            }

	            move(index, slidePos[index] - width, speed);
	            move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
	            index = circle(index + 1);
	          } else {
	            if (options.continuous) {
	              // we need to get the next in this direction in place

	              move(circle(index + 1), width, 0);
	              move(circle(index - 2), -width, 0);
	            } else {
	              move(index + 1, width, 0);
	            }

	            move(index, slidePos[index] + width, speed);
	            move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
	            index = circle(index - 1);
	          }

	          options.callback && options.callback(index, slides[index]);
	        } else {

	          if (options.continuous) {

	            move(circle(index - 1), -width, speed);
	            move(index, 0, speed);
	            move(circle(index + 1), width, speed);
	          } else {

	            move(index - 1, -width, speed);
	            move(index, 0, speed);
	            move(index + 1, width, speed);
	          }
	        }
	      }

	      // kill touchmove and touchend event listeners until touchstart called again
	      element.removeEventListener('touchmove', events, false);
	      element.removeEventListener('touchend', events, false);
	    },
	    transitionEnd: function transitionEnd(event) {

	      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

	        if (delay) begin();

	        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
	      }
	    }

	  };

	  // trigger setup
	  _setup();

	  // start auto slideshow if applicable
	  if (delay) begin();

	  // add event listeners
	  if (browser.addEventListener) {

	    // set touchstart event on element
	    if (browser.touch) element.addEventListener('touchstart', events, false);

	    if (browser.transitions) {
	      element.addEventListener('webkitTransitionEnd', events, false);
	      element.addEventListener('msTransitionEnd', events, false);
	      element.addEventListener('oTransitionEnd', events, false);
	      element.addEventListener('otransitionend', events, false);
	      element.addEventListener('transitionend', events, false);
	    }

	    // set resize event on window
	    window.addEventListener('resize', events, false);
	  } else {

	    window.onresize = function () {
	      _setup();
	    }; // to play nice with old IE
	  }

	  // expose the Swipe API
	  return {
	    setup: function setup() {

	      _setup();
	    },
	    slide: function slide(to, speed) {

	      // cancel slideshow
	      _stop();

	      _slide(to, speed);
	    },
	    prev: function prev() {

	      // cancel slideshow
	      _stop();

	      _prev();
	    },
	    next: function next() {

	      // cancel slideshow
	      _stop();

	      _next();
	    },
	    stop: function stop() {

	      // cancel slideshow
	      _stop();
	    },
	    getPos: function getPos() {

	      // return current index position
	      return index;
	    },
	    getNumSlides: function getNumSlides() {

	      // return total number of slides
	      return length;
	    },
	    kill: function kill() {

	      // cancel slideshow
	      _stop();

	      // reset element
	      element.style.width = '';
	      element.style.left = '';

	      // reset slides
	      var pos = slides.length;
	      while (pos--) {

	        var slide = slides[pos];
	        slide.style.width = '';
	        slide.style.left = '';

	        if (browser.transitions) translate(pos, 0, 0);
	      }

	      // removed event listeners
	      if (browser.addEventListener) {

	        // remove current event listeners
	        element.removeEventListener('touchstart', events, false);
	        element.removeEventListener('webkitTransitionEnd', events, false);
	        element.removeEventListener('msTransitionEnd', events, false);
	        element.removeEventListener('oTransitionEnd', events, false);
	        element.removeEventListener('otransitionend', events, false);
	        element.removeEventListener('transitionend', events, false);
	        window.removeEventListener('resize', events, false);
	      } else {

	        window.onresize = null;
	      }
	    }
	  };
	}

	exports.default = Swipe;

/***/ },
/* 275 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);