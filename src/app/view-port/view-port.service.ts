import { Injectable, Output, EventEmitter } from "@angular/core";
import { IConfig } from "../iconfig";
import { Subject } from "rxjs";

@Injectable()
export class ViewPortService {
  private config: IConfig;
  private screenSize: string;
  private screenSizes: Array<string> = ["small", "medium", "large"];
  @Output() update = new EventEmitter<any>();
  constructor() {}

  onLoad(config: IConfig): void {
    this.config = config;
  }

  public setScreenWidth(width: number) {
    if (width < this.config.medium && this.screenSize !== this.screenSizes[0]) {
      this.screenSize = this.screenSizes[0];
      this.update.emit(null);
    }
    if (
      width > this.config.medium &&
      width < this.config.large &&
      this.screenSize !== this.screenSizes[1]
    ) {
      this.screenSize = this.screenSizes[1];
      this.update.emit(null);
    }
    if (width > this.config.large && this.screenSize !== this.screenSizes[2]) {
      this.screenSize = this.screenSizes[2];
      this.update.emit(null);
    }
  }

  public isTheSameScreenSize(size): boolean {
    return this.screenSize === size;
  }
}
