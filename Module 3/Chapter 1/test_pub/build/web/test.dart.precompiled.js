// Generated by dart2js, the Dart to JavaScript compiler.
(function($){function dart(){this.x=0}var A=new dart
delete A.x
var B=new dart
delete B.x
var C=new dart
delete C.x
var D=new dart
delete D.x
var E=new dart
delete E.x
var F=new dart
delete F.x
var G=new dart
delete G.x
var H=new dart
delete H.x
var J=new dart
delete J.x
var K=new dart
delete K.x
var L=new dart
delete L.x
var M=new dart
delete M.x
var N=new dart
delete N.x
var O=new dart
delete O.x
var P=new dart
delete P.x
var Q=new dart
delete Q.x
var R=new dart
delete R.x
var S=new dart
delete S.x
var T=new dart
delete T.x
var U=new dart
delete U.x
var V=new dart
delete V.x
var W=new dart
delete W.x
var X=new dart
delete X.x
var Y=new dart
delete Y.x
var Z=new dart
delete Z.x
function I(){}
init()
$=I.p
;(function (reflectionData) {
  "use strict";
  function map(x){x={x:x};delete x.x;return x}
    function processStatics(descriptor) {
      for (var property in descriptor) {
        if (!hasOwnProperty.call(descriptor, property)) continue;
        if (property === "^") continue;
        var element = descriptor[property];
        var firstChar = property.substring(0, 1);
        var previousProperty;
        if (firstChar === "+") {
          mangledGlobalNames[previousProperty] = property.substring(1);
          var flag = descriptor[property];
          if (flag > 0) descriptor[previousProperty].$reflectable = flag;
          if (element && element.length) init.typeInformation[previousProperty] = element;
        } else if (firstChar === "@") {
          property = property.substring(1);
          $[property]["@"] = element;
        } else if (firstChar === "*") {
          globalObject[previousProperty].$defaultValues = element;
          var optionalMethods = descriptor.$methodsWithOptionalArguments;
          if (!optionalMethods) {
            descriptor.$methodsWithOptionalArguments = optionalMethods = {}
          }
          optionalMethods[property] = previousProperty;
        } else if (typeof element === "function") {
          globalObject[previousProperty = property] = element;
          functions.push(property);
          init.globalFunctions[property] = element;
        } else if (element.constructor === Array) {
          addStubs(globalObject, element, property, true, descriptor, functions);
        } else {
          previousProperty = property;
          var newDesc = {};
          var previousProp;
          for (var prop in element) {
            if (!hasOwnProperty.call(element, prop)) continue;
            firstChar = prop.substring(0, 1);
            if (prop === "static") {
              processStatics(init.statics[property] = element[prop]);
            } else if (firstChar === "+") {
              mangledNames[previousProp] = prop.substring(1);
              var flag = element[prop];
              if (flag > 0) element[previousProp].$reflectable = flag;
            } else if (firstChar === "@" && prop !== "@") {
              newDesc[prop.substring(1)]["@"] = element[prop];
            } else if (firstChar === "*") {
              newDesc[previousProp].$defaultValues = element[prop];
              var optionalMethods = newDesc.$methodsWithOptionalArguments;
              if (!optionalMethods) {
                newDesc.$methodsWithOptionalArguments = optionalMethods={}
              }
              optionalMethods[prop] = previousProp;
            } else {
              var elem = element[prop];
              if (prop !== "^" && elem != null && elem.constructor === Array && prop !== "<>") {
                addStubs(newDesc, elem, prop, false, element, []);
              } else {
                newDesc[previousProp = prop] = elem;
              }
            }
          }
          $$[property] = [globalObject, newDesc];
          classes.push(property);
        }
      }
    }
  function addStubs(descriptor, array, name, isStatic, originalDescriptor, functions) {
    var f, funcs = [originalDescriptor[name] = descriptor[name] = f = array[0]];
    f.$stubName = name;
    functions.push(name);
    for (var index = 0; index < array.length; index += 2) {
      f = array[index + 1];
      if (typeof f != "function") break;
      f.$stubName = array[index + 2];
      funcs.push(f);
      if (f.$stubName) {
        originalDescriptor[f.$stubName] = descriptor[f.$stubName] = f;
        functions.push(f.$stubName);
      }
    }
    for (var i = 0; i < funcs.length; index++, i++) {
      funcs[i].$callName = array[index + 1];
    }
    var getterStubName = array[++index];
    array = array.slice(++index);
    var requiredParameterInfo = array[0];
    var requiredParameterCount = requiredParameterInfo >> 1;
    var isAccessor = (requiredParameterInfo & 1) === 1;
    var isSetter = requiredParameterInfo === 3;
    var isGetter = requiredParameterInfo === 1;
    var optionalParameterInfo = array[1];
    var optionalParameterCount = optionalParameterInfo >> 1;
    var optionalParametersAreNamed = (optionalParameterInfo & 1) === 1;
    var isIntercepted = requiredParameterCount + optionalParameterCount != funcs[0].length;
    var functionTypeIndex = array[2];
    var unmangledNameIndex =  2 * optionalParameterCount + requiredParameterCount + 3;
    var isReflectable = array.length > unmangledNameIndex;

    if (getterStubName) {
      f = tearOff(funcs, array, isStatic, name, isIntercepted);
      f.getterStub = true;
      if (isStatic) init.globalFunctions[name] = f;
      originalDescriptor[getterStubName] = descriptor[getterStubName] = f;
      funcs.push(f);
      if (getterStubName) functions.push(getterStubName);
      f.$stubName = getterStubName;
      f.$callName = null;
      if (isIntercepted) init.interceptedNames[getterStubName] = true;
    }
    if (isReflectable) {
      for (var i = 0; i < funcs.length; i++) {
        funcs[i].$reflectable = 1;
        funcs[i].$reflectionInfo = array;
      }
      var mangledNames = isStatic ? init.mangledGlobalNames : init.mangledNames;
      var unmangledName = array[unmangledNameIndex];
      var reflectionName = unmangledName;
      if (getterStubName) mangledNames[getterStubName] = reflectionName;
      if (isSetter) {
        reflectionName += "=";
      } else if (!isGetter) {
        reflectionName += ":" + requiredParameterCount + ":" + optionalParameterCount;
      }
      mangledNames[name] = reflectionName;
      funcs[0].$reflectionName = reflectionName;
      funcs[0].$metadataIndex = unmangledNameIndex + 1;
      if (optionalParameterCount) descriptor[unmangledName + "*"] = funcs[0];
    }
  }
  function tearOffGetterNoCsp(funcs, reflectionInfo, name, isIntercepted) {
    return isIntercepted
        ? new Function("funcs", "reflectionInfo", "name", "H", "c",
            "return function tearOff_" + name + (functionCounter++)+ "(x) {" +
              "if (c === null) c = H.qm(" +
                  "this, funcs, reflectionInfo, false, [x], name);" +
              "return new c(this, funcs[0], x, name);" +
            "}")(funcs, reflectionInfo, name, H, null)
        : new Function("funcs", "reflectionInfo", "name", "H", "c",
            "return function tearOff_" + name + (functionCounter++)+ "() {" +
              "if (c === null) c = H.qm(" +
                  "this, funcs, reflectionInfo, false, [], name);" +
              "return new c(this, funcs[0], null, name);" +
            "}")(funcs, reflectionInfo, name, H, null)
  }
  function tearOffGetterCsp(funcs, reflectionInfo, name, isIntercepted) {
    var cache = null;
    return isIntercepted
        ? function(x) {
            if (cache === null) cache = H.qm(this, funcs, reflectionInfo, false, [x], name);
            return new cache(this, funcs[0], x, name)
          }
        : function() {
            if (cache === null) cache = H.qm(this, funcs, reflectionInfo, false, [], name);
            return new cache(this, funcs[0], null, name)
          }
  }
  function tearOff(funcs, reflectionInfo, isStatic, name, isIntercepted) {
    var cache;
    return isStatic
        ? function() {
            if (cache === void 0) cache = H.qm(this, funcs, reflectionInfo, true, [], name).prototype;
            return cache;
          }
        : tearOffGetter(funcs, reflectionInfo, name, isIntercepted);
  }
  var functionCounter = 0;
  var tearOffGetter = (typeof dart_precompiled == "function")
      ? tearOffGetterCsp : tearOffGetterNoCsp;
  if (!init.libraries) init.libraries = [];
  if (!init.mangledNames) init.mangledNames = map();
  if (!init.mangledGlobalNames) init.mangledGlobalNames = map();
  if (!init.statics) init.statics = map();
  if (!init.typeInformation) init.typeInformation = map();
  if (!init.globalFunctions) init.globalFunctions = map();
  if (!init.interceptedNames) init.interceptedNames = map();
  var libraries = init.libraries;
  var mangledNames = init.mangledNames;
  var mangledGlobalNames = init.mangledGlobalNames;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var length = reflectionData.length;
  for (var i = 0; i < length; i++) {
    var data = reflectionData[i];
    var name = data[0];
    var uri = data[1];
    var metadata = data[2];
    var globalObject = data[3];
    var descriptor = data[4];
    var isRoot = !!data[5];
    var fields = descriptor && descriptor["^"];
    var classes = [];
    var functions = [];
    processStatics(descriptor);
    libraries.push([name, uri, classes, functions, metadata, fields, isRoot,
                    globalObject]);
  }
})
([["dart2js._js_primitives","dart:_js_primitives",,H,{
"^":"",
qw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log=="function"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw "Unable to print message: " + String(a)}}],["","file:///F:/Dartiverse/ADartCookbook/book/Chapter%201%20-%20Working%20with%20the%20tools%20of%20the%20Dart%20platform/code/test_pub/web/test.dart",,V,{
"^":"",
E2:function(){H.qw("Testing pub build")}},1],])
$.libraries_to_load = {}
$.yj=0
$.mJ=null
$.P4=null
$.oK=null

init.functionAliases={}
init.metadata=[];$=null
I = I.$finishIsolateConstructor(I)
$=new I()
function convertToFastObject(properties) {
  function MyClass() {};
  MyClass.prototype = properties;
  new MyClass();
  return properties;
}
A = convertToFastObject(A)
B = convertToFastObject(B)
C = convertToFastObject(C)
D = convertToFastObject(D)
E = convertToFastObject(E)
F = convertToFastObject(F)
G = convertToFastObject(G)
H = convertToFastObject(H)
J = convertToFastObject(J)
K = convertToFastObject(K)
L = convertToFastObject(L)
M = convertToFastObject(M)
N = convertToFastObject(N)
O = convertToFastObject(O)
P = convertToFastObject(P)
Q = convertToFastObject(Q)
R = convertToFastObject(R)
S = convertToFastObject(S)
T = convertToFastObject(T)
U = convertToFastObject(U)
V = convertToFastObject(V)
W = convertToFastObject(W)
X = convertToFastObject(X)
Y = convertToFastObject(Y)
Z = convertToFastObject(Z)
;(function (callback) {
  if (typeof document === "undefined") {
    callback(null);
    return;
  }
  if (document.currentScript) {
    callback(document.currentScript);
    return;
  }

  var scripts = document.scripts;
  function onLoad(event) {
    for (var i = 0; i < scripts.length; ++i) {
      scripts[i].removeEventListener("load", onLoad, false);
    }
    callback(event.target);
  }
  for (var i = 0; i < scripts.length; ++i) {
    scripts[i].addEventListener("load", onLoad, false);
  }
})(function(currentScript) {
  init.currentScript = currentScript;

  if (typeof dartMainRunner === "function") {
    dartMainRunner(V.E2, []);
  } else {
    V.E2([]);
  }
})
function init(){I.p={}
I.$lazy=function(a,b,c,d,e){var z={}
var y={}
a[c]=z
a[d]=function(){var x=$[c]
try{if(x===z){$[c]=y
try{x=$[c]=e()}finally{if(x===z){if($[c]===y){$[c]=null}}}}else{if(x===y)H.eQ(b)}return x}finally{$[d]=function(){return this[c]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.prototype.hasOwnProperty
for(var x in z)if(y.call(z,x))this[x]=z[x]
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
return Isolate}}
})()
function dart_precompiled($collectedClasses){var $desc
return[]}