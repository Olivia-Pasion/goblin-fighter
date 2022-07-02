


export default function createMessageDisplay(root) {
    
    return ({ message }) => {
        
        root.textContent = message;
    };
}