import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTeamsAPI } from '../../http/game'
import { FilterState } from './type'

export const getTeamsApi = createAsyncThunk(
  'games/getTeamsApi',
  async function (filter: FilterState) {
    const response = await getTeamsAPI(filter);
    return response;
  }
)
