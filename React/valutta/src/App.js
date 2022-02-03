import './App.css';
import { useState } from 'react';

function App() {
  const [eurot, setEurot] = useState(0);
  const [punnat, setPunnat] = useState(0);

  function Calculate(e){
    e.preventDefault();
    const tulos = eurot * 0.84;
    setPunnat(tulos);
  }

  return (
<form onSubmit={Calculate}>
  <h2>Valuuttalaskuri</h2>
  <div>
    <label>Eur</label>
    <input 
    type="number" 
    value={eurot}
    onChange={e => setEurot(e.target.value)}
    />
  </div>
  <div>
    <label>Punnat</label>
    <output> {punnat.toFixed(2)}</output>
  </div>
  <button>Laske</button>
</form>
  );
}

export default App;
