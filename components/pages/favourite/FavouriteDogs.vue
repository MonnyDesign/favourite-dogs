<template>
  <div class="container">
    <h1 class="my-12">My favourite dogs ({{ this.myFavouriteList.length }})</h1>

    <div class="grid grid-cols-12 md:gap-20">
      <div class="col-span-full lg:col-span-8" v-for="favourite in myFavouriteList" :key="favourite">
        <template v-if="!checkTypeFunc(favourite)">
          <img width="400" height="auto" :src="favourite"/>
        </template>

        <template v-if="checkTypeFunc(favourite)">
          <video width="400" height="auto" controls>
            <source :src="favourite" type="video/mp4">
            <source :src="favourite" type="video/ogg">
          </video>
        </template>

        <div class="my-4 text-base"> 
          <button class="bg-green-500 py-4 px-6 hover:bg-blue-900 hover:text-green-500" @click="removeSingleItem(favourite)">Remove dog</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default({
    data: () => ({
      myFavouriteList: [],
      isVideo: false,
      checkType: '',
      
    }),
    beforeMount(){
      this.myFavouriteList = JSON.parse(localStorage.getItem("favourites") || '[]');
    },
    methods: {
      // Remove image/video form selection
      removeSingleItem(event){
        this.myFavouriteList.splice(this.myFavouriteList.indexOf(event), 1);
        localStorage.setItem("favourites", JSON.stringify(this.myFavouriteList))
      },

      // Check filename extension
      checkTypeFunc(item){
        this.checkType = item.split('.');
        if(this.checkType[this.checkType.length - 1] != 'mp4'){
          return this.isVideo = false;
        } else{
          return this.isVideo = true;
        }
      }
    }
  })
</script>
