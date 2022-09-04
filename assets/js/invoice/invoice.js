$(function () {
  'use strict';

  /**
   * Generating PDF from HTML using jQuery
   */
  $(document).on('click', '#invoice_download_btn', function () {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 2],
    });

    doc.addFont('Roboto-Regular.ttf', 'Roboto-Regular', 'normal');
    doc.setFont('Roboto-Regular');

    var contentWidth = $('#invoice_wrapper').width();
    var contentHeight = $('#invoice_wrapper').height();
    var topLeftMargin = 20;
    var pdfWidth = contentWidth + topLeftMargin * 2;
    var pdfHeight = pdfWidth * 1.5 + topLeftMargin * 2;
    var canvasImageWidth = contentWidth;
    var canvasImageHeight = contentHeight;
    var totalPDFPages = Math.ceil(contentHeight / pdfHeight) - 1;

    html2canvas($('#invoice_wrapper')[0], { allowTaint: true }).then(function (
      canvas,
    ) {
      canvas.getContext('2d');
      var imgData = canvas.toDataURL('image/jpeg', 1.0);
      var pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
      pdf.addImage(
        imgData,
        'JPG',
        topLeftMargin,
        topLeftMargin,
        canvasImageWidth,
        canvasImageHeight,
      );
      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(pdfWidth, pdfHeight);
        pdf.addImage(
          imgData,
          'JPG',
          topLeftMargin,
          -(pdfHeight * i) + topLeftMargin * 4,
          canvasImageWidth,
          canvasImageHeight,
        );
      }

      pdf.save('invoice.pdf');
    });
  });
});
