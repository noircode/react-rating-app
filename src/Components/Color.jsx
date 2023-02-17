import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useColors } from '../Hooks/color-hooks';
import StarRating from './StarRating';

export default function Color({
  id, title, color, rating,
}) {
  const { rateColor, removeColor } = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button type="button" onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        // eslint-disable-next-line no-shadow
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
