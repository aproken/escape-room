export enum AppRoute {
  NotFound = '*',
  Main = '/',
  Login = '/login',
  Quest = '/quest/:questId',
  Booking = '/quest/:questId/booking',
  Contacts = '/contacts',
  Reservation = '/reservation'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
