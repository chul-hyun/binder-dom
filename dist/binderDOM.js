define('check',[],function () {
  function nulled(thing) {
    return thing === null
  }

  function defined(thing) {
    return thing !== undefined
  }

  function boolean(thing) {
    return typeof thing === "boolean"
  }

  function object(thing) {
    return typeof thing === 'object' && !nulled(thing) && !array(thing) && !date(thing) && !dom(thing)
  }

  function array(thing) {
    if (Array.isArray) {
      return Array.isArray(thing)
    }
    return Object.prototype.toString.call(thing) === '[object Array]'
  }

  function likeArray(thing) {
    if (!(array(thing) || object(thing))) {
      return false
    }
    var length = thing.length
    return array(thing) || (object(thing) && intNumber(length) && (length === 0 || positiveNumber(length)))
  }

  function arg(thing) {
    return object(thing) && positiveNumber(thing.length)
  }

  function date(thing) {
    return Object.prototype.toString.call(thing) === '[object Date]'
  }

  function fn(thing) {
    return typeof thing === 'function'
  }

  function webUrl(thing) {
    return unemptyString(thing) && /^https?:\/\/.+/.test(thing)
  }

  function gitUrl(thing) {
    return unemptyString(thing) && /^git\+(ssh|https?):\/\/.+/.test(thing)
  }

  function email(thing) {
    return unemptyString(thing) && /\S+@\S+/.test(thing)
  }

  function unemptyString(thing) {
    return string(thing) && thing !== ''
  }

  function string(thing) {
    return typeof thing === 'string'
  }

  function oddNumber(thing) {
    return number(thing) && (thing % 2 === 1 || thing % 2 === -1)
  }

  function evenNumber(thing) {
    return number(thing) && thing % 2 === 0
  }

  function intNumber(thing) {
    return number(thing) && thing % 1 === 0
  }

  function floatNumber(thing) {
    return number(thing) && thing % 1 !== 0
  }

  function positiveNumber(thing) {
    return number(thing) && thing > 0
  }

  function negativeNumber(thing) {
    return number(thing) && thing < 0
  }

  function number(thing) {
    return typeof thing === 'number' &&
      isNaN(thing) === false &&
      thing !== Number.POSITIVE_INFINITY &&
      thing !== Number.NEGATIVE_INFINITY
  }

  function dom(thing) {
    return typeof Node === "object" ? thing instanceof Node :
      thing && typeof thing === "object" && typeof thing.nodeType === "number" && typeof thing.nodeName === "string"
  }

  var check = {
    'defined': defined,
    'boolean': boolean,
    'bool': boolean,
    'object': object,
    'obj': object,
    'array': array,
    'arr': array,
    'likeArray': likeArray,
    'likeArr': likeArray,
    'arguments': arg,
    'arg': arg,
    'date': date,
    'fn': fn,
    'function': fn,
    'webUrl': webUrl,
    'gitUrl': gitUrl,
    'email': email,
    'unemptyString': unemptyString,
    'string': string,
    'str': string,
    'oddNumber': oddNumber,
    'odd': oddNumber,
    'evenNumber': evenNumber,
    'even': evenNumber,
    'intNumber': intNumber,
    'int': intNumber,
    'floatNumber': floatNumber,
    'float': floatNumber,
    'positiveNumber': positiveNumber,
    'positive': positiveNumber,
    'negativeNumber': negativeNumber,
    'negative': negativeNumber,
    'number': number,
    'num': number,
    'dom': dom
  };

  (function setUn_method(check) {
    for (var methodName in check) {
      check['un' + methodName] = (function (checker) {
        return function () {
          return !checker.apply(this, arguments)
        }
      })(check[methodName])
    }
  })(check)

  function initObj(targetObj, defaultObj) {
    if (!(object(targetObj) || array(targetObj)) && !(object(defaultObj) || array(defaultObj))) {
      throw TypeError()
    }

    for (var prop in defaultObj) {
      initObj(targetObj[prop], defaultObj[prop])
      targetObj[prop] = (targetObj[prop] === undefined) ? defaultObj[prop] : targetObj[prop]
    }
  }

  check.initObj = initObj

  return check
});

