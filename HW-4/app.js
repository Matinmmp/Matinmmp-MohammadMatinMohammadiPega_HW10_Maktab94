let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};


function createTree(data) {
    const list = document.createElement('ul');
    for (const [key, value] of Object.entries(data)) {
        const li = document.createElement('li');
        li.textContent = key;
        li.append(createTree(value));
        list.append(li);
    }
    return list;
}
document.body.append(d(data));
