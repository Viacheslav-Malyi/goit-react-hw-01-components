import { Friend } from './Friend';
import css from './Friend.module.css';

export const FriendList = ({ FriendListData }) => {
  return (
    <div className={css.friends__container}>
      <ul>
        {FriendListData.map(friend => (
          <li key={friend.id} className={css.friends__item}>
            <Friend friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};
