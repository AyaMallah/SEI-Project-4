export const getPayload = () => {
  const token = window.localStorage.getItem('token')
  if (!token) return

  const splitToken = token.split('.')

  if (splitToken.length < 3) return
  return JSON.parse(atob(splitToken[1]))
}