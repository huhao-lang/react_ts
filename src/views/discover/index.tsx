import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'
// import { useSelector, useDispatch } from 'react-redux'
import { setNum } from '@/store/modules/counter'
import { useAppSelector, useAppDispatch, appShallowEqual } from '@/store'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  const { num } = useAppSelector((state) => {
    return {
      num: state.counter.num
    }
  }, appShallowEqual)
  const dispatch = useAppDispatch()
  function handleAdd(num: number) {
    dispatch(setNum(num))
  }
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
