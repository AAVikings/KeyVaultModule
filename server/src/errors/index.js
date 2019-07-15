export class AuthenticationError extends Error {
  constructor(message) {
    super(message)
    this.code = 401
    this.message = 'Autentification not found, you have to be authentificated to perform this action.'
  }
}

export class WrongArgumentsError extends Error {
  constructor(message) {
    super(message)
    this.code = 400
    this.message = `Wrong arguments: ${this.message}`
  }
}

export class KeyVaultError extends Error {
  constructor(message) {
    super(message)
    this.code = 500
    this.message = `KeyVault Internal Error: ${this.message}`
  }
}
