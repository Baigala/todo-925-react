import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
