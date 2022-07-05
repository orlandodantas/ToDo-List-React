import PropTypes from 'prop-types';
import ItemTask from './ItemTask';

const ListItemTask = ({ listTasks, editTask, deleteTask }) => (
  <div className="overflow-y-auto p-1 text-white">
    {listTasks.map(({ id, description, status }) => (
      <ItemTask
        key={id}
        id={id}
        description={description}
        status={status}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ))}
  </div>
);

ListItemTask.propTypes = {
  listTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  ).isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ListItemTask;
