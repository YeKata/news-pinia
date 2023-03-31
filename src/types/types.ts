interface list {
  id: string;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comment_count: number;
  type: string;
  url: string;
  domain?: string;
}
interface item {
  title: string;
  content: string;
  comments: string;
}

interface user {
  about: string;
  created: string;
  time: number;
  id: string;
  karma: string;
  points: number;
}

export { item, user, list };