define('check',[],function () {
  function nulled(thing) {
    return thing === null;
  }

  function defined(thing) {
    return thing !== undefined
  }

  function object(thing) {
    return typeof thing === 'object' && !nulled(thing) && !array(thing) && !date(thing) && !dom(thing)
  }

  function array(thing) {
    if (Array.isArray) {
      return Array.isArray(thing)
    }
    return Object.prototype.toString.call(thing) === '[object Array]'
  }

  function arguments(thing) {
    return object(thing) && positiveNumber(thing.length)
  }

  function date(thing) {
    return Object.prototype.toString.call(thing) === '[object Date]'
  }

  function fn(thing) {
    return typeof thing === 'function'
  }

  function webUrl(thing) {
    return unemptyString(thing) && /^https?:\/\/.+/.test(thing)
  }

  function gitUrl(thing) {
    return unemptyString(thing) && /^git\+(ssh|https?):\/\/.+/.test(thing)
  }

  function email(thing, msg) {
    return unemptyString(thing) && /\S+@\S+/.test(thing)
  }

  function unemptyString(thing, msg) {
    return string(thing) && thing !== ''
  }

  function string(thing, msg) {
    return typeof thing === 'string'
  }

  function oddNumber(thing, msg) {
    return number(thing) && (thing % 2 === 1 || thing % 2 === -1)
  }

  function evenNumber(thing, msg) {
    return number(thing) && thing % 2 === 0
  }

  function intNumber(thing, msg) {
    return number(thing) && thing % 1 === 0
  }

  function floatNumber(thing, msg) {
    return number(thing) && thing % 1 !== 0
  }

  function positiveNumber(thing, msg) {
    return number(thing) && thing > 0
  }

  function negativeNumber(thing, msg) {
    return number(thing) && thing < 0
  }

  function number(thing, msg) {
    return typeof thing === 'number' &&
      isNaN(thing) === false &&
      thing !== Number.POSITIVE_INFINITY &&
      thing !== Number.NEGATIVE_INFINITY
  }

  function dom(thing, msg) {
    return typeof Node === "object" ? thing instanceof Node :
      thing && typeof thing === "object" && typeof thing.nodeType === "number" && typeof thing.nodeName === "string"
  }

  var check = {
    'defined': defined,
    'object': object,
    'obj': object,
    'array': array,
    'arr': array,
    'arguments': arguments,
    'arg': arguments,
    'date': date,
    'fn': fn,
    'function': fn,
    'webUrl': webUrl,
    'gitUrl': gitUrl,
    'email': email,
    'unemptyString': unemptyString,
    'string': string,
    'str': string,
    'oddNumber': oddNumber,
    'odd': oddNumber,
    'evenNumber': evenNumber,
    'even': evenNumber,
    'intNumber': intNumber,
    'int': intNumber,
    'floatNumber': floatNumber,
    'float': floatNumber,
    'positiveNumber': positiveNumber,
    'positive': positiveNumber,
    'negativeNumber': negativeNumber,
    'negative': negativeNumber,
    'number': number,
    'num': number,
    'dom': dom
  };

  (function setUn_method(check) {
    for (var methodName in check) {
      check['un' + methodName] = (function (checker) {
        return function () {
          return !checker.apply(this, arguments)
        }
      })(check[methodName])
    }
  })(check)

  function initObj(targetObj, defaultObj) {
    if (!(object(targetObj) || array(targetObj)) && !(object(defaultObj) || array(defaultObj))) {
      throw TypeError()
    }

    for (var prop in defaultObj) {
      initObj(targetObj[prop], defaultObj[prop])
      targetObj[prop] = (targetObj[prop] === undefined) ? defaultObj[prop] : targetObj[prop]
    }
  }

  check.initObj = initObj

  return check
});

define('loop',['check'], function (check) {
  function loop(o, callback, self) {
    self = !!self ? self : o
    if (check.array(o) || check.likeArray(o)) {
      for (var i = 0, len = o.length ; i < len ; i++) {
        if (callback.call(self, o[i], i) === false) {
          return false
        }
      }
    }
    else if (check.object(o)) {
      for (var propName in o) {
        if (o.hasOwnProperty(propName)) {
          if (callback.call(self, o[propName], propName) === false) {
            return false
          }
        }
      }
    }
    else {
      throw TypeError()
    }

    return true
  }

  return loop
});

