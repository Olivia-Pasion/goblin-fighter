

export default function createHydratedCount(root) {
    
    return ({ hydrated }) => {
        root.array = hydrated;
    };
}