import { createStore } from 'redux';
import counterReducer from '../reducer/counter'

export default () => {
    return createStore(counterReducer)
}