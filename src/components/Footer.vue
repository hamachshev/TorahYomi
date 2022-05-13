<script>
import { defineComponent } from 'vue'
import 'vue-universal-modal/dist/index.css'

import VueUniversalModal from 'vue-universal-modal'

// app.use(VueUniversalModal, {
//   teleportTarget: '#modals'
// })

export default {
  components: { VueUniversalModal },


  data() {
    return {
      num1: null,
      num2: null,
      sum: null,
      open: false,
      closeModal: false,

    }
  },
  methods: {
    openMod() {
      $("#dialog-message").dialog({
        modal: true,

        buttons: {
          Exit: function () {
            $(this).dialog("close");
          }
        }
      });
    },
    calculate() {
      this.sum = this.num1 + this.num2
    }
  },
  closeIt(){
    this.open = false;
  }

}
</script>
<template>
  <div class="footer">
     <button @click="open = true" id="name">Sponsored in the memory of Gershon Yosef Ben Yisrael Moshe</button>
  </div>
      <Modal v-if="open" >
<!--        :close="closeModal"-->
      <div class="modal">
        <div class="row gy-2 gx-3 align-items-center">
<!--          <div class="col-auto">-->
        <p>You found the secret button! Enjoy a calculator!</p>
<!--          </div>-->
        <input v-model.number="num1"  placeholder="ex. 999"   /> + <input v-model.number="num2"  placeholder="ex. 999"  /> = <p id="sum" >{{sum}}</p>
        <button id="enter" @click="calculate">Add</button>
        <button @click="open = false">Close</button>
        </div>
        </div>
      </Modal>


</template>
<style scoped>
.footer {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  background-color: #01adee;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  padding: 4px;
  justify-content: center;
}
/*.modal {*/
/*  width: 300px;*/
/*  padding: 30px;*/
/*  box-sizing: border-box;*/
/*  background-color: #fff;*/
/*  font-size: 20px;*/
/*  text-align: center;*/
/*}*/
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: fit-content;
  position: fixed;
  top: 35%;
  left: 35%;
  right: 30%;
  color: blueviolet;
  background-color: sandybrown;
}
</style>
