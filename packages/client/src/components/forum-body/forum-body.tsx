import React from 'react'

import './forum-body.scss'
import { ITopic } from '../../services/store/topic/type'
import { getDateDMY } from '../../utils/getDate'

export function ForumBody(props: ITopic) {
  const createDate = () => getDateDMY(props.createdAt)
  const updateDate = () => getDateDMY(props.updatedAt)
  return (
    <div className="forum-body">
      <div className="forum-body__text">{props.question}</div>
      <div className="forum-body__footer">
        <span className="forum-body__date">Создан {createDate()}</span>
        <span className="forum-body__date">Обновлен {updateDate()}</span>
      </div>
    </div>
  )
}
