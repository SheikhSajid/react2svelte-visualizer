import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import { compile } from 'jsx2svelte';
import './App.css';

import 'ace-builds/src-noconflict/mode-jsx';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-github';

const placeholderJSX = /* jsx */ `import React, { useState } from 'react';

/* 
 * Note: jsx2svelte only supports built-in react hooks
 * Supported hooks:
 *   i. useState
 *  ii. useEffect
 * iii. useCallback
 *  iv. useMemo
 * 
 * Coming soon:
 *  i. useContext
 * 
 * Not supported:
 *  i. useReducer
 * ii. custom hooks
 */
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
  const [svelteCode, setSvelteCode] = useState(
    '<!--\n\nCompiled svelte code will appear here\n\n-->\n\n'
  );

  const outputComment =
    '<!--\n  The formatting of the output code is a bit off,\n  but it is valid (in most cases :p)\n-->\n';

  const compileHandler = () => {
    try {
      setSvelteCode(outputComment + compile(jsxCode));
    } catch (e) {
      setSvelteCode('<!--\n\n' + e.name + ':\n' + e.message + '\n\n-->\n\n');
    }
  };

  const repo = 'https://github.com/SheikhSajid/jsx2svelte';

  return (
    <div>
      <nav style={{ height: '30px', padding: '10px' }}>
        <span style={{ fontWeight: 'bold' }}>React to Svelte Compiler</span>{' '}
        <a href={repo}>Github</a>
      </nav>

      <div className="App">
        <AceEditor
          className="jsx-code"
          mode="jsx"
          theme="github"
          onChange={setJsxCode}
          value={jsxCode}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{
            width: '45%',
            height: 'calc(100vh - 30px)',
          }}
        />

        <div style={{ width: '10%' }}>
          <button className="compile-button" onClick={compileHandler}>
            Compile
          </button>
        </div>

        <AceEditor
          className="svelte-code"
          mode="html"
          theme="github"
          readOnly
          value={svelteCode}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          style={{
            width: '45%',
            height: 'calc(100vh - 30px)',
          }}
        />
      </div>
    </div>
  );
}

export default App;
