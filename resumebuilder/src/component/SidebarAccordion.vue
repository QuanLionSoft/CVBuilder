<template>
  <div class="accordion accordion-flush" id="cvFormAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseProfile">
          Kişisel Bilgiler
        </button>
      </h2>
      <div id="collapseProfile" class="accordion-collapse collapse show" data-bs-parent="#cvFormAccordion">
        <div class="accordion-body bg-light">
          <div class="row g-2">
            <div class="col-4"><input v-model="cvStore.profile.fname" type="text" class="form-control form-control-sm" placeholder="Ad"></div>
            <div class="col-4"><input v-model="cvStore.profile.mname" type="text" class="form-control form-control-sm" placeholder="İkinci Ad"></div>
            <div class="col-4"><input v-model="cvStore.profile.lname" type="text" class="form-control form-control-sm" placeholder="Soyad"></div>
            <div class="col-12 mt-2"><input v-model="cvStore.profile.occupation" type="text" class="form-control form-control-sm" placeholder="Meslek / Unvan"></div>
            <div class="col-6 mt-2"><input v-model="cvStore.profile.email" type="email" class="form-control form-control-sm" placeholder="E-posta"></div>
            <div class="col-6 mt-2"><input v-model="cvStore.profile.phone" type="text" class="form-control form-control-sm" placeholder="Telefon"></div>
            <div class="col-6 mt-2"><input v-model="cvStore.profile.country" type="text" class="form-control form-control-sm" placeholder="Ülke"></div>
            <div class="col-6 mt-2"><input v-model="cvStore.profile.region" type="text" class="form-control form-control-sm" placeholder="Şehir/Bölge"></div>
            <div class="col-6 mt-2"><input v-model="cvStore.profile.dob" type="date" class="form-control form-control-sm"></div>
            <div class="col-6 mt-2">

              <select v-model="cvStore.profile.gender" class="form-select form-select-sm">
                <option value="">Cinsiyet</option>
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
                <option value="Belirtmek İstemiyorum">Belirtmek İstemiyorum</option>
              </select>
            </div>
            <div class="col-12 mt-2"><textarea v-model="cvStore.profile.bio" class="form-control form-control-sm" rows="3" placeholder="Hakkımda"></textarea></div>
          </div>
             <div class="col-12 mt-2">
  <label class="form-label small text-muted mb-1">QR Kod Bağlantısı (LinkedIn / Web Site)</label>
  <input v-model="cvStore.profile.qr_url" type="text" class="form-control form-control-sm" placeholder="https://linkedin.com/in/kullaniciadi">
</div>
          <!-- Profil Fotoğrafı ve Gösterim Belirteci -->
<div class="col-12 mt-2">
  <label class="form-label small text-muted mb-1">Profil Fotoğrafı</label>
  <input type="file" class="form-control form-control-sm mb-2" @change="handleImageUpload" accept="image/*">

  <!-- Belirteç: Resim yüklendiyse görünürlük Checkbox'ı aktif olsun -->
  <div v-if="cvStore.profile.avator" class="form-check form-switch mt-1">
    <input class="form-check-input" type="checkbox" id="showAvatorCheck" v-model="cvStore.profile.show_avator">
    <label class="form-check-label small fw-semibold text-secondary" for="showAvatorCheck">
      Fotoğrafı CV Üzerinde Göster
    </label>
  </div>
