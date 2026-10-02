<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm z-3">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold text-uppercase letter-spacing" href="#">
        <span class="text-primary">SaaS</span> CV Builder
      </a>

      <div class="d-flex align-items-center gap-3">
        <!-- Şablon Seçici -->
        <div class="d-flex align-items-center bg-secondary rounded px-2 py-1">
          <label class="text-white small me-2 mb-0 fw-semibold">Şablon:</label>
          <select v-model="cvStore.templateId" class="form-select form-select-sm bg-dark text-white border-0 shadow-none">
            <option value="modern">Modern (Dikey Kolon)</option>
            <option value="executive">Kurumsal (Executive)</option>
          </select>
        </div>

        <div class="text-light small d-none d-md-block opacity-75 ms-2">
          <span style="color: #28a745;">●</span> Canlı Önizleme
        </div>

        <!-- PDF İndir Butonu -->
        <button @click="downloadPDF" class="btn btn-primary btn-sm fw-bold px-3 shadow-sm" :disabled="isGenerating">
          <span v-if="isGenerating" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          <span v-else>PDF İndir</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useCvStore } from '@/stores/cv.js'
import html2pdf from 'html2pdf.js'

const cvStore = useCvStore()
const isGenerating = ref(false)

const downloadPDF = async () => {
  isGenerating.value = true
  const element = document.getElementById('cv-export-area')

  const opt = {
    margin:       0,
    filename:     'Profesyonel_CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }

  html2pdf().set(opt).from(element).save().then(() => {
    isGenerating.value = false
  })
}
</script>

<style scoped>
.letter-spacing { letter-spacing: 1.5px; }
</style>