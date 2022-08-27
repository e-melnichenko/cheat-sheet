export function formatDate(dateStr: string) {
    if(!dateStr) return '-';
//    todo universal format (01.01.0001)
    const date = new Date(dateStr);
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
}