define('method/$$infoApply',['loop', 'check'], function (loop, check) {
  function $$infoApply(info) {
    var value

    if (!(check.array(info.applyInfos) || check.object(info.applyInfos))){
      return
    }

    loop(info.applyInfos, function (applyInfo) {
      try {
        value = (applyInfo.apply).apply(this.$$values, applyInfo.args)
      } catch (e) {
        console.log(e)
      }
      if (value !== undefined) {
        applyInfo.self = value
      }

    }, this)
  }

  return $$infoApply
});
define('method/$apply',['method/$$infoApply'], function ($$infoApply) {
  function $apply(propName){
    var info = this.$$binderInfos[propName]

    $$infoApply.call(this, info)
  }

  return $apply
});
/*
Fork jQuery (http://jquery.com/)
*/
define('module/extend',['check'], function (check) {
  function extend() {
    var options, name, src, copy, copyIsArray, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (check.boolean(target)) {
      deep = target;

      // skip the boolean and the target
      target = arguments[ i ] || {};
      i++;
    }

    for ( ; i < length; i++ ) {
      // Only deal with non-null/undefined values
      if ( (options = arguments[ i ]) != null ) {
        // Extend the base object
        for ( name in options ) {
          src = target[ name ];
          copy = options[ name ];

          // Prevent never-ending loop
          if ( target === copy ) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (check.object(copy) || (copyIsArray = check.array(copy)))) {
            if ( copyIsArray ) {
              copyIsArray = false;
              clone = src && check.array(src) ? src : [];

            } else {
              clone = src && check.object(src) ? src : {};
            }

            // Never move original objects, clone them
            target[ name ] = extend( deep, clone, copy );

            // Don't bring in undefined values
          } else if ( copy !== undefined ) {
            target[ name ] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  }

  return extend
});
define('module/clone',['check'], function (check) {
  function clone(obj) {
    var copy

    // Handle Function
    if (check.function(obj)) {
      copy = function(){
        obj.apply(this, arguments)
      }
      return copy;
    }

    // Handle Date
    if (check.date(obj)) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (check.array(obj)) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (check.object(obj)) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
      }
      return copy;
    }

    return obj
  }

  return clone
});
define('module/observeProp',['loop', 'check'], function (loop, check) {
  var infos = [],
      intervalID = -1,
      delay = 10

  function on(obj, observeFn) {
    var propNames = getPropNames(obj)
    infos.push([obj, propNames, observeFn])
  }

  function off(obj, observeFn) {
    function checkRemoveProp(info) {
      if (
        (obj === info[0] || obj === undefined || obj === true) &&
        (observeFn === info[1] || observeFn === undefined || observeFn === true)){
        return false
      }
      return true
    }
    infos = infos.filter(checkRemoveProp)
  }

  function getPropNames(obj){
    var propNames = []
    loop(obj, function(prop, propName){
      propNames.push(propName)
    })

    return propNames
  }

  function start() {
    if (intervalID === -1) {
      intervalID = setInterval(checkChange, delay)
    }
  }

  function stop() {
    if (intervalID !== -1) {
      clearInterval(this._checkerID)
      intervalID = -1
    }
  }

  function checkChange() {
    loop(infos, function (info) {
      var added = false
        , removed = false
        , addedPropName
        , removedPropName
        , removedPorpIndex
        , obj = info[0]
        , propNames = info[1]
        , observeFn = info[2]

      added = !loop(obj, function (prop, propName) {
        newPropName = propName
        return !loop(propNames, function (savePropName) {
          return !(propName === savePropName)
        })
      })

      if (added){
        propNames.push(newPropName)
        if (check.function(observeFn.added)){
          observeFn.added.call(obj, newPropName)
        }
      }
      

      removed = !loop(propNames, function (savePropName, i) {
        oldPropName = savePropName
        removedPorpIndex = i
        return !loop(obj, function (prop, propName) {
          return !(propName === savePropName)
        })
      })

      if (removed) {
        propNames.splice(removedPorpIndex, 1)
        if (check.function(observeFn.removed)) {
          observeFn.removed.call(obj, oldPropName)
        }
      }
    })
  }

  return {
    on: on,
    off: off,
    delay: delay,
    start: start,
    stop: stop
  }
});
define('module/hideProp',[],function(){
  function hideProp(obj, propName, value) {
    Object.defineProperty(obj, propName, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  }
  return hideProp
});
define('module/observeUtil',['module/clone', 'check', 'loop', 'module/observeProp', 'module/hideProp'],
  function (clone, check, loop, observeProp, hideProp) {
    observeProp.start()

    function defineGetAndSet(obj, name, getFn, setFn) {
      release(obj, name)
      obj.$$getter[name].push(getFn)
      obj.$$setter[name].push(setFn)
    }

    function release(obj, name) {

      if (check.defined(obj.$$setter) && check.defined(obj.$$setter[name]) &&
        check.defined(obj.$$getter) && check.defined(obj.$$getter[name])) {
        return
      }
      
      if (check.undefined(obj.$$getter)) {
        hideProp(obj, '$$getter', {})
        hideProp(obj, '$$setter', {})
      }

      obj.$$setter[name] = []
      obj.$$getter[name] = []
      var value = obj[name]
        , oldValue
      
      try {
        // Modern browsers, IE9+, and IE8 (must be a DOM object),
        Object.defineProperty(obj, name, {
          enumerable: true,
          get: getter,
          set: setter
        })
        // Older Mozilla
      } catch (e) {
        obj.__defineGetter__(name, getter)
        obj.__defineSetter__(name, setter)
      }


      function getter() {
        var pass = value
        loop(obj.$$getter[name], function ($$getter) {
          pass = $$getter(pass, value, oldValue)
        })
        return pass
      }

      function setter(newValue) {
        
        function set(setValue){
          value = setValue
        }
        var temp = clone(value)
        loop(obj.$$setter[name], function ($$setter) {
          $$setter(newValue, value, oldValue, set)
        })
        oldValue = temp
      }
      
    }

    function defineObserve(obj, propName, observeFn, self, deep, track) {
      self = (self === undefined) ? obj : self
      deep = (deep === undefined) ? true : deep
      track = (track === undefined) ? [propName] : track
      var value = obj[propName]
      
      if (deep && (check.object(value) || check.array(value))) {
        loop(value, function (prop, name) {
          defineObserve(value, name, observeFn, self, deep, track.concat([name]))
        })
        observeProp.on(value, {
          added: function (addedPropName) {
            defineObserve(value, addedPropName, observeFn, self, deep, track.concat([addedPropName]))
            observeFn.call(self, value, undefined, track)
          },
          removed: function (removedPropName) {
            observeFn.call(self, undefined, undefined, track.concat([removedPropName]))
          }
        })
      }
      
      var setter = function (newValue, value, oldValue, set) {
        /* 값의 형식이 value <-> object 로 변환시

        if (check.object(value) || check.array(value)) {
          loop(value, function (prop, name) {
            //해제
          })
        }
        
        if (deep && (check.object(newValue) || check.array(newValue))) {
          loop(newValue, function (prop, name) {
            defineObserve(newValue, name, observeFn, self, deep, track.concat([name]))
          })
          observeProp.on(newValue, {
            added: function (addedPropName) {
              defineObserve(newValue, addedPropName, observeFn, self, deep, track.concat([addedPropName]))
              observeFn.call(self, newValue, oldValue, track)
            },
            removed: function (removedPropName) {
              observeFn.call(self, newValue, oldValue, track.concat([removedPropName]))
            }
          })
        */

        set(newValue)
        observeFn.call(self, newValue, value, track)
      }

      var getter = function (pass) {
        return pass
      }

      defineGetAndSet(obj, propName, getter, setter)
    }

    function connectObj(sourceObj, sourcePropName, obj, propName) {
      propName = (propName === undefined) ? sourcePropName : propName
     
      defineGetAndSet(obj, propName, 
        function () { return sourceObj[sourcePropName] },
        function (newValue) {
          sourceObj[sourcePropName] = newValue
        })
    }

    return {
      defineGetAndSet: defineGetAndSet,
      defineObserve: defineObserve,
      connectObj: connectObj,
      release: release
    }
  });
define('module/observe',['module/clone'], function (clone) {
  var infos       = [],
      intervalID  = -1,
      delay       = 10

  function on(obj, propName, observeFn, self){
    self = !!self ? self : obj
    infos.push([obj, propName, observeFn, self, clone(obj[propName])])
  }

  function off(obj, propName, observeFn, self) {
    function checkRemoveProp(value){
      if (
        (obj === value[0] || obj === undefined || obj === true) &&
        (propName === value[1] || propName === undefined || propName === true) &&
        (observeFn === value[2] || observeFn === undefined || observeFn === true) &&
        (self === value[3] || self === undefined || self === true)) {
        return false
      }
      return true
    }
    infos = infos.filter(checkRemoveProp)
  }


  function checkChange(){
    infos.forEach(function(info){
      var value     = (info[0])[info[1]]
        , observeFn = info[2]
        , self      = info[3]
        , oldValue  = info[4]

      if (!deepCompare(value, oldValue)) {
        observeFn.call(self, value, oldValue)
        info[4] = clone(value)
      }
    })
  }

  function start(){
    if (intervalID === -1){
      intervalID = setInterval(checkChange, delay)
    }
  }

  function stop() {
    if (intervalID !== -1) {
      clearInterval(this._checkerID)
      intervalID = -1
    }
  }

  function deepCompare() {
    var i, l, leftChain, rightChain;

    function compare2Objects(x, y) {
      var p;

      // remember that NaN === NaN returns false
      // and isNaN(undefined) returns true
      if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
        return true;
      }

      // Compare primitives and functions.     
      // Check if both arguments link to the same object.
      // Especially useful on step when comparing prototypes
      if (x === y) {
        return true;
      }

      // Works in case when functions are created in constructor.
      // Comparing dates is a common scenario. Another built-ins?
      // We can even handle functions passed across iframes
      if ((typeof x === 'function' && typeof y === 'function') ||
         (x instanceof Date && y instanceof Date) ||
         (x instanceof RegExp && y instanceof RegExp) ||
         (x instanceof String && y instanceof String) ||
         (x instanceof Number && y instanceof Number)) {
        return x.toString() === y.toString();
      }

      // At last checking prototypes as good a we can
      if (!(x instanceof Object && y instanceof Object)) {
        return false;
      }

      if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
        return false;
      }

      if (x.constructor !== y.constructor) {
        return false;
      }

      if (x.prototype !== y.prototype) {
        return false;
      }

      // check for infinitive linking loops
      if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
        return false;
      }

      // Quick checking of one object beeing a subset of another.
      // todo: cache the structure of arguments[0] for performance
      for (p in y) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
          return false;
        }
      }

      for (p in x) {
        if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
          return false;
        }
        else if (typeof y[p] !== typeof x[p]) {
          return false;
        }

        switch (typeof (x[p])) {
          case 'object':
          case 'function':

            leftChain.push(x);
            rightChain.push(y);

            if (!compare2Objects(x[p], y[p])) {
              return false;
            }

            leftChain.pop();
            rightChain.pop();
            break;

          default:
            if (x[p] !== y[p]) {
              return false;
            }
            break;
        }
      }

      return true;
    }

    if (arguments.length < 1) {
      return true; //Die silently? Don't know how to handle such case, please help...
      // throw "Need two or more arguments to compare";
    }

    for (i = 1, l = arguments.length; i < l; i++) {

      leftChain = []; //todo: this can be cached
      rightChain = [];

      if (!compare2Objects(arguments[0], arguments[i])) {
        return false;
      }
    }

    return true;
  }

  return {
    on: on,
    off: off,
    delay: delay,
    start: start,
    stop: stop
  }
});
define('method/$isBinder',['check'],function(check){
  function $isBinder(target){
    if(check.object(target) && 
      target.hasOwnProperty('$$binderInfos') && 
      target.hasOwnProperty('$$values') &&
      target.hasOwnProperty('$old')) {
      return true
    }
    return false
  }

  return $isBinder
});
define('method/registProp',['loop', 'check', 'module/extend', 'module/clone', 'module/observeUtil', 'module/observe', 'method/$isBinder'],
  function (loop, check, extend, clone, observeUtil, observe, $isBinder) {
    observe.start()

    var PropInfoDefault = { //속성 기본 구조.
      'value': undefined,
      'applyInfos': [],
      'dependenceApplys': []
    }
    , PropOptionDefault = { //옵션 기본 구조.
      'value': undefined,
      'applys': [],
      'private': false,
      'isDOM':false
    }
    , ApplyInfoDefault = { //apply속성 기본 구조.
      'apply': undefined,
      'argNames': [],
      'args': [],
      'self': undefined
    }

    function registProp(inputOptions) {
      var infos   = this.$$binderInfos 
        , values  = this.$$values

      //입력 옵션 초기화
      loop(inputOptions, function (option, propName) {
        inputOptions[propName] = initOption(option, propName)
      })

      //infos 초기화
      loop(inputOptions, function (option, propName) {
        initInfos(infos, propName)
      })

      //값(vlaue) 초기화.
      loop(inputOptions, function (option, propName) {
        var info = infos[propName]
        if (info.value === undefined && option.value !== undefined) {
          info.value = option.value
        }
      }, this)

      loop(inputOptions, function (option, propName) {
        var info = infos[propName]

        // values객체 설정 및 private값에 따라 this[propName]값 설정.
        observeUtil.connectObj(info, 'value', values, propName)
        if (!option.private) {
          observeUtil.connectObj(info, 'value', this, propName)
        }

        //applyInfos속성 설정
        if (check.array(option.applys)){
          loop(option.applys,function(apply, i){
            info.applyInfos[i] = initApplyInfo.call(this, apply, info, values, propName)
          }, this)
        } else if (check.function(option.applys)){
          info.applyInfos[0] = initApplyInfo.call(this, option.applys, info, values, propName)
        }else{
          throw new TypeError()
        }
        
      }, this)

      //dependenceApplys 속성 설정.
      loop(inputOptions, function (option, propName) {
        registDependenceApply.call(this, propName, infos)
      }, this)

      //값변경시 apply가 자동 실행되도록 등록.
      loop(inputOptions, function (option, propName) {
        var info = infos[propName]
        observeApply.call(this, info, propName)
      }, this)

      //새로 등록된 속성들의 의존값이 설정 됬을시 $apply 실행.
      loop(inputOptions, function (option, propName) {
        loop(infos[propName].applyInfos, function (applyInfo) {
          return loop(applyInfo.argNames, function (dependencePropName) {
            if (values[dependencePropName] !== undefined) { //의존값이 설정됬을시
              this.$apply(propName)
              return false
            }
          }, this)
        }, this)
      }, this)
    }

    function initOption(option, propName) {
      var temp = clone(PropOptionDefault)

      if (check.object(option) && !$isBinder(option)) {
        temp.value    = (option.value === undefined)  ? temp.value   : option.value
        temp.applys   = (option.applys === undefined) ? temp.applys  : option.applys
        temp.private  = (option.private === undefined)? temp.private : option.private
        temp.isDOM    = (option.isDOM === undefined)  ? temp.isDOM   : option.isDOM
      } else if(check.function(option)){
        temp.applys.push(option)
      } else {
        temp.value = option
      }

      return temp
    }

    function initInfos(infos, propName) {
      if (infos.hasOwnProperty(propName)) {
        throw Error()
      }
      infos[propName] = extend({}, clone(PropInfoDefault), infos[propName])
    }

    function initApplyInfo(inputApply, info, values, propName) {
      var tempApplyInfo, argNames, apply
      
      if (check.array(inputApply)) {
        apply = inputApply.pop()
        argNames = inputApply
      } else if (check.function(inputApply)) {
        apply = inputApply
        argNames = getArgNames(apply)
      } else {
        throw new TypeError()
      }

      tempApplyInfo = clone(ApplyInfoDefault)
      tempApplyInfo.apply = apply
      tempApplyInfo.args = getPropNamesConnect(values, argNames)
      tempApplyInfo.argNames = argNames
      observeUtil.connectObj(values, propName, tempApplyInfo, 'self')

      return tempApplyInfo
    }

    function getPropNamesConnect(values, propNames) {
      var result = []
        , i = 0
      loop(propNames, function (propName) {
        observeUtil.connectObj(values, propName, result, i++)
      })
      return result
    }

    function observeApply(info, propName) {
      observeUtil.defineObserve(info, 'value', (function (propName) {
        return function (newValue, oldValue, track) {
          this.$old[track.join('.')] = oldValue
          this.$dependenceApply(propName)
        }
      })(propName), this, true, [propName])
    }

    function registDependenceApply(propName, infos) {
      var targetInfo, len
      loop(infos[propName].applyInfos, function (applyInfo) {
        loop(applyInfo.argNames, function (argName) {
          targetInfo = infos[argName] = !!infos[argName] ? infos[argName] : {}
          targetInfo.dependenceApplys = !!targetInfo.dependenceApplys ? targetInfo.dependenceApplys : []
          len = targetInfo.dependenceApplys.length++
          observeUtil.connectObj(infos, propName, targetInfo.dependenceApplys, len)
        })
      })
    }

    function getArgNames(fn) {
      if (fn === undefined) {
        return [];
      }
      var fnText = fn.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, '')
      var argDecl = fnText.match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)
      var argStr = (argDecl[1]).replace(/\s/g, '')
      if (argStr == '') {
        return []
      }

      return argStr.split(',')
    }

    return registProp
  });
