export default class AeronaveService {
  constructor (api) {
    this._resource = api
  }

  findAll () {
    return this._resource
      .get('/aeronave')
  }

  findBy (id) {
    return this._resource
      .get('/aeronave'
        , {
          params: {
            id: id
          }
        })
      .then((response) => {
        this.data = response.data
      })
  }

  delete (id) {
    return this._resource
      .delete(`/aeronave/${id}`)
      .then((response) => {
        this.data = response.data
      })
  }
}
