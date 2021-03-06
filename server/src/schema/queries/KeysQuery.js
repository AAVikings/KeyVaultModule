import {
  GraphQLList
} from 'graphql'

import {
  AuthenticationError
} from '../../errors'

import { KeyType } from '../types'
import { Key } from '../../models'
import logger from '../../config/logger'

const args = {}

const resolve = (parent, args, context) => {
  logger.debug('keys -> Entering Fuction.')

  if (!context.userId) {
    throw new AuthenticationError()
  }

  return Key.find({authId: context.userId})
}

const KeysQuery = {
  keys: {
    type: new GraphQLList(KeyType),
    args,
    resolve
  }
}

export default KeysQuery
