
export default function createSpillCount(root) {
    const count = root.querySelector('span');
    
    return ({ spills }) => {
        count.textContent = spills;
    };
}