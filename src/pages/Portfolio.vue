<template>

  <div class="background">

    <!-- HEADER -->

    <div class="header">
      <h1 class="dosis-400">Portfolio</h1>
      <br>
      <h4 class="dosis-200">I have been playing videogames my whole life. Before I enrolled university,
        I decided that my purpose in life would be making games, so that I could share the breathtaking
        emotions I've felt while playing. Therefore, I started learning Unity and have used it since.
        I am a really curious and passionate person, who loves acquiring all kind of knowledge and skills,
        specially those related with programming or videogames.</h4>
    </div>

    <!-- BODY -->

    <div class="container">

      <div class="row">
        <div class="col-md" style="text-align: center;">
          <p class="dosis-400">Download my CV:&emsp;<a :href="`${publicPath}CV-Pablo-Lario-English.pdf`" download="cv-pablo-lario-english.pdf">English</a>&emsp;<a :href="`${publicPath}CV-Pablo-Lario-Spanish.pdf`" download="cv-pablo-lario-spanish.pdf">Spanish</a></p>
        </div>
      </div>

      <br>

      <a-tabs v-model:activeKey="activeKey">

        <!-- FRIST TAB -->

        <a-tab-pane key="1" tab="Unity Projects" class="dosis-300">
          
          <div class="row">
            <div class="col-md" style="text-align: left;">
              <div class="container">
                <br>
                <div class="row">
                  <h4 class="dosis-200">These are the most important projects that I've developed using the Unity Engine.</h4>
                  <br>
                </div>
                <br>

                <!-- FIRST ROW -->

                <div class="row">

                  <!-- LEFT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="https://nacho-del-castillo.itch.io/bubblegum-royale" target="_blank"><img src="../assets/bubble_gum_royale.gif" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">Bubble Gum Royale</h3>
                        <p class="dosis-300">January, 2025</p>
                        <p class="dosis-400">Winner of the UCM Global Game Jam 2025. A recopilation of bubble gum minigames to destroy friendships and get an insuline response.</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://nacho-del-castillo.itch.io/bubblegum-royale" target="_blank"><p class="dosis-400">Play game</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- RIGHT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="" target="_blank"><img src="../assets/dice_or_die.gif" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">Dice or Die</h3>
                        <p class="dosis-300">October, 2024 - Present</p>
                        <p class="dosis-400">Participate in intense poker dice games in which you will have to bet your own life in russian roulette.</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="" target="_blank"><p class="dosis-400">Coming soon</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  </div>

                <!-- FIRST ROW -->

                <div class="row">

                  <!-- LEFT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="https://pablo-lario.itch.io/mikes-balls" target="_blank"><img src="../assets/mikesBalls.gif" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">Mike's Balls</h3>
                        <p class="dosis-300">June, 2023 - August, 2023</p>
                        <p class="dosis-400">Pick unique and powerful balls that will help Mike survive the horde of enemies that want to kill him.</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://pablo-lario.itch.io/mikes-balls" target="_blank"><p class="dosis-400">Play game</p></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://github.com/Thelario/Mike-Balls" target="_blank"><p class="dosis-400">Source code</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- RIGHT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="https://pablo-lario.itch.io/professional-de-crafter" target="_blank"><img src="../assets/gmtk2023_videoForGif.gif" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">Professional Decrafter</h3>
                        <p class="dosis-300">July, 2023</p>
                        <p class="dosis-400">Help the poor and depressed Steve de-craft the items he is assigned. Game made for the GMTK 2023 Jam.</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://pablo-lario.itch.io/professional-de-crafter" target="_blank"><p class="dosis-400">Play game</p></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://github.com/Thelario/gmtk-jam-2023" target="_blank"><p class="dosis-400">Source code</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                <!-- SECOND ROW -->

                <div class="row">

                  <!-- LEFT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="https://store.steampowered.com/app/2051750/Project_Romboid/" target="_blank"><img src="../assets/project_romboid.gif" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">Project Romboid</h3>
                        <p class="dosis-300">May, 2022 - May, 2023</p>
                        <p class="dosis-400">Survive waves of enemies that chase you and shoot at you by picking items and creating powerful builds.</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://store.steampowered.com/app/2051750/Project_Romboid/" target="_blank"><p class="dosis-400">Play game</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- RIGHT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="https://pablo-lario.itch.io/blups" target="_blank"><img src="../assets/blups-game.gif" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">Blups</h3>
                        <p class="dosis-300">March, 2022 - May, 2022</p>
                        <p class="dosis-400">A short, fun and casual mobile game in which each minigame changes after 10 seconds (inspired by Pureya).</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://pablo-lario.itch.io/blups" target="_blank"><p class="dosis-400">Play game</p></a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://github.com/Thelario/Blups-Project" target="_blank"><p class="dosis-400">Source code</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

                <br>
                <div class="row">
                  <div class="row">
                    <div class="col-md" style="text-align: left;">
                      <h4 class="dosis-300">Other Unity Projects</h4>
                      <br>
                      <p class="dosis-400">Final Degree Thesis: Comparative analysis of OOP and DOP focused on videogame development with Unity and Unity DOTS:&emsp;<a href="https://github.com/Thelario/TFG-Pablo-Lario" target="_blank">Source code</a></p>
                    </div>
                  </div>
                </div>
                <br>

              </div>
            </div>
          </div>

        </a-tab-pane>

        <!-- SECOND TAB -->

        <a-tab-pane key="2" tab="C++ Projects" force-render>
          
          <div class="row">
            <div class="col-md" style="text-align: left;">
              <div class="container">
                <br>
                <div class="row">
                  <h4 class="dosis-200">These are the most important projects that I've developed using C++ and SDL2.</h4>
                  <br>
                </div>
                <br>

                <!-- FIRST ROW -->

                <div class="row">

                  <!-- LEFT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="https://github.com/Thelario/wfc-cpp" target="_blank"><img src="../assets/wfc_cpp_demo.gif" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">WFC Algorithm</h3>
                        <p class="dosis-300">June, 2024</p>
                        <p class="dosis-300">An implementation of the famous Wave Function Collapse algorithm inspired by Oskar Stålberg's work.</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://github.com/Thelario/wfc-cpp" target="_blank"><p class="dosis-400">Source code</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- RIGHT SIDE PROJECT -->

                  <div class="col-sm">
                    <div class="row">
                      <div class="col-sm-7">
                        <a href="https://github.com/Thelario/Satellite-Engine-2D" target="_blank"><img src="../assets/rendering_engine.png" alt="" /></a>
                      </div>
                      <div class="col-sm">
                        <br>
                        <h3 class="dosis-300">Satellite Engine 2D</h3>
                        <p class="dosis-300">February, 2024 - Present</p>
                        <p class="dosis-300">A 2D game engine made with C++ and SDL2 with the goal of making 2D roguelike games with it.</p>
                        <ul class="nav">
                          <li class="nav-item">
                            <a class="nav-link text-blue" href="https://github.com/Thelario/Satellite-Engine-2D" target="_blank"><p class="dosis-400">Source code</p></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>  

        </a-tab-pane>
      </a-tabs>

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
import { ref } from 'vue';
// eslint-disable-next-line no-unused-vars
const activeKey = ref('1');
export default {
  name: 'PortfolioPage',
  data () {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style>
.header {
  padding-left: 11%;
  padding-right: 11%;
  padding-top: 75px;
  padding-bottom: 25px;
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
img {
  width: 100%;
  height: 92%;
  padding-top: 25px;
}
a {
  text-decoration: none;
}
</style>