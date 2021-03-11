<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h3>
      Warlock
    </h3>
    <div v-for="slot in warlock.spellSlots" :key="slot.label">
      <h5>
        {{slot.current}} / {{slot.max}} {{slot.label}}
      </h5>
      <button @click="slot.current--">-</button>
      <button @click="slot.current++">+</button>
    </div>
    <h3>
      Sorcerer
    </h3>
    <h5>
      {{sorcerer.currentSorcPoints}} / {{sorcerer.maxSorcPoints}} Sorcerer Points
    </h5>
    <button @click="sorcerer.currentSorcPoints--">-</button>
    <button @click="sorcerer.currentSorcPoints++">+</button>

    <div v-for="slot in sorcerer.spellSlots" :key="slot.label">
      <h5>
        {{slot.current}} / {{slot.max}} {{slot.label}}
      </h5>
      <button @click="slot.current--">-</button>
      <button @click="slot.current++">+</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      warlock: {
        spellSlots: [
          {
            current: 2,
            max: 2,
            level: 1,
            label: "Level 1 Pact Slots"
          }
        ],
        currentSlots: 2,
        maxSlots: 2,
        slotsSpellLevel: 1
      },
      sorcerer: {
        currentSorcPoints: 3,
        maxSorcPoints: 3,

        spellSlots: [
          {
            current: 4,
            max: 4,
            level: 1,
            label: "Level 1 Spell Slots"
          },
          {
            current: 2,
            max: 2,
            level: 2,
            label: "Level 2 Spell Slots"
          }
        ]
      },
      pactSlots: 2,
      maxPactSlots: 2,
    }
  },
  methods: {
    convertToSorcPoints(index, slots) {
      slots[index].current--;
      slots[index].level;
    }
  },
  computed: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
