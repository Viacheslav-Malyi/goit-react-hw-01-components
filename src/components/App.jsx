import { Profile } from './Profile/Profile';
import user from '../user.json';
import { StatisticsList } from './Statistic/StatisticsList';
import data from '../data.json';
import { FriendList } from './Friend/FriendList';
import fiends from '../friends';
import { TransactionHistory } from './Transaction/TransactionHistory';
import TransactionData from '../transactions';

export const App = () => {
  return (
    <div>
      {<Profile profile={user} />}
      {<StatisticsList title={'Upload stats'} stats={data} />}
      {<FriendList FriendListData={fiends} />}
      {<TransactionHistory TransactionData={TransactionData} />}
    </div>
  );
};
