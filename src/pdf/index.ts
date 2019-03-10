import * as JsPDF from 'jspdf';
import stubData from './dummyData';
import { Point, CheckListCategory } from './types';
import { colorRGB, canvasFont, fontSize, drawConsts, drawRectangle, img64 } from './misc';

const DEBUG = false;

class DrawableText {
  ctx: CanvasRenderingContext2D;
  topLeft: Point;
  blockWidth: number;
  text: string;
  textColor: string;
  font: string;
  fontSize: number;
  dividedText: string[];

  constructor(text: string, topLeft: Point, blockWidth: number, ctx: CanvasRenderingContext2D) {
    this.topLeft = topLeft;
    this.blockWidth = blockWidth;
    this.text = text;
    this.ctx = ctx;
    this.font = canvasFont.ITEM;
    this.textColor = colorRGB.BLACK;
    const maxTextWidth = blockWidth - drawConsts.COLUMNS_MARGIN * 2 - drawConsts.CHECKBOX_WIDTH * 2;

    this.dividedText = this.divideTextIntoLines(maxTextWidth);
    // this.textWidth = this.ctx.measureText(this.text).width;
  }

  draw() {
    this.ctx.fillStyle = this.textColor;
    this.ctx.font = this.font;
    this.ctx.fillText(this.text, this.topLeft.x + 10, this.topLeft.y + 10);
  }

  getHeight(): number {
    return this.fontSize * 1.5 + (this.dividedText.length - 1) * this.fontSize;
  }

  drawText(start?: Point) {
    if (DEBUG) {
      this.ctx.strokeStyle = '#FF0000';
      this.ctx.strokeRect(this.topLeft.x, this.topLeft.y, this.blockWidth, this.getHeight());
    }

    this.ctx.fillStyle = this.textColor;
    this.ctx.font = this.font;
    const currentPoint = start || Object.assign({}, this.topLeft);
    this.dividedText.forEach(part => {
      this.ctx.fillText(part, currentPoint.x, currentPoint.y);
      currentPoint.y += this.fontSize;
    });
  }

  divideTextIntoLines(maxWidth: number): Array<string> {
    // todo: set the hugging font all the time you access the canvas
    this.ctx.font = this.font;
    //divideMultiline
    const lines = [''];
    let currentWidth = 0;
    let i = 0;
    const spaceWidth = this.ctx.measureText(' ').width;
    this.text.split(' ').forEach(word => {
      //TODO: check if one word exceedes max width
      let wordWidth = this.ctx.measureText(word).width;
      if (currentWidth + wordWidth + spaceWidth > maxWidth) {
        currentWidth = 0;
        i++;
        lines.push(word);
      } else {
        if (currentWidth) {
          lines[i] += ' ';
          currentWidth++;
        }
        lines[i] += word;
      }
      currentWidth += wordWidth;
    });
    return lines;
  }
}

class ListItem extends DrawableText {
  constructor(text: string, topLeft: Point, blockWidth: number, ctx: CanvasRenderingContext2D) {
    super(text, topLeft, blockWidth, ctx);
    this.fontSize = fontSize.ITEM;
    this.font = canvasFont.ITEM;
  }

  draw(): Point {
    this.ctx.fillStyle = this.textColor;
    this.ctx.strokeStyle = this.textColor;
    this.ctx.font = this.font;
    drawRectangle(
      this.ctx,
      {
        x: this.topLeft.x + drawConsts.COLUMNS_MARGIN,
        y: this.topLeft.y + drawConsts.LIST_ITEM_PADDING,
      },
      this.fontSize,
      this.fontSize,
    );
    this.drawText({
      x: this.topLeft.x + drawConsts.COLUMNS_MARGIN + this.fontSize * 1.5,
      y: this.topLeft.y + this.fontSize + drawConsts.LIST_ITEM_PADDING,
    });
    // this.ctx.fillText(this.text, this.topLeft.x + this.fontSize + 10, this.topLeft.y + 10);
    return { x: this.topLeft.x, y: this.topLeft.y + this.fontSize * 1.5 };
  }
}

class ListHeader extends DrawableText {
  constructor(text: string, topLeft: Point, blockWidth: number, ctx: CanvasRenderingContext2D) {
    super(text + ':', topLeft, blockWidth, ctx);
    this.fontSize = fontSize.HEADER;
    this.font = canvasFont.HEADER;
  }

  draw(): Point {
    this.ctx.fillStyle = this.textColor;
    this.ctx.font = this.font;
    this.drawText({
      x: this.topLeft.x + drawConsts.COLUMNS_MARGIN,
      y: this.topLeft.y + this.fontSize,
    });
    return { x: this.topLeft.x, y: this.topLeft.y + this.fontSize * 1.5 };
  }
}

