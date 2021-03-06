const STORAGE_KEY = 'todos-vuejs'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (item) {
    let obj = this.fetch()
    obj.push(item)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
  }
}
