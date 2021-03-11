<template>
<div>
    <q-table
        title=""
        :data="data"
        :columns="colunas"
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
           @click="$emit('modalActive')"
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
            <q-btn
              color="amber"
              icon-right="mode_edit"
              no-caps
              flat
              dense
              @click="$emit('modalActive', '2')"
            />
          </q-td>
        </template>
      </q-table>
      </div>
</template>
<script>

import { Aeronave } from '../../../domain/aeronave/Aeronave'
import { api } from '../../../boot/axios'
import AeronaveService from '../../../domain/aeronave/AeronaveService'

export default {
  aeronave: new Aeronave(),
  props: {
    colunas: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      data: []
    }
  },

  created () {
    this.service = new AeronaveService(api)
    this.service
      .findAll()
      .then((response) => {
        this.data = response.data
      })
  },
  methods: {

    deleteSelected () {

    },
    deleteval (row) {
      this.service = new AeronaveService(api)
      this.service.delete(row.id)
        .then(() => {
          const indice = this.data.indexOf(row)
          this.data.splice(indice, 1)
          this.mensagem = 'Foto removida com sucesso'
        }, err => {
          this.mensagem = err.message
        })
    }
  }
}
</script>
