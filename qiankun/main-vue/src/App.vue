<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 主应用的页面 -->
      <el-menu-item index="/">Home</el-menu-item>

      <!-- 子应用child-vue -->
      <el-menu-item index="/vue">Vue应用</el-menu-item>

      <!-- 子应用child-child -->
      <el-menu-item index="/react">React应用</el-menu-item>
    </el-menu>
    <router-view></router-view>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<style>
</style>
