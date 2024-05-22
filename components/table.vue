<template>
  <table>
    <thead>
      <tr>
        <th v-for="item in head" :key="item.id">
          <span>
            {{item.name}}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <slot name="body" />
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'TableComponent',
  props: {
    head: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
table {
  width: 100%;
  border: 1px solid #b3b6bc;
  border-radius: 20px;
  text-align: center;
}
table th{
  border-left:1px solid #2e2e33;
  border-right: 1px solid #2e2e33;
  background-color: #54545A;
  color: white;
  padding:10px;
  font-weight: 700;
}
table tr{
  border-bottom: 1px solid #2e2e33;
  border-top: 1px solid #2e2e33;
}
table td{
  border-left:1px solid #2e2e33;
  border-right: 1px solid #2e2e33;
  padding:10px;
}
</style>
