import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'GDNbANR!WCsPKy',
      storage,
      whitelist: ['users'],
    },
    reducers
  );

  return persistedReducer;
};
