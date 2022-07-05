import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './button';
import GenericModal from './GenericModal';

const OrderTask = ({ execCloseModal, setOrder, order, successMessage }) => {
  const [newOrder, setNewOrder] = useState(order);

  return (
    <GenericModal execCloseModal={execCloseModal} textButton="Cancelar/Fechar">
      <div>
        <h3 className="font-extrabold text-white">Atenção:</h3>
        <p className="italic text-white">Escolha a ordenação desejada!</p>

        <div className="flex gap-5 mt-5">
          <label htmlFor="description">
            <input
              type="radio"
              id="description"
              name="description"
              value="description"
              checked={newOrder === 'description'}
              onChange={({ target }) => setNewOrder(target.value)}
            />
            Descrição
          </label>

          <label htmlFor="status">
            <input
              type="radio"
              id="status"
              name="status"
              value="status"
              checked={newOrder === 'status'}
              onChange={({ target }) => setNewOrder(target.value)}
            />
            Status
          </label>

          <label htmlFor="createdAt">
            <input
              type="radio"
              name="createdAt"
              value="createdAt"
              checked={newOrder === 'createdAt'}
              onChange={({ target }) => setNewOrder(target.value)}
            />
            Data de criação
          </label>
        </div>

        <Button
          text="Salvar"
          onClick={() => {
            setOrder(newOrder);
            successMessage('A ordenação dos itens foi atualizada!');
          }}
        />
      </div>
    </GenericModal>
  );
};

OrderTask.propTypes = {
  order: PropTypes.string.isRequired,
  setOrder: PropTypes.func.isRequired,
  execCloseModal: PropTypes.func.isRequired,
  successMessage: PropTypes.func.isRequired,
};

export default OrderTask;
