import './App.css';
import { Filter } from './components/Filter';
import { Navbar } from './components/Navbar';
import { ResultInfoBar } from './components/ResultInfoBar';
import { ResultTable } from './components/ResultTable';
import { SearchProvider, SearchContext } from './contexts/SearchContext';
import { useContext } from 'react';

function App() {
  return (
    <SearchProvider>
      <AppContent />
    </SearchProvider>
  );
}

function AppContent() {
  const { openCartSection } = useContext(SearchContext);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='store-container'>
          <ResultInfoBar />
          <div className='content-ResultandFilter'>
            <Filter />
            <ResultTable />
          </div>
        </div>
        {openCartSection && <div className='cartSection'>products cart</div>}
      </div>
    </>
  );
}

export default App;
