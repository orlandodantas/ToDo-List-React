import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './button';
import GenericModal from './GenericModal';

const EditTask = ({ execCloseModal, editTask, description, status, id }) => {
  const [newDescription, setNewDescription] = useState(description);
  const [newStatus, setNewStatus] = useState(status);

  return (
    <GenericModal execCloseModal={execCloseModal} textButton="Cancelar/Fechar">
      <div>
        <h3 className="font-extrabold text-white">Atenção:</h3>
        <p className="italic text-white">Edição de item!</p>

        <div className="flex gap-5 mt-5">
          <label htmlFor="pendente">
            <input
              type="radio"
              id="pendente"
              name="status"
              value="PENDENTE"
              checked={newStatus === 'PENDENTE'}
              onChange={({ target }) => setNewStatus(target.value)}
            />
            PENDENTE
          </label>

          <label htmlFor="andamento">
            <input
              type="radio"
              id="andamento"
              name="status"
              value="ANDAMENTO"
              checked={newStatus === 'ANDAMENTO'}
              onChange={({ target }) => setNewStatus(target.value)}
            />
            ANDAMENTO
          </label>

          <label htmlFor="pronto">
            <input
              type="radio"
              name="status"
              value="PRONTO"
              checked={newStatus === 'PRONTO'}
              onChange={({ target }) => setNewStatus(target.value)}
            />
            PRONTO
          </label>
        </div>

        <textarea
          name="descriptionTask"
          value={newDescription}
          onChange={({ target }) => setNewDescription(target.value)}
          className="w-full px-2 h-32"
        />

        <Button text="Salvar" onClick={() => editTask(id, newStatus, newDescription)} />
      </div>
    </GenericModal>
  );
};

EditTask.propTypes = {
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  editTask: PropTypes.func.isRequired,
  execCloseModal: PropTypes.func.isRequired,
};

export default EditTask;
