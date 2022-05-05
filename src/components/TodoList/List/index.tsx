import { ITodo } from '../typings'
import { FC, ReactElement } from 'react'
import TdItem from './item'

interface IProps {
  todoList: ITodo[]
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const TdList: FC<IProps> = ({
  todoList,
  removeTodo,
  toggleTodo,
}): ReactElement => {
  return (
    <div className='td-list'>
      {todoList &&
        todoList.map((todo: ITodo) => {
          return (
            <TdItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          )
        })}
    </div>
  )
}

export default TdList
