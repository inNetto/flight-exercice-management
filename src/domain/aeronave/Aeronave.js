export class Aeronave {
  constructor (id = '', name = '', registration = '', project = '') {
    this.id = id
    this.name = name
    this.registration = registration
    this.project = project
  }
}

export const columns = [
  { name: 'name', align: 'center', label: 'Name', field: 'name', sortable: true },
  { name: 'registration', label: 'Registration', field: 'registration', sortable: true },
  { name: 'project', label: 'Project', field: 'project', sortable: true },
  { name: 'action', label: 'Action', field: 'action', align: 'center' }
]
