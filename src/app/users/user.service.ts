import { Injectable } from '@angular/core';
import { User } from './user';

// TODO: to move forward we're going to add mocked data.
let USERS = [
  new User(1, 'mick', 'mick@mail.com'),
  new User(2, 'dan', 'dan@mail.com'),
  new User(3, 'bell', 'bell@mail.com'),
  new User(4, 'jack', 'jack@mail.com'),
  new User(5, 'br', 'br@mail.com'),
  new User(6, 'michael', 'michael@mail.com'),
  new User(7, 'john', 'john@mail.com'),
  new User(8, 'peter', 'peter@mail.com'),
  new User(9, 'brian', 'brian@mail.com'),
  new User(10, 'mike', 'mike@mail.com'),
  new User(11, 'robert', 'robert@mail.com'),
  new User(12, 'gina', 'gina@mail.com'),
  new User(13, 'sil', 'sil@mail.com'),
  new User(14, 'bet', 'bet@mail.com')
];

let userPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {
  getUsers() {
    return userPromise;
  }
}
