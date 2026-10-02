import { defineStore } from 'pinia'

export const useCvStore = defineStore('cv', {
  state: () => ({
    templateId: 'modern',

    // Django Profile Modeli
    profile: {
      fname: '',
      mname: '',
      lname: '',
      gender: '',
      country: '',
      region: '',
      email: '',
      phone: '',
      occupation: '',
      dob: '',
      bio: '',
      avator: null,
      show_avator: true, // Resmin gösterilip gösterilmeyeceğini belirten belirteç
      qr_url: ''
    },

    // Django Experince Modeli
    experinces: [],

    // Django Academic Modeli
    academics: [],

    // Django Skill Modeli
    skills: [],

    // Django Referee Modeli
    referees: []
  }),

  actions: {
    addExperince() {
      this.experinces.push({
        e_office: '',
        e_position: '',
        e_duration: ''
      })
    },

    removeExperince(index) {
      this.experinces.splice(index, 1)
    },

    addAcademic() {
      this.academics.push({
        a_institution: '',
        a_award: '',
        a_year: ''
      })
    },

    removeAcademic(index) {
      this.academics.splice(index, 1)
    },

    addSkill() {
      this.skills.push({
        s_name: '',
        s_level: ''
      })
    },

    removeSkill(index) {
      this.skills.splice(index, 1)
    },

    addReferee() {
      this.referees.push({
        r_name: '',
        r_email: '',
        r_phone: ''
      })
    },

    removeReferee(index) {
      this.referees.splice(index, 1)
    }
  }
})