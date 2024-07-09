export const removeFeat = (title: string) => {
    if (!title) {
        return '';
    }

    const index = title.indexOf('(');
    if (index !== -1) {
        return title.slice(0, index).trim();
    }
    return title;
};