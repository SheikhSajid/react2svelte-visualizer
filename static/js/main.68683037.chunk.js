(this["webpackJsonpreact2svelte-visualizer"]=this["webpackJsonpreact2svelte-visualizer"]||[]).push([[0],{117:function(e,t,n){e.exports=n(338)},122:function(e,t,n){},334:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n.n(o),c=n(115),i=n.n(c),s=(n(122),n(59)),r=n(58),u=n.n(r),l=n(116);n(334),n(335),n(336),n(337);var m=function(){var e=Object(o.useState)("import React, { useState } from 'react';\n\n/* \n * Note: jsx2svelte only supports built-in react hooks\n * Supported hooks:\n *  i. useState\n *  ii. useEffect\n *  iii. useCallback\n * \n * Coming soon:\n *  i. useMemo\n * ii. useContext\n * \n * Not supported:\n *  i. useReducer\n * ii. custom hooks\n */\nexport default function Example() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n"),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(""),r=Object(s.a)(i,2),m=r[0],p=r[1];return a.a.createElement("div",{className:"App"},a.a.createElement(u.a,{className:"jsx-code",mode:"jsx",theme:"github",onChange:c,value:n,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0}}),a.a.createElement("button",{className:"compile-button",onClick:function(){try{p("\x3c!--\n  The formatting of the output code is a bit off,\n  but it is valid (in most cases :p)\n--\x3e\n"+Object(l.compile)(n))}catch(e){alert(e)}}},"Compile"),a.a.createElement(u.a,{className:"svelte-code",mode:"html",theme:"github",value:m,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.68683037.chunk.js.map