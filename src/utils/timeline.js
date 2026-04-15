const KEY = "timeline";

export function getTimeline() {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function addTimelineEntry(entry) {
  const data = getTimeline();
  data.unshift(entry);
  localStorage.setItem(KEY, JSON.stringify(data));
}