define('method/merge',['loop', 'check', 'module/observeUtil'],
  function (loop, check, observeUtil) {
    var MergeDefault = {
      propName: undefined,
      private: false
    }

    function merge(binderObj, options) {
      option = initOption(binderObj, options)

      var mergePropName
      loop(option, function (prop, name) {
        mergePropName = prop.propName
        mergeDependenceApplys(binderObj.$$binderInfos[mergePropName], this.$$binderInfos[name])
        observeUtil.connectObj(binderObj.$$binderInfos, mergePropName, this.$$binderInfos, name)
        observeUtil.connectObj(binderObj.$$values, mergePropName, this.$$values, name)
        if (!prop.private) {
          observeUtil.connectObj(binderObj.$$values, mergePropName, this, name)
        }
      }, this)

      loop(option, function (prop, name) {
        this.$dependenceApply(name)
      },this)
    }

    function mergeDependenceApplys(src, dest) {
      if (!!dest && !!dest.dependenceApplys) {
        Array.prototype.push.apply(src.dependenceApplys, dest.dependenceApplys)
      }
    }

    function initOption(binderObj, options) {
      var result = {}
      if (check.object(options)) {
        loop(options, function (option, name) {
          result[name] = {
            propName: (option.propName !== undefined) ? option.propName : option,
            private: (option.private !== undefined) ? option.private : MergeDefault.private
          }
        })
      } else if (check.array(options)) {
        loop(options, function (name) {
          result[name] = {
            propName: name,
            private: MergeDefault.private
          }
        })
      } else {
        loop(binderObj, function (p, name) {
          if (name === '$$binderInfos' || name === '$$values' || name === '$old') {
            return true
          }
          result[name] = {
            propName: name,
            private: MergeDefault.private
          }
        })
      }
      return result
    }

    return merge
  });
