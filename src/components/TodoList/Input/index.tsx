import { FC, ReactElement, useRef } from 'react'
import { ITodo } from '../typings'

interface IProps {
  addTodo: (todo: ITodo) => void
  todoList: ITodo[]
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)

  const addItem = (): void => {
    const val: string = inputRef.current!.value.trim()

    if (val.length) {
      const isExist = todoList.find((todo) => todo.content === val)

      if (isExist) {
        return alert('已存在该项')
      }

      addTodo({
        id: new Date().getTime(),
        content: val,
        completed: false,
      })

      inputRef.current!.value = ''
    }
  }

  return (
    <div className='rounded-md shadow-sm todo-input my-2'>
      <input
        className='rounded-md pl-2 w-200'
        type='text'
        placeholder='请输入待办项'
        ref={inputRef}
      />
      <button
        className='w-8 ml-2 bg-sky-600 hover:bg-sky-700 rounded-full te font-bold text-white'
        onClick={addItem}
      >
        +
      </button>
    </div>
  )
}

export default TdInput
