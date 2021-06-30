import TimeAgo from "javascript-time-ago";

export const relativeDateFormat = (dt) => {
  const timeAgo = new TimeAgo("en-US");
  return timeAgo.format(dt);
};
