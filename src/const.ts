export const AUTH_TOKEN_KEY_NAME = 'escape-room';
export const BACKEND_URL = 'https://grading.design.pages.academy/v1/escape-room/';
export const REQUEST_TIMEOUT = 5000;

export enum AppRoute {
  NotFound = '*',
  Main = '/',
  Login = '/login',
  Quest = '/quest/:questId',
  Booking = '/quest/:questId/booking',
  Contacts = '/contacts',
  Reservation = '/reservation'
}

export enum APIRoute {
  QuestsList = '/quest',
  CurrentQuest = '/quest',
  Reservation = '/reservation',
  Places = 'booking',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Quest = 'QUEST',
  QuestData = 'QUEST_DATA',
  Booking = 'BOOKING',
  Reservation = 'RESERVATION',
  User = 'USER',
}

export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
  Any = 'any',
}

export enum Type {
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
  All = 'all',
}

export enum Date {
  Today = 'today',
  Tomorrow = 'tomorrow',
}

export enum UrlMarker {
  Default = '/img/svg/pin-default.svg',
  Active = '/img//svg/pin-active.svg',
}

export const COORDS_CENTER_MAP: [number, number] = [59.938955, 30.315644];
