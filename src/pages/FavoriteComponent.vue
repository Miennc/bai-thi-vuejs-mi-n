<template>
  <div>

  </div>
</template>


<script >
export  default  {
  data(){
    return {

    }
  },
  mounted() {
    if(localStorage.getItem('favorite')){
      this.favorite = JSON.parse(localStorage.getItem('favorite'))
    }
  }
}
</script>

<style>

</style>