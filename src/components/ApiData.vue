<template>
  <div>
      <button @click="loadData()" >invoke api</button>
    {{data}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "api-data",
  data() {
    return {
      data: {}
    };
  },
  computed: {
    ...mapGetters("oidcStore", ["oidcIsAuthenticated", "oidcAccessToken"])
  },
  methods: {
    loadData() {
      const url =
        "/api/AnchorageShip?regDate=2020-1-1&timespan=1&PageSize=20&Page=1&Descending=false";
      var authHeaders = new Headers();
      authHeaders.set("Authorization", "Bearer " + this.oidcAccessToken);
      console.log(this.oidcAccessToken);
      fetch(url, {headers:authHeaders})
        .then(res => {
          res.json().then(data => {
            this.data = data;
          });
        })
        .catch(err => {
          console.warn(err);
        });
    }
  }
};
</script>