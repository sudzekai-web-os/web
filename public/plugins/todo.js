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

// plugins-src/todo/useTodos.ts
function useTodos(initial = []) {
  const [items, setItems] = useState(
    initial.map((text, id) => ({ id, text }))
  );
  const add = (text) => {
    const value = text.trim();
    if (!value) return;
    setItems((prev) => [...prev, { id: Date.now(), text: value }]);
  };
  const remove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return { items, add, remove };
}

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

// plugins-src/todo/components.tsx
function TaskList({ items, onRemove }) {
  return /* @__PURE__ */ jsx("div", { className: "frame frame-p-4 flex flex-col gap-2", children: items.length === 0 ? /* @__PURE__ */ jsx("span", { className: "text text-muted", children: "\u0417\u0430\u0434\u0430\u0447 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442" }) : items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsx("span", { className: "text", children: item.text }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "btn btn-danger btn-sm",
        onClick: () => onRemove(item.id),
        children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
      }
    )
  ] }, item.id)) });
}
function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const submit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "input",
        type: "text",
        value: text,
        placeholder: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u0434\u0430\u0447\u0430...",
        onKeyDown: (e) => e.key === "Enter" && submit(),
        onChange: (e) => setText(e.target.value)
      }
    ),
    /* @__PURE__ */ jsx("button", { className: "btn btn-primary btn-md", onClick: submit, children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" })
  ] });
}

// plugins-src/todo/index.tsx
function TodoPage() {
  const { items, add, remove } = useTodos(["\u0417\u0430\u0434\u0430\u0447\u0430 1", "\u0417\u0430\u0434\u0430\u0447\u0430 2"]);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text text-bold text-2xl", children: "\u0417\u0430\u043C\u0435\u0442\u043A\u0438" }),
    /* @__PURE__ */ jsx(AddTodo, { onAdd: add }),
    /* @__PURE__ */ jsx(TaskList, { items, onRemove: remove })
  ] });
}
var routes = [
  { path: "/notes", name: "\u0417\u0430\u043C\u0435\u0442\u043A\u0438", icon: "\u{1F4DD}", element: TodoPage }
];
function register() {
  return { id: "todo", name: "\u0417\u0430\u043C\u0435\u0442\u043A\u0438", routes };
}
export {
  register
};
