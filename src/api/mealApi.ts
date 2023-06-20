import api from './api'
import { ApiRequestConfig } from './api.types'
const URLS = {
  fetchMealUrl: 'api/json/v1/1/list.php',
}
export type Meal = {
  strCategory: string
}

export type MealsResponse = {
  meals: Meal[]
}
export const searchMeals = (query: string, config: ApiRequestConfig): Promise<Meal[]> => {
  return api
    .get<MealsResponse>(URLS.fetchMealUrl, {
      baseURL: 'https://www.themealdb.com/',
      params: {
        c: query,
      },
      ...config,
    })
    .then((data) => data.data.meals)
}
