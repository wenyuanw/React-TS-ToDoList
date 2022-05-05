import { FC, ReactElement, useCallback, useEffect, useReducer, useRef } from 'react'

import TdInput from './Input'
import TdList from './List'
import { ACTION_TYPE, IState, ITodo } from './typings'
import { todoReducer } from '../reducer'

// 惰性初始化
function init(initTodoList: ITodo[]): IState {
  return {
    todoList: initTodoList
  }
}

const TodoList: FC = (): ReactElement => {

  const [state, dispatch] = useReducer(todoReducer, [], init)

  // 一开始由于模板生成的代码中使用了 React.StrictMode 导致这个 hook 运行了两次
  // https://zh-hans.reactjs.org/docs/strict-mode.html
  // https://github.com/reactwg/react-18/discussions/18

  const didInitList = useRef(false)

  useEffect(() => {
    // In this case, whether we are mounting or remounting,
    // we use a ref so that we only run this function once.
    if (!didInitList.current) {
      didInitList.current = true
      const todoList = JSON.parse(localStorage.getItem('todolist') || '[]') as ITodo[]

      dispatch({
          type: ACTION_TYPE.INIT_TODOLIST,
          payload: todoList
        }
      )
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(state.todoList))
  }, [state.todoList])

  const addTodo = useCallback((todo: ITodo): void => {
    dispatch({
        type: ACTION_TYPE.ADD_TODO,
        payload: todo
      }
    )
  }, [])

  const removeTodo = useCallback((id: number): void => {
    dispatch({
        type: ACTION_TYPE.REMOVE_TODO,
        payload: id
      }
    )
  }, [])

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
        type: ACTION_TYPE.TOGGLE_TODO,
        payload: id
      }
    )
  }, [])

  return (
    <div className="todo-list">
      <TdInput addTodo={ addTodo } todoList={ state.todoList }/>
      <TdList
        todoList={ state.todoList }
        removeTodo={ removeTodo }
        toggleTodo={ toggleTodo }
      />
    </div>
  )
}

export default TodoList
