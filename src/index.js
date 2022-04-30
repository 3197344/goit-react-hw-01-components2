import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/statistics';
import './index.css';

// Задание 1 - Профиль социальной сети
// import user from './partials/user.json';
// Задание 2 - Секция статистики
// import statistics from './partials/data.json';
// Задание 3 - Список друзей
import friends from './partials/friends.json';
// Задание 4 - История транзакций
import transactions from  './partials/transactions.json'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Statistics />
  </React.StrictMode>
);
