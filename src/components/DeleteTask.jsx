import PropTypes from 'prop-types';
import Button from './button';
import GenericModal from './GenericModal';

const DeleteTask = ({ execCloseModal, deleteTask, description }) => (
  <GenericModal execCloseModal={execCloseModal}>
    <div>
      <h3 className="font-extrabold text-white">Confirma a exclusão deste item:</h3>
      <p className="italic text-white">{description}</p>
      <Button text="Sim" onClick={deleteTask} />
    </div>
  </GenericModal>
);

DeleteTask.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  execCloseModal: PropTypes.func.isRequired,
};

export default DeleteTask;
