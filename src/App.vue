<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="shortRest()">Short Rest</button>
    <button @click="longRest()">Long Rest</button>
    <h3>
      Warlock
    </h3>
    <div v-for="slot in warlock.spellSlots" :key="slot.label">
      <h5>
        {{slot.current}} / {{slot.max}} {{slot.label}}
      </h5>
      <button @click="convertToSorcPoints(slot)">Convert to Sorc Points</button>
      <button @click="removeSlot(slot)">-</button>
      <button @click="addSlot(slot)">+</button>
      <button @click="createWithSorcPoints(slot)">Create with Sorc Points</button>
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
      <button @click="convertToSorcPoints(slot)">Convert to Sorc Points</button>
      <button @click="removeSlot(slot)">-</button>
      <button @click="addSlot(slot)">+</button>
      <button @click="createWithSorcPoints(slot)">Create with Sorc Points</button>
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
      }
    }
  },
  methods: {
    shortRest() {
      this.resetSpells(this.warlock.spellSlots);
    },
    longRest() {
      this.resetSpells(this.warlock.spellSlots);
      this.resetSpells(this.sorcerer.spellSlots);
      this.sorcerer.currentSorcPoints = this.sorcerer.maxSorcPoints;
    },
    resetSpells(spellSlots) {
      spellSlots.forEach(slot => {
        slot.current = slot.max;
      });
    },
    convertToSorcPoints(slot) {
      if (slot.current == 0){
        alert("You don't have any slots of this level left.")
      } else if (this.sorcerer.currentSorcPoints + slot.level > this.sorcerer.maxSorcPoints) {
        alert("Converting this spell to sorcery points will overflow your maximum.");
      } else {
        slot.current--;
        this.sorcerer.currentSorcPoints += slot.level;
      }
    },
    createWithSorcPoints(slot) {
      if (this.sorcerer.currentSorcPoints - slot.level < 0) {
        alert("You don't have enough sorcery points to create this spell slot");
      } else {
        slot.current++;
        this.sorcerer.currentSorcPoints -= slot.level;
      }
    },
    addSlot(slot) {
      if(slot.current < slot.max) slot.current++;
    },
    removeSlot(slot) {
      if(slot.current > 0) slot.current--;
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
