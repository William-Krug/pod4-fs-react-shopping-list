import './ShoppingList.css';

function ShoppingList({ shoppingList, purchasedItem }) {
  console.log('shoppingList prop:', shoppingList);

  const hideButtons = (isPurchased) => {
    if (isPurchased) {
      return (
        <div>
          <p>
            <strong>Purchased</strong>
          </p>
        </div>
      );
    } else {
      return (
        <div className="item-buttons">
          <button
            className="item-button"
            onClick={() => purchasedItem(shoppingItem.id)}
          >
            Buy
          </button>
          <button className="item-button">Remove</button>
        </div>
      );
    }
  };

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      {/* Button Controls */}
      <div className="button-controls">
        <button
          className="list-button"
          value="resetButton"
          onClick={() => {
            console.log('Reset Button Clicked');
          }}
        >
          Reset
        </button>
        <button
          className="list-button"
          value="clearButton"
          onClick={() => {
            console.log('Clear Button Clicked');
          }}
        >
          Clear
        </button>
      </div>
      {/* List Items */}
      <div>
        {shoppingList.map((shoppingItem) => {
          {
            /* Pull this out if Item */
          }
          return (
            <div key={shoppingItem.id} className="list-item">
              <p>{shoppingItem.name}</p>
              <p>
                {shoppingItem.quantity} {shoppingItem.unit}
              </p>
              {/* {hideButtons(shoppingItem.isPurchased)} */}

              {shoppingItem.isPurchased ? (
                <div>
                  <p>
                    <strong>Purchased</strong>
                  </p>
                </div>
              ) : (
                <div className="item-buttons">
                  <button
                    className="item-button"
                    onClick={() => purchasedItem(shoppingItem.id)}
                  >
                    Buy
                  </button>
                  <button className="item-button">Remove</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingList;
