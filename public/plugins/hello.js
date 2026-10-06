// stubs/react.ts
var R = typeof window !== "undefined" ? window.__SUDZEKAI_REACT__ : void 0;
var useState = R.useState;
var useEffect = R.useEffect;
var useRef = R.useRef;
var useMemo = R.useMemo;
var useCallback = R.useCallback;
var useContext = R.useContext;
var useReducer = R.useReducer;
var useLayoutEffect = R.useLayoutEffect;
var useId = R.useId;
var useDeferredValue = R.useDeferredValue;
var useTransition = R.useTransition;
var useSyncExternalStore = R.useSyncExternalStore;
var useImperativeHandle = R.useImperativeHandle;
var useInsertionEffect = R.useInsertionEffect;
var createElement = R.createElement;
var createContext = R.createContext;
var Fragment = R.Fragment;
var StrictMode = R.StrictMode;
var Suspense = R.Suspense;
var lazy = R.lazy;
var memo = R.memo;
var forwardRef = R.forwardRef;
var isValidElement = R.isValidElement;
var cloneElement = R.cloneElement;
var Children = R.Children;
var startTransition = R.startTransition;
var version = R.version;
var use = R.use;
var act = R.act;

// stubs/jsx-runtime.ts
var R2 = typeof window !== "undefined" ? window.__SUDZEKAI_REACT__ : void 0;
function withKey(type, props, key) {
  const p = props ? { ...props } : {};
  if (key !== void 0) p.key = key;
  return R2.createElement(type, p);
}
var jsx = withKey;
var jsxs = withKey;
var Fragment2 = R2.Fragment;

// plugins-src/hello/index.tsx
function HelloPage() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text text-bold text-2xl", children: "\u041F\u043B\u0430\u0433\u0438\u043D \xAB\u041F\u0440\u0438\u043C\u0435\u0440\xBB" }),
    /* @__PURE__ */ jsx("p", { className: "text", children: "\u042D\u0442\u043E\u0442 \u043C\u043E\u0434\u0443\u043B\u044C \u0441\u043E\u0431\u0440\u0430\u043D \u0431\u0438\u043B\u0434\u0435\u0440\u043E\u043C \u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0435 CSS-\u0441\u0442\u0438\u043B\u0438 (btn, frame, text)." }),
    /* @__PURE__ */ jsxs("div", { className: "frame frame-elevated frame-p-6 flex items-center gap-4", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "btn btn-primary",
          onClick: () => setCount((c) => c + 1),
          children: [
            "\u0421\u0447\u0451\u0442\u0447\u0438\u043A: ",
            count
          ]
        }
      ),
      /* @__PURE__ */ jsx("button", { className: "btn btn-danger", onClick: () => setCount(0), children: "\u0421\u0431\u0440\u043E\u0441" })
    ] })
  ] });
}
var routes = [
  { path: "/hello", name: "\u041F\u0440\u0438\u0432\u0435\u0442", icon: "\u{1F44B}", element: HelloPage }
];
function register() {
  return { id: "hello", name: "\u041F\u0440\u0438\u043C\u0435\u0440", routes };
}
export {
  register
};
