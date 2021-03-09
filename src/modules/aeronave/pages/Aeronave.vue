<template>
  <div class="q-pa-md row justify-center">
    <Modal ref="dialog"/>
    <Card :subtitle="subtitle">
      <DataTable :columns="columns" />
    </Card>
  </div>
</template>
<script>

import Modal from '../components/Modal'
import DataTable from '../components/DataTable'
import Card from '../../../components/shared/Card'
import { getColumnsFromAttributes } from '../../../domain/aeronave/Aeronave'

export default {
  components: { Modal, DataTable, Card },
  data () {
    return {
      columns: getColumnsFromAttributes,
      subtitle: 'Configuração de aeronaves'
    }
  }
}

</script>
