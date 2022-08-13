<template>

<div class="osero">

<v-card
color="light-blue lighten-1">


   <v-card
 color="black"
 height="4"
  width="596"
    shaped
  tile
 >
 </v-card>
<v-card
 color="black"
 height="588"
  width="596"
    shaped
  tile
 >

<v-flex 
 class="d-flex justify-space-between mx-1">  
          <v-sheet class="board_1"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_1 = !f_1"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_1 = !b_1"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_1"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_1"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

 <v-sheet class="board_2"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_2 = !f_2"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_2 = !b_2"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_2"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_2"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

 <v-sheet class="board_3"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_3 = !f_3"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_3 = !b_3"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_3"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_3"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

 <v-sheet class="board_4"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_4 = !f_4"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_4 = !b_4"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_4"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_4"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_5"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_5 = !f_5"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_5 = !b_5"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_5"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_5"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_6"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_6 = !f_6"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_6 = !b_6"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_6"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_6"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_7"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_7 = !f_7"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_7 = !b_7"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_7"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_7"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_8"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="1_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_8 = !f_8"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_8 = !b_8"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_8"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_8"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>
</v-flex>





<v-flex my-1
class="d-flex justify-space-between mx-1">
<v-sheet class="board_9"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_9 = !f_9"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_9 = !b_9"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_9"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_9"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_10"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_10 = !f_10"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_10 = !b_10"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_10"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_10"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_11"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_11 = !f_11"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_11 = !b_11"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_11"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_11"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_12"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_12 = !f_12"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_12 = !b_12"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_12"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_12"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_13"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_13 = !f_13"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_13 = !b_13"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_13"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_13"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_14"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_14 = !f_14"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_14 = !b_14"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_14"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_14"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_15"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_15 = !f_15"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_15 = !b_15"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_15"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_15"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_16"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="2_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_16 = !f_16"
      >
      </v-btn>
      <v-btn class="mt-n10 ml-n1"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_16 = !b_16"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_16"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_16"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>
</v-flex>


<v-flex my-1
class="d-flex justify-space-between mx-1">
<v-btn id="2_dannme"
v-for="item_b in 8"
        :key="item_b"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
></v-btn>
</v-flex>



<v-flex my-1
class="d-flex justify-space-between mx-1">
<v-btn id="3_dannme"
v-for="item_c in 8"
        :key="item_c"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
</v-btn>
</v-flex>



<v-flex my-1
class="d-flex justify-space-between mx-1">
<v-btn id="4_dannme"
v-for="item_d in 8"
        :key="item_d"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
></v-btn>
</v-flex>


<v-flex my-1
class="d-flex justify-space-between mx-1">
<v-btn id="5_dannme"
v-for="item_e in 8"
        :key="item_e"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
></v-btn>
</v-flex>

<v-flex my-1
class="d-flex justify-space-between mx-1">
<v-btn id="6_dannme"
v-for="item_f in 8"
        :key="item_f"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
></v-btn>
</v-flex>

<v-flex my-1
class="d-flex justify-space-between mx-1">
<v-btn id="7_dannme"
v-for="item_g in 8"
        :key="item_g"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
></v-btn>
</v-flex>



</v-card>

  <v-card
 color="black"
 height="4"
  width="596"
    shaped
  tile
 >
 </v-card>

</v-card>

  

</div>



</template>

<script>
export default {
    data: () => ({
      expand: false,
      f_1: false,
      b_1: false,
      f_2: false,
      b_2: false,
      f_3: false,
      b_3: false,
      f_4: false,
      b_4: false,
      f_5: false,
      b_5: false,
      f_6: false,
      b_6: false,
      f_7: false,
      b_7: false,
      f_8: false,
      b_8: false,
      f_9: false,
      b_9: false,
      f_10: false,
      b_10: false,
      f_11: false,
      b_11: false,
      f_12: false,
      b_12: false,
      f_13: false,
      b_13: false,
      f_14: false,
      b_14: false,
      f_15: false,
      b_15: false,
      f_16: false,
      b_16: false,

    }),
  }
</script>
