import type { ITeam } from '../models/teamModel'
import { Teams } from '../config/db.config'

type pager = {
  offset?: number
  limit?: number
  ratingFieldName?: string
  player_id?: number
}

// Создание команды
export async function createNewTeam(props: ITeam) {
  if (!props.player_id) {
    props.player_id = 0;
  }
  return Teams.create({ ...props })
}

// Обновление данных о команде
export async function updateTeams (name:string, score:number, winner:string) {
  const team = await Teams.findOne({
    where: { 
      teamName: name
    }
  })
  console.log('server winner ', winner);
  if (!team) {
    return;
  }
  let updatedTeam = team.set({
    games: team?.dataValues.games + 1,
    victories: team?.dataValues.victories + Number(winner),
    words: team?.dataValues.words + score
 })
 team.save();
 return updatedTeam;
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
    limit: limit || 20,
    order: [['teamName', 'DESC']],
    where: { player_id: id }
  })
}

// Получение списка ТОР 10 
export async function getLeaderBoard(props: pager) {
  const { offset, limit, ratingFieldName } = props
  return Teams.findAndCountAll({ 
    offset: offset || 0,
    limit: limit || 20,
    order: [[ratingFieldName ? ratingFieldName : 'victories', 'DESC']],
  })
}

// Удаление команды по ID
export async function deleteTeamById(id: number) {
  return Teams.destroy({ 
    where: { team_id: id } 
  })
}