</div>
        </div>
      </div>
    </div>

    <!-- İŞ DENEYİMİ -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExp">İş Deneyimi</button>
      </h2>
      <div id="collapseExp" class="accordion-collapse collapse" data-bs-parent="#cvFormAccordion">
        <div class="accordion-body bg-light">
          <div v-for="(exp, index) in cvStore.experinces" :key="index" class="card mb-2 border-0 shadow-sm">
            <div class="card-body p-2 position-relative">
              <button @click="cvStore.removeExperince(index)" class="btn btn-sm btn-close position-absolute top-0 end-0 m-1"></button>
              <input v-model="exp.e_office" type="text" class="form-control form-control-sm mb-1 mt-2" placeholder="Şirket">
              <input v-model="exp.e_position" type="text" class="form-control form-control-sm mb-1" placeholder="Pozisyon">
              <input v-model="exp.e_duration" type="text" class="form-control form-control-sm" placeholder="Süre">
            </div>
          </div>
          <button @click="cvStore.addExperince" class="btn btn-sm btn-primary w-100">+ Deneyim Ekle</button>
        </div>
      </div>
    </div>

    <!-- EĞİTİM -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEdu">Eğitim</button>
      </h2>
      <div id="collapseEdu" class="accordion-collapse collapse" data-bs-parent="#cvFormAccordion">
        <div class="accordion-body bg-light">
          <div v-for="(edu, index) in cvStore.academics" :key="index" class="card mb-2 border-0 shadow-sm">
            <div class="card-body p-2 position-relative">
              <button @click="cvStore.removeAcademic(index)" class="btn btn-sm btn-close position-absolute top-0 end-0 m-1"></button>
              <input v-model="edu.a_institution" type="text" class="form-control form-control-sm mb-1 mt-2" placeholder="Kurum">
              <input v-model="edu.a_award" type="text" class="form-control form-control-sm mb-1" placeholder="Bölüm/Derece">
              <input v-model="edu.a_year" type="text" class="form-control form-control-sm" placeholder="Yıl">
            </div>
          </div>
          <button @click="cvStore.addAcademic" class="btn btn-sm btn-primary w-100">+ Eğitim Ekle</button>
        </div>
      </div>
    </div>

    <!-- YETENEKLER -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSkill">Yetenekler</button>
      </h2>
      <div id="collapseSkill" class="accordion-collapse collapse" data-bs-parent="#cvFormAccordion">
        <div class="accordion-body bg-light">
          <div v-for="(skill, index) in cvStore.skills" :key="index" class="input-group input-group-sm mb-2 shadow-sm">
            <input v-model="skill.s_name" type="text" class="form-control" placeholder="Yetenek">
            <input v-model="skill.s_level" type="text" class="form-control" placeholder="Seviye (Örn: %80)">
            <button @click="cvStore.removeSkill(index)" class="btn btn-danger"><i class="bi bi-x"></i></button>
          </div>
          <button @click="cvStore.addSkill" class="btn btn-sm btn-primary w-100">+ Yetenek Ekle</button>
        </div>
      </div>
    </div>

    <!-- REFERANSLAR -->
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRef">Referanslar</button>
      </h2>
      <div id="collapseRef" class="accordion-collapse collapse" data-bs-parent="#cvFormAccordion">
        <div class="accordion-body bg-light">
          <div v-for="(ref, index) in cvStore.referees" :key="index" class="card mb-2 border-0 shadow-sm">
            <div class="card-body p-2 position-relative">
              <button @click="cvStore.removeReferee(index)" class="btn btn-sm btn-close position-absolute top-0 end-0 m-1"></button>
              <input v-model="ref.r_name" type="text" class="form-control form-control-sm mb-1 mt-2" placeholder="Ad Soyad">
              <input v-model="ref.r_email" type="email" class="form-control form-control-sm mb-1" placeholder="E-posta">
              <input v-model="ref.r_phone" type="text" class="form-control form-control-sm" placeholder="Telefon">
            </div>
          </div>
          <button @click="cvStore.addReferee" class="btn btn-sm btn-primary w-100">+ Referans Ekle</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      cvStore.profile.avator = e.target.result // Base64 koduna çevirip store'a atıyoruz
      cvStore.profile.show_avator = true     // Resim yüklendiği an otomatik görünsün
    }
    reader.readAsDataURL(file)
  }
}
import { useCvStore } from '../stores/cv.js'
const cvStore = useCvStore()
</script>

<style scoped>
.accordion-button:focus { box-shadow: none; background-color: #f8f9fa; }
.accordion-button:not(.collapsed) { color: #0d6efd; background-color: #f8f9fa; }
</style>