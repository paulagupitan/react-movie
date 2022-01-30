export function dateFormat(string) {
    const date = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], date);
}

export function minToHrMin(time) {
    let hour = Math.floor(time / 60);
    let min = time % 60;
    let timeInHrMin = `${hour}h ${min}m`;

    return timeInHrMin;
}