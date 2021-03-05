<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <img src="/images/logo.png" alt="logo" class="app-logo" />
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item navbar-page">Home</NuxtLink>
        <NuxtLink to="/new" class="navbar-item navbar-page"
          >New checklist</NuxtLink
        >
        <!--        <NuxtLink to="/presets" class="navbar-item">Presets</NuxtLink>-->
        <!--        <NuxtLink to="/about" class="navbar-item">About</NuxtLink>-->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <LangSwitcher />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
@import "assets/styles/globals"

$logo-size: 4rem

.navbar
  padding: 0.25rem
  box-shadow: 0 7px 7px -7px rgba(34, 60, 80, 0.2)

  margin-bottom: 1rem

  .navbar-page
    &:hover
      color: black

.app-logo
  width: $logo-size
  height: $logo-size
  margin-right: 1rem
</style>
