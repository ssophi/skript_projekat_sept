<template>
    <div class="workout-item">
        <b>{{trening.tip}}</b>
        <p>satnica: od {{trening.sati_od}} do {{trening.sati_do}}</p>
        <button @click="onSubmit" class="btn-reserve">RESERVE</button>
    </div>
</template>

<script>
// import axios from 'axios'
import { mapActions, mapState } from 'vuex';

export default {
  name:"UserReserveWorkoutItem",
  props:["trening"],
  data(){
    return {
      form:{
          username: localStorage.getItem('username'),
          terminId: this.trening.id
      }
    }
  },
//   methods:{
//     reserve(){
//       const token = localStorage.getItem('jwt')
//       const username = localStorage.getItem('username')
//       console.log('Bearer ', token)
//       console.log('username: ', username)
//         console.log('http://localhost:5000/rezervacija', this.form)
//         axios.post('http://localhost:5000/rezervacija', this.form, {
//           headers:{
//           'Authorization': 'Bearer '+ token
//           }
//         })
//         .then(res => {
//             // console.log(res.data.token)
//             })
//             this.$router.push('user') 
//         .catch(err => console.log(err))
//     }
//   }
methods: {
    ...mapActions([
      'reserveTrening'
    ]),

    onSubmit(e) {
      console.log("submitujem")
        e.preventDefault();

        this.reserveTrening(this.form);
        // localStorage.setItem('username', this.form.username)
        // this.$router.push('/user');
      }
  }


}
</script>

<style scoped>
    .workout-item {
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