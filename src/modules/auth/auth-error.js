class AuthError {

  constructor(){
    this.message = 'Error, wrong token'
    this.timestamp = new Date()
  }

}

export default AuthError