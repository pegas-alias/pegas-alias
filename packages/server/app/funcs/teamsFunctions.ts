import type { ITeam } from '../models/teamModel'
import { Comments, Like, Teams } from '../config/db.config'

// Создание команды
export async function createNewTeam(props: ITeam) {
  return Teams.create({ ...props })
}

// Получение команды по Id
export async function getTeamById(id: number) {
  return Teams.findOne({ 
    where: { 
      team_id: id
    },
    include: [
      {
        model: Comments,
        order: [['createdAt', 'DESC']],
        attributes: ['message', 'author_name', 'author_id', 'createdAt', 'updatedAt', 'team_id', 'comment_id', 'bind_comment_id'],
        include: [
          {
            model: Comments,
            order: [['createdAt', 'DESC']],
            attributes: ['message', 'author_name', 'author_id', 'createdAt', 'updatedAt', 'team_id', 'comment_id', 'bind_comment_id'],
            include: [
              {
                model: Like,
                attributes: ['author_id', 'createdAt', 'updatedAt', 'team_id', 'like_id']
              }
            ]
          },
          {
            model: Like,
            attributes: ['author_id', 'createdAt', 'updatedAt', 'team_id', 'like_id']
          }
        ]
      }
    ]
  })
}

type pager = {
  offset?: number
  limit?: number
}

// Получить все топики форума и связанные комменты, для определения последнего
export async function getAllTeams(props: pager) {
  const { offset, limit } = props
  return Teams.findAndCountAll({
    offset: offset || 0,
    limit: limit || 10,
    order: [['createdAt', 'DESC']],
    include: [
      {
        model: Comments,
        attributes: ['message', 'author_name', 'author_id', 'createdAt', 'updatedAt', 'team_id'],
      }
    ]
  })
}
// Получение списка ТОР 10
export async function getLeaderBoard() {
  return Teams.findAndCountAll({ 
    offset: 0,
    limit: 10,
    order: [['score', 'DESC']],
    include: [
      {
        model: Comments,
        attributes: ['message', 'author_name', 'author_id', 'createdAt', 'updatedAt', 'team_id'],
      }
    ]
  })
}

// Удаление команды по ID
export async function deleteTeamById(id: number) {
  return Comments.destroy({ 
    where: { comment_id: id } 
  })
}
