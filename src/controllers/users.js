const { getUserById, getUserPassById, updateUser, getUserByIdUser, getUserByName } = require('../models/users')
const { response: standardResponse } = require('../helpers/standardResponse')
const bcrypt = require('bcrypt')
const fs = require('fs')
const path = './src/public/images'

// exports.getUserById = (req, res) => {
//   const id = req.authUser.id
//   getUserByIdUser(id, (err, results, _fields) => {
//     const data = {
//       ...results
//     }
//     delete data[0].password
//     if (!err) {
//       return standardResponse(res, 200, true, 'List User by Id User', data)
//     } else {
//       return standardResponse(res, 500, false, 'An error occured')
//     }
//   })
// }

exports.getUserById = async (req, res) => {
  const id = req.authUser.id
  const results = await getUserByIdUser(id)
  if (results.length > 0) {
    const data = {
      ...results
    }
    delete data[0].password
    return standardResponse(res, 200, true, 'List User by Id User', data[0])
  } else {
    return standardResponse(res, 404, false, 'An error occured')
  }
}

exports.getUserByName = (req, res) => {
  console.log(req.query.search)
  getUserByName(req.query.search, (err, results, _fields) => {
    if (!err) {
      return standardResponse(res, 200, true, 'List User', results)
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.updateUser = (req, res) => {
  const id = req.authUser.id
  getUserById(id, (err, results, _field) => {
    if (!err) {
      if (results.length > 0) {
        const oldData = results
        const data = req.body
        const setData = []
        if (req.file === undefined) {
          setData.push(data)
        } else {
          data.image = req.file.filename
          setData.push(data)
        }
        updateUser(setData[0], id, (err, results, _field) => {
          if (!err) {
            if (oldData[0].image === null || setData[0].image === undefined) {
              console.log('kaga')
              return standardResponse(res, 200, true, 'User updated successfully!')
            } else {
              console.log('hapus')
              fs.unlinkSync(path + '/' + oldData[0].image)
              return standardResponse(res, 200, true, 'User updated successfully!')
            }
          } else {
            fs.unlinkSync(path + '/' + req.file.filename)
            return standardResponse(res, 500, false, 'An error occured')
          }
        })
      } else {
        return standardResponse(res, 404, false, 'User not found!')
      }
    } else {
      return standardResponse(res, 500, false, 'An error occured')
    }
  })
}

exports.updatePass = (req, res) => {
  const id = req.authUser.id
  const { password, newPassword } = req.body
  getUserPassById(id, async (err, results) => {
    if (err) {
      return standardResponse(res, 500, false, 'An error occured')
    }
    if (results.length < 1) return standardResponse(res, 401, false, 'User Nor Found!')
    const user = results[0]
    const compare = await bcrypt.compare(password, user.password)
    if (compare) {
      const data = { password: newPassword }
      data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
      updateUser(data, id, (err, results) => {
        if (!err) {
          return standardResponse(res, 200, true, 'Password updated successfully!')
        } else {
          return standardResponse(res, 500, false, 'An error occured')
        }
      })
    } else {
      return standardResponse(res, 401, false, 'Wrong Password')
    }
  })
}
