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
            <h4 class="dosis-300">I am a spanish game programmer who has been making games for a while now. If you are
              curious about them, feel free to check out <a href="/portfolio">my portfolio</a>.</h4>
            <br>
            <h4 class="dosis-300">I am currently working as an Automation Programmer at MercurySteam. It is a dream come true to be able
              to help a big team develop such amazing games.</h4>
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
            <h4 class="dosis-300">Lately I've been writting some articles about life, finances, money and things like that. It would be amazing
              to get some feedback and chat a little bit. If you are interested, check out <a href="/blog" target="_blank">my blog</a>. I always love debating
              about everything, so feel freel to reach out. I am also making prototypes about ideas that I have, but nothing serious for now.
            </h4>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->

    <div class="footer">
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg p-0">
          <ul class="nav justify-content-end w-100">
            <li class="nav-item">
              <span class="nav-link"><p class="dosis-400 fx-footer-text">Contact info & socials:</p></span>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://store.steampowered.com/app/2051750/Project_Romboid/" target="_blank" style="text-decoration-color: var(--fx-accent-hover);"><p class="dosis-400 fx-footer-link">Steam</p></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/Thelario" target="_blank" style="text-decoration-color: var(--fx-accent-hover);"><p class="dosis-400 fx-footer-link">Github</p></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://pablo-lario.itch.io/" target="_blank" style="text-decoration-color: var(--fx-accent-hover);"><p class="dosis-400 fx-footer-link">Itch.io</p></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://substack.com/@pablolario" target="_blank" style="text-decoration-color: var(--fx-accent-hover);"><p class="dosis-400 fx-footer-link">Substack</p></a>
            </li>
            <li class="nav-item">
              <span class="nav-link"><p class="dosis-400 fx-footer-text">pablo.lario02@gmail.com</p></span>
            </li>
          </ul>
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
* {
  background-color: var(--fx-bg-2);
}
.header {
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 75px;
  padding-bottom: 50px;
  text-align: left;
  background-color: var(--fx-bg-2);
}
.container {
  background-color: var(--fx-bg-2);
}
.header h1 {
  color: var(--fx-tx);
  font-weight: 700;
}
.header h2 {
  color: var(--fx-tx-2);
}
.footer {
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: left;
  background-color: var(--fx-bg-2);
  margin-top: 40px;
}
.my-col {
  text-align: left;
  margin-top: 30px;
}
img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-top: 15px;
}
a {
  color: var(--fx-accent);
  transition: color 0.2s ease;
}
a:hover {
  color: var(--fx-accent-hover);
  text-decoration: underline;
}
.fx-footer-link {
  color: var(--fx-accent) !important;
  transition: color 0.2s ease;
  text-decoration: none;
}
.fx-footer-link:hover {
  color: var(--fx-accent-hover) !important;
  text-decoration-color: var(--fx-accent);
}
</style>