<template>
  <div>
    <q-card class="my-card col-8">
        <q-card-section>
           <div class="text-h6">{{ this.title}}</div>
            <div class="text-subtitle2">{{ this.subtitle }}</div>
            <slot></slot>
        </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: {
    subtitle: {
      type: String
    }
  },
  data () {
    return { title: 'Configuração do exercício' }
  }
}
</script>
