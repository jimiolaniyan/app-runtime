export const joinPath = (...parts: string[]): string => {
    return parts.map(part => part.replace(/^\/+|\/+$/g, '')).join('/')
}
