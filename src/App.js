import styles from './App.module.css'
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const title = 'A blog tribute to an amazing friend';

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.content}>
        <Home />
      </div>

    </div>
  );
}

export default App;
