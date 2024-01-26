export const createElementButton = (text, type, className) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.type = type;
    button.className = className;
    return button;   
}
export const createElementInput = (type, text, className) => {
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = text;
    input.className = className;
    return input;   
}
