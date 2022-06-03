import { defineStore } from 'pinia'
import { ThemeEnum } from '@/enums/appEnum'
import { APP_DARK_MODE_KEY_ } from '@/enums/cacheEnum'
import { darkMode } from '@/settings/designSetting';

interface AppState {
  darkMode?: ThemeEnum
}
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: ThemeEnum.Light
  }),
  actions: {
    setDarkMode(mode: ThemeEnum): void {
      this.darkMode = mode
      localStorage.setItem(APP_DARK_MODE_KEY_, mode)
    }
  },
  getters: {
    getDarkMode(): 'light' | 'dark' | string {
      return this.darkMode || localStorage.getItem(APP_DARK_MODE_KEY_) || darkMode
    }
  }
})
