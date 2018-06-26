<template>
  <div id="video-container">
    <video autoplay loop poster="http://media.w3.org/2010/05/sintel/poster.png" muted="muted">
      <source id="mp4" src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4">
      <source id="webm" src="http://media.w3.org/2010/05/sintel/trailer.webm" type="video/webm">
      <source id="ogv" src="http://media.w3.org/2010/05/sintel/trailer.ogv" type="video/ogg">
      Your browser does not support the video tag. I suggest you upgrade your browser.
      
    </video>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        items: [
              
        ]
      }
    }
  }
</script>

<style lang="stylus">
  #video-container {
      top:0%;
      left:0%;
      height:100%;
      width:100%;
      overflow: hidden;
          position: absolute;
  }
  video {
      position:absolute;
      z-index:0;
          width: 100%;
  }
</style>
