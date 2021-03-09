class Aeronave {
  constructor (id = '', name = '', registration = '', project = '') {
    this.id = id
    this.name = name
    this.registration = registration
    this.project = project
  }
}

export function getColumnsFromAttributes () {
  const aeronave = new Aeronave()
  const columns = [
    { name: aeronave.name, align: 'center', label: 'Nome', field: aeronave.name, sortable: true },
    { name: aeronave.registration, label: 'Registration', field: aeronave.registration, sortable: true },
    { name: aeronave.project, label: 'Project', field: aeronave.project }
  ]
  return columns
}
