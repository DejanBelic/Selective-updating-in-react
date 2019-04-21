import React, {  useState, useMemo } from 'react';
import './App.css';
import PageHeader from "./components/PageHeaderFunc";
import ItemList from "./components/ItemList";

const App = () =>  {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const headerText = "The page";
    return (
        <>
          {useMemo(
              () => <PageHeader headerText={headerText} />,
              [headerText],
          )}
          <ItemList items={items} />
          <form>
            <div>
              <label htmlFor="text-input">Text:</label>
              <input type="text" id="text-input" value={text} onChange={e => setText( e.target.value )}/>
            </div>
            <button type="button" onClick={() => {

              setItems(items.concat(text));
              setText('');
            }}>Add item</button>
          </form>
          <div>{text}</div>
      </>
    );
};

export default App;
