import meow from "meow";

export const cli = meow(
  `
POMODORO ⌛
-----------
Usage
    $ pomodoro [time] [pause] [interval]

    Options
    --time, -t Time in minutes (default: 50)
    --pause, -p Pause in minutes (default: 5)
    --interval, -i Interval in ms (default: 60000)

Examples
    $ pomodoro -t 50 -p 5 -i 60000
`,
  {
    importMeta: import.meta,
    flags: {
      time: {
        type: "number",
        shortFlag: "t",
        default: 50,
      },
      pause: {
        type: "number",
        shortFlag: "p",
        default: 5,
      },
      help: {
        type: "boolean",
        shortFlag: "h",
        default: false,
      },
    },
  },
);
