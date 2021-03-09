<template>
  <div class="q-pa-md row justify-center">
    <Modal ref="dialog"/>
    <q-card class="my-card col-8">
      <q-card-section>
        <div class="text-h6">Configuração do exercício</div>
        <div class="text-subtitle2">Gestão de aeronaves</div>
        <q-table
        title=""
        :data="aeronaves"
        :columns="columns"
        row-key="name"
        selection="multiple"
        :selected.sync="selected"
      >
        <template v-slot:top-right>
          <q-btn
            color="secondary"
            icon-right="delete_forever"
            no-caps
            @click="deleteSelected"
          />
          <q-btn
            color="primary"
            icon-right="add"
            no-caps
           @click="showModal"
          />
        </template>
        <template v-slot:body-cell-action="props">
          <q-td :props="props">
            <q-btn
            color="negative"
            icon-right="delete"
            no-caps
            flat
            dense
            @click="deleteval(props.row)"
          />
          </q-td>
        </template>
      </q-table>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { api } from '../../../boot/axios'
import AeronaveService from '../../../domain/aeronave/AeronaveService'
import Modal from '../components/Modal'
export default {
  components: { Modal },
  data () {
    return {
      alert: false,
      selected: [],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Nome',
          align: 'left',
          field: row => row.nome,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'matricula', align: 'center', label: 'Matricula', field: 'matricula', sortable: true },
        { name: 'projeto', label: 'Projeto', field: 'projeto', sortable: true },
        { name: 'action', label: 'Action', field: 'action' }
      ],
      aeronaves: []
    }
  },
  created () {
    this.service = new AeronaveService(api)
    this.service
      .findAll()
      .then((response) => {
        this.aeronaves = response.data
      })
  },
  methods: {
    showModal () {
      this.$refs.dialog.open()
    },

    deleteSelected () {

    },
    deleteval (row) {
      this.service = new AeronaveService(api)
      this.service.delete(row.id)
        .then(() => {
          const indice = this.aeronaves.indexOf(row)
          this.aeronaves.splice(indice, 1)
          this.mensagem = 'Foto removida com sucesso'
        }, err => {
          this.mensagem = err.message
        })
    }
  }
}

</script>
