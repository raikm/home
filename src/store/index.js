import Vue from "vue";
import Vuex from "vuex";
try {
  var config = require("../../config.json");
} catch (err) {
  console.log("CONFIG FILE NOT FOUND");
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentEntities: [],
    config: config,
    showNotification: true,
    weather: {},
  },
  mutations: {
    //sync
    setCurrentEntities(state, updatedEntities) {
      state.currentEntities = updatedEntities;
    },
    setWeather(state, updatedWeather) {
      state.weather = updatedWeather;
    },
    setShowNotification(state, notificationStatus){
      console.log("new status = " + notificationStatus)
      state.showNotification = notificationStatus;
    }
  },
  modules: {},
  getters: {
    getCurrentEntities: (state) => state.currentEntities,
    getConfig: (state) => state.config,
    getShowNotification: (state) => state.showNotification,
    getWeather: (state) => state.weather,
  },
});