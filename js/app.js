let nysl = new Vue({
  el: '#app',
  data: {
    fecha: "",
    consorcio: "",
    uf: "",
    depto: "",
    propietario: "",
    deuda: "",
    ultimaLiquidacion: "",
    vencimiento: "",
    expensaNeta: "",
    aseguradora: "",
    poliza: "",
    vigenciaSeguro: "",
    fondoCaja: "",
    porcentual: "",
    juicio: false,
    aysaConsorcio: true,
    ablConsorcio: true,
    juicioDescripcion: "",
    asegurado: [],

  },
  methods: {

  },
  computed: {
    aysa: function() {
      if (this.aysaConsorcio) {
        return "se abona por consorcio";
      } else {
        return "se abona de forma particular";
      }
    },
    abl: function() {
      if (this.ablConsorcio) {
        return "se abona por consorcio";
      } else {
        return "se abona de forma particular";
      }
    },


  }
});