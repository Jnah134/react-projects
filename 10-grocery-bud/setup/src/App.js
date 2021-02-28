import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEdiiId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // display alert
      showAlert(true, 'danger', 'Please enter the value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEdiiId(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'Item added to the list');
      const newItems = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItems]);
      setName(''); // I wanna clear the input after adding an item
    }
  };

  const clearList = () => {
    showAlert(true, 'danger', 'Empty list');
    setList([]);
  };
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'removed item');
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const speceficItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEdiiId(id);
    setName(speceficItem.title);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
