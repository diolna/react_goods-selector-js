import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods === 'No goods selected'
          ? selectedGoods
          : `${selectedGoods} is selected`}
        {selectedGoods !== 'No goods selected' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGoods('No goods selected')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={`${selectedGoods.includes(good) ? 'has-background-success-light' : ''}`}
              key={good}
            >
              <td>
                <button
                  data-cy={
                    selectedGoods.includes(good) ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={`button${selectedGoods.includes(good) ? ' is-info' : ''}`}
                  onClick={() => {
                    if (selectedGoods.includes(good)) {
                      setSelectedGoods('No goods selected');
                    } else {
                      setSelectedGoods(good);
                    }
                  }}
                >
                  {selectedGoods.includes(good) ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