define('method/$regist',['loop', 'method/registProp', 'method/merge'],
  function (loop, registProp, merge) {

    function $regist() {
      if (this.$isBinder(arguments[0])) {
        merge.apply(this, arguments)
      } else {
        registProp.apply(this, arguments)
      }
    }

    return $regist
  });
define('method/$dependenceApply',['loop', 'method/$$infoApply'], function (loop, $$infoApply) {
  function $dependenceApply(propName) {
    var info = this.$$binderInfos[propName]
    loop(info.dependenceApplys, function (dependencePropInfo) {
      $$infoApply.call(this, dependencePropInfo)
    }, this)
  }

  return $dependenceApply
});
define('binder',['check', 'method/$apply', 'method/$regist', 'method/$isBinder', 'method/$dependenceApply', 'module/hideProp', 'module/clone'],
  function (check, $apply, $regist, $isBinder, $dependenceApply, hideProp, clone) {
    function binder(config) {
      if (check.object(config)) {
        var registConfig = clone(config)
        config = function(){
          this.$regist(registConfig)
        }
      }
      
      if(check.unfunction(config)) {
        throw new TypeError();
      }

      function binderCreater() {
        var self = Object.create(binder.prototype);

        hideProp(self, '$$binderInfos', {})
        hideProp(self, '$$values', Object.create(binder.prototype))
        hideProp(self, '$old', {})
        hideProp(self.$$values, '$old', self.$old)

        config.apply(self, arguments)
        return self;
      }

      return binderCreater;
    }

    binder.prototype = {
      $apply            : $apply,
      $regist           : $regist,
      $isBinder         : $isBinder,
      $dependenceApply  : $dependenceApply
    }

    return binder;
  });

