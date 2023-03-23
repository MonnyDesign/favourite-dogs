<template>
  <div class="container">
    <h1 class="py-12">Select a dog</h1>

    <div class="grid grid-cols-12 md:gap-20">
      <div class="col-span-full lg:col-span-8">
        <template v-if="!isVideo">
          <img width="400" height="auto" :src="activeImage"/>
        </template>

        <template v-if="isVideo">
          <video width="400" height="auto" controls>
            <source :src="activeImage" type="video/mp4">
            <source :src="activeImage" type="video/ogg">
          </video>
        </template>
        <div class="my-4 text-base">
          <button class="bg-green-500 py-4 px-6 hover:bg-blue-900 hover:text-green-500" @click="randomDog()">New Dog</button>
          <button class="bg-green-500 py-4 px-6 hover:bg-blue-900 hover:text-green-500" @click="addToFavourute()">Add to Favourite</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DogsSelection from "~/components/pages/home/DogsSelection"

export default {
  components: {
    DogsSelection
  },
  data: () => ({
    activeImage: [],
    myFavouriteList: [],
    checkType: '',
    isVideo: false,
  }),
  beforeMount(){
    this.randomDog();

    // this.myFavouriteList = JSON.parse(localStorage.getItem("favourites") ? localStorage.getItem("favourites") : '[]');
    
    this.myFavouriteList = JSON.parse(localStorage.getItem("favourites") || '[]');

    // if(localStorage.getItem("favourites")){
    //   this.myFavouriteList = JSON.parse(localStorage.getItem("favourites"));
    // } else{
    //   this.myFavouriteList = [];
    // }

  },
  methods: {
    // Generate random dog images & check the filename extension
    randomDog() {
      fetch( 'https://random.dog/woof.json' )
      .then( res => res.json() )
      .then( data => {
        this.activeImage = data.url;
        this.checkType = data.url;
      } )
      .then( data => {
        this.checkType = this.checkType.split('.');
        if(this.checkType[this.checkType.length - 1] == 'mp4'){
          this.isVideo = true;
        } else{
          this.isVideo = false;
        }
      } );
    },

    // Add current dog image to a "Favourite" (in local storage)
    addToFavourute(){
      if(!this.myFavouriteList.includes(this.activeImage)){
        this.myFavouriteList.push(this.activeImage);
        localStorage.setItem("favourites", JSON.stringify(this.myFavouriteList));
      }
    } 
  }
}
</script>



