<template>
  <div class="q-pa-md row justify-center">
    <Modal ref="dialog"/>
    <Card :subtitle="subtitle">
      <DataTable @modalActive="showModal()" :columns="columns" />
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
      columns: columns,
      subtitle: 'Configuração de aeronaves'
    }
  },
  methods: {
    showModal () {
      this.$refs.dialog.open()
    }
  }
}

</script>
