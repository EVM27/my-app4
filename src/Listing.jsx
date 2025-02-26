
import React from 'react';

const Listing = ({ items = [] }) => {
  const formatPrice = (currency, price) => {
    switch (currency) {
      case 'USD':
        return `$${parseFloat(price).toFixed(2)}`;
      case 'EUR':
        return `€${parseFloat(price).toFixed(2)}`;
      default:
        return `${parseFloat(price).toFixed(2)} ${currency}`;
    }
  };

  const getQuantityClass = (quantity) => {
    if (quantity < 10) return 'level-low';
    if (quantity < 20) return 'level-medium';
    return 'level-high';
  };

  return (
    <div className="item-list">
      {items.map(item => {
        const truncatedTitle = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title;

        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt={truncatedTitle} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{truncatedTitle}</p>
              <p className="item-price">{formatPrice(item.currency_code, item.price)}</p>
              <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;