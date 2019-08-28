import { all } from 'redux-saga/effects';

import { inputChangeAsync } from 'store/modules/search';
export function* rootSaga() {
  yield all([
    inputChangeAsync()
  ])
  // code after all-effect
}
