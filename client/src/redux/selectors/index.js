import { createSelector } from 'reselect';

const loginErrors = state => state.login.errors;
const registerErrors = state => state.register.errors;
const settings = state => state.catalog.settings;
const categoriesError = state => state.catalog.categories.error;
const filmsError = state => state.catalog.films.error;
const films = state => state.catalog.films;
const categories = state => state.catalog.categories;
const currentFilm = state => state.catalog.film;
const username = state => state.account.username;
const usernameSetting = state => state.setting.username;
const emailSetting = state => state.setting.email;
const picSetting = state => state.setting.pic;
const pic = state => state.account.pic;
const email = state => state.account.email;
const password = state => state.account.password;
const settingErrors = state => state.setting.errors;
const comments = state => state.catalog.comment;

export const loginErrorsSelector = createSelector(
    loginErrors,
    item => item
);

export const registerErrorsSelector = createSelector(
    registerErrors,
    item => item
);

export const settingsSelector = createSelector(
    settings,
    item => item
);

export const categoriesErrorSelector = createSelector(
    categoriesError,
    item => item && item.error
);

export const filmsErrorSelector = createSelector(
    filmsError,
    item => item && item.error
);

export const filmsSelector = createSelector(
    films,
    item => item
);

export const categoriesSelector = createSelector(
    categories,
    item => item
);

export const currentFilmSelector = createSelector(
    currentFilm,
    item => item
);

export const usernameSelector = createSelector(
    username,
    item => item 
);

export const usernameSettingSelector = createSelector(
    usernameSetting,
    item => item
);

export const picSelector = createSelector(
    pic,
    item => item
);

export const picSettingSelector = createSelector(
    picSetting,
    item => item
);

export const emailSelector = createSelector(
    email,
    item => item
);

export const emailSettingSelector = createSelector(
    emailSetting,
    item => item
);

export const passwordSelector = createSelector(
    password,
    item => item
);

export const settingErrorsSelector = createSelector(
    settingErrors,
    item => item
);

export const commentsSelector = createSelector(
    comments,
    item => item
);