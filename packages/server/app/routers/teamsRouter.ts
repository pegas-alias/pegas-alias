import express from 'express'
import { createNewTeam, deleteTeamById, getLeaderBoard} from '../controllers/teamsController'

const teamsRouter = express.Router()

// Создание команды
teamsRouter.post('/', createNewTeam)

// Удаление команды
teamsRouter.delete('/:id', deleteTeamById)

// Получение Списка ТОР 10
teamsRouter.get('/leaderboard', getLeaderBoard)

export default teamsRouter;