define('module/tmpl',[],function(){
  var cache = {};

  function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',obj\.$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');return p.join('');");

    // Provide some basic currying to the user
    return fn(data);
  };

  return tmpl
});
define('check',[],function () {
  function nulled(thing) {
    return thing === null
  }

  function defined(thing) {
    return thing !== undefined
  }

  function boolean(thing) {
    return typeof thing === "boolean"
  }

  function object(thing) {
    return typeof thing === 'object' && !nulled(thing) && !array(thing) && !date(thing) && !dom(thing)
  }

  function array(thing) {
    if (Array.isArray) {
      return Array.isArray(thing)
    }
    return Object.prototype.toString.call(thing) === '[object Array]'
  }

  function likeArray(thing) {
    if (!(array(thing) || object(thing))) {
      return false
    }
    var length = thing.length
    return array(thing) || (object(thing) && intNumber(length) && positiveNumber(length))
  }

  function arg(thing) {
    return object(thing) && positiveNumber(thing.length)
  }

  function date(thing) {
    return Object.prototype.toString.call(thing) === '[object Date]'
  }

  function fn(thing) {
    return typeof thing === 'function'
  }

  function webUrl(thing) {
    return unemptyString(thing) && /^https?:\/\/.+/.test(thing)
  }

  function gitUrl(thing) {
    return unemptyString(thing) && /^git\+(ssh|https?):\/\/.+/.test(thing)
  }

  function email(thing) {
    return unemptyString(thing) && /\S+@\S+/.test(thing)
  }

  function unemptyString(thing) {
    return string(thing) && thing !== ''
  }

  function string(thing) {
    return typeof thing === 'string'
  }

  function oddNumber(thing) {
    return number(thing) && (thing % 2 === 1 || thing % 2 === -1)
  }

  function evenNumber(thing) {
    return number(thing) && thing % 2 === 0
  }

  function intNumber(thing) {
    return number(thing) && thing % 1 === 0
  }

  function floatNumber(thing) {
    return number(thing) && thing % 1 !== 0
  }

  function positiveNumber(thing) {
    return number(thing) && thing > 0
  }

  function negativeNumber(thing) {
    return number(thing) && thing < 0
  }

  function number(thing) {
    return typeof thing === 'number' &&
      isNaN(thing) === false &&
      thing !== Number.POSITIVE_INFINITY &&
      thing !== Number.NEGATIVE_INFINITY
  }

  function dom(thing) {
    return typeof Node === "object" ? thing instanceof Node :
      thing && typeof thing === "object" && typeof thing.nodeType === "number" && typeof thing.nodeName === "string"
  }

  var check = {
    'defined': defined,
    'boolean': boolean,
    'bool': boolean,
    'object': object,
    'obj': object,
    'array': array,
    'arr': array,
    'likeArray': likeArray,
    'likeArr': likeArray,
    'arguments': arg,
    'arg': arg,
    'date': date,
    'fn': fn,
    'function': fn,
    'webUrl': webUrl,
    'gitUrl': gitUrl,
    'email': email,
    'unemptyString': unemptyString,
    'string': string,
    'str': string,
    'oddNumber': oddNumber,
    'odd': oddNumber,
    'evenNumber': evenNumber,
    'even': evenNumber,
    'intNumber': intNumber,
    'int': intNumber,
    'floatNumber': floatNumber,
    'float': floatNumber,
    'positiveNumber': positiveNumber,
    'positive': positiveNumber,
    'negativeNumber': negativeNumber,
    'negative': negativeNumber,
    'number': number,
    'num': number,
    'dom': dom
  };

  (function setUn_method(check) {
    for (var methodName in check) {
      check['un' + methodName] = (function (checker) {
        return function () {
          return !checker.apply(this, arguments)
        }
      })(check[methodName])
    }
  })(check)

  function initObj(targetObj, defaultObj) {
    if (!(object(targetObj) || array(targetObj)) && !(object(defaultObj) || array(defaultObj))) {
      throw TypeError()
    }

    for (var prop in defaultObj) {
      initObj(targetObj[prop], defaultObj[prop])
      targetObj[prop] = (targetObj[prop] === undefined) ? defaultObj[prop] : targetObj[prop]
    }
  }

  check.initObj = initObj

  return check
});

