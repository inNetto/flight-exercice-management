<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="nome"
        label="Nome da aeronave *"
        hint="Nome da aeronave"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, escreva alguma coisa']"
      />

      <q-input
        filled
        v-model="projeto"
        label="Nome do projeto *"
        hint="Nome do projeto"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, escreva alguma coisa']"
      />

      <q-input
        filled
        v-model="matricula"
        label="Número da matricula *"
        hint="Matricula"
        mask="#####"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, escreva alguma coisa']"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>
<script>
export default {
  data () {
    return {
      nome: null,
      projeto: null,
      matricula: null,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.nome = null
      this.projeto = null
      this.matricula = null
    }
  }
}
</script>
