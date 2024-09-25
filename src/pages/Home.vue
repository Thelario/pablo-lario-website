<template>
  <div class="background">

    <!-- HEADER -->

    <div class="header">
      <h1 class="dosis-400">Pablo Lario</h1>
      <h2 class="dosis-300">Addicted to books, making games and eating hummus.</h2>
    </div>

    <!-- ABOUT & CONTEXT & CURRENT PROJECTS -->

    <div class="container">
      <div class="row">
        <div class="col-lg">
          <div class="my-col">
            <h5 class="dosis-200"><i> A little context...</i> </h5>
            <br>
            <h4 class="dosis-300">I am a spanish game programmer who is trying to set foot in the industry.
              I've been learning gamedev for more than four years, and it has been an incredible journey so far.
              I just love games a lot. Check my <a href="/portfolio">portofolio</a> if you want.</h4>
            <br>
            <h4 class="dosis-300">It is actually a bit difficult for me to define myself purely as a game programmer,
              because I am currently working as a software engineer at <a href="https://www.softtek.com/" target="_blank">Softtek</a> doing backend development, and I also
              like it a lot.</h4>
            <br>
            <h4 class="dosis-300">I am not only interested in games, but learning in general. I am a really curious
              person, and one of the things that I spend most of my time on is reading books. I just enjoy acquiring
              knowledge of all sorts, which is good for the soul, they say.</h4>
            <br>
            <h4 class="dosis-300">I was born in Albacete, Spain, and even though I love my hometown, I cannot wait
              to discover the world. One of my dreams is to become a digital nomad and travel around the world with
              a laptop. I know It will eventually come true.</h4>
          </div>
        </div>
        <div class="col-lg">
          <img src="../assets/pablo.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="my-col">
            <br>
            <h5 class="dosis-200"><i> Want I am currently working on...</i> </h5>
            <br>
            <h4 class="dosis-300">Even though I've been using Unity and C# for several years, I've decided to learn
              C++ in order to make my own engine from scratch. I think I've become dependent on Unity, and I've never
              tried to build anything systemic. I am sure that making my own engine and making games with it is going
              to make me a much better programmer in the long run. Several articles written by <a href="https://a327ex.com/page/1" target="_blank">a327ex</a> and
              <a href="https://www.glaielgames.com/" target="_blank">Tyler Glaiel</a> have convinced me to do so, and I think it
              is the best decision I could've taken.</h4> 
            <br>
            <h4 class="dosis-300">On October I will enroll on a <a href="https://www.videojuegos-ucm.es/programa.html" target="_blank">Master's Degree in Game Programming</a>. I cannot wait to
              start!!! Even though I hated university, I hope this time will be different. At least I will be making
              games, learn cool things and meet awesome people. Or I hope so...</h4>
          </div>
        </div>
      </div>
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
    name: 'HomePage'
  }
</script>

<style>
.header {
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 75px;
  padding-bottom: 50px;
  text-align: left;
  background: #F6F5F2;
}
.footer {
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: left;
  background: #F6F5F2;
  margin-top: 20px;
}
.my-col {
  text-align: left;
}
img {
  width: 100%;
  height: 100%;
}
a:link { text-decoration: none; }
a:visited { text-decoration: none; }
a:hover { text-decoration: none; }
a:active { text-decoration: none; }
</style>