import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
mutation SignupMutation($email: String!, $mobileNumber: String!, $password: String!) {
  createUser(
    email: $email,
    mobileNumber: $mobileNumber,
    password: $password,
  ){
  success
  errors
  }
}`;


export const EMAIL_LOGIN_MUTATION = gql`
mutation EmailLoginMutation($email: String!, $password: String!) {
  loginUser(email:$email, password:$password) {
    token,
    message
  }
}`;

export const MOBILE_LOGIN_MUTATION = gql`
mutation MobileLoginMutation($mobileNumber: String!, $password: String!) {
  loginUser(mobileNumber:$mobileNumber, password:$password) {
    token,
    message
  }
}`;