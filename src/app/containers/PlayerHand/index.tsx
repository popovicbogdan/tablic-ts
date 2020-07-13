import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPlayerHand,
  selectCurrentSelection
} from '../../../store/selectors';
import Card from '../../components/Card';
import { collectCards, addToTable, compPlay } from '../../../store/actions';
import { card } from 'store/cardsReducer';

const PlayerHand: React.FC = memo(() => {
  const playerHand = useSelector(selectPlayerHand);

  const currentSelection = useSelector(selectCurrentSelection);

  const dispatch = useDispatch();

  const handleClick = (card: card) => (): void => {
    if (currentSelection.length) {
      dispatch(collectCards(card));
    } else {
      dispatch(addToTable(card));
    }
    dispatch(compPlay());
  };

  return (
    <div className="flex justify-between w-64">
      {playerHand.map((card: card) => (
        <Card
          url={card.url}
          key={Math.random() * 1}
          onClick={handleClick(card)}
        />
      ))}
    </div>
  );
});

export default PlayerHand;
