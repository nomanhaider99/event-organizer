import { gql } from '@apollo/client';

export const GETEVENTS = gql`
  query getAllEvents {
  getEvents {
    name,
    organizer,
  }
}

`

export const GET_USERS = gql`
  query getAllUsers {
    getUsers {
      name,
      email,
      userRole
    }
}

`