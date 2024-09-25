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
  name: 'LibraryPage'
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
.card {
  /* Add shadows to create the "card" effect */
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>