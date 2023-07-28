export enum PauseType {
  Work,
  Pause,
}
export class Timer {
  private time: number;
  private pause: number;
  private pauseType: PauseType;

  constructor(time: number, pause: number) {
    this.time = time * 60;
    this.pause = pause * 60;
    // in minutes
    this.pauseType = PauseType.Work;
  }

  private timeout(time: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
      this.displayTime(time);
    });
  }

  private async countdown(time: number) {
    for (time; time >= 0; time--) {
      await this.timeout(time);
    }
  }

  private displayTime(time: number) {
    let intervalNumber = 100 / this.time;
    let progress = "█".repeat(intervalNumber * (this.time - time));
    console.clear();
    if (this.pauseType === PauseType.Work) {
      console.log("\n\n\n\n\tWork:");
    } else {
      console.log("\n\n\n\n\tPause:");
    }
    console.log(
      "\t" +
        progress.padEnd(100, ".") +
        " " +
        intervalNumber * (this.time - time) +
        "%",
    );
  }

  public async start() {
    console.clear();
    this.pauseType = PauseType.Work;
    await this.countdown(this.time);
    this.pauseType = PauseType.Pause;
    await this.countdown(this.pause);
    console.clear();
    console.log("Time is over!\nStart a new cycle!");
  }
}
