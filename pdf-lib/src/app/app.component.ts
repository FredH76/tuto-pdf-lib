import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { PDFDocument, rgb } from 'pdf-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdf-lib';
  public white = rgb(1, 1, 1);
  public red = rgb(1, 0, 0,);

  /****************************************
   * 1- Create PDF
   ***************************************/
  async createPdfDoc() {
    // TODO: Create PDF
  }

  /****************************************
   * 2- Draw Text Into Page
   ***************************************/
  async drawTextIntoPage() {
    // TODO: Draw Text Into Page
  }

  /****************************************
   * 3- Draw Figure Into Page
   ***************************************/
  async drawFigureIntoPage() {
    // TODO: Draw Figure Into Page
  }

  /****************************************
   * 4- Insert Image Into Page
   ***************************************/
  async InsertImageIntoPage() {
    // TODO: Insert Image Into Page
  }

  /****************************************
   * 5- Insert Pdf Into Page
   ***************************************/
  async InsertPdfIntoPage() {
    // TODO: Insert Pdf Into Page
  }

  /****************************************
   * 6- Insert Pdf Into PDF
   ***************************************/
  async InsertPdfIntoPdf() {
    // TODO: Insert Pdf Into PDF
  }

  /****************************************
   * 7- Insert Form Into PDF
   ***************************************/
  async insertFormIntoPdf() {
    // TODO: Insert Form Into PDF
  }

  /****************************************
   * 8- Fill Form Into PDF
   ***************************************/
  async fillFormIntoPdf() {
    // Fill Form Into PDF
  }

  /**************************************************************************************/
  /*****************************      TOOL BOX       ************************************/
  /**************************************************************************************/
  async saveDoc(pdfDoc: PDFDocument, name: string) {
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/octet-stream' });
    saveAs(blob, name);
  }

  // @ts-ignore 
  private drawGrid(page: PDFPage) {
    const { height, width } = page.getSize();
    const lightGrey = rgb(192 / 255, 192 / 255, 192 / 255);
    const darkGrey = rgb(100 / 255, 100 / 255, 100 / 255);
    const black = rgb(0.1, 0.1, 0.1);
    const opacity = 0.05;

    // horizontal lines
    for (let j = 5; j < height; j = j + 5) {
      page.drawLine({ start: { x: 0, y: j }, end: { x: width, y: j }, color: j % 10 ? lightGrey : j % 50 ? darkGrey : black, opacity, thickness: 1 });
      if (j % 10 === 0 && j % 50 !== 0) {
        page.drawText(j.toString(), { x: 10, y: j - 1, size: 4 });
        page.drawText(j.toString(), { x: width - 10, y: j - 1, size: 4 });
      }
      if (j % 50 === 0) {
        page.drawText(j.toString(), { x: 5, y: j - 2, size: 6 });
        page.drawText(j.toString(), { x: width - 15, y: j - 2, size: 6 });
      }
    }

    // vertical lines
    for (let i = 5; i < width; i = i + 5) {
      page.drawLine({ start: { x: i, y: 0 }, end: { x: i, y: height }, color: i % 10 ? lightGrey : i % 50 ? darkGrey : black, opacity, thickness: 1 });
      if (i % 10 === 0 && i % 50 !== 0) {
        page.drawText(i.toString(), { x: i - 3, y: 5, size: 4 });
        page.drawText(i.toString(), { x: i - 3, y: height - 10, size: 4 });
      }
      if (i % 50 === 0) {
        page.drawText(i.toString(), { x: i - 4, y: 8, size: 6 });
        page.drawText(i.toString(), { x: i - 4, y: height - 8, size: 6 });
      }
    }
  }
}
