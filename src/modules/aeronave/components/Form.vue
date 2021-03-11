<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="aeronave.name"
        label="Nome da aeronave *"
        hint="Nome da aeronave"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, escreva alguma coisa']"
      />

      <q-input
        filled
        v-model="aeronave.project"
        label="Nome do projeto *"
        hint="Nome do projeto"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, escreva alguma coisa']"
      />

      <q-input
        filled
        v-model="aeronave.registration"
        label="Número da matricula *"
        hint="Matricula"
        mask="#####"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, escreva alguma coisa']"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" @click="createNew()"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>
<script>
import { Aeronave } from '../../../domain/aeronave/Aeronave'
import AeronaveService from '../../../domain/aeronave/AeronaveService'
import { api } from '../../../boot/axios'
export default {
  props: ['id'],
  data () {
    return {
      aeronave: new Aeronave(),
      accept: false
    }
  },

  created () {
    this.service = new AeronaveService(api)
  },

  methods: {

    onReset () {
      this.nome = null
      this.projeto = null
      this.matricula = null
    },

    createNew () {
      this.service
        .create(this.aeronave)
        .then(() => {
          this.$router.push({ name: 'home' })
          this.aeronave = new Aeronave()
        }, err => console.log(err))
    }
  }
}
</script>
