<template>
<div class="flexoki-header">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><p class="dosis-600 fx-brand">Pablo Lario Gómez</p></a>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="/" style="text-decoration: none;"><p class="dosis-400 fx-link">Home</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio" style="text-decoration: none;"><p class="dosis-400 fx-link">Portfolio</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/blog" style="text-decoration: none;"><p class="dosis-400 fx-link">Blog</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/library" style="text-decoration: none;"><p class="dosis-400 fx-link">Library</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/antilibrary" style="text-decoration: none;"><p class="dosis-400 fx-link">Antilibrary</p></a>
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
  .flexoki-header {
    background-color: var(--fx-bg-2);
    padding: 10px 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  .fx-brand {
    color: var(--fx-tx) !important;
    transition: color 0.3s ease;
  }
  .fx-brand:hover {
    color: var(--fx-accent-hover) !important;
  }
  .fx-link {
    color: var(--fx-tx-2) !important;
    transition: color 0.3s ease, transform 0.2s ease;
  }
  .fx-link:hover {
    color: var(--fx-accent) !important;
    transform: translateY(-2px);
  }
  .nav-item p {
    margin-bottom: 0;
  }
</style>