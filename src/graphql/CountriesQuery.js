import { gql } from "@apollo/client";

export const COUNTRIESQUERY=gql` query{
    countries{
      emoji
      name
      code
    }
  }
  `