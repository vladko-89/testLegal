export const cutString = (str: string): string => {
    return str.split(' ').slice(0, 1).join();
}