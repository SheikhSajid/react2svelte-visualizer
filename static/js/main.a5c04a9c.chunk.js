(this["webpackJsonpreact2svelte-visualizer"]=this["webpackJsonpreact2svelte-visualizer"]||[]).push([[0],{117:function(e,t,n){e.exports=n(338)},122:function(e,t,n){},334:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),i=n(115),c=n.n(i),s=(n(122),n(59)),l=n(58),r=n.n(l),u=n(116);n(334),n(335),n(336),n(337);var m=function(){var e=Object(o.useState)("import React, { useState } from 'react';\n\n/* \n * Note: jsx2svelte only supports built-in react hooks\n * Supported hooks:\n *   i. useState\n *  ii. useEffect\n * iii. useCallback\n *  iv. useMemo\n * \n * Coming soon:\n *  i. useContext\n * \n * Not supported:\n *  i. useReducer\n * ii. custom hooks\n */\nexport default function Example() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n"),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)("\x3c!--\n\nCompiled svelte code will appear here\n\n--\x3e\n\n"),l=Object(s.a)(c,2),m=l[0],h=l[1];return a.a.createElement("div",null,a.a.createElement("nav",{style:{height:"30px",padding:"10px"}},a.a.createElement("span",{style:{fontWeight:"bold"}},"React to Svelte Compiler")," ",a.a.createElement("a",{href:"https://github.com/SheikhSajid/jsx2svelte"},"Github")),a.a.createElement("div",{className:"App"},a.a.createElement(r.a,{className:"jsx-code",mode:"jsx",theme:"github",onChange:i,value:n,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},style:{width:"45%",height:"calc(100vh - 30px)"}}),a.a.createElement("div",{style:{width:"10%"}},a.a.createElement("button",{className:"compile-button",onClick:function(){try{h("\x3c!--\n  The formatting of the output code is a bit off,\n  but it is valid (in most cases :p)\n--\x3e\n"+Object(u.compile)(n))}catch(e){h("\x3c!--\n\n"+e.name+":\n"+e.message+"\n\n--\x3e\n\n")}}},"Compile")),a.a.createElement(r.a,{className:"svelte-code",mode:"html",theme:"github",readOnly:!0,value:m,name:"UNIQUE_ID_OF_DIV",editorProps:{$blockScrolling:!0},style:{width:"45%",height:"calc(100vh - 30px)"}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.a5c04a9c.chunk.js.map