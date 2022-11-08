<template>
  <div class="content">
    <vl-map style="height: 600px; width: 70%">
      <vl-view :zoom.sync="zoom" :center="center"></vl-view>

      <vl-layer-vector :z-index="1">
        <vl-source-vector
          :features.sync="features"
          ident="the-source"
        ></vl-source-vector>

        <vl-style-box>
          <vl-style-stroke color="blue"></vl-style-stroke>
          <vl-style-fill color="rgba(25,255,255,0.5)"> </vl-style-fill>
        </vl-style-box>
      </vl-layer-vector>

      <vl-interaction-draw type="Polygon" source="the-source">
      </vl-interaction-draw>

      <vl-interaction-modify type="Polygon" source="the-source">
      </vl-interaction-modify>

      <vl-layer-tile :z-index="0">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div style="margin-top: 30px" v-for="(marcacao, i) in features" :key="i">
      <div
        class="justify-center aling-center action"
        style="margin-bottom: 10px"
      >
        <p style="margin-right: 10px">Marcação {{ i + 1 }} :</p>
        <v-btn
          @click="excluirMarcacao(i)"
          text
          style="
            text-transform: capitalize;
            color: red;
            font-size: 14px;
            letter-spacing: 0.5px;
          "
          class="text--capitalize"
          >Excluir</v-btn
        >
      </div>
      <div v-for="(coordenada, i) in marcacao.geometry.coordinates[0]" :key="i">
        <p>Coordenada {{ i + 1 }} -> {{ coordenada }} <br /></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      zoom: 5,
      center: [-5645333.161029978, -1741541.2524494557],
      features: [],
    };
  },
  methods: {
    excluirMarcacao(posicao) {
      this.features.splice(posicao, 1);
    },
  },
};
</script>

<style scoped>
@import "~ol/ol.css";

.border {
  border: 1px solid black;
}

.action {
  display: flex !important;
  align-items: center;
}

.content {
  margin: 10px 10px;
}
</style>
