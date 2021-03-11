<template>
     <q-dialog v-model="show">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <Form :id="id" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script>
import Form from './Form'
export default {
  props: ['id'],
  components: {
    Form
  },
  data () {
    return {
      text: '',
      show: false
    }
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
    }

  }
}
</script>
