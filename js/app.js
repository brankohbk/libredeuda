let ld = new Vue({
  el: '#app',
  data: {
    fecha: "",
    consorcio: "",
    uf: "",
    depto: "",
    propietario: "",
    deuda: 0,
    fondoCaja: 0,
    expensaNeta: 0,
    ultimaLiquidacion: "",
    vencimiento: "",
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
    textoCompleto: "",

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

function Export2Doc(element, filename = 'Libre deuda_' + ld.consorcio + '_UF' + ld.uf + '_dto' + ld.depto) {
  var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Libre Deuda - www.restpoint.com.ar</title></head><body>";
  var postHtml = "</body></html>";
  var html = preHtml + document.getElementById(element).innerHTML + postHtml;

  var blob = new Blob(['\ufeff', html], {
    type: 'application/msword'
  });

  // Specify link url
  var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

  // Specify file name
  // filename = filename ? filename + '.doc' : 'document.doc';

  // Create download link element
  var downloadLink = document.createElement("a");

  document.body.appendChild(downloadLink);

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    // Create a link to the file
    downloadLink.href = url;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();
  }

  document.body.removeChild(downloadLink);
}