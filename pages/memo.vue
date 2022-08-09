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
          <v-sheet
        v-for="item_b in 8"
        :key="item_b"
  color="green lighten-1"
  height="70"
  width="70"
  fab
  tile
>
 <v-btn
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
          @click="toggle"
        >
       
        </v-btn>
            
          


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
      hidden: false,
    }),
  }
</script>
