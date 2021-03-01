# DON'T LET IT DIE API

#### _Don't Let It Die API is an app that would let you keep track of your plants friends!_

Users can create an account and start adding the info of their green little
friends, as many as they want! And keep track of how often they need to water
each one of them.

## AUTHORIAZATION

| METHOD | URI                                                 | SEND                                                  | RECIVED                                                                          |
| ------ | --------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| POST   | https://dont-let-it-die.herokuapp.com/auth/register | `{username: STRING, password: STRING, phone: STRING}` | `{ data: { username: STRING, password: STRING, phone: STRING }, token: STRING }` |
| POST   | https://dont-let-it-die.herokuapp.com/auth/login    | `{username: STRING, password: STRING }`               | `{ data: { username: STRING, password: STRING, phone: STRING }, token: STRING }` |

## USERS

| METHOD | URI                                                | SEND                           | RECIVED                                                |
| ------ | -------------------------------------------------- | ------------------------------ | ------------------------------------------------------ |
| PATCH  | https://dont-let-it-die.herokuapp.com/users/update | `{id: INTEGER, [KEY]: STRING}` | `{username: STRING, password: STRING, phone: STRING }` |

## PLANTS

| METHOD | URI                                              | SEND                                                        | RECIVED                                                                   |
| ------ | ------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------- |
| GET    | https://dont-let-it-die.herokuapp.com/plants/    | N/A                                                         |                                                                           |
| GET    | https://dont-let-it-die.herokuapp.com/plants/:id | N/A                                                         |                                                                           |
| POST   | https://dont-let-it-die.herokuapp.com/plants/    | `{nickname: STRING, species: STRING, h2oFrequency: STRING}` | `{ id: INTEGER, nickname: STRING, species: STRING, h2oFrequency: STRING}` |
| PUT    | https://dont-let-it-die.herokuapp.com/plants/:id | `{nickname: STRING, species: STRING, h2oFrequency: STRING}` | `{ id: INTEGER, nickname: STRING, species: STRING, h2oFrequency: STRING}` |
| DELETE | https://dont-let-it-die.herokuapp.com/plants/:id | N/A                                                         | N/A                                                                       |

#### _Have fun, and remember....DON'T LET IT DIE!_
