import './App.css';
import Company from './component/company/Company';
import Head from './component/head/Head';
import Produksiya from './component/produksiya/Produksiya';
import Uslugi from './component/uslugi/Uslugi';

function App() {
  return (
    <div>
      <Head/>
      <Produksiya/>
      <Uslugi/>
      <Company/>
    </div>
  );
}

export default App;
