import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdModeEditOutline } from 'react-icons/md';
import Button from './button';
import DeleteTask from './DeleteTask';
import EditTask from './EditTask';

const ItemTask = ({ id, description, status, editTask, deleteTask }) => {
  const [activeModalDelete, setActiveModalDelete] = useState(false);
  const [activeModalEdit, setActiveModalEdit] = useState(false);

  const disableActiveModal = () => {
    setActiveModalDelete(false);
    setActiveModalEdit(false);
  };

  let bgColor;

  switch (status) {
    case 'PENDENTE':
      bgColor = 'bg-red-700';
      break;
    case 'ANDAMENTO':
      bgColor = 'bg-yellow-700';
      break;
    case 'PRONTO':
      bgColor = 'bg-green-700';
      break;
    default:
      bgColor = 'bg-white';
      break;
  }

  return (
    <div className={`${bgColor} p-2 rounded-lg overflow-auto mb-2 flex justify-between gap-1`}>
      <p className="h-12 text-ellipsis">{description}</p>

      <div className="flex gap-1">
        <Button
          image={<MdModeEditOutline size={25} color="white" />}
          className="hover:border-2 rounded-full border-purple-400 hover:border-purple-600 active:border-purple-800 active:cursor-progress transition duration-300 ease-in-out"
          onClick={() => setActiveModalEdit(true)}
        />

        <Button
          image={<IoMdTrash size={25} color="white" />}
          className="hover:border-2 rounded-full border-purple-400 hover:border-purple-600 active:border-purple-800 active:cursor-progress transition duration-300 ease-in-out"
          onClick={() => setActiveModalDelete(true)}
        />
      </div>

      {activeModalDelete && (
        <DeleteTask
          execCloseModal={disableActiveModal}
          deleteTask={() => deleteTask(id)}
          description={description}
        />
      )}

      {activeModalEdit && (
        <EditTask
          execCloseModal={disableActiveModal}
          editTask={editTask}
          description={description}
          status={status}
          id={id}
        />
      )}
    </div>
  );
};

ItemTask.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default ItemTask;
