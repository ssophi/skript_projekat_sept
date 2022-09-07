<template>
    <div class="masage-item">
       <b>{{masaza.tip}}</b> 
       <p>satnica: od {{masaza.sati_od}} do {{masaza.sati_do}}</p>
       <button @click="reserve()" class="btn-reserve">RESERVE</button>    
     </div>
</template>

<script>

export default {
   name:"UserReserveMassageItem",
   props:["masaza"],
   data(){
   return {
     form:{
         username: localStorage.getItem('username'),
         terminId: this.masaza.id
     }
   }
 },
//  methods:{
//    reserve(){
//      const token = localStorage.getItem('jwt')
//      const username = localStorage.getItem('username')
//      console.log('Bearer ', token)
//      console.log('username: ', username)
//        console.log('http://localhost:5000/rezervacija', this.form)
//        axios.post('http://localhost:5000/rezervacija', this.form, {
//          headers:{
//          'Authorization': 'Bearer '+ token
//          }
//        })
//        .then(res => {
//            // console.log(res.data.token)
//            })
//            this.$router.push('user') 
//        .catch(err => console.log(err))
//    }
//  }
}
</script>

<style scoped>
   .masage-item {
   background: #f4f4f4;
   padding: 10px;
   border-bottom: 1px #ccc dotted;
 }

 .btn-reserve {
   display: inline-block;
   border: none;
   background: #555;
   color: #fff;
   padding: 7px 20px;
   cursor: pointer;
   border-radius: 10px;
 }
</style>