import express from 'express'
import { getThemeByIdUser, createUser, toggleTheme } from '../controllers/userController'

const router = express.Router();

// Получение пользователя
router.get('user/:id', getThemeByIdUser)

// Переключение темы по Id пользователя
router.get('theme/:id', toggleTheme)

// Создание нового пользователя
router.post('user/', createUser)

export default router;
