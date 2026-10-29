;/*FB_PKG_DELIM*/

/**
 * MIT License
 *
 * Copyright (c) 2017 The copyright holders
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell co
 * pies of the Software, and to permit persons to whom the Software is furnished
 *  to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in al
 * l copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IM
 * PLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNES
 * S FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 *  OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WH
 * ETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 *  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * THIS FILE HAS BEEN AUTOMATICALLY GENERATED AND IS NOT MEANT TO BE
 * EDITED THROUGH NORMAL MEANS. PLEASE CHECK THE DOCUMENTATION FOR
 * DETAILS AND GUIDANCE: http://fburl.com/js-libs-www
 *
 * @preserve-header
 * @preserve-whitespace
 * @noformat
 * @nolint
 */
__d("tanstack-react-virtual-3.10.6",["react-0.0.0","react-dom-0.0.0","tanstack-virtual-core-3.10.6"],(function $module_tanstack_react_virtual_3_10_6(global,require,requireDynamic,requireLazy,module,exports){
'use strict';

var require$$1 = require('react-0.0.0');
var require$$2 = require('react-dom-0.0.0');
var require$$3 = require('tanstack-virtual-core-3.10.6');

var exports$1 = {};
var module$1 = { exports: exports$1 };

function TROMPLE_MAIN() {
Object.defineProperty(exports$1, Symbol.toStringTag, { value: "Module" });
const React = require$$1();
const reactDom = require$$2();
const virtualCore = require$$3();
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
const useIsomorphicLayoutEffect = typeof document !== "undefined" ? React__namespace.useLayoutEffect : React__namespace.useEffect;
function useVirtualizerBase(options) {
  const rerender = React__namespace.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        reactDom.flushSync(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React__namespace.useState(
    () => new virtualCore.Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React__namespace.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect: virtualCore.observeElementRect,
    observeElementOffset: virtualCore.observeElementOffset,
    scrollToFn: virtualCore.elementScroll,
    ...options
  });
}
function useWindowVirtualizer(options) {
  return useVirtualizerBase({
    getScrollElement: () => typeof document !== "undefined" ? window : null,
    observeElementRect: virtualCore.observeWindowRect,
    observeElementOffset: virtualCore.observeWindowOffset,
    scrollToFn: virtualCore.windowScroll,
    initialOffset: () => typeof document !== "undefined" ? window.scrollY : 0,
    ...options
  });
}
exports$1.useVirtualizer = useVirtualizer;
exports$1.useWindowVirtualizer = useWindowVirtualizer;
Object.keys(virtualCore).forEach((k) => {
  if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports$1, k)) Object.defineProperty(exports$1, k, {
    enumerable: true,
    get: () => virtualCore[k]
  });
});


}

var TROMPLE_HAS_RAN = false;

function main () {
  if (!TROMPLE_HAS_RAN) {
    TROMPLE_HAS_RAN = true;
    TROMPLE_MAIN();
  }
  return module$1.exports;
}

function trompleEntryPoint (requirePath) {
  switch (requirePath) {
    case undefined: return main();
  }
}

module.exports = trompleEntryPoint;

/*  */}),null);
__d("tanstack-react-virtual",["tanstack-react-virtual-3.10.6"],(function(t,n,r,o,a,i){a.exports=n("tanstack-react-virtual-3.10.6")()}),null);
__d("tanstack-virtual-core",["tanstack-virtual-core-3.10.6"],(function(t,n,r,o,a,i){a.exports=n("tanstack-virtual-core-3.10.6")()}),null);