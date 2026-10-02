<template>
  <div class="cv-a4-container shadow-lg d-flex bg-white" id="cv-export-area">

    <!-- SOL DİKEY KOLON (Siyah / Koyu Arka Plan) -->
    <div class="cv-sidebar text-white p-4 d-flex flex-column justify-content-between" style="width: 32%; background-color: #2b2d42; min-height: 297mm;">
      <div>
        <!-- Profil Fotoğrafı (Belirteç Kontrollü) -->
        <div v-if="cvData.profile.avator && cvData.profile.show_avator" class="text-center mb-4">
          <img :src="cvData.profile.avator" class="rounded-circle shadow" style="width: 100px; height: 100px; object-fit: cover; border: 3px solid rgba(255,255,255,0.3);" />
        </div>

        <!-- Ad Soyad ve Unvan -->
        <div class="text-center mb-4">
          <h3 class="text-uppercase fw-bold m-0" style="font-size: 1.3rem; letter-spacing: 1px;">
            {{ cvData.profile.fname || 'İsim' }} {{ cvData.profile.lname || 'Soyisim' }}
          </h3>
          <p class="text-highlight mt-2 small fw-semibold">{{ cvData.profile.occupation || 'Meslek Unvanı' }}</p>
        </div>

        <hr class="border-secondary opacity-50 my-3">

        <!-- İletişim Bilgileri -->
        <div class="mb-4 small">
          <h6 class="text-uppercase fw-bold text-highlight mb-3" style="font-size: 0.75rem; letter-spacing: 1.5px;">İletişim</h6>
          <div v-if="cvData.profile.email" class="mb-2 text-break"><i class="bi bi-envelope me-2"></i>{{ cvData.profile.email }}</div>
          <div v-if="cvData.profile.phone" class="mb-2"><i class="bi bi-telephone me-2"></i>{{ cvData.profile.phone }}</div>
          <div v-if="cvData.profile.region || cvData.profile.country" class="mb-2">
            <i class="bi bi-geo-alt me-2"></i>{{ cvData.profile.region }}, {{ cvData.profile.country }}
          </div>
        </div>

        <!-- Yetenekler -->
        <div class="mb-4" v-if="cvData.skills.length > 0">
          <h6 class="text-uppercase fw-bold text-highlight mb-3" style="font-size: 0.75rem; letter-spacing: 1.5px;">Yetenekler</h6>
          <div v-for="(skill, index) in cvData.skills" :key="index" class="mb-2">
            <div class="fw-bold small">{{ skill.s_name }}</div>
            <div class="text-white-50" style="font-size: 0.75rem;">{{ skill.s_level }}</div>
          </div>
        </div>
      </div>

      <!-- Alt Kısım: QR Kod -->
      <div v-if="cvData.profile.qr_url" class="text-center bg-white p-2 rounded shadow-sm mt-4 mx-auto" style="width: 80px;">
        <qrcode-vue :value="cvData.profile.qr_url" :size="64" level="M" />
        <div style="font-size: 7px; color: #333; margin-top: 2px; font-weight: bold;">Taratın</div>
      </div>
    </div>

    <!-- SAĞ ANA İÇERİK ALANI -->
    <div class="cv-main-content p-5 flex-grow-1 bg-white text-dark">

      <!-- Hakkımda -->
      <section class="mb-4" v-if="cvData.profile.bio">
        <h6 class="text-uppercase fw-bold border-bottom pb-2 mb-3" style="color: #2b2d42; letter-spacing: 1px;">Hakkımda</h6>
        <p class="text-muted small lh-lg" style="white-space: pre-line;">{{ cvData.profile.bio }}</p>
      </section>

      <!-- İş Deneyimi -->
      <section class="mb-4" v-if="cvData.experinces.length > 0">
        <h6 class="text-uppercase fw-bold border-bottom pb-2 mb-3" style="color: #2b2d42; letter-spacing: 1px;">İş Deneyimi</h6>
        <div v-for="(exp, index) in cvData.experinces" :key="index" class="mb-3">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <h6 class="fw-bold m-0 small" style="color: #333;">{{ exp.e_position }}</h6>
            <span class="badge bg-light text-dark border small">{{ exp.e_duration }}</span>
          </div>
          <div class="text-muted small fw-semibold">{{ exp.e_office }}</div>
        </div>
      </section>

      <!-- Eğitim -->
      <section class="mb-4" v-if="cvData.academics.length > 0">
        <h6 class="text-uppercase fw-bold border-bottom pb-2 mb-3" style="color: #2b2d42; letter-spacing: 1px;">Eğitim Geçmişi</h6>
        <div v-for="(edu, index) in cvData.academics" :key="index" class="mb-3">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <h6 class="fw-bold m-0 small" style="color: #333;">{{ edu.a_award }}</h6>
            <span class="badge bg-light text-dark border small">{{ edu.a_year }}</span>
          </div>
          <div class="text-muted small fw-semibold">{{ edu.a_institution }}</div>
        </div>
      </section>

      <!-- Referanslar -->
      <section class="mb-4" v-if="cvData.referees.length > 0">
        <h6 class="text-uppercase fw-bold border-bottom pb-2 mb-3" style="color: #2b2d42; letter-spacing: 1px;">Referanslar</h6>
        <div class="row g-3">
          <div v-for="(ref, index) in cvData.referees" :key="index" class="col-6">
            <div class="p-2 border rounded bg-light small">
              <div class="fw-bold">{{ ref.r_name }}</div>
              <div class="text-muted" style="font-size: 0.75rem;">{{ ref.r_phone }}</div>
              <div class="text-muted" style="font-size: 0.75rem;">{{ ref.r_email }}</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import QrcodeVue from 'qrcode.vue'

defineProps({
  cvData: { type: Object, required: true }
})
</script>

<style scoped>
.cv-a4-container {
  width: 210mm;
  min-height: 297mm;
  background-color: white;
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
}
.text-highlight { color: #ef233c !important; }
</style>