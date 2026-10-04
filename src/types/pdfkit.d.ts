declare module "pdfkit" {
  class PDFDocument {
    constructor(options?: unknown);
  }
  export default PDFDocument;
}

declare module "pdfkit/js/pdfkit.standalone.js" {
  class PDFDocument {
    constructor(options?: unknown);
  }
  export default PDFDocument;
}
