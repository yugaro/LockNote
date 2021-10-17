import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'd/M/yyyy  HH:mm');
}

export function translateErrors(code) {
  const error = { title: 'Error', description: 'please try again in a little while' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'The email address is not valid.';
      break;
    case 'auth/user-disabled':
      error.description = 'The user corresponding to the given email has been disabled.';
      break;
    case 'auth/user-not-found':
      error.description = 'There is no user corresponding to the given email.';
      break;
    case 'auth/wrong-password':
      error.description = 'The password is invalid for the given email, or the account corresponding to the email does not have a password set.';
      break;
    case 'auth/email-already-in-use':
      error.description = 'There already exists an account with the given email address..';
      break;
    case 'auth/operation-not-allowed':
      error.description = 'Email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.';
      break;
    case 'auth/weak-password':
      error.description = 'The password is not strong enough.';
      break;
    default:
  }
  return error;
}
