<template>
  <div id="app">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    html{
        background: #F5F5DC;
    }

    p{
      margin-top: 10px;
    }

    .container{
      margin-top: 30px;
    }

    #bottom{
      margin-bottom: 30px;
    }
</style>
