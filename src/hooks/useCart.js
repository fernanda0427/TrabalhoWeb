import { useContext } from 'react';

import { CartContext } from '../context/CartContext';

export default function useLocale() {
  const context = useContext(CartContext);

  return context;
}
