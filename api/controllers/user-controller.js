// Helpers
const statusCode = require('../helpers/status-code')
const Response = require('../helpers/response')

// Service
const UserService = require('../services/user-service')

class UserController {
  static async signUp (req, res) {
    try {
      return await UserService.signUp(res, req?.body)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async signIn (req, res) {
    try {
      return await UserService.signIn(res, req?.body)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async update (req, res) {
    try {
      return await UserService.update(res, req?.body, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }

  static async delete (req, res) {
    try {
      return await UserService.delete(res, req?.user?.id)
    } catch (error) {
      return Response.error(res, statusCode?.SERVER_ERROR, error)
    }
  }
}

module.exports = UserController