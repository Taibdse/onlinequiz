export const isEmpty = val => {
    if(val === undefined || val === null || val === false) return true;
    if(typeof val === 'string' && val.trim() === '') return true;
    if(typeof val === 'object' && Object.keys(val).length === 0) return true;
    return false;
}