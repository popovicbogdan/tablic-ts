/**
 *
 * Card
 *
 */
import React, { memo } from 'react';

interface Props {
  url: string;
  onClick(): void;
  isSelected?: boolean;
}

const Card: React.FC<Props> = memo(({ url, onClick, isSelected }) => {
  return (
    <div data-testid="card" onClick={onClick} className="">
      <img data-testid="image-card" src={url} alt="" />
    </div>
  );
});

export default Card;
