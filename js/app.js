let ld = new Vue({
  el: '#app',
  data: {
    fecha: '',
    consorcio: "",
    uf: "",
    piso: "",
    letra: "",
    propietario: "",
    fondoCaja: "",
    deuda: "",
    expensaNeta: "",
    ultimaLiquidacion: "",
    vencimiento: "",
    aseguradora: "",
    poliza: "",
    vigenciaSeguro: "",
    fondoCaja: "",
    porcentual: "",
    juicio: false,
    aysaConsorcio: false,
    ablConsorcio: false,
    aysaCliente: "",
    ablPartida: "",
    juicioDescripcion: "",
    asegurado: [],
    textoCompleto: "",
    meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    anhoLiquidado: "2019",

  },
  methods: {
    armarUltimaLiquidacion: function(mes) {
      this.ultimaLiquidacion = "" + mes + " del " + this.anhoLiquidado;
    },
    saldoFormateado: function(number) {
      var decimales = 2;
      var separadorDecimales = ",";
      var separadorMiles = ".";
      var signo = number < 0 ? "-" : "";
      var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decimales)));
      var j = (j = i.length) > 3 ? j % 3 : 0;

      return signo +
        (j ? i.substr(0, j) + separadorMiles : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + separadorMiles) +
        (decimales ? separadorDecimales + Math.abs(number - i).toFixed(decimales).slice(2) : "");
    },
    porConsorcio: function(sel) {
      if (sel) {
        return "se abona por consorcio";
      } else {
        return "se abona de forma particular";
      }
    },
    Export2Doc: function(element, filename) {
      var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Libre Deuda - www.restpoint.com.ar</title><style>v:*{behavior:url(#default#VML);} o:*{behavior:url(#default#VML);} w:*{behavior:url(#default#VML);}.shape{behavior:url(#default#VML);}</style><style>@page {mso-page-orientation:landscape;size:29.7cm 21cm;margin:1cm 1cm 1cm 1cm;}@page Section1{mso-header-margin:.5in;mso-footer-margin:.5in;mso-header:h1;mso-footer:f1;} div.Section1{page:Section1;} table#hrdftrtbl {margin:0in 0in 0in 900in;width:1px;height:1px;overflow:hidden;} p.MsoFooter,li.MsoFooter,div.MsoFooter {margin:0in;margin-bottom:.0001pt;mso-pagination:widow-orphan;tab-stops:center 3.0in right 6.0in;font-size:12.0pt;}</style><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom><w:DoNotOptimizeForBrowser/></w:WordDocument></xml></head><body>";
      var postHtml = "</body></html>";
      var html = preHtml + document.getElementById(element).innerHTML + postHtml;

      var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
      });

      // Specify link url
      var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

      // Specify file name
      filename = filename ? filename + '.doc' : 'Libre deuda_' + ld.consorcio + '_UF' + ld.uf + '_DTO' + ld.depto + '.doc';

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
    },
  },
  computed: {
    depto: function() {
      if (this.letra != "") {
        return "Piso " + this.piso + ' Depto "' + this.letra + '"';
      } else {
        return "Piso " + this.piso;
      }
    },
    fondoCajaTexto: function() {
      return numeroALetras(this.fondoCaja);
    },
  }
});

moment.locale("es");