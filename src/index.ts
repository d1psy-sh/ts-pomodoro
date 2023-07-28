import * as timer from "./timer.js";
import * as args from "./arguments.js";
// let's write a pomodoro timer that should only be a little writing work

async function start() {
  // time: count of minutes
  // pause: count of minutes for pause
  let time = args.cli.flags.time;
  let pause = args.cli.flags.pause;
  if (args.cli.flags.help) {
    args.cli.showHelp();
    return;
  }
  const tm = new timer.Timer(time, pause);
  await tm.start();
}

await start();
