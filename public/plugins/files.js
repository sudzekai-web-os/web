// stubs/jsx-runtime.ts
var R = typeof window !== "undefined" ? window.__SUDZEKAI_REACT__ : void 0;
function withKey(type, props, key) {
  const p = props ? { ...props } : {};
  if (key !== void 0) p.key = key;
  return R.createElement(type, p);
}
var jsx = withKey;
var jsxs = withKey;
var Fragment = R.Fragment;

// plugins-src/files/index.tsx
function FilesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "frame frame-p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text text-bold text-2xl", children: "\u0424\u0430\u0439\u043B\u044B" }),
    /* @__PURE__ */ jsx("p", { className: "text text-muted", children: "\u041B\u043E\u0433\u0438\u043A\u0430 \u043C\u043E\u0434\u0443\u043B\u044F \xAB\u0424\u0430\u0439\u043B\u044B\xBB \u2014 \u0437\u0434\u0435\u0441\u044C." })
  ] });
}
function DirectoriesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "frame frame-p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text text-bold text-2xl", children: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438" }),
    /* @__PURE__ */ jsx("p", { className: "text text-muted", children: "\u041B\u043E\u0433\u0438\u043A\u0430 \u043C\u043E\u0434\u0443\u043B\u044F \xAB\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438\xBB \u2014 \u0437\u0434\u0435\u0441\u044C." })
  ] });
}
var routes = [
  { path: "/files", name: "\u0424\u0430\u0439\u043B\u044B", icon: "\u{1F4C1}", element: FilesPage },
  { path: "/directories", name: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438", icon: "\u{1F5C2}\uFE0F", element: DirectoriesPage }
];
function register() {
  return { id: "files", name: "\u0424\u0430\u0439\u043B\u044B", routes };
}
export {
  register
};
