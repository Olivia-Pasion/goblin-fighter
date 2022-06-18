

export default function createSpillCount(root) {
    
    return ({ spills }) => {
        root.array = spills;
    };
}