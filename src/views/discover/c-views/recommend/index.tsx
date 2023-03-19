import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
// import TopBanner from './c-cpns/top-banner'
import Banner from './c-cpns/banner'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <div>
      {/* <TopBanner /> */}
      <Banner></Banner>
    </div>
  )
}

export default memo(Recommend)
