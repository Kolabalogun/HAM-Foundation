import { Timestamp } from "firebase/firestore";

export default function timeAgo(timestamp: Timestamp) {
  if (timestamp) {
    const createdAt = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6
    );

    const secondsAgo = Math.floor((Date.now() - createdAt.getTime()) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    let counter;
    for (const interval in intervals) {
      counter = Math.floor((secondsAgo / intervals[interval]) as number);
      if (counter > 0) {
        return counter === 1
          ? `${counter} ${interval} ago`
          : `${counter} ${interval}s ago`;
      }
    }

    return "Just now";
  }
}
