import { all } from 'redux-saga/effects'

function* helloSaga() {
    console.log('Hello Sagas!')
  }

export default function* rootSaga() {
    console.log('root Saga');
    yield all([helloSaga()])
}