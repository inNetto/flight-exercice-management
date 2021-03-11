<template>
  <div class="q-pa-md row justify-center">
    <Modal ref="dialog" :id="id"/>
    <Card :subtitle="subtitle">
      <DataTable @modalActive="showModal()" :colunas="colunas" />
    </Card>
  </div>
</template>
<script>

import Modal from '../components/Modal'
import DataTable from '../components/DataTable'
import Card from '../../../components/shared/Card'
import { columns } from '../../../domain/aeronave/Aeronave'

export default {
  components: { Modal, DataTable, Card },
  data () {
    return {
      colunas: columns,
      subtitle: 'Configuração de aeronaves',
      id: ''

    }
  },
  methods: {
    showModal (_id) {
      if (_id) {
        this.id = _id
      }
      this.$refs.dialog.open()
    }
  }
}

</script>
