const {Router} = require('express');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/user.controllers');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { isValidRole, ValidExistEmail } = require('../helpers/db-validators');

const router = Router();

  router.get('/', usersGet);

  router.post('/',
    [
      check('name', 'el name es obligatorio').not().isEmpty(),
      check('email', 'el correo no es valido').isEmail(),
      check('password', 'el password debe ser mayor a 6 letras').isLength({min:6}),
      //check('role', 'No es un rol valido').isIn(['USER_ROLE', 'ADMIN_ROLE']),
      check('role').custom(isValidRole),
      validateFields,
      check('email').custom(ValidExistEmail),
      
    ], 
  usersPost);

  router.put('/', usersPut);

  router.delete('/', usersDelete);

  router.patch('/', usersPatch);

module.exports = router;