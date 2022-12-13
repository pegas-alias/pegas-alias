import type { Request, Response } from 'express'
import { processResult } from '../utils/processResult'
import * as teamFunctions from '../funcs/teamsFunctions'

// Получить список команд
export const getTeams = async (req: Request, res: Response) => {
  await processResult(() => {
    return teamFunctions.getAllTeams({ ...req.body })
  }, res, 'Что-то пошло не так'); 
}

// Получить команду по Id
export const getTeamById = async (req: Request, res: Response) => {
  const { id } = req.params
  await processResult(() => {
    return teamFunctions.getTeamById(Number(id))
  }, res, 'Что-то пошло не так');
}

// Создать новую команду
export const createNewTeam = async (req: Request, res: Response) => {
  const { name, victories, games, words, player_id } = req.body
  await processResult(() => {
    return teamFunctions.createNewTeam({
      teamName: name,
      victories: Number(victories),
      games: Number(games),
      words: Number(words),
      player_id: Number(player_id)
    })
  }, res, 'Что-то пошло не так');
}
// Удалить команду
export const deleteTeamById = async (req: Request, res: Response) => {
  const { id } = req.params
  await processResult(() => {
    return teamFunctions.deleteTeamById(Number(id))
  }, res, 'Что-то пошло не так')
}
// Получить список TOP 10
export const getLeaderBoard = async (req: Request, res: Response) => {
  await processResult(() => {
    return teamFunctions.getLeaderBoard({ ...req.body })
  }, res, 'Что-то пошло не так');
}