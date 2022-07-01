
export default function createHydrated(root) {
    const count = root.querySelector('span');
    
    return ({ hydrated }) => {
        count.textContent = hydrated;
    };
}