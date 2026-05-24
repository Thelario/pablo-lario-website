<template>
  <div class="background">

    <!-- HEADER -->

    <div class="header">
      <h1 class="dosis-400">Blog</h1>
      <br>
      <h4 class="dosis-400">The blog is a compendium of thoughts about different topics. I might focus more on technology,
        but I enjoy talking and writing about lots of stuff, so expect a wide variety of things to be covered, like philosophy,
        ai, money, finances, investing, etc.
      </h4>
      <br>
    </div>

    <div class="container">

      <div class="row blog-entry mt-4">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 21/05/2026 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/about-the-romantization-of-poverty" target="_blank">About the romantization of poverty</a></h5>
        </div>
      </div>

      <div class="row blog-entry">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 20/05/2026 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/reasons-to-spend-money-on-physical" target="_blank">Reasons to spend money on physical books</a></h5>
        </div>
      </div>

      <div class="row blog-entry">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 19/05/2026 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/about-the-ethics-of-pursuing-money" target="_blank">About the ethics of pursuing money</a></h5>
        </div>
      </div>

      <div class="row blog-entry">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 17/05/2026 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/what-to-spend-money-on" target="_blank">What to spend money on</a></h5>
        </div>
      </div>

      <div class="row blog-entry">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 10/05/2026 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/reasons-to-not-actively-search-for" target="_blank">Reasons to not actively search for a relationship nowadays</a></h5>
        </div>
      </div>

      <div class="row blog-entry">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 02/06/2024 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/how-is-the-man-i-want-to-be" target="_blank">How is the man I want to be?</a></h5>
        </div>
      </div>

      <div class="row blog-entry">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 27/04/2024 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/why-making-your-own-engine-might" target="_blank">Why making your own engine might make you a more creative developer</a></h5>
        </div>
      </div>

      <div class="row blog-entry">
        <div class="col-4" style="text-align: right; color: var(--fx-tx-3);">
          <h5 class="dosis-400">[ 24/02/2024 ]</h5>
        </div>
        <div class="col" style="text-align: left;">
          <h5 class="dosis-400"><a href="https://pablolario.substack.com/p/videogames-ethics" target="_blank">I feel like a bad developer for not playing games</a></h5>
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
  name: 'BlogPage'
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
.header h1 {
  color: var(--fx-tx);
  font-weight: 700;
}
.header h4 {
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
a {
  color: var(--fx-accent);
  transition: color 0.2s ease;
  text-decoration: none;
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
.blog-entry {
  padding: 10px 0;
}
</style>