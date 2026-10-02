<template>
  <div class="d-flex flex-column vh-100 bg-light">
    <!-- Üst Menü -->
    <BuilderNavbar />

    <div class="row flex-grow-1 overflow-hidden m-0">
      <!-- Sol Sidebar: Formlar -->
      <div class="col-lg-4 col-xl-3 p-0 border-end bg-white overflow-auto shadow-sm">
        <SidebarAccordion />
      </div>

      <!-- Sağ Alan: Seçilen Şablona Göre Önizleme -->
      <div class="col-lg-8 col-xl-9 p-5 overflow-auto d-flex justify-content-center bg-secondary">
        <component :is="activeTemplateComponent" :cv-data="cvStore.$state" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// '@' işareti doğrudan 'src' klasörünü gösterir
import { useCvStore } from '@/stores/cv.js'
import BuilderNavbar from '../component/BuilderNavbar.vue'
import SidebarAccordion from '../component/SidebarAccordion.vue'

// Şablonlar
import ModernTemplate from '../component/ModernTemplate.vue'
import ExecutiveTemplate from '../component/ExecutiveTemplate.vue'

const cvStore = useCvStore()

// Seçilen şablona göre dinamik bileşen döndürme (Modern veya Executive)
const activeTemplateComponent = computed(() => {
  if (cvStore.templateId === 'executive') {
    return ExecutiveTemplate
  }
  return ModernTemplate
})
</script>