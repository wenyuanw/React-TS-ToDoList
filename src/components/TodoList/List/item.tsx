import { FC, ReactElement } from 'react'
import { ITodo } from '../typings'

interface IProps {
  todo: ITodo
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const TdItem: FC<IProps> = ({ todo, toggleTodo, removeTodo }): ReactElement => {
  const { id, content, completed } = todo

  return (
    <div className='shadow-sm todo-item mb-1 flex items-center'>
      <input
        className='mr-1'
        type='checkbox'
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span
        className='flex-1'
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {content}
      </span>
      <svg
        className='mr-1 fill-red-700 hover:fill-red-500'
        onClick={() => removeTodo(id)}
        width='26'
        height='28'
        viewBox='0 0 26 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M9.43934 2.93934C9.72065 2.65804 10.1022 2.5 10.5 2.5H15.5C15.8978 2.5 16.2794 2.65804 16.5607 2.93934C16.842 3.22064 17 3.60218 17 4V5.5H9V4C9 3.60218 9.15804 3.22064 9.43934 2.93934ZM7 5.5V4C7 3.07174 7.36875 2.1815 8.02513 1.52513C8.6815 0.868749 9.57174 0.5 10.5 0.5H15.5C16.4283 0.5 17.3185 0.868749 17.9749 1.52513C18.6313 2.1815 19 3.07174 19 4V5.5H21.75H24.25C24.8023 5.5 25.25 5.94772 25.25 6.5C25.25 7.05228 24.8023 7.5 24.25 7.5H22.75V24C22.75 24.9283 22.3813 25.8185 21.7249 26.4749C21.0685 27.1313 20.1783 27.5 19.25 27.5H6.75C5.82174 27.5 4.9315 27.1313 4.27513 26.4749C3.61875 25.8185 3.25 24.9283 3.25 24V7.5H1.75C1.19772 7.5 0.75 7.05228 0.75 6.5C0.75 5.94772 1.19772 5.5 1.75 5.5H4.25H7ZM5.25 7.5V24C5.25 24.3978 5.40804 24.7794 5.68934 25.0607C5.97064 25.342 6.35218 25.5 6.75 25.5H19.25C19.6478 25.5 20.0294 25.342 20.3107 25.0607C20.592 24.7794 20.75 24.3978 20.75 24V7.5H18H8H5.25ZM10.5 11.75C11.0523 11.75 11.5 12.1977 11.5 12.75V20.25C11.5 20.8023 11.0523 21.25 10.5 21.25C9.94771 21.25 9.5 20.8023 9.5 20.25V12.75C9.5 12.1977 9.94771 11.75 10.5 11.75ZM16.5 12.75C16.5 12.1977 16.0523 11.75 15.5 11.75C14.9477 11.75 14.5 12.1977 14.5 12.75V20.25C14.5 20.8023 14.9477 21.25 15.5 21.25C16.0523 21.25 16.5 20.8023 16.5 20.25V12.75Z'
        />
      </svg>
    </div>
  )
}

export default TdItem
