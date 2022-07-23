import { useCallback, useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { MdOutlineAddCircle } from 'react-icons/md';
import ReactLoading from 'react-loading';
import { Navigate, useNavigate } from 'react-router-dom';
import AlertModal from '../components/AlertModal';
import Button from '../components/button';
import Header from '../components/Header';
import InputEdit from '../components/InputEdit';
import ListItemTask from '../components/ListItemTask';
import OrderTask from '../components/OrderTask';
import useFetcher from '../hooks/useFetcher';
import api from '../services/api';

const Tasks = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState('');
  const { isLoading, data, error, mutate } = useFetcher('tasks');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [order, setOrder] = useState('description');
  const [openMOdalOrder, setOpenModalOrder] = useState(false);

  const sortTasks = useCallback(() => {
    if (data) {
      data.sort((a, b) => {
        if (a[order] > b[order]) {
          return 1;
        }
        if (a[order] < b[order]) {
          return -1;
        }

        return 0;
      });
    }
  }, [data, order]);

  useEffect(() => {
    sortTasks();
  }, [data, order]);

  if (isLoading) {
    return <ReactLoading type="SpinningBubbles" color="white" height={667} width={375} />;
  }

  const createTask = async () => {
    const URL = '/tasks';

    try {
      const taskCreated = await api.post(URL, {
        description: task,
      });

      setTask('');

      data.push(taskCreated.data);
      await mutate(data, false);

      sortTasks();
    } catch ({ response }) {
      setErrorMessage(response.data.message);
      if (response.status === 401) navigate('/');
    }
  };

  const deleteTask = async (id) => {
    const URL = `/tasks/${id}`;

    try {
      await api.delete(URL);

      const newData = data.filter((item) => item.id !== id);

      mutate(newData, false);
    } catch ({ response }) {
      setErrorMessage(response.data.message);
      if (response.status === 401) navigate('/');
    }
  };

  const editTask = async (id, status, description) => {
    const StatusURL = `/tasks/${id}/status`;
    const DescriptionURL = `/tasks/${id}/description`;

    try {
      await api.put(StatusURL, {
        status,
      });

      await api.put(DescriptionURL, {
        description,
      });

      mutate(); // Atualizo a lista
      setSuccessMessage('O item foi atualizado!');
    } catch ({ response }) {
      setErrorMessage(response.data.message);
      if (response.status === 401) navigate('/');
    }
  };

  const clearMessage = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const disableOpenOrder = () => {
    setOpenModalOrder(false);
    setSuccessMessage('');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-500 min-h-screen">
      <Header />

      <main className="flex justify-center items-center mt-10">
        <div className="h-96 flex flex-col justify-between w-96 px-4 py-5 rounded-2xl bg-fuchsia-900 shadow-2xl gap-4 resize overflow-auto">
          {data && <ListItemTask listTasks={data} editTask={editTask} deleteTask={deleteTask} />}
          {!data && <div> </div>}

          <div className="flex justify-around items-center gap-3">
            <InputEdit type="text" name="task" placeholder="Tarefa" value={task} onChange={setTask}>
              <Button image={<FaTasks />} className="" onClick={() => setOpenModalOrder(true)} />
            </InputEdit>

            <Button
              image={<MdOutlineAddCircle size={36} color="rgb(147 51 234)" />}
              className="border-2 rounded-full border-purple-400 hover:border-purple-600 active:border-purple-800 active:cursor-progress transition duration-200 ease-in-out"
              onClick={createTask}
            />
          </div>
        </div>
        {errorMessage && <AlertModal execCloseModal={clearMessage} message={errorMessage} />}

        {successMessage && (
          <AlertModal
            execCloseModal={clearMessage}
            message={successMessage}
            title="Sucesso!"
            backgroundColor="green"
          />
        )}

        {openMOdalOrder && (
          <OrderTask
            execCloseModal={disableOpenOrder}
            setOrder={setOrder}
            order={order}
            successMessage={setSuccessMessage}
          />
        )}

        {error && <AlertModal execCloseModal={() => {}} message={error.response.data.message} /> &&
          error.response.status === 401 && <Navigate to="/" />}
      </main>
    </div>
  );
};

export default Tasks;
