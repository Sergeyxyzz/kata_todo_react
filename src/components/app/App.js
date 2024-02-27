import Footer from '../footer/footer';
import NewTaskForm from '../newTaskForm/newTaskForm';
import TaskList from '../taskList/taskList';
import Task from '../task/Task';
import './app.css';

function App() {
  return (
    <section className="todoapp">
      <NewTaskForm />
      <section className="main">
        <ul className="todo-list">
          <Task />
          <TaskList />
        </ul>
      </section>
      <Footer />
    </section>
  );
}

export default App;
