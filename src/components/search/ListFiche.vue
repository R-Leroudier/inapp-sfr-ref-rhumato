<template>
  <div>
    <ul v-if="submenu">
      <li v-for="(item, i) in submenu" :key="i">
        <div>*****</div>
        {{ item }}
        <div>*****</div>
      </li>
    </ul>

    <i v-else class="fas fa-skull-crossbones"></i>
  </div>
</template>

<script>
export default {
  props: ['submenu'],
  data() {
    return {
      pouet:
        'https://med-cdn.ams3.digitaloceanspaces.com/assets/media/covidbox/Toxology.pdf',
    };
  },
  watch: {
    submenu(newList, oldList) {
      console.log('watch list fiche', newList, oldList);
    },
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.temporary {
  margin-top: 250px;
}
.submenu-item {
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-2);
  color: inherit;
  text-align: left;
  font-family: 'Helvetica';
  font-size: 16px/25px;
  font-weight: bold;
  letter-spacing: 0px;
  opacity: 1;
  margin: 10px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 5px;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 8px;
  box-shadow: 0px 0px 6px #00000029;
  min-height: 60px;
  text-decoration: none;
}
.submenu-item p {
  margin-left: 16px;
}
ul {
  padding: 0;
  list-style-type: none;
  padding-bottom: 5px;
  margin-block-end: 0;
  max-width: 100%;
}
.active {
  display: none;
}
.submenu-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.submenu-wrapper p {
  margin-left: 20px;
  text-align: left;
  font: normal normal bold 16px/25px Helvetica;
  letter-spacing: 0px;
  opacity: 1;
}
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  align-items: center;
}
.menu-link {
  display: flex;
  color: var(--color-4);
  padding: 6px 10px;
  text-align: center;
  border-radius: 7px;
  width: 33px;
  height: 33px;
  align-items: center;
  justify-content: center;
}
.submenu-item .menu-link {
  padding: 0;
  background-color: var(--color-2);
}
.double-arrow {
  max-height: 15px;
}
.item-title {
  max-width: 60%;
}

.item-title p {
  color: var(--color-4);
}
.subtitle {
  margin-top: 5px;
  font: normal normal normal 12px/15px Helvetica;
}
</style>
