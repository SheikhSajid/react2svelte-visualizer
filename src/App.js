import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import { compile } from 'jsx2svelte';
import './App.css';

import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';

const placeholderJSX = `import React, { useState } from 'react';

// Note: jsx2svelte only supports hooks
export default function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`;

function App() {
  const [jsxCode, setJsxCode] = useState(placeholderJSX);
  const [svelteCode, setSvelteCode] = useState('');

  const compileHandler = () => {
    try {
      setSvelteCode(compile(jsxCode));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="App">
      <AceEditor
        className="jsx-code"
        mode="jsx"
        theme="github"
        onChange={setJsxCode}
        value={jsxCode}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />

      <button className="compile-button" onClick={compileHandler}>
        Compile
      </button>

      <AceEditor
        className="svelte-code"
        mode="html"
        theme="github"
        value={svelteCode}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
}

export default App;
