import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import type { ReactNode, FC, ElementRef } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { fetchRecommendDataAction } from '../../store/recommend'
import { useAppDispatch, appShallowEqual, useAppSelector } from '@/store'
import { Carousel } from 'antd'
import classNames from 'classnames'
interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const appDispatch = useAppDispatch()
  const { bannerList } = useAppSelector((state) => {
    return {
      bannerList: state.recommend.bannerList
    }
  }, appShallowEqual)
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  useEffect(() => {
    appDispatch(fetchRecommendDataAction())
  }, [])
  const handleBeforeChange = () => {
    // setCurrentIndex(currentIndex--)
  }
  const handleAfterChange = (current: number) => {
    setCurrentIndex(current)
  }
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  let bgImage = null
  if (bannerList.length > 0 && currentIndex >= 0) {
    bgImage = bannerList[currentIndex].imageUrl + '?imageView&blur=40x20'
  }
  return (
    <div>
      <BannerWrapper
        style={{
          background: `url('${bgImage}') center center / 6000px`
        }}
      >
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel
              autoplay
              dots={false}
              autoplaySpeed={3000}
              effect="fade"
              ref={bannerRef}
              beforeChange={handleBeforeChange}
              afterChange={handleAfterChange}
            >
              {bannerList.map((item: any) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </div>
                )
              })}
            </Carousel>
            <ul className="dots">
              {bannerList.map((item, index) => {
                return (
                  <li key={item.imageUrl}>
                    <span
                      className={classNames('item', {
                        active: index === currentIndex
                      })}
                    ></span>
                  </li>
                )
              })}
            </ul>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={handlePrevClick}></button>
            <button className="btn right" onClick={handleNextClick}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
}
export default memo(Banner)