define('check',[],function () {
  function nulled(thing) {
    return thing === null;
  }

  function defined(thing) {
    return thing !== undefined
  }

  function object(thing) {
    return typeof thing === 'object' && !nulled(thing) && !array(thing) && !date(thing) && !dom(thing)
  }

  function array(thing) {
    if (Array.isArray) {
      return Array.isArray(thing)
    }
    return Object.prototype.toString.call(thing) === '[object Array]'
  }

  function arguments(thing) {
    return object(thing) && positiveNumber(thing.length)
  }

  function date(thing) {
    return Object.prototype.toString.call(thing) === '[object Date]'
  }

  function fn(thing) {
    return typeof thing === 'function'
  }

  function webUrl(thing) {
    return unemptyString(thing) && /^https?:\/\/.+/.test(thing)
  }

  function gitUrl(thing) {
    return unemptyString(thing) && /^git\+(ssh|https?):\/\/.+/.test(thing)
  }

  function email(thing, msg) {
    return unemptyString(thing) && /\S+@\S+/.test(thing)
  }

  function unemptyString(thing, msg) {
    return string(thing) && thing !== ''
  }

  function string(thing, msg) {
    return typeof thing === 'string'
  }

  function oddNumber(thing, msg) {
    return number(thing) && (thing % 2 === 1 || thing % 2 === -1)
  }

  function evenNumber(thing, msg) {
    return number(thing) && thing % 2 === 0
  }

  function intNumber(thing, msg) {
    return number(thing) && thing % 1 === 0
  }

  function floatNumber(thing, msg) {
    return number(thing) && thing % 1 !== 0
  }

  function positiveNumber(thing, msg) {
    return number(thing) && thing > 0
  }

  function negativeNumber(thing, msg) {
    return number(thing) && thing < 0
  }

  function number(thing, msg) {
    return typeof thing === 'number' &&
      isNaN(thing) === false &&
      thing !== Number.POSITIVE_INFINITY &&
      thing !== Number.NEGATIVE_INFINITY
  }

  function dom(thing, msg) {
    return typeof Node === "object" ? thing instanceof Node :
      thing && typeof thing === "object" && typeof thing.nodeType === "number" && typeof thing.nodeName === "string"
  }

  var check = {
    'defined': defined,
    'object': object,
    'obj': object,
    'array': array,
    'arr': array,
    'arguments': arguments,
    'arg': arguments,
    'date': date,
    'fn': fn,
    'function': fn,
    'webUrl': webUrl,
    'gitUrl': gitUrl,
    'email': email,
    'unemptyString': unemptyString,
    'string': string,
    'str': string,
    'oddNumber': oddNumber,
    'odd': oddNumber,
    'evenNumber': evenNumber,
    'even': evenNumber,
    'intNumber': intNumber,
    'int': intNumber,
    'floatNumber': floatNumber,
    'float': floatNumber,
    'positiveNumber': positiveNumber,
    'positive': positiveNumber,
    'negativeNumber': negativeNumber,
    'negative': negativeNumber,
    'number': number,
    'num': number,
    'dom': dom
  };

  (function setUn_method(check) {
    for (var methodName in check) {
      check['un' + methodName] = (function (checker) {
        return function () {
          return !checker.apply(this, arguments)
        }
      })(check[methodName])
    }
  })(check)

  function initObj(targetObj, defaultObj) {
    if (!(object(targetObj) || array(targetObj)) && !(object(defaultObj) || array(defaultObj))) {
      throw TypeError()
    }

    for (var prop in defaultObj) {
      initObj(targetObj[prop], defaultObj[prop])
      targetObj[prop] = (targetObj[prop] === undefined) ? defaultObj[prop] : targetObj[prop]
    }
  }

  check.initObj = initObj

  return check
});

define('loop',['check'], function (check) {
  function loop(o, callback, self) {
    self = !!self ? self : o
    if (check.array(o) || check.likeArray(o)) {
      for (var i = 0, len = o.length ; i < len ; i++) {
        if (callback.call(self, o[i], i) === false) {
          return false
        }
      }
    }
    else if (check.object(o)) {
      for (var propName in o) {
        if (o.hasOwnProperty(propName)) {
          if (callback.call(self, o[propName], propName) === false) {
            return false
          }
        }
      }
    }
    else {
      throw TypeError()
    }

    return true
  }

  return loop
});

