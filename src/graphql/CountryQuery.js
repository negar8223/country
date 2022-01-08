import { gql } from "@apollo/client";

export const COUNTRYQUERY=gql`
  query Country($code:ID!){
  country(code:$code){
      name
      native
      phone
      languages{
        name
        native
      }
      currency
      emoji
      capital
      
    }
    }`