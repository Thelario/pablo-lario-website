<template>
  <div class="background">

    <!-- HEADER -->

    <div class="header">
      <h1 class="dosis-400">Blog</h1>
      <br>
      <h4 class="dosis-400">The blog is a compendium of thoughts about different topics, mainly game programming.</h4>
      <br>
    </div>

    <div class="container">

      <div class="row">
        <div class="col-4" style="text-align: right;">
          <h5 class="dosis-400">[ ENG ]&emsp;[ 02/06/2024 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/how-is-the-man-i-want-to-be" target="_blank">How is the man I want to be?</a></h5>
        </div>
      </div>

      <div class="row">
        <div class="col-4" style="text-align: right;">
          <h5 class="dosis-400">[ ENG ]&emsp;[ 27/04/2024 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/why-making-your-own-engine-might" target="_blank">Why making your own engine might make you a more creative developer</a></h5>
        </div>
      </div>

      <div class="row">
        <div class="col-4" style="text-align: right;">
          <h5 class="dosis-400">[ ENG ]&emsp;[ 24/02/2024 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/videogames-ethics" target="_blank">I feel like a bad developer for not playing games</a></h5>
        </div>
      </div>

      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

    </div>

    <!-- FOOTER -->

    <div class="footer">
      <div class="background">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link text-dark"><p class="dosis-400">Contact info & socials:</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-blue" href="https://store.steampowered.com/app/2051750/Project_Romboid/" target="_blank"><p class="dosis-400">Steam</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-blue" href="https://github.com/Thelario" target="_blank"><p class="dosis-400">Github</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-blue" href="https://pablo-lario.itch.io/" target="_blank"><p class="dosis-400">Itch.io</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-blue" href="https://substack.com/@pablolario" target="_blank"><p class="dosis-400">Substack</p></a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark"><p class="dosis-400">pablo.lario02@gmail.com</p></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

  </div>
</template>
  
<script>
export default {
  name: 'BlogPage'
}
</script>

<style>
.header {
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 75px;
  padding-bottom: 50px;
  text-align: center;
  background: #F6F5F2;
}
.footer {
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 25px;
  padding-bottom: 25px;
  background: #F6F5F2;
  margin-top: 20px;
}
a {
  text-decoration: none;
}
</style>