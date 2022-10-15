import statistic from '../../data.json';

export const Statistic = ({ statistic: { label, percentage } }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}%</span>
    </>
  );
};
<Statistic label={statistic.label} percentage={statistic.percentage} />;