/*
Fork jQuery (http://jquery.com/)
*/
define('module/extend',['check'], function (check) {
  function extend() {
    var options, name, src, copy, copyIsArray, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (check.boolean(target)) {
      deep = target;

      // skip the boolean and the target
      target = arguments[ i ] || {};
      i++;
    }

    for ( ; i < length; i++ ) {
      // Only deal with non-null/undefined values
      if ( (options = arguments[ i ]) != null ) {
        // Extend the base object
        for ( name in options ) {
          src = target[ name ];
          copy = options[ name ];

          // Prevent never-ending loop
          if ( target === copy ) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (check.object(copy) || (copyIsArray = check.array(copy)))) {
            if ( copyIsArray ) {
              copyIsArray = false;
              clone = src && check.array(src) ? src : [];

            } else {
              clone = src && check.object(src) ? src : {};
            }

            // Never move original objects, clone them
            target[ name ] = extend( deep, clone, copy );

            // Don't bring in undefined values
          } else if ( copy !== undefined ) {
            target[ name ] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  }

  return extend
});
define('watchDOM',['check', 'loop', 'module/extend'], function (check, loop, extend) {
  function watchDOM(dom, option) {
    if (!(this instanceof watchDOM)) {
      return new watchDOM(dom, option)
    }

    option = option || {}
    option = extend({}, {
      check  : function(){ return false },
      delay   : 50
    }, option)

    this.delay      = option.delay
    this._callbacks = []
    this._check     = option.check.bind(this, dom)
    this._checkerID = -1
    this._dom       = dom
    this._events    = option.events
    
  }
  watchDOM.prototype = {
    start: function () {
      if (this._checkerID !== -1) {
        return this
      }

      this._preNode = this._dom.cloneNode(true)

      this._checkerID = setInterval(function () {
        if (!domCompare(this._preNode, this._dom) || this._check()) {
          this.runCallbacks()
          this._preNode = this._dom.cloneNode(true)
        }
      }.bind(this), this.delay)

      return this
    },
    stop: function () {
      if (this._checkerID === -1) {
        return this
      }

      clearInterval(this._checkerID)
      this._checkerID = -1

      return this
    },
    register: function(callback){
      if(check.unfunction(callback)){
        throw TypeError()
      }
      this._callbacks.push(callback)

      return this
    },
    disconnect: function () {
      return this._callbacks.splice(0, this._callbacks.length)

      return this
    },
    runCallbacks:function(){
      loop(this._callbacks, function (callback) {
        callback.apply(this._dom)
      }, this)

      return this
    }
  }

  function domCompare(dom1, dom2) {
    if (dom1 === dom2){
      return true
    }

    if (getDOMString(dom1) !== getDOMString(dom2)){
      return false
    }

    if (dom1.value !== dom2.value) {
      return false
    }

    if(dom1.childNodes.length !== dom2.childNodes.length){
      return false
    }

    return loop(dom1.childNodes,function (childNode, i){
      var compareNode = dom2.childNodes[i]
      
      if(!domCompare(childNode, compareNode)){
        return false
      }

      if(childNode.value !== compareNode.value){
        return false
      }
    })

    return true
  }

  function getDOMString(node) {
    var clone = node.cloneNode(true)
      , tmp = document.createElement("div")

    tmp.appendChild(clone)

    return tmp.innerHTML
  }

  return watchDOM
});

define('binderDOM',['binder', 'module/tmpl', 'watchDOM', 'loop'],
  function (binder, tmpl, watchDOM, loop) {

    /*
    obj가 binder객체일경우.
    this.$regist({
        obj:{
          value: obj,
          applys: function (dom, template) {
            console.log('obj apply')
            decoding(template, this.obj, dom)
            return this.obj
          }
        }
      })
      가 잘 작동되도록 binder.js를 수정 필요.
  
    */

    var binderDOM = binder(function (obj, template, dom) {
      this.$regist({
        obj: {
          value: obj,
          applys: function (dom, template) {
            
          }
        },
        template: {
          value: template
        },
        dom: {
          value: dom,
          applys: function (obj, template) {
            encoding(template, obj, this.dom)
          }
        }
      })

      watchDOM(dom).start().register(function () {
        console.log('obj apply')
        decoding(this.obj, this.dom)
      }.bind(this))
    })

    function encoding(template, obj, dom) {
      var html = tmpl(template, obj)
        , doc = document.createElement('div')

      doc.innerHTML = html

      //value 적용
      var bindDoms = doc.querySelectorAll('[bind-value]')
      for (var i = 0, len = bindDoms.length; i < len; i++) {
        var bindDom = bindDoms[i]
          , propName = bindDom.getAttribute('bind-value')
          , value = obj[propName]

        bindDom.value = value
        bindDom.setAttribute('value', value)
      }

      diffMerge(doc, dom)
      /*
      loop(dom.querySelectorAll('[bind-value]'), function (dom) {
        var propName = dom.getAttribute('bind-value')
          , value = obj[propName]
  
        dom.value = value
        dom.setAttribute('value', value)
      })*/
    }

    function diffMerge(doc, dom) {
      dom.innerHTML = ''
      loop(doc.childNodes, function (childNode) {
        dom.appendChild(childNode)
      })
      //if (dom.parentNode){
      //  dom.parentNode.replaceChild(doc, dom) //diff로 수정 필요.
      //}
    }

    function decoding(obj, dom) {
      //value 적용
      var bindDoms = dom.querySelectorAll('[bind-value]')
      for (var i = 0, len = bindDoms.length; i < len; i++) {
        var bindDom = bindDoms[i]
          , propName = bindDom.getAttribute('bind-value')
          , value = bindDom.value

        obj[propName] = value
      }
    }

    return binderDOM
  })

/*
노드 추가
노드 삭제
속성 변경
속성 추가
속성 삭제
자식노드 추가
자식노드 변경
자식노드 삭제
*/;
