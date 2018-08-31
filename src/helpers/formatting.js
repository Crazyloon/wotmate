export function formatTime(timestamp){
  return timestamp.toLocaleTimeString([], {month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'});
}