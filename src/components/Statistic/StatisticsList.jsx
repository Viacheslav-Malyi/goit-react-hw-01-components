import { Statistic } from './Statistic';
import css from './Statistic.module.css';

export const StatisticsList = ({ stats, title }) => {
  return (
    <section className={css.statistic__container}>
      {title && <h2 className={css.statistic__title}>{title}</h2>}
      <ul className={css.statistic__list}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.statistic__item}
            style={{
              backgroundColor: generateRandomColor(),
            }}
          >
            <Statistic statistic={stat} />
          </li>
        ))}
      </ul>
    </section>
  );
};
function generateRandomColor() {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}
