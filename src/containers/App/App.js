import Todo from '../Todo';
import './App.css';

const data = [
  { title: "task 1" },
  { title: "task 2" },
  { title: "task 3" },
]

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <Todo data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
