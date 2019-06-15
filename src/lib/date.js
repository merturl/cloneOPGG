const timeStampToDuration = (timestamp) => {
  let difference = Date.now() - timestamp;
  const daysDifference = Math.floor(difference/1000/60/60/24);
  if (daysDifference) {
    return `${daysDifference}일 전`;
  }
  difference -= daysDifference*1000*60*60*24

  const hoursDifference = Math.floor(difference/1000/60/60);
  if (hoursDifference) {
    return `${hoursDifference}시간 전`;
  }
  difference -= hoursDifference*1000*60*60

  const minutesDifference = Math.floor(difference/1000/60);
  if (minutesDifference) {
    return `${minutesDifference}분 전`;
  }
  difference -= minutesDifference*1000*60
  
  const secondsDifference = Math.floor(difference/1000);
  if (secondsDifference) {
    return `${secondsDifference}초 전`;
  }
}

export { timeStampToDuration };
