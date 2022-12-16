import type { ITeam } from '../models/teamModel'
import { Teams } from '../config/db.config'

type pager = {
  offset?: number
  limit?: number
  player_id?: number
}

// Создание команды
export async function createNewTeam(props: ITeam) {
  return Teams.create({ ...props })
}

// Получение команды по Id
export async function getTeamById(id: number) {
  return Teams.findOne({ 
    where: { 
      team_id: id
    }
  })
}

// Получить все команды
export async function getAllTeams(props: pager) {
  const { offset, limit, player_id } = props;
  const id = (player_id) ? player_id : 0;
  return Teams.findAndCountAll({
    offset: offset || 0,
    limit: limit || 10,
    order: [['teamName', 'DESC']],
    where: { player_id: id }
  })
}

// Получение списка ТОР 10 
export async function getLeaderBoard(props: pager) {
  const { offset, limit } = props
  return Teams.findAndCountAll({ 
    offset: offset || 0,
    limit: limit || 10,
    order: [['words', 'DESC']],
  })
}

// Удаление команды по ID
export async function deleteTeamById(id: number) {
  return Teams.destroy({ 
    where: { team_id: id } 
  })
}
