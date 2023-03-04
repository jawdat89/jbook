import { useState } from 'react';
import ReactDom from 'react-dom';

const App = () => {

  const [input, setInput] = useState('');
  const [code, setCode] = useState('');


  const onClick = () => {
    setCode(input);
    setInput('');
  };

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));