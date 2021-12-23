import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import RegisterSaga from '../modules/Register/sagas';
import LoginSaga from '../modules/Login/sagas';
import FilmsSaga from '../modules/Catalog/sagas/filmsSaga';
import FilmSaga from '../modules/Catalog/sagas/filmSaga';
import CategoriesSaga from '../modules/Catalog/sagas/categoriesSaga';
import SettingSaga from '../modules/Setting/sagas/settingSaga';
import UpdatePic from '../modules/Setting/sagas/updatePicSaga';
import CommentSaga from '../modules/Catalog/sagas/commentSaga';
import CommentGetSaga from '../modules/Catalog/sagas/commentGetSaga';

export default function* rootSaga() {
  yield all([
    RegisterSaga(), 
    LoginSaga(), 
    CategoriesSaga(), 
    FilmsSaga(),  
    FilmSaga(), 
    CommentSaga(),
    SettingSaga(),
    UpdatePic(),
    CommentGetSaga()
  ]);
}
