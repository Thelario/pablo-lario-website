<template>
  <div class="background">

    <!-- HEADER -->

    <div class="header">
      <h1 class="dosis-400">Antilibrary</h1>
      <h2 class="dosis-300">Here you can find the books I like the idea of having read.</h2>
    </div>

    <div class="container">

      <!-- FIRST ROW -->

      <div class="row">
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/anarchy.jpg" alt="Anarchy, State and Utopia" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>Anarchy, State and Utopia</b></h4>
              <p class="dosis-400">Robert Nozick</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/crime.jpg" alt="Crime and punishment" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>Crime and Punishment</b></h4>
              <p class="dosis-400">Fyodor Dostoevsky</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/atlas.jpg" alt="Atlas Shrugged" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>Atlas Shrugged</b></h4>
              <p class="dosis-400">Ayn Rand</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/beyond.jpg" alt="Beyond Good and Evil" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>Beyond Good and Evil</b></h4>
              <p class="dosis-400">Friedrich Nietzsche</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/burnout.jpg" alt="12 Rules For Life" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>The Burnout Society</b></h4>
              <p class="dosis-400">Byung-Chul Han</p>
            </div>
          </div>
        </div>
      </div>

      <br> <!-- SECOND ROW -->

      <div class="row">
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/gulag.jpg" alt="The Gulag Archipelago" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>The Gulag Archipelago</b></h4>
              <p class="dosis-400">Alexander Solzhenitsyn</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/idleness.jpg" alt="In Praise of Idleness" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>In Praise of Idleness</b></h4>
              <p class="dosis-400">Bertrand Russell</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/political.jpg" alt="Political Parties" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>Political Parties</b></h4>
              <p class="dosis-400">Robert Michels</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/zarathrusta.jpg" alt="Thus Spoke Zarathustra" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>Thus Spoke Zarathustra</b></h4>
              <p class="dosis-400">Friedrich Nietzsche</p>
            </div>
          </div>
          <br>
        </div>
        <div class="col-md">
          <div class="card">
            <img src="../assets/antilibrary/troubled.jpg" alt="Troubled" style="width:100%">
            <div class="container">
              <br>
              <h4 class="dosis-400"><b>Troubled</b></h4>
              <p class="dosis-400">Rob Henderson</p>
            </div>
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
  name: 'LibraryPage'
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
.header h2, .header h4 {
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
.card {
  width: 100%;
  background-color: var(--fx-ui-3);
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  overflow: hidden;
}
.card img {
  border-radius: 8px 8px 0 0;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.4);
  border-color: var(--fx-accent);
  transform: translateY(-4px);
}
.card .container {
  padding: 16px;
}
</style>