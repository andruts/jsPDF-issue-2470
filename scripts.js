const { jsPDF } = window.jspdf;
var doc = new jsPDF({ orientation: 'p', format: 'a4'  });
doc.html(document.getElementById('element-to-print'), {
   callback: function (doc) {
         doc.output('dataurlnewwindow');
   }
});