import {combineReducers} from 'redux';
import checking from './checking';
import savings from './savings';
import billpay from './billpay';

export default combineReducers({checking, savings, billpay});