class Drawer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  columns: number;
  columnWidth: number;
  pdf: JsPDF;
  checkList: CheckListCategory[];

  constructor(canvasId: string, checkList: CheckListCategory[], columns?: number) {
    const element = document.getElementById(canvasId);
    if (!(element instanceof HTMLCanvasElement)) {
      return;
    }
    this.canvas = element;
    this.ctx = this.canvas.getContext('2d');
    this.columns = columns || 3;
    this.columnWidth = this.canvas.width / this.columns; // math.round?
    this.checkList = checkList;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  calcItemsTotalHeight() {
    let height = 0;
    this.checkList.forEach(block => {
      height += fontSize.HEADER * 1.5;
      height += block.items.length * fontSize.ITEM * 1.5;
    });
    return height;
  }

  relateCategoriesToColumns(): CategoryInfo[] {
    const list: CategoryInfo[] = [];
    this.checkList.forEach(category => {
      const obj = {
        name: category.name,
        listItems: [],
        height: 0,
        header: new ListHeader(category.name, { x: 0, y: 0 }, this.columnWidth, this.ctx),
      } as CategoryInfo;
      category.items.forEach(item => {
        const listItem = new ListItem(item, { x: 0, y: 0 }, this.columnWidth, this.ctx);
        obj.height += listItem.getHeight() + obj.header.getHeight();
        obj.listItems.push(listItem);
      });
      list.push(obj);
    });
    list.sort((a, b) => (a.height < b.height ? 1 : -1));
    return list;
  }

  beautify(): Promise<null> {
    return new Promise(resolve => {
      this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
      const margin = 15;
      const imgSize = drawConsts.LOGO_HEIGHT - 2 * margin;
      const img = new Image();
      img.onload = () => {
        this.ctx.drawImage(img, margin, margin, imgSize, imgSize);
        resolve();
      };
      img.src = img64.LOGO;
      this.ctx.font = `${imgSize}px Roboto`;
      this.ctx.fillText(
        'TRAVEL CHECKLIST',
        2 * margin + imgSize,
        margin + imgSize,
        this.canvas.width - imgSize - 3 * margin,
      );
    });
  }

  draw(): Promise<null> {
    this.clearCanvas();
    const startPoints: { [key: number]: Point } = {};
    for (let i = 0; i < this.columns; i++) {
      startPoints[i] = {
        x: 0 + i * this.columnWidth,
        y: drawConsts.LOGO_HEIGHT + drawConsts.LIST_ITEM_PADDING,
      };
    }
    const list = this.relateCategoriesToColumns();
    for (let j = 0; j < list.length; j++) {
      const category = list[j];
      const i = j % this.columns;
      category.header.topLeft = startPoints[i];
      category.header.draw();
      startPoints[i].y += category.header.getHeight();
      category.listItems.forEach(listItem => {
        listItem.topLeft = startPoints[i];
        listItem.draw();
        startPoints[i].y += listItem.getHeight();
      });
      startPoints[i].y += drawConsts.BLOCK_MARGIN;
    }
    return this.beautify();
  }

  draw_naive() {
    this.clearCanvas();
    let currentPosition: Point = { x: 0, y: 0 };
    this.checkList.forEach(category => {
      const header = new ListHeader(category.name, currentPosition, this.columnWidth, this.ctx);
      header.draw();
      currentPosition.y += header.getHeight();
      category.items.forEach(item => {
        const listItem = new ListItem(item, currentPosition, this.columnWidth, this.ctx);
        listItem.draw();
        currentPosition.y += listItem.getHeight();
      });
      currentPosition.y += drawConsts.BLOCK_MARGIN;
    });
  }

  generatePDF(): Promise<void> {
    return this.draw().then(resolve => {
      const image = this.canvas.toDataURL('image/jpg', 1);
      this.pdf = new JsPDF('p', 'mm');
      this.pdf.addImage(image, 'JPG', 0, 0);
      const blob = this.pdf.output('blob');
      window.open(URL.createObjectURL(blob));
    });
  }

  convertPxToMM(px: number): number {
    return Math.floor(px * 0.264583);
  }
}

interface CategoryInfo {
  name: string;
  listItems: ListItem[];
  height: number;
  header: ListHeader;
}

export default Drawer;

window.onload = () => {
  const drawer = new Drawer('canvas', stubData, 4);
  drawer.draw();
  drawer.relateCategoriesToColumns();
  const label = new ListItem(
    'ullamco dolor cillum ullamco dolor cillum',
    { x: 0, y: 0 },
    198.5,
    drawer.ctx,
  );
};
