import type { SequelizeOptions } from 'sequelize-typescript'
import { Sequelize } from 'sequelize-typescript'
import { topicModel } from '../models/topicModel'
import { commentModel } from '../models/commentModel'
import { likeModel } from '../models/likeModel'
import { teamModel } from '../models/teamModel'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_1_PORT_5432_TCP_ADDR } =
  process.env

export const sequelizeOptions: SequelizeOptions = {
  host: POSTGRES_1_PORT_5432_TCP_ADDR || 'localhost',
  username: POSTGRES_USER || 'postgres',
  password: POSTGRES_PASSWORD || 'postgres',
  database: POSTGRES_DB  || 'postgres',
  dialect: 'postgres',
  port: Number(POSTGRES_PORT),
  ssl: false,
  dialectOptions: {},
}

export const sequelize = new Sequelize(sequelizeOptions)
export const Topics = sequelize.define(
  'Topics',
  topicModel,
  {
    tableName: 'topics',
    initialAutoIncrement: '100'
  })

export const Comments = sequelize.define(
  'Comments',
  commentModel,
  {
    tableName: 'comments',
    initialAutoIncrement: '1000'
  })
export const Like = sequelize.define(
  'Like',
  likeModel,
  {
    tableName: 'like',
    initialAutoIncrement: '100000'
  })
  export const Teams = sequelize.define(
  'Teams',
  teamModel, 
  {
    tableName: 'teams',
    initialAutoIncrement: '100'
  })
  
Topics.hasMany(Comments, {foreignKey: 'topic_id'})

Comments.hasMany(Comments, {foreignKey: 'bind_comment_id'})

Comments.hasMany(Like, {foreignKey: 'comment_id'})

export async function dbConnect() {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    console.log('Connection has been established successfully')
  } catch (e) {
    console.error('Unable to connect to the database: ', e)
  }
}

export function startApp(player_id:string) {
  dbConnect().then(
    () => {
      Teams.create({
        teamName: 'Цыплята',
        victories: 10,
        games: 30,
        words: 100,
        player_id: player_id
      })
      Teams.create({
        teamName: 'Школьники',
        victories: 20,
        games: 40,
        words: 200,
        player_id: player_id
      })
      Teams.create({
        teamName: 'Студенты',
        victories: 40,
        games: 50,
        words: 400,
        player_id: player_id
      })
      Teams.create({
        teamName: 'Эрудиты',
        victories: 50,
        games: 50,
        words: 1000,
        player_id: player_id
      })
    }
  )
}
