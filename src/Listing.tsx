
import React from 'react';
import { ListingItem } from './types';

interface ListingProps {
  items: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  const formatPrice = (currency: string, price: string) => {
    switch (currency) {
      case 'USD':
        return `$${parseFloat(price).toFixed(2)}`;
      case 'EUR':
        return `€${parseFloat(price).toFixed(2)}`;
      default:
        return `${parseFloat(price).toFixed(2)} ${currency}`;
    }
  };

  const getQuantityClass = (quantity: number) => {
    if (quantity < 10) return 'level-low';
    if (quantity < 20) return 'level-medium';
    return 'level-high';
  };

  const truncateTitle = (title: string) => {
    return title.length > 50 ? `${title.slice(0, 50)}...` : title;
  };

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{truncateTitle(item.title)}</p>
            <p className="item-price">{formatPrice(item.currency_code, item.price)}</p>
            <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;