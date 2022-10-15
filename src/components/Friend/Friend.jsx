import css from './Friend.module.css';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span
        className={isOnline ? css.friends__online : css.friends__ofline}
      ></span>
      <img className={css.friends__avatar} src={avatar} alt="User avatar" />
      <p className={css.friends__name}>{name}</p>
    </>
  );
};
