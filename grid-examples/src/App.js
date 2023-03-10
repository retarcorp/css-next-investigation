import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='example-2'>
        <div className='header'> Header </div>
        <div className='aside'> Aside 1</div>
        <div className='content'>Content </div>
        <div className='ad'>Aside 2</div>
        <div className='footer'>Footer</div>
      </section>
      <main>
        <div className='example-1'>
          <div className='cell'></div>
          <div className='cell box-2'></div>
          <div className='cell x'></div>
          <div className='cell'></div>
          <div className='cell x'></div>
          <div className='cell '></div>
          <div className='cell box-3'></div>
          <div className='cell'></div>
          <div className='cell y'></div>
          <div className='cell'></div>
        </div>
      </main>
    </div>
  );
}

export default App;
