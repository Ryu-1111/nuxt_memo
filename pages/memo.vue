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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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
      <v-btn class="ml-8 mt-n10"
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

<v-sheet class="board_17"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_17 = !f_17"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_17 = !b_17"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_17"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_17"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_18"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_18 = !f_18"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_18 = !b_18"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_18"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_18"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_19"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_19 = !f_19"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_19 = !b_19"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_19"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_19"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_20"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_20 = !f_20"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_20 = !b_20"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_20"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_20"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_21"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_21 = !f_21"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_21 = !b_21"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_21"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_21"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_22"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_22 = !f_22"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_22 = !b_22"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_22"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_22"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_23"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_23 = !f_23"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_23 = !b_23"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_23"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_23"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_24"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="3_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_24 = !f_24"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_24 = !b_24"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_24"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_24"
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

<v-sheet class="board_25"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_25 = !f_25"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_25 = !b_25"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_25"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_25"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_26"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_26 = !f_26"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_26 = !b_26"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_26"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_26"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_27"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_27 = !f_27"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_27 = !b_27"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_27"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_27"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_28"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_28 = !f_28"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_28 = !b_28"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_28"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_28"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_29"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_29 = !f_29"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_29 = !b_29"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_29"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_29"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_30"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_30 = !f_30"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_30 = !b_30"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_30"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_30"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_31"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_31 = !f_31"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_31 = !b_31"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_31"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_31"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_32"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="4_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_32 = !f_32"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_32 = !b_32"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_32"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_32"
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

<v-sheet class="board_33"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_33 = !f_33"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_33 = !b_33"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_33"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_33"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_34"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_34 = !f_34"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_34 = !b_34"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_34"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_34"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_35"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_35 = !f_35"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_35 = !b_35"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_35"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_35"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_36"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_36 = !f_36"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_36 = !b_36"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_36"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_36"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_37"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_37 = !f_37"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_37 = !b_37"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_37"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_37"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_38"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_38 = !f_38"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_38 = !b_38"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_38"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_38"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_39"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_39 = !f_39"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_39 = !b_39"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_39"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_39"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_40"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="5_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_40 = !f_40"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_40 = !b_40"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_40"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_40"
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

<v-sheet class="board_41"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_41 = !f_41"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_41 = !b_41"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_41"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_41"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_42"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_42 = !f_42"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_42 = !b_42"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_42"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_42"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_43"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_43 = !f_43"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_43 = !b_43"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_43"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_43"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_44"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_44 = !f_44"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_44 = !b_44"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_44"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_44"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_45"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_45 = !f_45"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_45 = !b_45"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_45"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_45"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_46"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_46 = !f_46"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_46 = !b_46"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_46"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_46"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_47"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_47 = !f_47"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_47 = !b_47"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_47"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_47"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_48"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="6_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_48 = !f_48"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_48 = !b_48"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_48"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_48"
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

<v-sheet class="board_49"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_49 = !f_49"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_49 = !b_49"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_49"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_49"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_50"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_50 = !f_50"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_50 = !b_50"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_50"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_50"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_51"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_51 = !f_51"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_51 = !b_51"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_51"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_51"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_52"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_52 = !f_52"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_52 = !b_52"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_52"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_52"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_53"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_53 = !f_53"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_53 = !b_53"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_53"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_53"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_54"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_54 = !f_54"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_54 = !b_54"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_54"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_54"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_55"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_55 = !f_55"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_55 = !b_55"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_55"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_55"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_56"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="7_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_56 = !f_56"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_56 = !b_56"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_56"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_56"
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

<v-sheet class="board_57"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_57 = !f_57"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_57 = !b_57"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_57"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_57"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_58"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_58 = !f_58"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_58 = !b_58"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_58"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_58"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_59"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_59 = !f_59"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_59 = !b_59"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_59"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_59"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_60"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_60 = !f_60"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_60 = !b_60"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_60"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_60"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_61"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_61 = !f_61"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_61 = !b_61"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_61"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_61"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_62"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_62 = !f_62"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_62 = !b_62"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_62"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_62"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_63"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_63 = !f_63"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_63 = !b_63"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_63"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_63"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

<v-sheet class="board_64"
  color="green darken-1"
  height="70"
  width="70"
  fab
  tile
>
<v-col class="8_dannme">
      <v-btn class="mt-n10 ml-n3"
  x-small
  fab
  height="10"
          width="10"
        color="white"
        @click="f_64 = !f_64"
      >
      </v-btn>
      <v-btn class="ml-8 mt-n10"
  x-small
  fab
  height="10"
          width="10"
        color="black"
        @click="b_64 = !b_64"
      >
      </v-btn>      

      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="f_64"
          color="white"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
      <v-expand-transition>
       <v-avatar class="mt-n7 ml-n1"
          v-show="b_64"
          color="black"
          height="55"
          width="55"
        ></v-avatar>
      </v-expand-transition>
    </v-col>
</v-sheet>

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
      f_17: false,
      b_17: false,
      f_18: false,
      b_18: false,
      f_19: false,
      b_19: false,
      f_20: false,
      b_20: false,
      f_21: false,
      b_21: false,
      f_22: false,
      b_22: false,
      f_23: false,
      b_23: false,
      f_24: false,
      b_24: false,
      f_25: false,
      b_25: false,
      f_26: false,
      b_26: false,
      f_27: false,
      b_27: false,
      f_28: false,
      b_28: false,
      f_29: false,
      b_29: false,
      f_30: false,
      b_30: false,
      f_31: false,
      b_31: false,
      f_32: false,
      b_32: false,
      f_33: false,
      b_33: false,
      f_34: false,
      b_34: false,
      f_35: false,
      b_35: false,
      f_36: false,
      b_36: false,
      f_37: false,
      b_37: false,
      f_38: false,
      b_38: false,
      f_39: false,
      b_39: false,
      f_40: false,
      b_40: false,
      f_41: false,
      b_41: false,
      f_42: false,
      b_42: false,
      f_43: false,
      b_43: false,
      f_44: false,
      b_44: false,
      f_45: false,
      b_45: false,
      f_46: false,
      b_46: false,
      f_47: false,
      b_47: false,
      f_48: false,
      b_48: false,
      f_49: false,
      b_49: false,
      f_50: false,
      b_50: false,
      f_51: false,
      b_51: false,
      f_52: false,
      b_52: false,
      f_53: false,
      b_53: false,
      f_54: false,
      b_54: false,
      f_55: false,
      b_55: false,
      f_56: false,
      b_56: false,
      f_57: false,
      b_57: false,
      f_58: false,
      b_58: false,
      f_59: false,
      b_59: false,
      f_60: false,
      b_60: false,
      f_61: false,
      b_61: false,
      f_62: false,
      b_62: false,
      f_63: false,
      b_63: false,
      f_64: false,
      b_64: false,

    }),
  }
</script>
