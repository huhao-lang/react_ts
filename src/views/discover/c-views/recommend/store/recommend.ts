import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'
export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (_, { dispatch }) => {
    getBanners().then((res) => {
      const data = res.banners
      dispatch(setBannerlist(data))
    })
  }
)
interface IRecommendState {
  bannerList: any[]
}
const initialState: IRecommendState = {
  bannerList: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannerlist(state, { payload }) {
      state.bannerList = payload
    }
  }
})

export const { setBannerlist } = recommendSlice.actions
export default recommendSlice.reducer
