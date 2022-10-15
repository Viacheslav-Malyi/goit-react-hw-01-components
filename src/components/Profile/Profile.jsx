import user from '../../user.json';
import css from './Profile.module.css';
export const Profile = ({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.profile_container}>
      <div className={css.wrap}>
        <img className={css.user__avatar} src={avatar} alt="User avatar" />
        <div className={css.description}>
          <p className={css.name}>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={css.statostic_list}>
        <li className={css.statostic_item}>
          <span className={css.lable}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statostic_item}>
          <span className={css.lable}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statostic_item}>
          <span className={css.lable}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>;
