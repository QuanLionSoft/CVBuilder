<template>
  <!-- Hazırladığımız ana sayfa bileşenini ekrana basıyoruz -->
  <Builder />
</template>

<script setup>
// pages klasöründeki Builder.vue dosyasını içe aktarıyoruz
import Builder from './pages/Builder.vue'
</script>

<style>
/* Tüm projenin arka planını ve fontunu düzenleyen global ayarlar */
body {
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

/* Scrollbar tasarımlarını (kaydırma çubuklarını) daha şık ve ince yapalım */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>