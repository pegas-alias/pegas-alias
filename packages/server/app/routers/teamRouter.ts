import express from 'express'
import { createNewTeam, deleteTeamById } from '../controllers/teamsController'

const router = express.Router()

// Создание комментария
router.post('/', createNewTeam)

// Удаление комментария
router.delete('/:id', deleteTeamById)

export default router;
