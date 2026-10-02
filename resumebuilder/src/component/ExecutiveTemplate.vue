<template>
  <div class="cv-a4-container shadow-lg bg-white p-5" id="cv-export-area">
    <!-- Kurumsal Header -->
    <div class="row border-bottom pb-4 mb-4 align-items-center">
      <div class="col-3 text-center" v-if="cvData.profile.avator">
        <img :src="cvData.profile.avator" class="rounded shadow-sm" style="width: 110px; height: 110px; object-fit: cover;" />
      </div>
      <div :class="cvData.profile.avator ? 'col-9' : 'col-12'">
        <h2 class="fw-bold text-uppercase m-0" style="color: #1a1a1a;">
          {{ cvData.profile.fname }} {{ cvData.profile.lname }}
        </h2>
        <h5 class="text-secondary fw-semibold mt-1">{{ cvData.profile.occupation }}</h5>
        <div class="text-muted small mt-2 d-flex gap-3">
          <span v-if="cvData.profile.email"><i class="bi bi-envelope"></i> {{ cvData.profile.email }}</span>
          <span v-if="cvData.profile.phone"><i class="bi bi-telephone"></i> {{ cvData.profile.phone }}</span>
          <span v-if="cvData.profile.region"><i class="bi bi-geo-alt"></i> {{ cvData.profile.region }}</span>
        </div>
      </div>
    </div>

    <!-- Kurumsal İçerik -->
    <div class="row">
      <div class="col-8 pe-4">
        <section class="mb-4" v-if="cvData.profile.bio">
          <h6 class="text-uppercase fw-bold text-dark border-bottom pb-1 mb-2">Özet Profil</h6>
          <p class="text-muted small lh-base" style="white-space: pre-line;">{{ cvData.profile.bio }}</p>
        </section>

        <section class="mb-4" v-if="cvData.experinces.length > 0">
          <h6 class="text-uppercase fw-bold text-dark border-bottom pb-1 mb-3">Profesyonel Deneyim</h6>
          <div v-for="(exp, index) in cvData.experinces" :key="index" class="mb-3">
            <div class="d-flex justify-content-between fw-bold small">
              <span>{{ exp.e_position }} - <span class="text-secondary">{{ exp.e_office }}</span></span>
              <span class="text-muted">{{ exp.e_duration }}</span>
            </div>
          </div>
        </section>
      </div>

      <div class="col-4 border-start ps-3">
        <section class="mb-4" v-if="cvData.skills.length > 0">
          <h6 class="text-uppercase fw-bold text-dark border-bottom pb-1 mb-3">Uzmanlıklar</h6>
          <div v-for="(skill, index) in cvData.skills" :key="index" class="small mb-2">
            <div class="fw-bold">{{ skill.s_name }}</div>
            <div class="text-muted" style="font-size: 0.75rem;">{{ skill.s_level }}</div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ cvData: { type: Object, required: true } })
</script>

<style scoped>
.cv-a4-container { width: 210mm; min-height: 297mm; box-sizing: border-box; font-family: 'Times New Roman', serif; }
</style>