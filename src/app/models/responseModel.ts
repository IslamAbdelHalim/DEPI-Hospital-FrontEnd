export interface ResponseModel {
  status: string,
  token: string,
  data: {
    user: {
      username: string,
      email: string,
      nameSlugs: string
    }
  }
}