<template>
<div class="background">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="padding-left: 15px; padding-top: 15px;"><p class="dosis-400">Pablo Lario Gómez</p></a>
      <ul class="nav justify-content-end" style="padding-right: 15px; padding-top: 15px;">
        <li class="nav-item">
          <a class="nav-link text-dark" href="/"><p class="dosis-400">Home</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/portfolio"><p class="dosis-400">Portfolio</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/blog"><p class="dosis-400">Blog</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/library"><p class="dosis-400">Library</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/antilibrary"><p class="dosis-400">Antilibrary</p></a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style>
  .background {
    background-color: #F6F5F2
  }
</style>