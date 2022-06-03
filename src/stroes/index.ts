import { defineStore } from 'pinia'
interface IUserInfoProps {
  name: string
  avatar: string
  mobile: number
  auths: string[]
}

interface UserState {
  userInfo: Nullable<IUserInfoProps>
}

// 创建 store
export const useUserStore = defineStore({
  id: 'app-user', // 唯一 ID，可以配合 Vue devtools 使用
  state: (): UserState => ({
    // userInfo
    userInfo: null
  }),
  getters: {
    getUserInfo(): Nullable<IUserInfoProps> {
      return this.userInfo || null
    }
  },
  actions: {
    setUserInfo(info: Nullable<IUserInfoProps>) {
      this.userInfo = info ?? null
    },
    resetState() {
      this.userInfo = null
    },

    /**
     * @description: fetchUserInfo
     */
    async fetchUserInfo(params: ReqParams) {
      const res = await fetchApi.userInfo(params)
      if (res) {
        this.setUserInfo(res)
      }
    }
  }
})
