import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: '',
}

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchCollectionStart(state) {
      state.isFetching = true
    },
    fetchCollectionsSuccess(state, {payload}) {
      state.isFetching = false
      state.collections = payload
    },
    fetchCollectionsFailure(state, {payload}) {
      state.isFetching = false
      state.errorMessage = payload
    }
  }
})

// const shopReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case shopActionTypes.FETCH_COLLECTIONS_START:
//       return {
//         ...state,
//         isFetching: true,
//       }
//     case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
//       return {
//         ...state,
//         isFetching: false,
//         collections: payload,
//       }
//     case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
//       return {
//         ...state,
//         isFetching: false,
//         errorMessage: payload,
//       }
//     default:
//       return state
//   }
// }

export const { fetchCollectionStart, fetchCollectionsSuccess, fetchCollectionsFailure } = shopSlice.actions

export default shopSlice.reducer
