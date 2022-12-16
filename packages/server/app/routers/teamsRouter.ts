import express from 'express'
import { createNewTeam, deleteTeamById, getTeams, getLeaderBoard} from '../controllers/teamsController'

const teamsRouter = express.Router()

// Создание команды
teamsRouter.post('/', createNewTeam)

// Удаление команды
teamsRouter.delete('/:id', deleteTeamById)

// Получение всех команд
teamsRouter.get('/', getTeams)

// Получение Списка ТОР 10
teamsRouter.get('/leaderboard', getLeaderBoard)

export default teamsRouter;