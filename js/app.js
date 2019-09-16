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

  },
  methods: {

  },
  computed: {
    aysa: function() {
      if (this.aysaConsorcio) {
        return "se abona por consorcio";
      } else {
        return "se abona de forma particular"
      }
    },
    abl: function() {
      if (this.ablConsorcio) {
        return "se abona por consorcio";
      } else {
        return "se abona de forma particular"
      }
    },
    juicioTitle: function() {
      if (this.juicio) {
        return "Informamos que el edificio se encuentra con un juicio por"
      }
    }

  }
});